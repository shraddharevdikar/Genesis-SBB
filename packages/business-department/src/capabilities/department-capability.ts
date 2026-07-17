import { BusinessCapability } from '@sbb/business-foundation';

export interface DepartmentCapability {
  readonly coreCapabilityRef: BusinessCapability;
  readonly isPrimaryCapability: boolean;
  readonly serviceLevelAgreementHoursCount: number;
  readonly assignedCostCenterCode: string;
}
