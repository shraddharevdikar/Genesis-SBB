import { BlueprintId } from '../identity/blueprint-id.js';

export interface BlueprintContext {
  readonly tenantId: string;
  readonly correlationTraceId: string;
  readonly activeOperatorRoleId: string;
  readonly activeBlueprintId?: BlueprintId;
  readonly localeCode: string; // e.g. "de-CH", "en-US"
  readonly executionTimezone: string; // e.g. "Europe/Zurich"
  readonly timestamp: Date;
}
