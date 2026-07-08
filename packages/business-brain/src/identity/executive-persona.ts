import { ExecutiveRole } from '../core/contracts/executive-role.js';
import { ExecutiveGoal } from './executive-goals.js';
import { AuthorityLevel } from '../governance/authority-level.js';

export interface ExecutivePersona {
  readonly name: string;
  readonly role: ExecutiveRole;
  readonly communicationStyle: 'DIRECT' | 'COLLABORATIVE' | 'ANALYTICAL' | 'VISIONARY' | 'EMPATHETIC';
  readonly decisionPhilosophy: 'DATA_DRIVEN' | 'CONSENSUS_BASED' | 'RISK_ASTRUCTIVE' | 'FAST_PACED' | 'HEURISTIC';
  readonly authorityLevel: AuthorityLevel;
  readonly kpis: string[];
  readonly objectives: ExecutiveGoal[];
  readonly profileImage?: string;
  readonly traits?: string[];
}
