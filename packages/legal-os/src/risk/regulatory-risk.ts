export interface RegulatoryRisk {
  readonly regulatoryRiskId: string;
  readonly uniqueRegulatoryRiskCode: string; // e.g. "RSK-REG-AI-ACT"
  readonly targetRegulationNameString: string;
  readonly countryJurisdictionCode: string; // e.g. "EU"
  readonly changeImpactSeverity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL_DISRUPTION';
  readonly likelihoodScoreNumeric: number; // e.g. 1 to 5
  readonly complianceGapDescription: string;
  readonly targetRemediationDate: Date;
  readonly recordedByRoleIdString: string;
  readonly recordedAt: Date;
}
