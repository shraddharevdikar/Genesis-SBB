export interface EscalationRule {
  readonly ruleId: string;
  readonly triggerTimeoutMinutes: number; // Duration pending approval before escalation fires
  readonly escalationActionCode: 'NOTIFY_EXECUTIVE_BOARD' | 'DELEGATE_TO_BACKUP' | 'HALT_EXECUTION' | 'FORCE_ROLLBACK';
  readonly recipientRolesList: string[]; // Roles to notify
  readonly escalationMessageFormat: string;
  readonly isEscalatedAutomatically: boolean;
}
