import { EventId } from '../identity/event-id.js';

export interface EventFieldDefinition {
  readonly name: string;
  readonly type: 'STRING' | 'NUMBER' | 'BOOLEAN' | 'DATE' | 'ARRAY' | 'OBJECT';
  readonly isRequired: boolean;
  readonly validationRegex?: string;
  readonly description?: string;
}

export interface EventSchema {
  readonly schemaId: string;
  readonly eventId: EventId;
  readonly versionNumber: string;
  readonly format: 'JSON_SCHEMA' | 'PROTOBUF' | 'AVRO';
  readonly fields: EventFieldDefinition[];
  readonly rawSchemaPayload?: string; // Stored full string blueprint representation
}
