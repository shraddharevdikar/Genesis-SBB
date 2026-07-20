import { AutomationId } from '../identity/automation-id.js';
import { AutomationTrigger } from '../triggers/automation-trigger.js';
import { AutomationCondition } from '../conditions/automation-condition.js';
import { ActionSequence } from '../actions/action-sequence.js';
import { AutomationSchedule } from '../scheduling/automation-schedule.js';
import { AutomationVersion } from '../core/automation-version.js';
import { AutomationLifecycle } from '../core/automation-lifecycle.js';

export type AutomationCategoryCode =
  | 'EVENT_BASED_WORKFLOW_ROUTE'
  | 'SCHEDULED_INTELLIGENCE_CRON'
  | 'POLICY_BASED_ENFORCEMENT'
  | 'KPI_BASED_ESCORT_HEAL'
  | 'AI_ASSISTED_AUTONOMOUS_LOOP';

export interface BusinessAutomation {
  readonly automationId: AutomationId;
  readonly tenantId: string;
  readonly uniqueAutomationCode: string; // e.g. "AUT-FIN-001"
  readonly displayName: string;
  readonly descriptionNotesText: string;
  readonly category: AutomationCategoryCode;
  readonly trigger: AutomationTrigger;
  readonly conditionCheck?: AutomationCondition;
  readonly actionSequence: ActionSequence;
  readonly schedule?: AutomationSchedule;
  readonly version: AutomationVersion;
  readonly lifecycle: AutomationLifecycle;
}
