import { SdkId } from '../identity/sdk-id.js';

export interface SdkVersionReleasedEvent {
  readonly eventId: string;
  readonly sdkId: SdkId;
  readonly releasedVersionString: string;
  readonly changesChangelogText: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
