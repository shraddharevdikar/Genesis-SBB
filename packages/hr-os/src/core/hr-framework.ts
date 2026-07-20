import { HRContext } from './hr-context.js';
import { WorkforcePlan } from '../workforce/workforce-plan.js';
import { JobRequisition } from '../recruitment/job-requisition.js';
import { Candidate } from '../recruitment/candidate.js';
import { Employee, EmployeeId } from '../employees/employee.js';
import { OnboardingPlan } from '../onboarding/onboarding-plan.js';
import { PerformanceReview } from '../performance/performance-review.js';
import { LearningPlan } from '../learning/learning-plan.js';
import { CompensationPlan } from '../compensation/compensation-plan.js';
import { HRPolicy } from '../governance/hr-policy.js';

export interface HRFramework {
  planWorkforce(uniquePlanCode: string, displayName: string, fiscalYear: number, budgetAmount: number, currencyCode: string, context: HRContext): Promise<WorkforcePlan>;
  createJobRequisition(uniqueRequisitionCode: string, targetPositionId: string, baseSalaryMin: number, baseSalaryMax: number, currencyCode: string, context: HRContext): Promise<JobRequisition>;
  hireEmployee(uniqueEmployeeCode: string, candidate: Candidate, associatedRequisition: JobRequisition, selectedSalary: number, selectedBonusPct: number, contractDocumentURI: string, context: HRContext): Promise<Employee>;
  onboardEmployee(uniqueOnboardingPlanCode: string, employeeId: EmployeeId, expectedDurationDays: number, context: HRContext): Promise<OnboardingPlan>;
  managePerformance(uniqueReviewCode: string, employeeId: EmployeeId, fiscalPeriodCode: string, context: HRContext): Promise<PerformanceReview>;
  manageLearning(uniquePlanCode: string, employeeId: EmployeeId, context: HRContext): Promise<LearningPlan>;
  manageCompensation(uniquePlanCode: string, employeeId: EmployeeId, adjustedBaseSalary: number, context: HRContext): Promise<CompensationPlan>;
  offboardEmployee(employeeId: EmployeeId, exitReason: 'VOLUNTARY' | 'INVOLUNTARY_PERFORMANCE' | 'INVOLUNTARY_REDUNDANCY' | 'RETIREMENT', severanceWeeks: number, context: HRContext): Promise<boolean>;
}
