export interface CustomerInsight {
  readonly insightId: string;
  readonly tenantId: string;
  readonly category: 'PRODUCT_FEEDBACK' | 'PRICING_SENSITIVITY' | 'SERVICE_SATISFACTION' | 'CHURN_RISK_TRIGGER';
  readonly sourceChannel: string; // e.g., "G2 Reviews", "Zendesk Tickets", "Customer Advisory Board"
  readonly summary: string;
  readonly impactLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  readonly sentimentScore: number; // -1.0 to 1.0 or 0 to 100
  readonly actionableRecommendation: string;
  readonly capturedAt: Date;
}
