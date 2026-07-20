export interface ProductFamily {
  readonly productFamilyId: string;
  readonly uniqueFamilyCode: string; // e.g. "FAM-ROTORS-GEN4"
  readonly familyName: string;
  readonly classificationCategory: 'FINISHED_GOODS' | 'SEMI_FINISHED_SUBASSEMBLY' | 'RAW_MATERIAL' | 'CONSUMABLE';
  readonly standardLeadTimeDaysCount: number;
  readonly targetMarginRatioDecimal: number;
  readonly activeStatusFlag: boolean;
  readonly createdAt: Date;
}
