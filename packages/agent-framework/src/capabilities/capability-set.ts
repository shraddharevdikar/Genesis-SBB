import { Capability } from './capability.js';

export interface CapabilitySet {
  readonly setId: string;
  readonly ownerId: string; // e.g. agentId
  readonly capabilities: Capability[];
  readonly lastModifiedAt: Date;
}
