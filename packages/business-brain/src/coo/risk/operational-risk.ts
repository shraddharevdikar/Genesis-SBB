import { OperationalMitigation } from './operational-mitigation.js';

export interface OperationalRisk {
  readonly riskId: string;
  readonly tenantId: string;
  readonly title: string;
  readonly description: string;
  readonly category: 'SUPPLY_CHAIN' | 'INFRASTRUCTURE' | 'PEOPLE' | 'SECURITY' | 'COMPLIANCE' | 'PROCESS_FAILURE';
  readonly probability: number; // 1 to 5 scale
  readonly severity: number;    // 1 to 5 scale
  readonly mitigations: OperationalMitigation[];
  readonly raisedBy: string;
  readonly raisedAt: Date;
}
