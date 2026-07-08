import { ExecutiveRole } from '../core/contracts/executive-role.js';

export interface ExecutiveProfile {
  readonly name: string;
  readonly role: ExecutiveRole;
  readonly title: string;
  readonly department: string;
  readonly joiningDate: Date;
}
