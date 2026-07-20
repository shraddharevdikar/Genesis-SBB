export interface RegulatoryAlert {
  readonly alertId: string;
  readonly uniqueAlertCode: string; // e.g. "ALT-REG-FINMA-LIQUIDITY"
  readonly sourceRegulationTitleString: string;
  readonly governingBodyName: string;
  readonly summaryOfChangeText: string;
  readonly datePublished: Date;
  readonly dateEnforced: Date;
  readonly estimatedRiskExposureAmount: number;
  readonly currencyCode: string;
  readonly internalRemediationCoordinatorRoleId: string;
  readonly resolvedFlag: boolean;
  readonly resolvedAt?: Date;
}
