export type PackageLifecycleState =
  | 'DRAFT'              // Package metadata submitted, not published
  | 'UNDER_REVIEW'        // Security, compliance and compatibility analysis active
  | 'APPROVED'            // Validated and cleared for publishing
  | 'PUBLISHED'           // Active in the catalog, installable
  | 'SUSPENDED'           // Temporarily withdrawn due to policy audits
  | 'RETIRED';            // Deprecated/Archived, no longer installable
