import { ProviderCapability } from '../../providers/registry/provider-capability.js';
import { ProviderDescriptor } from '../../providers/registry/provider-descriptor.js';

export interface ProviderSelectionCriteria {
  readonly capability: ProviderCapability | string;
  readonly region?: string;
  readonly tenantTier?: string;
  readonly minPriority?: number;
  readonly maxCostTier?: 'FREE' | 'LOW' | 'MEDIUM' | 'HIGH' | string;
}

export interface ProviderSelector {
  selectProviders(criteria: ProviderSelectionCriteria): Promise<ProviderDescriptor[]>;
}

export class DefaultProviderSelector implements ProviderSelector {
  constructor(private readonly providerDescriptors: ProviderDescriptor[]) {}

  public async selectProviders(criteria: ProviderSelectionCriteria): Promise<ProviderDescriptor[]> {
    let filtered = this.providerDescriptors.filter(d => 
      d.capabilities.includes(criteria.capability)
    );

    if (criteria.region) {
      filtered = filtered.filter(d => d.region === criteria.region);
    }

    if (criteria.minPriority !== undefined) {
      filtered = filtered.filter(d => d.priority >= (criteria.minPriority ?? 0));
    }

    // Sort by priority descending
    return filtered.sort((a, b) => b.priority - a.priority);
  }
}
