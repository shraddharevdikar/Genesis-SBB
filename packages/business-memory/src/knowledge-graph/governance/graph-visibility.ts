export enum GraphVisibilityTier {
  PUBLIC = 'PUBLIC', // Visible to all authenticated tenant users
  RESTRICTED = 'RESTRICTED', // Visible to specific departments or roles
  CONFIDENTIAL = 'CONFIDENTIAL', // Visible to specific individuals and managers
  SECRET = 'SECRET' // Visible to Executive Council only
}

export interface GraphVisibility {
  readonly tier: GraphVisibilityTier;
  readonly allowedRoleIds: string[];
  readonly allowedTeamIds: string[];
  readonly allowedUserIds: string[];
}
