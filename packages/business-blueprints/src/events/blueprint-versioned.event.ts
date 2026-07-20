import { BlueprintId } from '../identity/blueprint-id.js';

export interface BlueprintVersionedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly blueprintId: BlueprintId;
  readonly uniqueBlueprintCode: string;
  readonly previousSemanticVersion: string;
  readonly newSemanticVersion: string;
  readonly editorOperatorRoleId: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
