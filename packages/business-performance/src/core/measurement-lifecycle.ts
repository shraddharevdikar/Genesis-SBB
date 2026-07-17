export type MeasurementLifecycleState =
  | 'DRAFT'
  | 'APPROVED'
  | 'ACTIVE_MEASURING'
  | 'SUSPENDED'
  | 'RETIRED';

export interface MeasurementLifecycle {
  readonly currentState: MeasurementLifecycleState;
  readonly approvedAt?: Date;
  readonly approvedByParticipantId?: string;
  readonly lastEvaluatedAt: Date;
  readonly isMeasuringEnabled: boolean;
}
