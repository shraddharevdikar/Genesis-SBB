export interface ComplianceObligation {
  readonly obligationId: string;
  readonly tenantId: string;
  readonly title: string; // e.g. "GDPR Article 32 Security Controls"
  readonly regulatorName: string;
  readonly description: string;
  readonly penaltyRiskUSD: number;
  readonly complianceOfficerRoleId: string; // references OrganizationalRole
  readonly currentAdherenceStatus: 'FULLY_ADHERED' | 'MINOR_GAP' | 'MAJOR_NON_COMPLIANT' | 'NOT_EVALUATED';
  readonly lastTestedAt?: Date;
}
