export interface InspectionSpecificationItem {
  readonly itemId: string;
  readonly parameterNameString: string; // e.g. "Core diameter"
  readonly measurementMethodText: string; // e.g. "Digital Micrometer"
  readonly nominalTargetValueDecimal: number;
  readonly absoluteUpperToleranceBoundDecimal: number;
  readonly absoluteLowerToleranceBoundDecimal: number;
}

export interface InspectionPlan {
  readonly planId: string;
  readonly uniquePlanCode: string; // e.g. "IP-METAL-SHEET-INCOMING"
  readonly planNameString: string;
  readonly triggerEventType: 'INCOMING_PO_RECEIPT' | 'IN_PROCESS_BATCH' | 'FINISHED_GOODS_RELEASE' | 'PRE_SHIPMENT';
  readonly standardAQLAcceptableLimitRatioDecimal: number; // Acceptable Quality Limit e.g. 0.01 (1%)
  readonly structuralInspectionSpecificationItemsList: InspectionSpecificationItem[];
  readonly inspectorCertificationLevelRequired: 'LEVEL_1_BASIC' | 'LEVEL_2_INTERMEDIATE' | 'LEVEL_3_EXPERT';
  readonly activeStatusFlag: boolean;
  readonly lastModifiedAt: Date;
}
