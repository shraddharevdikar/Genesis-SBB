import { HospitalityContext } from './hospitality-context.js';
import { Reservation } from '../reservations/reservation.js';
import { GuestId } from '../guests/guest.js';
import { RoomAllocation } from '../reservations/room-allocation.js';
import { HousekeepingTask } from '../housekeeping/housekeeping-task.js';
import { FacilityBooking } from '../facilities/facility-booking.js';
import { GuestFolio } from '../billing/guest-folio.js';
import { HospitalityInvoice } from '../billing/hospitality-invoice.js';

export interface HospitalityFramework {
  /**
   * Configures, adjusts, or cancels guest stay reservations across specific property calendars.
   */
  manageReservation(
    associatedGuestId: GuestId,
    scheduledCheckInDate: Date,
    scheduledCheckOutDate: Date,
    requestedRoomCategoryCode: string,
    guestAdultsCount: number,
    guestChildrenCount: number,
    remarksNotesJSON: string,
    context?: HospitalityContext
  ): Promise<Reservation>;

  /**
   * Initiates the official arrival sequence, verifying guest identities and establishing pre-authorization deposits.
   */
  checkInGuest(
    associatedReservationIdString: string,
    identityDocumentType: string,
    identityDocumentReferenceNumber: string,
    preAuthHoldAmountDecimal: number,
    context?: HospitalityContext
  ): Promise<Reservation>;

  /**
   * Allocates a specific physical room number matching the guest's booked category and preferences.
   */
  allocateRoom(
    associatedReservationIdString: string,
    targetRoomIdString: string,
    overrideDirtyStatusFlag: boolean,
    context?: HospitalityContext
  ): Promise<RoomAllocation>;

  /**
   * Dispatches and tracks specialized cleanups or stay-over refreshes across properties.
   */
  coordinateHousekeeping(
    targetRoomIdString: string,
    taskTypeCode: string,
    assignedHousekeeperStaffRoleIdString?: string,
    taskPriorityCode?: string,
    context?: HospitalityContext
  ): Promise<HousekeepingTask>;

  /**
   * Books, logs, or tracks wellness sessions, tennis courts, personal trainers, or pool-cabana reservations.
   */
  manageFacilities(
    associatedGuestId: GuestId,
    facilityTypeCode: string,
    scheduledStartTimestamp: Date,
    scheduledEndTimestamp: Date,
    associatedStaffRoleIdString?: string,
    customRequestsText?: string,
    context?: HospitalityContext
  ): Promise<FacilityBooking>;

  /**
   * Audits or appends itemized point-of-sale line charges, laundry balances, or bar tabs to a guest's master folio.
   */
  processGuestBilling(
    associatedFolioIdString: string,
    chargeCategoryCode: string,
    amountChargedDecimal: number,
    quantityCount: number,
    postedByStaffRoleIdString: string,
    referenceSourceCode?: string,
    context?: HospitalityContext
  ): Promise<GuestFolio>;

  /**
   * Finalizes folio payments, releases any active card pre-authorization holds, and locks down the final invoice.
   */
  checkOutGuest(
    associatedReservationIdString: string,
    paymentMethodCode: string,
    complianceTaxIdString?: string,
    context?: HospitalityContext
  ): Promise<HospitalityInvoice>;
}
