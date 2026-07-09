export interface CustomerPersona {
  readonly personaId: string;
  readonly tenantId: string;
  readonly name: string; // e.g., "Developer Dave", "Enterprise CEO"
  readonly title: string;
  readonly industryArchetype: string;
  readonly coreNeeds: string[];
  readonly painPoints: string[];
  readonly motivationDrivers: string[];
  readonly preferredMarketingChannels: string[];
  readonly estimatedLtvUSD: number; // Customer Lifetime Value
  readonly typicalBuyingCycleDays: number;
}
