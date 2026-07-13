import { EventId } from '../identity/event-id.js';
import { EventInstanceId } from '../identity/event-instance-id.js';
import { EventDefinition } from './event-definition.js';
import { EventInstance } from './event-instance.js';
import { EventContext } from './event-context.js';
import { EventRoute } from '../routing/event-route.js';
import { EventLineage } from '../tracking/event-lineage.js';

export interface RuntimeEvents {
  /**
   * Publishes a business or domain event instance onto SBB runtime fabric.
   */
  publishEvent(
    tenantId: string,
    eventId: EventId,
    payload: Record<string, any>,
    context: Omit<EventContext, 'instanceId' | 'initializedAt'>
  ): Promise<EventInstance>;

  /**
   * Registers a new custom schema or definition in the enterprise event catalog.
   */
  registerEvent(
    tenantId: string,
    definition: Omit<EventDefinition, 'createdAt'>,
    createdByRoleId: string
  ): Promise<EventDefinition>;

  /**
   * Validates if the given payload matches registered event contracts and constraints.
   */
  validateEvent(
    tenantId: string,
    eventId: EventId,
    payload: Record<string, any>
  ): Promise<{ isValid: boolean; issues: string[] }>;

  /**
   * Resolves appropriate matching routes and subscribers for the published event instance.
   */
  routeEvent(
    tenantId: string,
    instanceId: EventInstanceId
  ): Promise<EventRoute[]>;

  /**
   * Links child/sibling events under a common core correlation thread tracing back to the root trigger.
   */
  correlateEvent(
    tenantId: string,
    instanceId: EventInstanceId,
    rootCorrelationId: string
  ): Promise<EventContext>;

  /**
   * Traverses backward and forward history, tracing causal and generational event relationships.
   */
  trackLineage(
    tenantId: string,
    instanceId: EventInstanceId
  ): Promise<EventLineage>;
}
