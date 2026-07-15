export type ExtensionCategoryType =
  | 'DIGITAL_EMPLOYEE'
  | 'SKILL'
  | 'KNOWLEDGE_PACK'
  | 'DEPARTMENT_PACK'
  | 'WORKFLOW_PACK'
  | 'MARKETPLACE_PACKAGE'
  | 'INTEGRATION'
  | 'POLICY';

export interface ExtensionManifest {
  readonly manifestVersion: string;
  readonly uniqueIdentifierCode: string;
  readonly displayName: string;
  readonly authorName: string;
  readonly category: ExtensionCategoryType;
  readonly minimumFrameworkVersion: string;
  readonly targetSubsystemsList: string[];
  readonly dependencyDeclarationsJson: string;
}
