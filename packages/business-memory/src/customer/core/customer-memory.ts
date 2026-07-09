import { CustomerContext } from './customer-context.js';
import { CustomerMemoryRecord } from './customer-memory-record.js';
import { CustomerProfile } from '../identity/customer-profile.js';
import { BusinessGoal } from '../business/business-goal.js';
import { Stakeholder } from '../stakeholders/stakeholder.js';
import { CustomerHealth } from '../health/customer-health.js';
import { CustomerInsight } from '../insights/customer-insight.js';
import { ExecutiveRelationship } from '../relationships/executive-relationship.js';

export interface CustomerMemory {
  /**
   * Initializes or registers a new persistent Customer Memory Record aggregate.
   */
  createCustomerMemory(
    context: CustomerContext,
    record: Partial<CustomerMemoryRecord>
  ): Promise<CustomerMemoryRecord>;

  /**
   * Records or updates a customer profile (importance, region, phase).
   */
  updateCustomerProfile(
    context: CustomerContext,
    recordId: string,
    profileUpdates: Partial<CustomerProfile>
  ): Promise<CustomerMemoryRecord>;

  /**
   * Tracks customer-defined business goals or pain points.
   */
  trackCustomerGoals(
    context: CustomerContext,
    recordId: string,
    goals: BusinessGoal[]
  ): Promise<CustomerMemoryRecord>;

  /**
   * Tracks individual stakeholder relationships (sentiments, alignment levels).
   */
  trackStakeholderRelationships(
    context: CustomerContext,
    recordId: string,
    stakeholders: Stakeholder[]
  ): Promise<CustomerMemoryRecord>;

  /**
   * Evaluates or updates the overall health indicator score, trend, or metrics.
   */
  updateCustomerHealth(
    context: CustomerContext,
    recordId: string,
    health: CustomerHealth
  ): Promise<CustomerMemoryRecord>;

  /**
   * Records a strategic customer-centric insight or lesson learned.
   */
  recordCustomerInsight(
    context: CustomerContext,
    recordId: string,
    insight: CustomerInsight
  ): Promise<CustomerMemoryRecord>;

  /**
   * Logs or documents executive alignment touchpoints and relationship indexes.
   */
  recordExecutiveInteraction(
    context: CustomerContext,
    recordId: string,
    interaction: ExecutiveRelationship
  ): Promise<CustomerMemoryRecord>;
}
