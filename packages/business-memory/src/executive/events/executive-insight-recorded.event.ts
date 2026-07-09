import { ExecutiveMemoryId } from '../identity/executive-memory-id.js';
import { ExecutiveInsight } from '../knowledge/executive-insight.js';

export interface ExecutiveInsightRecordedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly executiveMemoryId: ExecutiveMemoryId;
  readonly recordedInsight: ExecutiveInsight;
  readonly timestamp: Date;
}
