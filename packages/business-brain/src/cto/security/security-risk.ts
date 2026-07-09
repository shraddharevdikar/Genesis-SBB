export interface SecurityRisk {
  readonly riskId: string;
  readonly tenantId: string;
  readonly title: string;
  readonly description: string;
  readonly cveIdentifier?: string; // e.g., "CVE-2026-1234"
  readonly riskSeverity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  readonly affectedComponent: string; // e.g., "Auth Service v2"
  readonly isMitigated: boolean;
  readonly mitigationActionDescription: string;
  readonly targetRemediationDate: Date;
  readonly detectedAt: Date;
}
