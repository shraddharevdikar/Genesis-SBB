export interface OutputValidator {
  validateOutput(output: string): Promise<boolean>;
}

export class DefaultOutputValidator implements OutputValidator {
  public async validateOutput(output: string): Promise<boolean> {
    return output.length > 0;
  }
}
