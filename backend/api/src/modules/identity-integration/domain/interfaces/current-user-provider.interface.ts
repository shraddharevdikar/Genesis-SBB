import { CurrentUser } from '../types/identity-context.types.js';

export interface CurrentUserProvider {
  getCurrentUser(): Promise<CurrentUser | null>;
}
