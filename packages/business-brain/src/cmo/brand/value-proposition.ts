export interface ValueProposition {
  readonly propositionId: string;
  readonly tenantId: string;
  readonly targetSegmentId: string;
  readonly functionalBenefits: string[];
  readonly emotionalBenefits: string[];
  readonly socialBenefits: string[];
  readonly customerPainsAddressed: string[];
  readonly customerGainsCreated: string[];
  readonly coreDifferentiatorText: string;
  readonly createdAt: Date;
}
