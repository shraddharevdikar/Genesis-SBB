export interface ContextFilter {
  readonly filterId: string;
  readonly redactSensitiveKeywords: string[]; // e.g. ["SSN", "IBAN", "CREDIT_CARD"]
  readonly excludeDomains: string[];
  readonly enableGdprAnonymization: boolean;
  readonly maxContextSizeKb: number;
}
