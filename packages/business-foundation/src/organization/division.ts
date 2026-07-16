import { DivisionId } from '../identity/division-id.js';
import { BusinessId } from '../identity/business-id.js';

export interface Division {
  readonly divisionId: DivisionId;
  readonly parentBusinessId: BusinessId;
  readonly name: string;
  readonly divisionalLeaderId: string;
  readonly departmentIdsList: string[];
}
