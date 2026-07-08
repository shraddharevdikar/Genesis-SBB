import { ExecutiveRole } from '../../core/contracts/executive-role.js';

export interface Initiative {
  readonly id: string;
  readonly companyObjectiveId: string;
  readonly title: string;
  readonly description: string;
  readonly owner: ExecutiveRole;
  readonly priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  readonly timeline: {
    readonly startDate: Date;
    readonly endDate: Date;
  };
  readonly dependencies: string[]; // List of other initiative IDs or system dependencies
  readonly successMetrics: {
    readonly metricDescription: string;
    readonly targetValue: string | number;
  }[];
}
