import { ObjectiveId } from '../identity/objective-id.js';

export interface ObjectiveAlignment {
  readonly alignmentId: string;
  readonly parentObjectiveId: ObjectiveId;
  readonly childObjectiveId: ObjectiveId;
  readonly strategicAlignmentWeightPercentage: number; // e.g. 0.0 - 100.0 (impact of child on parent)
  readonly alignmentVerificationNotes?: string;
}
