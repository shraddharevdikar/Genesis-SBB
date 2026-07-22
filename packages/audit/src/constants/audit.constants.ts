export const AUDIT_ACTIONS = {
  CREATE: 'CREATE',
  READ: 'READ',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  EXPORT: 'EXPORT',
  IMPORT: 'IMPORT',
  APPROVE: 'APPROVE',
  REJECT: 'REJECT',
  WORKFLOW: 'WORKFLOW',
  AI_ACTION: 'AI_ACTION',
  SYSTEM: 'SYSTEM',
} as const;

export type AuditAction = typeof AUDIT_ACTIONS[keyof typeof AUDIT_ACTIONS];

export const AUDIT_SEVERITIES = {
  INFO: 'INFO',
  WARNING: 'WARNING',
  CRITICAL: 'CRITICAL',
} as const;

export type AuditSeverity = typeof AUDIT_SEVERITIES[keyof typeof AUDIT_SEVERITIES];

export const AUDIT_STATUSES = {
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED',
  DENIED: 'DENIED',
} as const;

export type AuditStatus = typeof AUDIT_STATUSES[keyof typeof AUDIT_STATUSES];
