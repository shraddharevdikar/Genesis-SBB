export type ReportDataSourceSystemCode =
  | 'PERFORMANCE_KPI_ENGINE'
  | 'KNOWLEDGE_GRAPH_REPOSITORY'
  | 'WORKFLOW_STEP_ORCHESTRATOR'
  | 'POLICIES_COMPLIANCE_EVALUATOR'
  | 'EXTERNAL_SBB_REST_ENDPOINT'
  | 'FINANCIAL_LEDGER_CONNECTOR';

export interface TemplateBinding {
  readonly bindingId: string;
  readonly dataSourceSystem: ReportDataSourceSystemCode;
  readonly queryResourceURI: string; // e.g. "ledger://annual-report/2026/balances"
  readonly parametersSchemaJsonString?: string; // Query placeholder constraints schema
}
