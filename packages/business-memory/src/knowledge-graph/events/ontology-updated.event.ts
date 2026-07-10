import { GraphSchema } from '../ontology/graph-schema.js';

export interface OntologyUpdatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly previousSchemaVersion?: string;
  readonly newSchema: GraphSchema;
  readonly updatedByRoleId: string;
  readonly timestamp: Date;
}
