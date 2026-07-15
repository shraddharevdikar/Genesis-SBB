export interface RuntimeResult {
  readonly referenceId: string; // ID of the created or queried resource
  readonly isSuccess: boolean;
  readonly message?: string;
  readonly executionTimeMs: number;
  readonly payload?: Record<string, any>;
}
