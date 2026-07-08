import { ExecutiveRole } from '../../core/contracts/executive-role.js';

export interface StrategicContext {
  readonly marketPosition: 'LEADER' | 'CHALLENGER' | 'NICHE' | 'FOLLOWER';
  readonly macroeconomicTrend: 'EXPANSION' | 'STAGNATION' | 'RECESSION' | 'VOLATILE';
  readonly internalStrengths: string[];
  readonly internalWeaknesses: string[];
  readonly competitiveThreats: string[];
}

export interface BusinessKPIHistory {
  readonly metricName: string;
  readonly historicalValues: { timestamp: Date; value: number }[];
  readonly targetValue: number;
}
