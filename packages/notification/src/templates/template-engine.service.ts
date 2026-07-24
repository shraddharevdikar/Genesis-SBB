import { Injectable, Logger, BadRequestException } from '@nestjs/common';
import Handlebars from 'handlebars';

@Injectable()
export class TemplateEngineService {
  private readonly logger = new Logger(TemplateEngineService.name);
  private readonly hb: typeof Handlebars;

  constructor() {
    this.hb = Handlebars.create();
    this.registerHelpers();
  }

  private registerHelpers(): void {
    this.hb.registerHelper('uppercase', (str: string) => (str ? str.toUpperCase() : ''));
    this.hb.registerHelper('lowercase', (str: string) => (str ? str.toLowerCase() : ''));
    this.hb.registerHelper('formatDate', (dateVal: any) => {
      if (!dateVal) return '';
      const d = new Date(dateVal);
      return isNaN(d.getTime()) ? String(dateVal) : d.toISOString().split('T')[0];
    });
    this.hb.registerHelper('default', (val: any, defaultVal: any) => val ?? defaultVal);
  }

  /**
   * Renders a Handlebars template string with given context variables.
   */
  render(templateStr: string, context: Record<string, any> = {}): string {
    try {
      const compiled = this.hb.compile(templateStr);
      return compiled(context);
    } catch (error: any) {
      this.logger.error(`Template rendering failed: ${error.message}`);
      throw new BadRequestException(`Failed to render template: ${error.message}`);
    }
  }

  /**
   * Extracts variable names from a Handlebars template string (e.g. {{firstName}}).
   */
  extractVariables(templateStr: string): string[] {
    const vars = new Set<string>();
    const regex = /\{\{\s*([a-zA-Z0-9_.]+)\s*\}\}/g;
    let match: RegExpExecArray | null;
    while ((match = regex.exec(templateStr)) !== null) {
      if (match[1] && !match[1].startsWith('#') && !match[1].startsWith('/')) {
        vars.add(match[1]);
      }
    }
    return Array.from(vars);
  }
}
