import { BusinessInsight } from './business-insight.js';

export interface ContributingFactor {
  readonly factorCode: string;
  readonly descriptionNotesText: string;
  readonly calculatedInfluenceWeightRatio: number; // e.g. 0.35 (35% impact)
  readonly sourceSbbResourceURI: string;
}

export interface RootCauseAnalysis extends BusinessInsight {
  readonly underlyingPrimaryRootCauseText: string;
  readonly primaryHypothesisConfidenceRatio: number;
  readonly identifiedContributingFactorsList: ContributingFactor[];
  readonly diagnosticAuditTrailNotes?: string;
}
