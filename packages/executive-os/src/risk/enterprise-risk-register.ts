import { EnterpriseRisk } from './enterprise-risk.js';

export interface EnterpriseRiskRegister {
  readonly registerId: string;
  readonly uniqueRegisterCode: string; // e.g. "REG-RISK-2026-CH"
  readonly displayName: string;
  readonly risksList: EnterpriseRisk[];
  readonly riskOfficerRoleIdString: string; // e.g. "CRO" (Chief Risk Officer)
  readonly riskToleranceLimitAmount: number; // upper tolerance bound e.g. 10M CHF
  readonly currencyCode: string;
  readonly lastReviewedAt: Date;
}
