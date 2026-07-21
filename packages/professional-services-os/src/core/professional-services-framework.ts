import { ServicesContext } from './services-context.js';
import { Client } from '../clients/client.js';
import { Engagement } from '../clients/engagement.js';
import { Proposal } from '../proposals/proposal.js';
import { Project } from '../projects/project.js';
import { ResourceAllocation } from '../resources/resource-allocation.js';
import { ServiceRequest } from '../delivery/service-request.js';
import { Worklog } from '../delivery/worklog.js';
import { InvoiceRequest } from '../billing/invoice-request.js';
import { CustomerHealth } from '../customer-success/customer-health.js';

export interface ProfessionalServicesFramework {
  /**
   * Initializes, updates, or transitions a client engagement and its master terms.
   */
  manageClientEngagement(
    clientIdString: string,
    engagementTitle: string,
    deliveryModelCode: string,
    totalValueAmount: number,
    context?: ServicesContext
  ): Promise<Engagement>;

  /**
   * Generates or submits a formal professional services proposal or statements of work (SOW).
   */
  createProposal(
    associatedClientIdString: string,
    proposalTitle: string,
    targetPracticeArea: string,
    estimatedFeeAmount: number,
    context?: ServicesContext
  ): Promise<Proposal>;

  /**
   * Spawns an active delivery project mapped to a signed engagement and establishes baselines.
   */
  launchProject(
    associatedEngagementIdString: string,
    projectTitleString: string,
    projectManagerStaffRoleId: string,
    allocatedBudgetAmount: number,
    context?: ServicesContext
  ): Promise<Project>;

  /**
   * Places soft or hard bookings for certified consultants across active client projects.
   */
  allocateResources(
    consultantIdString: string,
    targetProjectIdString: string,
    plannedStartDate: Date,
    plannedEndDate: Date,
    ftePercentageDecimal: number,
    context?: ServicesContext
  ): Promise<ResourceAllocation>;

  /**
   * Captures or dispatches specialized client service requests, tickets, or incident queries.
   */
  deliverServices(
    clientIdString: string,
    requestSubject: string,
    detailedDescription: string,
    priorityCode: string,
    context?: ServicesContext
  ): Promise<ServiceRequest>;

  /**
   * Logs billable or non-billable client consulting efforts against active projects and deliverables.
   */
  recordTime(
    consultantIdString: string,
    projectIdString: string,
    hoursWorkedDecimal: number,
    workDate: Date,
    activitySummaryText: string,
    context?: ServicesContext
  ): Promise<Worklog>;

  /**
   * Triggers and schedules itemized client billing runs for approved hours or completed milestones.
   */
  requestBilling(
    associatedEngagementIdString: string,
    billingTypeCode: string,
    billingLineItemsJSON: string,
    context?: ServicesContext
  ): Promise<InvoiceRequest>;

  /**
   * Assesses customer satisfaction surveys, SLA compliance, and predicts churn indicators.
   */
  measureCustomerSuccess(
    clientIdString: string,
    surveyRatingsListJSON: string,
    netPromoterScore: number,
    context?: ServicesContext
  ): Promise<CustomerHealth>;
}
