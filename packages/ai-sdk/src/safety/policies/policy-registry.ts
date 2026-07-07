import { SafetyPolicy } from './safety-policy.js';
import { SafetyPolicyDescriptor } from './policy-descriptor.js';

export class SafetyPolicyRegistry {
  private readonly policies = new Map<string, { policy: SafetyPolicy; descriptor: SafetyPolicyDescriptor }>();

  public register(policy: SafetyPolicy, descriptor: SafetyPolicyDescriptor): void {
    if (this.policies.has(policy.id)) {
      throw new Error(`Safety policy with ID "${policy.id}" is already registered.`);
    }
    this.policies.set(policy.id, { policy, descriptor });
  }

  public get(id: string): SafetyPolicy | undefined {
    return this.policies.get(id)?.policy;
  }

  public getDescriptor(id: string): SafetyPolicyDescriptor | undefined {
    return this.policies.get(id)?.descriptor;
  }

  public remove(id: string): boolean {
    return this.policies.delete(id);
  }

  public list(): SafetyPolicy[] {
    return Array.from(this.policies.values()).map(entry => entry.policy);
  }

  public listDescriptors(): SafetyPolicyDescriptor[] {
    return Array.from(this.policies.values()).map(entry => entry.descriptor);
  }

  public clear(): void {
    this.policies.clear();
  }
}
