import { DepartmentInstanceId } from '../identity/department-instance-id.js';

export interface ServiceContract {
  readonly contractId: string;
  readonly consumerDepartmentId: DepartmentInstanceId;
  readonly providerDepartmentId: DepartmentInstanceId;
  readonly agreedSlaDurationHours: number;
  readonly periodicReportFrequencyMonthsValue: number;
  readonly penaltyCreditsBufferRatio: number;
  readonly isActiveContract: boolean;
}
