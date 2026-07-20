import { PatientId } from '../patients/patient.js';

export interface ChronicRiskFactor {
  readonly riskCategoryName: 'CARDIOVASCULAR' | 'DIABETIC_RECURRENT' | 'RESPIRATORY_DECOMPENSATION' | 'FALL_RISK' | 'SEPSIS_ALERT';
  readonly riskProbabilityDecimal: number; // e.g. 0.35 (35% risk)
  readonly primaryCorrelatingVitalsJSON: string;
}

export interface PatientRiskAnalysis {
  readonly analysisId: string;
  readonly uniqueAnalysisCode: string; // e.g. "RSK-ANL-PAT-42"
  readonly associatedPatientId: PatientId;
  readonly thirtyDayReadmissionRiskProbabilityDecimal: number;
  readonly chronicRiskFactorsList: ChronicRiskFactor[];
  readonly criticalDeteriorationWarningIndicatorFlag: boolean; // Instantly alerts triage teams if true
  readonly strategicPreventativeCareNotes: string;
  readonly performedAt: Date;
}
