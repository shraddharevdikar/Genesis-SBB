export interface RelevanceFactor {
  readonly name: string;
  readonly impactWeight: number; // 0.0 to 1.0
  readonly score: number; // 0 to 100
  readonly description: string;
  readonly type: 'FRESHNESS' | 'BUSINESS_IMPACT' | 'EXECUTIVE_IMPORTANCE' | 'HISTORIC_RECURRENCE';
}
