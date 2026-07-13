import { NotificationInstanceId } from '../identity/notification-instance-id.js';

export interface NotificationSecurity {
  /**
   * Asserts if a client or system actor role has permission to trigger/queue notifications.
   */
  assertTriggerClearance(
    tenantId: string,
    roleId: string,
    securityClassification: 'PUBLIC' | 'RESTRICTED' | 'CONFIDENTIAL' | 'SECRET'
  ): Promise<boolean>;

  /**
   * Asserts if tenant isolation parameters match structural message envelope attributes.
   */
  validateTenantEnvelopes(
    tenantId: string,
    instanceId: NotificationInstanceId
  ): Promise<boolean>;
}
