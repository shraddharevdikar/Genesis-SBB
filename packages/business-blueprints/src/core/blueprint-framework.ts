import { BlueprintId } from '../identity/blueprint-id.js';
import { TemplateId } from '../identity/template-id.js';
import { BlueprintContext } from './blueprint-context.js';
import { BusinessBlueprint, BlueprintCategoryTypeCode } from '../blueprints/business-blueprint.js';
import { BusinessTemplate, TemplateCategoryCode } from '../templates/business-template.js';
import { BlueprintComposition } from '../composition/blueprint-composition.js';
import { BlueprintValidation } from '../governance/blueprint-validation.js';

export interface BlueprintFramework {
  /**
   * Instantiates a new multi-tenant Business Blueprint configuration.
   */
  createBlueprint(
    uniqueBlueprintCode: string,
    displayName: string,
    descriptionNotesText: string,
    category: BlueprintCategoryTypeCode,
    context: BlueprintContext
  ): Promise<BusinessBlueprint>;

  /**
   * Registers a reusable, parameterized departmental, process, policy, or technical template building block.
   */
  registerTemplate(
    uniqueTemplateCode: string,
    displayName: string,
    descriptionNotesText: string,
    category: TemplateCategoryCode,
    rawSchemaSpecificationJSON: string,
    context: BlueprintContext
  ): Promise<BusinessTemplate>;

  /**
   * Composes a blueprint by assigning parameterized template references and resolving dependencies.
   */
  composeBlueprint(
    blueprintId: BlueprintId,
    composition: BlueprintComposition,
    context: BlueprintContext
  ): Promise<BusinessBlueprint>;

  /**
   * Performs cyclic dependency analysis, version compatibility audits, and validation checks.
   */
  validateBlueprint(
    blueprintId: BlueprintId,
    context: BlueprintContext
  ): Promise<BlueprintValidation>;

  /**
   * Publishes the validated blueprint into the active catalog, making it ready for provisioning.
   */
  publishBlueprint(
    blueprintId: BlueprintId,
    context: BlueprintContext
  ): Promise<BusinessBlueprint>;

  /**
   * Sunsets an active blueprint, preventing further system-wide operating model deployments.
   */
  retireBlueprint(
    blueprintId: BlueprintId,
    context: BlueprintContext
  ): Promise<void>;
}
