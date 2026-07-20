import { ManufacturingContext } from './manufacturing-context.js';
import { ProductionPlan } from '../planning/production-plan.js';
import { PurchaseOrder } from '../procurement/purchase-order.js';
import { ProductionSchedule } from '../planning/production-schedule.js';
import { ProductionOrder } from '../production/production-order.js';
import { QualityCheck } from '../quality/quality-check.js';
import { MaintenanceWorkOrder } from '../maintenance/maintenance-work-order.js';
import { Shipment } from '../logistics/shipment.js';
import { ProductId } from '../products/product.js';
import { SupplierId } from '../procurement/supplier.js';

export interface ManufacturingFramework {
  planProduction(
    uniquePlanCode: string,
    strategicTimeHorizonMonthsCount: number,
    targetProductIdsList: ProductId[],
    plannedRequirementsQuantitiesList: number[],
    approvedBudgetCapAmount: number,
    currencyCode: string,
    context?: ManufacturingContext
  ): Promise<ProductionPlan>;

  procureMaterials(
    uniquePoCode: string,
    associatedSupplierId: SupplierId,
    itemProductIdsList: ProductId[],
    orderedQuantitiesList: number[],
    unitCostsList: number[],
    expectedDeliveryDatesList: Date[],
    currencyCode: string,
    context?: ManufacturingContext
  ): Promise<PurchaseOrder>;

  scheduleProduction(
    uniqueScheduleCode: string,
    associatedProductionOrderIdsList: string[],
    targetProductIdsList: ProductId[],
    assignedWorkCenterIdsList: string[],
    scheduledStartTimesList: Date[],
    scheduledEndTimesList: Date[],
    targetUnitsToProduceQuantitiesList: number[],
    context?: ManufacturingContext
  ): Promise<ProductionSchedule>;

  executeProduction(
    uniqueOrderCode: string,
    targetProductId: ProductId,
    associatedBomIdString: string,
    associatedRoutingIdString: string,
    plannedQuantityToManufacture: number,
    targetStartDate: Date,
    targetEndDate: Date,
    currencyCode: string,
    context?: ManufacturingContext
  ): Promise<ProductionOrder>;

  performQualityInspection(
    uniqueCheckCode: string,
    inspectionPlanIdString: string,
    associatedBatchCodeText: string,
    associatedWorkOrderIdString: string,
    totalUnitsTestedCount: number,
    failedUnitsCount: number,
    measurementsPayloadJSONString: string,
    context?: ManufacturingContext
  ): Promise<QualityCheck>;

  maintainEquipment(
    uniqueWorkOrderCode: string,
    targetMachineIdString: string,
    classification: 'PREVENTIVE_ROUTINE' | 'UNPLANNED_BREAKDOWN' | 'CALIBRATION' | 'SAFETY_AUDIT',
    severityLevel: 'LOW_ROUTINE' | 'MEDIUM_URGENT' | 'HIGH_CRITICAL_BREAKDOWN',
    problemStatementSummary: string,
    context?: ManufacturingContext
  ): Promise<MaintenanceWorkOrder>;

  dispatchProducts(
    uniqueShipmentCode: string,
    associatedSalesOrderIdString: string,
    senderWarehouseIdString: string,
    itemProductIdsList: ProductId[],
    quantitiesShippedList: number[],
    batchLotCodesUsedList: string[],
    destinationAddressString: string,
    shippingCarrierName: string,
    estimatedWeightKilogramsDecimal: number,
    estimatedDeliveryDate: Date,
    context?: ManufacturingContext
  ): Promise<Shipment>;
}
