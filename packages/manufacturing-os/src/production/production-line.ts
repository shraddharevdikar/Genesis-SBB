export interface ProductionLine {
  readonly lineId: string;
  readonly uniqueLineCode: string; // e.g. "LINE-ASSEMBLY-01"
  readonly lineNameString: string;
  readonly plantLocationCodeText: string; // e.g. "PLANT-ZURICH-MAIN"
  readonly standardOutputUnitsPerHourCount: number;
  readonly isHighlyAutomatedFlag: boolean;
  readonly standardChangeoverTimeMinutesDecimal: number;
  readonly machineIdsList: string[]; // List of machineIds assigned to this line
  readonly operatorStaffRoleIdsList: string[]; // Role IDs of operators typically assigned
  readonly activeStatusFlag: boolean;
  readonly lastModifiedAt: Date;
}
