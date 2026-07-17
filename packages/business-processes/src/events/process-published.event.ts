import { ProcessId } from '../identity/process-id.js';
import { ProcessVersionId } from '../identity/process-version-id.js';

export interface ProcessPublishedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly processId: ProcessId;
  readonly publishedVersionId: ProcessVersionId;
  readonly traceId: string;
  readonly timestamp: Date;
}
