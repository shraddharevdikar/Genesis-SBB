import { SkillId } from '../identity/skill-id.js';

export interface SkillPerformance {
  readonly performanceId: string;
  readonly tenantId: string;
  readonly skillId: SkillId;
  readonly successRateRatio: number; // 0.0 - 1.0 success outcome ratio
  readonly averageLatencyMs: number;
  readonly totalExecutionsCount: number;
  readonly failedExecutionsCount: number;
  readonly recordedAt: Date;
}
