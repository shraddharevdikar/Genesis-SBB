import { AutomationId } from '../identity/automation-id.js';

export interface AutomationContext {
  readonly tenantId: string;
  readonly correlationTraceId: string;
  readonly activeOperatorRoleId: string;
  readonly activeAutomationId?: AutomationId;
  readonly localeCode: string; // e.g. "de-CH", "en-US"
  readonly executionTimezone: string; // e.g. "Europe/Zurich", "UTC"
  readonly timestamp: Date;
}
