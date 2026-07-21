export interface BanquetCateringLine {
  readonly requestedOptionCode: string; // e.g. "MENU-VEGAN-PREMIUM"
  readonly servingTimestamp: Date;
  readonly anticipatedHeadsCount: number;
  readonly unitCostAmount: number;
}

export interface Banquet {
  readonly banquetId: string;
  readonly associatedEventBookingIdString: string;
  readonly banquetMenuTitleString: string;
  readonly cateringSelectionsList: BanquetCateringLine[];
  readonly totalEstimatedCateringCostAmount: number;
  readonly physicalRoomSetupCode: 'ROUND_TABLES' | 'BUFFET_STATIONS' | 'COCKTAIL_STANDS' | 'LONG_COMMUNAL_TABLES';
  readonly specialLightingAudioVisualRequirementsJSON?: string;
  readonly internalCateringCoordinatorStaffRoleIdString?: string;
  readonly lastModifiedAt: Date;
}
