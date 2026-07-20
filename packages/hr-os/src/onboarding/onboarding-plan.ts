import { OnboardingLifecycleState } from '../core/employee-lifecycle.js';
import { OnboardingChecklistItem } from './onboarding-checklist.js';
import { OnboardingMilestone } from './onboarding-milestone.js';

export interface OnboardingPlan {
  readonly planId: string;
  readonly uniquePlanCode: string; // e.g. "ONB-2026-EMP-421"
  readonly targetEmployeeIdString: string;
  readonly assignedBuddyEmployeeIdString?: string;
  readonly scheduledStartDate: Date;
  readonly expectedDurationDaysCount: number; // e.g., 30, 60, 90 days
  readonly checklistItemsList: OnboardingChecklistItem[];
  readonly progressMilestonesList: OnboardingMilestone[];
  readonly currentState: OnboardingLifecycleState;
  readonly completedFlag: boolean;
  readonly completedAt?: Date;
  readonly overallProgressPercentageDecimal: number;
}
