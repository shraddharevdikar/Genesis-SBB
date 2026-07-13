import { ContextId } from '../identity/context-id.js';
import { ContextItem } from './context.js';

export interface ContextPackage {
  readonly packageId: string;
  readonly contextId: ContextId;
  readonly tenantId: string;
  readonly targetAudienceRoleIds: string[];
  readonly serializedPayload: string; // Packed string representation for compliance / distribution
  readonly generatedAt: Date;
  readonly signatureVerified: boolean;
}
