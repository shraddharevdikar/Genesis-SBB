export type TaskAssignmentStatusCode = 'ASSIGNED_NOT_STARTED' | 'ACTIVE_WORKING' | 'SUBMITTED_FOR_REVIEW' | 'VERIFIED_COMPLETED' | 'BLOCKED_STALLED';

export interface TaskAssignment {
  readonly assignmentId: string;
  readonly uniqueAssignmentCode: string; // e.g. "TSK-CLOUD-ACME-01-ARCH-DOC-ASM"
  readonly associatedProjectIdString: string; // Links to Project
  readonly associatedDeliverableIdString?: string; // Optional parent Deliverable link
  readonly taskTitleString: string;
  readonly taskInstructionsText: string;
  readonly assignedToConsultantIdString: string; // Links to Consultant
  readonly estimatedHoursCount: number;
  readonly targetDueDate: Date;
  readonly currentStatus: TaskAssignmentStatusCode;
  readonly blockNotesText?: string;
  readonly actualHoursSpentDecimal?: number;
  readonly completedTimestamp?: Date;
  readonly lastModifiedAt: Date;
}
