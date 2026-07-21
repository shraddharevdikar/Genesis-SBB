export interface SpaTreatment {
  readonly treatmentId: string;
  readonly uniqueTreatmentCode: string; // e.g. "SPA-MASSAGE-DEEP"
  readonly treatmentName: string;
  readonly durationMinutesCount: number; // e.g. 60
  readonly basePriceAmount: number;
  readonly therapistCertificationRequiredString?: string;
  readonly activeStatusFlag: boolean;
}

export interface Spa {
  readonly spaId: string;
  readonly uniqueSpaCode: string; // e.g. "SPA-ZUR-MAIN"
  readonly associatedPropertyIdString: string;
  readonly displayName: string;
  readonly treatmentsCatalogList: SpaTreatment[];
  readonly totalTreatmentRoomsCount: number;
  readonly openingHoursText: string; // e.g. "08:00 - 22:00"
  readonly activeStatusFlag: boolean;
  readonly lastModifiedAt: Date;
}
