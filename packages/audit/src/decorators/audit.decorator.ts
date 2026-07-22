import { SetMetadata } from '@nestjs/common';

export const AUDIT_METADATA_KEY = 'audit_metadata';

export interface AuditOptions {
  action: string;
  resource: string;
  severity?: string;
}

/**
 * Decorator to declaratively audit controller endpoint methods.
 */
export const Audit = (options: AuditOptions) => SetMetadata(AUDIT_METADATA_KEY, options);
