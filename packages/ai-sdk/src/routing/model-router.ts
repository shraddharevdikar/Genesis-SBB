import { AIRequest } from '../gateway/ai-request.js';
import { RoutingPolicy } from './routing-policy.js';

export interface RouteResult {
  readonly providerId: string;
  readonly modelId: string;
}

export interface ModelRouter {
  route(request: AIRequest, policy?: RoutingPolicy): Promise<RouteResult>;
}

export class DefaultModelRouter implements ModelRouter {
  public async route(request: AIRequest, policy?: RoutingPolicy): Promise<RouteResult> {
    // Return default mapping in absence of active routing logic
    return {
      providerId: request.requestedProvider || 'google-gemini',
      modelId: request.requestedModel || 'gemini-1.5-flash',
    };
  }
}
