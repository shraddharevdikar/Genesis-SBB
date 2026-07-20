export interface FinanceOwner {
  readonly ownerId: string;
  readonly uniqueAssetOrAccountCode: string; // Bound target (e.g. BudgetId or BankAccountId)
  readonly accountableRepresentativeOperatorRoleId: string; // e.g. Finance Analyst or Budget Manager
  readonly approvedDepartmentHeadOperatorRoleId: string; // e.g. VP Engineering or VP Marketing
  readonly certifyingFinanceDirectorOperatorRoleId: string; // e.g. Financial Controller or CFO
  readonly lastCertifiedAt: Date;
}
