import { ClientContextType } from '@sbb/shared';

export class ClientContext implements ClientContextType {
  public readonly deviceType?: string;
  public readonly platform?: string;
  public readonly browser?: string;
  public readonly appVersion?: string;

  constructor(options?: ClientContextType) {
    this.deviceType = options?.deviceType;
    this.platform = options?.platform;
    this.browser = options?.browser;
    this.appVersion = options?.appVersion;
    Object.freeze(this);
  }
}
