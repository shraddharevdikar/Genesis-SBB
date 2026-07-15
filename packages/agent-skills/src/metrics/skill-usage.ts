import { SkillId } from '../identity/skill-id.js';

export interface SkillUsage {
  readonly usageId: string;
  readonly tenantId: string;
  readonly skillId: SkillId;
  readonly activeAgentsUsingCount: number;
  readonly peakConcurrentExecutionsCount: number;
  readonly resourceUtilizationScore: number; // 0.0 - 1.0 (relative cost weight)
  readonly calculatedAt: Date;
}
