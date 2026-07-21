export interface DiningTable {
  readonly tableNumberString: string;
  readonly seatingCapacityCount: number;
  readonly isAccessibleFlag: boolean;
  readonly isOutdoorSeatingFlag: boolean;
}

export interface Restaurant {
  readonly restaurantId: string;
  readonly uniqueRestaurantCode: string; // e.g. "REST-ZUR-FINE-01"
  readonly associatedPropertyIdString: string;
  readonly restaurantNameString: string;
  readonly cuisineTypeDescriptionText: string;
  readonly maximumDiningCapacityCount: number;
  readonly physicalTablesConfigurationList: DiningTable[];
  readonly operatesBreakfastFlag: boolean;
  readonly operatesLunchFlag: boolean;
  readonly operatesDinnerFlag: boolean;
  readonly activeStatusFlag: boolean;
  readonly lastModifiedAt: Date;
}
