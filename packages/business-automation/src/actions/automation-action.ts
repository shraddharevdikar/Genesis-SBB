import { ActionId } from '../identity/action-id.js';

export type ActionCategoryCode =
  | 'EXECUTE_WORKFLOW_STEP'
  | 'NOTIFY_USER_OPERATOR'
  | 'INVOKE_AI_AGENT'
  | 'CREATE_WORK_TASK'
  | 'SEND_APPROVAL_REQUEST'
  | 'CALL_EXTERNAL_INTEGRATION'
  | 'UPDATE_BUSINESS_OBJECT';

export interface AutomationAction {
  readonly actionId: ActionId;
  readonly uniqueActionCode: string; // e.g. "ACT-FIN-LOCK-BUDGET"
  readonly displayName: string;
  readonly category: ActionCategoryCode;
  readonly parameterMappingJsonSchemaString?: string; // payload constraints schema
  readonly timeoutSecondsCount: number;
}
