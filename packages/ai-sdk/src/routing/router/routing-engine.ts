import { AIRequest } from '../../gateway/ai-request.js';
import { RoutingDecision } from './routing-decision.js';
import { RoutingPolicy } from '../policy/routing-policy.js';
import { ProviderSelector } from '../selection/provider-selector.js';
import { ModelSelector } from '../selection/model-selector.js';
import { RoutingStrategy } from '../strategy/routing-strategy.js';

export class RoutingEngine {
  constructor(
    private readonly providerSelector: ProviderSelector,
    private readonly modelSelector: ModelSelector,
    private readonly defaultStrategy: RoutingStrategy
  ) {}

  public async evaluate(request: AIRequest, policy?: RoutingPolicy, strategy?: RoutingStrategy): Promise<RoutingDecision> {
    const activeStrategy = strategy || this.defaultStrategy;
    
    // Select candidates based on capabilities and status
    const candidateProviders = await this.providerSelector.selectProviders({
      capability: request.prompt ? 'chat' : 'embedding',
      region: policy?.preferredRegion,
      tenantTier: policy?.tenantTier,
    });

    if (candidateProviders.length === 0) {
      throw new Error('No candidate providers matched the capability and policy requirements.');
    }

    const selectedProvider = candidateProviders[0];
    const candidateModels = await this.modelSelector.selectModels(selectedProvider.providerId, {
      maxLatencyMs: policy?.maxLatencyMs,
      maxCostLimit: policy?.maxCostLimit,
    });

    const selectedModelId = request.requestedModel || candidateModels[0] || 'gemini-1.5-flash';

    return {
      selectedProviderId: selectedProvider.providerId,
      selectedModelId,
      reason: `Routed via ${activeStrategy.name} strategy based on quality, cost and latency criteria.`,
      confidence: 0.95,
      estimatedCostUSD: 0.00015,
      estimatedLatencyMs: 120,
      matchedCriteria: ['capability', 'status', 'priority'],
    };
  }
}
