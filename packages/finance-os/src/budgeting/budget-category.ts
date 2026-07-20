export type BudgetCategoryCode =
  | 'OPEX_SALARIES_BENEFITS'
  | 'OPEX_MARKETING_ADS'
  | 'OPEX_SOFTWARE_SaaS'
  | 'OPEX_RENT_UTILITIES'
  | 'CAPEX_HARDWARE_INFRASTRUCTURE'
  | 'CAPEX_R_AND_D'
  | 'COGS_HOSTING_BANDWIDTH'
  | 'COGS_THIRD_PARTY_LICENSES';

export interface BudgetCategory {
  readonly categoryId: string;
  readonly uniqueCategoryCode: BudgetCategoryCode;
  readonly displayName: string;
  readonly descriptionNotesText: string;
  readonly parentCategoryId?: string;
}
