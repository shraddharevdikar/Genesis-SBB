import { EvidenceReference } from './evidence-reference.js';
import { UncertaintyModel } from './uncertainty-model.js';

export interface ConfidenceModel {
  readonly confidenceScore: number; // 0.0 to 1.0 representing unified decision confidence
  readonly supportingEvidence: EvidenceReference[];
  readonly criticalUncertainties: UncertaintyModel[];
  readonly keyAssumptions: string[];
  readonly missingInformation: string[];
}
