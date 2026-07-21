import { EducationContext } from './education-context.js';
import { Student, StudentId } from '../students/student.js';
import { Enrollment } from '../students/enrollment.js';
import { Course } from '../academics/course.js';
import { LearningModule } from '../learning/learning-module.js';
import { Gradebook } from '../learning/gradebook.js';
import { Certificate } from '../certification/certificate.js';
import { Campus } from '../campus/campus.js';
import { AdmissionApplication } from '../admissions/admission-application.js';

export interface EducationFramework {
  /**
   * Processes admissions applications and grants official student admission.
   */
  admitStudent(
    uniqueApplicationCode: string,
    applicantPayloadJSON: string,
    targetProgramIdString: string,
    targetAdmissionCycleIdString: string,
    context?: EducationContext
  ): Promise<AdmissionApplication>;

  /**
   * Enrolls an admitted student into courses or degree programs for an active academic term.
   */
  enrollStudent(
    associatedStudentId: StudentId,
    targetCourseSectionIdString: string,
    academicTermIdString: string,
    isAuditOnlyFlag: boolean,
    context?: EducationContext
  ): Promise<Enrollment>;

  /**
   * Configures, schedules, and maintains courses, curricula structures, and degree programs.
   */
  manageCourses(
    uniqueCourseCode: string,
    courseTitle: string,
    creditUnitsDecimal: number,
    departmentIdString: string,
    syllabusPayloadJSON: string,
    context?: EducationContext
  ): Promise<Course>;

  /**
   * Manages learning delivery, curriculum modules, readings, lecture videos, and student study progress.
   */
  deliverLearning(
    uniqueModuleCode: string,
    associatedCourseIdString: string,
    displayTitle: string,
    curatedResourcesJSON: string,
    context?: EducationContext
  ): Promise<LearningModule>;

  /**
   * Records student homework assignments and examinations, updating the centralized academic gradebook.
   */
  conductAssessment(
    associatedStudentId: StudentId,
    associatedCourseIdString: string,
    academicTermIdString: string,
    submittedGradesJSON: string,
    context?: EducationContext
  ): Promise<Gradebook>;

  /**
   * Audits student requirements and issues cryptographically verifiable degree certificates or micro-credentials.
   */
  issueCertification(
    associatedStudentId: StudentId,
    conferredCredentialTitle: string,
    associatedProgramIdString?: string,
    honorsConferredText?: string,
    context?: EducationContext
  ): Promise<Certificate>;

  /**
   * Allocates physical campus buildings, classrooms, department budgets, and laboratory equipment parameters.
   */
  manageCampus(
    uniqueCampusCode: string,
    displayName: string,
    physicalAddressString: string,
    safetyCapacityLimit: number,
    context?: EducationContext
  ): Promise<Campus>;
}
