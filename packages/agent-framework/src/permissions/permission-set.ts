export interface PermissionSet {
  readonly setId: string;
  readonly name: string; // e.g. "SBB Finance Reader"
  readonly resourcePattern: string; // e.g. "finance:invoices:*"
  readonly actionsAllowed: ('CREATE' | 'READ' | 'UPDATE' | 'DELETE')[];
}
