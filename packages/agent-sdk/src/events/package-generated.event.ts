import { ExtensionId } from '../identity/extension-id.js';

export interface PackageGeneratedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly extensionId: ExtensionId;
  readonly payloadBytesCount: number;
  readonly sha256ChecksumString: string;
  readonly developerId: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
