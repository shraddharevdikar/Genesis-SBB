import { AutomationId } from '../identity/automation-id.js';

export interface AutomationDisabledEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly automationId: AutomationId;
  readonly uniqueAutomationCode: string;
  readonly disabledByOperatorRoleId: string;
  readonly reasonNotesText?: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
