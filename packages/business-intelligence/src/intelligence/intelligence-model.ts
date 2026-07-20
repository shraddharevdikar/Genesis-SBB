import { IntelligenceDomainCode } from './intelligence-domain.js';

export type IntelligenceModelTypeCode =
  | 'DESCRIPTIVE_TREND'
  | 'PREDICTIVE_FORECAST'
  | 'PRESCRIPTIVE_RECOMMENDATION'
  | 'COGNITIVE_ANOMALY_DETECTOR'
  | 'ROOT_CAUSE_ANALYZER';

export interface IntelligenceModel {
  readonly modelId: string;
  readonly uniqueModelCode: string; // e.g. "MDL-FIN-ARR-FC"
  readonly displayName: string;
  readonly typeCode: IntelligenceModelTypeCode;
  readonly targetDomainCode: IntelligenceDomainCode;
  readonly inputDataSourcesList: string[]; // e.g. ["kpi://finance/arr", "workflow://invoice/latency"]
  readonly minimumRequiredDataPointsCount: number;
  readonly isLockedForRecalibration: boolean;
  readonly versionString: string;
}
