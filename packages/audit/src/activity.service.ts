import { Injectable } from '@nestjs/common';
import { DatabaseService } from '@sbb/database';
import { IActivityEntry } from './interfaces/index.js';
import { ActivityFilterDto } from './dto/index.js';
import { AuditEventEmitter } from './events/audit.events.js';

@Injectable()
export class ActivityService {
  constructor(
    private readonly db: DatabaseService,
    private readonly emitter: AuditEventEmitter
  ) {}

  /**
   * Helper to map a raw AuditLog into a clean, human-readable Activity Timeline entry.
   */
  private mapToActivity(log: any): IActivityEntry {
    const actorName = log.userId ? `User (${log.userId})` : `Actor (${log.actorId})`;
    let description = `${actorName} performed ${log.action} on ${log.entity} (${log.entityId})`;

    // Generate nice custom description templates based on actions
    if (log.action === 'CREATE') {
      description = `${actorName} created new ${log.entity} (ID: ${log.entityId})`;
    } else if (log.action === 'UPDATE') {
      description = `${actorName} updated ${log.entity} (ID: ${log.entityId})`;
    } else if (log.action === 'DELETE') {
      description = `${actorName} deleted ${log.entity} (ID: ${log.entityId})`;
    } else if (log.action === 'LOGIN') {
      description = `${actorName} successfully logged in`;
    } else if (log.action === 'APPROVE') {
      description = `${actorName} approved ${log.entity} (ID: ${log.entityId})`;
    } else if (log.action === 'REJECT') {
      description = `${actorName} rejected ${log.entity} (ID: ${log.entityId})`;
    } else if (log.action === 'AI_ACTION') {
      description = `AI Engine completed ${log.entity} action (ID: ${log.entityId})`;
    } else if (log.action === 'WORKFLOW') {
      description = `Workflow Engine executed transition for ${log.entity} (ID: ${log.entityId})`;
    }

    return {
      id: log.id,
      timestamp: log.timestamp,
      userId: log.userId,
      action: log.action,
      resourceType: log.resourceType || log.entity,
      resourceId: log.resourceId || log.entityId,
      description,
      severity: log.severity || 'INFO',
    };
  }

  /**
   * Retrieves a list of generic recent activities, constrained to the authenticated tenant.
   */
  async getRecentActivities(filter: ActivityFilterDto, activeTenantId?: string): Promise<IActivityEntry[]> {
    const where: any = {};

    if (activeTenantId) {
      where.tenantId = activeTenantId;
    } else if (filter.tenantId) {
      where.tenantId = filter.tenantId;
    }

    if (filter.organizationId) {
      where.organizationId = filter.organizationId;
    }
    if (filter.userId) {
      where.userId = filter.userId;
    }
    if (filter.resourceType) {
      where.resourceType = filter.resourceType;
    }
    if (filter.action) {
      where.action = filter.action;
    }

    const logs = await this.db.auditLog.findMany({
      where,
      take: filter.limit || 20,
      orderBy: { timestamp: 'desc' },
    });

    const activities = logs.map((log) => this.mapToActivity(log));

    // Emit event for activity timeline views
    for (const act of activities) {
      this.emitter.emitActivityRecorded(act);
    }

    return activities;
  }

  /**
   * Activity timeline filtered specifically by User.
   */
  async getUserActivities(userId: string, limit: number = 20, activeTenantId?: string): Promise<IActivityEntry[]> {
    return this.getRecentActivities({ userId, limit }, activeTenantId);
  }

  /**
   * Activity timeline filtered specifically by Organization.
   */
  async getOrganizationActivities(orgId: string, limit: number = 20, activeTenantId?: string): Promise<IActivityEntry[]> {
    return this.getRecentActivities({ organizationId: orgId, limit }, activeTenantId);
  }

  /**
   * Activity timeline filtered specifically by Tenant.
   */
  async getTenantActivities(tenantId: string, limit: number = 20): Promise<IActivityEntry[]> {
    return this.getRecentActivities({ tenantId, limit }, tenantId);
  }

  /**
   * Activity timeline for AI actions (action = AI_ACTION).
   */
  async getAIActivities(limit: number = 20, activeTenantId?: string): Promise<IActivityEntry[]> {
    return this.getRecentActivities({ action: 'AI_ACTION', limit }, activeTenantId);
  }

  /**
   * Activity timeline for Workflow processes (action = WORKFLOW).
   */
  async getWorkflowActivities(limit: number = 20, activeTenantId?: string): Promise<IActivityEntry[]> {
    return this.getRecentActivities({ action: 'WORKFLOW', limit }, activeTenantId);
  }
}
