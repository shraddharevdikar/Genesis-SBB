import { AutomationTrigger } from './automation-trigger.js';

export interface EventTrigger extends AutomationTrigger {
  readonly targetDomainEventNameString: string; // e.g. "WorkflowStepTransitionedEvent"
  readonly eventSourceModuleCode: string; // e.g. "business-workflows"
  readonly filterPayloadExpressionJsonString?: string; // e.g. "{"stepCode": "INVOICE_APPROVAL"}"
  readonly schemaVersionString: string; // e.g. "1.0.0"
}
