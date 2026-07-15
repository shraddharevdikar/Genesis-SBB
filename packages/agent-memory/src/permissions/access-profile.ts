import { MemoryPermission } from './memory-permission.js';

export interface AccessProfile {
  readonly profileId: string;
  readonly tenantId: string;
  readonly activePermissionsList: MemoryPermission[];
  readonly enforceDataAnonymization: boolean; // Must strip names/emails on output reads
  readonly blockExternalEgress: boolean; // Prevent agent from sending memory data outside SBB networks
  readonly maxMemoryQueriesPerHourLimit: number;
}
