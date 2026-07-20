import { IntellectualPropertyId } from './intellectual-property.js';

export interface Trademark {
  readonly trademarkId: string;
  readonly associatedIpAssetId: IntellectualPropertyId;
  readonly uniqueTrademarkCode: string; // e.g. "TM-SBB-CONNECT"
  readonly markTypeText: 'WORD_MARK' | 'LOGO_DEVICE_MARK' | 'COMBINED_MARK' | 'SOUND_MARK';
  readonly graphicAttachmentURI?: string;
  readonly NiceClassNumbersList: number[]; // Nice classification classes (e.g. [9, 35, 42])
  readonly renewalReminderIntervalMonthsCount: number;
  readonly activeFlag: boolean;
}
