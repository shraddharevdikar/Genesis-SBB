import { BusinessKpi } from './business-kpi.js';

export interface AiWorkforceKpi {
  readonly baseKpi: BusinessKpi;
  readonly targetCognitiveAgentIdString: string;
  readonly autonomousDecisionRatioScore: number; // e.g. 0.0 - 1.0 (percent decisions autonomous)
  readonly errorRollbackCountThreshold: number;
}
