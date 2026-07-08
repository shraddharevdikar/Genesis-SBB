import { ExecutiveContext } from './executive-context.js';
import { ExecutiveRole } from './executive-role.js';
import { ExecutivePersona } from '../../identity/executive-persona.js';
import { ExecutiveMemory } from '../../memory/executive-memory.js';
import { ExecutiveState } from '../../lifecycle/executive-state.js';
import { DecisionRequest } from '../../decision/decision-request.js';
import { DecisionResponse } from '../../decision/decision-response.js';
import { CollaborationRequest } from '../../communication/collaboration-request.js';
import { CollaborationResponse } from '../../communication/collaboration-response.js';

export interface ExecutiveBrain {
  readonly role: ExecutiveRole;
  readonly persona: ExecutivePersona;
  readonly memory: ExecutiveMemory;
  readonly state: ExecutiveState;

  analyze(context: ExecutiveContext, data: Record<string, any>): Promise<Record<string, any>>;
  
  advise(request: DecisionRequest): Promise<DecisionResponse>;
  
  collaborate(request: CollaborationRequest): Promise<CollaborationResponse>;
  
  delegate(context: ExecutiveContext, task: string, assignee: ExecutiveRole): Promise<string>;
  
  review(context: ExecutiveContext, artifactId: string): Promise<{ approved: boolean; comments: string[] }>;
}
