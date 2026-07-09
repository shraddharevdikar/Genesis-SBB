export enum OwnerType {
  USER = 'USER',
  TEAM = 'TEAM',
  DEPARTMENT = 'DEPARTMENT',
  AGENT = 'AGENT',
  EXECUTIVE_BRAIN = 'EXECUTIVE_BRAIN',
  SYSTEM = 'SYSTEM'
}

export interface MemoryOwner {
  readonly ownerId: string;
  readonly ownerType: OwnerType;
  readonly displayName?: string;
}
