import { AsyncLocalStorage } from 'async_hooks';

export interface TenantContextPayload {
  tenantId: string;
  userId?: string;
}

/**
 * Enterprise Multi-Tenant Storage Context helper.
 * Uses Node's AsyncLocalStorage to propagate tenant identity through transactional scopes
 * without manual argument passing.
 */
export class TenantContext {
  private static readonly storage = new AsyncLocalStorage<TenantContextPayload>();

  /**
   * Binds the given tenant payload to the active asynchronous thread execution context.
   */
  public static run<T>(context: TenantContextPayload, callback: () => T): T {
    return this.storage.run(context, callback);
  }

  /**
   * Retrieves the current active tenant context.
   */
  public static get(): TenantContextPayload | undefined {
    return this.storage.getStore();
  }

  /**
   * Quick utility to extract the tenant ID from the active context.
   */
  public static getTenantId(): string | undefined {
    return this.get()?.tenantId;
  }

  /**
   * Quick utility to extract the active User ID from the active context.
   */
  public static getUserId(): string | undefined {
    return this.get()?.userId;
  }
}
export type TenantResolver = () => Promise<string | null>;
export interface TenantExtensionOptions {
  resolver: TenantResolver;
  enabled: boolean;
}
