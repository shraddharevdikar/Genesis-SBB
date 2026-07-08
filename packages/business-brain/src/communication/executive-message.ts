import { ExecutiveRole } from '../core/contracts/executive-role.js';

export interface ExecutiveMessage {
  readonly messageId: string;
  readonly sender: ExecutiveRole;
  readonly recipient: ExecutiveRole;
  readonly payload: string;
  readonly timestamp: Date;
  readonly correlationId: string;
  readonly priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
}
