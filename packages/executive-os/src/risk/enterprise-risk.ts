export interface EnterpriseRiskId {
  readonly value: string;
}

export interface EnterpriseRisk {
  readonly riskId: EnterpriseRiskId;
  readonly uniqueRiskCode: string; // e.g. "RSK-ENT-CYBER"
  readonly displayName: string;
  readonly category: 'STRATEGIC' | 'FINANCIAL' | 'OPERATIONAL' | 'REPUTATIONAL' | 'COMPLIANCE_LEGAL';
  readonly riskDescriptionText: string;
  readonly probabilityRatingNumeric: number; // e.g. 1 to 5 (or decimal 0.0 to 1.0)
  readonly financialImpactRatingAmount: number; // estimated loss magnitude
  readonly currencyCode: string;
  readonly compositeRiskScore: number; // probability * impact
  readonly status: 'ACTIVE_MONITORED' | 'MITIGATED_CLOSED' | 'TRIGGERED_INCIDENT';
  readonly registeredAt: Date;
}
