export interface ApiHealth {
  readonly checkId: string;
  readonly tenantId: string;
  readonly gatewayStatus: 'AVAILABLE' | 'DEGRADED' | 'UNAVAILABLE';
  readonly currentActiveConnectionsCount: number;
  readonly validationFailureRate: number;
  readonly authorizationFailureRate: number;
  readonly lastCalculatedAt: Date;
}
