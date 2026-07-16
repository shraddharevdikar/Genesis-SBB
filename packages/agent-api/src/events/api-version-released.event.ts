import { ApiVersion } from '../versioning/api-version.js';

export interface ApiVersionReleasedEvent {
  readonly eventId: string;
  readonly apiVersion: ApiVersion;
  readonly changesChangelogText: string;
  readonly deprecationScheduledDate?: Date;
  readonly traceId: string;
  readonly timestamp: Date;
}
