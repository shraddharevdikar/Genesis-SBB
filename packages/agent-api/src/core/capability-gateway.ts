import { ApiContext } from './api-context.js';

export interface CapabilityGateway {
  readonly gatewayId: string;
  readonly supportedCapabilityNamesList: string[];
  invokeCapability(
    capabilityName: string,
    actionPayloadJson: string,
    context: ApiContext
  ): Promise<string>;
}
