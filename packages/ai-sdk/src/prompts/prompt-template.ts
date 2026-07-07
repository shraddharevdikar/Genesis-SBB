import { PromptVersion } from './prompt-version.js';

export class PromptTemplate {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly activeVersion: PromptVersion,
    public readonly versions: PromptVersion[] = []
  ) {}

  public compile(variables: Record<string, string | number | boolean>): string {
    let raw = this.activeVersion.content;
    Object.entries(variables).forEach(([key, value]) => {
      const regex = new RegExp(`\\{\\{\\s*${key}\\s*\\}\\}`, 'g');
      raw = raw.replace(regex, String(value));
    });
    return raw;
  }
}
