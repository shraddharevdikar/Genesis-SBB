import { ApiContext } from '../core/api-context.js';

export interface GovernanceCapability {
  readonly capabilityId: string;
  verifyComplianceStatus(
    tenantId: string,
    regulatoryRuleCode: string,
    context: ApiContext
  ): Promise<{ readonly isCompliant: boolean; readonly infractionDetailsText?: string }>;

  auditAgentActions(
    targetAgentId: string,
    timeWindowHoursCount: number,
    context: ApiContext
  ): Promise<{ readonly targetAgentId: string; readonly auditedLogsCount: number }>;
}
