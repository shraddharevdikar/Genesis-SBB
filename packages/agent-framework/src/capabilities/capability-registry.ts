import { Capability } from './capability.js';

export interface CapabilityRegistry {
  registerCapability(capability: Capability): void;
  deregisterCapability(capabilityId: string): void;
  getCapability(capabilityId: string): Capability | undefined;
  listCapabilities(): Capability[];
}
