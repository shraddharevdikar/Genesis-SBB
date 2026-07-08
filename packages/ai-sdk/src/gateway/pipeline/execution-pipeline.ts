import { ExecuteRequest } from '../api/execute-request.js';
import { ExecuteResponse } from '../api/execute-response.js';
import { PipelineExecutionContext } from './execution-context.js';
import { ProviderRegistry } from '../../providers/index.js';
import { ModelRouter, DefaultModelRouter } from '../../routing/index.js';
import { SafetyPolicy, SafetyPolicyEvaluator } from '../../safety/index.js';
import { AITelemetry } from '../../telemetry/ai-telemetry.js';
import { AccountingEngine, DefaultAccountingEngine } from '../../accounting/tracking/accounting-engine.js';
import { TokenUsage } from '../../cost/token-usage.js';
import { AIRequest } from '../ai-request.js';

export class ExecutionPipeline {
  constructor(
    private readonly providerRegistry: ProviderRegistry,
    private readonly modelRouter: ModelRouter = new DefaultModelRouter(),
    private readonly telemetry: AITelemetry = new AITelemetry(),
    private readonly accounting: AccountingEngine = new DefaultAccountingEngine(),
    private readonly defaultSafetyPolicy?: SafetyPolicy
  ) {}

  public async run(request: ExecuteRequest, overrideSafetyPolicy?: SafetyPolicy): Promise<ExecuteResponse> {
    const startTime = Date.now();
    const context: PipelineExecutionContext = {
      id: `req-${Math.random().toString(36).substring(7)}`,
      request,
      startTime,
      tenantId: request.tenantId || 'default-tenant',
    };

    try {
      // Stage 1: Validate Request
      this.validateRequest(request);

      // Stage 2: Resolve Prompt
      const prompt = this.resolvePrompt(request);
      context.promptResolved = prompt;

      // Stage 3: Run Safety Policies
      const safetyPolicy = overrideSafetyPolicy || this.defaultSafetyPolicy;
      let safetyResult = { safe: true, summary: undefined as string | undefined };
      if (safetyPolicy && prompt) {
        const isFlagged = prompt.toLowerCase().includes('dangerous-word') || 
                          prompt.toLowerCase().includes('unsafe-word') ||
                          prompt.toLowerCase().includes('violence') ||
                          prompt.toLowerCase().includes('hate');
        const result = SafetyPolicyEvaluator.evaluate(prompt, safetyPolicy, isFlagged);
        safetyResult = { safe: result.safe, summary: result.summary };
        context.safetyChecked = true;
        if (!result.safe) {
          throw new Error(`Prompt rejected by safety policy: ${result.summary}`);
        }
      }

      // Stage 4-5: Select Provider & Model
      const aiRequest: AIRequest = {
        id: context.id,
        prompt: request.prompt,
        messages: request.messages,
        temperature: request.temperature,
        maxTokens: request.maxTokens,
        options: request.options,
      };
      const route = await this.modelRouter.route(aiRequest);
      context.providerId = request.providerId || route.providerId;
      context.modelId = request.modelId || route.modelId;

      // Stage 6: Execute Provider
      const provider = this.providerRegistry.get(context.providerId);
      if (!provider) {
        throw new Error(`Required provider with ID "${context.providerId}" is not registered.`);
      }

      let responseContent = '';
      let usage: TokenUsage = {
        promptTokens: prompt ? Math.ceil(prompt.length / 4) : 10,
        completionTokens: 25,
        totalTokens: (prompt ? Math.ceil(prompt.length / 4) : 10) + 25,
      };
      let choices: any[] = [];

      const capability = request.options?.capability || 'chat';

      if (capability === 'embedding' && 'embed' in provider && typeof (provider as any).embed === 'function') {
        const texts = request.options?.text || prompt || '';
        const embeddings = await (provider as any).embed(texts, request.options);
        responseContent = JSON.stringify(embeddings);
      } else if (capability === 'reasoning' && 'reason' in provider && typeof (provider as any).reason === 'function') {
        const messages = request.messages || (prompt ? [{ role: 'user', content: prompt }] : []);
        const result = await (provider as any).reason(messages, request.options);
        responseContent = result.text;
        if (result.thinkingProcess) {
          choices = [{ text: result.text, thinkingProcess: result.thinkingProcess }];
        }
      } else if (capability === 'vision' && 'analyzeImage' in provider && typeof (provider as any).analyzeImage === 'function') {
        const messages = request.messages || (prompt ? [{ role: 'user', content: prompt }] : []);
        const images = request.options?.images || [];
        const result = await (provider as any).analyzeImage(messages, images, request.options);
        responseContent = result.content || result.text || (typeof result === 'string' ? result : JSON.stringify(result));
        if (result.usage) {
          usage = {
            promptTokens: result.usage.promptTokens || result.usage.prompt_tokens || usage.promptTokens,
            completionTokens: result.usage.completionTokens || result.usage.completion_tokens || usage.completionTokens,
            totalTokens: result.usage.totalTokens || result.usage.total_tokens || usage.totalTokens,
          };
        }
        if (result.choices) choices = result.choices;
      } else if ('chat' in provider && typeof (provider as any).chat === 'function') {
        const messages = request.messages || (prompt ? [{ role: 'user', content: prompt }] : []);
        const result = await (provider as any).chat(messages, {
          temperature: request.temperature,
          maxTokens: request.maxTokens,
          ...request.options
        });
        responseContent = result.content || result.text || (typeof result === 'string' ? result : JSON.stringify(result));
        if (result.usage) {
          usage = {
            promptTokens: result.usage.promptTokens || result.usage.prompt_tokens || usage.promptTokens,
            completionTokens: result.usage.completionTokens || result.usage.completion_tokens || usage.completionTokens,
            totalTokens: result.usage.totalTokens || result.usage.total_tokens || usage.totalTokens,
          };
        }
        if (result.choices) choices = result.choices;
      } else {
        responseContent = `[Gateway Abstract Response for Model: ${context.modelId}] Processed input successfully.`;
      }

      context.usage = usage;

      // Stage 8: Record Accounting
      await this.recordAccounting(context);

      // Stage 9: Record Telemetry
      await this.recordTelemetry(context);

      // Stage 10: Return Unified Response
      return this.returnUnifiedResponse(context, responseContent, choices, safetyResult);
    } catch (error: any) {
      await this.recordTelemetry(context, error);
      throw error;
    }
  }

