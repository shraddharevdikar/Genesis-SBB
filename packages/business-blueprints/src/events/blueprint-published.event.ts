import { BlueprintId } from '../identity/blueprint-id.js';

export interface BlueprintPublishedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly blueprintId: BlueprintId;
  readonly uniqueBlueprintCode: string;
  readonly displayName: string;
  readonly publisherOperatorRoleId: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
