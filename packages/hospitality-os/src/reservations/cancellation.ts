export type CancellationPolicyType =
  | 'FULLY_REFUNDABLE_24H'
  | 'NON_REFUNDABLE'
  | 'PARTIAL_REFUNDABLE_7D'
  | 'NO_SHOW_PENALTY_100';

export interface Cancellation {
  readonly cancellationId: string;
  readonly associatedReservationIdString: string;
  readonly cancellationPolicyApplied: CancellationPolicyType;
  readonly cancellationReasonCategory: 'PERSONAL_CHANGE' | 'FORCE_MAJEURE' | 'FLIGHT_DELAY_CANCEL' | 'NO_REASON_GIVEN' | 'OTHER';
  readonly detailedReasonNotesText?: string;
  readonly calculatedCancellationPenaltyFeeAmount: number; // e.g. 1 night's stay charge (links to FinanceOS)
  readonly penaltyWaivedFlag: boolean; // Waived by hotel manager for good guest loyalty relation
  readonly penaltyWaivedByStaffRoleIdString?: string;
  readonly cancellationTimestamp: Date;
}
