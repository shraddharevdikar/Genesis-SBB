export interface RecognitionProgram {
  readonly recognitionId: string;
  readonly uniqueRecognitionCode: string; // e.g. "REC-VALUES-2026-004"
  readonly nomineeEmployeeIdString: string;
  readonly nominatorEmployeeIdString: string;
  readonly associatedCompanyValueCodeString: 'INTEGRITY' | 'CUSTOMER_OBSESSION' | 'INNOVATION' | 'COLLABORATION' | 'OWNERSHIP';
  readonly nominationReasonText: string;
  readonly pointBonusAwardQuantityNumeric: number; // For reward store
  readonly spotBonusAwardAmount?: number;
  readonly spotBonusCurrencyCode?: string;
  readonly isApprovedFlag: boolean;
  readonly approvedByOperatorRoleId?: string;
  readonly approvedAt?: Date;
}
