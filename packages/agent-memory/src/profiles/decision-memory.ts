import { MemoryReferenceId } from '../identity/memory-reference-id.js';

export interface DecisionMemory {
  readonly referenceId: MemoryReferenceId;
  readonly decisionPointId: string;
  readonly proposedAction: string;
  readonly riskTier: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  readonly alternativesConsidered: string[];
  readonly validationConfidenceScore: number; // 0.0 - 1.0 confidence ratio
  readonly authorizedBySupervisorRole?: string;
  readonly timestamp: Date;
}
