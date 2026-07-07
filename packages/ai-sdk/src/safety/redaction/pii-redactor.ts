export interface PIIRedactor {
  redactPII(text: string): Promise<string>;
}

export class DefaultPIIRedactor implements PIIRedactor {
  public async redactPII(text: string): Promise<string> {
    return text;
  }
}
