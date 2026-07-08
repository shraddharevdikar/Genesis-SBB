import { CostRecord } from '../cost/cost-record.js';
import { TokenUsage } from '../tokens/token-usage.js';
import { UsageSummary } from '../analytics/usage-summary.js';

export interface AccountingEngine {
  recordUsage(record: Omit<CostRecord, 'recordId' | 'timestamp'>): Promise<CostRecord>;
  getSummary(tenantId: string, startDate: Date, endDate: Date): Promise<UsageSummary>;
}

export class DefaultAccountingEngine implements AccountingEngine {
  private readonly records: CostRecord[] = [];

  public async recordUsage(record: Omit<CostRecord, 'recordId' | 'timestamp'>): Promise<CostRecord> {
    const fullRecord: CostRecord = {
      ...record,
      recordId: `acc-${Math.random().toString(36).substring(7)}`,
      timestamp: new Date(),
    };
    this.records.push(fullRecord);
    return fullRecord;
  }

  public async getSummary(tenantId: string, startDate: Date, endDate: Date): Promise<UsageSummary> {
    const filtered = this.records.filter(r => 
      r.tenantId === tenantId && 
      r.timestamp >= startDate && 
      r.timestamp <= endDate
    );

    let totalCostUSD = 0;
    let totalTokens = 0;
    
    const providerMap = new Map<string, { requests: number; cost: number }>();
    const modelMap = new Map<string, { requests: number; cost: number; provider: string }>();
    const capabilityMap = new Map<string, { requests: number; cost: number }>();
    const moduleMap = new Map<string, { requests: number; cost: number }>();

    for (const r of filtered) {
      totalCostUSD += r.actualCost;
      totalTokens += 1000; // Assume 1000 average tokens for simplified summary aggregate stubs

      // Provider
      const p = providerMap.get(r.provider) || { requests: 0, cost: 0 };
      providerMap.set(r.provider, { requests: p.requests + 1, cost: p.cost + r.actualCost });

      // Model
      const m = modelMap.get(r.model) || { requests: 0, cost: 0, provider: r.provider };
      modelMap.set(r.model, { requests: m.requests + 1, cost: m.cost + r.actualCost, provider: r.provider });

      // Capability
      const c = capabilityMap.get(r.capability) || { requests: 0, cost: 0 };
      capabilityMap.set(r.capability, { requests: c.requests + 1, cost: c.cost + r.actualCost });

      // Module
      const mod = moduleMap.get(r.module) || { requests: 0, cost: 0 };
      moduleMap.set(r.module, { requests: mod.requests + 1, cost: mod.cost + r.actualCost });
    }

    return {
      tenantId,
      totalCostUSD,
      totalTokens,
      totalRequests: filtered.length,
      periodStart: startDate,
      periodEnd: endDate,
      providers: Array.from(providerMap.entries()).map(([providerId, data]) => ({
        providerId,
        totalRequests: data.requests,
        totalTokens: data.requests * 1000,
        totalCostUSD: data.cost,
        lastActiveAt: new Date(),
      })),
      models: Array.from(modelMap.entries()).map(([modelId, data]) => ({
        modelId,
        providerId: data.provider,
        totalRequests: data.requests,
        totalTokens: data.requests * 1000,
        totalCostUSD: data.cost,
        lastActiveAt: new Date(),
      })),
      capabilities: Array.from(capabilityMap.entries()).map(([capability, data]) => ({
        capability,
        requestCount: data.requests,
        totalTokens: data.requests * 1000,
        totalCostUSD: data.cost,
      })),
      modules: Array.from(moduleMap.entries()).map(([module, data]) => ({
        module,
        requestCount: data.requests,
        totalCostUSD: data.cost,
      })),
    };
  }
}
