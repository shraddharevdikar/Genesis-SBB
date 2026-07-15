import { ExtensionId } from '../identity/extension-id.js';

export interface ValidationCompletedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly extensionId: ExtensionId;
  readonly wasSuccessful: boolean;
  readonly errorsCount: number;
  readonly warningsCount: number;
  readonly developerId: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
