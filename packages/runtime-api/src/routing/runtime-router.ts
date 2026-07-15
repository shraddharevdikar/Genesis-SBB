import { RuntimeRequest } from '../core/runtime-request.js';
import { RuntimeResponse } from '../core/runtime-response.js';

export interface RuntimeRouter {
  /**
   * Routes a verified runtime request to the resolved service endpoint.
   */
  routeRequest(tenantId: string, request: RuntimeRequest): Promise<RuntimeResponse>;

  /**
   * Registers a route path map to a specified handler service.
   */
  registerRoute(routePath: string, serviceIdentifier: string): void;
}
