import { StudentId } from '../students/student.js';

export type RiskTier = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';

export interface DropoutRiskAnalysis {
  readonly analysisId: string;
  readonly uniqueAnalysisCode: string; // e.g. "DRP-RSK-2026-STU-0042"
  readonly associatedStudentId: StudentId;
  readonly calculatedRiskProbabilityDecimal: number; // e.g. 0.65 for 65% risk
  readonly assignedRiskTier: RiskTier;
  readonly primaryTriggerRiskFactorsList: string[]; // e.g., ["CONSECUTIVE_ABSENCES_3", "LOW_ASSIGNMENT_GRADES_MATH"]
  readonly suggestedInstitutionalRemedialActionsList: string[]; // e.g. ["Academic Counsel Interview", "Financial Aid review"]
  readonly outreachContactMadeFlag: boolean; // Institutional outreach tracking
  readonly counselorReviewStaffRoleIdString?: string;
  readonly counselorInterventionNotesText?: string;
  readonly calculatedAt: Date;
}
