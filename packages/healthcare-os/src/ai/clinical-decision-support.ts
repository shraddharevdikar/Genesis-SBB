import { PatientId } from '../patients/patient.js';

export interface MedicalEvidenceSource {
  readonly citationTitleString: string;
  readonly publicationDocURI?: string;
  readonly consensusGradeLetter: 'A' | 'B' | 'C' | 'D';
}

export interface DecisionSupportRecommendation {
  readonly associatedPatientId: PatientId;
  readonly potentialDifferentialDiagnosesCodesList: string[]; // ICD references suggested
  readonly recommendedTreatmentAdjustmentsList: string[];
  readonly dynamicContraindicatedMedicationsList: string[]; // Alert if any overlapping drugs cause adverse events
  readonly confidenceScoreDecimal: number;
  readonly rationalBasisText: string;
  readonly clinicalEvidenceSourcesList: MedicalEvidenceSource[];
  readonly calculatedAt: Date;
}
