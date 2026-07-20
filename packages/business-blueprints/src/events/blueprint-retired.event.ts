import { BlueprintId } from '../identity/blueprint-id.js';

export interface BlueprintRetiredEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly retiredBlueprintId: BlueprintId;
  readonly uniqueBlueprintCode: string;
  readonly retiredByOperatorRoleId: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
