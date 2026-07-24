export interface IDeliveryResult {
  success: boolean;
  messageId?: string;
  provider: string;
  channel: string;
  latencyMs?: number;
  error?: string;
  metadata?: Record<string, any>;
}
