export interface SecretRedactor {
  redactSecrets(text: string): Promise<string>;
  maskSensitiveBusinessData(text: string): Promise<string>;
}

export class DefaultSecretRedactor implements SecretRedactor {
  public async redactSecrets(text: string): Promise<string> {
    return text;
  }

  public async maskSensitiveBusinessData(text: string): Promise<string> {
    return text;
  }
}
