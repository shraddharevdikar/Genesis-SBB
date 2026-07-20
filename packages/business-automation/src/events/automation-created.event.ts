import { AutomationId } from '../identity/automation-id.js';

export interface AutomationCreatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly automationId: AutomationId;
  readonly uniqueAutomationCode: string;
  readonly displayName: string;
  readonly categoryCode: string;
  readonly createdByOperatorRoleId: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
