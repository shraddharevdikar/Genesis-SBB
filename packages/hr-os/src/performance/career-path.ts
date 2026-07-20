export interface CareerNode {
  readonly currentRoleCodeString: string;
  readonly nextPromotionalRoleCodeString: string;
  readonly typicalMonthsInRoleCountRangeMin: number;
  readonly typicalMonthsInRoleCountRangeMax: number;
  readonly essentialPreRequisiteCompetenciesList: string[]; // Competency keys required
}

export interface CareerPath {
  readonly pathId: string;
  readonly uniquePathCode: string; // e.g. "PTH-ENG-TRACK"
  readonly displayName: string;
  readonly associatedJobFamilyCode: string; // e.g. "ENGINEERING"
  readonly careerNodesList: CareerNode[];
  readonly lastUpdatedAt: Date;
}
