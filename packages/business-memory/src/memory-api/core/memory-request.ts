import { RequestId } from '../identity/request-id.js';
import { MemoryQuery } from '../contracts/memory-query.js';
import { MemoryCommand } from '../contracts/memory-command.js';

export interface MemoryRequest {
  readonly requestId: RequestId;
  readonly tenantId: string;
  readonly requesterRoleId: string;
  readonly operation: {
    readonly query?: MemoryQuery;
    readonly command?: MemoryCommand;
  };
  readonly securityToken?: string;
  readonly requestedAt: Date;
}
