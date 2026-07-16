export type BusinessState =
  | 'DRAFT'
  | 'PROVISIONING'
  | 'OPERATIONAL'
  | 'SUSPENDED'
  | 'RESTRUCTURED'
  | 'RETIRED';

export interface BusinessLifecycle {
  readonly currentState: BusinessState;
  readonly lastStateTransitionAt: Date;
  readonly reasonNotes?: string;
}
