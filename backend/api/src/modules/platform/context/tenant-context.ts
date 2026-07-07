import { TenantContextType } from '@sbb/shared';

export class TenantContext implements TenantContextType {
  public readonly tenantId?: string;
  public readonly tenantName?: string;
  public readonly tier?: string;
  public readonly status?: string;

  constructor(options?: TenantContextType) {
    this.tenantId = options?.tenantId;
    this.tenantName = options?.tenantName;
    this.tier = options?.tier;
    this.status = options?.status;
    Object.freeze(this);
  }
}
