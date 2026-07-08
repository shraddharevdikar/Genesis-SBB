export class ProviderCredentials {
  public static getApiKey(providerId: string): string | undefined {
    if (providerId === 'google-gemini') {
      return process.env.GEMINI_API_KEY;
    }
    if (providerId === 'openai') {
      return process.env.OPENAI_API_KEY;
    }
    return undefined;
  }

  public static getEndpoint(providerId: string): string | undefined {
    if (providerId === 'google-gemini') {
      return process.env.GEMINI_API_ENDPOINT;
    }
    if (providerId === 'openai') {
      return process.env.OPENAI_API_ENDPOINT;
    }
    return undefined;
  }

  public static getRegion(providerId: string): string | undefined {
    if (providerId === 'google-gemini') {
      return process.env.GEMINI_REGION || 'us-central1';
    }
    return undefined;
  }

  public static getTimeout(providerId: string): number {
    const customTimeout = process.env.AI_PROVIDER_TIMEOUT;
    if (customTimeout) {
      const parsed = parseInt(customTimeout, 10);
      if (!isNaN(parsed)) return parsed;
    }
    return 30000; // 30s default
  }
}
