import { Module } from '@nestjs/common';
import { IdentityController } from './presentation/rest/identity.controller';
import { IdentityApplicationService } from './application/services/identity-application.service';
import { CreateIdentityHandler } from './application/handlers/create-identity.handler';
import { IdentityDomainService } from './domain/services/identity-domain.service';
import { PrismaIdentityRepository } from './infrastructure/persistence/prisma/repositories/prisma-identity.repository';
import { IdentityResolver } from './presentation/graphql/identity.resolver';

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
  ],
  exports: [
    IdentityApplicationService,
    IdentityDomainService,
  ],
})
export class IdentityModule {}
