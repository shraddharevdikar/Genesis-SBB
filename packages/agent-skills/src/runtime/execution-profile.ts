export interface ExecutionProfile {
  readonly profileId: string;
  readonly allocatedMemoryKb: number;
  readonly maxConcurrencyCeiling: number;
  readonly allowedIopsLimit: number;
  readonly requiredNetworkScope: 'ISOLATED' | 'SBB_INTERNAL' | 'SECURE_EXTERNAL' | 'PUBLIC';
}
