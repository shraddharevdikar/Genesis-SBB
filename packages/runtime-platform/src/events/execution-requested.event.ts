import { ExecutionRequest } from '../execution/execution-request.js';

export interface ExecutionRequestedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly request: ExecutionRequest;
  readonly requestedByRoleId: string;
  readonly timestamp: Date;
}
