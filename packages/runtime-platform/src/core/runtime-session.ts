import { RuntimeSessionId } from '../identity/runtime-session-id.js';

export interface RuntimeSession {
  readonly sessionId: RuntimeSessionId;
  readonly tenantId: string;
  readonly authenticatedRoleId: string;
  readonly activePermissions: string[];
  readonly requestedAt: Date;
  readonly expiresAt: Date;
  readonly status: 'ACTIVE' | 'EXPIRED' | 'REVOKED';
}
