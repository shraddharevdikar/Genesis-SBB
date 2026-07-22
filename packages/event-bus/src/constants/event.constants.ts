export const EVENT_TYPES = {
  USER_REGISTERED: 'UserRegistered',
  USER_LOGGED_IN: 'UserLoggedIn',
  ROLE_ASSIGNED: 'RoleAssigned',
  PERMISSION_CHANGED: 'PermissionChanged',
  AUDIT_CREATED: 'AuditCreated',
  WORKFLOW_STARTED: 'WorkflowStarted',
  WORKFLOW_COMPLETED: 'WorkflowCompleted',
  NOTIFICATION_SENT: 'NotificationSent',
  AI_ACTION_REQUESTED: 'AIActionRequested',
  AI_ACTION_COMPLETED: 'AIActionCompleted',
  DOCUMENT_UPLOADED: 'DocumentUploaded',
  INVOICE_APPROVED: 'InvoiceApproved',
  CAMPAIGN_PUBLISHED: 'CampaignPublished',
  LEAD_CREATED: 'LeadCreated',
  TASK_COMPLETED: 'TaskCompleted',
} as const;

export type EventType = typeof EVENT_TYPES[keyof typeof EVENT_TYPES];

export const EVENT_STATUSES = {
  PENDING: 'PENDING',
  PROCESSED: 'PROCESSED',
  FAILED: 'FAILED',
  DLQ: 'DLQ',
} as const;

export type EventStatus = typeof EVENT_STATUSES[keyof typeof EVENT_STATUSES];
