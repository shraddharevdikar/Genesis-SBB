import { IndustryContext } from './industry-context.js';
import { LandParcel } from '../land/land-parcel.js';
import { RealEstateProject } from '../projects/real-estate-project.js';
import { InventoryUnit } from '../projects/inventory.js';
import { PropertyBooking } from '../sales/booking.js';
import { UnitAllocation } from '../sales/unit-allocation.js';
import { ConstructionStage } from '../construction/construction-stage.js';
import { PropertyPossession } from '../handover/possession.js';
import { CooperativeHousingSociety } from '../property-management/society.js';

export interface RealEstateFramework {
  /**
   * Orchestrates the legal, zoning, and financial process of acquiring a land parcel.
   */
  acquireLand(
    uniqueParcelCode: string,
    displayName: string,
    physicalLocationAddress: string,
    geographicalCoordinatesGPS: string,
    totalAreaSquareMetersDecimal: number,
    costBasisAmount: number,
    currencyCode: string,
    context?: IndustryContext
  ): Promise<LandParcel>;

  /**
   * Initializes a multi-tower or multi-phase real estate development project on acquired land.
   */
  launchProject(
    uniqueProjectCode: string,
    displayName: string,
    associatedLandParcelIdString: string,
    developmentType: 'RESIDENTIAL_HIGHRISE' | 'COMMERCIAL_OFFICE' | 'INTEGRATED_TOWNSHIP' | 'INDUSTRIAL_WAREHOUSE',
    approvedBudgetAmount: number,
    currencyCode: string,
    targetLaunchDate: Date,
    plannedCompletionDate: Date,
    context?: IndustryContext
  ): Promise<RealEstateProject>;

  /**
   * Releases and allocates physical inventory blocks or individual units to active configurations.
   */
  allocateInventory(
    uniqueAllocationCode: string,
    associatedBookingIdString: string,
    associatedUnitIdString: string,
    allocatedBuyerIdString: string,
    parkingSpaceAssignedText?: string,
    context?: IndustryContext
  ): Promise<UnitAllocation>;

  /**
   * Books a real estate unit for a buyer, assigning pricing structures and payment schedules.
   */
  bookProperty(
    uniqueBookingCode: string,
    associatedUnitIdString: string,
    associatedBuyerIdString: string,
    totalAgreedSaleAmount: number,
    bookingAdvanceAmountPaid: number,
    currencyCode: string,
    context?: IndustryContext
  ): Promise<PropertyBooking>;

  /**
   * Tracks active construction stages, milestone completion, and QC checklists.
   */
  trackConstruction(
    uniqueStageCode: string,
    associatedProjectIdString: string,
    associatedTowerIdString?: string,
    stageState?: 'EXCAVATION' | 'FOUNDATION' | 'STRUCTURE_RCC' | 'BRICKWORK_PLASTER' | 'INTERIORS_MEP' | 'FINISHING_QC',
    context?: IndustryContext
  ): Promise<ConstructionStage>;

  /**
   * Completes physical keys handover, registers possession agreements, and verifies final clearance.
   */
  completePossession(
    uniquePossessionCode: string,
    associatedBookingIdString: string,
    associatedUnitIdString: string,
    targetBuyerIdString: string,
    targetPossessionDate: Date,
    context?: IndustryContext
  ): Promise<PropertyPossession>;

  /**
   * Transitions active building handovers to cooperative housing societies or resident bodies.
   */
  manageProperty(
    uniqueSocietyCode: string,
    associatedProjectIdString: string,
    registeredSocietyName: string,
    officialRegistrationNumberText: string,
    monthlyMaintenanceSinkingFeeAmount: number,
    currencyCode: string,
    context?: IndustryContext
  ): Promise<CooperativeHousingSociety>;
}
