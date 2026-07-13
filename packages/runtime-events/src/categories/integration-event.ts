import { EventId } from '../identity/event-id.js';

export interface IntegrationEvent {
  readonly integrationEventId: string;
  readonly eventId: EventId;
  readonly sourceSystemCode: string; // Originating server or service
  readonly targetSystemCodes: string[]; // Destination endpoints
  readonly transportProtocol: 'AMQP' | 'HTTP_WEBHOOK' | 'GRPC' | 'EVENT_BRIDGE';
  readonly schemaRegistryUri: string; // Path to contract definition
  readonly isEncrypted: boolean;
}
