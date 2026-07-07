import { ProviderRegistry } from '../registry/provider-registry.js';
import { ProviderDescriptor } from '../registry/provider-descriptor.js';
import { ProviderCapability } from '../registry/provider-capability.js';
import { ProviderHealthStatus } from '../registry/provider-health.js';

export interface ResolveCriteria {
  readonly capability: ProviderCapability | string;
  readonly region?: string;
  readonly tenantTier?: 'FREE' | 'LOW' | 'MEDIUM' | 'HIGH' | string;
  readonly preferredCostTier?: 'FREE' | 'LOW' | 'MEDIUM' | 'HIGH' | string;
}

export class ProviderResolver {
  constructor(private readonly registry: ProviderRegistry) {}

  /**
   * Resolves the best matched provider descriptor based on capability, status, region, cost, and priority.
   */
  public resolve(criteria: ResolveCriteria): ProviderDescriptor {
    const descriptors = this.registry.listDescriptors();

    // 1. Filter by capability
    let matches = descriptors.filter(d => d.capabilities.includes(criteria.capability));

    if (matches.length === 0) {
      throw new Error(`No providers registered with capability: "${criteria.capability}"`);
    }

    // 2. Filter out offline/maintenance providers
    matches = matches.filter(
      d => d.status !== ProviderHealthStatus.OFFLINE && d.status !== ProviderHealthStatus.MAINTENANCE
    );

    if (matches.length === 0) {
      throw new Error(`All providers with capability "${criteria.capability}" are currently offline or in maintenance.`);
    }

    // 3. Optional filter: Region match if specified
    if (criteria.region) {
      const regionalMatches = matches.filter(d => d.region === criteria.region);
      if (regionalMatches.length > 0) {
        matches = regionalMatches;
      }
    }

    // 4. Optional filter: Preferred cost tier matching
    if (criteria.preferredCostTier) {
      const costMatches = matches.filter(d => d.costTier === criteria.preferredCostTier);
      if (costMatches.length > 0) {
        matches = costMatches;
      }
    }

    // 5. Sort by priority (descending), then costTier (ascending cost weight)
    matches.sort((a, b) => {
      if (b.priority !== a.priority) {
        return b.priority - a.priority;
      }
      const costWeight = (tier: string) => {
        switch (tier) {
          case 'FREE': return 1;
          case 'LOW': return 2;
          case 'MEDIUM': return 3;
          case 'HIGH': return 4;
          default: return 5;
        }
      };
      return costWeight(a.costTier) - costWeight(b.costTier);
    });

    return matches[0];
  }
}
