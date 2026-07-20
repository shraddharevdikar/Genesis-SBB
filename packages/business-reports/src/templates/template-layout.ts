export type ReportPageOrientationCode = 'PORTRAIT' | 'LANDSCAPE';
export type ReportPageSizeCode = 'A4' | 'LETTER' | 'A3' | 'DYNAMIC_HTML';

export interface TemplateLayout {
  readonly layoutId: string;
  readonly pageSize: ReportPageSizeCode;
  readonly pageOrientation: ReportPageOrientationCode;
  readonly marginTopPointsCount: number; // custom typographic positioning
  readonly marginBottomPointsCount: number;
  readonly marginLeftPointsCount: number;
  readonly marginRightPointsCount: number;
  readonly brandingThemeHexColor?: string; // SBB branding corporate style guides
}
