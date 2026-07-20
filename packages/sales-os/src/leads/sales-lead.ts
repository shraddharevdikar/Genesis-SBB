import { LeadLifecycleState } from '../core/sales-lifecycle.js';
import { LeadSource } from './lead-source.js';
import { LeadScore } from './lead-score.js';
import { LeadQualification } from './lead-qualification.js';

export interface LeadId {
  readonly value: string;
}

export interface SalesLead {
  readonly leadId: LeadId;
  readonly uniqueLeadCode: string; // e.g., "LED-2026-CH-0042"
  readonly originalSource: LeadSource;
  readonly score: LeadScore;
  readonly qualification: LeadQualification;
  readonly companyName: string;
  readonly estimatedEmployeeCount?: number;
  readonly industrySectorCode?: string; // e.g., "IND-FINTECH"
  readonly estimatedAnnualRevenueAmount?: number;
  readonly currencyCode?: string; // e.g., "CHF"
  readonly primaryContactName: string;
  readonly primaryContactEmailString: string;
  readonly currentState: LeadLifecycleState;
  readonly ownerOperatorRoleId: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
