export type MessagePriority = 
  | 'LOW'        // Informational broadcasts or background advisories
  | 'STANDARD'   // Standard processing inquiries
  | 'HIGH'       // Critical passenger advisories or route alerts
  | 'CRITICAL';  // Safety emergency escalations
