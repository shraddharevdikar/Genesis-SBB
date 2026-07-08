import { ExecuteRequest } from './execute-request.js';
import { ExecuteResponse } from './execute-response.js';

export interface AIGatewayAPI {
  execute(request: ExecuteRequest): Promise<ExecuteResponse>;
  stream(request: ExecuteRequest): Promise<AsyncIterable<ExecuteResponse>>;
  estimateCost(request: ExecuteRequest): Promise<number>;
  validate(request: ExecuteRequest): Promise<{ valid: boolean; errors?: string[] }>;
  getCapabilities(providerId?: string): Promise<string[]>;
}
