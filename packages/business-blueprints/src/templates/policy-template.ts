import { BusinessTemplate } from './business-template.js';

export interface PolicyTemplate extends BusinessTemplate {
  readonly defaultComplianceRiskSeverityLevel: string; // e.g. "CRITICAL_COMPLIANCE"
  readonly defaultEvaluationExpressionText: string; // Logical expression to parse
  readonly policyBreachActionCode: string;
}
