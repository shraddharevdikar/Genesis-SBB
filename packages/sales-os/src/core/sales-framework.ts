import { SalesContext } from './sales-context.js';
import { LeadId, SalesLead } from '../leads/sales-lead.js';
import { LeadSource } from '../leads/lead-source.js';
import { LeadQualification } from '../leads/lead-qualification.js';
import { OpportunityId, SalesOpportunity } from '../opportunities/sales-opportunity.js';
import { OpportunityStage } from '../opportunities/opportunity-stage.js';
import { OpportunityValue } from '../opportunities/opportunity-value.js';
import { QuotationId, SalesQuotation, QuotationLineItem } from '../quotations/sales-quotation.js';
import { PricingModel } from '../quotations/pricing-model.js';
import { DiscountPolicy } from '../quotations/discount-policy.js';
import { RevenueForecast } from '../pipeline/revenue-forecast.js';

export interface SalesFramework {
  /**
   * Captures a raw, system-qualified or manually sourced lead and registers it in the CRM records database.
   */
  captureLead(
    uniqueLeadCode: string,
    companyName: string,
    primaryContactName: string,
    primaryContactEmailString: string,
    originalSource: LeadSource,
    context: SalesContext
  ): Promise<SalesLead>;

  /**
   * Evaluates a lead against standard BANT/MEDDPICC criteria to declare it qualified and ready for conversion.
   */
  qualifyLead(
    leadId: LeadId,
    qualificationCriteria: LeadQualification,
    context: SalesContext
  ): Promise<SalesLead>;

  /**
   * Converts a qualified lead into a sales opportunity associated with a legal client account.
   */
  createOpportunity(
    uniqueOpportunityCode: string,
    displayName: string,
    parentAccountIdString: string,
    initialValue: OpportunityValue,
    expectedCloseDate: Date,
    context: SalesContext
  ): Promise<SalesOpportunity>;

  /**
   * Transitions an opportunity across pipeline stages (e.g. Discovery to Proposal), tracking velocity.
   */
  advancePipeline(
    opportunityId: OpportunityId,
    targetStage: OpportunityStage,
    context: SalesContext
  ): Promise<SalesOpportunity>;

  /**
   * Generates a binding quotation with structured pricing models and policy-compliant discounting schedules.
   */
  generateQuotation(
    uniqueQuotationCode: string,
    opportunityId: OpportunityId,
    lineItems: QuotationLineItem[],
    pricingModel: PricingModel,
    discountPolicy: DiscountPolicy,
    context: SalesContext
  ): Promise<SalesQuotation>;

  /**
   * Aggregates active pipeline deals to compute realistic manager commits and predictive AI revenue forecasts.
   */
  forecastRevenue(
    targetFiscalQuarterString: string,
    salesTerritoryCode: string,
    quotaTargetAmount: number,
    context: SalesContext
  ): Promise<RevenueForecast>;

  /**
   * Concludes the sales opportunity life cycle, registering won contracts or documenting competitor loss reasons.
   */
  closeOpportunity(
    opportunityId: OpportunityId,
    isWonFlag: boolean,
    closedReasonNotesText: string,
    actualClosedDate: Date,
    context: SalesContext
  ): Promise<SalesOpportunity>;
}
