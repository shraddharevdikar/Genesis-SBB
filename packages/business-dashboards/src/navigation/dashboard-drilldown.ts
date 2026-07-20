import { DashboardViewId } from '../identity/dashboard-view-id.js';

export type DrilldownActionTypeCode =
  | 'TRANSITION_TO_SUBVIEW'
  | 'TRIGGER_MODAL_DETAILS_POPUP'
  | 'NAVIGATE_TO_EXTERNAL_SBB_MODULE'
  | 'REFILTER_PARENT_VIEW';

export interface DashboardDrilldown {
  readonly drilldownId: string;
  readonly uniqueDrilldownCode: string; // e.g. "DRLL-ARR-DETAILS"
  readonly actionType: DrilldownActionTypeCode;
  readonly targetViewId?: DashboardViewId;
  readonly targetSbbModulePath?: string; // e.g. "packages/business-performance/..."
  readonly parameterMappingJsonString?: string; // mappings: e.g. "{"selected_department_id": "$source.departmentId"}"
  readonly dialogTitleText?: string;
}
