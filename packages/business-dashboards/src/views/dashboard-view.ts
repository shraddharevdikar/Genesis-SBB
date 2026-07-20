import { DashboardViewId } from '../identity/dashboard-view-id.js';
import { DashboardLayout } from './dashboard-layout.js';
import { DashboardSection } from './dashboard-section.js';

export interface DashboardView {
  readonly viewId: DashboardViewId;
  readonly uniqueViewCode: string; // e.g. "VIEW-FIN-CFO-DESK"
  readonly displayName: string;
  readonly descriptionNotesText?: string;
  readonly layout: DashboardLayout;
  readonly sectionsList: DashboardSection[];
  readonly renderingDeviceTypeLimit?: 'DESKTOP_ONLY' | 'MOBILE_ONLY' | 'ANY_DEVICE';
}
