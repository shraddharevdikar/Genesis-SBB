export interface MigrationStepDefinition {
  readonly stepNumber: number;
  readonly instructionTitle: string;
  readonly beforeCodeSnippetText?: string;
  readonly afterCodeSnippetText?: string;
  readonly autoFixable: boolean;
}

export interface MigrationGuide {
  readonly fromVersion: string;
  readonly toVersion: string;
  readonly breakingChangesDescription: string;
  readonly migrationStepsList: MigrationStepDefinition[];
}
