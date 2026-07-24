export const WORKFLOW_STATUS = {
  DRAFT: 'DRAFT',
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  PENDING: 'PENDING',
  RUNNING: 'RUNNING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  CANCELLED: 'CANCELLED',
  PAUSED: 'PAUSED',
  RESTARTED: 'RESTARTED',
  COMPENSATED: 'COMPENSATED',
  ARCHIVED: 'ARCHIVED',
} as const;

export type WorkflowStatus = typeof WORKFLOW_STATUS[keyof typeof WORKFLOW_STATUS];

export const STEP_TYPE = {
  TASK: 'TASK',
  SERVICE: 'SERVICE',
  API: 'API',
  APPROVAL: 'APPROVAL',
  AI: 'AI',
  DELAY: 'DELAY',
  EVENT: 'EVENT',
  SCRIPT: 'SCRIPT',
  PARALLEL: 'PARALLEL',
  CONDITIONAL: 'CONDITIONAL',
  SUB_WORKFLOW: 'SUB_WORKFLOW',
} as const;

export type StepType = typeof STEP_TYPE[keyof typeof STEP_TYPE];

export const STEP_STATUS = {
  PENDING: 'PENDING',
  RUNNING: 'RUNNING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  SKIPPED: 'SKIPPED',
  WAITING_APPROVAL: 'WAITING_APPROVAL',
  REJECTED: 'REJECTED',
  COMPENSATED: 'COMPENSATED',
  PAUSED: 'PAUSED',
} as const;

export type StepStatus = typeof STEP_STATUS[keyof typeof STEP_STATUS];

export const APPROVAL_STRATEGY = {
  SINGLE: 'SINGLE',
  ALL: 'ALL',
  MAJORITY: 'MAJORITY',
  SEQUENTIAL: 'SEQUENTIAL',
  ROLE_BASED: 'ROLE_BASED',
  DELEGATED: 'DELEGATED',
} as const;

export type ApprovalStrategy = typeof APPROVAL_STRATEGY[keyof typeof APPROVAL_STRATEGY];

export const APPROVAL_STATUS = {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  EXPIRED: 'EXPIRED',
  TIMEOUT: 'TIMEOUT',
} as const;

export type ApprovalStatus = typeof APPROVAL_STATUS[keyof typeof APPROVAL_STATUS];

export const WORKFLOW_EVENTS = {
  WORKFLOW_STARTED: 'WorkflowStarted',
  STEP_STARTED: 'StepStarted',
  STEP_COMPLETED: 'StepCompleted',
  STEP_FAILED: 'StepFailed',
  WORKFLOW_COMPLETED: 'WorkflowCompleted',
  WORKFLOW_CANCELLED: 'WorkflowCancelled',
  APPROVAL_REQUESTED: 'ApprovalRequested',
  APPROVAL_GRANTED: 'ApprovalGranted',
  APPROVAL_REJECTED: 'ApprovalRejected',
} as const;

export type WorkflowEventType = typeof WORKFLOW_EVENTS[keyof typeof WORKFLOW_EVENTS];
