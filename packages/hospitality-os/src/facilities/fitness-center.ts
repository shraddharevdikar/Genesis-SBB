export interface FitnessClass {
  readonly classId: string;
  readonly classTitle: string;
  readonly scheduledTime: Date;
  readonly maximumCapacityCount: number;
  readonly instructorStaffRoleIdString: string;
}

export interface FitnessCenter {
  readonly fitnessCenterId: string;
  readonly uniqueFitnessCenterCode: string; // e.g. "FIT-ZUR-MAIN"
  readonly associatedPropertyIdString: string;
  readonly displayName: string;
  readonly maximumSafetyOccupancyLimit: number; // Regulatory compliance limit
  readonly activePersonalTrainersStaffRolesList: string[]; // Links to HROS
  readonly scheduledClassesList: FitnessClass[];
  readonly requiresInductionSafetyBriefingFlag: boolean;
  readonly activeStatusFlag: boolean;
  readonly lastModifiedAt: Date;
}
