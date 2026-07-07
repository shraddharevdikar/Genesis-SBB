import { ProviderCapability } from './provider-capability.js';
import { ProviderHealthStatus } from './provider-health.js';

export interface ProviderDescriptor {
  readonly providerId: string;
  readonly name: string;
  readonly version: string;
  readonly capabilities: (ProviderCapability | string)[];
  readonly region?: string;
  readonly status: ProviderHealthStatus;
  readonly priority: number; // Higher is preferred
  readonly costTier: 'FREE' | 'LOW' | 'MEDIUM' | 'HIGH' | string;
}
