import { HRContext } from '../core/hr-context.js';
import { EmployeeId } from '../employees/employee.js';

export interface PromotionApprovedEventPayload {
  readonly employeeId: EmployeeId;
  readonly associatedReviewIdString?: string;
  readonly previousGradeLevelString: string;
  readonly newGradeLevelString: string;
  readonly previousRoleCodeString: string;
  readonly newRoleCodeString: string;
  readonly updatedAnnualBaseSalaryAmount: number;
  readonly updatedAnnualVariableBonusPercentageDecimal: number;
  readonly currencyCode: string;
  readonly effectiveStartDate: Date;
}

export interface PromotionApprovedEvent {
  readonly eventId: string;
  readonly eventCode: 'HROS.PROMOTION_APPROVED';
  readonly occurredAt: Date;
  readonly context: HRContext;
  readonly payload: PromotionApprovedEventPayload;
}
