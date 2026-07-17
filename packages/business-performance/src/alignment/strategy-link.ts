import { ObjectiveId } from '../identity/objective-id.js';

export interface StrategyLink {
  readonly linkId: string;
  readonly targetObjectiveId: ObjectiveId;
  readonly enterpriseCoreCapabilityCode: string; // e.g. "CAP-FIN-AUTOMATION", "CAP-HR-TALENT"
  readonly strategyDescriptionNotes: string;
}
