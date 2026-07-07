export interface InputValidator {
  validateInput(input: string): Promise<boolean>;
}

export class DefaultInputValidator implements InputValidator {
  public async validateInput(input: string): Promise<boolean> {
    return input.length > 0;
  }
}