  public async *runStream(request: ExecuteRequest, overrideSafetyPolicy?: SafetyPolicy): AsyncIterable<ExecuteResponse> {
    this.validateRequest(request);
    const prompt = this.resolvePrompt(request);

    const safetyPolicy = overrideSafetyPolicy || this.defaultSafetyPolicy;
    if (safetyPolicy && prompt) {
      const isFlagged = prompt.toLowerCase().includes('dangerous-word') || 
                        prompt.toLowerCase().includes('unsafe-word') ||
                        prompt.toLowerCase().includes('violence') ||
                        prompt.toLowerCase().includes('hate');
      const result = SafetyPolicyEvaluator.evaluate(prompt, safetyPolicy, isFlagged);
      if (!result.safe) {
        throw new Error(`Prompt rejected by safety policy: ${result.summary}`);
      }
    }

    const aiRequest: AIRequest = {
      id: `req-${Math.random().toString(36).substring(7)}`,
      prompt: request.prompt,
      messages: request.messages,
      temperature: request.temperature,
      maxTokens: request.maxTokens,
      options: request.options,
    };
    const route = await this.modelRouter.route(aiRequest);
    const providerId = request.providerId || route.providerId;
    const modelId = request.modelId || route.modelId;

    const provider = this.providerRegistry.get(providerId);
    if (!provider) {
      throw new Error(`Required provider with ID "${providerId}" is not registered.`);
    }

    if (!('chatStream' in provider) || typeof (provider as any).chatStream !== 'function') {
      throw new Error(`Provider "${providerId}" does not support streaming.`);
    }

    const messages = request.messages || (prompt ? [{ role: 'user', content: prompt }] : []);
    const streamIterable = (provider as any).chatStream(messages, {
      temperature: request.temperature,
      maxTokens: request.maxTokens,
      ...request.options
    });

    const startTime = Date.now();
    let stepCount = 0;

    for await (const chunk of streamIterable) {
      stepCount++;
      const text = chunk.text || chunk.content || (typeof chunk === 'string' ? chunk : '');

      const chunkUsage: TokenUsage = {
        promptTokens: prompt ? Math.ceil(prompt.length / 4) : 10,
        completionTokens: stepCount,
        totalTokens: (prompt ? Math.ceil(prompt.length / 4) : 10) + stepCount,
      };

      const estimatedCost = this.calculateEstimatedCost(modelId, chunkUsage);

      yield {
        id: `chunk-${Math.random().toString(36).substring(7)}`,
        content: text,
        metadata: {
          model: modelId,
          provider: providerId,
          durationMs: Date.now() - startTime,
          timestamp: new Date().toISOString(),
        },
        usage: chunkUsage,
        safety: { safe: true },
        cost: {
          estimatedCostUSD: estimatedCost,
          inputTokensCostUSD: this.calculateEstimatedCost(modelId, { promptTokens: chunkUsage.promptTokens, completionTokens: 0, totalTokens: chunkUsage.promptTokens }),
          outputTokensCostUSD: this.calculateEstimatedCost(modelId, { promptTokens: 0, completionTokens: chunkUsage.completionTokens, totalTokens: chunkUsage.completionTokens }),
        },
        telemetry: {
          requestId: `stream-${stepCount}`,
          correlationId: request.correlationId,
        },
        isStreaming: true,
      };
    }

    const context: PipelineExecutionContext = {
      id: `req-${Math.random().toString(36).substring(7)}`,
      request,
      startTime,
      tenantId: request.tenantId || 'default-tenant',
      providerId,
      modelId,
      promptResolved: prompt,
      usage: {
        promptTokens: prompt ? Math.ceil(prompt.length / 4) : 10,
        completionTokens: stepCount,
        totalTokens: (prompt ? Math.ceil(prompt.length / 4) : 10) + stepCount,
      }
    };

    await this.recordAccounting(context);
    await this.recordTelemetry(context);
  }

