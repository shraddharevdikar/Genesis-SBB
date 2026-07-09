import { ResourceAllocation } from './resource-allocation.js';
import { CapacityPlan } from './capacity-plan.js';

export interface ResourcePlan {
  readonly planId: string;
  readonly tenantId: string;
  readonly period: string; // e.g., "Q3-2026"
  readonly teams: string[]; // e.g., ["Platform Eng", "QA", "SRE"]
  readonly skillsCatalog: string[]; // e.g., ["Kubernetes", "TypeScript", "Drizzle"]
  readonly allocations: ResourceAllocation[];
  readonly capacities: CapacityPlan[];
  readonly totalAvailableCapacityFTE: number;
  readonly totalAllocatedCapacityFTE: number;
  readonly criticalDependencies: string[]; // bottlenecks or shared single points of failure
  readonly isApproved: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
