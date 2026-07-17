import { PlaybookReference } from '@sbb/business-foundation';

export interface DepartmentPlaybook {
  readonly departmentPlaybookId: string;
  readonly corePlaybookRef: PlaybookReference;
  readonly localContextAdjustmentsNotes?: string;
  readonly isRestrictedToDepartmentStaffOnly: boolean;
  readonly lastValidatedAt: Date;
}
