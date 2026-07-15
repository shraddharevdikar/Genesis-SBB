import { PackageId } from '../identity/package-id.js';

export interface PackageInstalledEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly packageId: PackageId;
  readonly versionString: string;
  readonly installedByParticipantId: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
