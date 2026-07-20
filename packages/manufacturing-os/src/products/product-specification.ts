import { ProductId } from './product.js';

export interface SpecParameter {
  readonly parameterName: string; // e.g. "Tension Strength"
  readonly targetValueDecimal: number;
  readonly toleranceLowerBoundDecimal: number;
  readonly toleranceUpperBoundDecimal: number;
  readonly unitOfMeasurementString: string; // e.g. "MPa" or "mm" or "Celsius"
}

export interface ProductSpecification {
  readonly specificationId: string;
  readonly uniqueSpecCode: string; // e.g. "SPEC-X100-SHEET-MET"
  readonly associatedProductId: ProductId;
  readonly revisionVersionString: string; // e.g. "REV-3.1"
  readonly designerStaffRoleIdString: string; // Links to HROS / Role
  readonly specificationParametersList: SpecParameter[];
  readonly technicalDrawingStorageURI?: string;
  readonly approvalStatus: 'DRAFT' | 'UNDER_REVIEW' | 'APPROVED_RELEASED' | 'SUPERSEDED_ARCHIVED';
  readonly releasedAt?: Date;
  readonly lastModifiedAt: Date;
}
