export interface DependencyEdge {
  readonly sourceTemplateUniqueCode: string;
  readonly targetTemplateUniqueCode: string;
  readonly dependencyRelationTypeCode: 'REQUIRES' | 'CONFLICTS_WITH' | 'RECOMMENDS' | 'LOADS_BEFORE';
  readonly isStrictEnforced: boolean;
}

export interface DependencyNode {
  readonly templateUniqueCode: string;
  readonly templateCategoryCode: string;
  readonly minimumVersionString: string;
}

export interface DependencyGraph {
  readonly graphId: string;
  readonly nodesList: DependencyNode[];
  readonly edgesList: DependencyEdge[];
  readonly hasCyclicDependenciesFlag: boolean;
  readonly isResolvedFlag: boolean;
}
