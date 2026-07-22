import { Controller, Get, Post, Body, Param, Query, UseGuards, UseInterceptors } from '@nestjs/common';
import { JwtAuthGuard, CurrentUser } from '@sbb/auth';
import { AuditService } from './audit.service.js';
import { ActivityService } from './activity.service.js';
import { AuditSearchDto, ActivityFilterDto } from './dto/index.js';
import { RolesGuard, PermissionsGuard } from '@sbb/rbac';
import { AuditInterceptor } from './interceptors/audit.interceptor.js';

@Controller('audit')
@UseGuards(JwtAuthGuard, RolesGuard, PermissionsGuard)
@UseInterceptors(AuditInterceptor)
export class AuditController {
  constructor(
    private readonly auditService: AuditService,
    private readonly activityService: ActivityService
  ) {}

  /**
   * GET /audit
   * Performs high-fidelity search on audit logs using Query parameters.
   * Locked strictly down to the authenticated tenant.
   */
  @Get()
  async getAuditLogs(
    @Query() query: AuditSearchDto,
    @CurrentUser() user: any
  ) {
    return this.auditService.searchAuditLogs(query, user?.tenantId);
  }

  /**
   * GET /audit/activity
   * Fetches the activity timeline, locked strictly to the authenticated tenant.
   */
  @Get('activity')
  async getActivityTimeline(
    @Query() filter: ActivityFilterDto,
    @CurrentUser() user: any
  ) {
    return this.activityService.getRecentActivities(filter, user?.tenantId);
  }

  /**
   * GET /audit/:id
   * Fetches a specific audit log by its unique ID.
   * Strictly verifies tenant boundaries to avoid cross-tenant leaks.
   */
  @Get(':id')
  async getAuditLogById(
    @Param('id') id: string,
    @CurrentUser() user: any
  ) {
    return this.auditService.getAuditLogById(id, user?.tenantId);
  }

  /**
   * POST /audit/search
   * Performs advanced search/filter using request body.
   * Locked strictly down to the authenticated tenant.
   */
  @Post('search')
  async searchAuditLogs(
    @Body() body: AuditSearchDto,
    @CurrentUser() user: any
  ) {
    return this.auditService.searchAuditLogs(body, user?.tenantId);
  }
}
