export interface RuntimeResponse {
  readonly status: 'SUCCESS' | 'FAILURE' | 'PARTIAL';
  readonly data?: any;
  readonly errorCode?: string;
  readonly errorMessage?: string;
  readonly validationIssues?: string[];
  readonly timestamp: Date;
}
