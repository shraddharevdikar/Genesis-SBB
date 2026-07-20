import { RealEstateProjectId } from '../projects/real-estate-project.js';
import { TowerId } from '../projects/tower.js';

export interface ConstructionMilestone {
  readonly milestoneId: string;
  readonly uniqueMilestoneCode: string; // e.g. "MS-SLAB-10-TWR-A"
  readonly associatedProjectId: RealEstateProjectId;
  readonly associatedTowerId?: TowerId;
  readonly displayName: string;
  readonly physicalRequirementDescription: string; // e.g. "Casting of 10th-floor roof slab"
  readonly scheduledCompletionDate: Date;
  readonly actualCompletionDate?: Date;
  readonly certifiedFlag: boolean;
  readonly certifiedByIndependentEngineerName?: string;
  readonly certificationDocURI?: string;
  readonly isTriggeredPaymentPlanFlag: boolean;
  readonly checkedAt?: Date;
}
