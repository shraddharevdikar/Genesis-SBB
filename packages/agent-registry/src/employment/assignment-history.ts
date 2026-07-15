export interface AssignmentHistory {
  readonly recordId: string;
  readonly agentId: string;
  readonly departmentId: string;
  readonly managerId: string;
  readonly assignedAt: Date;
  readonly releasedAt?: Date;
  readonly assignmentNotes?: string;
}
