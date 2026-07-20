export interface PatientId {
  readonly value: string;
}

export interface Patient {
  readonly patientId: PatientId;
  readonly uniquePatientCode: string; // e.g. "PAT-2026-0042"
  readonly primaryRecordNumber: string; // Medical Record Number (MRN)
  readonly activeFlag: boolean;
  readonly createdAt: Date;
  readonly lastModifiedAt: Date;
}
