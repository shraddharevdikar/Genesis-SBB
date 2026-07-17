import { ObjectiveId } from '../identity/objective-id.js';
import { MeasurementLifecycle } from '../core/measurement-lifecycle.js';
import { KeyResult } from '../key-results/key-result.js';

export type ObjectiveClassificationCode =
  | 'STRATEGIC'
  | 'OPERATIONAL'
  | 'DEPARTMENTAL'
  | 'TEAM';

export interface Objective {
  readonly objectiveId: ObjectiveId;
  readonly tenantId: string;
  readonly uniqueObjectiveCode: string; // e.g. "OBJ-FIN-2026-Q3-01"
  readonly displayName: string;
  readonly descriptionNotes: string;
  readonly classification: ObjectiveClassificationCode;
  readonly targetCompletionDate: Date;
  readonly associatedDepartmentIdString?: string;
  readonly associatedTeamIdString?: string;
  readonly keyResultsList: KeyResult[];
  readonly lifecycle: MeasurementLifecycle;
}
