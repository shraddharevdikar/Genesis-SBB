import { ApprovalStep } from './approval-step.js';
import { ApprovalCondition } from './approval-condition.js';

export type ChainExecutionModeCode =
  | 'SEQUENTIAL_STRICT'
  | 'PARALLEL_ALL_REQUIRED'
  | 'PARALLEL_ANY_SINGLE_REQUIRED';

export interface ApprovalChain {
  readonly chainId: string;
  readonly uniqueChainCode: string; // e.g. "CHN-FIN-SIGN-OFF"
  readonly displayName: string;
  readonly executionMode: ChainExecutionModeCode;
  readonly stepsList: ApprovalStep[];
  readonly governingConditionsList: ApprovalCondition[];
  readonly isFinalArbitrationAuthority: boolean;
}
