import { ExecutiveCouncilRequest } from '../coordination/executive-council-request.js';

export interface ExecutiveCouncilRequestedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly councilRequest: ExecutiveCouncilRequest;
  readonly timestamp: Date;
}
