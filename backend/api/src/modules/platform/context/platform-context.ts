import { PlatformContextType } from '@sbb/shared';
import { RequestContext } from './request-context.js';
import { IdentityContext } from './identity-context.js';
import { TenantContext } from './tenant-context.js';
import { OrganizationContext } from './organization-context.js';
import { ClientContext } from './client-context.js';
import { FeatureFlagContext } from './feature-flag-context.js';

export class PlatformContext implements PlatformContextType {
  public readonly request: RequestContext;
  public readonly identity?: IdentityContext;
  public readonly tenant?: TenantContext;
  public readonly organization?: OrganizationContext;
  public readonly client?: ClientContext;
  public readonly featureFlags?: FeatureFlagContext;

  constructor(options: {
    request: RequestContext;
    identity?: IdentityContext;
    tenant?: TenantContext;
    organization?: OrganizationContext;
    client?: ClientContext;
    featureFlags?: FeatureFlagContext;
  }) {
    this.request = options.request;
    this.identity = options.identity;
    this.tenant = options.tenant;
    this.organization = options.organization;
    this.client = options.client;
    this.featureFlags = options.featureFlags;
    Object.freeze(this);
  }
}
