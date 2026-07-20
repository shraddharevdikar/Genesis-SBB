export interface DashboardShortcut {
  readonly shortcutId: string;
  readonly labelTitle: string;
  readonly descriptionNotes?: string;
  readonly iconIdentifierString?: string; // lucide icon identifier
  readonly actionTargetURI: string; // e.g. "workflow://finance/invoice-approval" or "https://..."
  readonly isNewTabOpeningFlag: boolean;
  readonly displayOrderIndex: number;
}
