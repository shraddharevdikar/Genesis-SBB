export interface PipelineStageValue {
  readonly stageName: 'PROSPECT' | 'QUALIFIED' | 'DEMO_COMPLETED' | 'PROPOSAL_SENT' | 'NEGOTIATION' | 'CLOSED_WON' | 'CLOSED_LOST';
  readonly count: number;
  readonly valueUSD: number;
  readonly weightedValueUSD: number;
}

export interface SalesPipeline {
  readonly pipelineId: string;
  readonly tenantId: string;
  readonly measuredAt: Date;
  readonly stages: PipelineStageValue[];
  readonly totalPipelineValueUSD: number;
  readonly totalWeightedValueUSD: number;
  readonly overallSalesVelocityDays: number;
}
