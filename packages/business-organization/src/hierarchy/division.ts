import { DivisionId } from '../identity/division-id.js';
import { BusinessUnitId } from '../identity/business-unit-id.js';

export interface Division {
  readonly divisionId: DivisionId;
  readonly parentBusinessUnitId: BusinessUnitId;
  readonly name: string;
  readonly headParticipantId: string;
  readonly operationalDepartmentIdsList: string[];
}
