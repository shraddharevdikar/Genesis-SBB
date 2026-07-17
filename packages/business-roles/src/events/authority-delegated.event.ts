import { AuthorityId } from '../identity/authority-id.js';

export interface AuthorityDelegatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly granterParticipantId: string;
  readonly receiverParticipantId: string;
  readonly targetAuthorityId: AuthorityId;
  readonly delegatedSpendLimitChf: number;
  readonly traceId: string;
  readonly timestamp: Date;
}
