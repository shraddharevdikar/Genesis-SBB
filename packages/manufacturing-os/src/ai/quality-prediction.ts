import { ProductId } from '../products/product.js';

export interface DefectCorrelatingFactor {
  readonly factorCategory: 'AMBIENT_HUMIDITY' | 'MACHINE_VIBRATION' | 'OPERATOR_SPEED_OVER_THRESHOLD' | 'SUPPLIER_BATCH_VARIATION';
  readonly correlativeProbabilityDecimal: number;
  readonly detailedDescriptionText: string;
}

export interface QualityDefectPredictionAnalysis {
  readonly analysisId: string;
  readonly uniqueAnalysisCode: string; // e.g. "QLT-FST-TURBINE"
  readonly associatedProductId: ProductId;
  readonly productionLineIdString: string;
  readonly simulatedTimeHorizonDaysCount: number;
  readonly predictedDefectRatePercentageDecimal: number; // e.g. 0.024 (2.4% predicted scrap rate)
  readonly contributingRiskFactorsList: DefectCorrelatingFactor[];
  readonly preventiveMitigationNotes: string;
  readonly analyzedAt: Date;
}
