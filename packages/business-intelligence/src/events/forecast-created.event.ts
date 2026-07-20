import { ForecastId } from '../identity/forecast-id.js';

export interface ForecastCreatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly forecastId: ForecastId;
  readonly uniqueForecastCode: string;
  readonly displayName: string;
  readonly categoryCode: string;
  readonly expectedMedianValue: number;
  readonly traceId: string;
  readonly timestamp: Date;
}
