import { EventId } from '../identity/event-id.js';

export interface SystemEvent {
  readonly systemEventId: string;
  readonly eventId: EventId;
  readonly severity: 'INFO' | 'WARNING' | 'ERROR' | 'CRITICAL';
  readonly componentName: string; // e.g. "DatabaseConnectionPool"
  readonly hostAddress: string;
  readonly stackTrace?: string;
  readonly resourceUsagePct?: number;
}
