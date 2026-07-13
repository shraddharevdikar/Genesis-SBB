import { DecisionProfile } from './decision-profile.js';
import { Assumption } from '../analysis/assumption.js';
import { Alternative } from '../analysis/alternative.js';
import { Evidence } from '../analysis/evidence.js';
import { ConfidenceRating } from '../analysis/confidence.js';
import { DecisionParticipant } from '../participants/decision-participant.js';
import { ExpectedOutcome } from '../outcomes/expected-outcome.js';
import { ActualOutcome } from '../outcomes/actual-outcome.js';
import { ApprovalModel } from '../governance/approval-model.js';
import { DecisionQuality } from '../metrics/decision-quality.js';
import { DecisionEffectiveness } from '../metrics/decision-effectiveness.js';

export interface DecisionRecord {
  readonly decisionId: string;
  readonly tenantId: string;
  readonly title: string;
  readonly description: string;
  readonly rationale: string;
  readonly profile: DecisionProfile;
  readonly approval: ApprovalModel;
  readonly quality?: DecisionQuality;
  readonly effectiveness?: DecisionEffectiveness;
  readonly assumptions: Assumption[];
  readonly alternatives: Alternative[];
  readonly evidence: Evidence[];
  readonly confidence: ConfidenceRating;
  readonly participants: DecisionParticipant[];
  readonly expectedOutcomes: ExpectedOutcome[];
  readonly actualOutcomes: ActualOutcome[];
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly reviewedAt?: Date;
  readonly tags: string[];
}
