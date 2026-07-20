import { PatientId } from '../patients/patient.js';

export interface LabResultComponent {
  readonly analyteNameText: string; // e.g. "Hemoglobin"
  readonly measuredNumericValueDecimal?: number;
  readonly measuredTextValue?: string; // e.g. "Reactive" or "Normal"
  readonly unitOfMeasurementString: string; // e.g. "g/dL"
  readonly referenceIntervalText: string; // e.g. "12.0 - 16.0"
  readonly valueClassification: 'NORMAL' | 'LOW' | 'HIGH' | 'CRITICAL_PANIC';
}

export interface LaboratoryResult {
  readonly resultId: string;
  readonly uniqueResultCode: string; // e.g. "RES-2026-CH-744"
  readonly associatedPatientId: PatientId;
  readonly associatedLaboratoryOrderIdString: string;
  readonly performingLaboratoryName: string;
  readonly componentsList: LabResultComponent[];
  readonly pathologistPhysicianIdString?: string; // Authorized clinical reviewer
  readonly verifiedAndReleasedFlag: boolean;
  readonly releasedAt?: Date;
  readonly completeClinicalResultNoteText?: string;
  readonly scannedDiagnosticDocURI?: string; // links to actual lab documents
}
