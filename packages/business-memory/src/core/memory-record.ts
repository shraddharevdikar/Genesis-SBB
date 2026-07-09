import { MemoryId } from '../identity/memory-id.js';
import { MemoryOwner } from '../identity/memory-owner.js';
import { MemoryType } from '../classification/memory-type.js';
import { MemoryCategory } from '../classification/memory-category.js';
import { MemoryPriority } from '../classification/memory-priority.js';
import { MemorySensitivity } from '../classification/memory-sensitivity.js';
import { MemoryScope } from './memory-scope.js';
import { MemoryReference } from '../references/memory-reference.js';
import { RelatedMemory } from '../references/related-memory.js';
import { ExternalReference } from '../references/external-reference.js';
import { RetentionPolicy } from '../retention/retention-policy.js';
import { ExpirationPolicy } from '../retention/expiration-policy.js';
import { ArchivalPolicy } from '../retention/archival-policy.js';
import { MemoryGovernance } from '../governance/memory-governance.js';

export interface MemoryRecord {
  readonly id: MemoryId;
  readonly tenantId: string;
  readonly title: string;
  readonly summary: string;
  readonly content: string; // The core information content
  
  readonly owner: MemoryOwner;
  readonly type: MemoryType;
  readonly category: MemoryCategory;
  readonly priority: MemoryPriority;
  readonly sensitivity: MemorySensitivity;
  readonly scope: MemoryScope;
  
  readonly tags: string[];
  readonly customAttributes: Record<string, string>;
  
  readonly references: MemoryReference[];
  readonly relatedMemories: RelatedMemory[];
  readonly externalReferences: ExternalReference[];
  
  readonly retentionPolicy?: RetentionPolicy;
  readonly expirationPolicy?: ExpirationPolicy;
  readonly archivalPolicy?: ArchivalPolicy;
  readonly governance?: MemoryGovernance;
  
  readonly isArchived: boolean;
  readonly version: number;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
