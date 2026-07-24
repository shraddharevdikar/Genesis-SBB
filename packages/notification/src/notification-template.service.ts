import { Injectable, Logger, Optional, NotFoundException } from '@nestjs/common';
import { AuditService } from '@sbb/audit';
import { TemplateRepository } from './repositories/template.repository.js';
import { TemplateEngineService } from './templates/template-engine.service.js';
import { TemplateRendererService, RenderedTemplateResult } from './templates/template-renderer.service.js';
import { CreateTemplateDto, UpdateTemplateDto } from './dto/index.js';
import { INotificationTemplate, ITenantNotificationSettings } from './interfaces/notification.interface.js';

@Injectable()
export class NotificationTemplateService {
  private readonly logger = new Logger(NotificationTemplateService.name);

  constructor(
    private readonly templateRepo: TemplateRepository,
    private readonly engineService: TemplateEngineService,
    private readonly rendererService: TemplateRendererService,
    @Optional() private readonly auditService?: AuditService
  ) {}

  async createTemplate(dto: CreateTemplateDto): Promise<INotificationTemplate> {
    const extracted = this.engineService.extractVariables(dto.body);
    const combinedVars = Array.from(new Set([...(dto.variables || []), ...extracted]));

    const template = await this.templateRepo.create({
      ...dto,
      variables: combinedVars,
    });

    if (this.auditService) {
      await this.auditService.createAuditLog({
        actorId: 'system',
        entity: 'NOTIFICATION_TEMPLATE',
        entityId: template.id,
        action: 'TEMPLATE_CREATED',
        tenantId: template.tenantId || undefined,
        organizationId: template.organizationId || undefined,
        payload: { name: template.name, code: template.code, channel: template.channel },
      });
    }

    return template;
  }

  async updateTemplate(id: string, dto: UpdateTemplateDto, tenantId?: string): Promise<INotificationTemplate> {
    const existing = await this.templateRepo.findById(id, tenantId);
    if (!existing) {
      throw new NotFoundException(`Template with ID ${id} not found`);
    }

    let variables = existing.variables || [];
    if (dto.body) {
      const extracted = this.engineService.extractVariables(dto.body);
      variables = Array.from(new Set([...(dto.variables || existing.variables || []), ...extracted]));
    } else if (dto.variables) {
      variables = dto.variables;
    }

    const updated = await this.templateRepo.update(id, {
      ...dto,
      variables,
    });

    if (this.auditService) {
      await this.auditService.createAuditLog({
        actorId: 'system',
        entity: 'NOTIFICATION_TEMPLATE',
        entityId: updated.id,
        action: 'TEMPLATE_UPDATED',
        tenantId: updated.tenantId || undefined,
        organizationId: updated.organizationId || undefined,
        payload: { code: updated.code, name: updated.name },
      });
    }

    return updated;
  }

  async getTemplateById(id: string, tenantId?: string): Promise<INotificationTemplate> {
    const tmpl = await this.templateRepo.findById(id, tenantId);
    if (!tmpl) {
      throw new NotFoundException(`Template with ID ${id} not found`);
    }
    return tmpl;
  }

  async getTemplateByCode(code: string, tenantId?: string | null): Promise<INotificationTemplate | null> {
    return this.templateRepo.findByCode(code, tenantId);
  }

  async listTemplates(tenantId?: string): Promise<INotificationTemplate[]> {
    return this.templateRepo.findAll(tenantId);
  }

  renderTemplate(
    template: { subject?: string | null; body: string },
    variables: Record<string, any> = {},
    tenantSettings?: ITenantNotificationSettings | null
  ): RenderedTemplateResult {
    return this.rendererService.renderTemplate(template, variables, tenantSettings);
  }
}
