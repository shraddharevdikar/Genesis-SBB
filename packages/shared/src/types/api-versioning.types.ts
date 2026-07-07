import { ApiLifecycle } from '../enums/index.js';

export interface ApiVersion {
  readonly version: string;
  readonly status: ApiLifecycle;
  readonly releasedAt: string | Date;
  readonly deprecatedAt?: string | Date;
  readonly sunsetAt?: string | Date;
}

export interface DeprecationPolicy {
  readonly warningHeader?: string;
  readonly sunsetAt?: string | Date;
  readonly migrationHint?: string;
}

export interface ApiVersionResolver {
  resolveVersion(request: any): string;
  validateVersion(version: string): boolean;
  getDefaultVersion(): string;
}
