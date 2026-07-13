export interface EventRoute {
  readonly routeId: string;
  readonly tenantId: string;
  readonly sourceTopic: string;
  readonly targetDestination: string; // Endpoint, queue, or consumer identifier
  readonly priorityWeight: number; // Order precedence in routers
  readonly filterExpression?: string; // Logical criteria to match properties
  readonly isActive: boolean;
}
