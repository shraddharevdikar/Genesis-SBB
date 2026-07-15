import { ExtensionId } from '../identity/extension-id.js';
import { ExtensionCategoryType } from '../extensions/extension-manifest.js';

export interface ExtensionCreatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly extensionId: ExtensionId;
  readonly category: ExtensionCategoryType;
  readonly developerId: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
