export interface ExternalSystemContract {
  readonly externalSystemId: string;
  readonly name: string;
  readonly accessEndpointUriString: string;
  readonly communicationProtocolCode: 'HTTPS' | 'AMQP' | 'MQTT' | 'GRPC';
  readonly retryAttemptsLimit: number;
}
