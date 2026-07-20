export interface ExecutiveAlert {
  readonly alertId: string;
  readonly uniqueAlertCode: string; // e.g. "ALT-EXE-CASHFLOW-REDUCTION"
  readonly alertTitle: string;
  readonly descriptionText: string;
  readonly severity: 'WARNING' | 'CRITICAL_ACTION_REQUIRED' | 'ENTERPRISE_EMERGENCY';
  readonly sourceOperatingSystemCode: 'MARKETING_OS' | 'SALES_OS' | 'FINANCE_OS' | 'HR_OS' | 'OPERATIONS_OS' | 'LEGAL_OS';
  readonly associatedKpiCodeString?: string;
  readonly mitigationCoordinatorRoleIdString: string; // assigned executive to handle the emergency
  readonly resolvedFlag: boolean;
  readonly resolvedAt?: Date;
  readonly raisedAt: Date;
}
