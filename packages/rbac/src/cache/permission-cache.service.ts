import { Injectable } from '@nestjs/common';

@Injectable()
export class PermissionCacheService {
  private cache = new Map<string, string[]>();

  // Tracks which users are assigned to which roles for selective invalidation
  private roleUsers = new Map<string, Set<string>>();

  /**
   * Retrieves cached permissions for a specific user.
   */
  get(userId: string): string[] | null {
    return this.cache.get(userId) || null;
  }

  /**
   * Caches resolved permissions for a user and registers associated role IDs.
   */
  set(userId: string, permissions: string[], roleIds: string[]): void {
    this.cache.set(userId, permissions);
    for (const roleId of roleIds) {
      if (!this.roleUsers.has(roleId)) {
        this.roleUsers.set(roleId, new Set());
      }
      this.roleUsers.get(roleId)!.add(userId);
    }
  }

  /**
   * Invalidates cached permissions for a specific user.
   */
  invalidateUser(userId: string): void {
    this.cache.delete(userId);
    for (const [, users] of this.roleUsers.entries()) {
      if (users.has(userId)) {
        users.delete(userId);
      }
    }
  }

  /**
   * Invalidates cached permissions for all users assigned to a specific role.
   */
  invalidateRole(roleId: string): void {
    const users = this.roleUsers.get(roleId);
    if (users) {
      for (const userId of users) {
        this.cache.delete(userId);
      }
      this.roleUsers.delete(roleId);
    }
  }

  /**
   * Invalidates the entire permission cache.
   */
  invalidateAll(): void {
    this.cache.clear();
    this.roleUsers.clear();
  }
}
