export type BudgetLifecycleState =
  | 'DRAFT'
  | 'UNDER_REVIEW'
  | 'APPROVED'
  | 'ACTIVE'
  | 'REVISED'
  | 'CLOSED';

export type JournalEntryLifecycleState =
  | 'UNPOSTED'
  | 'POSTED'
  | 'VOIDED';

export type PurchaseOrderLifecycleState =
  | 'DRAFT'
  | 'PENDING_APPROVAL'
  | 'APPROVED'
  | 'REJECTED'
  | 'DISPATCHED'
  | 'PARTIALLY_DELIVERED'
  | 'FULFILLED'
  | 'CANCELLED';

export type InvoiceLifecycleState =
  | 'DRAFT'
  | 'ISSUED'
  | 'PARTIALLY_PAID'
  | 'PAID'
  | 'OVERDUE'
  | 'VOIDED'
  | 'WRITTEN_OFF';

export interface FinanceLifecycle {
  readonly currentBudgetState: BudgetLifecycleState;
  readonly lastStateTransitionAt: Date;
  readonly createdByOperatorRoleId: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
