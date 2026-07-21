export interface PosSession {
  readonly sessionId: string;
  readonly cashierStaffRoleIdString: string; // Links to HROS / Role
  readonly sessionOpenedTimestamp: Date;
  readonly sessionClosedTimestamp?: Date;
  readonly initialCashFloatAmount: number;
  readonly endCashDrawerCountedAmount?: number;
  readonly discrepancyExplanationText?: string;
}

export interface PointOfSaleTerminal {
  readonly terminalId: string;
  readonly uniqueTerminalCode: string; // e.g., "POS-ZUR-01"
  readonly associatedStoreIdString: string; // RetailStore ID
  readonly deviceModelString: string; // e.g. "Verifone Carbon"
  readonly currentActiveSession?: PosSession;
  readonly supportContactNumberString: string;
  readonly cardReaderOperationalFlag: boolean;
  readonly printerOperationalFlag: boolean;
  readonly activeStatusFlag: boolean;
}
