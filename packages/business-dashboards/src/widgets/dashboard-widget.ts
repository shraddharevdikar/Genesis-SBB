import { WidgetId } from '../identity/widget-id.js';
import { WidgetDefinition } from './widget-definition.js';
import { WidgetBinding } from './widget-binding.js';
import { WidgetConfiguration } from './widget-configuration.js';

export interface DashboardWidget {
  readonly widgetId: WidgetId;
  readonly uniqueWidgetCode: string; // e.g. "WIDG-FIN-ARR-001"
  readonly displayName: string;
  readonly definition: WidgetDefinition;
  readonly binding: WidgetBinding;
  readonly configuration: WidgetConfiguration;
}
