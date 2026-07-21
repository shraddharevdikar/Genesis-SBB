export interface LaboratoryShed {
  readonly labId: string;
  readonly uniqueLabCode: string; // e.g., "LAB-BIO-PHARM"
  readonly associatedCampusIdString: string; // Links to Campus
  readonly displayName: string;
  readonly specializedEquipmentsList: string[]; // e.g. ["SPECTROMETER", "BIO_HOOD_LEVEL_3", "GAS_CHROMATOGRAPH"]
  readonly maximumSafetyOccupancyLimit: number; // For regulatory compliance audits
  readonly currentScheduledReservationsCount: number;
  readonly safetyCertificationExpiryDate: Date; // Important for audit tracking
  readonly isBioSafetyLevelLevelCode: 'BSL_1' | 'BSL_2' | 'BSL_3' | 'BSL_4';
  readonly activeStatusFlag: boolean;
  readonly lastModifiedAt: Date;
}
