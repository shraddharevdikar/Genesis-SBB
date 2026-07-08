export interface UncertaintyModel {
  readonly id: string;
  readonly description: string;
  readonly level: 'LOW' | 'MEDIUM' | 'HIGH' | 'UNKNOWN';
  readonly sourceOfUncertainty: string;
  readonly dependencyOnExternalEvent?: string;
}
