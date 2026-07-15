import { ExecutionMode } from '../strategy/execution-mode.js';

export interface ExecutionPolicy {
  readonly policyId: string;
  readonly tenantId: string;
  readonly allowedExecutionModesList: ExecutionMode[];
  readonly maxAllowedExecutionDurationMinutes: number; // Terminate if execution exceeds this
  readonly maxAllowedCompensationDurationMinutes: number;
  readonly requireMfaForStepExecution: boolean; // True if supervisor MFA check is mandatory
  readonly blacklistedEnvironmentNodesList: string[]; // Unsafe execution host regions
}
