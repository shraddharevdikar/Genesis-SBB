import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { PlatformContextProvider } from '../context/platform-context.provider.js';
import { PlatformContext } from '../context/platform-context.js';
import { RequestContext } from '../context/request-context.js';
import { IdentityContext } from '../context/identity-context.js';
import { TenantContext } from '../context/tenant-context.js';
import { OrganizationContext } from '../context/organization-context.js';
import { ClientContext } from '../context/client-context.js';
import { FeatureFlagContext } from '../context/feature-flag-context.js';

@Injectable()
export class RequestContextMiddleware implements NestMiddleware {
  constructor(private readonly contextProvider: PlatformContextProvider) {}

  public use(req: Request, res: Response, next: NextFunction): void {
    const correlationId = (req as any).correlationId || 'corr_' + Math.random().toString(36).substring(2, 11);
    const requestId = (req as any).requestId || 'req_' + Math.random().toString(36).substring(2, 11);

    // Capture Request Metadata
    const clientIp = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || req.ip;
    const userAgent = req.headers['user-agent'];
    const locale = (req.headers['accept-language'] as string) || (req.query.locale as string) || 'en';
    const timezone = (req.headers['x-timezone'] as string) || 'UTC';

    const requestContext = new RequestContext({
      correlationId,
      requestId,
      timestamp: new Date().toISOString(),
      clientIp,
      userAgent,
      locale,
      timezone,
    });

    // Capture placeholder Client Context
    const deviceType = (req.headers['x-device-type'] as string) || 'unknown';
    const platform = (req.headers['x-client-platform'] as string) || 'unknown';
    const browser = (req.headers['x-client-browser'] as string) || 'unknown';
    const appVersion = (req.headers['x-app-version'] as string) || '1.0.0';

    const clientContext = new ClientContext({
      deviceType,
      platform,
      browser,
      appVersion,
    });

    // Populate contexts with default placeholders as per requirements
    const identityContext = new IdentityContext();
    const tenantContext = new TenantContext();
    const organizationContext = new OrganizationContext();
    const featureFlagContext = new FeatureFlagContext({
      flags: {
        'new-dashboard': true,
        'beta-features': false,
      }
    });

    const platformContext = new PlatformContext({
      request: requestContext,
      identity: identityContext,
      tenant: tenantContext,
      organization: organizationContext,
      client: clientContext,
      featureFlags: featureFlagContext,
    });

    // Bind PlatformContext instance to express request object for easy framework reference
    (req as any).platformContext = platformContext;

    // Run downstream flow in async storage context
    this.contextProvider.runWithContext(platformContext, () => {
      next();
    });
  }
}
