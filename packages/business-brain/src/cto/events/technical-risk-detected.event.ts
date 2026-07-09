export interface TechnicalRiskDetectedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly componentName: string;
  readonly riskCategory: 'SECURITY_VULNERABILITY' | 'SCALABILITY_LIMIT' | 'CRITICAL_DEBT' | 'FAILOVER_DEFICIT';
  readonly severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  readonly description: string;
  readonly detectedAt: Date;
}
