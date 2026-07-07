import { Module } from '@nestjs/common';
import { IdentityContextService } from './application/services/identity-context.service.js';
import { AuthenticationGuard } from './infrastructure/guards/authentication.guard.js';
import { AuthorizationGuard } from './infrastructure/guards/authorization.guard.js';
import { TenantGuard } from './infrastructure/guards/tenant.guard.js';
import { IdentityContextInterceptor } from './infrastructure/interceptors/identity-context.interceptor.js';

@Module({
  imports: [],
  providers: [
    IdentityContextService,
    AuthenticationGuard,
    AuthorizationGuard,
    TenantGuard,
    IdentityContextInterceptor,
  ],
  exports: [
    IdentityContextService,
    AuthenticationGuard,
    AuthorizationGuard,
    TenantGuard,
    IdentityContextInterceptor,
  ],
})
export class IdentityIntegrationModule {}
