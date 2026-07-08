import { FinancialRisk } from '../risk/financial-risk.js';

export interface FinancialRiskDetectedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly riskId: string;
  readonly riskSnapshot: FinancialRisk;
  readonly severityLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  readonly requiresCouncilEscalation: boolean;
  readonly timestamp: Date;
}
