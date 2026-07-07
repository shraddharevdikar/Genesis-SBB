import { IdentityContext } from '../types/identity-context.types.js';

export interface IdentityContextProvider {
  getContext(): Promise<IdentityContext>;
}
