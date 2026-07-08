export interface CostRecord {
  readonly recordId: string;
  readonly tenantId: string;
  readonly organizationId: string;
  readonly userId: string;
  readonly module: string;
  readonly provider: string;
  readonly model: string;
  readonly promptVersion?: string;
  readonly capability: string;
  readonly estimatedCost: number;
  readonly actualCost: number;
  readonly currency: string;
  readonly timestamp: Date;
}
