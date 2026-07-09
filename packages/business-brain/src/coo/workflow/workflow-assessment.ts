import { ProcessEfficiency } from './process-efficiency.js';
import { BottleneckAnalysis } from './bottleneck-analysis.js';

export interface WorkflowAssessment {
  readonly assessmentId: string;
  readonly tenantId: string;
  readonly workflowName: string;
  readonly efficiency: ProcessEfficiency;
  readonly activeBottlenecks: BottleneckAnalysis[];
  readonly automationOpportunities: {
    readonly taskName: string;
    readonly potentialTimeSavingHoursPerWeek: number;
    readonly estimatedComplexity: 'LOW' | 'MEDIUM' | 'HIGH';
    readonly description: string;
  }[];
  readonly assessedAt: Date;
}
