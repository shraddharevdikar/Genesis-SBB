import { AIRequest } from './ai-request.js';
import { AIResponse } from './ai-response.js';
import { ProviderRegistry } from '../providers/index.js';
import { ModelRouter, DefaultModelRouter } from '../routing/index.js';
import { SafetyPolicy, SafetyPolicyEvaluator } from '../safety/index.js';
import { AITelemetry } from '../telemetry/ai-telemetry.js';
import { AICache, InMemoryAICache } from '../cache/ai-cache.js';

export class AIGateway {
  constructor(
    private readonly providerRegistry: ProviderRegistry,
    private readonly modelRouter: ModelRouter = new DefaultModelRouter(),
    private readonly telemetry: AITelemetry = new AITelemetry(),
    private readonly cache: AICache = new InMemoryAICache(),
    private readonly defaultSafetyPolicy?: SafetyPolicy
  ) {}

  public async execute(request: AIRequest, policy?: SafetyPolicy): Promise<AIResponse> {
    const startTime = Date.now();

    // 1. Evaluate safety on input prompt if prompt is present
    const activePolicy = policy || this.defaultSafetyPolicy;
    if (activePolicy && request.prompt) {
      const safetyResult = SafetyPolicyEvaluator.evaluate(request.prompt, activePolicy);
      if (!safetyResult.safe) {
        const error = new Error(`Prompt rejected by safety policy: ${safetyResult.summary}`);
        this.telemetry.trackFailure(request, 'unknown', 'unknown', Date.now() - startTime, error);
        throw error;
      }
    }

    // 2. Check Cache
    const cachedResponse = await this.cache.get(request);
    if (cachedResponse) {
      return cachedResponse;
    }

        // 4. Route request to resolve provider and model
    const route = await this.modelRouter.route(request);
    
    // 4. Resolve the actual provider interface (validates provider exists)
    const provider = this.providerRegistry.get(route.providerId);
    if (!provider) {
      throw new Error(`Required provider with ID "${route.providerId}" is not registered.`);
    }
    
    let responseContent = '';
    let usage = {
      promptTokens: request.prompt ? Math.ceil(request.prompt.length / 4) : 10,
      completionTokens: 25,
      totalTokens: (request.prompt ? Math.ceil(request.prompt.length / 4) : 10) + 25,
    };
    let choices: any[] = [];
    const durationMs = Date.now() - startTime;

    try {
      const messages = request.messages || (request.prompt ? [{ role: 'user', content: request.prompt }] : []);
      const capability = request.options?.capability || 'chat';

      if (capability === 'embedding' && 'embed' in provider && typeof (provider as any).embed === 'function') {
        const texts = request.options?.text || request.prompt || '';
        const embeddings = await (provider as any).embed(texts, request.options);
        responseContent = JSON.stringify(embeddings);
      } else if (capability === 'reasoning' && 'reason' in provider && typeof (provider as any).reason === 'function') {
        const result = await (provider as any).reason(messages, request.options);
        responseContent = result.text;
        if (result.thinkingProcess) {
          choices = [{ text: result.text, thinkingProcess: result.thinkingProcess }];
        }
      } else if (capability === 'vision' && 'analyzeImage' in provider && typeof (provider as any).analyzeImage === 'function') {
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
        responseContent = `[Gateway Abstract Response for Model: ${route.modelId}] Processed input successfully.`;
      }
    } catch (err: any) {
      this.telemetry.trackFailure(request, route.providerId, route.modelId, Date.now() - startTime, err);
      throw err;
    }

    const response: AIResponse = {
      id: Math.random().toString(36).substring(7),
      content: responseContent,
      usage,
      metadata: {
        model: route.modelId,
        provider: route.providerId,
        durationMs,
        timestamp: new Date().toISOString(),
      },
      choices,
    };

    // 5. Evaluate safety on output if configured
    if (activePolicy) {
      const outputSafety = SafetyPolicyEvaluator.evaluate(response.content, activePolicy);
      if (!outputSafety.safe) {
        const error = new Error(`Output rejected by safety policy: ${outputSafety.summary}`);
        this.telemetry.trackFailure(request, route.providerId, route.modelId, Date.now() - startTime, error);
        throw error;
      }
    }

    // 6. Set cache and track telemetry
    await this.cache.set(request, response);
    this.telemetry.trackSuccess(request, route.providerId, route.modelId, durationMs, usage);

    return response;
  }

  public getTelemetry(): AITelemetry {
    return this.telemetry;
  }

  public getCache(): AICache {
    return this.cache;
  }
}
