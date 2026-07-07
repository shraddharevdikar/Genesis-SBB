import { Injectable } from '@nestjs/common';

@Injectable()
export class StorageHealthIndicator {
  public async isHealthy(): Promise<{ status: 'UP' | 'DOWN'; details?: Record<string, any> }> {
    return {
      status: 'UP',
      details: {
        storage: 'writeable',
        provider: 'Cloud Storage',
      },
    };
  }
}
