import * as common from '../common/index.js';
import * as api from '../api/index.js';
import * as identity from '../identity/index.js';
import * as organization from '../organization/index.js';
import * as tenant from '../tenant/index.js';
import * as audit from '../audit/index.js';
import * as workflow from '../workflow/index.js';
import * as ai from '../ai/index.js';
import * as integration from '../integration/index.js';

/**
 * Namespace aggregating all system-wide Zod validation schemas.
 */
export const Schemas = {
  common: {
    uuid: common.uuidSchema,
    email: common.emailSchema,
    url: common.urlSchema,
    dateTime: common.dateTimeSchema,
    id: common.idSchema,
    userId: common.userIdSchema,
    tenantId: common.tenantIdSchema,
    organizationId: common.organizationIdSchema,
    customMetadata: common.customMetadataSchema,
    timestamped: common.timestampedSchema,
    baseEntity: common.baseEntitySchema,
  },
  api: {
    paginationParams: api.paginationParamsSchema,
    paginationMetadata: api.paginationMetadataSchema,
    errorDetails: api.apiErrorDetailsSchema,
    errorResponse: api.apiErrorResponseSchema,
    createPaginatedResponse: api.createApiPaginatedResponseSchema,
    createResponse: api.createApiResponseSchema,
  },
  identity: {
    role: identity.userRoleSchema,
    status: identity.userStatusSchema,
    profile: identity.userProfileSchema,
    session: identity.userSessionSchema,
    permission: identity.userPermissionSchema,
  },
  organization: {
    subscriptionTier: organization.subscriptionTierSchema,
    settings: organization.organizationSettingsSchema,
    organization: organization.organizationSchema,
    member: organization.organizationMemberSchema,
  },
  tenant: {
    status: tenant.tenantStatusSchema,
    billingPlan: tenant.tenantBillingPlanSchema,
    settings: tenant.tenantSettingsSchema,
    tenant: tenant.tenantSchema,
  },
  audit: {
    severity: audit.auditSeveritySchema,
    actor: audit.actorMetadataSchema,
    change: audit.fieldChangeSchema,
    entry: audit.auditTrailEntrySchema,
  },
  workflow: {
    status: workflow.workflowStatusSchema,
    step: workflow.workflowStepDefinitionSchema,
    definition: workflow.workflowDefinitionSchema,
    instance: workflow.workflowInstanceSchema,
    transition: workflow.workflowTransitionSchema,
  },
  ai: {
    role: ai.aiMessageRoleSchema,
    message: ai.aiMessageSchema,
    modelConfig: ai.aiModelConfigSchema,
    tokenUsage: ai.aiTokenUsageSchema,
    session: ai.aiSessionSchema,
  },
  integration: {
    type: integration.integrationTypeSchema,
    state: integration.integrationStateSchema,
    config: integration.integrationConfigSchema,
    webhook: integration.webhookConfigSchema,
    syncStatus: integration.integrationSyncStatusSchema,
  },
};
