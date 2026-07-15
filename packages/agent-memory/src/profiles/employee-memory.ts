import { MemoryReferenceId } from '../identity/memory-reference-id.js';

export interface EmployeeMemory {
  readonly referenceId: MemoryReferenceId;
  readonly employeeIdHash: string;
  readonly businessUnit: string; // e.g. "SBB_OPERATIONAL_CREW"
  readonly certificationsList: string[]; // List of certified train classes/roles
  readonly shiftLogId?: string;
  readonly recordedAt: Date;
}
