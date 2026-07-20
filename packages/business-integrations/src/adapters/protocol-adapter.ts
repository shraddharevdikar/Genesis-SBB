export type ProtocolTypeCode =
  | 'REST_JSON'
  | 'GRAPHQL'
  | 'SOAP_XML'
  | 'WEBHOOKS'
  | 'EVENT_STREAMING_KAFKA'
  | 'EVENT_STREAMING_AMQP';

export interface ProtocolAdapter {
  readonly protocolTypeCode: ProtocolTypeCode;
  readonly standardSpecificationVersion: string; // e.g. "1.1", "2.0"
  readonly defaultPayloadEncodingFormat: string; // e.g. "application/json", "application/xml"
  readonly defaultPortNumber: number;
  readonly supportsSubscriptionFlag: boolean;
  readonly supportsClientKeepAliveFlag: boolean;
}
