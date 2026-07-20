export interface InspectionParamResult {
  readonly paramNameString: string;
  readonly expectedValueText: string;
  readonly measuredValueText: string;
  readonly passedFlag: boolean;
}

export interface QualityInspection {
  readonly inspectionId: string;
  readonly uniqueInspectionCode: string; // e.g. "INS-QA-2026-0042"
  readonly associatedStandardIdString: string;
  readonly targetEntityIdString: string; // The asset or work order or release inspected
  readonly inspectorRoleIdString: string;
  readonly parametersEvaluatedList: InspectionParamResult[];
  readonly overallScoreNumeric: number; // e.g. 0 to 100
  readonly passedFlag: boolean;
  readonly failureReasonDescriptionText?: string;
  readonly completedAt: Date;
}
