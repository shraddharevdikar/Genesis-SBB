import { SkillId } from '../identity/skill-id.js';

export interface SkillEffectiveness {
  readonly effectivenessId: string;
  readonly tenantId: string;
  readonly skillId: SkillId;
  readonly manualHoursSavedCount: number; // Quantitative metric
  readonly processAccuracyImprovementIndex: number; // 0.0 - 1.0 delta improvement
  readonly errorCorrectionInterventionsCount: number; // SBB safety intervention logs count
  readonly analyzedRangeStart: Date;
  readonly analyzedRangeEnd: Date;
}
