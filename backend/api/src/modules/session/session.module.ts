import { Module } from '@nestjs/common';
import { SessionManagementService } from './domain/services/session-management.service.js';
import { SessionApplicationService } from './application/services/session-application.service.js';
import { CreateSessionHandler } from './application/handlers/create-session.handler.js';
import { RevokeSessionHandler } from './application/handlers/revoke-session.handler.js';
import { InMemorySessionRepository } from './infrastructure/repositories/in-memory-session.repository.js';

@Module({
  imports: [],
  providers: [
    SessionManagementService,
    SessionApplicationService,
    CreateSessionHandler,
    RevokeSessionHandler,
    {
      provide: 'ISessionRepository',
      useClass: InMemorySessionRepository,
    },
  ],
  exports: [
    SessionManagementService,
    SessionApplicationService,
    CreateSessionHandler,
    RevokeSessionHandler,
  ],
})
export class SessionModule {}
