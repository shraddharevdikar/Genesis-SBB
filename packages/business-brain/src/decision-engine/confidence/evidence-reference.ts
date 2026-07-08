export interface EvidenceReference {
  readonly id: string;
  readonly sourceUri: string;
  readonly sourceTitle: string;
  readonly reliabilityIndex: number; // 0.0 to 1.0
  readonly ageDays: number;
}
