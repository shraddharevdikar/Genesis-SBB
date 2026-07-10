export interface TeamState {
  readonly teamId: string;
  readonly name: string;
  readonly isAgileSquad: boolean;
  readonly primaryFocusArea: string;
  readonly headcount: number;
  readonly velocityScore?: number;
  readonly healthTrend: 'STABLE' | 'DEGRADED' | 'IMPROVING';
}
