import { EnterpriseObjectiveId } from './enterprise-objective.js';

export interface StrategicInitiative {
  readonly initiativeId: string;
  readonly uniqueInitiativeCode: string; // e.g. "INIT-AI-ORCHESTRATION"
  readonly alignedObjectiveIdsList: EnterpriseObjectiveId[];
  readonly displayName: string;
  readonly executiveSponsorRoleIdString: string; // e.g. "CEO", "CTO"
  readonly budgetAllocatedAmount: number;
  readonly currencyCode: string;
  readonly plannedStartDate: Date;
  readonly plannedEndDate: Date;
  readonly completionPercentageDecimal: number;
  readonly status: 'BACKLOG' | 'PLANNING' | 'IN_FLIGHT' | 'ON_HOLD' | 'COMPLETED' | 'CANCELLED';
  readonly lastModifiedAt: Date;
}
