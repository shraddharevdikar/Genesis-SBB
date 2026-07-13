export interface TaskPolicy {
  readonly policyId: string;
  readonly tenantId: string;
  readonly maxRetriesOnFailure: number;
  readonly allowSelfReassignment: boolean;
  readonly requireReviewForCompletion: boolean;
  readonly allowedAttachmentTypes: string[];
}
