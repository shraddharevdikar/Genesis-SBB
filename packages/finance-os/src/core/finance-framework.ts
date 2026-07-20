import { FinanceContext } from './finance-context.js';
import { Budget } from '../budgeting/budget.js';
import { BudgetAllocation } from '../budgeting/budget-allocation.js';
import { JournalEntry, JournalLine } from '../accounting/journal-entry.js';
import { PurchaseOrder } from '../procurement/purchase-order.js';
import { PurchaseRequestLineItem } from '../procurement/purchase-request.js';
import { CustomerInvoice, CustomerInvoiceLine } from '../receivables/customer-invoice.js';
import { PaymentApproval } from '../payables/payment-approval.js';
import { TreasuryForecast } from '../cash-flow/treasury-forecast.js';
import { AccountingPeriod } from '../accounting/accounting-period.js';
import { ProcurementPolicy } from '../procurement/procurement-policy.js';

export interface FinanceFramework {
  /**
   * Registers a new operational or capital budget outline in the system.
   */
  createBudget(
    uniqueBudgetCode: string,
    displayName: string,
    fiscalYear: number,
    initialAllocations: BudgetAllocation[],
    currencyCode: string,
    context: FinanceContext
  ): Promise<Budget>;

  /**
   * Records a balanced double-entry ledger transaction, creating a general journal entry.
   */
  recordTransaction(
    uniqueEntryCode: string,
    lines: JournalLine[],
    context: FinanceContext
  ): Promise<JournalEntry>;

  /**
   * Formalizes a purchase request into an official, policy-compliant Purchase Order issued to a vendor.
   */
  createPurchaseOrder(
    uniquePoCode: string,
    vendorIdString: string,
    lineItems: PurchaseRequestLineItem[],
    currencyCode: string,
    deliveryAddressStreetText: string,
    deliveryAddressCityText: string,
    deliveryAddressCountryCode: string,
    procurementPolicy: ProcurementPolicy,
    context: FinanceContext
  ): Promise<PurchaseOrder>;

  /**
   * Generates and transmits a tax-compliant sales invoice to a client billing account.
   */
  issueInvoice(
    uniqueInvoiceCode: string,
    customerAccountIdString: string,
    associatedOpportunityCodeString: string | undefined,
    lineItems: CustomerInvoiceLine[],
    taxRatePercentageDecimal: number,
    currencyCode: string,
    dueDate: Date,
    context: FinanceContext
  ): Promise<CustomerInvoice>;

  /**
   * Sign-off or flags a scheduled accounts payable disbursement against threshold limits and dual-sign-off rules.
   */
  approvePayment(
    uniqueApprovalCode: string,
    scheduledPaymentItemIdString: string,
    payeeSupplierName: string,
    transactionAmount: number,
    currencyCode: string,
    context: FinanceContext
  ): Promise<PaymentApproval>;

  /**
   * Runs an analytical simulation of rolling receivables, payables, and treasury positions to project ending cash.
   */
  forecastCashFlow(
    uniqueForecastCode: string,
    horizonWeeksCount: number,
    context: FinanceContext
  ): Promise<TreasuryForecast>;

  /**
   * Adjusts depreciation accruals, validates trials balances, and permanently locks an accounting period.
   */
  closeFinancialPeriod(
    uniquePeriodCode: string,
    context: FinanceContext
  ): Promise<AccountingPeriod>;
}
