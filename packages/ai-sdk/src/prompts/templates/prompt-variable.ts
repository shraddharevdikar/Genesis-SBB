export type VariableType = 'string' | 'number' | 'boolean' | 'json';

export interface PromptVariable {
  readonly name: string;
  readonly type: VariableType;
  readonly required: boolean;
  readonly defaultValue?: string | number | boolean;
  readonly description?: string;
}
