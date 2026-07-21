export enum AdmissionStatus {
  APPLIED = 'APPLIED',
  UNDER_REVIEW = 'UNDER_REVIEW',
  WAITLISTED = 'WAITLISTED',
  OFFERED = 'OFFERED',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
  WITHDRAWN = 'WITHDRAWN'
}

export enum StudentStatus {
  PROSPECTIVE = 'PROSPECTIVE',
  ENROLLED = 'ENROLLED',
  ACTIVE = 'ACTIVE',
  SUSPENDED = 'SUSPENDED',
  LEAVE_OF_ABSENCE = 'LEAVE_OF_ABSENCE',
  GRADUATED = 'GRADUATED',
  ALUMNI = 'ALUMNI',
  WITHDRAWN = 'WITHDRAWN'
}

export enum CourseStatus {
  DRAFT = 'DRAFT',
  SCHEDULED = 'SCHEDULED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED'
}

export enum AssignmentStatus {
  ASSIGNED = 'ASSIGNED',
  SUBMITTED = 'SUBMITTED',
  LATE_SUBMITTED = 'LATE_SUBMITTED',
  GRADED = 'GRADED',
  RE_SUBMISSION_REQUESTED = 'RE_SUBMISSION_REQUESTED'
}

export enum EnrollmentStatus {
  PENDING = 'PENDING',
  ACTIVE = 'ACTIVE',
  DROPPED = 'DROPPED',
  COMPLETED = 'COMPLETED',
  AUDIT = 'AUDIT'
}

export interface LearningLifecycleState {
  readonly currentStudentStatus: StudentStatus;
  readonly activeTermCode: string;
  readonly cumulativeGpa: number;
  readonly lastModifiedAt: Date;
}
