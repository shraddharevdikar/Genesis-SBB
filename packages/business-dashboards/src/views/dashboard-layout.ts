export type DashboardLayoutTypeCode =
  | 'STANDARD_FLUID_GRID'
  | 'BENTO_TILE_GALLERY'
  | 'LEFT_BAR_EXPANDED_BREADTH'
  | 'THREE_COLUMN_INTELLIGENCE_WALL'
  | 'CANVAS_ABSOLUTE_FLOW';

export interface DashboardLayout {
  readonly layoutId: string;
  readonly typeCode: DashboardLayoutTypeCode;
  readonly screenColumnsCount: number; // e.g. 12 or 16 columns grid
  readonly gapSpacingPixelsCount: number; // e.g. 16px, 24px spacing
  readonly isResponsiveAutoScaling: boolean;
  readonly rawCustomCssTemplateString?: string; // fallback visual spacing settings
}
