export interface LastMileDelivery {
  readonly lastMileId: string;
  readonly associatedDeliveryIdString: string;
  readonly trackingPinCodeText: string; // Recipient confirmation pin e.g. "8142"
  readonly realTimeDriverLatitude?: number;
  readonly realTimeDriverLongitude?: number;
  readonly trafficDelayMinutesCount: number;
  readonly electricVehicleEcoSavingCo2KgDecimal?: number; // Green logistics KPIs
  readonly smsNotificationSentCount: number;
  readonly signatureRequiredFlag: boolean;
  readonly deliveryInstructionsNotes?: string;
  readonly lastModifiedAt: Date;
}
