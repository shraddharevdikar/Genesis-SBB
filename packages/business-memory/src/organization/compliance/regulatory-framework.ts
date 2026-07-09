import { ComplianceObligation } from './compliance-obligation.js';

export interface RegulatoryFramework {
  readonly frameworkId: string;
  readonly tenantId: string;
  readonly name: string; // e.g., "SOC2 Type II", "GDPR Compliance Matrix"
  readonly jurisdiction: string; // e.g. "European Union", "Federal United States"
  readonly obligations: ComplianceObligation[];
  readonly overallAdherenceScorePercent: number;
  readonly nextAuditDate?: Date;
  readonly isSovereignEnforced: boolean;
}
