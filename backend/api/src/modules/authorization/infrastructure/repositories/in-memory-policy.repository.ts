import { Injectable } from '@nestjs/common';
import { IPolicyRepository } from '../../domain/repositories/policy-repository.interface.js';
import { Policy } from '../../domain/entities/policy.entity.js';
import { PolicyId } from '../../domain/value-objects/policy-id.value-object.js';

@Injectable()
export class InMemoryPolicyRepository implements IPolicyRepository {
  private readonly storage = new Map<string, Policy>();

  public async findById(id: PolicyId): Promise<Policy | null> {
    const policy = this.storage.get(id.getValue());
    return policy || null;
  }

  public async findByName(name: string): Promise<Policy | null> {
    for (const policy of this.storage.values()) {
      if (policy.getName().toLowerCase() === name.toLowerCase()) {
        return policy;
      }
    }
    return null;
  }

  public async save(policy: Policy): Promise<void> {
    this.storage.set(policy.getId().getValue(), policy);
  }

  public async delete(id: PolicyId): Promise<void> {
    this.storage.delete(id.getValue());
  }
}
