import { PlaybookReference } from './playbook-reference.js';

export enum PlaybookCategory {
  MARKET_EXPANSION = 'MARKET_EXPANSION',
  PRODUCT_LAUNCH = 'PRODUCT_LAUNCH',
  COST_OPTIMIZATION = 'COST_OPTIMIZATION',
  DIGITAL_TRANSFORMATION = 'DIGITAL_TRANSFORMATION',
  ORGANIZATIONAL_RESTRUCTURING = 'ORGANIZATIONAL_RESTRUCTURING',
  CRISIS_RESPONSE = 'CRISIS_RESPONSE',
  CUSTOMER_RETENTION = 'CUSTOMER_RETENTION',
  INNOVATION_STRATEGY = 'INNOVATION_STRATEGY'
}

export interface PlaybookStep {
  readonly stepNumber: number;
  readonly actionItem: string;
  readonly roleResponsible: string;
  readonly expectedDurationDays?: number;
}

export interface ExecutivePlaybook {
  readonly playbookId: string;
  readonly tenantId: string;
  readonly title: string;
  readonly description: string;
  readonly playbookCategory: PlaybookCategory;
  readonly workflowSteps: PlaybookStep[];
  readonly dynamicTemplates: PlaybookReference[];
  readonly isApproved: boolean;
  readonly version: number;
  readonly updatedAt: Date;
}
