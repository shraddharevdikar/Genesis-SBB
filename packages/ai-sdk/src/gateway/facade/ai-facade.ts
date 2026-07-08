import { AIGatewayAPI } from '../api/ai-gateway-api.js';
import { ExecuteRequest } from '../api/execute-request.js';
import { ExecuteResponse } from '../api/execute-response.js';
import { ExecutionPipeline } from '../pipeline/execution-pipeline.js';
import { ProviderRegistry } from '../../providers/index.js';
import { ModelRouter } from '../../routing/index.js';
import { SafetyPolicy } from '../../safety/index.js';
import { AITelemetry } from '../../telemetry/ai-telemetry.js';
import { AccountingEngine } from '../../accounting/tracking/accounting-engine.js';

export class AIFacade implements AIGatewayAPI {
  private readonly pipeline: ExecutionPipeline;

  constructor(
    private readonly providerRegistry: ProviderRegistry,
    private readonly modelRouter?: ModelRouter,
    private readonly telemetry?: AITelemetry,
    private readonly accounting?: AccountingEngine,
    private readonly defaultSafetyPolicy?: SafetyPolicy
  ) {
    this.pipeline = new ExecutionPipeline(
      providerRegistry,
      modelRouter,
      telemetry,
      accounting,
      defaultSafetyPolicy
    );
  }

  public async execute(request: ExecuteRequest): Promise<ExecuteResponse> {
    return this.pipeline.run(request);
  }

  public async stream(request: ExecuteRequest): Promise<AsyncIterable<ExecuteResponse>> {
    return this.pipeline.runStream(request);
  }

  public async estimateCost(request: ExecuteRequest): Promise<number> {
    const prompt = request.prompt || (request.messages ? request.messages.map(m => m.content).join('\n') : '');
    const promptTokens = prompt ? Math.ceil(prompt.length / 4) : 10;
    const completionTokens = request.maxTokens || 100;
    
    const isPremium = (request.modelId || '').includes('pro') || (request.modelId || '').includes('4o') || (request.modelId || '').includes('o1');
    const inputRate = isPremium ? 0.000005 : 0.0000005;
    const outputRate = isPremium ? 0.000015 : 0.0000015;
    
    return (promptTokens * inputRate) + (completionTokens * outputRate);
  }

  public async validate(request: ExecuteRequest): Promise<{ valid: boolean; errors?: string[] }> {
    const errors: string[] = [];
    if (!request.tenantId) {
      errors.push('tenantId is a required parameter.');
    }
    if (!request.prompt && (!request.messages || request.messages.length === 0)) {
      errors.push('At least one of prompt or messages must be provided.');
    }
    return {
      valid: errors.length === 0,
      errors: errors.length > 0 ? errors : undefined,
    };
  }

  public async getCapabilities(providerId?: string): Promise<string[]> {
    if (providerId) {
      const provider = this.providerRegistry.get(providerId);
      return provider ? provider.metadata.capabilities : [];
    }
    const capabilities = new Set<string>();
    for (const provider of this.providerRegistry.list()) {
      for (const cap of provider.metadata.capabilities) {
        capabilities.add(cap);
      }
    }
    return Array.from(capabilities);
  }
}
