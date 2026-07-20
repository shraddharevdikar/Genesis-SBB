export interface KpiValueRecord {
  readonly currentVal: number;
  readonly targetVal: number;
  readonly lastCalculatedDateTime: Date;
  readonly isStatusGreenFlag: boolean;
  readonly deviationPercentageSigned: number;
}

export interface MarketingKpis {
  readonly customerAcquisitionCostCAC: KpiValueRecord;
  readonly returnOnAdSpendROAS: KpiValueRecord;
  readonly marketingQualifiedLeadsMQL: KpiValueRecord;
  readonly costPerLeadCPL: KpiValueRecord;
  readonly conversionRateVisitorToLead: KpiValueRecord;
  readonly conversionRateLeadToCustomer: KpiValueRecord;
  readonly shareOfVoicePercentageSOV: KpiValueRecord;
}
