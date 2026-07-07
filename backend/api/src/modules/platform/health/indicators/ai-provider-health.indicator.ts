import { Injectable } from '@nestjs/common';

@Injectable()
export class AIProviderHealthIndicator {
  public async isHealthy(): Promise<{ status: 'UP' | 'DOWN'; details?: Record<string, any> }> {
    return {
      status: 'UP',
      details: {
        aiProvider: 'ready',
        providerName: 'Google Gemini',
      },
    };
  }
}
