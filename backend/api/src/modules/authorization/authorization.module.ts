import { Module } from '@nestjs/common';
import { AuthorizationService } from './domain/services/authorization.service.js';
import { PolicyEvaluationService } from './domain/services/policy-evaluation.service.js';
import { InMemoryRoleRepository } from './infrastructure/repositories/in-memory-role.repository.js';
import { InMemoryPermissionRepository } from './infrastructure/repositories/in-memory-permission.repository.js';
import { InMemoryPolicyRepository } from './infrastructure/repositories/in-memory-policy.repository.js';
import { MockPolicyEngine } from './infrastructure/policy-engine/mock-policy-engine.service.js';
import { AuthorizationApplicationService } from './application/services/authorization-application.service.js';
import { AssignRoleHandler } from './application/handlers/assign-role.handler.js';

@Module({
  imports: [],
  providers: [
    AuthorizationService,
    PolicyEvaluationService,
    AuthorizationApplicationService,
    AssignRoleHandler,
    MockPolicyEngine,
    {
      provide: 'IRoleRepository',
      useClass: InMemoryRoleRepository,
    },
    {
      provide: 'IPermissionRepository',
      useClass: InMemoryPermissionRepository,
    },
    {
      provide: 'IPolicyRepository',
      useClass: InMemoryPolicyRepository,
    },
  ],
  exports: [
    AuthorizationService,
    PolicyEvaluationService,
    AuthorizationApplicationService,
    AssignRoleHandler,
  ],
})
export class AuthorizationModule {}
