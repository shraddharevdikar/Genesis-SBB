export interface MenuItem {
  readonly itemId: string;
  readonly itemName: string;
  readonly descriptionText: string;
  readonly basePriceAmount: number;
  readonly taxPercentageDecimal: number;
  readonly allergenWarningTagsList: string[]; // e.g. ["NUTS", "DAIRY", "GLUTEN"]
  readonly estimatedPreparationMinutesCount: number;
  readonly signatureChefSpecialFlag: boolean;
  readonly availableStatusFlag: boolean;
}

export interface MenuSection {
  readonly sectionName: string; // e.g. "Appetizers", "Main Courses", "Fine Wines"
  readonly displaySequenceIndex: number;
  readonly itemsList: MenuItem[];
}

export interface Menu {
  readonly menuId: string;
  readonly uniqueMenuCode: string; // e.g., "MNU-FINE-FALL2026"
  readonly menuDisplayName: string;
  readonly associatedRestaurantIdString: string;
  readonly menuSectionsList: MenuSection[];
  readonly activeStatusFlag: boolean;
  readonly validFromDate?: Date;
  readonly validToDate?: Date;
  readonly lastModifiedAt: Date;
}
