export type EducationAITaskCode =
  | 'PERSONALIZED_LEARNING_RECOMMENDATIONS'
  | 'STUDENT_PERFORMANCE_ANALYSIS'
  | 'DROPOUT_RISK_ANALYSIS'
  | 'ACADEMIC_PLAN_RECOMMENDATIONS'
  | 'RESOURCE_SCHEDULING_OPTIMIZATION'
  | 'INSTITUTIONAL_KPI_INSIGHTS';

export interface EducationAIAgent {
  readonly agentId: string;
  readonly uniqueAgentCode: string; // e.g., "AI-EDU-ADVISOR-COPILOT"
  readonly displayName: string;
  readonly capabilitiesList: EducationAITaskCode[];
  readonly systemModelIdString: string; // e.g. "gemini-3.5-flash"
  readonly temperatureSettingDecimal: number;
  readonly activeFlag: boolean;
  readonly lastModifiedAt: Date;
}
