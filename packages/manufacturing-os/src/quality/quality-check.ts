import { QualityCheckStatus } from '../core/production-lifecycle.js';

export interface QualityCheckMeasurement {
  readonly measurementId: string;
  readonly associatedParameterIdString: string;
  readonly measuredValueDecimal: number;
  readonly conformsToSpecFlag: boolean;
  readonly deviationAmountDecimal: number;
}

export interface QualityCheck {
  readonly checkId: string;
  readonly uniqueCheckCode: string; // e.g. "QC-2026-MNT-9932"
  readonly inspectionPlanIdString: string;
  readonly associatedBatchCodeText?: string;
  readonly associatedWorkOrderIdString?: string;
  readonly associatedPoLineIdString?: string;
  readonly inspectorStaffRoleIdString: string; // Links to HROS / Role
  readonly measurementsList: QualityCheckMeasurement[];
  readonly totalUnitsTestedCount: number;
  readonly failedUnitsCount: number;
  readonly qualityStatus: QualityCheckStatus;
  readonly criticalAnomalyDetectedFlag: boolean;
  readonly digitalQualitySignatureDocURI?: string;
  readonly checkedAt: Date;
}
