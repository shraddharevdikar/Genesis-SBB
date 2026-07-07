import { PromptTemplate } from '../templates/prompt-template.js';
import { PromptVersion } from '../versions/prompt-version.js';

export class PromptRegistry {
  private readonly templates = new Map<string, PromptTemplate>();

  public register(template: PromptTemplate): void {
    if (this.templates.has(template.id)) {
      throw new Error(`Prompt template with id ${template.id} is already registered.`);
    }
    this.templates.set(template.id, template);
  }

  public get(id: string): PromptTemplate | undefined {
    return this.templates.get(id);
  }

  public getRequired(id: string): PromptTemplate {
    const template = this.get(id);
    if (!template) {
      throw new Error(`Prompt template with id ${id} is not registered.`);
    }
    return template;
  }

  public resolveActiveVersion(promptId: string): PromptVersion {
    const template = this.getRequired(promptId);
    return template.activeVersion;
  }

  public list(): PromptTemplate[] {
    return Array.from(this.templates.values());
  }

  public clear(): void {
    this.templates.clear();
  }
}
