export interface LearningPolicy {
  readonly policyId: string;
  readonly tenantId: string;
  readonly code: string; // e.g., "SBB_LLM_WEIGHTS_MOD_PROHIBITION"
  readonly allowAutomaticKnowledgeBaseUpdates: boolean;
  readonly allowAutomaticSkillDefaultsUpdates: boolean;
  readonly mandatoryHumanApprovalForAutonomyElevations: boolean;
  readonly forbiddenLearningKeywordsList: string[]; // Set of keywords or sensitive topics barred from lesson capture
  readonly isActive: boolean;
}
