import { ApiSessionId } from '../identity/api-session-id.js';

export interface ApiSession {
  readonly sessionId: ApiSessionId;
  readonly tenantId: string;
  readonly authenticatedParticipantId: string;
  readonly clientApplicationCode: string;
  readonly assignedCapabilitiesList: string[];
  readonly establishedAt: Date;
  readonly lastActivityAt: Date;
  readonly sessionExpiresAt: Date;
}
