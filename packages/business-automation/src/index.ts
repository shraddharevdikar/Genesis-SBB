// Core Contracts, Lifecycles, and Contexts
export * from './core/automation-framework.js';
export * from './core/automation-context.js';
export * from './core/automation-lifecycle.js';
export * from './core/automation-version.js';

// Identities
export * from './identity/automation-id.js';
export * from './identity/trigger-id.js';
export * from './identity/action-id.js';

// Automation Models
export * from './automation/business-automation.js';
export * from './automation/automation-plan.js';
export * from './automation/automation-execution.js';

// Triggers Specs
export * from './triggers/automation-trigger.js';
export * from './triggers/event-trigger.js';
export * from './triggers/schedule-trigger.js';
export * from './triggers/condition-trigger.js';

// Conditions Criteria
export * from './conditions/automation-condition.js';
export * from './conditions/business-condition.js';
export * from './conditions/condition-group.js';

// Actions Intents
export * from './actions/automation-action.js';
export * from './actions/action-sequence.js';
export * from './actions/action-reference.js';

// Timing and Schedulers
export * from './scheduling/automation-schedule.js';
export * from './scheduling/recurrence-pattern.js';
export * from './scheduling/execution-window.js';

// Governance and Control
export * from './governance/automation-owner.js';
export * from './governance/automation-policy.js';
export * from './governance/automation-approval.js';

// Monitoring Logs
export * from './monitoring/automation-health.js';
export * from './monitoring/automation-history.js';
export * from './monitoring/automation-metrics.js';

// Domain Events
export * from './events/automation-created.event.js';
export * from './events/automation-enabled.event.js';
export * from './events/automation-disabled.event.js';
export * from './events/automation-retired.event.js';
