import { WidgetDisplayTypeCode } from './widget-definition.js';

export interface WidgetConfiguration {
  readonly customDisplayType?: WidgetDisplayTypeCode;
  readonly isVisible: boolean;
  readonly customRefreshIntervalSecondsCount?: number;
  readonly payloadParameterJsonSchemaString?: string; // widget-specific custom rendering settings
  readonly displayColorThemeHexCode?: string; // e.g. "#4F46E5"
}
