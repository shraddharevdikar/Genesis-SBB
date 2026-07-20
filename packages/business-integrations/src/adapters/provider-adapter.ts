import { ConnectorId } from '../identity/connector-id.js';
import { ProtocolAdapter } from './protocol-adapter.js';

export interface ProviderAdapter {
  readonly adapterId: string;
  readonly uniqueAdapterCode: string; // e.g. "ADP-SF-REST" or "ADP-SAP-SOAP"
  readonly targetConnectorId: ConnectorId;
  readonly supportedProtocolsList: ProtocolAdapter[];
  readonly adapterVersionString: string;
  readonly isOutboundSupported: boolean;
  readonly isInboundSupported: boolean;
}
