export interface ForecastUpdatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly forecastIdString: string;
  readonly uniqueForecastCode: string;
  readonly targetFiscalQuarterString: string;
  readonly salesTerritoryCode: string;
  readonly newClosedWonRevenueAmount: number;
  readonly newPredictiveCommitAmount: number;
  readonly currencyCode: string;
  readonly updatedByOperatorRoleId: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
