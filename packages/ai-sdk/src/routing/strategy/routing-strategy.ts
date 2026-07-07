import { AIRequest } from '../../gateway/ai-request.js';
import { RoutingDecision } from '../router/routing-decision.js';
import { RoutingPolicy } from '../policy/routing-policy.js';

export interface RoutingStrategy {
  readonly name: string;
  readonly description: string;
  decide(request: AIRequest, policy?: RoutingPolicy): Promise<RoutingDecision>;
}
