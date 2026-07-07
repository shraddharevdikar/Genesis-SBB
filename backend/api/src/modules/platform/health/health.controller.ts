import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get()
  public getHealth(): Record<string, any> {
    return {
      status: 'UP',
      timestamp: new Date().toISOString(),
      services: {
        database: 'OK',
        identity: 'OK',
      },
    };
  }

  @Get('ready')
  public getReady(): Record<string, any> {
    return {
      status: 'READY',
      timestamp: new Date().toISOString(),
    };
  }

  @Get('live')
  public getLive(): Record<string, any> {
    return {
      status: 'LIVE',
      timestamp: new Date().toISOString(),
    };
  }
}
