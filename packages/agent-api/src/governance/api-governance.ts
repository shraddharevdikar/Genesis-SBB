import { ApiContext } from '../core/api-context.js';

export interface ApiGovernance {
  readonly governanceId: string;
  validateDataConformity(
    payloadJson: string,
    policyRulesList: string[],
    context: ApiContext
  ): Promise<{ readonly passesConformity: boolean; readonly infractionDetailsList: string[] }>;
}
