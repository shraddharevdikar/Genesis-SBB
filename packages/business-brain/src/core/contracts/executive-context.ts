import { ExecutiveRole } from './executive-role.js';

export interface ExecutiveContext {
  readonly tenantId: string;
  readonly correlationId: string;
  readonly initiatorRole: ExecutiveRole;
  readonly timestamp: Date;
  readonly targetDepartment?: string;
  readonly metadata?: Record<string, any>;
}
