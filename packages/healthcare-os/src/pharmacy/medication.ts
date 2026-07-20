export interface MedicalIngredient {
  readonly standardSubstanceName: string;
  readonly concentrationStrengthText: string; // e.g. "500 mg"
}

export interface Medication {
  readonly medicationId: string;
  readonly uniqueMedicationCode: string; // e.g. "MED-RXNORM-1204"
  readonly rxNormConceptUniqueId?: string; // RXCUI code
  readonly commercialBrandName: string; // e.g. "Advil"
  readonly genericDrugName: string; // e.g. "Ibuprofen"
  readonly pharmaceuticalForm: 'ORAL_TABLET' | 'INTRAVENOUS_INJECTION' | 'TOPICAL_OINTMENT' | 'INHALER_AEROSOL';
  readonly activeIngredientsList: MedicalIngredient[];
  readonly manufacturerName: string;
  readonly requiresPrescriptionFlag: boolean;
  readonly isControlledSubstanceFlag: boolean; // Requires secondary verification under narcotics acts
  readonly standardPackageStorageTemperatureCelsius?: number;
}
