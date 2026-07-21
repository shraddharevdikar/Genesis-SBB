import { StudentId } from '../students/student.js';

export interface SubjectPerformancePrediction {
  readonly courseCode: string;
  readonly courseTitle: string;
  readonly predictedFinalPercentage: number;
  readonly predictedFinalLetterGrade: string;
  readonly historicalDataBasedConfidenceScore: number; // e.g. 0.88
}

export interface StudentPerformanceAnalysis {
  readonly analysisId: string;
  readonly uniqueAnalysisCode: string; // e.g., "PFM-ANL-2026-STU-0042"
  readonly associatedStudentId: StudentId;
  readonly currentAcademicTermCode: string;
  readonly subjectPerformancePredictionsList: SubjectPerformancePrediction[];
  readonly generalPerformanceTrend: 'ACCELERATING_GROWTH' | 'STABLE_SATISFACTORY' | 'GRADUAL_DECLINE' | 'CRITICAL_DROP';
  readonly recommendedSupportInterventionsList: string[]; // e.g. ["Assign Peer Mentor", "Increase Office Hours attendance"]
  readonly advisorAcknowledgedFlag: boolean; // Review audit trail
  readonly advisorNotesText?: string;
  readonly calculatedAt: Date;
}
