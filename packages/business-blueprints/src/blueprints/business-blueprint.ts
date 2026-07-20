import { BlueprintId } from '../identity/blueprint-id.js';
import { BlueprintVersion } from '../core/blueprint-version.js';
import { BlueprintLifecycle } from '../core/blueprint-lifecycle.js';
import { BlueprintComposition } from '../composition/blueprint-composition.js';

export type BlueprintCategoryTypeCode =
  | 'ORGANIZATION_LEVEL'
  | 'DEPARTMENT_LEVEL'
  | 'CAPABILITY_LEVEL'
  | 'OPERATING_MODEL_LEVEL'
  | 'INDUSTRY_SPECIFIC_LEVEL';

export interface BusinessBlueprint {
  readonly blueprintId: BlueprintId;
  readonly uniqueBlueprintCode: string; // e.g. "BLU-FINANCE-OS"
  readonly displayName: string;
  readonly descriptionNotesText: string;
  readonly categoryTypeCode: BlueprintCategoryTypeCode;
  readonly composition: BlueprintComposition;
  readonly version: BlueprintVersion;
  readonly lifecycle: BlueprintLifecycle;
}
