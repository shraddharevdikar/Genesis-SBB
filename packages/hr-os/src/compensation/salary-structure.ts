export interface GradeBand {
  readonly gradeLevelString: string; // e.g. "L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8"
  readonly minimumBaseSalaryAmount: number;
  readonly midpointTargetBaseSalaryAmount: number;
  readonly maximumBaseSalaryAmount: number;
  readonly standardTargetBonusPercentageDecimal: number;
}

export interface SalaryStructure {
  readonly structureId: string;
  readonly uniqueStructureCode: string; // e.g. "STR-SAL-2026-CH"
  readonly geographicScopeCode: string; // e.g. "CH" (Switzerland) or "CH-ZH"
  readonly currencyCode: string; // e.g. "CHF"
  readonly gradeBandsList: GradeBand[];
  readonly lastCalibrationDate: Date;
}
