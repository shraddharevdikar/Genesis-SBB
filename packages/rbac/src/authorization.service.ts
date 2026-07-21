import { Injectable, ForbiddenException } from '@nestjs/common';
import { RbacService } from './rbac.service.js';
import { DatabaseService } from '@sbb/database';
import { IAuthorizationContext } from './interfaces/authorization-context.interface.js';

@Injectable()
export class AuthorizationService {
  constructor(
    private readonly rbacService: RbacService,
    private readonly db: DatabaseService
  ) {}

  /**
   * Check if a user possesses a specific permission.
   */
  async hasPermission(userId: string, permission: string): Promise<boolean> {
    const userPermissions = await this.rbacService.getUserPermissions(userId);
    return userPermissions.includes(permission);
  }

  /**
   * Check if a user possesses at least one of the specified permissions.
   */
  async hasAnyPermission(userId: string, permissions: string[]): Promise<boolean> {
    const userPermissions = await this.rbacService.getUserPermissions(userId);
    return permissions.some((p) => userPermissions.includes(p));
  }

  /**
   * Check if a user possesses all of the specified permissions.
   */
  async hasAllPermissions(userId: string, permissions: string[]): Promise<boolean> {
    const userPermissions = await this.rbacService.getUserPermissions(userId);
    return permissions.every((p) => userPermissions.includes(p));
  }

  /**
   * Check if a user possesses a specific role directly.
   */
  async hasRole(userId: string, role: string): Promise<boolean> {
    return this.rbacService.userHasRole(userId, role);
  }

  /**
   * Core multi-tenant authorization evaluator. Enforces hard data-plane isolation boundaries.
   * Logs audit events on access denial.
   */
  async authorize(
    context: IAuthorizationContext,
    resourceTenantId: string,
    resourceOrgId: string,
    policyFn: () => boolean | Promise<boolean>
  ): Promise<boolean> {
    // Multi-tenant enforcement
    if (context.tenantId !== resourceTenantId || context.organizationId !== resourceOrgId) {
      await this.logAudit(
        context.userId,
        'MultiTenantBoundary',
        resourceTenantId,
        'AUTHORIZATION_DENIED',
        {
          reason: 'Cross-tenant access violation',
          actorTenantId: context.tenantId,
          actorOrgId: context.organizationId,
          resourceTenantId,
          resourceOrgId,
        }
      );
      throw new ForbiddenException('Multi-tenant boundary violation: access is strictly denied.');
    }

    const isAuthorized = await policyFn();

    if (!isAuthorized) {
      await this.logAudit(
        context.userId,
        'ResourceAccess',
        resourceOrgId,
        'AUTHORIZATION_DENIED',
        {
          reason: 'Security policy evaluation returned negative result',
          userRoles: context.roles,
        }
      );
    }

    return isAuthorized;
  }

  /**
   * Resource-Level Authorization: Can a user edit a given Project?
   */
  async canEditProject(
    context: IAuthorizationContext,
    project: { tenantId: string; organizationId: string; creatorId?: string }
  ): Promise<boolean> {
    return this.authorize(context, project.tenantId, project.organizationId, async () => {
      const hasPerm = await this.hasPermission(context.userId, 'marketing:update');
      const isOwner = project.creatorId === context.userId;
      const isAdmin =
        context.roles.includes('Platform Admin') ||
        context.roles.includes('Tenant Admin') ||
        context.roles.includes('Organization Admin');

      return hasPerm || isOwner || isAdmin;
    });
  }

  /**
   * Resource-Level Authorization: Can a user approve a given Invoice?
   */
  async canApproveInvoice(
    context: IAuthorizationContext,
    invoice: { tenantId: string; organizationId: string; amount: number }
  ): Promise<boolean> {
    return this.authorize(context, invoice.tenantId, invoice.organizationId, async () => {
      const hasApprovePerm = await this.hasPermission(context.userId, 'sales:approve');
      const isFinancier = await this.hasPermission(context.userId, 'finance:invoice:create');
      const isManager =
        context.roles.includes('Department Manager') ||
        context.roles.includes('Organization Admin') ||
        context.roles.includes('Tenant Admin');

      return hasApprovePerm || isFinancier || isManager;
    });
  }

  /**
   * Resource-Level Authorization: Can AI execute a given workflow?
   */
  async canAIExecuteWorkflow(
    context: IAuthorizationContext,
    workflow: { tenantId: string; organizationId: string }
  ): Promise<boolean> {
    return this.authorize(context, workflow.tenantId, workflow.organizationId, async () => {
      const isAIPermitted = await this.hasPermission(context.userId, 'ai:approve');
      const isWorkflowPermitted = await this.hasPermission(context.userId, 'workflow:execute');

      return isAIPermitted && isWorkflowPermitted;
    });
  }

  /**
   * Internal helper to record security/configuration audit trails.
   */
  private async logAudit(actorId: string, entity: string, entityId: string, action: string, payload: any) {
    try {
      await this.db.auditLog.create({
        data: {
          actorId,
          entity,
          entityId,
          action,
          payload: payload || {},
        },
      });
    } catch (err) {
      console.error('Audit logging failed:', err);
    }
  }
}
