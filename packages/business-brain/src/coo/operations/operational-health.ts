import { OperationalCapability } from './operational-capability.js';
import { OperationalReadiness } from './operational-readiness.js';

export interface OperationalHealth {
  readonly healthId: string;
  readonly tenantId: string;
  readonly processHealthScore: number;       // e.g. 0-100 or 0.0-1.0
  readonly deliveryHealthScore: number;      // e.g. 0-100 or 0.0-1.0
  readonly resourceUtilizationRate: number;  // e.g. 0.0-1.0
  readonly operationalEfficiencyScore: number;// e.g. 0-100 or 0.0-1.0
  readonly slaComplianceRate: number;        // e.g. 0.0-1.0
  readonly capabilities: OperationalCapability[];
  readonly readiness: OperationalReadiness;
  readonly overallStatus: 'CRITICAL' | 'WARNING' | 'HEALTHY' | 'OPTIMAL';
  readonly assessedAt: Date;
}
