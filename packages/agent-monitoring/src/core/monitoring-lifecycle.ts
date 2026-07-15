export type MonitoringLifecycleState =
  | 'INITIALIZED'      // Monitoring session established
  | 'OBSERVING'        // Actively polling or receiving real-time stream data
  | 'ANALYZING'        // Telemetry analysis and aggregation in progress
  | 'ALERT_TRIGGERED'  // Threshold breach detected, firing alerts
  | 'SUSPENDED'        // Polling/stream temporarily paused
  | 'TERMINATED';      // Gracefully shutdown/archived
