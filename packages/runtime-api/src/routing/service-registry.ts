export interface ServiceRegistry {
  /**
   * Binds an implementation or interface endpoint to a unique service identifier.
   */
  registerService<T>(serviceIdentifier: string, implementation: T): void;

  /**
   * Locates and retrieves the registered implementation for a specific SBB service.
   */
  getService<T>(serviceIdentifier: string): T;

  /**
   * Clears a registration or updates an implementation binding.
   */
  deregisterService(serviceIdentifier: string): void;
}
