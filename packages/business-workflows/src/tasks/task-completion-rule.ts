export type CompletionConditionTypeCode =
  | 'SINGLE_SIGN_OFF'
  | 'DUAL_HUMAN_IN_THE_LOOP_SIGN_OFF'
  | 'CONSENSUS_VOTE_RATIO'
  | 'DATA_OUTPUT_VALIDATION'
  | 'AUTO_SYSTEM_SUCCESS_SIGNAL';

export interface TaskCompletionRule {
  readonly ruleId: string;
  readonly associatedTaskReferenceIdString: string;
  readonly conditionType: CompletionConditionTypeCode;
  readonly requiredConsensusRatioScore?: number; // e.g. 0.66 for 2/3rds
  readonly requiredOutputSchemaJsonString?: string; // JSON Schema validation text
  readonly requireDualSignatureOnRiskScoreLimit: number; // risk limit
}
