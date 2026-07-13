export interface EngineGraphContext {
  readonly originNodeId: string;
  readonly depthLimit: number;
  readonly traversedNodesCount: number;
  readonly traversedEdgesCount: number;
  readonly dominantRelationshipType: string;
}
