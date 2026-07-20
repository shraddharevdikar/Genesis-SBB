export interface DiagnosticTest {
  readonly testId: string;
  readonly uniqueTestCode: string; // e.g. "TST-CBC-HEMA"
  readonly loincStandardCode?: string; // LOINC international code (e.g., "58410-2")
  readonly testTitleString: string; // e.g. "Complete Blood Count with Differential"
  readonly biologicalSampleType: 'WHOLE_BLOOD' | 'BLOOD_SERUM' | 'PLASMA' | 'URINE_RANDOM' | 'CEREBROSPINAL_FLUID' | 'TISSUE_BIOPSY';
  readonly standardTurnaroundTimeHoursCount: number; // expected turnaround e.g. 24
  readonly standardReferenceRangeText: string;
  readonly laboratoryDepartmentClass: 'HEMATOLOGY' | 'BIOCHEMISTRY' | 'MICROBIOLOGY' | 'HISTOPATHOLOGY' | 'MOLECULAR_GENETICS';
  readonly isCriticalAlertTestFlag: boolean; // True if values can trigger instant critical alerts to physicians
}
