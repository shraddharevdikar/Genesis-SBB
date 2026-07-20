export type IntelligenceDomainCode =
  | 'CORPORATE_BUSINESS'
  | 'DEPARTMENTAL_OPERATIONS'
  | 'CUSTOMER_BEHAVIOR'
  | 'PRODUCT_UTILIZATION'
  | 'FINANCIAL_FISCAL'
  | 'AI_AGENT_WORKFORCE_TELEMETRY';

export interface IntelligenceDomain {
  readonly domainCode: IntelligenceDomainCode;
  readonly displayName: string;
  readonly scopeDefinitionText: string;
  readonly associatedSbbModuleCode: string; // e.g. "business-workflows" or "agent-monitoring"
}
