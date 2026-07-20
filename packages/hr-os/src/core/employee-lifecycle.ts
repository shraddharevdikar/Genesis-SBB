export type CandidateLifecycleState =
  | 'APPLIED'
  | 'SCREENED'
  | 'INTERVIEWING'
  | 'OFFER_EXTENDED'
  | 'OFFER_ACCEPTED'
  | 'OFFER_DECLINED'
  | 'REJECTED'
  | 'WITHDRAWN';

export type OnboardingLifecycleState =
  | 'PRE_BOARDING'
  | 'DAY_ONE'
  | 'IN_PROGRESS'
  | 'MILESTONES_MET'
  | 'COMPLETED'
  | 'STALLED_ALERT';

export type EmploymentLifecycleState =
  | 'PROBATIONARY'
  | 'ACTIVE'
  | 'ON_LEAVE_MATERNITY_PATERNITY'
  | 'ON_LEAVE_SABBATICAL'
  | 'SUSPENDED'
  | 'OFFBOARDING_IN_PROGRESS'
  | 'TERMINATED_EXITED';

export type PerformanceCycleState =
  | 'CYCLE_PLANNING'
  | 'SELF_ASSESSMENT_STAGE'
  | 'MANAGER_REVIEW_STAGE'
  | 'PEER_CALIBRATION_STAGE'
  | 'COMPLETED_RECORDED';

export interface EmployeeLifecycle {
  readonly currentEmploymentState: EmploymentLifecycleState;
  readonly probationEndCalculatedDate?: Date;
  readonly lastStatusChangeAt: Date;
  readonly terminationDate?: Date;
  readonly terminationReasonCode?: 'VOLUNTARY' | 'INVOLUNTARY_PERFORMANCE' | 'INVOLUNTARY_REDUNDANCY' | 'RETIREMENT';
}
