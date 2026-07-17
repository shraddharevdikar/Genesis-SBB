export interface FactValidity {
  readonly effectiveFromDate: Date;
  readonly expirationDate?: Date;
  readonly isPermanentFlag: boolean;
  readonly nextScheduledValidationAt: Date;
}
