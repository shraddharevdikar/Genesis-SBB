import { CouncilRole } from './council-role.js';

export interface CouncilMember {
  readonly id: string;
  readonly name: string;
  readonly role: CouncilRole;
  readonly department: string;
  readonly expertise: string[];
}
