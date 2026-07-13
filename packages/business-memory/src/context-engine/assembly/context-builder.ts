import { Context, ContextItem } from '../core/context.js';
import { ContextProfile } from '../core/context-profile.js';

export interface ContextBuilder {
  /**
   * Fluid or programmatic assembly of individual contextual variables and items.
   */
  initialize(tenantId: string, profile: ContextProfile): ContextBuilder;
  addItem(item: ContextItem): ContextBuilder;
  addItems(items: ContextItem[]): ContextBuilder;
  setExpiration(date: Date): ContextBuilder;
  build(): Promise<Context>;
}
