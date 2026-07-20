import { BusinessBlueprint } from '../blueprints/business-blueprint.js';

export interface BlueprintCatalog {
  readonly catalogId: string;
  readonly uniqueCatalogCode: string; // e.g. "CTL-BLU-ENTERPRISE"
  readonly displayName: string;
  readonly descriptionNotesText: string;
  readonly publishedBlueprintsList: BusinessBlueprint[];
  readonly totalRegisteredBlueprintsCount: number;
  readonly lastCatalogUpdatedDate: Date;
}
