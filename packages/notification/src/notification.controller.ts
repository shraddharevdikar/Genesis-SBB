import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  Query,
  Req,
  HttpCode,
  HttpStatus,
  Headers,
} from '@nestjs/common';
import { NotificationService } from './notification.service.js';
import { NotificationTemplateService } from './notification-template.service.js';
import { NotificationPreferenceService } from './notification-preference.service.js';
import {
  SendNotificationDto,
  ScheduleNotificationDto,
  CreateTemplateDto,
  UpdateTemplateDto,
  UpdatePreferenceDto,
} from './dto/index.js';

@Controller('notifications')
export class NotificationController {
  constructor(
    private readonly notificationService: NotificationService,
    private readonly templateService: NotificationTemplateService,
    private readonly preferenceService: NotificationPreferenceService
  ) {}

  @Post('send')
  @HttpCode(HttpStatus.OK)
  async sendNotification(
    @Body() dto: SendNotificationDto,
    @Headers('x-tenant-id') tenantHeader?: string,
    @Req() req?: any
  ) {
    const activeTenantId = tenantHeader || req?.user?.tenantId;
    return this.notificationService.send(dto, activeTenantId);
  }

  @Post('schedule')
  @HttpCode(HttpStatus.OK)
  async scheduleNotification(
    @Body() dto: ScheduleNotificationDto,
    @Headers('x-tenant-id') tenantHeader?: string,
    @Req() req?: any
  ) {
    const activeTenantId = tenantHeader || req?.user?.tenantId;
    return this.notificationService.schedule(dto, activeTenantId);
  }

  @Get()
  async listNotifications(
    @Query('status') status?: string,
    @Query('channel') channel?: string,
    @Query('recipient') recipient?: string,
    @Query('userId') userId?: string,
    @Query('limit') limit?: string,
    @Query('offset') offset?: string,
    @Headers('x-tenant-id') tenantHeader?: string,
    @Req() req?: any
  ) {
    const activeTenantId = tenantHeader || req?.user?.tenantId;
    return this.notificationService.getHistory(
      {
        status,
        channel,
        recipient,
        userId,
        limit: limit ? parseInt(limit, 10) : 50,
        offset: offset ? parseInt(offset, 10) : 0,
      },
      activeTenantId
    );
  }

  @Get('history')
  async getHistory(
    @Query('status') status?: string,
    @Query('channel') channel?: string,
    @Query('recipient') recipient?: string,
    @Query('userId') userId?: string,
    @Query('limit') limit?: string,
    @Query('offset') offset?: string,
    @Headers('x-tenant-id') tenantHeader?: string,
    @Req() req?: any
  ) {
    return this.listNotifications(status, channel, recipient, userId, limit, offset, tenantHeader, req);
  }

  @Get('metrics')
  async getMetrics() {
    return this.notificationService.getMetrics();
  }

  @Get(':id')
  async getNotificationById(
    @Param('id') id: string,
    @Headers('x-tenant-id') tenantHeader?: string,
    @Req() req?: any
  ) {
    const activeTenantId = tenantHeader || req?.user?.tenantId;
    return this.notificationService.getById(id, activeTenantId);
  }

  // --- Templates ---

  @Post('templates')
  async createTemplate(@Body() dto: CreateTemplateDto) {
    return this.templateService.createTemplate(dto);
  }

  @Put('templates/:id')
  async updateTemplate(
    @Param('id') id: string,
    @Body() dto: UpdateTemplateDto,
    @Headers('x-tenant-id') tenantHeader?: string,
    @Req() req?: any
  ) {
    const activeTenantId = tenantHeader || req?.user?.tenantId;
    return this.templateService.updateTemplate(id, dto, activeTenantId);
  }

  @Get('templates')
  async listTemplates(
    @Headers('x-tenant-id') tenantHeader?: string,
    @Req() req?: any
  ) {
    const activeTenantId = tenantHeader || req?.user?.tenantId;
    return this.templateService.listTemplates(activeTenantId);
  }

  // --- Preferences ---

  @Post('preferences')
  async createPreference(@Body() dto: UpdatePreferenceDto) {
    return this.preferenceService.updatePreference(dto);
  }

  @Put('preferences')
  async updatePreference(@Body() dto: UpdatePreferenceDto) {
    return this.preferenceService.updatePreference(dto);
  }

  @Get('preferences')
  async getPreference(
    @Query('userId') queryUserId?: string,
    @Req() req?: any
  ) {
    const userId = queryUserId || req?.user?.id || 'default-user';
    return this.preferenceService.getUserPreference(userId);
  }
}
