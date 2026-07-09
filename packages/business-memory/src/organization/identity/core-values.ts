export interface CoreValueItem {
  readonly valueName: string;
  readonly description: string;
  readonly observableBehaviors: string[];
}

export interface CoreValues {
  readonly definedAt: Date;
  readonly items: CoreValueItem[];
  readonly resonanceCheckFrequencyDays: number;
}
