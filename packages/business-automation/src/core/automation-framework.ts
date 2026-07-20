import { AutomationId } from '../identity/automation-id.js';
import { TriggerId } from '../identity/trigger-id.js';
import { ActionId } from '../identity/action-id.js';
import { AutomationContext } from './automation-context.js';
import { BusinessAutomation, AutomationCategoryCode } from '../automation/business-automation.js';
import { AutomationTrigger } from '../triggers/automation-trigger.js';
import { AutomationCondition } from '../conditions/automation-condition.js';
import { AutomationAction } from '../actions/automation-action.js';

export interface AutomationFramework {
  /**
   * Spawns a brand-new multi-tenant, domain-independent business automation aggregate.
   */
  createAutomation(
    uniqueAutomationCode: string,
    category: AutomationCategoryCode,
    displayName: string,
    descriptionNotesText: string,
    context: AutomationContext
  ): Promise<BusinessAutomation>;

  /**
   * Defines or updates an event or schedule-based trigger associated with an automation sequence.
   */
  defineTrigger(
    automationId: AutomationId,
    trigger: AutomationTrigger,
    context: AutomationContext
  ): Promise<TriggerId>;

  /**
   * Defines or attaches logical check parameters of conditional criteria onto an automation plan.
   */
  defineCondition(
    automationId: AutomationId,
    condition: AutomationCondition,
    context: AutomationContext
  ): Promise<string>; // returns conditionId

  /**
   * Defines or maps intended business execution task actions onto the sequential automation timeline.
   */
  defineAction(
    automationId: AutomationId,
    action: AutomationAction,
    context: AutomationContext
  ): Promise<ActionId>;

  /**
   * Evaluates permissions, locks configuration, and transitions the status check to ENABLED_ACTIVE.
   */
  enableAutomation(
    automationId: AutomationId,
    context: AutomationContext
  ): Promise<void>;

  /**
   * Pauses active trigger observation loops, transition state to DISABLED_PAUSED.
   */
  disableAutomation(
    automationId: AutomationId,
    reasonNotesText: string,
    context: AutomationContext
  ): Promise<void>;

  /**
   * Sunsets the automation blueprint permanently, halting any outstanding queues or intervals.
   */
  retireAutomation(
    automationId: AutomationId,
    context: AutomationContext
  ): Promise<void>;
}
