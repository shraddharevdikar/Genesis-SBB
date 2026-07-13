import { EventId } from '../identity/event-id.js';

export type EventCategoryType = 'BUSINESS' | 'DOMAIN' | 'INTEGRATION' | 'SYSTEM';

export interface EventDefinition {
  readonly eventId: EventId;
  readonly tenantId: string;
  readonly name: string; // e.g. "SBB.ApprovalEngine.ApprovalRequested"
  readonly category: EventCategoryType;
  readonly schemaVersion: string; // e.g. "1.1.0"
  readonly description?: string;
  readonly securityClassification: 'PUBLIC' | 'RESTRICTED' | 'CONFIDENTIAL' | 'SECRET';
  readonly isActive: boolean;
  readonly createdByRoleId: string;
  readonly createdAt: Date;
}
