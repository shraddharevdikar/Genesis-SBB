import { ProtocolTypeCode } from '../adapters/protocol-adapter.js';

export type ConnectorCapabilityTypeCode =
  | 'READ_PULL'
  | 'WRITE_PUSH'
  | 'REALTIME_SUBSCRIBE'
  | 'BULK_BATCH_EXTRACT'
  | 'METADATA_DISCOVERY'
  | 'BIDIRECTIONAL_STREAM';

export interface ConnectorCapability {
  readonly capabilityCode: string; // e.g. "CAP-SYNC-ACCOUNTS"
  readonly displayName: string;
  readonly capabilityType: ConnectorCapabilityTypeCode;
  readonly supportedProtocolsList: ProtocolTypeCode[];
  readonly maxThroughputRpsLimit: number;
  readonly isReadOnlyFlag: boolean;
}
