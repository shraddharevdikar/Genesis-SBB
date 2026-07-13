import { EventId } from '../identity/event-id.js';

export interface EventPublisher {
  readonly publisherId: string;
  readonly tenantId: string;
  readonly name: string;
  readonly serviceName: string; // The service deploying this publisher (e.g., "ApprovalEngine")
  readonly registeredEventIds: EventId[];
  readonly authMechanism: 'IAM_ROLE' | 'API_KEY' | 'MUTUAL_TLS';
  readonly maxPublishedBatchSize: number;
}
