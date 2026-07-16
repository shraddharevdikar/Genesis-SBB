export interface ApiReferenceNode {
  readonly capabilityNameString: string;
  readonly requestPayloadSchemaJson: string;
  readonly responsePayloadSchemaJson: string;
  readonly descriptionText: string;
}

export interface ApiReference {
  readonly majorVersionNumber: number;
  readonly endpointsList: ApiReferenceNode[];
}
