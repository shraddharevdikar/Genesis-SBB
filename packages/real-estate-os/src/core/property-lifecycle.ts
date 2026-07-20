export type LandAcquisitionState =
  | 'IDENTIFIED'
  | 'DUE_DILIGENCE'
  | 'NEGOTIATION'
  | 'ESCROW'
  | 'ACQUIRED_OWNED'
  | 'ABANDONED';

export type InventoryUnitState =
  | 'UNRELEASED'
  | 'AVAILABLE_FOR_SALE'
  | 'RESERVED_HOLD'
  | 'BOOKED'
  | 'SOLD_ALLOCATED'
  | 'REGISTERED'
  | 'POSSESSION_COMPLETED';

export type ConstructionStageState =
  | 'EXCAVATION'
  | 'FOUNDATION'
  | 'STRUCTURE_RCC'
  | 'BRICKWORK_PLASTER'
  | 'INTERIORS_MEP'
  | 'FINISHING_QC';

export type PossessionHandoverState =
  | 'NOT_STARTED'
  | 'SNAGGING_PHASE'
  | 'CUSTOMER_INSPECTION'
  | 'SIGNED_OFF_READY'
  | 'KEYS_HANDED_OVER';

export interface PropertyLifecycle {
  readonly currentUnitState: InventoryUnitState;
  readonly lastStateTransitionAt: Date;
  readonly isSnagFreeFlag: boolean;
  readonly warrantyExpiryDate?: Date;
}
