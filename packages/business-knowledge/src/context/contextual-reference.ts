export type ContextualReferenceTypeCode =
  | 'ORGANIZATION_REF'
  | 'DEPARTMENT_REF'
  | 'WORKFLOW_REF'
  | 'CUSTOMER_REF'
  | 'GEOGRAPHIC_REF'
  | 'TIME_BOUNDED_REF';

export interface ContextualReference {
  readonly referenceId: string;
  readonly typeCode: ContextualReferenceTypeCode;
  readonly entityIdentifierValueString: string; // e.g. "BOSF-006" or "APAC-REGION"
  readonly displayExplanationNotes?: string;
}
