import { Module, Global } from '@nestjs/common';
import { DatabaseModule } from '@sbb/database';
import { AuditService } from './audit.service.js';
import { ActivityService } from './activity.service.js';
import { AuditRepository } from './repositories/audit.repository.js';
import { AuditEventEmitter } from './events/audit.events.js';
import { AuditInterceptor } from './interceptors/audit.interceptor.js';
import { AuditController } from './audit.controller.js';

@Global()
@Module({
  imports: [DatabaseModule],
  controllers: [AuditController],
  providers: [
    AuditService,
    ActivityService,
    AuditRepository,
    AuditEventEmitter,
    AuditInterceptor,
  ],
  exports: [
    AuditService,
    ActivityService,
    AuditRepository,
    AuditEventEmitter,
    AuditInterceptor,
  ],
})
export class AuditModule {}
