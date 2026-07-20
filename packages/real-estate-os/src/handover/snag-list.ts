import { InventoryUnitId } from '../projects/inventory.js';
import { PropertyBuyerId } from '../crm/buyer.js';

export interface SnagIssue {
  readonly issueId: string;
  readonly uniqueIssueCode: string;
  readonly descriptionText: string; // e.g. "Missing electrical switch plate in kitchen"
  readonly areaName: 'LIVING_ROOM' | 'KITCHEN' | 'BATHROOM' | 'BEDROOM_1' | 'BEDROOM_2' | 'BALCONY';
  readonly severity: 'COSMETIC' | 'FUNCTIONAL' | 'SAFETY_HAZARD';
  readonly contractorResponsibleIdString?: string;
  readonly status: 'OPEN_REPORTED' | 'ASSIGNED' | 'WORK_IN_PROGRESS' | 'RE_INSPECTED_PASSED' | 'CLOSED';
  readonly reportedAt: Date;
  readonly fixedAt?: Date;
}

export interface SnagList {
  readonly listId: string;
  readonly uniqueListCode: string; // e.g. "SNG-HEIGHTS-1204"
  readonly associatedUnitId: InventoryUnitId;
  readonly associatedBuyerId: PropertyBuyerId;
  readonly inspectorRoleIdString: string;
  readonly issuesList: SnagIssue[];
  readonly totalIssuesCount: number;
  readonly unresolvedIssuesCount: number;
  readonly isCustomerApprovedFlag: boolean;
  readonly customerSignatureDocURI?: string;
  readonly lastReviewedAt: Date;
}
