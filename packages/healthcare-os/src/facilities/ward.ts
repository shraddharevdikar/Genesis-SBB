export interface HealthcareWard {
  readonly wardId: string;
  readonly uniqueWardCode: string; // e.g. "WRD-ZURICH-3F-EAST"
  readonly associatedDepartmentIdString: string;
  readonly wardDisplayName: string;
  readonly wardTypeClassification: 'GENERAL_MALE' | 'GENERAL_FEMALE' | 'ICU_S_ISOLATION' | 'PEDIATRIC_PLAYWARD' | 'POST_OP_RECOVERY';
  readonly nurseStationPhoneNumber: string;
  readonly currentAvailableBedCount: number;
  readonly totalBedsAllocatedCount: number;
  readonly infectionControlStatus: 'CLEAN' | 'CONTACT_PRECAUTIONS' | 'QUARANTINE_LOCKED';
}
