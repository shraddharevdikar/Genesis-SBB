export type WidgetCategoryCode =
  | 'KPI_METRIC'
  | 'KNOWLEDGE_CONCEPT_FACT'
  | 'WORKFLOW_STEP_STATUS'
  | 'AI_WORKFORCE_TELEMETRY'
  | 'ALERT_CRITICAL_NOTIFICATION'
  | 'CUSTOM_INTEGRATED_ELEMENT';

export type WidgetDisplayTypeCode =
  | 'SINGLE_VALUE_METRIC_CARD'
  | 'SPARKLINE_CHART'
  | 'BAR_CHART_COMPOSITION'
  | 'PIE_SEGMENTATION'
  | 'DATAGRID_TABLE'
  | 'FACT_BULLET_LIST'
  | 'PROCESS_FLOW_TIMELINE'
  | 'AI_AGENT_CHAT_CONSOLE';

export interface WidgetDefinition {
  readonly definitionId: string;
  readonly uniqueDefinitionCode: string; // e.g. "WDEF-FIN-KPI-CASH"
  readonly displayName: string;
  readonly category: WidgetCategoryCode;
  readonly defaultDisplayType: WidgetDisplayTypeCode;
  readonly standardRefreshFrequencySecondsCount: number;
}
