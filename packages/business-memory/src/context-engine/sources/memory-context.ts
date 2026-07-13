import { PrivacyLevel } from '../../governance/privacy-level.js';

export interface EngineMemoryContext {
  readonly memorySourceId: string;
  readonly coreFactsCount: number;
  readonly mainSubject: string;
  readonly safetyClassification: PrivacyLevel;
  readonly retentionYears: number;
}
