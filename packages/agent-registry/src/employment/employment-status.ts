export type EmploymentStatus = 
  | 'CANDIDATE' // Registered/Created but not yet active
  | 'ACTIVE' // Actively assigned and running
  | 'SUSPENDED' // Suspended from duties due to investigation/maintenance
  | 'RETIRED'; // Permanently deactivated
