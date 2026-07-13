export interface ContextWeight {
  readonly weightId: string;
  readonly tenantId: string;
  readonly typeWeights: {
    readonly memory: number; // 0.0 to 1.0
    readonly graph: number;
    readonly twin: number;
    readonly decision: number;
    readonly learning: number;
  };
  readonly urgencyModifier: number; // multiplier e.g. 1.2
}
