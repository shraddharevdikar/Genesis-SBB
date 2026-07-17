import { ProcessInput } from './process-input.js';

export interface InputRequirement {
  readonly requirementId: string;
  readonly baseInputRef: ProcessInput;
  readonly isMandatoryForInitialization: boolean;
  readonly maximumPayloadSizeBytesCount: number;
  readonly schemaDefinitionJsonString: string; // structural validation schema (e.g. JSON schema)
}
