export interface MockRuntime {
  readonly runtimeInstanceId: string;
  readonly simulatedTenantId: string;
  simulatePlatformEvent(eventTypeCode: string, payloadJson: string): Promise<string>;
  resetSandboxState(): Promise<void>;
}
