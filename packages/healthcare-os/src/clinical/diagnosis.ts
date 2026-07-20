import { EncounterId } from './encounter.js';

export interface PatientDiagnosis {
  readonly diagnosisId: string;
  readonly uniqueDiagnosisCode: string; // e.g. "DIAG-2026-CH-0145"
  readonly associatedEncounterId: EncounterId;
  readonly icdStandardVersionCode: 'ICD_10' | 'ICD_11';
  readonly standardDiagnosisCodeValue: string; // e.g. "I10" (Essential hypertension) or "E11.9"
  readonly diagnosticTitleString: string;
  readonly primaryDiagnosticClinicalNotes: string;
  readonly diagnosticClassificationType: 'PRIMARY' | 'SECONDARY' | 'COMORBIDITY' | 'DIFFERENTIAL';
  readonly clinicalVerificationStatus: 'SUSPECTED' | 'CONFIRMED' | 'REFUTED' | 'RESOLVED';
  readonly onsetDate?: Date;
  readonly diagnosedAt: Date;
}
