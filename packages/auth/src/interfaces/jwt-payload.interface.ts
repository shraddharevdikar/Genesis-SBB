export interface IJwtPayload {
  userId: string;
  organizationId: string;
  tenantId: string;
  roles: string[];
  tokenVersion: number;
  sub: string; // userId as subject
  email: string;
  iat?: number;
  exp?: number;
}
