import { GraphNode } from './graph-node.js';
import { GraphEdge } from './graph-edge.js';

export interface GraphPath {
  readonly pathId: string;
  readonly nodes: GraphNode[];
  readonly edges: GraphEdge[];
  readonly startNode: GraphNode;
  readonly endNode: GraphNode;
  readonly length: number; // number of edges in the path
}
