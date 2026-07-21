export interface SwimmingPoolSafetyLog {
  readonly logId: string;
  readonly recordedTimestamp: Date;
  readonly measuredWaterTemperatureCelsius: number; // e.g. 27.5
  readonly measuredPhLevelValue: number; // e.g. 7.4
  readonly measuredChlorinePpmDecimal: number; // e.g. 1.5
  readonly inspectorStaffRoleIdString: string;
  readonly safetyParametersApprovedFlag: boolean;
}

export interface SwimmingPool {
  readonly poolId: string;
  readonly uniquePoolCode: string; // e.g. "POL-ZUR-OUTDOOR"
  readonly associatedPropertyIdString: string;
  readonly displayName: string;
  readonly poolPhysicalDimensionsDescription: string; // e.g. "25m x 10m heated"
  readonly maximumSimultaneousSwimmersCount: number;
  readonly lifeguardOnDutyFlag: boolean;
  readonly safetyLogsHistoryList: SwimmingPoolSafetyLog[];
  readonly activeStatusFlag: boolean;
  readonly lastModifiedAt: Date;
}
