import { AgentId } from '@sbb/agent-framework';
import { RuntimeId } from '../identity/runtime-id.js';
import { SessionId } from '../identity/session-id.js';
import { RuntimeSession } from './runtime-session.js';
import { RuntimeContext } from './runtime-context.js';
import { ExecutionContext } from './execution-context.js';
import { Goal } from '@sbb/agent-framework';
import { GoalSession } from '../goals/goal-session.js';
import { ContextWindow } from '../context/context-window.js';
import { ExecutionStep } from '../planning/execution-step.js';
import { ExecutionResult } from '../execution/execution-result.js';
import { DecisionPoint } from '../planning/decision-point.js';

export interface AgentRuntime {
  /**
   * Spawns a new multitenant runtime session for a given agent.
   */
  startSession(
    tenantId: string,
    agentId: AgentId,
    context: RuntimeContext
  ): Promise<RuntimeSession>;

  /**
   * Pauses an active runtime session, freezing current step executions.
   */
  pauseSession(
    tenantId: string,
    sessionId: SessionId,
    reason: string,
    context: RuntimeContext
  ): Promise<RuntimeSession>;

  /**
   * Resumes a paused session from its exact cached state parameters.
   */
  resumeSession(
    tenantId: string,
    sessionId: SessionId,
    reason: string,
    context: RuntimeContext
  ): Promise<RuntimeSession>;

  /**
   * Formally stops and completes/terminates a running session.
   */
  stopSession(
    tenantId: string,
    sessionId: SessionId,
    reason: string,
    context: RuntimeContext
  ): Promise<RuntimeSession>;

  /**
   * Initiates and tracks a high-level corporate Goal execution plan.
   */
  executeGoal(
    tenantId: string,
    sessionId: SessionId,
    goal: Goal,
    context: RuntimeContext
  ): Promise<GoalSession>;

  /**
   * Compiles memories, variable states, and domain packs into a sanitized ContextWindow.
   */
  buildContext(
    tenantId: string,
    sessionId: SessionId,
    options: {
      readonly redactPII: boolean;
      readonly tokenLimit: number;
    }
  ): Promise<ContextWindow>;

  /**
   * Dispatches and coordinates an execution step to standard SBB Runtime APIs.
   */
  coordinateExecution(
    tenantId: string,
    sessionId: SessionId,
    step: ExecutionStep,
    executionContext: ExecutionContext
  ): Promise<ExecutionResult>;

  /**
   * Evaluates conditional branches or compliance escalations at a given decision checkpoint.
   */
  evaluateDecision(
    tenantId: string,
    sessionId: SessionId,
    decisionPoint: DecisionPoint,
    context: RuntimeContext
  ): Promise<DecisionPoint>;
}
