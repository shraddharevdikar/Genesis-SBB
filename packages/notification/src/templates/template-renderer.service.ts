import { Injectable, Logger } from '@nestjs/common';
import { TemplateEngineService } from './template-engine.service.js';
import { ITenantNotificationSettings } from '../interfaces/notification.interface.js';

export interface RenderedTemplateResult {
  subject?: string;
  body: string;
}

@Injectable()
export class TemplateRendererService {
  private readonly logger = new Logger(TemplateRendererService.name);

  constructor(private readonly engine: TemplateEngineService) {}

  /**
   * Renders both template subject and body, injecting tenant branding / email footer if applicable.
   */
  renderTemplate(
    template: { subject?: string | null; body: string },
    variables: Record<string, any> = {},
    tenantSettings?: ITenantNotificationSettings | null
  ): RenderedTemplateResult {
    const context = { ...variables };

    // Inject tenant branding helpers if provided
    if (tenantSettings?.branding) {
      context.tenantBranding = tenantSettings.branding;
    }
    if (tenantSettings?.defaultSender) {
      context.defaultSender = tenantSettings.defaultSender;
    }

    const renderedSubject = template.subject ? this.engine.render(template.subject, context) : undefined;
    let renderedBody = this.engine.render(template.body, context);

    // Append tenant email footer if present and not already contained
    if (tenantSettings?.branding?.emailFooter && !renderedBody.includes(tenantSettings.branding.emailFooter)) {
      renderedBody += `\n\n---\n${tenantSettings.branding.emailFooter}`;
    }

    return {
      subject: renderedSubject,
      body: renderedBody,
    };
  }
}
