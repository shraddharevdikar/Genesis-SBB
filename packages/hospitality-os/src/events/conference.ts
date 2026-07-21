export interface ConferenceHardwareRentRow {
  readonly hardwareItemName: string; // e.g. "PROJECTOR_4K", "HYBRID_MIC_SYSTEM"
  readonly quantityCount: number;
  readonly rentalPriceAmount: number;
}

export interface Conference {
  readonly conferenceId: string;
  readonly associatedEventBookingIdString: string;
  readonly conferenceTopicTitle: string;
  readonly scheduledSessionStartDate: Date;
  readonly scheduledSessionEndDate: Date;
  readonly physicalRoomSetupCode: 'THEATER_ROWS' | 'CLASSROOM_DESKS' | 'U_SHAPE_BOARDROOM' | 'HOLLOW_SQUARE';
  readonly anticipatedAttendeesCount: number;
  readonly equipmentRentalsList: ConferenceHardwareRentRow[];
  readonly dedicatedTechnicalSupportRequiredFlag: boolean;
  readonly dedicatedSupportStaffRoleIdString?: string;
  readonly lastModifiedAt: Date;
}
