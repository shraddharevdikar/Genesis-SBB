import { BlueprintCategoryTypeCode } from '../blueprints/business-blueprint.js';

export interface BlueprintCategory {
  readonly categoryId: string;
  readonly uniqueCategoryCode: string; // e.g. "CAT-BLUE-FIN"
  readonly typeCode: BlueprintCategoryTypeCode;
  readonly displayName: string;
  readonly classificationTagsList: string[]; // e.g. ["finance", "reusable", "swiss"]
  readonly parentCategoryIdString?: string;
}