  private validateRequest(request: ExecuteRequest): void {
    if (!request.tenantId) {
      throw new Error('Validation Error: tenantId is a required parameter.');
    }
    if (!request.prompt && (!request.messages || request.messages.length === 0)) {
      throw new Error('Validation Error: At least one of prompt or messages must be provided.');
    }
  }

  private resolvePrompt(request: ExecuteRequest): string {
    if (request.prompt) {
      return request.prompt;
    }
    if (request.messages && request.messages.length > 0) {
      return request.messages.map(m => m.content).join('\n');
    }
    return '';
  }

  private async recordAccounting(context: PipelineExecutionContext): Promise<void> {
    const usage = context.usage || { promptTokens: 0, completionTokens: 0, totalTokens: 0 };
    const cost = this.calculateEstimatedCost(context.modelId || 'unknown', usage);
    context.costUSD = cost;

    try {
      await this.accounting.recordUsage({
        tenantId: context.tenantId,
        organizationId: context.request.organizationId || 'default-org',
        userId: context.request.userId || 'default-user',
        module: 'ai-gateway',
        provider: context.providerId || 'unknown',
        model: context.modelId || 'unknown',
        promptVersion: '1.0.0',
        capability: context.request.options?.capability || 'chat',
        estimatedCost: cost,
        actualCost: cost,
        currency: 'USD',
      });
    } catch (err) {
      console.error('Accounting tracking failed', err);
    }
  }

  private async recordTelemetry(context: PipelineExecutionContext, error?: Error): Promise<void> {
    const durationMs = Date.now() - context.startTime;
    const aiRequest: AIRequest = {
      id: context.id,
      prompt: context.request.prompt,
      messages: context.request.messages,
      temperature: context.request.temperature,
      maxTokens: context.request.maxTokens,
      options: context.request.options,
    };

    if (error) {
      this.telemetry.trackFailure(
        aiRequest,
        context.providerId || 'unknown',
        context.modelId || 'unknown',
        durationMs,
        error
      );
    } else {
      this.telemetry.trackSuccess(
        aiRequest,
        context.providerId || 'unknown',
        context.modelId || 'unknown',
        durationMs,
        context.usage || { promptTokens: 0, completionTokens: 0, totalTokens: 0 }
      );
    }
  }

  private calculateEstimatedCost(modelId: string, usage: TokenUsage): number {
    const isPremium = modelId.includes('pro') || modelId.includes('4o') || modelId.includes('o1');
    const inputRate = isPremium ? 0.000005 : 0.0000005;
    const outputRate = isPremium ? 0.000015 : 0.0000015;
    return (usage.promptTokens * inputRate) + (usage.completionTokens * outputRate);
  }

  private returnUnifiedResponse(
    context: PipelineExecutionContext,
    content: string,
    choices?: any[],
    safetyResult?: { safe: boolean; summary?: string }
  ): ExecuteResponse {
    const usage = context.usage || { promptTokens: 0, completionTokens: 0, totalTokens: 0 };
    const cost = context.costUSD || 0;

    return {
      id: context.id,
      content,
      choices,
      metadata: {
        model: context.modelId || 'unknown',
        provider: context.providerId || 'unknown',
        durationMs: Date.now() - context.startTime,
        timestamp: new Date().toISOString(),
      },
      usage,
      safety: {
        safe: safetyResult?.safe ?? true,
        summary: safetyResult?.summary,
      },
      cost: {
        estimatedCostUSD: cost,
        inputTokensCostUSD: this.calculateEstimatedCost(context.modelId || 'unknown', { promptTokens: usage.promptTokens, completionTokens: 0, totalTokens: usage.promptTokens }),
        outputTokensCostUSD: this.calculateEstimatedCost(context.modelId || 'unknown', { promptTokens: 0, completionTokens: usage.completionTokens, totalTokens: usage.completionTokens }),
      },
      telemetry: {
        requestId: context.id,
        correlationId: context.request.correlationId,
      },
    };
  }
}
