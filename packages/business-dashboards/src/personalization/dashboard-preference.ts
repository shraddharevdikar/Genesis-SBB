import { DashboardViewId } from '../identity/dashboard-view-id.js';

export interface DashboardPreference {
  readonly preferenceId: string;
  readonly associatedOperatorRoleId: string; // The role this preference belongs to
  readonly isBookmarkedAsFavorite: boolean;
  readonly defaultRenderingViewId?: DashboardViewId;
  readonly isAutoRefreshEnabled: boolean;
  readonly zoomDisplayPercentageCount: number; // e.g. 100
  readonly uiThemePreferenceCode: 'LIGHT_MINIMAL' | 'DARK_COSMIC' | 'HIGH_CONTRAST_ACCESSIBILITY';
  readonly customizedWidgetConfigurationJsonString?: string; // key-value overrides for widget states
}
