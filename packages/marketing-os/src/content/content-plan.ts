import { ContentAsset } from './content-asset.js';

export interface ContentPlan {
  readonly planId: string;
  readonly uniquePlanCode: string; // e.g. "PLN-CONTENT-Q3"
  readonly displayName: string;
  readonly descriptionNotesText: string;
  readonly targetAudienceSegmentIdsList: string[];
  readonly plannedAssetsList: ContentAsset[];
  readonly primarySeoGoalKeywordsList: string[];
  readonly totalPlannedProductionCostAmount: number;
  readonly currencyCode: string;
  readonly isApprovedByCmoFlag: boolean;
}
