import { CollaborationRequest } from '../communication/collaboration-request.js';
import { CollaborationResponse } from '../communication/collaboration-response.js';

export interface ExecutiveCollaborationRequestedEvent {
  readonly eventId: string;
  readonly request: CollaborationRequest;
  readonly tenantId: string;
  readonly timestamp: Date;
}

export interface ExecutiveCollaborationRespondedEvent {
  readonly eventId: string;
  readonly response: CollaborationResponse;
  readonly tenantId: string;
  readonly timestamp: Date;
}
