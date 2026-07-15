import { PackageId } from '../identity/package-id.js';
import { PublisherId } from '../identity/publisher-id.js';

export interface PackagePublishedEvent {
  readonly eventId: string;
  readonly packageId: PackageId;
  readonly publisherId: PublisherId;
  readonly versionString: string;
  readonly manifestTitle: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
