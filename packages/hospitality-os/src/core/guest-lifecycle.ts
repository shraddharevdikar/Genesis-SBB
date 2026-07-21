export type GuestLifecycleState =
  | 'INQUIRY'
  | 'BOOKING_PENDING'
  | 'RESERVATION_CONFIRMED'
  | 'CHECKED_IN'
  | 'IN_HOUSE'
  | 'CHECKING_OUT'
  | 'CHECKED_OUT'
  | 'CANCELLED'
  | 'NO_SHOW'
  | 'DISPUTED_BLACKLISTED';

export interface GuestLifecycleTransition {
  readonly transitionId: string;
  readonly uniqueTransitionCode: string;
  readonly associatedGuestId: string;
  readonly associatedReservationId?: string;
  readonly previousState: GuestLifecycleState;
  readonly targetState: GuestLifecycleState;
  readonly transitionTriggeredByOperatorId: string;
  readonly transitionNotesText?: string;
  readonly transitionTimestamp: Date;
}
