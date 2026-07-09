import { MemoryContext } from '../../core/memory-context.js';

export interface OrganizationContext extends MemoryContext {
  readonly activeBusinessUnitId?: string;
  readonly activeDepartmentId?: string;
  readonly isStrategicReviewSession: boolean;
  readonly currentTransformationProgramId?: string;
}
