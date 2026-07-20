import { BlueprintId } from '../identity/blueprint-id.js';

export interface BlueprintCreatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly blueprintId: BlueprintId;
  readonly uniqueBlueprintCode: string;
  readonly displayName: string;
  readonly categoryTypeCode: string;
  readonly creatorOperatorRoleId: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
