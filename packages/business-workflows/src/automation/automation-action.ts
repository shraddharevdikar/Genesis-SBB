export type ActionTypeCode =
  | 'INVOKE_REST_WEBHOOK'
  | 'DISPATCH_COGNITIVE_AGENT_TASK'
  | 'BROADCAST_SYSTEM_EVENT_SIGNAL'
  | 'TRIGGER_NOTIFICATIONS_HUB_ALERT'
  | 'UPDATE_ENTITY_STATE_PAYLOAD';

export interface AutomationAction {
  readonly actionId: string;
  readonly uniqueCode: string; // e.g. "ACT-INVOKE-ERP"
  readonly typeCode: ActionTypeCode;
  readonly targetSystemEndpointUrlText?: string;
  readonly payloadMappingTemplateJsonString?: string; // payload mapping schema
  readonly recipientNotificationUserGroupString?: string;
  readonly isAsynchronousNoWait: boolean;
}
