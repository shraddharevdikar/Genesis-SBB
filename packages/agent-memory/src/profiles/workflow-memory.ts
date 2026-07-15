import { MemoryReferenceId } from '../identity/memory-reference-id.js';

export interface WorkflowMemory {
  readonly referenceId: MemoryReferenceId;
  readonly workflowId: string;
  readonly workflowTemplateName: string;
  readonly activeStepName: string;
  readonly previousStepStatus: 'SUCCESS' | 'FAILED' | 'RETRYING';
  readonly variablesStateSnapshotJson: string; // Serialized state variable dictionary
  readonly updatedAt: Date;
}
