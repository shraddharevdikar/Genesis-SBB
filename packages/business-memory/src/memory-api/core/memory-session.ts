import { SessionId } from '../identity/session-id.js';

export interface MemorySession {
  readonly sessionId: SessionId;
  readonly tenantId: string;
  readonly authenticatedRoleId: string;
  readonly activeClearanceLevel: 'PUBLIC' | 'RESTRICTED' | 'CONFIDENTIAL' | 'SECRET';
  readonly requestCount: number;
  readonly createdAt: Date;
  readonly expiresAt: Date;
  readonly status: 'AUTHENTICATED' | 'EXPIRED' | 'TERMINATED';
}
