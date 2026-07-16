import { ApiContext } from '../core/api-context.js';

export interface AuthorizationContract {
  readonly authzProviderId: string;
  checkPermission(
    participantId: string,
    requestedActionCode: string,
    targetResourceId: string,
    context: ApiContext
  ): Promise<{ readonly isAuthorized: boolean; readonly appliedPolicyCode?: string }>;
}
