export interface IActivityEntry {
  id: string;
  timestamp: Date;
  userId?: string | null;
  action: string;
  resourceType?: string | null;
  resourceId?: string | null;
  description: string;
  severity: string;
}
