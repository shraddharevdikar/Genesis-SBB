export interface Assumption {
  readonly assumptionId: string;
  readonly description: string;
  readonly validationSource?: string;
  readonly stability: 'HIGH' | 'MEDIUM' | 'LOW' | 'VOLATILE';
  readonly impactIfViolated: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  readonly isValidated: boolean;
  readonly lastCheckedAt?: Date;
}
