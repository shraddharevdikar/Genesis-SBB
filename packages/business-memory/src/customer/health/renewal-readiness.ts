export interface RenewalReadiness {
  readonly readinessId: string;
  readonly tenantId: string;
  readonly customerOrganizationId: string;
  readonly contractExpirationDate: Date;
  readonly targetRenewalDate?: Date;
  readonly likelihoodOfRenewal: 'HIGH' | 'MEDIUM' | 'LOW' | 'CRITICAL_RISK';
  readonly standardPricingUpliftPercent: number; // e.g. 5.0 for 5% increase
  readonly blockersList: string[];
  readonly renewalCoordinatorRoleId: string; // references internal SBB role
  readonly status: 'NOT_STARTED' | 'DISCUSSIONS' | 'PROPOSAL_SENT' | 'CONTRACT_SIGN_OFF' | 'RENEWED' | 'LAPSED';
  readonly lastReviewedAt: Date;
}
