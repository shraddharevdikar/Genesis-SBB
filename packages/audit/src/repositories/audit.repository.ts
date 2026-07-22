import { Injectable, BadRequestException } from '@nestjs/common';
import { DatabaseService } from '@sbb/database';
import { CreateAuditLogDto, AuditSearchDto } from '../dto/index.js';

@Injectable()
export class AuditRepository {
  constructor(private readonly db: DatabaseService) {}

  /**
   * Appends an immutable audit log entry.
   */
  async create(dto: CreateAuditLogDto) {
    return this.db.auditLog.create({
      data: {
        actorId: dto.actorId,
        entity: dto.entity,
        entityId: dto.entityId,
        action: dto.action,
        payload: dto.payload || {},
        tenantId: dto.tenantId || null,
        organizationId: dto.organizationId || null,
        userId: dto.userId || null,
        sessionId: dto.sessionId || null,
        ipAddress: dto.ipAddress || null,
        userAgent: dto.userAgent || null,
        resourceType: dto.resourceType || null,
        resourceId: dto.resourceId || null,
        status: dto.status || 'SUCCESS',
        severity: dto.severity || 'INFO',
        beforeState: dto.beforeState || null,
        afterState: dto.afterState || null,
        metadata: dto.metadata || null,
        correlationId: dto.correlationId || null,
      },
    });
  }

  /**
   * Retrieves an audit log entry by ID.
   */
  async findById(id: string) {
    return this.db.auditLog.findUnique({
      where: { id },
    });
  }

  /**
   * Queries and searches audit logs based on search criteria.
   * Restricts search within tenant bounds for security.
   */
  async search(dto: AuditSearchDto, activeTenantId?: string) {
    const where: any = {};

    // Hard tenant filter
    if (activeTenantId) {
      where.tenantId = activeTenantId;
    } else if (dto.tenantId) {
      where.tenantId = dto.tenantId;
    }

    if (dto.organizationId) {
      where.organizationId = dto.organizationId;
    }
    if (dto.userId) {
      where.userId = dto.userId;
    }
    if (dto.resourceId) {
      where.resourceId = dto.resourceId;
    }
    if (dto.resourceType) {
      where.resourceType = dto.resourceType;
    }
    if (dto.action) {
      where.action = dto.action;
    }
    if (dto.severity) {
      where.severity = dto.severity;
    }
    if (dto.status) {
      where.status = dto.status;
    }

    // Date Range Support
    if (dto.startDate || dto.endDate) {
      where.timestamp = {};
      if (dto.startDate) {
        where.timestamp.gte = new Date(dto.startDate);
      }
      if (dto.endDate) {
        where.timestamp.lte = new Date(dto.endDate);
      }
    }

    // Keyword Search
    if (dto.keyword) {
      const keyword = dto.keyword;
      where.OR = [
        { action: { contains: keyword, mode: 'insensitive' } },
        { entity: { contains: keyword, mode: 'insensitive' } },
        { resourceType: { contains: keyword, mode: 'insensitive' } },
        { status: { contains: keyword, mode: 'insensitive' } },
      ];
    }

    const page = dto.page || 1;
    const limit = dto.limit || 20;
    const skip = (page - 1) * limit;

    const sortBy = dto.sortBy || 'timestamp';
    const sortOrder = dto.sortOrder || 'desc';

    const [items, total] = await Promise.all([
      this.db.auditLog.findMany({
        where,
        skip,
        take: limit,
        orderBy: {
          [sortBy]: sortOrder,
        },
      }),
      this.db.auditLog.count({ where }),
    ]);

    return {
      items,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  /**
   * Strictly forbid update operations to preserve immutability.
   */
  async update(): Promise<never> {
    throw new BadRequestException('Immutability Constraint: Audit logs cannot be modified.');
  }

  /**
   * Strictly forbid delete operations to preserve immutability.
   */
  async delete(): Promise<never> {
    throw new BadRequestException('Immutability Constraint: Audit logs cannot be deleted.');
  }
}
