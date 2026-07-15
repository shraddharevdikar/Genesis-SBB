import { KnowledgePackReference } from './knowledge-pack-reference.js';

export interface KnowledgeProfile {
  readonly profileId: string;
  readonly agentId: string;
  readonly allowedDomainScopes: string[]; // e.g. ["CH.SBB.FINANCE", "CH.SBB.INFRASTRUCTURE"]
  readonly knowledgePacks: KnowledgePackReference[];
  readonly lastSynchronizedAt: Date;
  readonly autoRefreshEnabled: boolean;
}
