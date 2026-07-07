import { RequestContextType } from '@sbb/shared';

export class RequestContext implements RequestContextType {
  public readonly correlationId: string;
  public readonly requestId: string;
  public readonly timestamp: string;
  public readonly clientIp?: string;
  public readonly userAgent?: string;
  public readonly locale?: string;
  public readonly timezone?: string;

  constructor(options: RequestContextType) {
    this.correlationId = options.correlationId;
    this.requestId = options.requestId;
    this.timestamp = options.timestamp;
    this.clientIp = options.clientIp;
    this.userAgent = options.userAgent;
    this.locale = options.locale;
    this.timezone = options.timezone;
    Object.freeze(this);
  }
}
