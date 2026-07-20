import { BusinessInsight } from './business-insight.js';

export type AnomalySeverityCode = 'MINOR_NOISE' | 'MODERATE_DRIFT' | 'CRITICAL_SPIKE' | 'CATASTROPHIC_DROP';

export interface AnomalyDetection extends BusinessInsight {
  readonly severityLevel: AnomalySeverityCode;
  readonly expectedMedianValue: number;
  readonly observedActualValue: number;
  readonly standardDeviationsOffsetCount: number; // e.g. 3.2 (sigma drift)
  readonly durationSecondsCount: number; // active duration of anomaly
  readonly requiresImmediateResponseFlag: boolean;
}
