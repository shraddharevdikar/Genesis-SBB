import { PromptVersion } from '../versions/prompt-version.js';
import { PromptCategory } from './prompt-category.js';
import { PromptPurpose } from './prompt-purpose.js';
import { PromptVariable } from './prompt-variable.js';
import { PromptMetadata } from '../metadata/prompt-metadata.js';

export class PromptTemplate {
  public readonly id: string;
  public readonly name: string;
  public readonly activeVersion: PromptVersion;
  public readonly versions: PromptVersion[];
  
  public readonly category?: PromptCategory;
  public readonly purpose?: PromptPurpose;
  public readonly capability?: string;
  public readonly variables?: PromptVariable[];
  public readonly metadata?: PromptMetadata;

  constructor(
    id: string,
    name: string,
    activeVersion: PromptVersion,
    versions: PromptVersion[] = [],
    category?: PromptCategory,
    purpose?: PromptPurpose,
    capability?: string,
    variables?: PromptVariable[],
    metadata?: PromptMetadata
  ) {
    this.id = id;
    this.name = name;
    this.activeVersion = activeVersion;
    this.versions = versions;
    this.category = category;
    this.purpose = purpose;
    this.capability = capability;
    this.variables = variables;
    this.metadata = metadata;
  }

  public compile(variables: Record<string, string | number | boolean>): string {
    let raw = this.activeVersion.content;
    Object.entries(variables).forEach(([key, value]) => {
      const regex = new RegExp(`\\{\\{\\s*${key}\\s*\\}\\}`, 'g');
      raw = raw.replace(regex, String(value));
    });
    return raw;
  }
}
