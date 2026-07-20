export interface OnboardingChecklistItem {
  readonly itemId: string;
  readonly uniqueItemCode: string; // e.g. "ONB-TSK-HARDWARE-PROVISION"
  readonly taskTitle: string;
  readonly detailedInstructionsText: string;
  readonly ownerDepartmentCodeString: 'IT' | 'HR' | 'SECURITY' | 'FACILITIES' | 'DEPARTMENT_MANAGER';
  readonly isMandatoryToCompleteFlag: boolean;
  readonly dependencyItemCodeString?: string; // Cannot complete before this is checked
  readonly completedFlag: boolean;
  readonly markedCompletedByOperatorRoleId?: string;
  readonly markedCompletedAt?: Date;
}
