export interface Vision {
  readonly statement: string;
  readonly targetHorizonYear: string; // e.g. "2030"
  readonly primaryPillars: string[];
  readonly definedAt: Date;
}
