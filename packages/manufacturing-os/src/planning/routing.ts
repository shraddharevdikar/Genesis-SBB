import { ProductId } from '../products/product.js';

export interface RoutingStep {
  readonly stepLineId: string;
  readonly sequenceNumber: number; // e.g. 10, 20, 30
  readonly targetWorkCenterIdString: string;
  readonly operationDescriptionText: string; // e.g. "Laser cutting of metal sheet"
  readonly standardSetupTimeMinutesDecimal: number;
  readonly standardRunTimeMinutesPerUnitDecimal: number;
  readonly machineResourceRequiredFlag: boolean;
  readonly secondaryVerificationRequiredFlag: boolean;
}

export interface RoutingSpecification {
  readonly routingId: string;
  readonly uniqueRoutingCode: string; // e.g. "RT-TURBINE-X100-STD"
  readonly associatedProductId: ProductId;
  readonly routingStepsList: RoutingStep[];
  readonly activeFlag: boolean;
  readonly approvedAt?: Date;
  readonly lastModifiedAt: Date;
}
