import { Injectable, ForbiddenException, BadRequestException, NotFoundException } from '@nestjs/common';
import { AuditRepository } from './repositories/audit.repository.js';
import { CreateAuditLogDto, AuditSearchDto } from './dto/index.js';
import { AuditEventEmitter } from './events/audit.events.js';
import { DatabaseService } from '@sbb/database';

@Injectable()
export class AuditService {
  constructor(
    private readonly repo: AuditRepository,
    private readonly emitter: AuditEventEmitter,
    private readonly db: DatabaseService
  ) {}

  /**
   * Registers a new audit log. Immutably recorded.
   */
  async createAuditLog(dto: CreateAuditLogDto) {
    const log = await this.repo.create(dto);

    // Emit event
    this.emitter.emitAuditCreated(log);

    // Detect Security / Auth Denied events to emit alerts
    if (dto.status === 'DENIED' || dto.action === 'AUTHORIZATION_DENIED') {
      this.emitter.emitAuthorizationDenied({
        userId: dto.userId,
        actorId: dto.actorId,
        action: dto.action,
        entity: dto.entity,
        entityId: dto.entityId,
        tenantId: dto.tenantId,
        organizationId: dto.organizationId,
      });
    }

    if (dto.severity === 'CRITICAL') {
      this.emitter.emitSecurityAlert('CRITICAL_AUDIT_LOGGED', {
        id: log.id,
        action: log.action,
        entity: log.entity,
        userId: log.userId,
        tenantId: log.tenantId,
      });
    }

    return log;
  }

  /**
   * Retrieves a single log entry. Assures tenant isolation.
   */
  async getAuditLogById(id: string, activeTenantId?: string) {
    const log = await this.repo.findById(id);
    if (!log) {
      throw new NotFoundException(`Audit log with ID "${id}" not found`);
    }

    // Tenant Isolation Guard
    if (activeTenantId && log.tenantId && log.tenantId !== activeTenantId) {
      this.emitter.emitSecurityAlert('CROSS_TENANT_ACCESS_VIOLATION', {
        requestedId: id,
        activeTenantId,
        actualTenantId: log.tenantId,
      });
      throw new ForbiddenException('Multi-tenant boundary violation: access to this log is strictly denied.');
    }

    return log;
  }

  /**
   * Searches audit logs. Enforces tenant boundaries.
   */
  async searchAuditLogs(dto: AuditSearchDto, activeTenantId?: string) {
    return this.repo.search(dto, activeTenantId);
  }

  /**
   * Implements Retention policy support. Allows compliance pruning of records older than standard durations.
   * Logs a System audit event prior to execution.
   */
  async purgeOldLogs(retentionDays: number, actorId: string = 'SYSTEM') {
    if (retentionDays <= 0) {
      throw new BadRequestException('Retention days must be a positive number');
    }

    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - retentionDays);

    // Fetch details of logs to be pruned for count logging
    const pruneCount = await this.db.auditLog.count({
      where: {
        timestamp: {
          lt: cutoffDate,
        },
      },
    });

    if (pruneCount > 0) {
      // Execute transaction to delete logs older than cutoffDate
      await this.db.auditLog.deleteMany({
        where: {
          timestamp: {
            lt: cutoffDate,
          },
        },
      });

      // Insert system record of this prune operation
      await this.repo.create({
        actorId,
        entity: 'SystemRetention',
        entityId: 'RetentionPolicy',
        action: 'SYSTEM_PURGE',
        payload: {
          prunedCount: pruneCount,
          cutoffDate,
          retentionDays,
        },
        severity: 'WARNING',
        status: 'SUCCESS',
      });
    }

    return { prunedCount: pruneCount, cutoffDate };
  }

  /**
   * Block updates to preserve immutability.
   */
  async updateAuditLog(): Promise<never> {
    throw new BadRequestException('Immutability Constraint: Audit records cannot be modified.');
  }

  /**
   * Block deletions directly on service.
   */
  async deleteAuditLog(): Promise<never> {
    throw new BadRequestException('Immutability Constraint: Audit records cannot be deleted.');
  }
}
