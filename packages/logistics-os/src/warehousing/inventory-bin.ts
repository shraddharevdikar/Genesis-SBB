export interface InventoryBin {
  readonly binId: string;
  readonly uniqueBinCode: string; // e.g. "BIN-LOC-A-12-03-04-B01"
  readonly associatedStorageLocationIdString: string; // Links to StorageLocation
  readonly binDisplayLabelString: string; // e.g. "Bin 01"
  readonly holdsBarcodeValueString: string; // RFID/Barcode scan value (OperationsOS Integration)
  readonly maximumQuantityCapacityCount: number;
  readonly currentStoredQuantityCount: number;
  readonly containedSkuCodeString?: string; // Null if bin is currently vacant
  readonly mixSkuAllowedFlag: boolean; // Protects storage safety
  readonly activeStatusFlag: boolean;
  readonly lastModifiedAt: Date;
}
