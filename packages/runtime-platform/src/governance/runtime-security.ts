import { RuntimeSession } from '../core/runtime-session.js';
import { ExecutionRequest } from '../execution/execution-request.js';

export interface RuntimeSecurity {
  /**
   * Validates if the request contains valid authentication context, signature, or token.
   */
  authenticate(
    tenantId: string,
    token: string
  ): Promise<RuntimeSession>;

  /**
   * Authorizes if a verified session possesses appropriate roles to execute the request.
   */
  authorize(
    session: RuntimeSession,
    request: ExecutionRequest
  ): Promise<boolean>;

  /**
   * Asserts tenant separation guidelines across execution spaces.
   */
  verifyTenantIsolation(
    tenantIdA: string,
    tenantIdB: string
  ): boolean;
}
