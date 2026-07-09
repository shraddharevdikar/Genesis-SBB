export interface ExpirationPolicy {
  readonly expiresAt?: Date;
  readonly deletePermanentlyOnExpiry: boolean;
  readonly warningDaysBeforeExpiry?: number;
}
