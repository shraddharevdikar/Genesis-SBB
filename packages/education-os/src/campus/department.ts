import { CampusId } from './campus.js';

export interface Department {
  readonly departmentId: string;
  readonly uniqueDepartmentCode: string; // e.g., "DEP-COMP-SCI"
  readonly associatedCampusId: CampusId;
  readonly departmentName: string;
  readonly deanStaffRoleIdString: string; // Links to HROS / Role (Academic Dean)
  readonly administrativeContactEmail: string;
  readonly budgetCodeString: string; // Links to FinanceOS
  readonly officeRoomNumberString?: string;
  readonly activeStatusFlag: boolean;
  readonly createdAt: Date;
}
