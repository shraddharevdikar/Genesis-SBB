export interface RequestContextType {
  readonly correlationId: string;
  readonly requestId: string;
  readonly timestamp: string;
  readonly clientIp?: string;
  readonly userAgent?: string;
  readonly locale?: string;
  readonly timezone?: string;
}

export interface IdentityContextType {
  readonly userId?: string;
  readonly username?: string;
  readonly email?: string;
  readonly roles?: string[];
  readonly permissions?: string[];
}

export interface TenantContextType {
  readonly tenantId?: string;
  readonly tenantName?: string;
  readonly tier?: string;
  readonly status?: string;
}

export interface OrganizationContextType {
  readonly organizationId?: string;
  readonly organizationName?: string;
  readonly membershipId?: string;
  readonly membershipRole?: string;
}

export interface ClientContextType {
  readonly deviceType?: string;
  readonly platform?: string;
  readonly browser?: string;
  readonly appVersion?: string;
}

export interface FeatureFlagContextType {
  readonly flags?: Record<string, boolean>;
}

export interface PlatformContextType {
  readonly request: RequestContextType;
  readonly identity?: IdentityContextType;
  readonly tenant?: TenantContextType;
  readonly organization?: OrganizationContextType;
  readonly client?: ClientContextType;
  readonly featureFlags?: FeatureFlagContextType;
}
