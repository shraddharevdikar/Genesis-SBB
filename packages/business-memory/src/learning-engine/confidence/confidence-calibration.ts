import { ConfidenceModel } from './confidence-model.js';

export interface ConfidenceCalibration {
  readonly calibrationId: string;
  readonly tenantId: string;
  readonly priorConfidence: ConfidenceModel;
  readonly postCalibrationConfidence: ConfidenceModel;
  readonly appliedBiasAdjustments: string[];
  readonly calibratedByRoleId: string;
  readonly calibratedAt: Date;
}
