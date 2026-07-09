import { CustomerOrganization } from '../identity/customer-organization.js';
import { CustomerProfile } from '../identity/customer-profile.js';
import { CustomerContact } from '../identity/customer-contact.js';
import { Stakeholder } from '../stakeholders/stakeholder.js';
import { ExecutiveSponsor } from '../stakeholders/executive-sponsor.js';
import { BuyingCommittee } from '../stakeholders/buying-committee.js';
import { BusinessGoal } from '../business/business-goal.js';
import { BusinessChallenge } from '../business/business-challenge.js';
import { SuccessCriteria } from '../business/success-criteria.js';
import { RelationshipHealth } from '../relationships/relationship-health.js';
import { CommunicationPreference } from '../relationships/communication-preference.js';
import { ExecutiveRelationship } from '../relationships/executive-relationship.js';
import { EngagementHistory } from '../engagement/engagement-history.js';
import { ProductAdoption } from '../products/product-adoption.js';
import { UsagePattern } from '../products/usage-pattern.js';
import { ExpansionOpportunity } from '../products/expansion-opportunity.js';
import { CustomerHealth } from '../health/customer-health.js';
import { RenewalReadiness } from '../health/renewal-readiness.js';
import { ChurnRisk } from '../health/churn-risk.js';
import { CustomerInsight } from '../insights/customer-insight.js';
import { CustomerLessonLearned } from '../insights/lesson-learned.js';
import { CustomerMemoryPolicy } from '../governance/customer-memory-policy.js';

export interface CustomerMemoryRecord {
  readonly recordId: string;
  readonly tenantId: string;
  readonly customerOrganizationId: string;
  
  // Identity
  readonly organization: CustomerOrganization;
  readonly profile: CustomerProfile;
  readonly primaryContacts: CustomerContact[];
  
  // Stakeholders
  readonly stakeholders: Stakeholder[];
  readonly executiveSponsors: ExecutiveSponsor[];
  readonly buyingCommittees: BuyingCommittee[];
  
  // Business Context
  readonly businessGoals: BusinessGoal[];
  readonly businessChallenges: BusinessChallenge[];
  readonly successCriteria: SuccessCriteria[];
  
  // Relationships
  readonly relationshipHealth?: RelationshipHealth;
  readonly communicationPreferences?: CommunicationPreference;
  readonly executiveRelationships: ExecutiveRelationship[];
  
  // Engagement
  readonly engagementHistory?: EngagementHistory;
  
  // Product Understanding
  readonly productAdoptions: ProductAdoption[];
  readonly usagePatterns: UsagePattern[];
  readonly expansionOpportunities: ExpansionOpportunity[];
  
  // Customer Health
  readonly overallHealth?: CustomerHealth;
  readonly renewalReadiness?: RenewalReadiness;
  readonly activeChurnRisks: ChurnRisk[];
  
  // Learning & Insights
  readonly customerInsights: CustomerInsight[];
  readonly lessonsLearned: CustomerLessonLearned[];
  
  // Governance
  readonly sharingPolicy?: CustomerMemoryPolicy;
  
  readonly tags: string[];
  readonly version: number;
  readonly isArchived: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
