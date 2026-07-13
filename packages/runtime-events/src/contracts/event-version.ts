import { EventId } from '../identity/event-id.js';

export interface EventVersion {
  readonly versionId: string;
  readonly eventId: EventId;
  readonly versionNumber: string; // e.g. "1.2.0"
  readonly releaseNotes?: string;
  readonly isApproved: boolean;
  readonly approvedByRoleId?: string;
  readonly isActive: boolean;
  readonly releasedAt: Date;
}
