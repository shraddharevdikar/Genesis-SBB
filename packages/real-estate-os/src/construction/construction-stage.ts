import { RealEstateProjectId } from '../projects/real-estate-project.js';
import { TowerId } from '../projects/tower.js';
import { ConstructionStageState } from '../core/property-lifecycle.js';

export interface ConstructionStage {
  readonly stageId: string;
  readonly uniqueStageCode: string; // e.g. "STG-FOUNDATION-A"
  readonly associatedProjectId: RealEstateProjectId;
  readonly associatedTowerId?: TowerId;
  readonly stageState: ConstructionStageState;
  readonly plannedStartDate: Date;
  readonly plannedEndDate: Date;
  readonly actualStartDate?: Date;
  readonly actualEndDate?: Date;
  readonly completionPercentageDecimal: number; // e.g. 0.85 (85%)
  readonly supervisorRoleIdString: string; // supervisor
  readonly currentStatus: 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED' | 'DELAYED_RISK' | 'ON_HOLD';
  readonly lastModifiedAt: Date;
}
