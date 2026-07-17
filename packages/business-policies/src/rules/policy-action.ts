export type ActionTypeCode =
  | 'TRIGGER_APPROVAL_CHAIN'
  | 'LOG_COMPLIANCE_AUDIT'
  | 'SEND_NOTIFICATION_ALERT'
  | 'REJECT_EXECUTION_HALT'
  | 'TRIGGER_COMPENSATING_ROLLBACK'
  | 'AUTO_DELEGATE_TASK';

export interface PolicyAction {
  readonly actionId: string;
  readonly typeCode: ActionTypeCode;
  readonly targetExecutionWorkflowIdString?: string;
  readonly targetNotificationRoleIdString?: string;
  readonly payloadArgumentMappingJsonString?: string; // payload construction mapping
}
