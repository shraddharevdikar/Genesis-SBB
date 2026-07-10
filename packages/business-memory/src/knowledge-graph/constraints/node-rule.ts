import { EntityType } from '../ontology/entity-type.js';

export interface RequiredPropertyRule {
  readonly propertyKey: string;
  readonly expectedType: 'string' | 'number' | 'boolean' | 'object' | 'array';
}

export interface NodeRule {
  readonly ruleId: string;
  readonly name: string;
  readonly targetEntityType: EntityType;
  readonly requiredProperties: RequiredPropertyRule[];
  readonly customValidationExpression?: string; // conceptual logic placeholder
}
