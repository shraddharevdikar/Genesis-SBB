export interface PromptValidator {
  validatePrompt(prompt: string): Promise<boolean>;
}

export class DefaultPromptValidator implements PromptValidator {
  public async validatePrompt(prompt: string): Promise<boolean> {
    return prompt.length > 0;
  }
}
