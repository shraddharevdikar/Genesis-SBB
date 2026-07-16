import { ApiContext } from '../core/api-context.js';

export interface AuthenticationContract {
  readonly authProviderId: string;
  authenticateClient(
    credentialTokenString: string,
    context: ApiContext
  ): Promise<{ readonly isAuthenticated: boolean; readonly participantId?: string }>;
}
