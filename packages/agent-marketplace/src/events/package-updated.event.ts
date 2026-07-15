import { PackageId } from '../identity/package-id.js';

export interface PackageUpdatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly packageId: PackageId;
  readonly previousVersionString: string;
  readonly updatedVersionString: string;
  readonly updatedByParticipantId: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
