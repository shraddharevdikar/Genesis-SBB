import { Policy } from '../entities/policy.entity.js';
import { PolicyId } from '../value-objects/policy-id.value-object.js';

export interface IPolicyRepository {
  findById(id: PolicyId): Promise<Policy | null>;
  findByName(name: string): Promise<Policy | null>;
  save(policy: Policy): Promise<void>;
  delete(id: PolicyId): Promise<void>;
}
