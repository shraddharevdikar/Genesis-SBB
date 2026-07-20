export type BlueprintLifecycleState =
  | 'DRAFT'
  | 'VALIDATING'
  | 'PUBLISHED_ACTIVE'
  | 'DEPRECATED'
  | 'RETIRED';

export interface BlueprintLifecycle {
  readonly currentState: BlueprintLifecycleState;
  readonly createdByOperatorRoleId: string;
  readonly lastValidatedByOperatorRoleId?: string;
  readonly lastValidatedAt?: Date;
  readonly isCompositionValid: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
