import { BusinessProcess } from './business-process.js';

export interface OperatingModel {
  readonly modelId: string;
  readonly tenantId: string;
  readonly layoutType: 'FUNCTIONAL' | 'DIVISIONAL' | 'MATRIX' | 'FLAT_SELF_MANAGING';
  readonly valueChainDescription: string;
  readonly keyProcessesList: BusinessProcess[];
  readonly agilityScore: number; // 0 to 100
  readonly isEnforced: boolean;
  readonly lastReviewedAt: Date;
}
