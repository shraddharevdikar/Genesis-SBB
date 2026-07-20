export type RequisitionPriorityCode =
  | 'LOW_ROUTINE'
  | 'MEDIUM_PRIORITY'
  | 'HIGH_EXPANSION_CRITICAL'
  | 'CRITICAL_REPLACEMENT_URGENT';

export interface JobRequisition {
  readonly requisitionId: string;
  readonly uniqueRequisitionCode: string; // e.g. "REQ-SWE-0412"
  readonly associatedPositionIdString: string; // Linked workforce position
  readonly jobTitle: string;
  readonly detailedDescriptionNotes: string;
  readonly salaryRangeMinAmount: number;
  readonly salaryRangeMaxAmount: number;
  readonly currencyCode: string;
  readonly priority: RequisitionPriorityCode;
  readonly requestedByOperatorRoleId: string; // Hiring Manager
  readonly approvedByOperatorRoleId?: string; // VP / Finance Partner
  readonly isApprovedFlag: boolean;
  readonly targetHireDate: Date;
  readonly postingStatus: 'DRAFT' | 'INTERNAL_ONLY' | 'PUBLICLY_POSTED' | 'SUSPENDED_ON_HOLD' | 'FILLED' | 'CANCELLED';
  readonly createdAt: Date;
}
