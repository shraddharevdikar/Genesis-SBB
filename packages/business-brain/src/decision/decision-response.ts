import { AuthorityLevel } from '../governance/authority-level.js';

export interface DecisionImpact {
  readonly financialUSD?: number;
  readonly timelineDays?: number;
  readonly riskLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  readonly affectedDepartments: string[];
}

export interface DecisionResponse {
  readonly requestId: string;
  readonly approvedOption: string;
  readonly reasoningText: string;
  readonly approvedBy: string;
  readonly approvedAuthorityLevel: AuthorityLevel;
  readonly impactAssessment: DecisionImpact;
  readonly approvedAt: Date;
  readonly escalationsRequired: string[];
}
