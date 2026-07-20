import { ContentAsset } from './content-asset.js';

export interface CalendarScheduledEntry {
  readonly entryId: string;
  readonly targetAsset: ContentAsset;
  readonly targetPublishDateTime: Date;
  readonly targetDistributionChannelCodesList: string[]; // e.g. ["CHN-SEO-CH", "CHN-SOCIAL-LNK"]
  readonly currentStatus: 'DRAFT_PENDING' | 'SCHEDULED_LOCKED' | 'PUBLISHED' | 'MISSED_SLA';
}

export interface ContentCalendar {
  readonly calendarId: string;
  readonly uniqueCalendarCode: string; // e.g. "CAL-MARKETING-2026"
  readonly displayName: string;
  readonly scheduledEntriesList: CalendarScheduledEntry[];
  readonly lastCalendarSyncDate: Date;
}
