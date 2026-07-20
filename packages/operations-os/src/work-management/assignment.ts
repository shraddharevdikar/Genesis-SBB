export interface OperationsAssignment {
  readonly assignmentId: string;
  readonly uniqueAssignmentCode: string; // e.g. "ASN-4019"
  readonly targetEntityIdString: string; // Task or WorkOrder ID
  readonly assignedResourceIdString: string; // Worker/Machine Resource ID
  readonly assignedByOperatorRoleId: string;
  readonly assignedAt: Date;
  readonly lastModifiedAt: Date;
}
