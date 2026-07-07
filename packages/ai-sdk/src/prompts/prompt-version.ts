export interface PromptVersion {
  readonly version: string;
  readonly content: string;
  readonly author?: string;
  readonly createdAt: string | Date;
}
