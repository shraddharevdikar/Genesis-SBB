import { Injectable, Scope } from '@nestjs/common';
import { AsyncLocalStorage } from 'async_hooks';
import { PlatformContext } from './platform-context.js';

@Injectable({ scope: Scope.DEFAULT })
export class PlatformContextProvider {
  private static readonly storage = new AsyncLocalStorage<PlatformContext>();

  /**
   * Executes a callback within the context of the given PlatformContext.
   */
  public runWithContext<T>(context: PlatformContext, callback: () => T): T {
    return PlatformContextProvider.storage.run(context, callback);
  }

  /**
   * Retrieves the current active PlatformContext, or undefined if not in a request execution chain.
   */
  public getContext(): PlatformContext | undefined {
    return PlatformContextProvider.storage.getStore();
  }

  /**
   * Retrieves the current active PlatformContext, throwing if not currently initialized.
   */
  public getRequiredContext(): PlatformContext {
    const context = this.getContext();
    if (!context) {
      throw new Error('Platform context is not initialized for the current asynchronous execution chain.');
    }
    return context;
  }
}
