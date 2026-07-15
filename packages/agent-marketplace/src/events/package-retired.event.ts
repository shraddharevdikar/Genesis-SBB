import { PackageId } from '../identity/package-id.js';

export interface PackageRetiredEvent {
  readonly eventId: string;
  readonly packageId: PackageId;
  readonly reasonNotes: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
