export type HealthcareAITaskCode =
  | 'CLINICAL_DECISION_SUPPORT_RECOMMENDATION'
  | 'PATIENT_READMISSION_RISK_ANALYSIS'
  | 'WARD_CAPACITY_OPTIMIZATION_FORECAST'
  | 'MEDICATION_INTERACTION_CONCURRENCY_CHECK'
  | 'DISCHARGE_CRITERIA_VERIFICATION_CHECK';

export interface HealthcareAIAgent {
  readonly agentId: string;
  readonly uniqueAgentCode: string; // e.g. "AI-HC-CO-PILOT"
  readonly displayName: string;
  readonly capabilitiesList: HealthcareAITaskCode[];
  readonly systemModelIdString: string; // e.g. "gemini-3.5-flash"
  readonly temperatureSettingDecimal: number;
  readonly activeFlag: boolean;
}
