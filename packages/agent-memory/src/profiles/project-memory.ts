import { MemoryReferenceId } from '../identity/memory-reference-id.js';

export interface ProjectMemory {
  readonly referenceId: MemoryReferenceId;
  readonly projectId: string;
  readonly projectName: string;
  readonly projectMilestoneStatus: string;
  readonly budgetingQuarter: string; // e.g. "Q3-2026"
  readonly technicalSpecificationUris: string[];
  readonly lastModifiedAt: Date;
}
