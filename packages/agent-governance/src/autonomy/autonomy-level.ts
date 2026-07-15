export type AutonomyLevelCode =
  | 'LEVEL_0_MANUAL'             // Human operates directly, agent acts as passive logging/auditing layer
  | 'LEVEL_1_ASSISTED'           // Human approves every single task step before dispatch
  | 'LEVEL_2_CONDITIONAL_AUTO'   // Agent executes but halts on pre-defined checkpoints/limits
  | 'LEVEL_3_EXCEPTION_ONLY'     // Agent executes autonomously, halts/escalates only on risk violations or exceptions
  | 'LEVEL_4_HIGH_AUTONOMY'     // Agent handles goals completely, notifying human on achievements and major risk shifts
  | 'LEVEL_5_FULL_AUTONOMY';     // Completely autonomous digital employee (within sandbox policies)

export interface AutonomyLevel {
  readonly code: AutonomyLevelCode;
  readonly displayName: string;
  readonly description: string;
  readonly requiresHeartbeatVerification: boolean;
}
