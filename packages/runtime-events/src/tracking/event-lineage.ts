import { EventInstanceId } from '../identity/event-instance-id.js';
import { CorrelationId } from '../identity/correlation-id.js';

export interface LineageNode {
  readonly instanceId: EventInstanceId;
  readonly eventName: string;
  readonly category: 'BUSINESS' | 'DOMAIN' | 'INTEGRATION' | 'SYSTEM';
  readonly durationOffsetMs: number;
}

export interface LineageEdge {
  readonly fromInstanceId: EventInstanceId;
  readonly toInstanceId: EventInstanceId;
  readonly linkType: 'CAUSED_BY' | 'PRODUCED_BY' | 'SEQUENTIAL_FLOW';
}

export interface EventLineage {
  readonly lineageId: string;
  readonly tenantId: string;
  readonly correlationId: CorrelationId;
  readonly rootInstanceId: EventInstanceId;
  readonly nodes: LineageNode[];
  readonly edges: LineageEdge[];
  readonly totalChainDurationMs: number;
}
