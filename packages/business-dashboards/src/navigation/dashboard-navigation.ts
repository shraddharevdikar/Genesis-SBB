import { DashboardViewId } from '../identity/dashboard-view-id.js';
import { DashboardShortcut } from './dashboard-shortcut.js';

export interface NavigationMenuItem {
  readonly itemId: string;
  readonly displayLabel: string;
  readonly iconIdentifierString?: string;
  readonly boundViewId?: DashboardViewId;
  readonly childItemsList: NavigationMenuItem[];
  readonly requiredOperatorRolePermissionString?: string;
}

export interface DashboardNavigation {
  readonly navigationId: string;
  readonly rootItemsList: NavigationMenuItem[];
  readonly quickShortcutsList: DashboardShortcut[];
  readonly lastModifiedAt: Date;
}
