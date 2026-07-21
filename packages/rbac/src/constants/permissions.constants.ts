export const PERMISSIONS = {
  MARKETING: {
    READ: 'marketing:read',
    CREATE: 'marketing:create',
    UPDATE: 'marketing:update',
    DELETE: 'marketing:delete',
  },
  SALES: {
    APPROVE: 'sales:approve',
  },
  FINANCE: {
    INVOICE_CREATE: 'finance:invoice:create',
  },
  HR: {
    EMPLOYEE_UPDATE: 'hr:employee:update',
  },
  WORKFLOW: {
    EXECUTE: 'workflow:execute',
  },
  AI: {
    APPROVE: 'ai:approve',
  },
} as const;

export type PermissionKey =
  | 'marketing:read'
  | 'marketing:create'
  | 'marketing:update'
  | 'marketing:delete'
  | 'sales:approve'
  | 'finance:invoice:create'
  | 'hr:employee:update'
  | 'workflow:execute'
  | 'ai:approve';

export const ROLE_HIERARCHY: Record<string, string[]> = {
  'Platform Admin': ['Tenant Admin', 'Organization Admin', 'Department Manager', 'Employee'],
  'Tenant Admin': ['Organization Admin', 'Department Manager', 'Employee'],
  'Organization Admin': ['Department Manager', 'Employee'],
  'Department Manager': ['Employee'],
  'Employee': [],
};

export const ALL_PERMISSIONS: PermissionKey[] = [
  'marketing:read',
  'marketing:create',
  'marketing:update',
  'marketing:delete',
  'sales:approve',
  'finance:invoice:create',
  'hr:employee:update',
  'workflow:execute',
  'ai:approve',
];
