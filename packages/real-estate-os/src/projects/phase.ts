import { RealEstateProjectId } from './real-estate-project.js';

export interface ProjectPhase {
  readonly phaseId: string;
  readonly uniquePhaseCode: string; // e.g. "PHS-01" or "PHASE-FOUNDATION-CORE"
  readonly associatedProjectId: RealEstateProjectId;
  readonly displayName: string;
  readonly descriptionText: string;
  readonly plannedStartDate: Date;
  readonly plannedEndDate: Date;
  readonly actualStartDate?: Date;
  readonly actualEndDate?: Date;
  readonly phaseProgressPercentage: number;
  readonly currentStatus: 'NOT_STARTED' | 'ACTIVE_ON_TRACK' | 'DELAYED_WARNING' | 'COMPLETED' | 'SUSPENDED';
  readonly lastModifiedAt: Date;
}
