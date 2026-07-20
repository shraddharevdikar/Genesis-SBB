import { LegalContext } from './legal-context.js';
import { Contract } from '../contracts/contract.js';
import { ContractTemplate } from '../contracts/contract-template.js';
import { ComplianceAssessment } from '../compliance/compliance-assessment.js';
import { LegalRisk } from '../risk/legal-risk.ts';
import { GovernanceReview } from '../governance/governance-review.js';
import { LegalApproval } from '../approvals/legal-approval.js';
import { AuditRecord } from '../audit/audit-record.js';
import { ContractRiskAnalysis } from '../ai/contract-risk-analysis.js';

export interface LegalFramework {
  /**
   * Drafts or registers a new contract using an optional template standard.
   */
  createContract(
    uniqueContractCode: string,
    displayName: string,
    category: 'NDA' | 'MASTER_SERVICE_AGREEMENT' | 'PARTNERSHIP' | 'VENDOR_PURCHASE' | 'EMPLOYMENT_EXECUTIVE' | 'CUSTOM',
    documentStorageURI: string,
    templateIdString?: string,
    context?: LegalContext
  ): Promise<Contract>;

  /**
   * Triggers an AI contract analysis scan to inspect clauses and estimate risks.
   */
  reviewContract(
    contractIdString: string,
    context?: LegalContext
  ): Promise<ContractRiskAnalysis>;

  /**
   * Performs an executive compliance control check audit against legal regulations.
   */
  assessCompliance(
    uniqueAssessmentCode: string,
    targetFrameworkIdString: string,
    checkedControlIdsList: string[],
    context?: LegalContext
  ): Promise<ComplianceAssessment>;

  /**
   * Evaluates corporate and financial legal risks of operations.
   */
  evaluateLegalRisk(
    uniqueRiskCode: string,
    riskTitleString: string,
    estimatedProbabilityRatio: number,
    estimatedFinancialImpactAmount: number,
    currencyCode: string,
    context?: LegalContext
  ): Promise<LegalRisk>;

  /**
   * Initiates corporate governance oversight checks.
   */
  manageGovernance(
    uniqueReviewCode: string,
    scopeQuarterString: string,
    context?: LegalContext
  ): Promise<GovernanceReview>;

  /**
   * Commences multi-party formal signature and approval steps.
   */
  executeLegalApproval(
    uniqueApprovalCode: string,
    targetEntityIdString: string,
    context?: LegalContext
  ): Promise<LegalApproval>;

  /**
   * Files a legally binding audit finding list for corporate logs.
   */
  recordAudit(
    uniqueAuditCode: string,
    displayName: string,
    category: 'INTERNAL_GOVERNANCE' | 'REGULATORY_COMPLIANCE' | 'THIRD_PARTY_CONTRACTUAL' | 'FINANCIAL_OVERSIGHT',
    targetDepartmentIdString: string,
    plannedStartDate: Date,
    plannedEndDate: Date,
    context?: LegalContext
  ): Promise<AuditRecord>;
}
