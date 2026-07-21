export interface LogisticsContext {
  readonly tenantId: string;
  readonly businessGroupId: string; // Group parent company ID
  readonly originFacilityIdString?: string; // Origin warehouse / supplier node
  readonly destinationFacilityIdString?: string; // Destination warehouse / customer hub node
  readonly correlationId: string;
  readonly operatorId?: string; // Staff member or Automated agent triggering the flow
  readonly initiatedAt: Date;
  readonly trackingReferenceNumberText?: string; // Carrier / waybill tracking ID
}
