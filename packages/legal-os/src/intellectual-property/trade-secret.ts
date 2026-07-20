import { IntellectualPropertyId } from './intellectual-property.js';

export interface TradeSecret {
  readonly tradeSecretId: string;
  readonly associatedIpAssetId: IntellectualPropertyId;
  readonly uniqueTradeSecretCode: string; // e.g. "SEC-SBB-BOT-TUNER"
  readonly operationalProcessDescription: string;
  readonly accessControlStandardDocumentURI: string;
  readonly maximumFinesAmountDecimal: number;
  readonly authorizedRolesAllowedList: string[]; // List of roles permitted access
  readonly lastAuditDate: Date;
  readonly isSecuredActiveFlag: boolean;
}
