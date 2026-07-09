export interface CapacityPlan {
  readonly planId: string;
  readonly department: string; // e.g. "Engineering", "Customer Support"
  readonly availableFTECount: number;
  readonly requiredFTECount: number;
  readonly deficitFTECount: number; // requiredFTECount - availableFTECount
  readonly primarySkillsNeeded: string[];
  readonly scalingStrategy: string; // e.g. "Contractors", "External hiring", "Cross-training"
}
