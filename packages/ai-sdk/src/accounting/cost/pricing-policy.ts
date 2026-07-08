export interface PricingModel {
  readonly modelId: string;
  readonly providerId: string;
  readonly inputRatePerMillion: number;
  readonly outputRatePerMillion: number;
  readonly cachedInputRatePerMillion?: number;
  readonly minChargeUSD?: number;
}

export interface PricingPolicy {
  readonly policyId: string;
  readonly currency: string;
  readonly pricingModels: Map<string, PricingModel>;
  readonly appliesToTenantTiers: string[];
  
  getRateForModel(modelId: string): PricingModel | undefined;
}
