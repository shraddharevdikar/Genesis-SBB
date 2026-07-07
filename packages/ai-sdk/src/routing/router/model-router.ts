import { AIRequest } from '../../gateway/ai-request.js';
import { RoutingPolicy } from '../policy/routing-policy.js';

export interface RouteResult {
  readonly providerId: string;
  readonly modelId: string;
}

export interface ModelRouter {
  route(request: AIRequest, policy?: RoutingPolicy): Promise<RouteResult>;
}

export class DefaultModelRouter implements ModelRouter {
  public async route(request: AIRequest, policy?: RoutingPolicy): Promise<RouteResult> {
    return {
      providerId: request.requestedProvider || 'google-gemini',
      modelId: request.requestedModel || 'gemini-1.5-flash',
    };
  }
}
