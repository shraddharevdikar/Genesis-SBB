import { EngagementStepCode } from '../core/engagement-lifecycle.js';

export type DeliveryModelCode = 'TIME_AND_MATERIALS' | 'FIXED_PRICE_MILESTONE' | 'RETAINER_HOURLY' | 'VALUE_SHARE_OUTCOME';

export interface Engagement {
  readonly engagementId: string;
  readonly uniqueEngagementCode: string; // e.g. "ENG-2026-CLOUD-ACME"
  readonly associatedClientIdString: string; // Links to Client
  readonly engagementTitleString: string;
  readonly deliveryModel: DeliveryModelCode;
  readonly partnerLeadStaffRoleIdString: string; // Partner in charge (HROS/ExecutiveOS)
  readonly directorLeadStaffRoleIdString?: string; // Delivery director (HROS)
  readonly activeServiceAgreementIdString?: string; // Links to ServiceAgreement
  readonly totalEngagementContractValueAmount: number; // TCV (FinanceOS/SalesOS)
  readonly currentLifecycleStep: EngagementStepCode;
  readonly anticipatedStartDate: Date;
  readonly anticipatedEndDate: Date;
  readonly remarksNotesText?: string;
  readonly activeStatusFlag: boolean;
  readonly lastModifiedAt: Date;
}
