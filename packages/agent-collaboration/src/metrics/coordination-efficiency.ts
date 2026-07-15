import { CollaborationId } from '../identity/collaboration-id.js';

export interface CoordinationEfficiency {
  readonly efficiencyId: string;
  readonly collaborationId: CollaborationId;
  readonly tenantId: string;
  readonly averageHandoverTimeMinutes: number;
  readonly activeResourceBottlenecksList: string[]; // participantIds causing delays
  readonly syncOverheadPercentage: number; // Ratio of sync time vs actual execution time
  readonly calculatedAt: Date;
}
