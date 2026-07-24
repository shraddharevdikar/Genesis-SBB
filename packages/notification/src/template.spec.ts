import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert/strict';

import { TemplateEngineService } from './templates/template-engine.service.js';
import { TemplateRendererService } from './templates/template-renderer.service.js';

describe('TemplateEngine & Renderer', () => {
  let engine: TemplateEngineService;
  let renderer: TemplateRendererService;

  beforeEach(() => {
    engine = new TemplateEngineService();
    renderer = new TemplateRendererService(engine);
  });

  it('should render standard variable interpolation and custom helpers', () => {
    const template = 'Hello {{uppercase name}}, today is {{formatDate date}}. Default value: {{default unknown "N/A"}}';
    const output = engine.render(template, {
      name: 'alice',
      date: '2026-07-24T00:00:00Z',
    });

    assert.equal(output, 'Hello ALICE, today is 2026-07-24. Default value: N/A');
  });

  it('should extract template variables', () => {
    const template = 'Hi {{user.name}}, your code is {{code}} and status is {{status}}.';
    const vars = engine.extractVariables(template);

    assert.ok(vars.includes('user.name'));
    assert.ok(vars.includes('code'));
    assert.ok(vars.includes('status'));
  });

  it('should inject tenant branding and footer in renderer', () => {
    const rendered = renderer.renderTemplate(
      { subject: 'Alert for {{tenantBranding.company}}', body: 'Main Body Text' },
      {},
      {
        id: 'ts1',
        tenantId: 'tenant-1',
        createdAt: new Date(),
        updatedAt: new Date(),
        branding: {
          logoUrl: 'https://cdn.example.com/logo.png',
          emailFooter: 'Sent by Acme Corp Security',
        },
      }
    );

    assert.ok(rendered.body.includes('Main Body Text'));
    assert.ok(rendered.body.includes('Sent by Acme Corp Security'));
  });
});
