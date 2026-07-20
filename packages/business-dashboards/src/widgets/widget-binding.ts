export type DataSourceSystemCode =
  | 'PERFORMANCE_KPI_ENGINE'
  | 'KNOWLEDGE_GRAPH_REPOSITORY'
  | 'WORKFLOW_STEP_ORCHESTRATOR'
  | 'AI_GOVERNANCE_REGISTRY'
  | 'POLICIES_COMPLIANCE_EVALUATOR'
  | 'EXTERNAL_SBB_REST_ENDPOINT';

export interface WidgetBinding {
  readonly bindingId: string;
  readonly dataSourceSystem: DataSourceSystemCode;
  readonly targetSourceResourceURI: string; // e.g. "kpi://finance/kpi-finance-ebitda" or "knowledge://concept/CON-FIN-EBIDTA"
  readonly dataQueryParameterJsonString?: string; // Query details or filters passed to the data source
  readonly cacheTtlSecondsCount: number;
}
