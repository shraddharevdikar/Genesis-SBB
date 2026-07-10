import { GraphContext } from './graph-context.js';
import { GraphNode } from './graph-node.js';
import { GraphEdge } from './graph-edge.js';
import { GraphPath } from './graph-path.js';
import { GraphQuery } from '../queries/graph-query.js';
import { GraphFilter } from '../queries/graph-filter.js';
import { GraphTraversal } from '../queries/graph-traversal.js';

export interface KnowledgeGraph {
  /**
   * Registers a new semantic node in the enterprise knowledge graph.
   */
  createNode(
    context: GraphContext,
    node: Partial<GraphNode>
  ): Promise<GraphNode>;

  /**
   * Updates an existing node's properties or metadata.
   */
  updateNode(
    context: GraphContext,
    nodeId: string,
    nodeUpdates: Partial<GraphNode>
  ): Promise<GraphNode>;

  /**
   * Removes a node and its associated incoming/outgoing edges.
   */
  removeNode(
    context: GraphContext,
    nodeId: string
  ): Promise<void>;

  /**
   * Establishes a typed, directed semantic relationship (edge) between two nodes.
   */
  connectNodes(
    context: GraphContext,
    edge: Partial<GraphEdge>
  ): Promise<GraphEdge>;

  /**
   * Severs a semantic relationship (edge) between two nodes.
   */
  disconnectNodes(
    context: GraphContext,
    edgeId: string
  ): Promise<void>;

  /**
   * Finds matching relationship edges based on query parameters and property filters.
   */
  findRelationships(
    context: GraphContext,
    query: GraphQuery,
    filter?: GraphFilter
  ): Promise<GraphEdge[]>;

  /**
   * Traverses the graph along a specified semantic path trajectory.
   */
  traverse(
    context: GraphContext,
    traversal: GraphTraversal
  ): Promise<GraphPath[]>;

  /**
   * Validates structural integrity and ontology/constraint compliance for the graph.
   */
  validateGraph(
    context: GraphContext,
    targetNodeIds?: string[]
  ): Promise<{
    readonly isValid: boolean;
    readonly errors: string[];
  }>;
}
