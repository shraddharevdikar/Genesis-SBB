import { EventInstanceId } from '../identity/event-instance-id.js';

export interface EventSecurity {
  /**
   * Asserts if publisher has clearance matching the classification of the event.
   */
  assertPublishClearance(
    tenantId: string,
    publisherRoleId: string,
    classification: 'PUBLIC' | 'RESTRICTED' | 'CONFIDENTIAL' | 'SECRET'
  ): Promise<boolean>;

  /**
   * Validates if active subscriber envelope matches tenant sandbox boundaries.
   */
  validateSubscriberAccess(
    tenantId: string,
    subscriberId: string,
    instanceId: EventInstanceId
  ): Promise<boolean>;
}
