export type MaturityStageCode =
  | 'STAGE_1_AD_HOC'
  | 'STAGE_2_REPEATABLE'
  | 'STAGE_3_STANDARDIZED'
  | 'STAGE_4_MEASURED'
  | 'STAGE_5_CONTINUOUS_LEARNING';

export interface MaturityModel {
  readonly modelId: string;
  readonly scopeCode: 'ENTERPRISE' | 'DEPARTMENT' | 'CAPABILITY';
  readonly targetScopeId: string; // e.g. businessId, departmentId, or capabilityId
  readonly currentStage: MaturityStageCode;
  readonly keySuccessCriteriaPassedList: string[];
  readonly gapsToNextStageList: string[];
  readonly lastEvaluatedAt: Date;
}
