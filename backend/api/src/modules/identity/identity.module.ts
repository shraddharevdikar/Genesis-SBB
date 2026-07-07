import { Module } from '@nestjs/common';
import { IdentityController } from './presentation/rest/identity.controller';
import { IdentityApplicationService } from './application/services/identity-application.service';
import { CreateIdentityHandler } from './application/handlers/create-identity.handler';
import { IdentityDomainService } from './domain/services/identity-domain.service';
import { PrismaIdentityRepository } from './infrastructure/persistence/prisma/repositories/prisma-identity.repository';
import { IdentityResolver } from './presentation/graphql/identity.resolver';

// User aggregate components
import { UserApplicationService } from './application/services/user-application.service';
import { UserDomainService } from './domain/services/user-domain.service';
import { CreateUserHandler } from './application/handlers/create-user.handler';
import { PrismaUserRepository } from './infrastructure/persistence/prisma/repositories/prisma-user.repository';

// Organization aggregate components
import { OrganizationApplicationService } from './application/services/organization-application.service';
import { OrganizationDomainService } from './domain/services/organization-domain.service';
import { CreateOrganizationHandler } from './application/handlers/create-organization.handler';
import { PrismaOrganizationRepository } from './infrastructure/persistence/prisma/repositories/prisma-organization.repository';

// Tenant aggregate components
import { TenantApplicationService } from './application/services/tenant-application.service';
import { TenantDomainService } from './domain/services/tenant-domain.service';
import { CreateTenantHandler } from './application/handlers/create-tenant.handler';
import { PrismaTenantRepository } from './infrastructure/persistence/prisma/repositories/prisma-tenant.repository';

// Membership aggregate components
import { MembershipApplicationService } from './application/services/membership-application.service';
import { MembershipDomainService } from './domain/services/membership-domain.service';
import { CreateMembershipHandler } from './application/handlers/create-membership.handler';
import { PrismaMembershipRepository } from './infrastructure/persistence/prisma/repositories/prisma-membership.repository';

@Module({
  imports: [],
  controllers: [IdentityController],
  providers: [
    IdentityApplicationService,
    IdentityDomainService,
    CreateIdentityHandler,
    IdentityResolver,
    {
      provide: 'IIdentityRepository',
      useClass: PrismaIdentityRepository,
    },
    // User aggregate providers
    UserApplicationService,
    UserDomainService,
    CreateUserHandler,
    {
      provide: 'IUserRepository',
      useClass: PrismaUserRepository,
    },
    // Organization aggregate providers
    OrganizationApplicationService,
    OrganizationDomainService,
    CreateOrganizationHandler,
    {
      provide: 'IOrganizationRepository',
      useClass: PrismaOrganizationRepository,
    },
    // Tenant aggregate providers
    TenantApplicationService,
    TenantDomainService,
    CreateTenantHandler,
    {
      provide: 'ITenantRepository',
      useClass: PrismaTenantRepository,
    },
    // Membership aggregate providers
    MembershipApplicationService,
    MembershipDomainService,
    CreateMembershipHandler,
    {
      provide: 'IMembershipRepository',
      useClass: PrismaMembershipRepository,
    },
  ],
  exports: [
    IdentityApplicationService,
    IdentityDomainService,
    UserApplicationService,
    UserDomainService,
    OrganizationApplicationService,
    OrganizationDomainService,
    TenantApplicationService,
    TenantDomainService,
    MembershipApplicationService,
    MembershipDomainService,
  ],
})
export class IdentityModule {}
