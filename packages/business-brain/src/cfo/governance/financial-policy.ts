import { ApprovalLimit } from './approval-limit.js';

export interface FinancialPolicy {
  readonly policyId: string;
  readonly name: string;
  readonly description: string;
  readonly approvalLimits: ApprovalLimit[];
  readonly minCashReserveUSD: number;
  readonly maxDebtToEquityRatio: number;
  readonly isActive: boolean;
  readonly createdAt: Date;
}
