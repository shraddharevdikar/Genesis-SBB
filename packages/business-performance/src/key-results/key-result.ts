import { KeyResultId } from '../identity/key-result-id.js';
import { TargetValue } from './target-value.js';
import { AchievementStatus } from './achievement-status.js';

export interface KeyResult {
  readonly keyResultId: KeyResultId;
  readonly uniqueCode: string; // e.g. "KR-FIN-ARR-01"
  readonly shortTitle: string;
  readonly detailedDescription: string;
  readonly target: TargetValue;
  readonly status: AchievementStatus;
}
