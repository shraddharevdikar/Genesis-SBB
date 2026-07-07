import { AggregateRoot } from '@sbb/shared';
import { PolicyId } from '../value-objects/policy-id.value-object.js';
import { PolicyCreatedEvent } from '../events/policy-created.event.js';

export enum PolicyEffect {
  Allow = 'Allow',
  Deny = 'Deny',
}

export interface PolicyCondition {
  readonly key: string;
  readonly operator: 'StringEquals' | 'StringLike' | 'NumericEquals' | 'BoolEquals';
  readonly value: string | number | boolean;
}

export class Policy extends AggregateRoot {
  private readonly id: PolicyId;
  private readonly name: string;
  private readonly effect: PolicyEffect;
  private readonly resources: string[];
  private readonly actions: string[];
  private readonly conditions: PolicyCondition[];

  constructor(
    id: PolicyId,
    name: string,
    effect: PolicyEffect,
    resources: string[],
    actions: string[],
    conditions: PolicyCondition[] = []
  ) {
    super();
    if (!name || name.trim().length === 0) {
      throw new Error('Policy name cannot be empty');
    }
    this.id = id;
    this.name = name;
    this.effect = effect;
    this.resources = resources;
    this.actions = actions;
    this.conditions = conditions;
  }

  public static create(
    id: PolicyId,
    name: string,
    effect: PolicyEffect,
    resources: string[],
    actions: string[],
    conditions: PolicyCondition[] = []
  ): Policy {
    const policy = new Policy(id, name, effect, resources, actions, conditions);
    policy.addDomainEvent(new PolicyCreatedEvent(id.getValue(), name, effect));
    return policy;
  }

  public getId(): PolicyId {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getEffect(): PolicyEffect {
    return this.effect;
  }

  public getResources(): string[] {
    return [...this.resources];
  }

  public getActions(): string[] {
    return [...this.actions];
  }

  public getConditions(): PolicyCondition[] {
    return [...this.conditions];
  }
}
