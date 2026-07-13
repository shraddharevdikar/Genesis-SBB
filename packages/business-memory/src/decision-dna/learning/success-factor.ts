export interface SuccessFactor {
  readonly factorId: string;
  readonly description: string;
  readonly weightScore: number;
  readonly category: 'PEOPLE' | 'PROCESS' | 'TECHNOLOGY' | 'DATA' | 'MARKET_TIMING';
}
