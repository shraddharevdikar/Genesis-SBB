export enum ExecutiveRoleType {
  CEO = 'CEO',
  CFO = 'CFO',
  CRO = 'CRO',
  CMO = 'CMO',
  CHRO = 'CHRO',
  CTO = 'CTO',
  COO = 'COO',
  CISO = 'CISO'
}

export interface ExecutiveOwner {
  readonly executiveId: string;
  readonly roleType: ExecutiveRoleType;
  readonly displayName: string;
  readonly department?: string;
}
