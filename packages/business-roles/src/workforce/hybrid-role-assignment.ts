import { HumanRoleAssignment } from './human-role-assignment.js';
import { AiRoleAssignment } from './ai-role-assignment.js';

export interface HybridRoleAssignment {
  readonly hybridAssignmentId: string;
  readonly roleIdString: string;
  readonly primarySupervisorHumanAssignment: HumanRoleAssignment;
  readonly executionDigitalAiAssignmentsList: AiRoleAssignment[];
  readonly humanInTheLoopApprovalThresholdScore: number; // e.g. 0.85
  readonly requiresDoubleSignatureOnFinancialTriggers: boolean;
  readonly synchronizedSessionChannelId: string;
}
