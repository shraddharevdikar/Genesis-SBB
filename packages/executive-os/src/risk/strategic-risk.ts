import { EnterpriseRiskId } from './enterprise-risk.js';

export interface StrategicRisk {
  readonly strategicRiskId: string;
  readonly uniqueStrategicRiskCode: string; // e.g. "RSK-STR-COMPETITOR-DISRUPTION"
  readonly associatedEnterpriseRiskId: EnterpriseRiskId;
  readonly targetStrategicPlanIdString: string; // the strategic plan impacted
  readonly competitiveThreatFactorText: string;
  readonly likelihoodScoreNumeric: number; // e.g. 1 to 5
  readonly impactSeverityScoreNumeric: number; // e.g. 1 to 5
  readonly remediationDeadlineDate?: Date;
  readonly activeFlag: boolean;
  readonly lastAssessedAt: Date;
}
