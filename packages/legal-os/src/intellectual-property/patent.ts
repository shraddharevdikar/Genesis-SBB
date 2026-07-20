import { IntellectualPropertyId } from './intellectual-property.js';

export interface Patent {
  readonly patentId: string;
  readonly associatedIpAssetId: IntellectualPropertyId;
  readonly uniquePatentCode: string; // e.g. "PAT-SBB-FLOW-DEFER"
  readonly inventionTitleString: string;
  readonly leadInventorNameString: string;
  readonly ipcClassCodesList: string[]; // e.g. ["G06F 17/30"]
  readonly patentOfficeCodeString: string; // e.g. "EPO", "USPTO"
  readonly independentClaimsCount: number;
  readonly abstractNotesText: string;
  readonly maintenanceFeeNextDueDate?: Date;
  readonly activeFlag: boolean;
}
