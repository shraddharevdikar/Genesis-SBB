import { DashboardId } from '../identity/dashboard-id.js';
import { DashboardViewId } from '../identity/dashboard-view-id.js';
import { WidgetId } from '../identity/widget-id.js';
import { DashboardContext } from './dashboard-context.js';
import { BusinessDashboard, DashboardCategoryCode } from '../dashboards/business-dashboard.js';
import { DashboardView } from '../views/dashboard-view.js';
import { DashboardWidget } from '../widgets/dashboard-widget.js';
import { WidgetDefinition } from '../widgets/widget-definition.js';
import { WidgetBinding } from '../widgets/widget-binding.js';
import { DashboardProfile } from '../personalization/dashboard-profile.js';

export interface DashboardFramework {
  /**
   * Spawns a brand-new multi-tenant, domain-independent business dashboard metadata blueprint.
   */
  createDashboard(
    uniqueDashboardCode: string,
    category: DashboardCategoryCode,
    displayName: string,
    summaryDescription: string,
    context: DashboardContext
  ): Promise<BusinessDashboard>;

  /**
   * Appends or updates a visual view section composition on an existing dashboard layout tree.
   */
  defineDashboardView(
    dashboardId: DashboardId,
    view: DashboardView,
    context: DashboardContext
  ): Promise<DashboardViewId>;

  /**
   * Registers a reusable custom or KPI data-bound widget to the global directory index.
   */
  registerWidget(
    uniqueWidgetCode: string,
    displayName: string,
    definition: WidgetDefinition,
    binding: WidgetBinding,
    context: DashboardContext
  ): Promise<DashboardWidget>;

  /**
   * Transition active status checks to PUBLISHED_ACTIVE, broadcasting standard event streams.
   */
  publishDashboard(
    dashboardId: DashboardId,
    context: DashboardContext
  ): Promise<void>;

  /**
   * Overrides system defaults with operator-specific visual preferences or customized active filter states.
   */
  personalizeDashboard(
    dashboardId: DashboardId,
    profile: DashboardProfile,
    context: DashboardContext
  ): Promise<DashboardProfile>;

  /**
   * Marks active dashboard views and child layout blocks as RETIRED, stopping all query pull loops.
   */
  retireDashboard(
    dashboardId: DashboardId,
    context: DashboardContext
  ): Promise<void>;
}
