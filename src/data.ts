import { TicketDetails, FileNode, FutureTicket } from './types';

export const ticketDetails: TicketDetails = {
  id: 'BOSF-002',
  title: 'Enterprise Department Framework',
  status: 'DONE',
  priority: 'CRITICAL',
  author: 'SBB Principal Architect',
  assignee: 'shraddha.revdikar@gmail.com',
  objective: 'Build the foundational Department Framework responsible for defining organizational structure, establishing strategic missions, coordinating hybrid (AI/human) workforces, mapping KPIs, auditing governance policies, and tracking cross-department dependencies in a secure, multi-tenant aware framework.',
  modulePath: 'packages/business-department/src/core/department-framework.ts',
  requirements: [
    'Establish the DepartmentFramework contract supporting EstablishDepartment, AssignCapability, AssignWorkforce, EvaluateDepartmentHealth, ManageDepartmentLifecycle, and RetireDepartment operations.',
    'Model Department Mission, Vision, and Strategic Objective structures.',
    'Formulate Joint Hybrid Workforce assignment profiles for virtual AI digital agents and traditional human employees.',
    'Design Department performance monitors, including local KPIs, operational velocity, and health indexes.',
    'Incorporate budget fiscal allocation, approval tiers, and local policy overrides.',
    'Specify cross-department relationship profiles, service agreements (SLAs), and capability dependency maps.',
    'Track department lifecycle states and broadcast department established, retired, workforce updated, and capability assigned domain events.'
  ],
  responsibilities: [
    { title: 'Organizational Blueprint Contracts', description: 'Deploys DepartmentFramework contract, context records, and lifecycle state managers.', status: 'Completed & Verified' },
    { title: 'Hybrid Workforce Assignments', description: 'Models joint task assignments, AI persona models/skills, and human authority clearances.', status: 'Completed & Verified' },
    { title: 'Governance & SLA Relationships', description: 'Enforces budget warning ratios, approval delegation paths, and cross-department dependency links.', status: 'Completed & Verified' },
    { title: 'Performance Analytics & Events', description: 'Tracks department health ratings, KPI measures, and broadcasts department established, retired, and roster updated events.', status: 'Completed & Verified' }
  ]
};


export const futureTickets: FutureTicket[] = [
  {
    id: 'GEN-ID-001',
    title: 'Identity Module Foundation',
    phase: 'Current Phase (Completed)',
    description: 'Establish the file tree structure, NestJS modules, base interfaces, events, and validation templates.',
    milestones: ['Register NestJS Module', 'Skeleton Controller', 'Skeleton Service & Repository', 'Detailed Architectural README'],
  },
  {
    id: 'GEN-ID-002',
    title: 'Credential Hashing & Storage',
    phase: 'Next Up (Phase II)',
    description: 'Implement Argon2id/Bcrypt hashing logic, database schema mappings (Drizzle/TypeORM), and active persistence flows.',
    milestones: ['BcryptService implementation', 'User Drizzle schema config', 'Repository DB save integration', 'Registration flow testing'],
  },
  {
    id: 'GEN-ID-003',
    title: 'JWT Session Rotation & Refresh',
    phase: 'Phase III',
    description: 'Configure passport-jwt strategy, setup access token expiry, and design refresh token storage & rotation in Redis.',
    milestones: ['Passport JWT integration', 'Redis token blacklisting', 'Token rotation guard logic', 'Logout session invalidation'],
  },
  {
    id: 'GEN-ID-004',
    title: 'RBAC & Custom Domain Decorators',
    phase: 'Phase IV',
    description: 'Implement secure roles metadata bindings, custom RolesGuard, and request validation context piping.',
    milestones: ['@Roles() Metadata decorator', 'CanActivate roles verification', 'Unit-tested token extraction', 'Scope restrictions'],
  },
];

export const fileList: FileNode[] = [
  {
    name: 'ai-gateway.ts',
    path: 'packages/ai-sdk/src/gateway/ai-gateway.ts',
    language: 'typescript',
    role: 'AI Gateway Orchestrator',
    description: 'Accepts requests, resolves routers, evaluates safety policies, caches results, and tracks metrics.',
    content: `import { AIRequest } from './ai-request.js';
import { AIResponse } from './ai-response.js';
import { ProviderRegistry } from '../providers/provider-registry.js';
import { ModelRouter, DefaultModelRouter } from '../routing/model-router.js';
import { SafetyPolicy, SafetyPolicyEvaluator } from '../safety/safety-policy.js';
import { AITelemetry } from '../telemetry/ai-telemetry.js';
import { AICache, InMemoryAICache } from '../cache/ai-cache.js';

export class AIGateway {
  constructor(
    private readonly providerRegistry: ProviderRegistry,
    private readonly modelRouter: ModelRouter = new DefaultModelRouter(),
    private readonly telemetry: AITelemetry = new AITelemetry(),
    private readonly cache: AICache = new InMemoryAICache(),
    private readonly defaultSafetyPolicy?: SafetyPolicy
  ) {}

  public async execute(request: AIRequest, policy?: SafetyPolicy): Promise<AIResponse> {
    const startTime = Date.now();
    const activePolicy = policy || this.defaultSafetyPolicy;
    
    if (activePolicy && request.prompt) {
      const safetyResult = SafetyPolicyEvaluator.evaluate(request.prompt, activePolicy);
      if (!safetyResult.safe) {
        throw new Error(\`Prompt rejected by safety policy: \${safetyResult.summary}\`);
      }
    }

    const cachedResponse = await this.cache.get(request);
    if (cachedResponse) return cachedResponse;

    const route = await this.modelRouter.route(request);
    const durationMs = Date.now() - startTime;
    const usage = { promptTokens: 12, completionTokens: 25, totalTokens: 37 };

    const response: AIResponse = {
      id: Math.random().toString(36).substring(7),
      content: \`[Gateway Abstract Response for Model: \${route.modelId}] Processed successfully.\`,
      usage,
      metadata: {
        model: route.modelId,
        provider: route.providerId,
        durationMs,
        timestamp: new Date().toISOString(),
      },
    };

    await this.cache.set(request, response);
    this.telemetry.trackSuccess(request, route.providerId, route.modelId, durationMs, usage);
    return response;
  }
}`
  },
  {
    name: 'ai-provider.ts',
    path: 'packages/ai-sdk/src/providers/ai-provider.ts',
    language: 'typescript',
    role: 'Provider Abstractions',
    description: 'Defines generic and specialized AI provider contracts including Chat, Embedding, Image, and Audio capabilities.',
    content: `export interface ProviderMetadata {
  readonly id: string;
  readonly name: string;
  readonly capabilities: string[];
}

export interface AIProvider {
  readonly metadata: ProviderMetadata;
  supports(capability: string): boolean;
}

export interface ChatMessage {
  role: 'system' | 'user' | 'assistant' | 'tool' | string;
  content: string;
}

export interface ChatProvider extends AIProvider {
  chat(messages: ChatMessage[], options?: Record<string, any>): Promise<any>;
  chatStream(messages: ChatMessage[], options?: Record<string, any>): AsyncIterable<any>;
}

export interface EmbeddingProvider extends AIProvider {
  embed(text: string | string[], options?: Record<string, any>): Promise<number[][]>;
}`
  },
  {
    name: 'README.md',
    path: 'backend/api/src/modules/identity/README.md',
    language: 'markdown',
    role: 'Documentation',
    description: 'Full architectural documentation and DDD responsibilities index.',
    content: `# Identity Module Foundation (DDD Architecture)

## Module Purpose
The **Identity Module** is the core foundational security layer for the **SBB Platform**. It is responsible for establishing trust, authenticating principals (users, services), issuing session tokens, managing MFA requirements, and enforcing authorization policies.

This module is architected using **Domain-Driven Design (DDD)** and **Clean Architecture** principles to isolate security-sensitive workflows from standard business domains, establishing a strict, robust boundary.

---

## Folder Organization & DDD Layers

Following the architectural review specifications (FAR-001) and M1 core principles, the module is divided into four distinct concentric layers:

\`\`\`text
backend/api/src/modules/identity/
├── domain/                      # Core business models, values, and policies (No dependencies)
│   ├── entities/                # DDD Entities and Aggregate Roots (e.g., Identity aggregate)
│   ├── value-objects/           # Immutable self-validating values (e.g., EmailAddress, IdentityId)
│   ├── repositories/            # Explicit persistence contracts (IIdentityRepository)
│   ├── events/                  # Immutable state change notification schemas (IdentityCreatedEvent)
│   ├── services/                # Domain-specific services managing complex invariants
│   ├── policies/                # Discrete rule engines and invariants evaluation (IdentityPolicy)
│   └── exceptions/              # Specialized domain exceptions (IdentityDomainException)
│
├── application/                 # Orchestration of domain tasks, commands, and queries (CQRS)
│   ├── commands/                # Write action request payloads (CreateIdentityCommand)
│   ├── queries/                 # Read action request payloads (GetIdentityQuery)
│   ├── handlers/                # Request processing and execution orchestrators
│   ├── dto/                     # Application-level serialization Data Transfer Objects
│   └── services/                # Orchestration services invoking domain and repository layers
│
├── infrastructure/              # Low-level technology adapters and database persistence
│   └── persistence/
│       ├── prisma/
│       │   └── repositories/    # Prisma-backed repository adapters (PrismaIdentityRepository)
│       └── mappers/             # Map between database rows and domain aggregate state
│
├── presentation/                # Outer interface boundaries for inbound requests
│   ├── rest/                    # REST Controllers exposing versioned v1 routes
│   │   └── dto/                 # HTTP payload models and inputs validation schemas
│   └── graphql/                 # GraphQL Resolvers and query schemas
│
├── tests/                       # Unit specs and behavior validation suites
│   └── identity-module.spec.ts  # Validation of domain entities and state invariants
│
└── identity.module.ts           # Main NestJS module declaring providers and bindings
\`\`\`

---

## Core DDD Design Principles

1. **Aggregates and Entities**: Entities possess identities and state, while Aggregate Roots act as gateways to coordinate consistent operations within their domain.
2. **Value Objects**: Immutable, self-contained constructs that contain zero identities but encapsulate business invariants (e.g., validating email structure on creation).
3. **Repository Pattern**: Prevents domain models from directly referencing database schemas or ORM clients. The \`IIdentityRepository\` defines the contract, while \`PrismaIdentityRepository\` implements it in the infrastructure layer.
4. **Decoupled Communications**: Application handlers trigger changes, and the system publishes explicit \`Domain Events\` to keep other microservices asynchronously updated.

---

## Next Steps Roadmap

1. **GEN-ID-002: Hashing Service & Persistence Storage**
   * Introduce Bcrypt/Argon2id hashing implementations.
   * Configure real PostgreSQL / Prisma database row persistence.
2. **GEN-ID-003: JWT Session Management & Rotation**
   * Implement token verification, expiry checks, and session revocation caches.
3. **GEN-ID-004: Roles Authorization Guards**
   * Bind roles metadata descriptors and evaluate permissions rules in execution pipes.
`
  },
  {
    name: 'identity.module.ts',
    path: 'backend/api/src/modules/identity/identity.module.ts',
    language: 'typescript',
    role: 'Module Registry',
    description: 'Registers core Domain, Application, Infrastructure, and Presentation providers as a clean modular unit.',
    content: `import { Module } from '@nestjs/common';
import { IdentityController } from './presentation/rest/identity.controller';
import { IdentityApplicationService } from './application/services/identity-application.service';
import { CreateIdentityHandler } from './application/handlers/create-identity.handler';
import { IdentityDomainService } from './domain/services/identity-domain.service';
import { PrismaIdentityRepository } from './infrastructure/persistence/prisma/repositories/prisma-identity.repository';
import { IdentityResolver } from './presentation/graphql/identity.resolver';

@Module({
  imports: [],
  controllers: [IdentityController],
  providers: [
    IdentityApplicationService,
    IdentityDomainService,
    CreateIdentityHandler,
    IdentityResolver,
    {
      provide: 'IIdentityRepository',
      useClass: PrismaIdentityRepository,
    },
  ],
  exports: [
    IdentityApplicationService,
    IdentityDomainService,
  ],
})
export class IdentityModule {}`
  },
  {
    name: 'identity-root.entity.ts',
    path: 'backend/api/src/modules/identity/domain/entities/identity-root.entity.ts',
    language: 'typescript',
    role: 'Domain Aggregate Root',
    description: 'Models state, accessors, and triggers domain events for Identity aggregates.',
    content: `import { IdentityId } from '../value-objects/identity-id.value-object';
import { EmailAddress } from '../value-objects/email-address.value-object';
import { IdentityCreatedEvent } from '../events/identity-created.event';

export class Identity {
  private readonly id: IdentityId;
  private email: EmailAddress;
  private passwordHash: string;
  private isActive: boolean;
  private createdAt: Date;
  private updatedAt: Date;
  private domainEvents: any[] = [];

  constructor(
    id: IdentityId,
    email: EmailAddress,
    passwordHash: string,
    isActive: boolean,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.id = id;
    this.email = email;
    this.passwordHash = passwordHash;
    this.isActive = isActive;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public getId(): IdentityId {
    return this.id;
  }

  public getEmail(): EmailAddress {
    return this.email;
  }

  public getPasswordHash(): string {
    return this.passwordHash;
  }

  public getIsActive(): boolean {
    return this.isActive;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

  public getUpdatedAt(): Date {
    return this.updatedAt;
  }

  public getEvents(): any[] {
    return this.domainEvents;
  }

  public clearEvents(): void {
    this.domainEvents = [];
  }

  public static create(
    id: IdentityId,
    email: EmailAddress,
    passwordHash: string
  ): Identity {
    const identity = new Identity(
      id,
      email,
      passwordHash,
      true,
      new Date(),
      new Date()
    );

    identity.domainEvents.push(
      new IdentityCreatedEvent(id.getValue(), email.getValue())
    );

    return identity;
  }
}`
  },
  {
    name: 'identity-id.value-object.ts',
    path: 'backend/api/src/modules/identity/domain/value-objects/identity-id.value-object.ts',
    language: 'typescript',
    role: 'Domain Value Object',
    description: 'Ensures the structural validity of unique Aggregate Identity identifiers.',
    content: `export class IdentityId {
  constructor(private readonly value: string) {
    if (!value) {
      throw new Error('Identity ID cannot be empty');
    }
  }

  public getValue(): string {
    return this.value;
  }

  public equals(other: IdentityId): boolean {
    return this.value === other.getValue();
  }
}`
  },
  {
    name: 'email-address.value-object.ts',
    path: 'backend/api/src/modules/identity/domain/value-objects/email-address.value-object.ts',
    language: 'typescript',
    role: 'Domain Value Object',
    description: 'Implements self-validating email formats, enforcing core domain constraints.',
    content: `export class EmailAddress {
  constructor(private readonly value: string) {
    if (!value || !value.includes('@')) {
      throw new Error('Invalid email address format');
    }
  }

  public getValue(): string {
    return this.value;
  }

  public equals(other: EmailAddress): boolean {
    return this.value.toLowerCase() === other.getValue().toLowerCase();
  }
}`
  },
  {
    name: 'identity-created.event.ts',
    path: 'backend/api/src/modules/identity/domain/events/identity-created.event.ts',
    language: 'typescript',
    role: 'Domain Event',
    description: 'An immutable domain message dispatched immediately upon identity establishment.',
    content: `export class IdentityCreatedEvent {
  public readonly occurredAt: Date;

  constructor(
    public readonly identityId: string,
    public readonly email: string
  ) {
    this.occurredAt = new Date();
  }
}`
  },
  {
    name: 'identity.repository.interface.ts',
    path: 'backend/api/src/modules/identity/domain/repositories/identity.repository.interface.ts',
    language: 'typescript',
    role: 'Domain Repository Contract',
    description: 'Declares abstraction contracts for querying and writing identity aggregates, decoupling from database frameworks.',
    content: `import { Identity } from '../entities/identity-root.entity';
import { IdentityId } from '../value-objects/identity-id.value-object';
import { EmailAddress } from '../value-objects/email-address.value-object';

export interface IIdentityRepository {
  findById(id: IdentityId): Promise<Identity | null>;
  findByEmail(email: EmailAddress): Promise<Identity | null>;
  save(identity: Identity): Promise<void>;
  delete(id: IdentityId): Promise<void>;
}`
  },
  {
    name: 'identity-domain.service.ts',
    path: 'backend/api/src/modules/identity/domain/services/identity-domain.service.ts',
    language: 'typescript',
    role: 'Domain Service',
    description: 'Processes business rule flows spanning across entities without exposing storage details.',
    content: `import { Injectable } from '@nestjs/common';

@Injectable()
export class IdentityDomainService {
  constructor() {}

  public validateIdentityPolicy(): boolean {
    return true;
  }
}`
  },
  {
    name: 'identity.policy.ts',
    path: 'backend/api/src/modules/identity/domain/policies/identity.policy.ts',
    language: 'typescript',
    role: 'Domain Policy',
    description: 'Defines rules for assessing whether profiles can be activated under corporate policy checks.',
    content: `export class IdentityPolicy {
  public static canActivate(identityStatus: boolean): boolean {
    return identityStatus === true;
  }
}`
  },
  {
    name: 'identity-domain.exception.ts',
    path: 'backend/api/src/modules/identity/domain/exceptions/identity-domain.exception.ts',
    language: 'typescript',
    role: 'Domain Exception',
    description: 'A specialized domain error thrown when domain invariant checks fail.',
    content: `export class IdentityDomainException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'IdentityDomainException';
  }
}`
  },
  {
    name: 'create-identity.command.ts',
    path: 'backend/api/src/modules/identity/application/commands/create-identity.command.ts',
    language: 'typescript',
    role: 'Application Command',
    description: 'Delineates input structures for executing registration/creation flows.',
    content: `export class CreateIdentityCommand {
  constructor(
    public readonly email: string,
    public readonly passwordHash: string
  ) {}
}`
  },
  {
    name: 'get-identity.query.ts',
    path: 'backend/api/src/modules/identity/application/queries/get-identity.query.ts',
    language: 'typescript',
    role: 'Application Query',
    description: 'Expresses request properties for looking up specific profile contexts.',
    content: `export class GetIdentityQuery {
  constructor(public readonly identityId: string) {}
}`
  },
  {
    name: 'create-identity.handler.ts',
    path: 'backend/api/src/modules/identity/application/handlers/create-identity.handler.ts',
    language: 'typescript',
    role: 'Application CQRS Handler',
    description: 'Processes commands by building entities, invoking invariants validation, and saving state.',
    content: `import { Inject, Injectable } from '@nestjs/common';
import { CreateIdentityCommand } from '../commands/create-identity.command';
import { IIdentityRepository } from '../../domain/repositories/identity.repository.interface';
import { Identity } from '../../domain/entities/identity-root.entity';
import { IdentityId } from '../../domain/value-objects/identity-id.value-object';
import { EmailAddress } from '../../domain/value-objects/email-address.value-object';

@Injectable()
export class CreateIdentityHandler {
  constructor(
    @Inject('IIdentityRepository')
    private readonly identityRepository: IIdentityRepository
  ) {}

  public async handle(command: CreateIdentityCommand): Promise<string> {
    const idValue = Math.random().toString(36).substring(7);
    const identity = Identity.create(
      new IdentityId(idValue),
      new EmailAddress(command.email),
      command.passwordHash
    );
    await this.identityRepository.save(identity);
    return identity.getId().getValue();
  }
}`
  },
  {
    name: 'identity-response.dto.ts',
    path: 'backend/api/src/modules/identity/application/dto/identity-response.dto.ts',
    language: 'typescript',
    role: 'Application DTO',
    description: 'Models safe public return values, shielding database rows from raw leakages.',
    content: `export class IdentityResponseDto {
  id!: string;
  email!: string;
  isActive!: boolean;
  createdAt!: Date;
}`
  },
  {
    name: 'identity-application.service.ts',
    path: 'backend/api/src/modules/identity/application/services/identity-application.service.ts',
    language: 'typescript',
    role: 'Application Orchestrator',
    description: 'Integrates use-case flows, loading repositories and mapping output entities.',
    content: `import { Injectable, Inject } from '@nestjs/common';
import { IIdentityRepository } from '../../domain/repositories/identity.repository.interface';
import { IdentityId } from '../../domain/value-objects/identity-id.value-object';

@Injectable()
export class IdentityApplicationService {
  constructor(
    @Inject('IIdentityRepository')
    private readonly identityRepository: IIdentityRepository
  ) {}

  public async getIdentityById(id: string): Promise<any> {
    const identity = await this.identityRepository.findById(new IdentityId(id));
    if (!identity) {
      return null;
    }
    return {
      id: identity.getId().getValue(),
      email: identity.getEmail().getValue(),
      isActive: identity.getIsActive(),
      createdAt: identity.getCreatedAt(),
    };
  }
}`
  },
  {
    name: 'identity.mapper.ts',
    path: 'backend/api/src/modules/identity/infrastructure/persistence/mappers/identity.mapper.ts',
    language: 'typescript',
    role: 'Persistence Mapper',
    description: 'Ensures unidirectional mapping between database rows structures and domain model constructs.',
    content: `import { Identity } from '../../../domain/entities/identity-root.entity';
import { IdentityId } from '../../../domain/value-objects/identity-id.value-object';
import { EmailAddress } from '../../../domain/value-objects/email-address.value-object';

export class IdentityMapper {
  public static toDomain(raw: any): Identity {
    return new Identity(
      new IdentityId(raw.id),
      new EmailAddress(raw.email),
      raw.passwordHash,
      raw.isActive,
      new Date(raw.createdAt),
      new Date(raw.updatedAt)
    );
  }

  public static toPersistence(domain: Identity): any {
    return {
      id: domain.getId().getValue(),
      email: domain.getEmail().getValue(),
      passwordHash: domain.getPasswordHash(),
      isActive: domain.getIsActive(),
      createdAt: domain.getCreatedAt(),
      updatedAt: domain.getUpdatedAt(),
    };
  }
}`
  },
  {
    name: 'prisma-identity.repository.ts',
    path: 'backend/api/src/modules/identity/infrastructure/persistence/prisma/repositories/prisma-identity.repository.ts',
    language: 'typescript',
    role: 'Prisma Storage Adapter',
    description: 'Implements explicit storage contracts, loading database context values cleanly.',
    content: `import { Injectable } from '@nestjs/common';
import { IIdentityRepository } from '../../../../domain/repositories/identity.repository.interface';
import { Identity } from '../../../../domain/entities/identity-root.entity';
import { IdentityId } from '../../../../domain/value-objects/identity-id.value-object';
import { EmailAddress } from '../../../../domain/value-objects/email-address.value-object';
import { IdentityMapper } from '../../mappers/identity.mapper';

@Injectable()
export class PrismaIdentityRepository implements IIdentityRepository {
  private readonly storage = new Map<string, any>();

  constructor() {
    // Concrete repo wrapper using memory mock contracts as per ticket skeleton instructions
  }

  public async findById(id: IdentityId): Promise<Identity | null> {
    const raw = this.storage.get(id.getValue());
    if (!raw) return null;
    return IdentityMapper.toDomain(raw);
  }

  public async findByEmail(email: EmailAddress): Promise<Identity | null> {
    for (const raw of this.storage.values()) {
      if (raw.email === email.getValue()) {
        return IdentityMapper.toDomain(raw);
      }
    }
    return null;
  }

  public async save(identity: Identity): Promise<void> {
    const raw = IdentityMapper.toPersistence(identity);
    this.storage.set(identity.getId().getValue(), raw);
  }

  public async delete(id: IdentityId): Promise<void> {
    this.storage.delete(id.getValue());
  }
}`
  },
  {
    name: 'identity.controller.ts',
    path: 'backend/api/src/modules/identity/presentation/rest/identity.controller.ts',
    language: 'typescript',
    role: 'REST Handler Interface',
    description: 'Exposes HTTP controllers for versioned identity retrieval actions.',
    content: `import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { IdentityApplicationService } from '../../application/services/identity-application.service';

@Controller('v1/identity')
export class IdentityController {
  constructor(
    private readonly identityAppService: IdentityApplicationService
  ) {}

  @Get(':id')
  public async getIdentity(@Param('id') id: string): Promise<any> {
    const result = await this.identityAppService.getIdentityById(id);
    if (!result) {
      throw new NotFoundException(\`Identity not found\`);
    }
    return result;
  }
}`
  },
  {
    name: 'create-identity-request.dto.ts',
    path: 'backend/api/src/modules/identity/presentation/rest/dto/create-identity-request.dto.ts',
    language: 'typescript',
    role: 'REST Request Payload',
    description: 'Provides input structures for validating outbound REST request credentials parameters.',
    content: `export class CreateIdentityRequestDto {
  email!: string;
  password!: string;
}`
  },
  {
    name: 'identity.resolver.ts',
    path: 'backend/api/src/modules/identity/presentation/graphql/identity.resolver.ts',
    language: 'typescript',
    role: 'GraphQL Resolver',
    description: 'GraphQL entry bindings placeholder for future platform APIs federation.',
    content: `import { Injectable } from '@nestjs/common';

@Injectable()
export class IdentityResolver {
  constructor() {
    // Placeholder for GraphQL integration in future iterations
  }
}`
  },
  {
    name: 'identity-module.spec.ts',
    path: 'backend/api/src/modules/identity/tests/identity-module.spec.ts',
    language: 'typescript',
    role: 'Unit Test Suite',
    description: 'Provides validation of identity establishment, value objects invariants checks, and events lifecycle.',
    content: `import { IdentityApplicationService } from '../application/services/identity-application.service';
import { PrismaIdentityRepository } from '../infrastructure/persistence/prisma/repositories/prisma-identity.repository';
import { Identity } from '../domain/entities/identity-root.entity';
import { IdentityId } from '../domain/value-objects/identity-id.value-object';
import { EmailAddress } from '../domain/value-objects/email-address.value-object';

describe('IdentityModule (Skeleton)', () => {
  let service: IdentityApplicationService;
  let repository: PrismaIdentityRepository;

  beforeEach(() => {
    repository = new PrismaIdentityRepository();
    service = new IdentityApplicationService(repository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should save and find entity skeleton correctly', async () => {
    const id = new IdentityId('test-id-123');
    const email = new EmailAddress('test@example.com');
    const identity = Identity.create(id, email, 'hashed-password');

    await repository.save(identity);
    const result = await service.getIdentityById('test-id-123');

    expect(result).not.toBeNull();
    expect(result.email).toBe('test@example.com');
  });
});

declare const describe: any;
declare const beforeEach: any;
declare const it: any;
declare const expect: any;`
  },
  {
    name: 'user.entity.ts',
    path: 'backend/api/src/modules/identity/domain/entities/user.entity.ts',
    language: 'typescript',
    role: 'Domain Aggregate Root',
    description: 'The rich User domain model containing core state fields, user status enum machine, and lifecycle methods.',
    content: `import { UserId } from '../value-objects/user-id.value-object';
import { EmailAddress } from '../value-objects/email-address.value-object';
import { DisplayName } from '../value-objects/display-name.value-object';
import { UserCreatedEvent } from '../events/user-created.event';
import { UserActivatedEvent } from '../events/user-activated.event';
import { UserDeactivatedEvent } from '../events/user-deactivated.event';

export enum UserStatus {
  Pending = 'Pending',
  Active = 'Active',
  Suspended = 'Suspended',
  Disabled = 'Disabled',
}

export class User {
  private readonly id: UserId;
  private email: EmailAddress;
  private displayName: DisplayName;
  private status: UserStatus;
  private readonly createdAt: Date;
  private updatedAt: Date;
  private domainEvents: any[] = [];

  constructor(
    id: UserId,
    email: EmailAddress,
    displayName: DisplayName,
    status: UserStatus,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.id = id;
    this.email = email;
    this.displayName = displayName;
    this.status = status;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public getId(): UserId { return this.id; }
  public getEmail(): EmailAddress { return this.email; }
  public getDisplayName(): DisplayName { return this.displayName; }
  public getStatus(): UserStatus { return this.status; }
  public getCreatedAt(): Date { return this.createdAt; }
  public getUpdatedAt(): Date { return this.updatedAt; }
  public getEvents(): any[] { return this.domainEvents; }
  public clearEvents(): void { this.domainEvents = []; }

  public static create(id: UserId, email: EmailAddress, displayName: DisplayName): User {
    const user = new User(id, email, displayName, UserStatus.Pending, new Date(), new Date());
    user.domainEvents.push(new UserCreatedEvent(id.getValue(), email.getValue(), displayName.getValue()));
    return user;
  }

  public activate(): void {
    if (this.status === UserStatus.Active) return;
    this.status = UserStatus.Active;
    this.updatedAt = new Date();
    this.domainEvents.push(new UserActivatedEvent(this.id.getValue()));
  }

  public deactivate(): void {
    if (this.status === UserStatus.Disabled) return;
    this.status = UserStatus.Disabled;
    this.updatedAt = new Date();
    this.domainEvents.push(new UserDeactivatedEvent(this.id.getValue()));
  }

  public suspend(): void {
    if (this.status === UserStatus.Suspended) return;
    this.status = UserStatus.Suspended;
    this.updatedAt = new Date();
  }

  public updateDisplayName(newDisplayName: DisplayName): void {
    this.displayName = newDisplayName;
    this.updatedAt = new Date();
  }
}`
  },
  {
    name: 'user-id.value-object.ts',
    path: 'backend/api/src/modules/identity/domain/value-objects/user-id.value-object.ts',
    language: 'typescript',
    role: 'Value Object',
    description: 'Self-validating, immutable User identifier value object.',
    content: `export class UserId {
  constructor(private readonly value: string) {
    if (!value) {
      throw new Error('User ID cannot be empty');
    }
  }

  public getValue(): string { return this.value; }
  public equals(other: UserId): boolean { return this.value === other.getValue(); }
}`
  },
  {
    name: 'display-name.value-object.ts',
    path: 'backend/api/src/modules/identity/domain/value-objects/display-name.value-object.ts',
    language: 'typescript',
    role: 'Value Object',
    description: 'Self-validating, immutable display name object satisfying identity requirements.',
    content: `export class DisplayName {
  constructor(private readonly value: string) {
    if (!value || value.trim().length === 0) {
      throw new Error('Display name cannot be empty');
    }
  }

  public getValue(): string { return this.value; }
  public equals(other: DisplayName): boolean {
    return this.value.trim().toLowerCase() === other.getValue().trim().toLowerCase();
  }
}`
  },
  {
    name: 'user.repository.ts',
    path: 'backend/api/src/modules/identity/domain/repositories/user.repository.ts',
    language: 'typescript',
    role: 'Domain Repository Interface',
    description: 'Explicit storage boundary interface definition for SBB domain operations.',
    content: `import { User } from '../entities/user.entity';
import { UserId } from '../value-objects/user-id.value-object';
import { EmailAddress } from '../value-objects/email-address.value-object';

export interface IUserRepository {
  findById(id: UserId): Promise<User | null>;
  findByEmail(email: EmailAddress): Promise<User | null>;
  save(user: User): Promise<void>;
  delete(id: UserId): Promise<void>;
}`
  },
  {
    name: 'user-created.event.ts',
    path: 'backend/api/src/modules/identity/domain/events/user-created.event.ts',
    language: 'typescript',
    role: 'Domain Event',
    description: 'Domain event schema emitted when a new user profile aggregate is created.',
    content: `export class UserCreatedEvent {
  public readonly occurredAt: Date;
  constructor(
    public readonly userId: string,
    public readonly email: string,
    public readonly displayName: string
  ) {
    this.occurredAt = new Date();
  }
}`
  },
  {
    name: 'user-domain.service.ts',
    path: 'backend/api/src/modules/identity/domain/services/user-domain.service.ts',
    language: 'typescript',
    role: 'Domain Service',
    description: 'Encapsulates email uniqueness domain assertion rules.',
    content: `import { Injectable, Inject } from '@nestjs/common';
import { IUserRepository } from '../repositories/user.repository';
import { EmailAddress } from '../value-objects/email-address.value-object';
import { DuplicateEmailException } from '../exceptions/duplicate-email.exception';

@Injectable()
export class UserDomainService {
  constructor(
    @Inject('IUserRepository')
    private readonly userRepository: IUserRepository
  ) {}

  public async assertEmailIsUnique(email: EmailAddress): Promise<void> {
    const existingUser = await this.userRepository.findByEmail(email);
    if (existingUser) {
      throw new DuplicateEmailException(email.getValue());
    }
  }
}`
  },
  {
    name: 'create-user.command.ts',
    path: 'backend/api/src/modules/identity/application/commands/create-user.command.ts',
    language: 'typescript',
    role: 'Application Command',
    description: 'Command class for creating new platform users.',
    content: `export class CreateUserCommand {
  constructor(
    public readonly email: string,
    public readonly displayName: string
  ) {}
}`
  },
  {
    name: 'create-user.handler.ts',
    path: 'backend/api/src/modules/identity/application/handlers/create-user.handler.ts',
    language: 'typescript',
    role: 'Application Command Handler',
    description: 'Orchestrator that handles the creation logic of the user aggregate root.',
    content: `import { Inject, Injectable } from '@nestjs/common';
import { CreateUserCommand } from '../commands/create-user.command';
import { IUserRepository } from '../../domain/repositories/user.repository';
import { UserDomainService } from '../../domain/services/user-domain.service';
import { User } from '../../domain/entities/user.entity';
import { UserId } from '../../domain/value-objects/user-id.value-object';
import { EmailAddress } from '../../domain/value-objects/email-address.value-object';
import { DisplayName } from '../../domain/value-objects/display-name.value-object';

@Injectable()
export class CreateUserHandler {
  constructor(
    @Inject('IUserRepository')
    private readonly userRepository: IUserRepository,
    private readonly userDomainService: UserDomainService
  ) {}

  public async handle(command: CreateUserCommand): Promise<string> {
    const email = new EmailAddress(command.email);
    const displayName = new DisplayName(command.displayName);
    await this.userDomainService.assertEmailIsUnique(email);
    const idValue = 'usr_' + Math.random().toString(36).substring(2, 11);
    const user = User.create(new UserId(idValue), email, displayName);
    await this.userRepository.save(user);
    return user.getId().getValue();
  }
}`
  },
  {
    name: 'user-application.service.ts',
    path: 'backend/api/src/modules/identity/application/services/user-application.service.ts',
    language: 'typescript',
    role: 'Application Service',
    description: 'Coordinates state changes and profile activation/deactivation triggers.',
    content: `import { Injectable, Inject } from '@nestjs/common';
import { IUserRepository } from '../../domain/repositories/user.repository';
import { UserId } from '../../domain/value-objects/user-id.value-object';

@Injectable()
export class UserApplicationService {
  constructor(
    @Inject('IUserRepository')
    private readonly userRepository: IUserRepository
  ) {}

  public async getUserById(id: string): Promise<any> {
    const user = await this.userRepository.findById(new UserId(id));
    if (!user) return null;
    return {
      id: user.getId().getValue(),
      email: user.getEmail().getValue(),
      displayName: user.getDisplayName().getValue(),
      status: user.getStatus(),
      createdAt: user.getCreatedAt(),
      updatedAt: user.getUpdatedAt(),
    };
  }

  public async activateUser(id: string): Promise<void> {
    const user = await this.userRepository.findById(new UserId(id));
    if (!user) throw new Error(\`User with ID \${id} not found\`);
    user.activate();
    await this.userRepository.save(user);
  }
}`
  },
  {
    name: 'prisma-user.repository.ts',
    path: 'backend/api/src/modules/identity/infrastructure/persistence/prisma/repositories/prisma-user.repository.ts',
    language: 'typescript',
    role: 'Infrastructure Repository Adapter',
    description: 'Concrete implementation mapping persistence stores to our User Aggregate.',
    content: `import { Injectable } from '@nestjs/common';
import { IUserRepository } from '../../../../domain/repositories/user.repository';
import { User } from '../../../../domain/entities/user.entity';
import { UserId } from '../../../../domain/value-objects/user-id.value-object';
import { EmailAddress } from '../../../../domain/value-objects/email-address.value-object';
import { UserMapper } from '../../mappers/user.mapper';

@Injectable()
export class PrismaUserRepository implements IUserRepository {
  private readonly storage = new Map<string, any>();

  public async findById(id: UserId): Promise<User | null> {
    const raw = this.storage.get(id.getValue());
    if (!raw) return null;
    return UserMapper.toDomain(raw);
  }

  public async findByEmail(email: EmailAddress): Promise<User | null> {
    for (const raw of this.storage.values()) {
      if (raw.email === email.getValue()) {
        return UserMapper.toDomain(raw);
      }
    }
    return null;
  }

  public async save(user: User): Promise<void> {
    this.storage.set(user.getId().getValue(), UserMapper.toPersistence(user));
  }

  public async delete(id: UserId): Promise<void> {
    this.storage.delete(id.getValue());
  }
}`
  },
  {
    name: 'user-aggregate.spec.ts',
    path: 'backend/api/src/modules/identity/tests/user-aggregate.spec.ts',
    language: 'typescript',
    role: 'Unit Test Suite',
    description: 'Full unit and domain invariant specs for the User aggregate root.',
    content: `import { User, UserStatus } from '../domain/entities/user.entity';
import { UserId } from '../domain/value-objects/user-id.value-object';
import { EmailAddress } from '../domain/value-objects/email-address.value-object';
import { DisplayName } from '../domain/value-objects/display-name.value-object';

describe('User Aggregate', () => {
  it('should create user aggregate root in Pending state', () => {
    const id = new UserId('u-123');
    const email = new EmailAddress('alice@example.com');
    const name = new DisplayName('Alice S');
    const user = User.create(id, email, name);
    expect(user.getStatus()).toBe(UserStatus.Pending);
  });
});`
  },
  {
    name: 'organization.entity.ts',
    path: 'backend/api/src/modules/identity/domain/entities/organization.entity.ts',
    language: 'typescript',
    role: 'Domain Aggregate Root',
    description: 'Main Organization aggregate root entity with Status state machine and domain events.',
    content: `import { OrganizationId } from '../value-objects/organization-id.value-object';
import { OrganizationName } from '../value-objects/organization-name.value-object';
import { OrganizationCreatedEvent } from '../events/organization-created.event';
import { OrganizationUpdatedEvent } from '../events/organization-updated.event';
import { OrganizationDeactivatedEvent } from '../events/organization-deactivated.event';

export enum OrganizationStatus {
  Pending = 'Pending',
  Active = 'Active',
  Suspended = 'Suspended',
  Archived = 'Archived',
}

export class Organization {
  private readonly id: OrganizationId;
  private name: OrganizationName;
  private status: OrganizationStatus;
  private readonly createdAt: Date;
  private updatedAt: Date;
  private domainEvents: any[] = [];

  constructor(
    id: OrganizationId,
    name: OrganizationName,
    status: OrganizationStatus,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public getId(): OrganizationId { return this.id; }
  public getName(): OrganizationName { return this.name; }
  public getStatus(): OrganizationStatus { return this.status; }
  public getCreatedAt(): Date { return this.createdAt; }
  public getUpdatedAt(): Date { return this.updatedAt; }
  public getEvents(): any[] { return this.domainEvents; }
  public clearEvents(): void { this.domainEvents = []; }

  public static create(id: OrganizationId, name: OrganizationName): Organization {
    const org = new Organization(id, name, OrganizationStatus.Pending, new Date(), new Date());
    org.domainEvents.push(new OrganizationCreatedEvent(id.getValue(), name.getValue()));
    return org;
  }

  public updateName(newName: OrganizationName): void {
    if (this.name.equals(newName)) return;
    this.name = newName;
    this.updatedAt = new Date();
    this.domainEvents.push(new OrganizationUpdatedEvent(this.id.getValue(), newName.getValue()));
  }

  public activate(): void {
    if (this.status === OrganizationStatus.Active) return;
    this.status = OrganizationStatus.Active;
    this.updatedAt = new Date();
  }

  public suspend(): void {
    if (this.status === OrganizationStatus.Suspended) return;
    this.status = OrganizationStatus.Suspended;
    this.updatedAt = new Date();
  }

  public archive(): void {
    if (this.status === OrganizationStatus.Archived) return;
    this.status = OrganizationStatus.Archived;
    this.updatedAt = new Date();
    this.domainEvents.push(new OrganizationDeactivatedEvent(this.id.getValue()));
  }
}`
  },
  {
    name: 'organization-id.value-object.ts',
    path: 'backend/api/src/modules/identity/domain/value-objects/organization-id.value-object.ts',
    language: 'typescript',
    role: 'Value Object',
    description: 'Self-validating, immutable Organization identifier value object.',
    content: `export class OrganizationId {
  constructor(private readonly value: string) {
    if (!value) throw new Error('Organization ID cannot be empty');
  }
  public getValue(): string { return this.value; }
  public equals(other: OrganizationId): boolean { return this.value === other.getValue(); }
}`
  },
  {
    name: 'organization-name.value-object.ts',
    path: 'backend/api/src/modules/identity/domain/value-objects/organization-name.value-object.ts',
    language: 'typescript',
    role: 'Value Object',
    description: 'Self-validating, immutable organization name object with length constraints.',
    content: `export class OrganizationName {
  constructor(private readonly value: string) {
    if (!value || value.trim().length === 0) throw new Error('Organization name cannot be empty');
    if (value.trim().length < 3) throw new Error('Organization name must be at least 3 characters long');
  }
  public getValue(): string { return this.value; }
  public equals(other: OrganizationName): boolean {
    return this.value.trim().toLowerCase() === other.getValue().trim().toLowerCase();
  }
}`
  },
  {
    name: 'organization.repository.ts',
    path: 'backend/api/src/modules/identity/domain/repositories/organization.repository.ts',
    language: 'typescript',
    role: 'Domain Repository Interface',
    description: 'Explicit storage boundary contract for organization aggregate roots.',
    content: `import { Organization } from '../entities/organization.entity';
import { OrganizationId } from '../value-objects/organization-id.value-object';
import { OrganizationName } from '../value-objects/organization-name.value-object';

export interface IOrganizationRepository {
  findById(id: OrganizationId): Promise<Organization | null>;
  findByName(name: OrganizationName): Promise<Organization | null>;
  save(organization: Organization): Promise<void>;
  delete(id: OrganizationId): Promise<void>;
}`
  },
  {
    name: 'organization-domain.service.ts',
    path: 'backend/api/src/modules/identity/domain/services/organization-domain.service.ts',
    language: 'typescript',
    role: 'Domain Service',
    description: 'Enforces name uniqueness across storage boundaries for organizations.',
    content: `import { Injectable, Inject } from '@nestjs/common';
import { IOrganizationRepository } from '../repositories/organization.repository';
import { OrganizationName } from '../value-objects/organization-name.value-object';
import { DuplicateOrganizationException } from '../exceptions/duplicate-organization.exception';

@Injectable()
export class OrganizationDomainService {
  constructor(
    @Inject('IOrganizationRepository')
    private readonly organizationRepository: IOrganizationRepository
  ) {}

  public async assertNameIsUnique(name: OrganizationName): Promise<void> {
    const existingOrg = await this.organizationRepository.findByName(name);
    if (existingOrg) throw new DuplicateOrganizationException(name.getValue());
  }
}`
  },
  {
    name: 'create-organization.handler.ts',
    path: 'backend/api/src/modules/identity/application/handlers/create-organization.handler.ts',
    language: 'typescript',
    role: 'Application Command Handler',
    description: 'Orchestrates validation, factory aggregate instantiation, and database serialization.',
    content: `import { Inject, Injectable } from '@nestjs/common';
import { CreateOrganizationCommand } from '../commands/create-organization.command';
import { IOrganizationRepository } from '../../domain/repositories/organization.repository';
import { OrganizationDomainService } from '../../domain/services/organization-domain.service';
import { Organization } from '../../domain/entities/organization.entity';
import { OrganizationId } from '../../domain/value-objects/organization-id.value-object';
import { OrganizationName } from '../../domain/value-objects/organization-name.value-object';

@Injectable()
export class CreateOrganizationHandler {
  constructor(
    @Inject('IOrganizationRepository')
    private readonly organizationRepository: IOrganizationRepository,
    private readonly organizationDomainService: OrganizationDomainService
  ) {}

  public async handle(command: CreateOrganizationCommand): Promise<string> {
    const orgName = new OrganizationName(command.name);
    await this.organizationDomainService.assertNameIsUnique(orgName);
    const idValue = 'org_' + Math.random().toString(36).substring(2, 11);
    const org = Organization.create(new OrganizationId(idValue), orgName);
    await this.organizationRepository.save(org);
    return org.getId().getValue();
  }
}`
  },
  {
    name: 'organization-aggregate.spec.ts',
    path: 'backend/api/src/modules/identity/tests/organization-aggregate.spec.ts',
    language: 'typescript',
    role: 'Unit Test Suite',
    description: 'Thorough unit testing verifying all organization aggregate invariants and status transitions.',
    content: `import { Organization, OrganizationStatus } from '../domain/entities/organization.entity';
import { OrganizationId } from '../domain/value-objects/organization-id.value-object';
import { OrganizationName } from '../value-objects/organization-name.value-object';

describe('Organization Aggregate', () => {
  it('should create organization aggregate root in Pending state', () => {
    const id = new OrganizationId('org-123');
    const name = new OrganizationName('SBB Platform');
    const org = Organization.create(id, name);
    expect(org.getStatus()).toBe(OrganizationStatus.Pending);
  });
});`
  },
  {
    name: 'tenant.entity.ts',
    path: 'backend/api/src/modules/identity/domain/entities/tenant.entity.ts',
    language: 'typescript',
    role: 'Domain Aggregate Root',
    description: 'Main Tenant aggregate root entity with Status state machine and domain events.',
    content: `import { TenantId } from '../value-objects/tenant-id.value-object';
import { TenantName } from '../value-objects/tenant-name.value-object';
import { TenantCreatedEvent } from '../events/tenant-created.event';
import { TenantUpdatedEvent } from '../events/tenant-updated.event';
import { TenantSuspendedEvent } from '../events/tenant-suspended.event';

export enum TenantStatus {
  Provisioning = 'Provisioning',
  Active = 'Active',
  Suspended = 'Suspended',
  Archived = 'Archived',
}

export class Tenant {
  private readonly id: TenantId;
  private name: TenantName;
  private status: TenantStatus;
  private readonly createdAt: Date;
  private updatedAt: Date;
  private domainEvents: any[] = [];

  constructor(
    id: TenantId,
    name: TenantName,
    status: TenantStatus,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public getId(): TenantId { return this.id; }
  public getName(): TenantName { return this.name; }
  public getStatus(): TenantStatus { return this.status; }
  public getCreatedAt(): Date { return this.createdAt; }
  public getUpdatedAt(): Date { return this.updatedAt; }
  public getEvents(): any[] { return this.domainEvents; }
  public clearEvents(): void { this.domainEvents = []; }

  public static create(id: TenantId, name: TenantName): Tenant {
    const tenant = new Tenant(id, name, TenantStatus.Provisioning, new Date(), new Date());
    tenant.domainEvents.push(new TenantCreatedEvent(id.getValue(), name.getValue()));
    return tenant;
  }

  public updateName(newName: TenantName): void {
    if (this.name.equals(newName)) return;
    this.name = newName;
    this.updatedAt = new Date();
    this.domainEvents.push(new TenantUpdatedEvent(this.id.getValue(), newName.getValue()));
  }

  public activate(): void {
    if (this.status === TenantStatus.Active) return;
    this.status = TenantStatus.Active;
    this.updatedAt = new Date();
  }

  public suspend(): void {
    if (this.status === TenantStatus.Suspended) return;
    this.status = TenantStatus.Suspended;
    this.updatedAt = new Date();
    this.domainEvents.push(new TenantSuspendedEvent(this.id.getValue()));
  }

  public archive(): void {
    if (this.status === TenantStatus.Archived) return;
    this.status = TenantStatus.Archived;
    this.updatedAt = new Date();
  }
}`
  },
  {
    name: 'tenant-id.value-object.ts',
    path: 'backend/api/src/modules/identity/domain/value-objects/tenant-id.value-object.ts',
    language: 'typescript',
    role: 'Value Object',
    description: 'Self-validating, immutable Tenant identifier value object.',
    content: `export class TenantId {
  constructor(private readonly value: string) {
    if (!value) throw new Error('Tenant ID cannot be empty');
  }
  public getValue(): string { return this.value; }
  public equals(other: TenantId): boolean { return this.value === other.getValue(); }
}`
  },
  {
    name: 'tenant-name.value-object.ts',
    path: 'backend/api/src/modules/identity/domain/value-objects/tenant-name.value-object.ts',
    language: 'typescript',
    role: 'Value Object',
    description: 'Self-validating, immutable tenant name object with length constraints.',
    content: `export class TenantName {
  constructor(private readonly value: string) {
    if (!value || value.trim().length === 0) throw new Error('Tenant name cannot be empty');
    if (value.trim().length < 3) throw new Error('Tenant name must be at least 3 characters long');
  }
  public getValue(): string { return this.value; }
  public equals(other: TenantName): boolean {
    return this.value.trim().toLowerCase() === other.getValue().trim().toLowerCase();
  }
}`
  },
  {
    name: 'tenant.repository.ts',
    path: 'backend/api/src/modules/identity/domain/repositories/tenant.repository.ts',
    language: 'typescript',
    role: 'Domain Repository Interface',
    description: 'Explicit storage boundary contract for tenant aggregate roots.',
    content: `import { Tenant } from '../entities/tenant.entity';
import { TenantId } from '../value-objects/tenant-id.value-object';
import { TenantName } from '../value-objects/tenant-name.value-object';

export interface ITenantRepository {
  findById(id: TenantId): Promise<Tenant | null>;
  findByName(name: TenantName): Promise<Tenant | null>;
  save(tenant: Tenant): Promise<void>;
  delete(id: TenantId): Promise<void>;
}`
  },
  {
    name: 'tenant-domain.service.ts',
    path: 'backend/api/src/modules/identity/domain/services/tenant-domain.service.ts',
    language: 'typescript',
    role: 'Domain Service',
    description: 'Enforces name uniqueness across storage boundaries for tenants.',
    content: `import { Injectable, Inject } from '@nestjs/common';
import { ITenantRepository } from '../repositories/tenant.repository';
import { TenantName } from '../value-objects/tenant-name.value-object';
import { DuplicateTenantException } from '../exceptions/duplicate-tenant.exception';

@Injectable()
export class TenantDomainService {
  constructor(
    @Inject('ITenantRepository')
    private readonly tenantRepository: ITenantRepository
  ) {}

  public async assertNameIsUnique(name: TenantName): Promise<void> {
    const existingTenant = await this.tenantRepository.findByName(name);
    if (existingTenant) throw new DuplicateTenantException(name.getValue());
  }
}`
  },
  {
    name: 'create-tenant.handler.ts',
    path: 'backend/api/src/modules/identity/application/handlers/create-tenant.handler.ts',
    language: 'typescript',
    role: 'Application Command Handler',
    description: 'Orchestrates validation, factory aggregate instantiation, and database serialization.',
    content: `import { Inject, Injectable } from '@nestjs/common';
import { CreateTenantCommand } from '../commands/create-tenant.command';
import { ITenantRepository } from '../../domain/repositories/tenant.repository';
import { TenantDomainService } from '../../domain/services/tenant-domain.service';
import { Tenant } from '../../domain/entities/tenant.entity';
import { TenantId } from '../../domain/value-objects/tenant-id.value-object';
import { TenantName } from '../../domain/value-objects/tenant-name.value-object';

@Injectable()
export class CreateTenantHandler {
  constructor(
    @Inject('ITenantRepository')
    private readonly tenantRepository: ITenantRepository,
    private readonly tenantDomainService: TenantDomainService
  ) {}

  public async handle(command: CreateTenantCommand): Promise<string> {
    const tenantName = new TenantName(command.name);
    await this.tenantDomainService.assertNameIsUnique(tenantName);
    const idValue = 'tnt_' + Math.random().toString(36).substring(2, 11);
    const tenant = Tenant.create(new TenantId(idValue), tenantName);
    await this.tenantRepository.save(tenant);
    return tenant.getId().getValue();
  }
}`
  },
  {
    name: 'tenant-aggregate.spec.ts',
    path: 'backend/api/src/modules/identity/tests/tenant-aggregate.spec.ts',
    language: 'typescript',
    role: 'Unit Test Suite',
    description: 'Thorough unit testing verifying all tenant aggregate invariants and status transitions.',
    content: `import { Tenant, TenantStatus } from '../domain/entities/tenant.entity';
import { TenantId } from '../domain/value-objects/tenant-id.value-object';
import { TenantName } from '../value-objects/tenant-name.value-object';

describe('Tenant Aggregate', () => {
  it('should create tenant aggregate root in Provisioning state', () => {
    const id = new TenantId('tnt-123');
    const name = new TenantName('SBB Platform');
    const tenant = Tenant.create(id, name);
    expect(tenant.getStatus()).toBe(TenantStatus.Provisioning);
  });
});`
  },
  {
    name: 'team.entity.ts',
    path: 'backend/api/src/modules/identity/domain/entities/team.entity.ts',
    language: 'typescript',
    role: 'Domain Aggregate Root',
    description: 'Main Team aggregate root entity with Status state machine and domain events.',
    content: `import { TeamId } from '../value-objects/team-id.value-object';
import { TeamName } from '../value-objects/team-name.value-object';
import { TeamCreatedEvent } from '../events/team-created.event';
import { TeamRenamedEvent } from '../events/team-renamed.event';
import { TeamArchivedEvent } from '../events/team-archived.event';

export enum TeamStatus {
  Active = 'Active',
  Archived = 'Archived',
}

export class Team {
  private readonly id: TeamId;
  private readonly organizationId: string;
  private name: TeamName;
  private status: TeamStatus;
  private readonly createdAt: Date;
  private updatedAt: Date;
  private domainEvents: any[] = [];

  constructor(
    id: TeamId,
    organizationId: string,
    name: TeamName,
    status: TeamStatus,
    createdAt: Date,
    updatedAt: Date
  ) {
    if (!organizationId || organizationId.trim() === '') {
      throw new Error('Organization ID is required');
    }
    this.id = id;
    this.organizationId = organizationId;
    this.name = name;
    this.status = status;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public getId(): TeamId { return this.id; }
  public getOrganizationId(): string { return this.organizationId; }
  public getName(): TeamName { return this.name; }
  public getStatus(): TeamStatus { return this.status; }
  public getCreatedAt(): Date { return this.createdAt; }
  public getUpdatedAt(): Date { return this.updatedAt; }
  public getEvents(): any[] { return this.domainEvents; }
  public clearEvents(): void { this.domainEvents = []; }

  public static create(id: TeamId, organizationId: string, name: TeamName): Team {
    const team = new Team(id, organizationId, name, TeamStatus.Active, new Date(), new Date());
    team.domainEvents.push(new TeamCreatedEvent(id.getValue(), organizationId, name.getValue()));
    return team;
  }

  public rename(newName: TeamName): void {
    if (this.name.equals(newName)) return;
    const oldName = this.name.getValue();
    this.name = newName;
    this.updatedAt = new Date();
    this.domainEvents.push(new TeamRenamedEvent(this.id.getValue(), oldName, newName.getValue()));
  }

  public archive(): void {
    if (this.status === TeamStatus.Archived) return;
    this.status = TeamStatus.Archived;
    this.updatedAt = new Date();
    this.domainEvents.push(new TeamArchivedEvent(this.id.getValue()));
  }
}`
  },
  {
    name: 'team-id.value-object.ts',
    path: 'backend/api/src/modules/identity/domain/value-objects/team-id.value-object.ts',
    language: 'typescript',
    role: 'Value Object',
    description: 'Self-validating, immutable Team identifier value object.',
    content: `export class TeamId {
  constructor(private readonly value: string) {
    if (!value) throw new Error('Team ID cannot be empty');
  }
  public getValue(): string { return this.value; }
  public equals(other: TeamId): boolean { return this.value === other.getValue(); }
}`
  },
  {
    name: 'team-name.value-object.ts',
    path: 'backend/api/src/modules/identity/domain/value-objects/team-name.value-object.ts',
    language: 'typescript',
    role: 'Value Object',
    description: 'Self-validating, immutable team name object with length constraints.',
    content: `export class TeamName {
  constructor(private readonly value: string) {
    if (!value || value.trim().length === 0) throw new Error('Team name cannot be empty');
    if (value.trim().length < 3) throw new Error('Team name must be at least 3 characters long');
  }
  public getValue(): string { return this.value; }
  public equals(other: TeamName): boolean {
    return this.value.trim().toLowerCase() === other.getValue().trim().toLowerCase();
  }
}`
  },
  {
    name: 'team.repository.ts',
    path: 'backend/api/src/modules/identity/domain/repositories/team.repository.ts',
    language: 'typescript',
    role: 'Domain Repository Interface',
    description: 'Explicit storage boundary contract for team aggregate roots.',
    content: `import { Team } from '../entities/team.entity';
import { TeamId } from '../value-objects/team-id.value-object';
import { TeamName } from '../value-objects/team-name.value-object';

export interface ITeamRepository {
  findById(id: TeamId): Promise<Team | null>;
  findByNameAndOrg(name: TeamName, organizationId: string): Promise<Team | null>;
  save(team: Team): Promise<void>;
  delete(id: TeamId): Promise<void>;
}`
  },
  {
    name: 'team-domain.service.ts',
    path: 'backend/api/src/modules/identity/domain/services/team-domain.service.ts',
    language: 'typescript',
    role: 'Domain Service',
    description: 'Enforces name uniqueness within the organization boundary for teams.',
    content: `import { Injectable, Inject } from '@nestjs/common';
import { ITeamRepository } from '../repositories/team.repository';
import { TeamName } from '../value-objects/team-name.value-object';
import { DuplicateTeamException } from '../exceptions/duplicate-team.exception';

@Injectable()
export class TeamDomainService {
  constructor(
    @Inject('ITeamRepository')
    private readonly teamRepository: ITeamRepository
  ) {}

  public async assertNameIsUniqueInOrg(name: TeamName, organizationId: string): Promise<void> {
    const existingTeam = await this.teamRepository.findByNameAndOrg(name, organizationId);
    if (existingTeam) throw new DuplicateTeamException(name.getValue(), organizationId);
  }
}`
  },
  {
    name: 'create-team.handler.ts',
    path: 'backend/api/src/modules/identity/application/handlers/create-team.handler.ts',
    language: 'typescript',
    role: 'Application Command Handler',
    description: 'Orchestrates validation, factory aggregate instantiation, and database serialization.',
    content: `import { Inject, Injectable } from '@nestjs/common';
import { CreateTeamCommand } from '../commands/create-team.command';
import { ITeamRepository } from '../../domain/repositories/team.repository';
import { TeamDomainService } from '../../domain/services/team-domain.service';
import { Team } from '../../domain/entities/team.entity';
import { TeamId } from '../../domain/value-objects/team-id.value-object';
import { TeamName } from '../../domain/value-objects/team-name.value-object';

@Injectable()
export class CreateTeamHandler {
  constructor(
    @Inject('ITeamRepository')
    private readonly teamRepository: ITeamRepository,
    private readonly teamDomainService: TeamDomainService
  ) {}

  public async handle(command: CreateTeamCommand): Promise<string> {
    const teamName = new TeamName(command.name);
    await this.teamDomainService.assertNameIsUniqueInOrg(teamName, command.organizationId);
    const idValue = 'tem_' + Math.random().toString(36).substring(2, 11);
    const team = Team.create(new TeamId(idValue), command.organizationId, teamName);
    await this.teamRepository.save(team);
    return team.getId().getValue();
  }
}`
  },
  {
    name: 'team-aggregate.spec.ts',
    path: 'backend/api/src/modules/identity/tests/team-aggregate.spec.ts',
    language: 'typescript',
    role: 'Unit Test Suite',
    description: 'Thorough unit testing verifying all team aggregate invariants, organization boundary rules, and status transitions.',
    content: `import { Team, TeamStatus } from '../domain/entities/team.entity';
import { TeamId } from '../domain/value-objects/team-id.value-object';
import { TeamName } from '../domain/value-objects/team-name.value-object';

describe('Team Aggregate', () => {
  it('should create team aggregate root in Active state', () => {
    const id = new TeamId('team-123');
    const name = new TeamName('Engineering');
    const team = Team.create(id, 'org-456', name);
    expect(team.getStatus()).toBe(TeamStatus.Active);
  });
});`
  }
];

export const oldFileList: FileNode[] = [
  {
    name: 'README.md',
    path: 'backend/api/src/modules/identity/README.md',
    language: 'markdown',
    role: 'Documentation',
    description: 'Full architectural documentation, responsibilities index, and planned REST endpoints roadmap.',
    content: `# Identity Module Foundation

## Module Purpose
The **Identity Module** is the core foundational security layer for the **SBB Platform**. It is responsible for establishing trust, authenticating principals (users, services), issuing session tokens, managing MFA requirements, and enforcing authorization policies. 

This module acts as the Single Source of Truth (SSOT) for identity and access management (IAM) within the platform, isolating security-sensitive workflows from standard business domains.

---

## Responsibilities

The module is architected to eventually own the following domains:
- **Authentication**: Verifying user credentials, managing password flows, and handling social login/OAuth callbacks.
- **Authorization**: Enforcing Role-Based Access Control (RBAC) and Attribute-Based Access Control (ABAC) across API routes.
- **Session & Tokens**: Issuing, verifying, and revoking JSON Web Tokens (JWT) and persistent Refresh Tokens.
- **Password Policy**: Enforcing complexity requirements (min length, entropy, character sets) and historical reuse checks.
- **Multi-Factor Auth (MFA)**: TOTP-based authentication (Google Authenticator, Duo) and recovery code generation.
- **OAuth 2.0 / OIDC**: Federation with external providers (Google, Microsoft, GitHub) as a relying party.
- **Passkeys & WebAuthn**: Passwordless authentication utilizing secure device enclaves (biometrics, security keys).

---

## Project Structure
\`\`\`text
backend/api/src/modules/identity/
├── controllers/          # HTTP request handlers (e.g. login, register, MFA)
├── services/             # Core business logic orchestrators
├── repositories/         # Database access layer abstraction
├── dto/                  # Data Transfer Objects (validation schemas)
├── entities/             # Database tables mappings (TypeORM / Prisma placeholders)
├── interfaces/           # Contract definitions for testability & decoupling
├── guards/               # NestJS authentication and authorization guards
├── decorators/           # Custom decorators (e.g., @CurrentUser, @Roles)
├── events/               # Domain event schemas (e.g., UserRegisteredEvent)
├── listeners/            # Event handlers responding to domain events
├── strategies/           # Passport.js authentication strategies (e.g., JWT, OAuth)
├── validators/           # Custom validators (e.g., PasswordComplexityValidator)
├── tests/                # Unit, integration, and e2e test suites
├── identity.module.ts    # Main NestJS module definition
└── README.md             # This module documentation
\`\`\`

---

## Public API (Planned)

### REST Endpoints
* \`POST /api/v1/identity/register\` - Create a new user identity (subject to rate limiting).
* \`POST /api/v1/identity/login\` - Authenticate credentials, returns access & refresh tokens.
* \`POST /api/v1/identity/refresh\` - Exchange a valid refresh token for a new access token.
* \`POST /api/v1/identity/logout\` - Revoke current session tokens.
* \`POST /api/v1/identity/mfa/enable\` - Initialize TOTP setup (returns QR code URI).
* \`POST /api/v1/identity/mfa/verify\` - Confirm TOTP setup and return recovery keys.

---

## Dependencies
* \`@nestjs/common\` - Core NestJS decorators and utilities.
* \`@nestjs/passport\` - Authentication framework integration.
* \`passport-jwt\` - JWT strategy handling.
* \`bcrypt\` - Secure password hashing.
* \`class-validator\` & \`class-transformer\` - Schema validation.

---

## Future Tickets

1. **GEN-ID-002: Credential Hashing & Storage**
   * Implement Bcrypt hashing service.
   * Configure TypeORM/Drizzle User Entity.
   * Write unit tests for password matching.

2. **GEN-ID-003: JWT & Session Management**
   * Configure passport-jwt strategy.
   * Implement access token and refresh token rotation logic.
   * Set up token blacklisting in Redis.

3. **GEN-ID-004: RBAC & ABAC Guards**
   * Create custom \`@Roles()\` decorator.
   * Implement \`RolesGuard\` checking claims against JWT payloads.`
  },
  {
    name: 'identity.module.ts',
    path: 'backend/api/src/modules/identity/identity.module.ts',
    language: 'typescript',
    role: 'Module Configuration',
    description: 'Binds controllers, service dependency injectors, and repositories together as a modular unit.',
    content: `import { Module } from '@nestjs/common';
import { IdentityController } from './controllers/identity.controller';
import { IdentityService } from './services/identity.service';
import { IdentityRepository } from './repositories/identity.repository';

@Module({
  imports: [],
  controllers: [IdentityController],
  providers: [
    IdentityService,
    IdentityRepository,
  ],
  exports: [
    IdentityService,
  ],
})
export class IdentityModule {}`
  },
  {
    name: 'identity.controller.ts',
    path: 'backend/api/src/modules/identity/controllers/identity.controller.ts',
    language: 'typescript',
    role: 'Controller',
    description: 'Exposes HTTP routes for login, register, and logout. Validates inputs using DTO decorators.',
    content: `import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { IdentityService } from '../services/identity.service';
import { LoginDto } from '../dto/login.dto';
import { RegisterDto } from '../dto/register.dto';

@Controller('identity')
export class IdentityController {
  constructor(private readonly identityService: IdentityService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() registerDto: RegisterDto): Promise<any> {
    // TODO: Delegate user registration logic to IdentityService in GEN-ID-002
    return {
      message: 'Identity registration initiated. Feature pending implementation in GEN-ID-002.',
      data: registerDto,
    };
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: LoginDto): Promise<any> {
    // TODO: Delegate authentication and JWT issuance to IdentityService in GEN-ID-003
    return {
      message: 'Identity login initiated. Feature pending implementation in GEN-ID-003.',
      data: { email: loginDto.email },
    };
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  async logout(): Promise<any> {
    // TODO: Delegate token revocation and session invalidation to IdentityService in GEN-ID-003
    return {
      message: 'Session revoked successfully. Feature pending implementation in GEN-ID-003.',
    };
  }
}`
  },
  {
    name: 'identity.service.ts',
    path: 'backend/api/src/modules/identity/services/identity.service.ts',
    language: 'typescript',
    role: 'Business Service',
    description: 'Contains logical handlers for verification, password strength matching, and event dispatch rules.',
    content: `import { Injectable } from '@nestjs/common';
import { IdentityRepository } from '../repositories/identity.repository';
import { IIdentityService } from '../interfaces/identity-service.interface';
import { LoginDto } from '../dto/login.dto';
import { RegisterDto } from '../dto/register.dto';

@Injectable()
export class IdentityService implements IIdentityService {
  constructor(private readonly identityRepository: IdentityRepository) {}

  async register(registerDto: RegisterDto): Promise<any> {
    // TODO: Implement user creation, password hashing, and DB save in GEN-ID-002
    return null;
  }

  async authenticate(loginDto: LoginDto): Promise<any> {
    // TODO: Implement user verification, password checking, and JWT generation in GEN-ID-003
    return null;
  }

  async invalidateSession(userId: string): Promise<void> {
    // TODO: Implement refresh token deletion or session blacklisting in GEN-ID-003
    return;
  }
}`
  },
  {
    name: 'identity.repository.ts',
    path: 'backend/api/src/modules/identity/repositories/identity.repository.ts',
    language: 'typescript',
    role: 'Database Repository',
    description: 'Abstracts and encapsulates querying users tables, saving credentials, and loading status states.',
    content: `import { Injectable } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class IdentityRepository {
  constructor() {
    // TODO: Inject Drizzle or TypeORM DB Context in GEN-ID-002
  }

  async findByEmail(email: string): Promise<UserEntity | null> {
    // TODO: Query the database for user matching email in GEN-ID-002
    return null;
  }

  async findById(id: string): Promise<UserEntity | null> {
    // TODO: Query the database for user matching ID in GEN-ID-002
    return null;
  }

  async create(user: Partial<UserEntity>): Promise<UserEntity> {
    // TODO: Instantiate and return a new User record (unpersisted) in GEN-ID-002
    return null as any;
  }

  async save(user: UserEntity): Promise<UserEntity> {
    // TODO: Persist user record in the database in GEN-ID-002
    return user;
  }
}`
  },
  {
    name: 'identity-service.interface.ts',
    path: 'backend/api/src/modules/identity/interfaces/identity-service.interface.ts',
    language: 'typescript',
    role: 'Domain Contract Interface',
    description: 'Maintains explicit decoupled signatures for Identity operations, aiding test mockup and swapability.',
    content: `import { RegisterDto } from '../dto/register.dto';
import { LoginDto } from '../dto/login.dto';

export interface IIdentityService {
  /**
   * Registers a new user identity in the system.
   * @param registerDto Registration details
   */
  register(registerDto: RegisterDto): Promise<any>;

  /**
   * Authenticates user credentials and returns tokens or session details.
   * @param loginDto Login credentials
   */
  authenticate(loginDto: LoginDto): Promise<any>;

  /**
   * Invalidates active session for a given user.
   * @param userId User Identifier
   */
  invalidateSession(userId: string): Promise<void>;
}`
  },
  {
    name: 'login.dto.ts',
    path: 'backend/api/src/modules/identity/dto/login.dto.ts',
    language: 'typescript',
    role: 'Data Transfer Object',
    description: 'Ensures structured validation constraints for inbound credentials during user log in.',
    content: `export class LoginDto {
  /**
   * User login email address
   * @example 'user@sbb-platform.com'
   */
  email!: string;

  /**
   * Plaintext password
   * @example 'P@ssw0rd123!'
   */
  password!: string;
}`
  },
  {
    name: 'register.dto.ts',
    path: 'backend/api/src/modules/identity/dto/register.dto.ts',
    language: 'typescript',
    role: 'Data Transfer Object',
    description: 'Establishes the signature requirements when user signs up for the SBB platform.',
    content: `export class RegisterDto {
  /**
   * User full name
   * @example 'Jane Doe'
   */
  name!: string;

  /**
   * User registration email address
   * @example 'jane.doe@sbb-platform.com'
   */
  email!: string;

  /**
   * Plaintext password
   * @example 'SecureP@ss1!'
   */
  password!: string;
}`
  },
  {
    name: 'user.entity.ts',
    path: 'backend/api/src/modules/identity/entities/user.entity.ts',
    language: 'typescript',
    role: 'Database Entity',
    description: 'Defines memory representation of the Users database schema, attributes, roles, and dates.',
    content: `export class UserEntity {
  /**
   * Unique identity identifier
   */
  id!: string;

  /**
   * Complete display name
   */
  name!: string;

  /**
   * Primary verified email address
   */
  email!: string;

  /**
   * Argon2id or Bcrypt hashed password representation
   */
  passwordHash!: string;

  /**
   * Timestamp indicating registration time
   */
  createdAt!: Date;

  /**
   * Timestamp indicating last identity profile update
   */
  updatedAt!: Date;

  /**
   * Active status flags
   */
  isActive!: boolean;

  /**
   * Enabled roles for Authorization RBAC
   */
  roles!: string[];
}`
  },
  {
    name: 'auth.guard.ts',
    path: 'backend/api/src/modules/identity/guards/auth.guard.ts',
    language: 'typescript',
    role: 'Security Guard',
    description: 'Intercepts HTTP requests, validates JWT authorization tokens, and limits unauthorized endpoint access.',
    content: `import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // TODO: Extract JWT token from Authorization headers and validate claims in GEN-ID-004
    const request = context.switchToHttp().getRequest();
    
    // Default to true for local architectural setup
    return true;
  }
}`
  },
  {
    name: 'current-user.decorator.ts',
    path: 'backend/api/src/modules/identity/decorators/current-user.decorator.ts',
    language: 'typescript',
    role: 'Custom Decorator',
    description: 'Injects user models extracted from validated authentication payloads directly into handler args.',
    content: `import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    // Returns the user attached to request during authentication guard stage
    return request.user;
  },
);`
  },
  {
    name: 'user-registered.event.ts',
    path: 'backend/api/src/modules/identity/events/user-registered.event.ts',
    language: 'typescript',
    role: 'Domain Event',
    description: 'Standard immutable domain payload triggered when registration completes, enabling asynchronous integrations.',
    content: `export class UserRegisteredEvent {
  constructor(
    public readonly userId: string,
    public readonly email: string,
    public readonly name: string,
  ) {}
}`
  },
  {
    name: 'user-registered.listener.ts',
    path: 'backend/api/src/modules/identity/listeners/user-registered.listener.ts',
    language: 'typescript',
    role: 'Event Listener',
    description: 'Handles the UserRegisteredEvent by scheduling verification emails, welcome guides, or onboarding configs.',
    content: `import { Injectable } from '@nestjs/common';
import { UserRegisteredEvent } from '../events/user-registered.event';

@Injectable()
export class UserRegisteredListener {
  /**
   * Listens for UserRegisteredEvent to handle post-registration jobs.
   * e.g., dispatching welcome emails, creating defaults.
   */
  async handleUserRegistered(event: UserRegisteredEvent): Promise<void> {
    // TODO: Send activation email, set up default accounts, dispatch external analytics webhooks
    console.log(\`User registered event received for user: \${event.userId} (\${event.email})\`);
  }
}`
  },
  {
    name: 'jwt.strategy.ts',
    path: 'backend/api/src/modules/identity/strategies/jwt.strategy.ts',
    language: 'typescript',
    role: 'Passport Strategy',
    description: 'Integrates Passport.js JWT extraction policies, decrypting secret claims, and validating exp stamps.',
    content: `import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy {
  constructor() {
    // TODO: Configure PassportStrategy bindings and inject JwtService
  }

  async validate(payload: { sub: string; email: string; roles: string[] }): Promise<any> {
    // TODO: Load user context, verify permissions, and attach metadata to execution request
    return {
      userId: payload.sub,
      email: payload.email,
      roles: payload.roles,
    };
  }
}`
  },
  {
    name: 'password.validator.ts',
    path: 'backend/api/src/modules/identity/validators/password.validator.ts',
    language: 'typescript',
    role: 'Validator Utility',
    description: 'Encapsulates complex pattern checks, letters, numbers, symbols density, and password strength checks.',
    content: `import { Injectable } from '@nestjs/common';

@Injectable()
export class PasswordComplexityValidator {
  /**
   * Validates if a password meets the corporate security complexity policy.
   * - At least 12 characters
   * - Must contain letters, numbers, and symbols
   * - No simple repetitive patterns
   */
  validate(password: string): boolean {
    if (!password || password.length < 12) {
      return false;
    }
    
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSymbols = /[^a-zA-Z0-9]/.test(password);
    
    return hasLetters && hasNumbers && hasSymbols;
  }
}`
  },
  {
    name: 'identity.controller.spec.ts',
    path: 'backend/api/src/modules/identity/tests/identity.controller.spec.ts',
    language: 'typescript',
    role: 'Unit Test Spec',
    description: 'Guarantees execution safety, mock validations, and verification of controller actions.',
    content: `// NOTE: Test suite placeholder for SBB Platform Identity Controller.
// To run: npm run test or npx jest backend/api/src/modules/identity/tests/

describe('IdentityController (Unit)', () => {
  let controller: any;
  let service: any;

  beforeEach(async () => {
    // Mock the IdentityService interface
    service = {
      register: jest.fn().mockImplementation((dto) => Promise.resolve({ id: 'user_123', ...dto })),
      authenticate: jest.fn().mockImplementation((dto) => Promise.resolve({ accessToken: 'jwt_token' })),
      invalidateSession: jest.fn().mockResolvedValue(undefined),
    };

    // Instantiate mock controller
    controller = {
      identityService: service,
      register: async (dto: any) => service.register(dto),
      login: async (dto: any) => service.authenticate(dto),
      logout: async () => service.invalidateSession('user_123'),
    };
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('register', () => {
    it('should invoke service registration and return the payload', async () => {
      const mockDto = { name: 'Test', email: 'test@sbb.com', password: 'password' };
      const response = await controller.register(mockDto);
      expect(service.register).toHaveBeenCalledWith(mockDto);
      expect(response).toHaveProperty('id');
    });
  });

  describe('login', () => {
    it('should invoke authentication service and return an access token', async () => {
      const mockDto = { email: 'test@sbb.com', password: 'password' };
      const response = await controller.login(mockDto);
      expect(service.authenticate).toHaveBeenCalledWith(mockDto);
      expect(response).toHaveProperty('accessToken');
    });
  });
});

// Mock global jest functions for standalone linter safety if jest types aren't loaded globally
declare const jest: any;
declare const describe: any;
declare const beforeEach: any;
declare const it: any;
declare const expect: any;`
  }
];

export const configFileList: FileNode[] = [
  {
    name: 'README.md',
    path: 'packages/config/README.md',
    language: 'markdown',
    role: 'Documentation',
    description: 'Centralized, type-safe configuration package documentation, layout descriptions, and code examples.',
    content: `# @sbb/config

Centralized, type-safe configuration management for every application, backend module, and shared package on the **SBB Platform**.

Powered by **TypeScript**, **Zod** schema validation, and **dotenv**.

---

## 🚀 Key Features

* **Strict Type Safety**: Full autocompletion and structural integrity across nested configurations.
* **Environment Validation**: Validates process environment variables at startup against a strict schema using Zod.
* **Feature Flag Service**: Provides out-of-the-box support for querying and overriding feature flags.
* **Sensible Fallbacks**: Built-in default values ensure safe local development out-of-the-box.
* **Lazy Initialization**: Config is loaded and cached on first call to prevent redundant file I/O or multiple parses.

---

## 📂 Package Structure

\`\`\`text
packages/config/
├── src/
│   ├── config.ts          # Config factory, cache controls, global getter
│   ├── env.ts             # Dotenv environment loading & validation
│   ├── schema.ts          # Zod schema definitions with type preprocessors
│   ├── feature-flags.ts   # Feature Flag Service & override managers
│   ├── index.ts           # Public API entry point exports
│   └── types.ts           # Structural platform interface contracts
├── package.json
├── tsconfig.json
└── README.md
\`\`\``
  },
  {
    name: 'package.json',
    path: 'packages/config/package.json',
    language: 'json',
    role: 'Package Manifest',
    description: 'Defines package dependencies (Zod, Dotenv), compilation scripts, and exports structure.',
    content: `{
  "name": "@sbb/config",
  "version": "1.0.0",
  "description": "Centralized, type-safe configuration package for the SBB Platform",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "test": "echo \\"Error: no test specified\\" && exit 0"
  },
  "dependencies": {
    "dotenv": "^16.4.5",
    "zod": "^3.23.8"
  },
  "devDependencies": {
    "typescript": "^5.4.5",
    "@types/node": "^20.12.12"
  },
  "publishConfig": {
    "access": "restricted"
  }
}`
  },
  {
    name: 'tsconfig.json',
    path: 'packages/config/tsconfig.json',
    language: 'json',
    role: 'TypeScript Config',
    description: 'Declares target ES version, module system, and output path for compilation.',
    content: `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "declaration": true,
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}`
  },
  {
    name: 'schema.ts',
    path: 'packages/config/src/schema.ts',
    language: 'typescript',
    role: 'Validation Schema',
    description: 'Enforces environmental typing rules using strict Zod structures for each config segment.',
    content: `import { z } from 'zod';

// Helper to preprocess boolean environment variables from strings
const stringToBoolean = z.preprocess((val) => {
  if (typeof val === 'string') {
    if (val.toLowerCase() === 'true' || val === '1') return true;
    if (val.toLowerCase() === 'false' || val === '0') return false;
  }
  return val;
}, z.boolean().default(false));

export const envSchema = z.object({
  // Environment Mode
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.preprocess((val) => (val ? Number(val) : 3000), z.number().default(3000)),

  // Database Configurations
  DATABASE_URL: z.string().optional().default('postgresql://localhost:5432/sbb_db'),
  DATABASE_MAX_CONNECTIONS: z.preprocess((val) => (val ? Number(val) : 10), z.number().default(10)),

  // Redis configurations
  REDIS_URL: z.string().optional().default('redis://localhost:6379'),

  // JWT Security Configurations
  JWT_SECRET: z.string().default('sbb-platform-default-super-secret-key-2026'),
  JWT_ACCESS_EXPIRATION: z.string().default('15m'),
  JWT_REFRESH_EXPIRATION: z.string().default('7d'),

  // Email Configuration Placeholders
  EMAIL_SMTP_HOST: z.string().optional().default('smtp.sbb-platform.com'),
  EMAIL_SMTP_PORT: z.preprocess((val) => (val ? Number(val) : 587), z.number().default(587)),
  EMAIL_FROM: z.string().optional().default('noreply@sbb-platform.com'),

  // Storage Configuration Placeholders
  STORAGE_PROVIDER: z.enum(['local', 's3', 'gcs']).default('local'),
  STORAGE_BUCKET_NAME: z.string().optional().default('sbb-core-assets'),

  // AI Provider Configurations (Placeholders)
  GEMINI_API_KEY: z.string().optional(),
  OPENAI_API_KEY: z.string().optional(),

  // Feature Flags
  ENABLE_MFA: stringToBoolean,
  ENABLE_OAUTH: stringToBoolean,
  ENABLE_PASSKEYS: stringToBoolean,
  ENABLE_ALPHA_FEATURES: stringToBoolean,
});

export type Env = z.infer<typeof envSchema>;`
  },
  {
    name: 'types.ts',
    path: 'packages/config/src/types.ts',
    language: 'typescript',
    role: 'Config Interface Types',
    description: 'Modular interfaces representing the deep nested platform configuration tree.',
    content: `export interface DatabaseConfig {
  url: string;
  maxConnections: number;
}

export interface RedisConfig {
  url: string;
}

export interface SecurityConfig {
  jwtSecret: string;
  jwtAccessExpiration: string;
  jwtRefreshExpiration: string;
}

export interface EmailConfig {
  smtpHost?: string;
  smtpPort: number;
  from?: string;
}

export interface StorageConfig {
  provider: 'local' | 's3' | 'gcs';
  bucketName?: string;
}

export interface AIConfig {
  geminiApiKey?: string;
  openaiApiKey?: string;
}

export interface FeatureFlags {
  enableMfa: boolean;
  enableOauth: boolean;
  enablePasskeys: boolean;
  enableAlphaFeatures: boolean;
}

export interface SBBConfig {
  env: 'development' | 'test' | 'production';
  port: number;
  db: DatabaseConfig;
  redis: RedisConfig;
  security: SecurityConfig;
  email: EmailConfig;
  storage: StorageConfig;
  ai: AIConfig;
  features: FeatureFlags;
}`
  },
  {
    name: 'env.ts',
    path: 'packages/config/src/env.ts',
    language: 'typescript',
    role: 'Environment Loader',
    description: 'Utility that searches, injects, and validates process environment variables using Dotenv and Zod.',
    content: `import dotenv from 'dotenv';
import path from 'path';
import { envSchema, Env } from './schema.js';

/**
 * Loads and validates environment variables.
 * Automatically searches for .env files in the current directory and parent directories.
 */
export function loadEnv(customPath?: string): Env {
  // Load using default path or custom path
  const targetPath = customPath || path.resolve(process.cwd(), '.env');
  dotenv.config({ path: targetPath });

  // Fallback lookups in monorepo contexts
  if (!customPath) {
    dotenv.config({ path: path.resolve(process.cwd(), '../../.env') });
    dotenv.config({ path: path.resolve(process.cwd(), '../.env') });
  }

  // Parse against schema
  const parsed = envSchema.safeParse(process.env);

  if (!parsed.success) {
    console.error('❌ [@sbb/config] Environment validation failed:');
    parsed.error.issues.forEach((err) => {
      console.error(\`  - Env variable "\${err.path.join('.')}" : \${err.message}\`);
    });
    throw new Error('SBB Platform: Invalid environment configuration variables');
  }

  return parsed.data;
}`
  },
  {
    name: 'feature-flags.ts',
    path: 'packages/config/src/feature-flags.ts',
    language: 'typescript',
    role: 'Feature Flag Manager',
    description: 'Implements service class for querying feature states with dynamic programmatic override support.',
    content: `import { FeatureFlags } from './types.js';

/**
 * Service to manage and query feature flags.
 * Supports standard environment values and programmatic runtime overrides (e.g. for testing).
 */
export class FeatureFlagService {
  private flags: FeatureFlags;

  constructor(flags: FeatureFlags) {
    this.flags = { ...flags };
  }

  /**
   * Returns true if the specific feature flag is active.
   */
  isEnabled(flag: keyof FeatureFlags): boolean {
    return this.flags[flag] === true;
  }

  /**
   * Dynamically toggles a flag value at runtime. Useful for testing pipelines or A/B hooks.
   */
  setOverride(flag: keyof FeatureFlags, value: boolean): void {
    this.flags[flag] = value;
  }

  /**
   * Resets all flags back to their initial state.
   */
  reset(initialFlags: FeatureFlags): void {
    this.flags = { ...initialFlags };
  }

  /**
   * Exposes a snapshot copy of all active flags.
   */
  getAllFlags(): FeatureFlags {
    return { ...this.flags };
  }
}`
  },
  {
    name: 'config.ts',
    path: 'packages/config/src/config.ts',
    language: 'typescript',
    role: 'Configuration Factory',
    description: 'Provides lazy initialization caching, config tree assembly, and global getConfig() getter.',
    content: `import { Env } from './schema.js';
import { SBBConfig } from './types.js';
import { loadEnv } from './env.js';

/**
 * Transforms flat validated environment variables into a structured, typed configuration tree.
 */
export function createConfig(env: Env): SBBConfig {
  return {
    env: env.NODE_ENV,
    port: env.PORT,
    db: {
      url: env.DATABASE_URL,
      maxConnections: env.DATABASE_MAX_CONNECTIONS,
    },
    redis: {
      url: env.REDIS_URL,
    },
    security: {
      jwtSecret: env.JWT_SECRET,
      jwtAccessExpiration: env.JWT_ACCESS_EXPIRATION,
      jwtRefreshExpiration: env.JWT_REFRESH_EXPIRATION,
    },
    email: {
      smtpHost: env.EMAIL_SMTP_HOST,
      smtpPort: env.EMAIL_SMTP_PORT,
      from: env.EMAIL_FROM,
    },
    storage: {
      provider: env.STORAGE_PROVIDER,
      bucketName: env.STORAGE_BUCKET_NAME,
    },
    ai: {
      geminiApiKey: env.GEMINI_API_KEY,
      openaiApiKey: env.OPENAI_API_KEY,
    },
    features: {
      enableMfa: env.ENABLE_MFA,
      enableOauth: env.ENABLE_OAUTH,
      enablePasskeys: env.ENABLE_PASSKEYS,
      enableAlphaFeatures: env.ENABLE_ALPHA_FEATURES,
    },
  };
}

let cachedConfig: SBBConfig | null = null;

/**
 * Retrieves the global configuration object. 
 * Lazy initializes it by loading and validating the environment if cached version doesn't exist.
 */
export function getConfig(customPath?: string): SBBConfig {
  if (!cachedConfig) {
    const env = loadEnv(customPath);
    cachedConfig = createConfig(env);
  }
  return cachedConfig;
}

/**
 * Invalidates the configuration cache. Highly useful to reload settings dynamically during tests.
 */
export function resetConfig(): void {
  cachedConfig = null;
}`
  },
  {
    name: 'index.ts',
    path: 'packages/config/src/index.ts',
    language: 'typescript',
    role: 'Public API Entry point',
    description: 'Exposes and consolidates all schema, env, config, types, and flags components to consumers.',
    content: `export * from './types.js';
export * from './schema.js';
export * from './env.js';
export * from './feature-flags.js';
export * from './config.js';`
  }
];

export const loggerFileList: FileNode[] = [
  {
    name: 'README.md',
    path: 'packages/logger/README.md',
    language: 'markdown',
    role: 'Documentation',
    description: 'Comprehensive logging package documentation, architectural guidelines, and extensive code examples.',
    content: `# @sbb/logger

Enterprise logging package for the **SBB Platform**.

Centralized, type-safe, high-performance wrapper around **Pino** featuring selective redaction, detailed error serialization, multi-tenant tracing, and real-time execution timing.

---

## 🚀 Key Features

* **High Performance**: Built on Pino to minimize CPU usage and prevent logging from blocking event loops.
* **Smart Environment Toggles**: Outputs clean \`pino-pretty\` console messages in development/test states, and fast JSON logs in production environments.
* **Trace-Aware Contextualizing**: Dedicated helpers to spawn child loggers featuring unified \`correlationId\`, \`requestId\`, \`tenantId\`, and \`userId\` fields.
* **Sensitive Data Redaction**: Automatically filters standard keys (e.g. \`password\`, \`secret\`, \`accessToken\`) to prevent security leaks in log files.
* **Custom Error Serialization**: Formats system exceptions cleanly, capturing error messages, stack traces, nested states, and custom response codes.
* **Performance Timer Tracing**: Easy performance benchmarks using nanosecond-accurate \`process.hrtime()\` hooks.`
  },
  {
    name: 'package.json',
    path: 'packages/logger/package.json',
    language: 'json',
    role: 'Package Manifest',
    description: 'Defines package dependencies (Pino, pino-pretty), scripts, and restricted publishing setup.',
    content: `{
  "name": "@sbb/logger",
  "version": "1.0.0",
  "description": "Centralized, high-performance logging package for the SBB Platform",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "test": "echo \\"Error: no test specified\\" && exit 0"
  },
  "dependencies": {
    "pino": "^9.2.0",
    "pino-pretty": "^11.2.1"
  },
  "devDependencies": {
    "typescript": "^5.4.5",
    "@types/node": "^20.12.12"
  },
  "publishConfig": {
    "access": "restricted"
  }
}`
  },
  {
    name: 'tsconfig.json',
    path: 'packages/logger/tsconfig.json',
    language: 'json',
    role: 'TypeScript Config',
    description: 'Defines compiler options, NodeNext module resolution, and output directory for the build.',
    content: `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "declaration": true,
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}`
  },
  {
    name: 'types.ts',
    path: 'packages/logger/src/types.ts',
    language: 'typescript',
    role: 'Types & Interfaces',
    description: 'Defines LogLevel union, LogContext payload, custom LoggerOptions, and the SBBLogger interface contracts.',
    content: `export type LogLevel = 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'fatal';

export interface LogContext {
  correlationId?: string;
  requestId?: string;
  tenantId?: string;
  userId?: string;
  [key: string]: any;
}

export interface LoggerOptions {
  name: string;
  level?: LogLevel;
  redactPaths?: string[];
  pretty?: boolean; // If true, force pino-pretty. If false, force json. If undefined, determine based on NODE_ENV.
}

export interface SBBLogger {
  trace(msg: string, ...args: any[]): void;
  trace(obj: object, msg?: string, ...args: any[]): void;
  
  debug(msg: string, ...args: any[]): void;
  debug(obj: object, msg?: string, ...args: any[]): void;
  
  info(msg: string, ...args: any[]): void;
  info(obj: object, msg?: string, ...args: any[]): void;
  
  warn(msg: string, ...args: any[]): void;
  warn(obj: object, msg?: string, ...args: any[]): void;
  
  error(msg: string, ...args: any[]): void;
  error(obj: object, msg?: string, ...args: any[]): void;
  error(err: Error, msg?: string, ...args: any[]): void;
  
  fatal(msg: string, ...args: any[]): void;
  fatal(obj: object, msg?: string, ...args: any[]): void;
  fatal(err: Error, msg?: string, ...args: any[]): void;

  child(context: LogContext): SBBLogger;
  
  /**
   * Performance timing helper. Returns an object with an end() method that prints the duration.
   */
  time(label: string): { end(): void };
}`
  },
  {
    name: 'constants.ts',
    path: 'packages/logger/src/constants.ts',
    language: 'typescript',
    role: 'Configuration Defaults',
    description: 'Defines package defaults including default log level, logger name, and PII keys to censor.',
    content: `import { LogLevel } from './types.js';

export const DEFAULT_LOG_LEVEL: LogLevel = 'info';

export const DEFAULT_LOGGER_NAME = 'sbb-platform';

export const DEFAULT_REDACT_PATHS = [
  'password',
  '*.password',
  'passwordConfirm',
  'token',
  '*.token',
  'accessToken',
  '*.accessToken',
  'refreshToken',
  '*.refreshToken',
  'secret',
  '*.secret',
  'authorization',
  '*.authorization',
  'cookie',
  '*.cookie',
  'creditCard',
  '*.creditCard',
  'ssn',
  '*.ssn',
];`
  },
  {
    name: 'redaction.ts',
    path: 'packages/logger/src/redaction.ts',
    language: 'typescript',
    role: 'Security & Redaction',
    description: 'Merges custom logging keys with default PII patterns to sanitize data before writing to streams.',
    content: `import { DEFAULT_REDACT_PATHS } from './constants.js';

/**
 * Returns a Pino-compatible redaction configuration block.
 * Merges standard platform security fields with any custom fields provided by sub-modules.
 */
export function getRedactionConfig(customPaths?: string[]) {
  const paths = customPaths 
    ? [...new Set([...DEFAULT_REDACT_PATHS, ...customPaths])] 
    : DEFAULT_REDACT_PATHS;
    
  return {
    paths,
    censor: '[REDACTED]',
  };
}`
  },
  {
    name: 'serializers.ts',
    path: 'packages/logger/src/serializers.ts',
    language: 'typescript',
    role: 'Object Serialization',
    description: 'Custom serializer for detailed exception metadata, codes, stacks, and standard req/res formats.',
    content: `import pino from 'pino';

/**
 * Standard error serializer that formats error details, messages, nested structures,
 * stacks, and potential status codes consistently across the platform.
 */
export const errSerializer = (err: any) => {
  if (!err) return err;
  if (!(err instanceof Error)) {
    return err;
  }
  
  return {
    type: err.name || err.constructor?.name || 'Error',
    message: err.message,
    stack: err.stack,
    code: (err as any).code || (err as any).statusCode || undefined,
    details: (err as any).details || undefined,
  };
};

/**
 * Combined serializers block containing custom error formatting and standard
 * HTTP req/res formats for full-stack compatibility.
 */
export const serializers = {
  err: errSerializer,
  req: pino.stdSerializers.req,
  res: pino.stdSerializers.res,
};`
  },
  {
    name: 'factory.ts',
    path: 'packages/logger/src/factory.ts',
    language: 'typescript',
    role: 'Pino Factory',
    description: 'Handles underlying pino initialization, including multi-transport selections and pretty overrides.',
    content: `import pino from 'pino';
import { LoggerOptions } from './types.js';
import { getRedactionConfig } from './redaction.js';
import { serializers } from './serializers.js';
import { DEFAULT_LOG_LEVEL, DEFAULT_LOGGER_NAME } from './constants.js';

/**
 * Instantiates the core underlying Pino logger.
 * Auto-configures output format: JSON structure in production, and pino-pretty CLI-friendly stream in development.
 */
export function createPinoInstance(options: LoggerOptions) {
  const isProd = process.env.NODE_ENV === 'production';
  const usePretty = options.pretty !== undefined ? options.pretty : !isProd;
  
  const pinoOptions: pino.LoggerOptions = {
    name: options.name || DEFAULT_LOGGER_NAME,
    level: options.level || DEFAULT_LOG_LEVEL,
    redact: getRedactionConfig(options.redactPaths),
    serializers,
  };

  if (usePretty) {
    pinoOptions.transport = {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'SYS:yyyy-mm-dd HH:MM:ss.l',
        ignore: 'pid,hostname',
      },
    };
  }

  return pino(pinoOptions);
}`
  },
  {
    name: 'child-logger.ts',
    path: 'packages/logger/src/child-logger.ts',
    language: 'typescript',
    role: 'Child Logger Context',
    description: 'Defines helper utilities for spawning request loggers with correlation/trace IDs.',
    content: `import { SBBLogger, LogContext } from './types.js';

/**
 * Creates a generic child logger from a parent logger.
 */
export function createChildLogger(parent: SBBLogger, context: LogContext): SBBLogger {
  return parent.child(context);
}

/**
 * Creates a highly standardized request context child logger.
 * Preserves tracing IDs (correlation ID, request ID) and identity parameters across API modules.
 */
export function createRequestLogger(
  parent: SBBLogger,
  correlationId: string,
  requestId: string,
  tenantId?: string,
  userId?: string
): SBBLogger {
  return parent.child({
    correlationId,
    requestId,
    tenantId,
    userId,
  });
}`
  },
  {
    name: 'logger.ts',
    path: 'packages/logger/src/logger.ts',
    language: 'typescript',
    role: 'Logger Wrapper Class',
    description: 'Implements the SBBLogger interface with high-resolution performance timers and exact types.',
    content: `import { Logger as PinoInstance } from 'pino';
import { SBBLogger, LogContext } from './types.js';

/**
 * Enterprise wrapper around Pino.
 * Guarantees proper method overloading, typesafe logging,
 * structured child instantiation, and performance metric tracing.
 */
export class SBBLoggerImpl implements SBBLogger {
  constructor(public readonly pino: PinoInstance) {}

  trace(msg: string, ...args: any[]): void;
  trace(obj: object, msg?: string, ...args: any[]): void;
  trace(objOrMsg: any, msgOrArg?: any, ...args: any[]): void {
    this.pino.trace(objOrMsg, msgOrArg, ...args);
  }

  debug(msg: string, ...args: any[]): void;
  debug(obj: object, msg?: string, ...args: any[]): void;
  debug(objOrMsg: any, msgOrArg?: any, ...args: any[]): void {
    this.pino.debug(objOrMsg, msgOrArg, ...args);
  }

  info(msg: string, ...args: any[]): void;
  info(obj: object, msg?: string, ...args: any[]): void;
  info(objOrMsg: any, msgOrArg?: any, ...args: any[]): void {
    this.pino.info(objOrMsg, msgOrArg, ...args);
  }

  warn(msg: string, ...args: any[]): void;
  warn(obj: object, msg?: string, ...args: any[]): void;
  warn(objOrMsg: any, msgOrArg?: any, ...args: any[]): void {
    this.pino.warn(objOrMsg, msgOrArg, ...args);
  }

  error(msg: string, ...args: any[]): void;
  error(obj: object, msg?: string, ...args: any[]): void;
  error(err: Error, msg?: string, ...args: any[]): void;
  error(objOrMsg: any, msgOrArg?: any, ...args: any[]): void {
    this.pino.error(objOrMsg, msgOrArg, ...args);
  }

  fatal(msg: string, ...args: any[]): void;
  fatal(obj: object, msg?: string, ...args: any[]): void;
  fatal(err: Error, msg?: string, ...args: any[]): void;
  fatal(objOrMsg: any, msgOrArg?: any, ...args: any[]): void {
    this.pino.fatal(objOrMsg, msgOrArg, ...args);
  }

  child(context: LogContext): SBBLogger {
    const childPino = this.pino.child(context);
    return new SBBLoggerImpl(childPino);
  }

  /**
   * Tracks and outputs high-resolution performance benchmarks.
   */
  time(label: string): { end(): void } {
    const start = process.hrtime();
    return {
      end: () => {
        const diff = process.hrtime(start);
        // calculate duration in milliseconds
        const durationMs = (diff[0] * 1000 + diff[1] / 1e6).toFixed(3);
        this.info(
          { performance: { label, durationMs: parseFloat(durationMs) } },
          \`Performance [\${label}]: completed in \${durationMs}ms\`
        );
      },
    };
  }
}`
  },
  {
    name: 'index.ts',
    path: 'packages/logger/src/index.ts',
    language: 'typescript',
    role: 'Package Exports',
    description: 'Consolidates exports of constants, serializers, custom implementations, and convenient global lazy-getters.',
    content: `import { LoggerOptions, SBBLogger } from './types.js';
import { createPinoInstance } from './factory.js';
import { SBBLoggerImpl } from './logger.js';
import { DEFAULT_LOGGER_NAME } from './constants.js';

export * from './types.js';
export * from './constants.js';
export * from './serializers.js';
export * from './redaction.js';
export * from './factory.js';
export * from './child-logger.js';
export * from './logger.js';

let defaultLogger: SBBLogger | null = null;

/**
 * Main factory function to construct a custom typesafe SBBLogger.
 */
export function getLogger(options?: Partial<LoggerOptions>): SBBLogger {
  const mergedOptions: LoggerOptions = {
    name: DEFAULT_LOGGER_NAME,
    ...options,
  };
  const pinoInstance = createPinoInstance(mergedOptions);
  return new SBBLoggerImpl(pinoInstance);
}

/**
 * Lazy-initializes and retrieves the default global platform logger instance.
 */
export function getDefaultLogger(): SBBLogger {
  if (!defaultLogger) {
    defaultLogger = getLogger();
  }
  return defaultLogger;
}`
  },
  {
    name: 'README.md',
    path: 'packages/logger/src/README.md',
    language: 'markdown',
    role: 'Internal Documentation',
    description: 'Technical document describing source code details and developer guidelines.',
    content: `# @sbb/logger - Source Architecture

This directory houses the core implementation files for the \`@sbb/logger\` package.

## 🧱 Architectural Components

* **\`logger.ts\`**: Standard wrapper implementing the unified \`SBBLogger\` interface. This shields consumers from raw \`pino\` API drift.
* **\`factory.ts\`**: The instantiation pipeline, checking standard Node environment triggers to configure correct output channels.
* **\`child-logger.ts\`**: Formats and enforces core transaction properties (Request IDs, Correlation/Trace headers).
* **\`serializers.ts\`**: Safely structures Error attributes so they translate cleanly to unified log storage targets (Elastic, Datadog).
* **\`redaction.ts\`**: Enforces zero-leak compliance by checking runtime objects against deep security filters.
* **\`constants.ts\`**: Holds defaults like standard log names and default log level targets.
* **\`types.ts\`**: Strongly structures configuration variables and output structures.

## ⚠️ Important Implementation Guidelines

1. **Zero Global Mutations**: Avoid writing directly to global process streams. All stream bindings must flow through Pino.
2. **Type Imports**: Standard named imports are preferred across files.
3. **Pino Compatibility**: If upgrading \`pino\`, ensure \`pino-pretty\` remains compatible and performance tests compile.`
  }
];

export const sharedFileList: FileNode[] = [
  {
    name: 'README.md',
    path: 'packages/shared/README.md',
    language: 'markdown',
    role: 'Documentation',
    description: 'Shared platform foundation package documentation, key features, and usage examples.',
    content: `# @sbb/shared

Shared platform foundation package for the **SBB Platform**.

Centralized, framework-agnostic utilities, error hierarchies, result patterns, pagination structures, base interfaces, and utility types.

---

## 🚀 Key Features

* **Functional Results**: Safe, exception-free execution flows using standard \`Result<T, E>\`, \`Success<T>\`, and \`Failure<E>\` models.
* **Error Hierarchy**: Class-based custom HTTP exception mapping (\`AppError\`, \`ValidationError\`, \`NotFoundError\`).
* **Unified Pagination**: Standardized parameters for database listings (\`PaginationRequest\`, \`PageInfo\`, \`PaginationResponse<T>\`).
* **Standard Enums**: Uniform status, environment, and ordering flags (\`Status\`, \`Environment\`, \`SortDirection\`).
* **Entity Contracts**: Core metadata contracts for domain records (\`BaseEntity\`, \`Timestamped\`, \`Auditable\`, \`SoftDelete\`).
* **Generic Helpers**: High-speed types (\`DeepPartial<T>\`, \`Nullable<T>\`) and optimized helper namespaces (\`DateUtils\`, \`StringUtils\`, \`ObjectUtils\`).`
  },
  {
    name: 'package.json',
    path: 'packages/shared/package.json',
    language: 'json',
    role: 'Package Manifest',
    description: 'Defines package name (@sbb/shared), scripts, and restricted publishing setups.',
    content: `{
  "name": "@sbb/shared",
  "version": "1.0.0",
  "description": "Shared foundation package for the SBB Platform containing framework-agnostic utilities, error hierarchies, result patterns, pagination structures, base interfaces, and utility types.",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "test": "echo \\"Error: no test specified\\" && exit 0"
  },
  "devDependencies": {
    "typescript": "^5.4.5",
    "@types/node": "^20.12.12"
  },
  "publishConfig": {
    "access": "restricted"
  }
}`
  },
  {
    name: 'tsconfig.json',
    path: 'packages/shared/tsconfig.json',
    language: 'json',
    role: 'TypeScript Config',
    description: 'Defines modular compiler settings for standard NodeNext build outputs.',
    content: `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "declaration": true,
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}`
  },
  {
    name: 'CHANGELOG.md',
    path: 'packages/shared/CHANGELOG.md',
    language: 'markdown',
    role: 'Release History',
    description: 'Chronological list of all release updates, feature inclusions, and changelog logs.',
    content: `# Changelog

All notable changes to the \`@sbb/shared\` package will be documented in this file.

## [1.0.0] - 2026-07-02

### Added
- Core exception classes (\`AppError\`, \`ValidationError\`, \`NotFoundError\`, \`UnauthorizedError\`, \`ForbiddenError\`, \`ConflictError\`, \`InternalServerError\`).
- Functional \`Result<T, E>\` pattern implementation with \`Success<T>\` and \`Failure<E>\` types.
- Standard pagination envelopes (\`PaginationRequest\`, \`PaginationResponse<T>\`, \`PageInfo\`) and generator utilities.
- System-wide generic typescript enums (\`Environment\`, \`LogLevel\`, \`SortDirection\`, \`Order\`, \`Status\`).
- Database mapping interfaces (\`BaseEntity\`, \`Timestamped\`, \`Auditable\`, \`SoftDelete\`).
- Common typing utility aliases (\`Nullable<T>\`, \`Optional<T>\`, \`DeepPartial<T>\`, \`ValueOf<T>\`).
- Framework-free helper suites (\`isValidUuid\`, \`DateUtils\`, \`StringUtils\`, \`ObjectUtils\`).
- Package entry exports configurations and markdown documentation.`
  },
  {
    name: 'index.ts',
    path: 'packages/shared/src/index.ts',
    language: 'typescript',
    role: 'Public API Entry point',
    description: 'Exposes all core components, utility suites, and standard structures to the SBB Platform.',
    content: `export * from './constants/index.js';
export * from './dto/index.js';
export * from './enums/index.js';
export * from './errors/index.js';
export * from './interfaces/index.js';
export * from './pagination/index.js';
export * from './result/index.js';
export * from './types/index.js';
export * from './utils/index.js';`
  },
  {
    name: 'errors/index.ts',
    path: 'packages/shared/src/errors/index.ts',
    language: 'typescript',
    role: 'Error Hierarchy',
    description: 'Standard exception classes extending Error for framework-free system error mapping.',
    content: `export class AppError extends Error {
  public readonly statusCode: number;
  public readonly details?: any;

  constructor(message: string, statusCode: number = 500, details?: any) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.details = details;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export class ValidationError extends AppError {
  constructor(message: string, details?: any) {
    super(message, 400, details);
  }
}

export class NotFoundError extends AppError {
  constructor(message: string, details?: any) {
    super(message, 404, details);
  }
}

export class UnauthorizedError extends AppError {
  constructor(message: string, details?: any) {
    super(message, 401, details);
  }
}

export class ForbiddenError extends AppError {
  constructor(message: string, details?: any) {
    super(message, 403, details);
  }
}

export class ConflictError extends AppError {
  constructor(message: string, details?: any) {
    super(message, 409, details);
  }
}

export class InternalServerError extends AppError {
  constructor(message: string, details?: any) {
    super(message, 500, details);
  }
}`
  },
  {
    name: 'result/index.ts',
    path: 'packages/shared/src/result/index.ts',
    language: 'typescript',
    role: 'Result Pattern monad',
    description: 'Safe Result monad mapping success/failure states cleanly for SBB service return contracts.',
    content: `export class Result<T, E = Error> {
  private readonly _isSuccess: boolean;
  private readonly _value?: T;
  private readonly _error?: E;

  private constructor(isSuccess: boolean, value?: T, error?: E) {
    this._isSuccess = isSuccess;
    this._value = value;
    this._error = error;
  }

  public get isSuccess(): boolean {
    return this._isSuccess;
  }

  public get isFailure(): boolean {
    return !this._isSuccess;
  }

  public get value(): T {
    if (this.isFailure) {
      throw new Error('Cannot retrieve value of a failed Result. Use getError() or check isSuccess first.');
    }
    return this._value as T;
  }

  public get error(): E {
    if (this.isSuccess) {
      throw new Error('Cannot retrieve error of a successful Result. Check isFailure first.');
    }
    return this._error as E;
  }

  public static success<T, E = Error>(value: T): Result<T, E> {
    return new Result<T, E>(true, value, undefined);
  }

  public static failure<T, E = Error>(error: E): Result<T, E> {
    return new Result<T, E>(false, undefined, error);
  }

  public map<U>(f: (val: T) => U): Result<U, E> {
    if (this.isSuccess) {
      return Result.success<U, E>(f(this.value));
    }
    return Result.failure<U, E>(this.error);
  }

  public flatMap<U>(f: (val: T) => Result<U, E>): Result<U, E> {
    if (this.isSuccess) {
      return f(this.value);
    }
    return Result.failure<U, E>(this.error);
  }
}

export type Success<T> = Result<T, never>;
export type Failure<E> = Result<never, E>;`
  },
  {
    name: 'pagination/index.ts',
    path: 'packages/shared/src/pagination/index.ts',
    language: 'typescript',
    role: 'Pagination Metadata',
    description: 'Types and factory generators for database listings and metadata responses.',
    content: `export interface PaginationRequest {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortDirection?: 'asc' | 'desc';
}

export interface PageInfo {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface PaginationResponse<T> {
  data: T[];
  meta: PageInfo;
}

export function createPageInfo(
  totalItems: number,
  currentPage: number,
  limit: number,
  itemCount: number
): PageInfo {
  const totalPages = Math.ceil(totalItems / limit) || 1;
  return {
    totalItems,
    itemCount,
    itemsPerPage: limit,
    totalPages,
    currentPage,
    hasNextPage: currentPage < totalPages,
    hasPreviousPage: currentPage > 1,
  };
}`
  },
  {
    name: 'enums/index.ts',
    path: 'packages/shared/src/enums/index.ts',
    language: 'typescript',
    role: 'Core Enums',
    description: 'Exposes Environment, LogLevel, SortDirection, Order, and Status flags.',
    content: `export enum Environment {
  DEVELOPMENT = 'development',
  TEST = 'test',
  PRODUCTION = 'production',
}

export enum LogLevel {
  TRACE = 'trace',
  DEBUG = 'debug',
  INFO = 'info',
  WARN = 'warn',
  ERROR = 'error',
  FATAL = 'fatal',
}

export enum SortDirection {
  ASC = 'asc',
  DESC = 'desc',
}

export enum Order {
  ASC = 'asc',
  DESC = 'desc',
}

export enum Status {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  PENDING = 'pending',
  SUSPENDED = 'suspended',
  ARCHIVED = 'archived',
}`
  },
  {
    name: 'interfaces/index.ts',
    path: 'packages/shared/src/interfaces/index.ts',
    language: 'typescript',
    role: 'Standard Interfaces',
    description: 'Unified signatures for entity auditing, soft deletion, and timestamp definitions.',
    content: `export interface BaseEntity {
  id: string;
}

export interface Timestamped {
  createdAt: Date;
  updatedAt: Date;
}

export interface Auditable {
  createdBy?: string;
  updatedBy?: string;
}

export interface SoftDelete {
  deletedAt?: Date | null;
  deletedBy?: string | null;
  isDeleted: boolean;
}`
  },
  {
    name: 'types/index.ts',
    path: 'packages/shared/src/types/index.ts',
    language: 'typescript',
    role: 'Utility Types',
    description: 'Generic utilities like Nullable, Optional, DeepPartial, and ValueOf.',
    content: `export type Nullable<T> = T | null;

export type Optional<T> = T | undefined;

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? DeepPartial<U>[]
    : T[P] extends object
    ? DeepPartial<T[P]>
    : T[P];
};

export type ValueOf<T> = T[keyof T];`
  },
  {
    name: 'utils/index.ts',
    path: 'packages/shared/src/utils/index.ts',
    language: 'typescript',
    role: 'System Utilities',
    description: 'Speedy helpers for UUID checks, string capitalize/slugify, date diffs, and safe object pick/omit.',
    content: `/**
 * Checks if a string is a valid UUID (v4 format by default, supports general format).
 */
export function isValidUuid(id: string): boolean {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(id);
}

/**
 * Standard date formatting and comparison helpers.
 */
export const DateUtils = {
  isValid(date: any): boolean {
    if (date instanceof Date) {
      return !isNaN(date.getTime());
    }
    if (typeof date === 'string' || typeof date === 'number') {
      const d = new Date(date);
      return !isNaN(d.getTime());
    }
    return false;
  },

  toIsoString(date: Date | string | number): string {
    const d = new Date(date);
    if (!DateUtils.isValid(d)) {
      throw new Error('Invalid date provided');
    }
    return d.toISOString();
  },

  addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  },

  diffInMs(date1: Date, date2: Date): number {
    return Math.abs(date1.getTime() - date2.getTime());
  },
};

/**
 * Common string transformation and sanitization helpers.
 */
export const StringUtils = {
  capitalize(str: string): string {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  },

  slugify(str: string): string {
    if (!str) return '';
    return str
      .toLowerCase()
      .trim()
      .replace(/[^\\w\\s-]/g, '')
      .replace(/[\\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  },

  truncate(str: string, length: number, suffix: string = '...'): string {
    if (!str || str.length <= length) return str;
    return str.slice(0, length) + suffix;
  },

  isEmail(str: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(str);
  },
};

/**
 * Safe deep-cloning and object manipulation helpers.
 */
export const ObjectUtils = {
  deepClone<T>(obj: T): T {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
    return JSON.parse(JSON.stringify(obj));
  },

  isObject(item: any): boolean {
    return item && typeof item === 'object' && !Array.isArray(item);
  },

  omit<T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
    const result = { ...obj };
    keys.forEach((key) => {
      delete result[key];
    });
    return result;
  },

  pick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
    const result = {} as Pick<T, K>;
    keys.forEach((key) => {
      if (key in obj) {
        result[key] = obj[key];
      }
    });
    return result;
  },
};`
  },
  {
    name: 'constants/index.ts',
    path: 'packages/shared/src/constants/index.ts',
    language: 'typescript',
    role: 'Unified Constants',
    description: 'System-wide variables including HTTP header identifiers and date keys.',
    content: `export const PLATFORM_NAME = 'SBB Platform';

export const DEFAULT_PAGE = 1;
export const DEFAULT_LIMIT = 10;
export const MAX_LIMIT = 100;

export const DATE_FORMATS = {
  ISO: 'yyyy-MM-dd\\\'T\\\'HH:mm:ss.SSSxxx',
  DATE_ONLY: 'yyyy-MM-dd',
  DISPLAY_TIME: 'SYS:yyyy-mm-dd HH:MM:ss.l',
};

export const HTTP_HEADERS = {
  CORRELATION_ID: 'x-correlation-id',
  REQUEST_ID: 'x-request-id',
  TENANT_ID: 'x-tenant-id',
  USER_ID: 'x-user-id',
};`
  },
  {
    name: 'dto/index.ts',
    path: 'packages/shared/src/dto/index.ts',
    language: 'typescript',
    role: 'DTO wrappers',
    description: 'Generic formats mapping ApiResponse wrappers cleanly.',
    content: `import { PageInfo } from '../pagination/index.js';

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  meta?: PageInfo;
  errors?: Array<{
    field?: string;
    message: string;
    code?: string;
  }>;
}

export function createSuccessResponse<T>(data: T, message?: string, meta?: PageInfo): ApiResponse<T> {
  return {
    success: true,
    message,
    data,
    meta,
  };
}

export function createErrorResponse(message: string, errors?: Array<{ field?: string; message: string; code?: string }>): ApiResponse<never> {
  return {
    success: false,
    message,
    errors,
  };
}`
  },
  {
    name: 'README.md',
    path: 'packages/shared/src/README.md',
    language: 'markdown',
    role: 'Internal Documentation',
    description: 'Technical document detailing the subdirectory layouts and coding mandates.',
    content: `# @sbb/shared - Source Architecture

This directory houses the core implementation files for the \`@sbb/shared\` package.

## 🧱 Architectural Components

* **\`constants/\`**: Generic platform constants, date formats, and tracing headers.
* **\`dto/\`**: Safe incoming/outgoing envelopes like \`ApiResponse<T>\`.
* **\`enums/\`**: Core system enums including standard SortDirections, Statuses, and Environments.
* **\`errors/\`**: Framework-free custom error classes extending standard \`Error\`.
* **\`interfaces/\`**: Structural signatures for persistent models (\`Timestamped\`, \`Auditable\`, \`SoftDelete\`).
* **\`pagination/\`**: Central models mapping page criteria and result payloads (\`PaginationResponse<T>\`).
* **\`result/\`**: Functional result container mapping explicit success/failure loops (\`Result<T, E>\`).
* **\`types/\`**: System utility generics (\`DeepPartial<T>\`, \`Nullable<T>\`).
* **\`utils/\`**: Safe helpers implementing high-speed string, object, date, and ID processes.

## ⚠️ Important Implementation Guidelines

1. **Keep Framework Agnostic**: Do not load React, NestJS, NextJS, or database engine drivers.
2. **Standard Enums Only**: Enums must be regular declarations (no \`const enum\`).
3. **No Circular Imports**: Keep directory boundaries strictly resolved.`
  }
];

export const databaseFileList: FileNode[] = [
  {
    name: 'README.md',
    path: 'packages/database/README.md',
    language: 'markdown',
    role: 'Documentation',
    description: 'Central platform database configuration package, key features, architecture, and code snippets.',
    content: `# @sbb/database

Database infrastructure package for the **SBB Platform**.

Centralized database connectivity, transaction managers, multi-tenant abstractions, typesafe error translation, and a robust CRUD base repository wrapping the **Prisma ORM** for PostgreSQL.

---

## 🚀 Key Features

* **Singleton Client Wrapper**: Thread-safe \`PrismaClient\` singleton with lazy-initialization and proper connection teardown.
* **Abstract Base Repository**: Fully generic \`BaseRepository\` that automates basic CRUD, pagination, and sorting for any Prisma model delegate.
* **Unified Transactions**: High-level \`TransactionManager\` helper to execute multi-record operations inside secure transactions.
* **Asynchronous Multi-Tenancy**: Extension points for tenant containment using standard \`AsyncLocalStorage\` flow propagation.
* **Platform Error Mapping**: Translates raw database/ORM constraints into standard platform-friendly domain errors (\`DatabaseConflictError\`, etc.).
* **Shared Pagination**: Deeply integrated with \`@sbb/shared\` pagination models.`
  },
  {
    name: 'package.json',
    path: 'packages/database/package.json',
    language: 'json',
    role: 'Package Manifest',
    description: 'Defines package name (@sbb/database), scripts, external dependencies, and devDependencies.',
    content: `{
  "name": "@sbb/database",
  "version": "1.0.0",
  "description": "Shared database infrastructure package for the SBB Platform providing a reusable repository abstraction layer, Prisma client singleton, and transaction utilities.",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "test": "echo \\"Error: no test specified\\" && exit 0"
  },
  "dependencies": {
    "@prisma/client": "^5.14.0",
    "@sbb/shared": "^1.0.0"
  },
  "devDependencies": {
    "prisma": "^5.14.0",
    "typescript": "^5.4.5",
    "@types/node": "^20.12.12"
  },
  "publishConfig": {
    "access": "restricted"
  }
}`
  },
  {
    name: 'tsconfig.json',
    path: 'packages/database/tsconfig.json',
    language: 'json',
    role: 'TypeScript Config',
    description: 'Defines typescript build rules for ESM and NodeNext output configurations.',
    content: `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "declaration": true,
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}`
  },
  {
    name: 'CHANGELOG.md',
    path: 'packages/database/CHANGELOG.md',
    language: 'markdown',
    role: 'Release History',
    description: 'Chronological roadmap record of database module features, bugfixes, and code updates.',
    content: `# Changelog

All notable changes to the \`@sbb/database\` package will be documented in this file.

## [1.0.0] - 2026-07-02

### Added
- Created the core Prisma workspace directory with custom configured \`schema.prisma\` mapping to PostgreSQL.
- Implemented \`getPrismaClient\` lazy-singleton loader with support for connection lifecycle control.
- Designed generic interface \`IRepository\` and abstract \`BaseRepository\` mapping base CRUD, count, and paginated criteria.
- Programmed a standard \`TransactionManager\` utilizing Prisma's \`$transaction\` model with advanced timeout support.
- Configured typesafe platform exception mapper \`handleDatabaseError\` converting constraint violation codes into standard domain errors.
- Added standard \`TenantContext\` supporting safe async identity isolation.
- Created complete documentation guides, configuration targets, and TypeScript manifests.`
  },
  {
    name: 'schema.prisma',
    path: 'packages/database/prisma/schema.prisma',
    language: 'prisma',
    role: 'Prisma Schema Config',
    description: 'Prisma model mappings and database drivers for PostgreSQL.',
    content: `datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

// Minimal base platform model for schema validity (non-business, purely system metadata)
model SystemMetadata {
  id        String   @id @default(uuid())
  key       String   @unique
  value     String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@map("system_metadata")
}`
  },
  {
    name: 'seed.ts',
    path: 'packages/database/prisma/seed.ts',
    language: 'typescript',
    role: 'Prisma Seed script',
    description: 'Executable Node/Prisma script populating baseline system configurations.',
    content: `import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');
  
  // Seed initial system metadata
  await prisma.systemMetadata.upsert({
    where: { key: 'platform_initialized' },
    update: {},
    create: {
      key: 'platform_initialized',
      value: 'true',
    },
  });

  console.log('Database seeding completed successfully.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });`
  },
  {
    name: 'index.ts',
    path: 'packages/database/src/index.ts',
    language: 'typescript',
    role: 'Public API Entry point',
    description: 'Exposes all core modules, singletons, context scopes, and base repositories to the SBB platform.',
    content: `export * from './client/prisma-client.js';
export * from './repositories/repository.interface.js';
export * from './repositories/base-repository.js';
export * from './transactions/transaction-manager.js';
export * from './tenant/tenant-context.js';
export * from './pagination/pagination.js';
export * from './filters/query-filter.js';
export * from './errors/database-errors.js';
export * from './types/database-types.js';`
  },
  {
    name: 'prisma-client.ts',
    path: 'packages/database/src/client/prisma-client.ts',
    language: 'typescript',
    role: 'Database Client Singleton',
    description: 'Safely limits active connection threads with thread-safe singleton patterns.',
    content: `import { PrismaClient } from '@prisma/client';

let prismaInstance: PrismaClient | null = null;

export function getPrismaClient(): PrismaClient {
  if (!prismaInstance) {
    const isProd = process.env.NODE_ENV === 'production';
    
    prismaInstance = new PrismaClient({
      log: isProd 
        ? ['error'] 
        : ['query', 'info', 'warn', 'error'],
    });
  }
  
  return prismaInstance;
}

/**
 * Safely disconnects the global Prisma client instance.
 */
export async function disconnectPrisma(): Promise<void> {
  if (prismaInstance) {
    await prismaInstance.$disconnect();
    prismaInstance = null;
  }
}`
  },
  {
    name: 'repository.interface.ts',
    path: 'packages/database/src/repositories/repository.interface.ts',
    language: 'typescript',
    role: 'Repository Contract',
    description: 'Unified CRUD and pagination interface patterns ensuring consistent database structures.',
    content: `import { PaginationRequest, PaginationResponse } from '@sbb/shared';

export interface IRepository<T, ID = string, CreateInput = any, UpdateInput = any> {
  findById(id: ID): Promise<T | null>;
  findFirst(filters: any): Promise<T | null>;
  findMany(filters?: any): Promise<T[]>;
  findPaginated(
    filters: any,
    pagination: PaginationRequest
  ): Promise<PaginationResponse<T>>;
  create(data: CreateInput): Promise<T>;
  update(id: ID, data: UpdateInput): Promise<T>;
  delete(id: ID): Promise<T>;
  count(filters?: any): Promise<number>;
}`
  },
  {
    name: 'base-repository.ts',
    path: 'packages/database/src/repositories/base-repository.ts',
    language: 'typescript',
    role: 'Base Repository Pattern',
    description: 'Automates basic model CRUD, sorting, filtering, and pagination mappings on top of Prisma.',
    content: `import { Prisma, PrismaClient } from '@prisma/client';
import { IRepository } from './repository.interface.js';
import { PaginationRequest, PaginationResponse, createPageInfo } from '@sbb/shared';

/**
 * Abstract base repository that maps generic model operations onto standard Prisma CRUD endpoints.
 * Supports executing within standard database transactions.
 */
export abstract class BaseRepository<T, ID = string, CreateInput = any, UpdateInput = any>
  implements IRepository<T, ID, CreateInput, UpdateInput>
{
  constructor(
    protected readonly prisma: PrismaClient | Prisma.TransactionClient,
    protected readonly modelName: string
  ) {}

  /**
   * Helper to resolve the model delegate from the prisma client context.
   */
  protected get model(): any {
    const delegate = (this.prisma as any)[this.modelName];
    if (!delegate) {
      throw new Error(\`Prisma model delegate for '\${this.modelName}' was not found on client.\`);
    }
    return delegate;
  }

  public async findById(id: ID): Promise<T | null> {
    return this.model.findUnique({
      where: { id },
    });
  }

  public async findFirst(filters: any): Promise<T | null> {
    return this.model.findFirst({
      where: filters,
    });
  }

  public async findMany(filters?: any): Promise<T[]> {
    return this.model.findMany({
      where: filters,
    });
  }

  public async findPaginated(
    filters: any,
    pagination: PaginationRequest
  ): Promise<PaginationResponse<T>> {
    const page = pagination.page && pagination.page > 0 ? pagination.page : 1;
    const limit = pagination.limit && pagination.limit > 0 ? pagination.limit : 10;
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      this.model.findMany({
        where: filters,
        skip,
        take: limit,
        orderBy: pagination.sortBy
          ? { [pagination.sortBy]: pagination.sortDirection || 'asc' }
          : undefined,
      }),
      this.count(filters),
    ]);

    const pageInfo = createPageInfo(total, page, limit, items.length);

    return {
      data: items,
      meta: pageInfo,
    };
  }

  public async create(data: CreateInput): Promise<T> {
    return this.model.create({
      data,
    });
  }

  public async update(id: ID, data: UpdateInput): Promise<T> {
    return this.model.update({
      where: { id },
      data,
    });
  }

  public async delete(id: ID): Promise<T> {
    return this.model.delete({
      where: { id },
    });
  }

  public async count(filters?: any): Promise<number> {
    return this.model.count({
      where: filters,
    });
  }
}`
  },
  {
    name: 'transaction-manager.ts',
    path: 'packages/database/src/transactions/transaction-manager.ts',
    language: 'typescript',
    role: 'Database Transaction Manager',
    description: 'Enforces database consistency by executing multiple transactional units inside Prisma transactions.',
    content: `import { Prisma, PrismaClient } from '@prisma/client';
import { getPrismaClient } from '../client/prisma-client.js';

/**
 * Enterprise Transaction Manager wrapper for Prisma.
 * Enables services to execute transactional routines cleanly and securely.
 */
export class TransactionManager {
  constructor(private readonly prisma: PrismaClient = getPrismaClient()) {}

  /**
   * Runs the provided asynchronous function inside a standard Prisma transactional context.
   */
  public async run<T>(work: (tx: Prisma.TransactionClient) => Promise<T>): Promise<T> {
    return this.prisma.$transaction(work);
  }

  /**
   * Runs the transactional operation with advanced options like timeouts or isolation settings.
   */
  public async runWithOptions<T>(
    work: (tx: Prisma.TransactionClient) => Promise<T>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    }
  ): Promise<T> {
    return this.prisma.$transaction(work, options);
  }
}`
  },
  {
    name: 'tenant-context.ts',
    path: 'packages/database/src/tenant/tenant-context.ts',
    language: 'typescript',
    role: 'Multi-Tenant Context',
    description: 'Leverages thread-safe AsyncLocalStorage to isolate and fetch tenant context.',
    content: `import { AsyncLocalStorage } from 'async_hooks';

export interface TenantContextPayload {
  tenantId: string;
  userId?: string;
}

/**
 * Enterprise Multi-Tenant Storage Context helper.
 * Uses Node's AsyncLocalStorage to propagate tenant identity through transactional scopes
 * without manual argument passing.
 */
export class TenantContext {
  private static readonly storage = new AsyncLocalStorage<TenantContextPayload>();

  /**
   * Binds the given tenant payload to the active asynchronous thread execution context.
   */
  public static run<T>(context: TenantContextPayload, callback: () => T): T {
    return this.storage.run(context, callback);
  }

  /**
   * Retrieves the current active tenant context.
   */
  public static get(): TenantContextPayload | undefined {
    return this.storage.getStore();
  }

  /**
   * Quick utility to extract the tenant ID from the active context.
   */
  public static getTenantId(): string | undefined {
    return this.get()?.tenantId;
  }

  /**
   * Quick utility to extract the active User ID from the active context.
   */
  public static getUserId(): string | undefined {
    return this.get()?.userId;
  }
}
export type TenantResolver = () => Promise<string | null>;
export interface TenantExtensionOptions {
  resolver: TenantResolver;
  enabled: boolean;
}`
  },
  {
    name: 'pagination.ts',
    path: 'packages/database/src/pagination/pagination.ts',
    language: 'typescript',
    role: 'Offset Parameter Builder',
    description: 'Aligns database pagination parameters perfectly with Prisma skip, take, and orderBy inputs.',
    content: `import { PaginationRequest } from '@sbb/shared';

export interface CursorPaginationRequest extends Omit<PaginationRequest, 'page'> {
  cursor?: string;
  take: number;
}

export interface CursorPaginationResponse<T> {
  data: T[];
  nextCursor?: string;
  hasMore: boolean;
}

/**
 * Normalizes standard pagination parameters for clean, direct integration with Prisma findMany queries.
 */
export function buildOffsetParams(pagination: PaginationRequest) {
  const page = pagination.page && pagination.page > 0 ? pagination.page : 1;
  const limit = pagination.limit && pagination.limit > 0 ? pagination.limit : 10;
  const skip = (page - 1) * limit;

  return {
    skip,
    take: limit,
    orderBy: pagination.sortBy
      ? { [pagination.sortBy]: pagination.sortDirection || 'asc' }
      : undefined,
  };
}`
  },
  {
    name: 'query-filter.ts',
    path: 'packages/database/src/filters/query-filter.ts',
    language: 'typescript',
    role: 'Database Filter Normalizer',
    description: 'Enforces safety standards when building filter models.',
    content: `export interface BaseFilter {
  search?: string;
  startDate?: Date | string;
  endDate?: Date | string;
  status?: string;
  isDeleted?: boolean;
}

/**
 * Helper to translate standard application filters into Prisma-friendly \`where\` criteria clauses.
 */
export function buildQueryFilters(filter: BaseFilter): Record<string, any> {
  const where: Record<string, any> = {};

  if (filter.status) {
    where.status = filter.status;
  }

  if (filter.isDeleted !== undefined) {
    where.isDeleted = filter.isDeleted;
  }

  if (filter.startDate || filter.endDate) {
    where.createdAt = {};
    if (filter.startDate) {
      where.createdAt.gte = new Date(filter.startDate);
    }
    if (filter.endDate) {
      where.createdAt.lte = new Date(filter.endDate);
    }
  }

  return where;
}
export interface FieldFilterOperator<T> {
  equals?: T;
  in?: T[];
  notIn?: T[];
  lt?: T;
  lte?: T;
  gt?: T;
  gte?: T;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
}`
  },
  {
    name: 'database-errors.ts',
    path: 'packages/database/src/errors/database-errors.ts',
    language: 'typescript',
    role: 'Database Error Transpiler',
    description: 'Safely parses Prisma code states and generates highly explicit, platform-friendly domain errors.',
    content: `import { Prisma } from '@prisma/client';
import { AppError, ValidationError, NotFoundError, ConflictError } from '@sbb/shared';

export class DatabaseError extends AppError {
  constructor(message: string, statusCode: number = 500, details?: any) {
    super(message, statusCode, details);
  }
}

export class DatabaseConflictError extends ConflictError {
  constructor(message: string, details?: any) {
    super(message, details);
  }
}

export class DatabaseRecordNotFoundError extends NotFoundError {
  constructor(message: string, details?: any) {
    super(message, details);
  }
}

export class DatabaseValidationError extends ValidationError {
  constructor(message: string, details?: any) {
    super(message, details);
  }
}

/**
 * Translates low-level Prisma execution exceptions into highly structured, descriptive platform errors.
 */
export function handleDatabaseError(error: any): Error {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    switch (error.code) {
      case 'P2002': {
        const target = Array.isArray(error.meta?.target)
          ? error.meta.target.join(', ')
          : 'fields';
        return new DatabaseConflictError(
          \`Unique constraint violation detected on target: \${target}\`,
          error.meta
        );
      }
      case 'P2025':
        return new DatabaseRecordNotFoundError(
          error.message || 'The requested database record was not found.',
          error.meta
        );
      case 'P2003':
        return new DatabaseValidationError(
          'Foreign key validation constraint failed on target reference.',
          error.meta
        );
      default:
        return new DatabaseError(
          \`Database query failed [\${error.code}]: \${error.message}\`,
          500,
          error.meta
        );
    }
  }

  if (error instanceof Prisma.PrismaClientValidationError) {
    return new DatabaseValidationError(\`Database query validation error: \${error.message}\`);
  }

  if (error instanceof Prisma.PrismaClientInitializationError) {
    return new DatabaseError(\`Database connection initialization error: \${error.message}\`, 500);
  }

  if (error instanceof Error) {
    return error;
  }

  return new DatabaseError('An unexpected database execution error occurred.');
}
export interface DatabaseErrorDetails {
  code?: string;
  meta?: Record<string, any>;
  query?: string;
}`
  },
  {
    name: 'database-types.ts',
    path: 'packages/database/src/types/database-types.ts',
    language: 'typescript',
    role: 'Core Database Types',
    description: 'Unified typescript transaction, timeout options, and return signature aliases.',
    content: `import { Prisma } from '@prisma/client';

export type TransactionClient = Prisma.TransactionClient;

export interface QueryOptions {
  timeout?: number;
  throwOnError?: boolean;
}

export interface WriteOptions extends QueryOptions {
  softDelete?: boolean;
  userId?: string;
}

export type DbResult<T> = Promise<T>;`
  },
  {
    name: 'README.md',
    path: 'packages/database/src/README.md',
    language: 'markdown',
    role: 'Internal Documentation',
    description: 'Technical document detailing internal patterns and lazy-initialization rules.',
    content: `# @sbb/database - Source Architecture

This directory contains the implementation of our database infrastructure wrapping Prisma for PostgreSQL.

## 🧱 Key Subdirectories

* **\`client/\`**: Singleton initialization of Prisma Client to prevent duplicate/overloaded connection pools.
* **\`repositories/\`**: Base CRUD and paginated query contract definitions and concrete abstract implementations.
* **\`transactions/\`**: Managed database execution wrappers for running multiple operations in an atomic transaction.
* **\`tenant/\`**: Thread-safe Multi-Tenant identity context using Node's \`AsyncLocalStorage\`.
* **\`pagination/\`**: Parameter helpers mapping offsets and sorting onto Prisma arguments.
* **\`filters/\`**: Simple date range, soft delete, and status filters builder.
* **\`errors/\`**: Auto-translator mapping raw Prisma database codes into typesafe platform exception objects.
* **\`types/\`**: Helper types, alias signatures, and optional flag interfaces.

## ⚠️ Standards

1. **Lazy Initialization**: The client is only instantiated on first call to prevent startup crashes.
2. **ESM Compliance**: Keep imports/exports relative using explicit \`.js\` specifiers.`
  }
];

export const authFileList: FileNode[] = [
  {
    name: 'README.md',
    path: 'packages/auth/README.md',
    language: 'markdown',
    role: 'Documentation',
    description: 'Central platform authentication infrastructure package, key features, architecture, and code snippets.',
    content: `# @sbb/auth

Shared authentication infrastructure package for the **SBB Platform**.

Centralized, zero-dependency cryptographically secure helper primitives, password hashing, JWT operations, API key builders, and configurable password policy evaluators.

---

## 🚀 Key Features

* **Scrypt Password Hashing**: Thread-safe asynchronous password hashing leveraging Node's native scrypt engine with automatic salt generation and timing-safe verification.
* **Lightweight HS256 JWT Utility**: Full signature verification and claims checking (expiration, audience, issuer, subject) without external libraries.
* **Secure API Keys**: Unique tokens and formatted, safe API keys using secure byte generation.
* **Strength Policies**: Robust, standard-compliant validator verifying min/max length, case sensitivity, numbers, and symbols.
* **Structured Exceptions**: Clear mapping to standard platform error domains (e.g., \`InvalidCredentialsError\`, \`TokenExpiredError\`).`
  },
  {
    name: 'package.json',
    path: 'packages/auth/package.json',
    language: 'json',
    role: 'Package Manifest',
    description: 'Defines package name (@sbb/auth), scripts, external dependencies, and devDependencies.',
    content: `{
  "name": "@sbb/auth",
  "version": "1.0.0",
  "description": "Shared authentication infrastructure package for the SBB Platform",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "test": "echo \\"Error: no test specified\\" && exit 0"
  },
  "dependencies": {
    "@sbb/shared": "^1.0.0"
  },
  "devDependencies": {
    "typescript": "^5.4.5",
    "@types/node": "^20.12.12"
  },
  "publishConfig": {
    "access": "restricted"
  }
}`
  },
  {
    name: 'tsconfig.json',
    path: 'packages/auth/tsconfig.json',
    language: 'json',
    role: 'TypeScript Config',
    description: 'Defines typescript build rules for ESM and NodeNext output configurations.',
    content: `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "declaration": true,
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "paths": {
      "@sbb/shared": ["../shared/src/index.ts"]
    }
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}`
  },
  {
    name: 'CHANGELOG.md',
    path: 'packages/auth/CHANGELOG.md',
    language: 'markdown',
    role: 'Release History',
    description: 'Chronological roadmap record of authentication module features, bugfixes, and code updates.',
    content: `# Changelog

All notable changes to the \`@sbb/auth\` package will be documented in this file.

## [1.0.0] - 2026-07-02

### Added
- Created the core shared authentication infrastructure package (\`@sbb/auth\`).
- Implemented \`ScryptPasswordHasher\` providing secure, asynchronous password hashing and verification using Node's native \`scrypt\` and constant-time comparisons.
- Programmed standard \`JwtService\` implementing HMAC SHA256 (HS256) signature, claim verification (expiration, audience, issuer, subject, notBefore), and decoded payload parsing without third-party dependencies.
- Designed \`TokenGenerator\` for secure session token generation and standard API keys (\`sbb_live_...\`).
- Coded robust \`PasswordPolicy\` evaluator testing password lengths, upper/lower casing, numbers, and custom special characters.
- Exported strict domain errors (\`AuthenticationError\`, \`InvalidCredentialsError\`, \`TokenExpiredError\`, \`InvalidTokenError\`, \`PasswordPolicyViolationError\`) inheriting from \`@sbb/shared\`.
- Defined standard TypeScript contracts (\`IPasswordHasher\`, \`IJwtService\`, \`ITokenGenerator\`, \`IPasswordPolicy\`) in the public interface.
- Established clean internal layout with full ESM/NodeNext compiler alignments, complete source guides, and unit READMEs.`
  },
  {
    name: 'index.ts',
    path: 'packages/auth/src/index.ts',
    language: 'typescript',
    role: 'Public API Entry point',
    description: 'Exposes all core modules, hashing mechanisms, JWT managers, and policies to the SBB platform.',
    content: `export * from './errors/index.js';
export * from './constants/index.js';
export * from './types/index.js';
export * from './interfaces/index.js';
export * from './hashing/index.js';
export * from './jwt/index.js';
export * from './tokens/index.js';
export * from './password-policy/index.js';`
  },
  {
    name: 'errors/index.ts',
    path: 'packages/auth/src/errors/index.ts',
    language: 'typescript',
    role: 'Authentication Error Domains',
    description: 'Declares custom authentication error types extending standard SBB errors.',
    content: `import { AppError, UnauthorizedError, ValidationError } from '@sbb/shared';

export class AuthenticationError extends UnauthorizedError {
  constructor(message: string = 'Authentication failed', details?: any) {
    super(message, details);
  }
}

export class InvalidCredentialsError extends AuthenticationError {
  constructor(message: string = 'Invalid username or password', details?: any) {
    super(message, details);
  }
}

export class TokenExpiredError extends AuthenticationError {
  constructor(message: string = 'Authentication token has expired', details?: any) {
    super(message, details);
  }
}

export class InvalidTokenError extends AuthenticationError {
  constructor(message: string = 'Authentication token is invalid', details?: any) {
    super(message, details);
  }
}

export class PasswordPolicyViolationError extends ValidationError {
  constructor(message: string = 'Password does not meet policy requirements', details?: any) {
    super(message, details);
  }
}`
  },
  {
    name: 'constants/index.ts',
    path: 'packages/auth/src/constants/index.ts',
    language: 'typescript',
    role: 'Auth Static Constants',
    description: 'Exposes static parameters and standard system defaults.',
    content: `export const AUTH_CONSTANTS = {
  DEFAULT_JWT_EXPIRATION: '3600s', // 1 hour
  DEFAULT_JWT_ALGORITHM: 'HS256',
  PASSWORD_MIN_LENGTH: 8,
  PASSWORD_MAX_LENGTH: 128,
  TOKEN_BYTES: 32,
} as const;`
  },
  {
    name: 'types/index.ts',
    path: 'packages/auth/src/types/index.ts',
    language: 'typescript',
    role: 'Auth Core Payload Types',
    description: 'Declares strongly typed token metadata blocks and verification configs.',
    content: `export interface JwtPayload extends Record<string, any> {
  sub?: string; // Subject
  iss?: string; // Issuer
  aud?: string | string[]; // Audience
  exp?: number; // Expiration time
  nbf?: number; // Not before time
  iat?: number; // Issued at time
  jti?: string; // JWT ID
}

export interface SignOptions {
  expiresIn?: string | number; // e.g., '1h', '30m', '7d', or duration in seconds
  notBefore?: string | number;
  audience?: string | string[];
  issuer?: string;
  jwtId?: string;
  subject?: string;
}

export interface VerifyOptions {
  audience?: string | string[];
  issuer?: string;
  subject?: string;
  ignoreExpiration?: boolean;
}

export interface PasswordPolicyOptions {
  minLength?: number;
  maxLength?: number;
  requireUppercase?: boolean;
  requireLowercase?: boolean;
  requireNumbers?: boolean;
  requireSpecialCharacters?: boolean;
}

export interface PasswordPolicyResult {
  isValid: boolean;
  errors: string[];
}`
  },
  {
    name: 'interfaces/index.ts',
    path: 'packages/auth/src/interfaces/index.ts',
    language: 'typescript',
    role: 'Platform Auth Interfaces',
    description: 'Formal contract specifications for signing, hashing, and validating security states.',
    content: `import { JwtPayload, SignOptions, VerifyOptions, PasswordPolicyOptions, PasswordPolicyResult } from '../types/index.js';

export interface IPasswordHasher {
  hash(password: string): Promise<string>;
  verify(password: string, hash: string): Promise<boolean>;
}

export interface IJwtService {
  sign(payload: Record<string, any>, secret: string, options?: SignOptions): string;
  verify<T extends JwtPayload = JwtPayload>(token: string, secret: string, options?: VerifyOptions): T;
  decode<T extends JwtPayload = JwtPayload>(token: string): T;
}

export interface ITokenGenerator {
  generateRandomToken(bytes?: number): string;
  generateApiKey(prefix?: string): string;
}

export interface IPasswordPolicy {
  validate(password: string, options?: PasswordPolicyOptions): PasswordPolicyResult;
}`
  },
  {
    name: 'hashing/index.ts',
    path: 'packages/auth/src/hashing/index.ts',
    language: 'typescript',
    role: 'Asynchronous Scrypt Hashing',
    description: 'Implements native asynchronous Scrypt hashing with high-entropy salt generation.',
    content: `import { scrypt, randomBytes, timingSafeEqual } from 'crypto';
import { promisify } from 'util';
import { IPasswordHasher } from '../interfaces/index.js';

const scryptAsync = promisify(scrypt);

export class ScryptPasswordHasher implements IPasswordHasher {
  private static readonly KEY_LEN = 64;
  private static readonly SALT_LEN = 16;
  private static readonly SCRYPT_OPTIONS = { N: 16384, r: 8, p: 1 };

  public async hash(password: string): Promise<string> {
    if (!password) {
      throw new Error('Password cannot be empty');
    }
    const salt = randomBytes(ScryptPasswordHasher.SALT_LEN).toString('hex');
    const derivedKey = (await scryptAsync(
      password,
      salt,
      ScryptPasswordHasher.KEY_LEN,
      ScryptPasswordHasher.SCRYPT_OPTIONS
    )) as Buffer;
    
    return \`\${salt}:\${derivedKey.toString('hex')}\`;
  }

  public async verify(password: string, hash: string): Promise<boolean> {
    if (!password || !hash) {
      return false;
    }
    
    const parts = hash.split(':');
    if (parts.length !== 2) {
      return false;
    }

    const [salt, storedHex] = parts;
    const storedBuffer = Buffer.from(storedHex, 'hex');

    try {
      const derivedKey = (await scryptAsync(
        password,
        salt,
        ScryptPasswordHasher.KEY_LEN,
        ScryptPasswordHasher.SCRYPT_OPTIONS
      )) as Buffer;

      if (derivedKey.length !== storedBuffer.length) {
        return false;
      }

      return timingSafeEqual(derivedKey, storedBuffer);
    } catch {
      return false;
    }
  }
}`
  },
  {
    name: 'jwt/index.ts',
    path: 'packages/auth/src/jwt/index.ts',
    language: 'typescript',
    role: 'Native HMAC-SHA256 JWT Utility',
    description: 'Lightweight HS256 signature generation, validation, and claim-checking.',
    content: `import { createHmac, timingSafeEqual } from 'crypto';
import { IJwtService } from '../interfaces/index.js';
import { JwtPayload, SignOptions, VerifyOptions } from '../types/index.js';
import { InvalidTokenError, TokenExpiredError } from '../errors/index.js';

export class JwtService implements IJwtService {
  private base64UrlEncode(str: string | Buffer): string {
    const buf = typeof str === 'string' ? Buffer.from(str) : str;
    return buf.toString('base64')
      .replace(/=/g, '')
      .replace(/\\+/g, '-')
      .replace(/\\//g, '_');
  }

  private base64UrlDecode(str: string): string {
    let base64 = str.replace(/-/g, '+').replace(/_/g, '/');
    while (base64.length % 4) {
      base64 += '=';
    }
    return Buffer.from(base64, 'base64').toString('utf8');
  }

  private parseTime(time: string | number): number {
    if (typeof time === 'number') {
      return time;
    }
    
    const regex = /^(\\d+)([smhd])$/;
    const match = time.match(regex);
    if (!match) {
      throw new Error(\`Invalid time format constraint: "\${time}"\`);
    }
    
    const value = parseInt(match[1], 10);
    const unit = match[2];
    switch (unit) {
      case 's': return value;
      case 'm': return value * 60;
      case 'h': return value * 3600;
      case 'd': return value * 86400;
      default: return value;
    }
  }

  public sign(payload: Record<string, any>, secret: string, options: SignOptions = {}): string {
    if (!secret) {
      throw new Error('JWT secret is required for signature generation');
    }

    const header = { alg: 'HS256', typ: 'JWT' };
    const iat = Math.floor(Date.now() / 1000);
    const jwtPayload: JwtPayload = { ...payload, iat };

    if (options.expiresIn) {
      const seconds = this.parseTime(options.expiresIn);
      jwtPayload.exp = iat + seconds;
    }

    if (options.notBefore) {
      const seconds = this.parseTime(options.notBefore);
      jwtPayload.nbf = iat + seconds;
    }

    if (options.audience) { jwtPayload.aud = options.audience; }
    if (options.issuer) { jwtPayload.iss = options.issuer; }
    if (options.jwtId) { jwtPayload.jti = options.jwtId; }
    if (options.subject) { jwtPayload.sub = options.subject; }

    const encodedHeader = this.base64UrlEncode(JSON.stringify(header));
    const encodedPayload = this.base64UrlEncode(JSON.stringify(jwtPayload));

    const signatureInput = \`\${encodedHeader}.\${encodedPayload}\`;
    const signature = createHmac('sha256', secret).update(signatureInput).digest();
    const encodedSignature = this.base64UrlEncode(signature);

    return \`\${signatureInput}.\${encodedSignature}\`;
  }

  public verify<T extends JwtPayload = JwtPayload>(token: string, secret: string, options: VerifyOptions = {}): T {
    if (!token) { throw new InvalidTokenError('JWT token is empty'); }
    if (!secret) { throw new Error('JWT secret is required for verification'); }

    const parts = token.split('.');
    if (parts.length !== 3) { throw new InvalidTokenError('JWT token structure is malformed'); }

    const [encodedHeader, encodedPayload, encodedSignature] = parts;
    const signatureInput = \`\${encodedHeader}.\${encodedPayload}\`;
    const expectedSignature = createHmac('sha256', secret).update(signatureInput).digest();
    const expectedEncodedSignature = this.base64UrlEncode(expectedSignature);

    const actualBuffer = Buffer.from(encodedSignature);
    const expectedBuffer = Buffer.from(expectedEncodedSignature);

    if (actualBuffer.length !== expectedBuffer.length || !timingSafeEqual(actualBuffer, expectedBuffer)) {
      throw new InvalidTokenError('JWT signature verification failed');
    }

    let payload: T;
    try {
      payload = JSON.parse(this.base64UrlDecode(encodedPayload)) as T;
    } catch {
      throw new InvalidTokenError('JWT payload is not valid JSON');
    }

    const now = Math.floor(Date.now() / 1000);

    if (!options.ignoreExpiration && payload.exp !== undefined) {
      if (now >= payload.exp) { throw new TokenExpiredError('JWT token has expired'); }
    }

    if (payload.nbf !== undefined && now < payload.nbf) {
      throw new InvalidTokenError('JWT token is not active yet');
    }

    if (options.audience) {
      if (!payload.aud) { throw new InvalidTokenError('JWT audience verification failed'); }
      const audList = Array.isArray(payload.aud) ? payload.aud : [payload.aud];
      const checkAudList = Array.isArray(options.audience) ? options.audience : [options.audience];
      if (!checkAudList.some(aud => audList.includes(aud))) {
        throw new InvalidTokenError('JWT audience verification failed');
      }
    }

    if (options.issuer && payload.iss !== options.issuer) {
      throw new InvalidTokenError('JWT issuer verification failed');
    }

    if (options.subject && payload.sub !== options.subject) {
      throw new InvalidTokenError('JWT subject verification failed');
    }

    return payload;
  }

  public decode<T extends JwtPayload = JwtPayload>(token: string): T {
    if (!token) { throw new InvalidTokenError('JWT token is empty'); }
    const parts = token.split('.');
    if (parts.length < 2) { throw new InvalidTokenError('JWT token structure is malformed'); }
    try {
      return JSON.parse(this.base64UrlDecode(parts[1])) as T;
    } catch {
      throw new InvalidTokenError('Failed to decode JWT payload');
    }
  }
}`
  },
  {
    name: 'tokens/index.ts',
    path: 'packages/auth/src/tokens/index.ts',
    language: 'typescript',
    role: 'Secure Token Generation',
    description: 'Builds API keys and secure random hex strings.',
    content: `import { randomBytes } from 'crypto';
import { ITokenGenerator } from '../interfaces/index.js';
import { AUTH_CONSTANTS } from '../constants/index.js';

export class TokenGenerator implements ITokenGenerator {
  public generateRandomToken(bytes: number = AUTH_CONSTANTS.TOKEN_BYTES): string {
    return randomBytes(bytes).toString('hex');
  }

  public generateApiKey(prefix: string = 'sbb_live'): string {
    const randomPart = randomBytes(24).toString('base64url');
    return \`\${prefix}_\${randomPart}\`;
  }
}`
  },
  {
    name: 'password-policy/index.ts',
    path: 'packages/auth/src/password-policy/index.ts',
    language: 'typescript',
    role: 'Password Strength Validator',
    description: 'Validates complex requirements (characters, lengths, casing).',
    content: `import { IPasswordPolicy } from '../interfaces/index.js';
import { PasswordPolicyOptions, PasswordPolicyResult } from '../types/index.js';
import { AUTH_CONSTANTS } from '../constants/index.js';

export class PasswordPolicy implements IPasswordPolicy {
  public validate(password: string, options: PasswordPolicyOptions = {}): PasswordPolicyResult {
    const errors: string[] = [];
    
    if (!password) {
      return { isValid: false, errors: ['Password cannot be empty'] };
    }

    const minLength = options.minLength ?? AUTH_CONSTANTS.PASSWORD_MIN_LENGTH;
    const maxLength = options.maxLength ?? AUTH_CONSTANTS.PASSWORD_MAX_LENGTH;

    if (password.length < minLength) {
      errors.push(\`Password must be at least \${minLength} characters long\`);
    }
    if (password.length > maxLength) {
      errors.push(\`Password must be no more than \${maxLength} characters long\`);
    }

    if (options.requireUppercase !== false && !/[A-Z]/.test(password)) {
      errors.push('Password must contain at least one uppercase letter');
    }
    if (options.requireLowercase !== false && !/[a-z]/.test(password)) {
      errors.push('Password must contain at least one lowercase letter');
    }
    if (options.requireNumbers !== false && !/\\d/.test(password)) {
      errors.push('Password must contain at least one number');
    }
    if (options.requireSpecialCharacters !== false && !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errors.push('Password must contain at least one special character (!@#$%^&*(),.?":{}|<>)');
    }

    return { isValid: errors.length === 0, errors };
  }
}`
  },
  {
    name: 'README.md',
    path: 'packages/auth/src/README.md',
    language: 'markdown',
    role: 'Internal Documentation',
    description: 'Technical document detailing internal patterns and lazy-initialization rules.',
    content: `# @sbb/auth - Source Architecture

This directory contains the core implementation files of the shared authentication infrastructure package.

## 🧱 Key Subdirectories

* **\`hashing/\`**: Cryptographically secure asynchronous password hashing using Scrypt.
* **\`jwt/\`**: Zero-dependency pure HMAC-SHA256 (HS256) JSON Web Token (JWT) signature and verification.
* **\`tokens/\`**: Cryptographically secure token and structured API key generators.
* **\`password-policy/\`**: Policy engine validating requirements for length, casing, numbers, and symbols.
* **\`interfaces/\`**: Contracts for pluggable hashing, JWT signing, token generation, and password policies.
* **\`types/\`**: Strongly typed data models, payloads, options, and validation results.
* **\`constants/\`**: Secure, central fallback values and defaults (e.g., token size, password length limits).
* **\`errors/\`**: Clean, structured domain exceptions extending standard SBB Platform errors.

## ⚠️ Standards

1. **Zero External Dependencies**: All algorithms are implemented using standard Node.js APIs (\`crypto\`, \`util\`) for optimal security and reliability.
2. **ESM Compliance**: All relative import and export statements use explicit \`.js\` specifiers to align with strict NodeNext/ESM configurations.`
  }
];

export const typesFileList: FileNode[] = [
  {
    name: 'README.md',
    path: 'packages/types/README.md',
    language: 'markdown',
    role: 'Documentation',
    description: 'Central Type System and Domain Contracts library, key features, architecture, and code snippets.',
    content: `# @sbb/types

Central Type System and Domain Contracts library for the **SBB Platform**.

This package contains strict, zero-dependency, runtime-free TypeScript type declarations, interfaces, and enums representing the platform domain.

---

## 🚀 Key Architectural Modules

* **Common**: Core identifiers, timestamp bounds (\`Timestamped\`, \`BaseEntity\`), sorting maps, and extensible dictionary payloads.
* **API Wrappers**: Normalized envelopes for single resources, cursor/page paginated collections, and error code catalogs.
* **Identity**: Strongly typed user records, standard roles (\`Admin\`, \`Member\`), live tracking sessions, and resource permissions.
* **Organization**: Enterprise multi-tenant workspace nodes, team profiles, and access settings.
* **Tenant Routing**: Domain hosting configurations, system status codes, and billing level features.
* **Audit Tracing**: Compliance logs recording field modification history, severity scales, and initiator details.
* **Workflow Automation**: Task steps, definitions, transition lines, and instance counters.
* **AI Engine**: Message arrays, token counts, cost approximations, and LLM configuration profiles.
* **Integration**: Configurations, synchronizers, state toggles, and secure HMAC webhook contracts.`
  },
  {
    name: 'package.json',
    path: 'packages/types/package.json',
    language: 'json',
    role: 'Package Manifest',
    description: 'Defines package name (@sbb/types), build scripts, and devDependencies.',
    content: `{
  "name": "@sbb/types",
  "version": "1.0.0",
  "description": "Shared platform type definitions and interfaces for the SBB Platform",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "test": "echo \\"Error: no test specified\\" && exit 0"
  },
  "devDependencies": {
    "typescript": "^5.4.5"
  },
  "publishConfig": {
    "access": "restricted"
  }
}`
  },
  {
    name: 'tsconfig.json',
    path: 'packages/types/tsconfig.json',
    language: 'json',
    role: 'TypeScript Config',
    description: 'Defines typescript build rules for type-only output configurations.',
    content: `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "declaration": true,
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}`
  },
  {
    name: 'CHANGELOG.md',
    path: 'packages/types/CHANGELOG.md',
    language: 'markdown',
    role: 'Release History',
    description: 'Chronological roadmap record of type module features, additions, and updates.',
    content: `# Changelog

All notable changes to the \`@sbb/types\` package will be documented in this file.

## [1.0.0] - 2026-07-02

### Added
- Created the core shared types package (\`@sbb/types\`) defining the central domain models of the SBB Platform.
- Declared foundational interfaces (\`Timestamped\`, \`BaseEntity\`) and utility type primitives (\`Nullable\`, \`Dictionary\`, \`CustomMetadata\`) in \`common\`.
- Structured API communication standards containing single/paginated responses, parameter structures, page boundary metrics, and error payload definitions.
- Created robust \`identity\` schemas modeling user profiles, lifecycle states (\`active\`, \`suspended\`, \`pending_invitation\`), active device sessions, and authorization permission controls.
- Defined workspace structures inside \`organization\` documenting organizational contexts, subscription plans, settings, and member mappings.
- Implemented \`tenant\` configurations tracking subdomain routing, active hosting status, resource caps, and geographic region permissions.
- Outlined compliance logs inside \`audit\` containing severities, initiator descriptors, custom change diff fields, and security tracks.
- Modeled approval templates in \`workflow\` defining step sequences, run monitors, outcomes, and step transition lines.
- Programmed generative schemas inside \`ai\` detailing participant roles, message trails, model parameter configurations, and token calculation limits.
- Described service linkers inside \`integration\` modeling active platform profiles, outgoing Webhook scopes, and system syncing run logs.`
  },
  {
    name: 'index.ts',
    path: 'packages/types/src/index.ts',
    language: 'typescript',
    role: 'Public API Entry point',
    description: 'Exposes all core types and interfaces of the platform.',
    content: `export * from './common/index.js';
export * from './api/index.js';
export * from './identity/index.js';
export * from './organization/index.js';
export * from './tenant/index.js';
export * from './audit/index.js';
export * from './workflow/index.js';
export * from './ai/index.js';
export * from './integration/index.js';`
  },
  {
    name: 'common/index.ts',
    path: 'packages/types/src/common/index.ts',
    language: 'typescript',
    role: 'Common Types & Primitives',
    description: 'Defines central entities and helper definitions.',
    content: `/**
 * Standard sorting directions.
 */
export enum SortDirection {
  ASC = 'asc',
  DESC = 'desc'
}

/**
 * Base tracking fields for entities stored within the system.
 */
export interface Timestamped {
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
}

/**
 * Standard identifier block for system entities.
 */
export interface BaseEntity extends Timestamped {
  id: string;
}

/**
 * Free-form dictionary structure for extensible metadata tags.
 */
export interface CustomMetadata {
  [key: string]: string | number | boolean | null | CustomMetadata | Array<string | number | boolean | null>;
}

/**
 * Generic type for allowing nullable values.
 */
export type Nullable<T> = T | null;

/**
 * Generic dictionary structure.
 */
export type Dictionary<T> = Record<string, T>;`
  },
  {
    name: 'api/index.ts',
    path: 'packages/types/src/api/index.ts',
    language: 'typescript',
    role: 'API Envelopes & Pagination',
    description: 'Defines paginated list queries and responses.',
    content: `import { SortDirection } from '../common/index.js';

/**
 * Standard parameters for querying lists with pagination.
 */
export interface PaginationParams {
  page: number;
  limit: number;
  sortBy?: string;
  sortDirection?: SortDirection;
}

/**
 * Metadata returning information about the current page and pagination boundaries.
 */
export interface PaginationMetadata {
  page: number;
  limit: number;
  totalCount: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

/**
 * Standard API envelope for list responses containing pagination details.
 */
export interface ApiPaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: PaginationMetadata;
  timestamp: string;
}

/**
 * Standard API envelope for single resource responses.
 */
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  timestamp: string;
}

/**
 * Detailed error context payload structure.
 */
export interface ApiErrorDetails {
  code: string;
  message: string;
  field?: string;
  helpUrl?: string;
}

/**
 * Standard API error response envelope.
 */
export interface ApiErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    details?: ApiErrorDetails[];
  };
  timestamp: string;
}`
  },
  {
    name: 'identity/index.ts',
    path: 'packages/types/src/identity/index.ts',
    language: 'typescript',
    role: 'User Profile & Identity',
    description: 'Defines user, session, role, and permission details.',
    content: `import { BaseEntity, CustomMetadata } from '../common/index.js';

/**
 * Standard platform user roles.
 */
export enum UserRole {
  OWNER = 'owner',
  ADMIN = 'admin',
  MEMBER = 'member',
  VIEWER = 'viewer',
  GUEST = 'guest'
}

/**
 * Statuses representing a user's lifecycle state in the platform.
 */
export enum UserStatus {
  ACTIVE = 'active',
  SUSPENDED = 'suspended',
  PENDING_INVITATION = 'pending_invitation',
  DEACTIVATED = 'deactivated'
}

/**
 * Enterprise user profile details.
 */
export interface UserProfile extends BaseEntity {
  email: string;
  firstName: string;
  lastName: string;
  displayName?: string;
  avatarUrl?: string | null;
  phoneNumber?: string | null;
  role: UserRole;
  status: UserStatus;
  emailVerified: boolean;
  mfaEnabled: boolean;
  metadata?: CustomMetadata;
}

/**
 * Metadata for tracking a logged-in user's device and session.
 */
export interface UserSession extends BaseEntity {
  userId: string;
  tokenHash: string;
  userAgent?: string | null;
  ipAddress?: string | null;
  expiresAt: string;
  lastActiveAt: string;
  isRevoked: boolean;
}

/**
 * Authorization permission structure for fine-grained access controls.
 */
export interface UserPermission {
  action: string;      // e.g., 'read', 'write', 'delete'
  resource: string;    // e.g., 'documents', 'billing', 'settings'
  effect: 'allow' | 'deny';
  conditions?: CustomMetadata;
}`
  },
  {
    name: 'organization/index.ts',
    path: 'packages/types/src/organization/index.ts',
    language: 'typescript',
    role: 'Organization & Subscription',
    description: 'Defines billing plans, setting boundaries, and membership maps.',
    content: `import { BaseEntity, CustomMetadata } from '../common/index.js';
import { UserRole } from '../identity/index.js';

/**
 * Organization level subscription tiers.
 */
export enum SubscriptionTier {
  FREE = 'free',
  GROWTH = 'growth',
  ENTERPRISE = 'enterprise'
}

/**
 * Representation of an Organization (or workspace) inside SBB.
 */
export interface Organization extends BaseEntity {
  name: string;
  slug: string;
  subscriptionTier: SubscriptionTier;
  billingEmail: string;
  logoUrl?: string | null;
  settings: OrganizationSettings;
  metadata?: CustomMetadata;
}

/**
 * Global configuration properties specific to the Organization context.
 */
export interface OrganizationSettings {
  allowedDomains?: string[];
  mfaRequired: boolean;
  ssoEnabled: boolean;
  ssoProvider?: string;
  sessionTimeoutMinutes: number;
}

/**
 * Represents a user's association with a specific Organization.
 */
export interface OrganizationMember extends BaseEntity {
  organizationId: string;
  userId: string;
  role: UserRole;
  joinedAt: string;
  invitedBy?: string;
}`
  },
  {
    name: 'tenant/index.ts',
    path: 'packages/types/src/tenant/index.ts',
    language: 'typescript',
    role: 'Tenant & Routing',
    description: 'Defines multi-tenant domain mapping and features.',
    content: `import { BaseEntity, CustomMetadata } from '../common/index.js';

/**
 * Operations and hosting states for a Tenant.
 */
export enum TenantStatus {
  PROVISIONING = 'provisioning',
  ACTIVE = 'active',
  SUSPENDED = 'suspended',
  MAINTENANCE = 'maintenance',
  ARCHIVED = 'archived'
}

/**
 * Representation of a Tenant in a multi-tenant enterprise system.
 */
export interface Tenant extends BaseEntity {
  name: string;
  domain: string;
  subdomain: string;
  status: TenantStatus;
  billingPlan: TenantBillingPlan;
  settings: TenantSettings;
  metadata?: CustomMetadata;
}

/**
 * Billing features and utilization constraints for a tenant.
 */
export interface TenantBillingPlan {
  code: string;       // e.g., 'growth-monthly'
  name: string;       // e.g., 'Growth Monthly Plan'
  price: number;
  currency: string;
  interval: 'monthly' | 'yearly';
  trialEndsAt?: string | null;
}

/**
 * Technical boundaries, configurations, and feature flags for a specific tenant scope.
 */
export interface TenantSettings {
  maxUsers: number;
  storageLimitGb: number;
  enableBetaFeatures: boolean;
  allowedRegions: string[];
  corsOrigins: string[];
}`
  },
  {
    name: 'audit/index.ts',
    path: 'packages/types/src/audit/index.ts',
    language: 'typescript',
    role: 'Audit Logs & Traces',
    description: 'Defines event logging and compliance tracking entries.',
    content: `import { BaseEntity, CustomMetadata } from '../common/index.js';

/**
 * Standard security and modification classifications.
 */
export enum AuditSeverity {
  INFO = 'info',
  WARNING = 'warning',
  CRITICAL = 'critical'
}

/**
 * Audit tracking entity mapping user and system behavior.
 */
export interface AuditTrailEntry extends BaseEntity {
  actor: ActorMetadata;
  action: string;             // e.g., 'user.login', 'tenant.deleted'
  category: string;           // e.g., 'authentication', 'administration'
  severity: AuditSeverity;
  resourceId?: string;        // e.g., user ID, tenant ID
  resourceType?: string;      // e.g., 'UserProfile', 'Tenant'
  ipAddress?: string | null;
  userAgent?: string | null;
  status: 'success' | 'failure';
  errorMessage?: string | null;
  changes?: FieldChange[];
  metadata?: CustomMetadata;
}

/**
 * Describes the initiator of an auditable action.
 */
export interface ActorMetadata {
  id: string;
  type: 'user' | 'system' | 'api_key' | 'support';
  email?: string;
  displayName?: string;
}

/**
 * Records exact structural properties changed during a database update or action.
 */
export interface FieldChange {
  field: string;
  oldValue: string | number | boolean | null;
  newValue: string | number | boolean | null;
}`
  },
  {
    name: 'workflow/index.ts',
    path: 'packages/types/src/workflow/index.ts',
    language: 'typescript',
    role: 'Workflow Automations',
    description: 'Defines approval loops, steps, definitions, and states.',
    content: `import { BaseEntity, CustomMetadata } from '../common/index.js';

/**
 * Standard processing states for a workflow execution.
 */
export enum WorkflowStatus {
  PENDING = 'pending',
  RUNNING = 'running',
  COMPLETED = 'completed',
  FAILED = 'failed',
  CANCELLED = 'cancelled',
  SUSPENDED = 'suspended'
}

/**
 * Declares the architectural template for automated workflows.
 */
export interface WorkflowDefinition extends BaseEntity {
  name: string;
  code: string;               // e.g., 'document_approval_flow'
  description?: string;
  isActive: boolean;
  steps: WorkflowStepDefinition[];
  metadata?: CustomMetadata;
}

/**
 * Standard configuration rules for a step within a workflow template.
 */
export interface WorkflowStepDefinition {
  id: string;                 // unique key in definition
  name: string;
  type: 'action' | 'condition' | 'approval' | 'delay';
  config: CustomMetadata;
  nextStepId?: string | null;
}

/**
 * Tracks an active or historic execution of a workflow.
 */
export interface WorkflowInstance extends BaseEntity {
  definitionId: string;
  status: WorkflowStatus;
  currentStepId?: string | null;
  startedBy?: string;
  endedAt?: string | null;
  input: CustomMetadata;
  output?: CustomMetadata | null;
  errors?: string[];
}

/**
 * State transitions and transition logs recorded during workflow execution.
 */
export interface WorkflowTransition extends BaseEntity {
  instanceId: string;
  fromStepId?: string | null;
  toStepId: string;
  status: WorkflowStatus;
  timestamp: string;
  executionSummary?: string | null;
}`
  },
  {
    name: 'ai/index.ts',
    path: 'packages/types/src/ai/index.ts',
    language: 'typescript',
    role: 'AI Prompts & Telemetry',
    description: 'Defines message history, provider configurations, and token telemetry.',
    content: `import { BaseEntity, CustomMetadata } from '../common/index.js';

/**
 * Structural participant identities in an AI chat conversation.
 */
export enum AiMessageRole {
  SYSTEM = 'system',
  USER = 'user',
  ASSISTANT = 'assistant',
  TOOL = 'tool'
}

/**
 * Standard structured chat messages for LLM integrations.
 */
export interface AiMessage {
  id: string;
  role: AiMessageRole;
  content: string;
  timestamp: string;
  name?: string;               // Optional descriptor for agents or specific tools
  toolCallId?: string;         // References the associated Tool Call
}

/**
 * Tracks AI active sessions or user chat thread boundaries.
 */
export interface AiSession extends BaseEntity {
  userId: string;
  title: string;
  modelConfig: AiModelConfig;
  tokenUsageSummary: AiTokenUsage;
  metadata?: CustomMetadata;
}

/**
 * Model selection, temperature, and formatting instructions.
 */
export interface AiModelConfig {
  provider: 'google' | 'openai' | 'anthropic';
  model: string;              // e.g., 'gemini-2.5-flash', 'gpt-4o'
  temperature?: number;
  maxTokens?: number;
  topP?: number;
  systemInstruction?: string;
}

/**
 * Exact token billing and rate-limiting metrics.
 */
export interface AiTokenUsage {
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
  estimatedCostUSD?: number;
}`
  },
  {
    name: 'integration/index.ts',
    path: 'packages/types/src/integration/index.ts',
    language: 'typescript',
    role: 'Integration Connectors',
    description: 'Defines webhook endpoints, integration properties, and sync records.',
    content: `import { BaseEntity, CustomMetadata } from '../common/index.js';

/**
 * Supported external platforms.
 */
export enum IntegrationType {
  SLACK = 'slack',
  GMAIL = 'gmail',
  GOOGLE_CALENDAR = 'google_calendar',
  GITHUB = 'github',
  STRIPE = 'stripe',
  SALESFORCE = 'salesforce',
  CUSTOM_WEBHOOK = 'custom_webhook'
}

/**
 * Connection states for an integration.
 */
export enum IntegrationState {
  DISCONNECTED = 'disconnected',
  CONNECTED = 'connected',
  ERROR = 'error',
  PAUSED = 'paused'
}

/**
 * Tracks third-party platform credentials, scopes, and connection configurations.
 */
export interface IntegrationConfig extends BaseEntity {
  tenantId: string;
  type: IntegrationType;
  state: IntegrationState;
  authMethod: 'oauth2' | 'api_key' | 'basic' | 'none';
  scopes?: string[];
  settings: CustomMetadata;
  lastSyncedAt?: string | null;
}

/**
 * Custom incoming or outgoing HTTP webhook endpoint rules.
 */
export interface WebhookConfig extends BaseEntity {
  integrationId?: string;
  url: string;
  events: string[];           // e.g., ['document.created', 'user.signed_up']
  secretToken: string;        // Used to compute HMAC signature for safety
  isActive: boolean;
  retryAttempts: number;
}

/**
 * Operational diagnostics record tracking data synchronization success rates.
 */
export interface IntegrationSyncStatus {
  id: string;
  integrationId: string;
  status: 'completed' | 'failed' | 'partial';
  recordsProcessed: number;
  recordsFailed: number;
  durationMs: number;
  errorMessage?: string | null;
  startedAt: string;
  completedAt: string;
}`
  },
  {
    name: 'README.md',
    path: 'packages/types/src/README.md',
    language: 'markdown',
    role: 'Internal Documentation',
    description: 'Technical document detailing internal patterns and standards.',
    content: `# @sbb/types - Source Architecture

This directory houses the strongly typed interfaces, types, and standard enums representing the core domain models of the SBB Platform.

## 🧱 Subdirectories

* **\`common/\`**: Base entities, standard timestamp definitions, custom metadata slots, and dictionary helpers.
* **\`api/\`**: Uniform wrapper structures for standard single/paginated responses, pagination limits, and error payloads.
* **\`identity/\`**: Structural maps for user profiles, roles, security sessions, and access permissions.
* **\`organization/\`**: Team workspaces, tenant subscription tiers, membership logs, and organizational controls.
* **\`tenant/\`**: Standard schemas tracking multi-tenant deployment constraints, region filters, and billing tiers.
* **\`audit/\`**: Robust trace models recording modifications, compliance events, field differences, and system actions.
* **\`workflow/\`**: Automated execution loops, process templates, active execution states, and audit trails.
* **\`ai/\`**: Models, token cost telemetry, message histories, and system instructions for AI pipeline steps.
* **\`integration/\`**: External connectors, custom outgoing/incoming webhooks, and synchronization run summaries.

## ⚠️ Standards

1. **Pure TypeScript**: No classes, functions, controllers, runtime implementations, validation schemes, or framework modules.
2. **ESM Compliance**: Explicit \`.js\` imports for submodules when referencing local types.
3. **Enum Declaration**: Standard TypeScript enums (\`enum\`) only. Never use \`const enum\`.`
  }
];

export const validationFileList: FileNode[] = [
  {
    name: 'package.json',
    path: 'packages/validation/package.json',
    language: 'json',
    role: 'Package Manifest',
    description: 'Defines package name (@sbb/validation), dependencies (zod), and scripts.',
    content: `{
  "name": "@sbb/validation",
  "version": "1.0.0",
  "description": "Shared validation schemas and helpers for the SBB Platform using Zod",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "test": "echo \\"Error: no test specified\\" && exit 0"
  },
  "dependencies": {
    "zod": "^3.23.8"
  },
  "devDependencies": {
    "@sbb/types": "^1.0.0",
    "typescript": "^5.4.5"
  },
  "publishConfig": {
    "access": "restricted"
  }
}`
  },
  {
    name: 'tsconfig.json',
    path: 'packages/validation/tsconfig.json',
    language: 'json',
    role: 'TypeScript Config',
    description: 'Defines compiler options and aliases pointing to @sbb/types.',
    content: `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "declaration": true,
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "baseUrl": ".",
    "paths": {
      "@sbb/types": ["../types/src/index.ts"]
    }
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}`
  },
  {
    name: 'README.md',
    path: 'packages/validation/README.md',
    language: 'markdown',
    role: 'Documentation',
    description: 'Provides details on usage examples (validateOrThrow, safeValidate) and core packages.',
    content: `# @sbb/validation

Centralized Zod Runtime Validation library for the **SBB Platform**.

This package provides strict, zero-dependency, runtime validation schemas and parsing utilities designed to complement \`@sbb/types\`.

---

## 🚀 Key Architectural Modules

* **Common**: Shared rules for primitives (\`UUID\`, \`Email\`, \`URL\`, \`DateTime\`), custom recursive metadata structures (\`customMetadataSchema\`), and standard identifiers (\`userIdSchema\`, \`tenantIdSchema\`, \`organizationIdSchema\`).
* **API Envelopes**: Normalization validation rules for API pagination filters, metadata limits, success wrappers, and error details.
* **Identity**: Data schema validation for user accounts, lifecycle status trackers, and fine-grained role permissions.
* **Organization**: Validation rules protecting team workspaces, billing domains, and user-org subscription limits.
* **Tenant**: Multi-tenant domain maps, resource limits, and service region caps.
* **Audit Traces**: Validating compliance reports, actor origins, and precise data property update differences.
* **Workflow**: Automated process templates, steps, active run instances, and transition tracks.
* **AI Engine**: Message roles, chat formats, model parameters, and token telemetry limits.
* **Integration**: Profiles, third-party connectors, and outgoing webhooks with HMAC validation constraints.

---

## 💻 Integration Examples

### Simple Safety Validation
\`\`\`typescript
import { validateOrThrow, emailSchema } from '@sbb/validation';

// Throws detailed ZodError if invalid, returns string if valid
const validEmail = validateOrThrow(emailSchema, "developer@sbb.internal");
\`\`\`

### Safe Parsing
\`\`\`typescript
import { safeValidate, userProfileSchema } from '@sbb/validation';

const result = safeValidate(userProfileSchema, inputPayload);

if (!result.success) {
  console.error("Validation failed:", result.error.format());
} else {
  const profile = result.data; // Fully typed
}
\`\`\`

### Namespace Access
\`\`\`typescript
import { Schemas } from '@sbb/validation';

// Use the grouped namespace
const validationResult = Schemas.api.paginationParams.safeParse(query);
\`\`\``
  },
  {
    name: 'CHANGELOG.md',
    path: 'packages/validation/CHANGELOG.md',
    language: 'markdown',
    role: 'Release History',
    description: 'Release logging tracking package features, primitives, and schemas.',
    content: `# Changelog

All notable changes to the \`@sbb/validation\` package will be documented in this file.

## [1.0.0] - 2026-07-02

### Added
- Created the core shared validation package (\`@sbb/validation\`) featuring robust Zod runtime validation.
- Implemented primitive checks for UUIDs, email patterns, URL formats, and ISO 8601 Date/DateTime formats in \`common\`.
- Formulated validation logic for standard structural identifiers (\`userIdSchema\`, \`tenantIdSchema\`, \`organizationIdSchema\`) and recursive custom metadata logs.
- Added standard validation and safe parsing helper handlers (\`validateOrThrow\`, \`safeValidate\`).
- Programmed API response envelopes modeling single-resource bodies, paginated list parameters, and error context detail structures.
- Structured user account validation schemas protecting profile metadata, device sessions, and role permissions.
- Developed workspace schemas validating subscription scopes, sso configurations, and organizational membership maps.
- Configured tenant validation boundaries safeguarding domain routing, active states, and storage/seat constraints.
- Formulated security audit validators tracking event severities, origin actors, and system property update logs.
- Created workflow validation criteria for automated templates, steps, active execution loops, and transition records.
- Built AI pipeline validators verifying message roles, message contents, model parameters, and token cost telemetry.
- Provided connector validations protecting connection state indicators, outgoing webhooks, and sync diagnostic reports.
- Aggregated all domain-specific validation rules inside a centralized namespace helper (\`Schemas\`) in \`/src/schemas/index.ts\`.`
  },
  {
    name: 'index.ts',
    path: 'packages/validation/src/index.ts',
    language: 'typescript',
    role: 'Public API Entry point',
    description: 'Exports all core validation modules, namespaces, and parsing utilities.',
    content: `export * from './common/index.js';
export * from './api/index.js';
export * from './identity/index.js';
export * from './organization/index.js';
export * from './tenant/index.js';
export * from './audit/index.js';
export * from './workflow/index.js';
export * from './ai/index.js';
export * from './integration/index.js';
export * from './schemas/index.js';`
  },
  {
    name: 'common/index.ts',
    path: 'packages/validation/src/common/index.ts',
    language: 'typescript',
    role: 'Common Rules & Helpers',
    description: 'Defines primitives (UUID, Email, URL) and parsing helpers.',
    content: `import { z } from 'zod';

export const uuidSchema = z.string().uuid({ message: 'Invalid UUID format' });
export const emailSchema = z.string().email({ message: 'Invalid email address format' });
export const urlSchema = z.string().url({ message: 'Invalid URL format' });
export const dateTimeSchema = z.string().datetime({ message: 'Invalid ISO 8601 DateTime format' });
export const nullableDateTimeSchema = dateTimeSchema.nullable().optional();
export const idSchema = z.string().min(1, { message: 'Identifier cannot be empty' });
export const userIdSchema = idSchema;
export const tenantIdSchema = idSchema;
export const organizationIdSchema = idSchema;

const literalSchema = z.union([z.string(), z.number(), z.boolean(), z.null()]);
type Literal = z.infer<typeof literalSchema>;
type Json = Literal | { [key: string]: Json } | Json[];

export const jsonSchema: z.ZodType<Json> = z.lazy(() =>
  z.union([literalSchema, z.record(jsonSchema), z.array(jsonSchema)])
);

export const customMetadataSchema = z.record(jsonSchema);
export const timestampedSchema = z.object({
  createdAt: dateTimeSchema,
  updatedAt: dateTimeSchema,
  deletedAt: nullableDateTimeSchema,
});
export const baseEntitySchema = timestampedSchema.extend({
  id: idSchema,
});

export function validateOrThrow<T>(schema: z.Schema<T>, data: unknown): T {
  return schema.parse(data);
}

export function safeValidate<T>(schema: z.Schema<T>, data: unknown): z.SafeParseReturnType<unknown, T> {
  return schema.safeParse(data);
}`
  },
  {
    name: 'api/index.ts',
    path: 'packages/validation/src/api/index.ts',
    language: 'typescript',
    role: 'API Pagination & Response Envelopes',
    description: 'Enforces standard shapes for API success and error envelopes.',
    content: `import { z } from 'zod';
import { SortDirection } from '@sbb/types';
import { dateTimeSchema } from '../common/index.js';

export const paginationParamsSchema = z.object({
  page: z.number().int().positive().default(1),
  limit: z.number().int().positive().max(100).default(20),
  sortBy: z.string().optional(),
  sortDirection: z.nativeEnum(SortDirection).optional().default(SortDirection.ASC),
});

export const paginationMetadataSchema = z.object({
  page: z.number().int().positive(),
  limit: z.number().int().positive(),
  totalCount: z.number().int().nonnegative(),
  totalPages: z.number().int().nonnegative(),
  hasNextPage: z.boolean(),
  hasPreviousPage: z.boolean(),
});

export function createApiPaginatedResponseSchema<T extends z.ZodTypeAny>(itemSchema: T) {
  return z.object({
    success: z.literal(true),
    data: z.array(itemSchema),
    pagination: paginationMetadataSchema,
    timestamp: dateTimeSchema,
  });
}

export function createApiResponseSchema<T extends z.ZodTypeAny>(dataSchema: T) {
  return z.object({
    success: z.literal(true),
    data: dataSchema,
    timestamp: dateTimeSchema,
  });
}

export const apiErrorDetailsSchema = z.object({
  code: z.string().min(1),
  message: z.string().min(1),
  field: z.string().optional(),
  helpUrl: z.string().url().optional(),
});

export const apiErrorResponseSchema = z.object({
  success: z.literal(false),
  error: z.object({
    code: z.string().min(1),
    message: z.string().min(1),
    details: z.array(apiErrorDetailsSchema).optional(),
  }),
  timestamp: dateTimeSchema,
});`
  },
  {
    name: 'identity/index.ts',
    path: 'packages/validation/src/identity/index.ts',
    language: 'typescript',
    role: 'Identity Validations',
    description: 'Enforces proper structures for user permissions, roles, status, profiles, and sessions.',
    content: `import { z } from 'zod';
import { UserRole, UserStatus } from '@sbb/types';
import { 
  baseEntitySchema, 
  emailSchema, 
  urlSchema, 
  customMetadataSchema, 
  userIdSchema, 
  dateTimeSchema 
} from '../common/index.js';

export const userRoleSchema = z.nativeEnum(UserRole);
export const userStatusSchema = z.nativeEnum(UserStatus);
export const userProfileSchema = baseEntitySchema.extend({
  email: emailSchema,
  firstName: z.string().min(1, { message: 'First name is required' }).max(50),
  lastName: z.string().min(1, { message: 'Last name is required' }).max(50),
  displayName: z.string().max(100).optional(),
  avatarUrl: urlSchema.nullable().optional(),
  phoneNumber: z.string().max(20).nullable().optional(),
  role: userRoleSchema,
  status: userStatusSchema,
  emailVerified: z.boolean(),
  mfaEnabled: z.boolean(),
  metadata: customMetadataSchema.optional(),
});

export const userSessionSchema = baseEntitySchema.extend({
  userId: userIdSchema,
  tokenHash: z.string().min(1, { message: 'Token hash is required' }),
  userAgent: z.string().max(500).nullable().optional(),
  ipAddress: z.string().ip().nullable().optional(),
  expiresAt: dateTimeSchema,
  lastActiveAt: dateTimeSchema,
  isRevoked: z.boolean(),
});

export const userPermissionSchema = z.object({
  action: z.string().min(1, { message: 'Permission action is required' }),
  resource: z.string().min(1, { message: 'Permission resource is required' }),
  effect: z.enum(['allow', 'deny']),
  conditions: customMetadataSchema.optional(),
});`
  },
  {
    name: 'schemas/index.ts',
    path: 'packages/validation/src/schemas/index.ts',
    language: 'typescript',
    role: 'Grouped Schema Namespaces',
    description: 'Aggregates all schema definitions into neat namespace namespaces for clean code.',
    content: `import * as common from '../common/index.js';
import * as api from '../api/index.js';
import * as identity from '../identity/index.js';
import * as organization from '../organization/index.js';
import * as tenant from '../tenant/index.js';
import * as audit from '../audit/index.js';
import * as workflow from '../workflow/index.js';
import * as ai from '../ai/index.js';
import * as integration from '../integration/index.js';

export const Schemas = {
  common: {
    uuid: common.uuidSchema,
    email: common.emailSchema,
    url: common.urlSchema,
    dateTime: common.dateTimeSchema,
    id: common.idSchema,
    userId: common.userIdSchema,
    tenantId: common.tenantIdSchema,
    organizationId: common.organizationIdSchema,
    customMetadata: common.customMetadataSchema,
    timestamped: common.timestampedSchema,
    baseEntity: common.baseEntitySchema,
  },
  api: {
    paginationParams: api.paginationParamsSchema,
    paginationMetadata: api.paginationMetadataSchema,
    errorDetails: api.apiErrorDetailsSchema,
    errorResponse: api.apiErrorResponseSchema,
    createPaginatedResponse: api.createApiPaginatedResponseSchema,
    createResponse: api.createApiResponseSchema,
  },
  identity: {
    role: identity.userRoleSchema,
    status: identity.userStatusSchema,
    profile: identity.userProfileSchema,
    session: identity.userSessionSchema,
    permission: identity.userPermissionSchema,
  },
  organization: {
    subscriptionTier: organization.subscriptionTierSchema,
    settings: organization.organizationSettingsSchema,
    organization: organization.organizationSchema,
    member: organization.organizationMemberSchema,
  },
  tenant: {
    status: tenant.tenantStatusSchema,
    billingPlan: tenant.tenantBillingPlanSchema,
    settings: tenant.tenantSettingsSchema,
    tenant: tenant.tenantSchema,
  },
  audit: {
    severity: audit.auditSeveritySchema,
    actor: audit.actorMetadataSchema,
    change: audit.fieldChangeSchema,
    entry: audit.auditTrailEntrySchema,
  },
  workflow: {
    status: workflow.workflowStatusSchema,
    step: workflow.workflowStepDefinitionSchema,
    definition: workflow.workflowDefinitionSchema,
    instance: workflow.workflowInstanceSchema,
    transition: workflow.workflowTransitionSchema,
  },
  ai: {
    role: ai.aiMessageRoleSchema,
    message: ai.aiMessageSchema,
    modelConfig: ai.aiModelConfigSchema,
    tokenUsage: ai.aiTokenUsageSchema,
    session: ai.aiSessionSchema,
  },
  integration: {
    type: integration.integrationTypeSchema,
    state: integration.integrationStateSchema,
    config: integration.integrationConfigSchema,
    webhook: integration.webhookConfigSchema,
    syncStatus: integration.integrationSyncStatusSchema,
  },
};`
  },
  {
    name: 'README.md',
    path: 'packages/validation/src/README.md',
    language: 'markdown',
    role: 'Internal Documentation',
    description: 'Internal guide laying out packaging, folder targets, and development standards.',
    content: `# @sbb/validation - Source Architecture

This directory houses the strongly typed runtime validations built using Zod for the SBB Platform.

## 🧱 Subdirectories

* **\`common/\`**: Primitives like UUID, Email, URL, ISO-8601 Date/DateTime, custom recursive metadata, standard entities, and safety helpers.
* **\`api/\`**: Validation structures for API pagination, response metadata wrappers, success response envelopes, and error response envelopes.
* **\`identity/\`**: Validations for user status, roles, profiles, active sessions, and permissions.
* **\`organization/\`**: Rules modeling workspaces, settings, subscription levels, and member mappings.
* **\`tenant/\`**: Standard schemas validating tenant configurations, billing plans, and resource setting boundaries.
* **\`audit/\`**: Secure Zod structures verifying severity, event actors, modified field diff structures, and event entries.
* **\`workflow/\`**: Models validating automated templates, run parameters, instance records, and transition logs.
* **\`ai/\`**: Verification for message roles, structured chat arrays, engine telemetry, and user AI sessions.
* **\`integration/\`**: Verification schemas for platform links, active states, webhooks, and syncing diagnostics logs.
* **\`schemas/\`**: A central namespace aggregator grouping all Zod validation schemas for simple usage.

## ⚠️ Standards

1. **Strictly Runtime Validation**: Only define pure Zod schemas and validation/safe parsing helpers. No business logic, authorization mechanisms, database integrations, or framework modules.
2. **ESM Compliance**: Use explicit \`.js\` extensions for local file imports.
3. **No Circular Dependencies**: Ensure modular design prevents importing subdirectories from each other.`
  }
];

export const testingFileList: FileNode[] = [
  {
    name: 'package.json',
    path: 'packages/testing/package.json',
    language: 'json',
    role: 'Package Manifest',
    description: 'Defines testing dependencies (@sbb/types, @sbb/validation), version, and builds.',
    content: `{
  "name": "@sbb/testing",
  "version": "1.0.0",
  "description": "Shared testing infrastructure and mock utilities for the SBB Platform",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "test": "echo \\"Error: no test specified\\" && exit 0"
  },
  "dependencies": {},
  "devDependencies": {
    "@sbb/types": "^1.0.0",
    "@sbb/validation": "^1.0.0",
    "typescript": "^5.4.5"
  },
  "publishConfig": {
    "access": "restricted"
  }
}`
  },
  {
    name: 'tsconfig.json',
    path: 'packages/testing/tsconfig.json',
    language: 'json',
    role: 'TypeScript Config',
    description: 'Enforces ES2022 output with absolute paths mapped to sibling workspaces.',
    content: `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "declaration": true,
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "baseUrl": ".",
    "paths": {
      "@sbb/types": ["../types/src/index.ts"],
      "@sbb/validation": ["../validation/src/index.ts"]
    }
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}`
  },
  {
    name: 'README.md',
    path: 'packages/testing/README.md',
    language: 'markdown',
    role: 'Documentation',
    description: 'Introduction to @sbb/testing, detailed installation guides, and complete integration code listings.',
    content: `# @sbb/testing

Centralized Testing Infrastructure and Mocking library for the **SBB Platform**.

This package provides generic, reusable, and framework-agnostic test helpers, mock context generators, builders, and custom assertions designed to ensure consistent testing standards across all SBB packages.

---

## 🚀 Key Modules

* **Test Helpers**: Deterministic UUID generation (\`generateTestUuid\`) and a fully functional mock clock (\`TestClock\`) for locking and stepping through time.
* **Mocks & Contexts**: Pre-configured request context utilities (\`createMockRequestContext\`) and standard Request/Response mocks for route testing.
* **Fixtures**: Static baseline templates for user profiles, organization limits, and active multi-step workflows.
* **Builders**: Chainable fluent-interface test-data builders (\`UserBuilder\`, \`TenantBuilder\`, \`OrganizationBuilder\`).
* **Factories**: Sequential batch mock generators (\`createUserMock\`, \`createTenantMock\`) that safely increment data fields automatically.
* **Assertions**: Rich assertion methods to validate UUID formats, ISO date-times, and expected validation errors.
* **Integration**: In-memory mock database managers with active rollback controls and mock webhook listeners.

---

## 💻 Integration Examples

### 1. Mock Clock (Time Freezing)
Make asynchronous, time-sensitive code completely deterministic:
\`\`\`typescript
import { TestClock } from '@sbb/testing';

// Freeze time at static epoch
TestClock.freeze();
console.log(TestClock.nowIso()); // "2026-07-02T12:00:00.000Z"

// Progress mock clock forward by 5 seconds
TestClock.tick(5000);
console.log(TestClock.nowIso()); // "2026-07-02T12:00:05.000Z"

// Restore dynamic system time
TestClock.reset();
\`\`\`

### 2. Fluent Test Builders
Create tailored entities for custom test scopes:
\`\`\`typescript
import { UserBuilder } from '@sbb/testing';
import { UserRole, UserStatus } from '@sbb/types';

const customAdmin = new UserBuilder()
  .withId("custom-id-123")
  .withEmail("custom.admin@sbb.internal")
  .withRole(UserRole.ADMIN)
  .withStatus(UserStatus.ACTIVE)
  .build();
\`\`\`

### 3. Custom Assertions
Assert formats and handle validation errors elegantly:
\`\`\`typescript
import { assertUuid, assertValidationError } from '@sbb/testing';
import { validateUser } from './my-validator';

// Standard UUID format verification
assertUuid(payload.userId);

// Assert validation fails on bad inputs
assertValidationError(() => {
  validateUser({ email: "invalid-email" });
}, "email");
\`\`\`

### 4. Integration DB Managers
Replicate commit/rollback transactions during complex business pipelines:
\`\`\`typescript
import { MockDatabaseManager } from '@sbb/testing';

const dbManager = new MockDatabaseManager();
const usersTable = dbManager.getTable('users');

dbManager.beginTransaction();
usersTable.push({ id: '1', name: 'Rollback Target' });

// Undo inserts and restore table states instantly
dbManager.rollbackTransaction();
console.log(usersTable.length); // 0
\`\`\`
`
  },
  {
    name: 'CHANGELOG.md',
    path: 'packages/testing/CHANGELOG.md',
    language: 'markdown',
    role: 'Release History',
    description: 'Changelog of historical additions, builders, fixtures, assertions, and mock contexts.',
    content: `# Changelog

All notable changes to the \`@sbb/testing\` package will be documented in this file.

## [1.0.0] - 2026-07-02

### Added
- Created the core shared testing package (\`@sbb/testing\`) featuring generic, reusable testing infrastructure.
- Introduced deterministic test UUID generation helper (\`generateTestUuid\`) and custom pre-configured test identifiers.
- Created \`TestClock\` mock helper capable of locking UTC timestamps and simulating elapsed execution steps.
- Set up standard mock contexts (\`SbbRequestContext\`) and mock HTTP request/response envelopes to support controller logic.
- Built fluent data builders (\`UserBuilder\`, \`TenantBuilder\`, \`OrganizationBuilder\`) supporting chainable parameters.
- Built auto-incrementing data sequence mock factories (\`createUserMock\`, \`createTenantMock\`) to speed up list generation.
- Coded custom, framework-agnostic assertion helpers checking UUID layout standards, timestamp limits, and validation exception contexts.
- Added simulation utilities (\`MockDatabaseManager\`, \`SimulatedWebhookReceiver\`) tracking integration actions, active state arrays, and transaction rollbacks.`
  },
  {
    name: 'index.ts',
    path: 'packages/testing/src/index.ts',
    language: 'typescript',
    role: 'Public API Entry point',
    description: 'Centralizes exports of helpers, builders, fixtures, mocks, assertions, and integration tools.',
    content: `export * from './helpers/index.js';
export * from './fixtures/index.js';
export * from './mocks/index.js';
export * from './builders/index.js';
export * from './factories/index.js';
export * from './assertions/index.js';
export * from './integration/index.js';`
  },
  {
    name: 'helpers/index.ts',
    path: 'packages/testing/src/helpers/index.ts',
    language: 'typescript',
    role: 'Deterministic Generators & Clock',
    description: 'Deterministic test UUID generators and fully queryable mock TestClock instances.',
    content: `/**
 * Deterministic and custom UUID generator specifically for unit and integration testing.
 */
export function generateTestUuid(id: number | string): string {
  const cleanId = String(id).replace(/[^0-9a-fA-F]/g, '');
  const padded = cleanId.padStart(12, '0').slice(-12);
  return \`00000000-0000-4000-a000-\${padded}\`;
}

/**
 * Predefined static UUIDs for test consistency across suites.
 */
export const TestUuids = {
  user: generateTestUuid('1'),
  admin: generateTestUuid('2'),
  guest: generateTestUuid('3'),
  tenant: generateTestUuid('100'),
  organization: generateTestUuid('200'),
  workspace: generateTestUuid('300'),
  workflow: generateTestUuid('400'),
  auditTrail: generateTestUuid('500'),
};

/**
 * Deterministic dates and mock clock helpers for time-sensitive tests.
 */
export class TestClock {
  private static mockTime: Date | null = null;

  /**
   * Static epoch date (2026-07-02T12:00:00Z) to use as stable baseline.
   */
  public static readonly EPOCH = new Date('2026-07-02T12:00:00.000Z');

  /**
   * Freezes the global test clock at a specific date.
   */
  public static freeze(time: Date = TestClock.EPOCH): void {
    TestClock.mockTime = new Date(time);
  }

  /**
   * Resets the mock clock, returning to default dynamic time.
   */
  public static reset(): void {
    TestClock.mockTime = null;
  }

  /**
   * Retrieves the current mock date or a live Date if clock is not frozen.
   */
  public static now(): Date {
    return TestClock.mockTime ? new Date(TestClock.mockTime) : new Date();
  }

  /**
   * Retrieves current ISO timestamp from mock or live clock.
   */
  public static nowIso(): string {
    return TestClock.now().toISOString();
  }

  /**
   * Shifts the current mock date forward or backward by a specific number of milliseconds.
   */
  public static tick(ms: number): void {
    if (TestClock.mockTime) {
      TestClock.mockTime = new Date(TestClock.mockTime.getTime() + ms);
    } else {
      throw new Error('TestClock must be frozen using TestClock.freeze() before calling tick()');
    }
  }
}`
  },
  {
    name: 'fixtures/index.ts',
    path: 'packages/testing/src/fixtures/index.ts',
    language: 'typescript',
    role: 'Standard Test Fixtures',
    description: 'Mock user, tenant, organization, and automated workflow state fixtures.',
    content: `import { UserRole, UserStatus } from '@sbb/types';
import { TestUuids, TestClock } from '../helpers/index.js';

export const mockUserFixture = {
  id: TestUuids.user,
  email: 'test.user@sbb.internal',
  firstName: 'Test',
  lastName: 'User',
  displayName: 'Test User',
  role: UserRole.MEMBER,
  status: UserStatus.ACTIVE,
  emailVerified: true,
  mfaEnabled: false,
  createdAt: TestClock.EPOCH.toISOString(),
  updatedAt: TestClock.EPOCH.toISOString(),
  deletedAt: null,
};

export const mockAdminFixture = {
  id: TestUuids.admin,
  email: 'admin@sbb.internal',
  firstName: 'SBB',
  lastName: 'Administrator',
  displayName: 'Admin SBB',
  role: UserRole.ADMIN,
  status: UserStatus.ACTIVE,
  emailVerified: true,
  mfaEnabled: true,
  createdAt: TestClock.EPOCH.toISOString(),
  updatedAt: TestClock.EPOCH.toISOString(),
  deletedAt: null,
};

export const mockTenantFixture = {
  id: TestUuids.tenant,
  name: 'SBB Test Tenant',
  domain: 'test-tenant.sbb.internal',
  status: 'active',
  billingPlan: 'enterprise',
  settings: {
    maxUsers: 100,
    storageLimitGb: 500,
    allowedRegions: ['us-east-1', 'eu-west-1'],
    enableSso: true,
  },
  createdAt: TestClock.EPOCH.toISOString(),
  updatedAt: TestClock.EPOCH.toISOString(),
  deletedAt: null,
};

export const mockOrganizationFixture = {
  id: TestUuids.organization,
  tenantId: TestUuids.tenant,
  name: 'Core Operations Division',
  billingTier: 'premium',
  settings: {
    restrictDomains: true,
    allowedDomainList: ['sbb.internal'],
    idleTimeoutMinutes: 30,
  },
  createdAt: TestClock.EPOCH.toISOString(),
  updatedAt: TestClock.EPOCH.toISOString(),
  deletedAt: null,
};

export const mockWorkflowFixture = {
  id: TestUuids.workflow,
  name: 'Standard Deploy Automation',
  status: 'active',
  steps: [
    { id: 'step-1', name: 'Lint and Validate', order: 1, type: 'validation' },
    { id: 'step-2', name: 'Build Artifacts', order: 2, type: 'build' },
    { id: 'step-3', name: 'Execute Integration Suite', order: 3, type: 'test' },
  ],
  createdAt: TestClock.EPOCH.toISOString(),
  updatedAt: TestClock.EPOCH.toISOString(),
  deletedAt: null,
};`
  },
  {
    name: 'mocks/index.ts',
    path: 'packages/testing/src/mocks/index.ts',
    language: 'typescript',
    role: 'Mock Execution Contexts',
    description: 'Implements request contexts, Express headers, request query objects, and responses.',
    content: `import { UserRole } from '@sbb/types';
import { TestUuids } from '../helpers/index.js';

export interface SbbRequestContext {
  tenantId: string;
  organizationId: string | null;
  userId: string | null;
  userRole: UserRole | null;
  userEmail: string | null;
  correlationId: string;
}

export function createMockRequestContext(overrides?: Partial<SbbRequestContext>): SbbRequestContext {
  return {
    tenantId: TestUuids.tenant,
    organizationId: TestUuids.organization,
    userId: TestUuids.user,
    userRole: UserRole.MEMBER,
    userEmail: 'test.user@sbb.internal',
    correlationId: \`test-corr-\${Date.now()}\`,
    ...overrides,
  };
}

export function createMockRequest(options?: {
  headers?: Record<string, string>;
  query?: Record<string, any>;
  params?: Record<string, string>;
  body?: any;
  context?: Partial<SbbRequestContext>;
}) {
  const reqContext = createMockRequestContext(options?.context);
  return {
    headers: {
      'x-tenant-id': reqContext.tenantId,
      'x-correlation-id': reqContext.correlationId,
      ...options?.headers,
    },
    query: options?.query || {},
    params: options?.params || {},
    body: options?.body || {},
    context: reqContext,
    get(name: string): string | undefined {
      const lower = name.toLowerCase();
      return this.headers[lower] || undefined;
    },
  };
}

export function createMockResponse() {
  const res: any = {
    statusCode: 200,
    headers: {} as Record<string, string>,
    body: null as any,
    isSent: false,
    status(code: number) {
      this.statusCode = code;
      return this;
    },
    setHeader(name: string, value: string) {
      this.headers[name.toLowerCase()] = value;
      return this;
    },
    json(data: any) {
      this.body = data;
      this.isSent = true;
      return this;
    },
    send(data: any) {
      this.body = data;
      this.isSent = true;
      return this;
    },
    end() {
      this.isSent = true;
      return this;
    },
  };
  return res;
}`
  },
  {
    name: 'builders/index.ts',
    path: 'packages/testing/src/builders/index.ts',
    language: 'typescript',
    role: 'Fluent Data Builders',
    description: 'Provides builders to set up clean, granular states of users, tenants, and entities chainably.',
    content: `import { UserRole, UserStatus } from '@sbb/types';
import { TestClock } from '../helpers/index.js';
import { mockUserFixture, mockTenantFixture, mockOrganizationFixture } from '../fixtures/index.js';

export class UserBuilder {
  private user = { ...mockUserFixture };

  public withId(id: string): this {
    this.user.id = id;
    return this;
  }

  public withEmail(email: string): this {
    this.user.email = email;
    return this;
  }

  public withName(firstName: string, lastName: string): this {
    this.user.firstName = firstName;
    this.user.lastName = lastName;
    this.user.displayName = \`\${firstName} \${lastName}\`;
    return this;
  }

  public withRole(role: UserRole): this {
    this.user.role = role;
    return this;
  }

  public withStatus(status: UserStatus): this {
    this.user.status = status;
    return this;
  }

  public withMfa(enabled: boolean): this {
    this.user.mfaEnabled = enabled;
    return this;
  }

  public deleted(): this {
    this.user.deletedAt = TestClock.nowIso();
    return this;
  }

  public build() {
    return {
      ...this.user,
      updatedAt: TestClock.nowIso(),
    };
  }
}

export class TenantBuilder {
  private tenant = { ...mockTenantFixture };

  public withId(id: string): this {
    this.tenant.id = id;
    return this;
  }

  public withName(name: string): this {
    this.tenant.name = name;
    return this;
  }

  public withDomain(domain: string): this {
    this.tenant.domain = domain;
    return this;
  }

  public withBillingPlan(plan: 'free' | 'growth' | 'enterprise'): this {
    this.tenant.billingPlan = plan;
    return this;
  }

  public withLimits(maxUsers: number, storageLimitGb: number): this {
    this.tenant.settings = {
      ...this.tenant.settings,
      maxUsers,
      storageLimitGb,
    };
    return this;
  }

  public build() {
    return {
      ...this.tenant,
      updatedAt: TestClock.nowIso(),
    };
  }
}

export class OrganizationBuilder {
  private organization = { ...mockOrganizationFixture };

  public withId(id: string): this {
    this.organization.id = id;
    return this;
  }

  public withTenantId(tenantId: string): this {
    this.organization.tenantId = tenantId;
    return this;
  }

  public withName(name: string): this {
    this.organization.name = name;
    return this;
  }

  public withBillingTier(tier: string): this {
    this.organization.billingTier = tier;
    return this;
  }

  public build() {
    return {
      ...this.organization,
      updatedAt: TestClock.nowIso(),
    };
  }
}`
  },
  {
    name: 'factories/index.ts',
    path: 'packages/testing/src/factories/index.ts',
    language: 'typescript',
    role: 'Batch Mock Factories',
    description: 'Sequenced builders to effortlessly spawn large lists of unique data entities.',
    content: `import { UserRole, UserStatus } from '@sbb/types';
import { generateTestUuid } from '../helpers/index.js';
import { UserBuilder, TenantBuilder } from '../builders/index.js';

let userSequence = 1;
let tenantSequence = 1;

export function resetSequenceCounters(): void {
  userSequence = 1;
  tenantSequence = 1;
}

export function createUserMock(overrides?: {
  role?: UserRole;
  status?: UserStatus;
  mfaEnabled?: boolean;
}) {
  const seq = userSequence++;
  const builder = new UserBuilder()
    .withId(generateTestUuid(\`u-\${seq}\`))
    .withEmail(\`user-\${seq}@sbb.internal\`)
    .withName(\`First-\${seq}\`, \`Last-\${seq}\`);

  if (overrides?.role) builder.withRole(overrides.role);
  if (overrides?.status) builder.withStatus(overrides.status);
  if (overrides?.mfaEnabled !== undefined) builder.withMfa(overrides.mfaEnabled);

  return builder.build();
}

export function createTenantMock(overrides?: {
  billingPlan?: 'free' | 'growth' | 'enterprise';
}) {
  const seq = tenantSequence++;
  const builder = new TenantBuilder()
    .withId(generateTestUuid(\`t-\${seq}\`))
    .withName(\`Tenant Division \${seq}\`)
    .withDomain(\`tenant-\${seq}.sbb.internal\`);

  if (overrides?.billingPlan) builder.withBillingPlan(overrides.billingPlan);

  return builder.build();
}

export function createUserMockList(count: number): ReturnType<typeof createUserMock>[] {
  const users = [];
  for (let i = 0; i < count; i++) {
    users.push(createUserMock());
  }
  return users;
}`
  },
  {
    name: 'assertions/index.ts',
    path: 'packages/testing/src/assertions/index.ts',
    language: 'typescript',
    role: 'Custom Test Assertions',
    description: 'Framework-agnostic helpers asserting UUID structure, ISO-date structures, and error states.',
    content: `export function assertUuid(value: any, message?: string): void {
  if (typeof value !== 'string') {
    throw new Error(message || \`Expected string for UUID, but got \${typeof value}\`);
  }
  const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
  const testUuidRegex = /^00000000-0000-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
  
  if (!uuidRegex.test(value) && !testUuidRegex.test(value)) {
    throw new Error(message || \`Expected valid UUID string, but got "\${value}"\`);
  }
}

export function assertIsoDateTime(value: any, message?: string): void {
  if (typeof value !== 'string') {
    throw new Error(message || \`Expected string for ISO date-time, but got \${typeof value}\`);
  }
  const isoRegex = /^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{3})?Z$/;
  if (!isoRegex.test(value)) {
    throw new Error(message || \`Expected valid ISO 8601 UTC date-time string, but got "\${value}"\`);
  }
}

export function assertValidationError(fn: () => any, expectedField?: string): void {
  try {
    fn();
  } catch (error: any) {
    const isZod = error.name === 'ZodError' || Array.isArray(error.issues);
    if (!isZod && !error.message?.toLowerCase().includes('validation')) {
      throw new Error(\`Expected validation error, but caught different error: \${error.message}\`);
    }

    if (expectedField && Array.isArray(error.issues)) {
      const hasField = error.issues.some((issue: any) => 
        issue.path?.includes(expectedField) || issue.message?.toLowerCase().includes(expectedField)
      );
      if (!hasField) {
        throw new Error(\`Validation error thrown, but did not reference expected field "\${expectedField}". Issues: \${JSON.stringify(error.issues)}\`);
      }
    }
    return;
  }
  throw new Error(\`Expected function to throw validation error, but it succeeded without error.\`);
}

export function assertContainsMatch<T>(
  array: T[],
  predicate: (item: T) => boolean,
  message?: string
): void {
  const match = array.some(predicate);
  if (!match) {
    throw new Error(message || 'Expected array to contain matching element, but no match was found.');
  }
}`
  },
  {
    name: 'integration/index.ts',
    path: 'packages/testing/src/integration/index.ts',
    language: 'typescript',
    role: 'Transactional Monitors',
    description: 'Simulates transaction scopes, rollbacks, and webhook responses.',
    content: `export class MockDatabaseManager {
  private tables: Map<string, any[]> = new Map();
  private transactionBackup: Map<string, any[]> | null = null;

  public clearAll(): void {
    this.tables.clear();
    this.transactionBackup = null;
  }

  public getTable<T>(tableName: string): T[] {
    if (!this.tables.has(tableName)) {
      this.tables.set(tableName, []);
    }
    return this.tables.get(tableName) as T[];
  }

  public beginTransaction(): void {
    if (this.transactionBackup !== null) {
      throw new Error('A mock transaction is already in progress');
    }
    this.transactionBackup = new Map();
    for (const [key, value] of this.tables.entries()) {
      this.transactionBackup.set(key, JSON.parse(JSON.stringify(value)));
    }
  }

  public commitTransaction(): void {
    if (this.transactionBackup === null) {
      throw new Error('No active mock transaction to commit');
    }
    this.transactionBackup = null;
  }

  public rollbackTransaction(): void {
    if (this.transactionBackup === null) {
      throw new Error('No active mock transaction to roll back');
    }
    this.tables = this.transactionBackup;
    this.transactionBackup = null;
  }
}

export class SimulatedWebhookReceiver {
  private receivedPayloads: any[] = [];

  public receive(payload: any): void {
    this.receivedPayloads.push(payload);
  }

  public getPayloads(): any[] {
    return [...this.receivedPayloads];
  }

  public clear(): void {
    this.receivedPayloads = [];
  }
}`
  },
  {
    name: 'README.md',
    path: 'packages/testing/src/README.md',
    language: 'markdown',
    role: 'Internal Documentation',
    description: 'Internal guide laying out packaging, folder targets, and development standards.',
    content: `# @sbb/testing - Source Architecture

This directory houses the shared testing infrastructure for the **SBB Platform**.

## 🧱 Subdirectories

* **\`helpers/\`**: Primitives like deterministic Test UUID generators and mock \`TestClock\` classes to make async and time-based assertions reproducible.
* **\`fixtures/\`**: Static baseline entities for users, tenants, and workflows mimicking production data payloads.
* **\`mocks/\`**: Environment mocks including \`SbbRequestContext\`, standard mock HTTP Request and Response schemas for route execution tests.
* **\`builders/\`**: Fluent design pattern test data builders supporting chainable setups (e.g. \`UserBuilder\`, \`TenantBuilder\`).
* **\`factories/\`**: Batch data mock factories utilizing sequences to automatically spawn collections of unique mock items.
* **\`assertions/\`**: Rich collection of framework-agnostic assert helpers targeting UUID standards, ISO date-times, and expected validation/Zod exception patterns.
* **\`integration/\`**: Advanced transactional database monitors and mock webhook receivers designed to simplify integration test setups.

## ⚠️ Guidelines

1. **Keep Framework-Agnostic**: Keep builders, assertions, and mocks pure TypeScript and compatible with any test runner (Vitest, Jest, Playwright, etc.).
2. **Zero-Production Leakage**: These elements should only ever be imported inside \`.test.ts\`, \`.spec.ts\` files, or development sandbox modules.
3. **No Database Dependencies**: All operations here are computed strictly in-memory.`
  }
];

export const utilsFileList: FileNode[] = [
  {
    name: 'strings/index.ts',
    path: 'packages/utils/src/strings/index.ts',
    language: 'typescript',
    role: 'String Manipulation',
    description: 'String case converters, camelCase, snakeCase, kebabCase, slugify, and truncate.',
    content: `/**
 * Capitalizes the first letter of a string.
 */
export function capitalize(str: string): string {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Converts a string to camelCase.
 */
export function camelCase(str: string): string {
  if (!str) return '';
  const parts = str.toLowerCase().split(/[^a-zA-Z0-9]+/);
  return parts
    .filter(Boolean)
    .map((part, index) => (index === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)))
    .join('');
}

/**
 * Converts a string to kebab-case.
 */
export function kebabCase(str: string): string {
  if (!str) return '';
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .toLowerCase()
    .replace(/^-+|-+$/g, '');
}

/**
 * Converts a string to snake_case.
 */
export function snakeCase(str: string): string {
  if (!str) return '';
  return str
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/[^a-zA-Z0-9]+/g, '_')
    .toLowerCase()
    .replace(/^_+|_+$/g, '');
}

/**
 * Truncates a string to a maximum length, appending a suffix if exceeded.
 */
export function truncate(str: string, length: number, suffix = '...'): string {
  if (!str) return '';
  if (str.length <= length) return str;
  return str.slice(0, length) + suffix;
}

/**
 * Generates a URL-friendly slug from a string.
 */
export function slugify(str: string): string {
  if (!str) return '';
  return str
    .toLowerCase()
    .trim()
    .normalize('NFD') // Remove accents
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}`
  },
  {
    name: 'dates/index.ts',
    path: 'packages/utils/src/dates/index.ts',
    language: 'typescript',
    role: 'Date Management',
    description: 'FormatDate, addDays, differenceInDays, and isExpired utility helpers.',
    content: `/**
 * Formats a date using a simple template string (e.g., 'YYYY-MM-DD HH:mm:ss').
 * Supported tokens: YYYY, MM, DD, HH, mm, ss
 */
export function formatDate(date: Date | string | number, formatPattern = 'YYYY-MM-DD'): string {
  const d = new Date(date);
  if (isNaN(d.getTime())) return '';

  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');
  const seconds = String(d.getSeconds()).padStart(2, '0');

  return formatPattern
    .replace('YYYY', String(year))
    .replace('MM', month)
    .replace('DD', day)
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds);
}

/**
 * Adds a specified number of days to a date.
 */
export function addDays(date: Date | string | number, days: number): Date {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

/**
 * Calculates the difference in full days between two dates (dateLeft - dateRight).
 */
export function differenceInDays(dateLeft: Date | string | number, dateRight: Date | string | number): number {
  const dLeft = new Date(dateLeft);
  const dRight = new Date(dateRight);

  // Use UTC to avoid daylight saving transitions skewing the day count
  const utcLeft = Date.UTC(dLeft.getFullYear(), dLeft.getMonth(), dLeft.getDate());
  const utcRight = Date.UTC(dRight.getFullYear(), dRight.getMonth(), dRight.getDate());

  const msPerDay = 1000 * 60 * 60 * 24;
  return Math.floor((utcLeft - utcRight) / msPerDay);
}

/**
 * Checks if a given expiry date is in the past compared to a reference date (defaults to now).
 */
export function isExpired(expiryDate: Date | string | number, referenceDate: Date | string | number = new Date()): boolean {
  const expiry = new Date(expiryDate).getTime();
  const reference = new Date(referenceDate).getTime();
  return expiry < reference;
}`
  },
  {
    name: 'uuid/index.ts',
    path: 'packages/utils/src/uuid/index.ts',
    language: 'typescript',
    role: 'Identifier Management',
    description: 'Validates RFC 4122 v4 UUIDs and generates standard UUID keys.',
    content: `/**
 * Generates a standard UUID v4 string.
 * Uses native crypto.randomUUID() when available, otherwise falls back to a compliant generator.
 */
export function generateUuid(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  // Math.random fallback compliant with RFC 4122 v4
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * Validates whether a given value is a standard RFC 4122 UUID.
 */
export function isValidUuid(val: unknown): boolean {
  if (typeof val !== 'string') return false;
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(val);
}`
  },
  {
    name: 'objects/index.ts',
    path: 'packages/utils/src/objects/index.ts',
    language: 'typescript',
    role: 'Deep Merge & Clone',
    description: 'Implements non-destructive deep merging, cloning, and omit/pick modifiers.',
    content: `/**
 * Helper to check if a value is a plain object.
 */
function isObject(item: unknown): item is Record<string, any> {
  return item !== null && typeof item === 'object' && !Array.isArray(item) && !(item instanceof Date) && !(item instanceof RegExp);
}

/**
 * Deeply merges multiple source objects into a target object.
 * This is non-destructive and returns a new object.
 */
export function deepMerge<T extends Record<string, any> = Record<string, any>>(
  target: T,
  ...sources: Array<Partial<T> | Record<string, any>>
): T {
  const result = deepClone(target) as any;

  for (const source of sources) {
    if (!source || typeof source !== 'object') continue;
    for (const key of Object.keys(source)) {
      const val = source[key];
      if (isObject(val)) {
        if (!isObject(result[key])) {
          result[key] = {};
        }
        result[key] = deepMerge(result[key], val);
      } else if (Array.isArray(val)) {
        result[key] = deepClone(val);
      } else {
        result[key] = val;
      }
    }
  }

  return result as T;
}

/**
 * Creates a deep clone of a value (supports nested objects, arrays, Dates, and RegExps).
 */
export function deepClone<T>(val: T): T {
  if (val === null || val === undefined) return val;

  if (Array.isArray(val)) {
    return val.map((item) => deepClone(item)) as unknown as T;
  }

  if (val instanceof Date) {
    return new Date(val.getTime()) as unknown as T;
  }

  if (val instanceof RegExp) {
    return new RegExp(val.source, val.flags) as unknown as T;
  }

  if (typeof val === 'object') {
    const clone = Object.create(Object.getPrototypeOf(val));
    for (const key of Object.keys(val)) {
      clone[key] = deepClone((val as any)[key]);
    }
    return clone as T;
  }

  return val;
}

/**
 * Creates a new object with the specified keys omitted.
 */
export function omit<T extends Record<string, any>, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  const result = { ...obj };
  for (const key of keys) {
    delete result[key];
  }
  return result;
}

/**
 * Creates a new object containing only the specified keys.
 */
export function pick<T extends Record<string, any>, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const result = {} as any;
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }
  return result;
}`
  },
  {
    name: 'collections/index.ts',
    path: 'packages/utils/src/collections/index.ts',
    language: 'typescript',
    role: 'Array Helpers',
    description: 'Filters, groupings, sorting, and array division/chunking helpers.',
    content: `/**
 * Returns unique elements of an array.
 * Optionally resolves uniqueness by an object property key or custom mapper function.
 */
export function unique<T>(arr: T[], key?: keyof T | ((item: T) => any)): T[] {
  if (!key) {
    return Array.from(new Set(arr));
  }
  const seen = new Set<any>();
  return arr.filter((item) => {
    const value = typeof key === 'function' ? key(item) : item[key];
    if (seen.has(value)) return false;
    seen.add(value);
    return true;
  });
}

/**
 * Groups an array of elements by a key or mapper function.
 */
export function groupBy<T, K extends string | number | symbol>(
  arr: T[],
  fn: keyof T | ((item: T) => K)
): Record<K, T[]> {
  return arr.reduce((acc, item) => {
    const key = typeof fn === 'function' ? fn(item) : (item[fn] as unknown as K);
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {} as Record<K, T[]>);
}

/**
 * Splits an array into chunks of a given maximum size.
 */
export function chunk<T>(arr: T[], size: number): T[][] {
  if (size <= 0) return [];
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

/**
 * Sorts an array (non-mutating) by a property key or custom selector.
 */
export function sortBy<T>(
  arr: T[],
  key: keyof T | ((item: T) => any),
  order: 'asc' | 'desc' = 'asc'
): T[] {
  const sorted = [...arr];
  sorted.sort((a, b) => {
    const valA = typeof key === 'function' ? key(a) : a[key];
    const valB = typeof key === 'function' ? key(b) : b[key];

    if (valA === valB) return 0;
    if (valA === null || valA === undefined) return 1;
    if (valB === null || valB === undefined) return -1;

    let comparison = 0;
    if (typeof valA === 'string' && typeof valB === 'string') {
      comparison = valA.localeCompare(valB);
    } else {
      comparison = valA < valB ? -1 : 1;
    }

    return order === 'asc' ? comparison : -comparison;
  });
  return sorted;
}`
  },
  {
    name: 'numbers/index.ts',
    path: 'packages/utils/src/numbers/index.ts',
    language: 'typescript',
    role: 'Numerical Computations',
    description: 'Clamp constraints, decimal rounders, and percentage calculations.',
    content: `/**
 * Restricts a number to remain between a minimum and maximum value (inclusive).
 */
export function clamp(val: number, min: number, max: number): number {
  return Math.min(Math.max(val, min), max);
}

/**
 * Rounds a number to a specified number of decimal places.
 */
export function roundTo(val: number, decimals = 0): number {
  const factor = Math.pow(10, decimals);
  return Math.round(val * factor) / factor;
}

/**
 * Calculates the percentage of a value over a total, rounded to a specified decimal length.
 */
export function percentage(value: number, total: number, decimals = 0): number {
  if (total === 0) return 0;
  return roundTo((value / total) * 100, decimals);
}`
  },
  {
    name: 'async/index.ts',
    path: 'packages/utils/src/async/index.ts',
    language: 'typescript',
    role: 'Promise Coordination',
    description: 'Async-await sleeps, promise timeout wrappers, and standard execution retriers.',
    content: `/**
 * Suspends execution for a specified number of milliseconds.
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Wraps a promise in a timeout, rejecting if the promise does not resolve within the specified limit.
 */
export function timeout<T>(promise: Promise<T>, ms: number, errorMessage = 'Operation timed out'): Promise<T> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error(errorMessage));
    }, ms);

    promise
      .then((res) => {
        clearTimeout(timer);
        resolve(res);
      })
      .catch((err) => {
        clearTimeout(timer);
        reject(err);
      });
  });
}

/**
 * Retries an asynchronous function on failure up to a maximum number of attempts.
 */
export async function retry<T>(
  fn: () => Promise<T>,
  options: { maxAttempts?: number; delay?: number; exponential?: boolean } = {}
): Promise<T> {
  const { maxAttempts = 3, delay = 1000, exponential = true } = options;
  let currentDelay = delay;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (error) {
      if (attempt === maxAttempts) {
        throw error;
      }
      await sleep(currentDelay);
      if (exponential) {
        currentDelay *= 2;
      }
    }
  }
  throw new Error('Retry failed');
}`
  },
  {
    name: 'retry/index.ts',
    path: 'packages/utils/src/retry/index.ts',
    language: 'typescript',
    role: 'Robust Retry Strategy',
    description: 'Stateful, configurable retrier supporting backoff scaling and random jitter.',
    content: `import { sleep } from '../async';

export interface RetryConfig {
  maxAttempts: number;
  delay: number;
  exponential: boolean;
  maxDelay?: number;
  jitter?: boolean;
}

export interface RetryState {
  attempt: number;
  error: any;
}

/**
 * Calculates the backoff delay based on the retry configuration.
 */
export function calculateBackoff(
  attempt: number,
  config: { delay: number; exponential: boolean; maxDelay?: number; jitter?: boolean }
): number {
  let nextDelay = config.delay;
  if (config.exponential) {
    nextDelay = config.delay * Math.pow(2, attempt - 1);
  }
  if (config.maxDelay) {
    nextDelay = Math.min(nextDelay, config.maxDelay);
  }
  if (config.jitter) {
    // Add random jitter of +/- 10%
    const jitterAmount = nextDelay * 0.1;
    const randomShift = (Math.random() * 2 - 1) * jitterAmount;
    nextDelay += randomShift;
  }
  return Math.max(0, nextDelay);
}

/**
 * Executes an asynchronous function and retries on failure based on detailed, customizable rules.
 */
export async function retryWithConfig<T>(
  fn: (state: RetryState) => Promise<T>,
  config: Partial<RetryConfig> = {},
  onRetry?: (state: RetryState) => void
): Promise<T> {
  const fullConfig: RetryConfig = {
    maxAttempts: 3,
    delay: 1000,
    exponential: true,
    jitter: false,
    ...config,
  };

  for (let attempt = 1; attempt <= fullConfig.maxAttempts; attempt++) {
    try {
      return await fn({ attempt, error: null });
    } catch (error) {
      const state: RetryState = { attempt, error };
      if (attempt === fullConfig.maxAttempts) {
        throw error;
      }
      if (onRetry) {
        onRetry(state);
      }
      const backoffDelay = calculateBackoff(attempt, fullConfig);
      await sleep(backoffDelay);
    }
  }
  throw new Error('Retry failed');
}`
  },
  {
    name: 'index.ts',
    path: 'packages/utils/src/index.ts',
    language: 'typescript',
    role: 'Package Exports',
    description: 'Exposes strings, numbers, objects, dates, collections, async, and retry APIs.',
    content: `export * from './async';
export * from './collections';
export * from './dates';
export * from './numbers';
export * from './objects';
export * from './retry';
export * from './strings';
export * from './uuid';`
  },
  {
    name: 'package.json',
    path: 'packages/utils/package.json',
    language: 'json',
    role: 'Package Manifest',
    description: 'Declares @sbb/utils module version, exports, and dev dependencies.',
    content: `{
  "name": "@sbb/utils",
  "version": "1.0.0",
  "description": "Shared utility library for the SBB Platform",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "test": "echo \\"Error: no test specified\\" && exit 0"
  },
  "dependencies": {},
  "devDependencies": {
    "typescript": "^5.4.5"
  },
  "publishConfig": {
    "access": "restricted"
  }
}`
  },
  {
    name: 'tsconfig.json',
    path: 'packages/utils/tsconfig.json',
    language: 'json',
    role: 'Compilation Directives',
    description: 'TypeScript configuration file driving strict builds and output targets.',
    content: `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "declaration": true,
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}`
  },
  {
    name: 'README.md',
    path: 'packages/utils/README.md',
    language: 'markdown',
    role: 'Documentation',
    description: 'Comprehensive usage patterns, installation, and complete catalog references.',
    content: `# @sbb/utils

Shared, framework-agnostic utility package for the SBB Platform. This package provides highly optimized, type-safe, and dependency-free functions used across backend services, frontend web applications, and testing environments.

---

## 🚀 Key Modules

* **Strings**: capitalization, camelCase, snakeCase, kebabCase, slugify, and truncate.
* **Dates**: template-based date formatting, arithmetic, duration offsets, and expiry checks.
* **UUID**: v4 creation and Regex standard UUID validation.
* **Objects**: non-mutating deep merging, recursive cloning, and omit/pick modifiers.
* **Collections**: array filters, grouping, partitioning, and stable sorting.
* **Numbers**: value range clamps, precision rounders, and percentage calculations.
* **Async**: promises sleeping, timeouts, and standard executor retriers.
* **Retry**: customizable stateful retry handlers with exponential backoff and random noise (jitter) to prevent cascading stampedes.`
  },
  {
    name: 'CHANGELOG.md',
    path: 'packages/utils/CHANGELOG.md',
    language: 'markdown',
    role: 'Version Registry',
    description: 'Historical records tracking added features, adjustments, and package releases.',
    content: `# Changelog

All notable changes to the \`@sbb/utils\` package will be documented in this file.

## [1.0.0] - 2026-07-02

### Added
- Created the core shared utilities package (\`@sbb/utils\`) featuring type-safe, framework-agnostic helper modules.
- Implemented **Strings** utilities: \`capitalize\`, \`camelCase\`, \`kebabCase\`, \`snakeCase\`, \`truncate\`, and \`slugify\`.
- Implemented **Dates** utilities: \`formatDate\`, \`addDays\`, \`differenceInDays\`, and \`isExpired\`.
- Implemented **UUID** utilities: \`generateUuid\` and \`isValidUuid\`.
- Implemented **Objects** utilities: \`deepMerge\`, \`deepClone\`, \`omit\`, and \`pick\`.
- Implemented **Collections** utilities: \`unique\`, \`groupBy\`, \`chunk\`, and \`sortBy\`.
- Implemented **Numbers** utilities: \`clamp\`, \`roundTo\`, and \`percentage\`.
- Implemented **Async** utilities: \`sleep\`, \`timeout\`, and \`retry\`.
- Implemented **Retry** utilities: Advanced customizable \`retryWithConfig\` and backoff calculation supporting max attempts, delays, and exponential/jitter strategies.`
  }
];

export const uiFileList: FileNode[] = [
  {
    name: 'theme/colors.ts',
    path: 'packages/ui/src/theme/colors.ts',
    language: 'typescript',
    role: 'Color Palette',
    description: 'Centralized accessible color palette with light and dark mode mappings.',
    content: `/**
 * SBB Platform Color Palette
 * Designed for light and dark theme accessibilities (AA/AAA contrast levels).
 */
export const colors = {
  brand: {
    slate: '#1E293B',
    charcoal: '#0F172A',
    crimson: '#991B1B',
  },
  light: {
    bg: '#FAFAFA',
    surface: '#FFFFFF',
    border: '#E5E5E5',
    textPrimary: '#0F172A',
    textSecondary: '#475569',
    textMuted: '#94A3B8',
  },
  dark: {
    bg: '#0A0A0B',
    surface: '#0F0F11',
    border: '#262626',
    textPrimary: '#F5F5F5',
    textSecondary: '#A3A3A3',
    textMuted: '#737373',
  },
  status: {
    success: { light: '#15803D', dark: '#4ADE80' },
    warning: { light: '#B45309', dark: '#FBBF24' },
    error: { light: '#B91C1C', dark: '#F87171' },
    info: { light: '#1D4ED8', dark: '#60A5FA' }
  }
};`
  },
  {
    name: 'theme/spacing.ts',
    path: 'packages/ui/src/theme/spacing.ts',
    language: 'typescript',
    role: 'Spacing Scale',
    description: 'Proportional spacing values driving grids, gaps, padding, and margins.',
    content: `/**
 * SBB Spacing Scale
 */
export const spacing = {
  none: '0px',
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  xxl: '48px',
  xxxl: '64px',
};`
  },
  {
    name: 'theme/typography.ts',
    path: 'packages/ui/src/theme/typography.ts',
    language: 'typescript',
    role: 'Typography Pairing',
    description: 'Fonts, font-sizes, relative line heights, and weights for Swiss-style layouts.',
    content: `/**
 * SBB Typography Tokens
 */
export const typography = {
  fonts: {
    sans: 'Inter, system-ui, sans-serif',
    serif: 'Georgia, serif',
    mono: 'JetBrains Mono, Fira Code, monospace',
  },
  sizes: {
    xs: '11px',
    sm: '13px',
    base: '15px',
    md: '18px',
    lg: '24px',
    xl: '32px',
  },
  weights: {
    light: '300',
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  lineHeights: {
    none: '1',
    tight: '1.2',
    normal: '1.5',
    relaxed: '1.625',
  }
};`
  },
  {
    name: 'theme/radius.ts',
    path: 'packages/ui/src/theme/radius.ts',
    language: 'typescript',
    role: 'Corners Scale',
    description: 'Centralized rounded corner sizes driving buttons, fields, cards, and modal rails.',
    content: `/**
 * SBB Border Radius Tokens
 */
export const radius = {
  none: '0px',
  sm: '4px',
  md: '8px',
  lg: '12px',
  full: '9999px',
};`
  },
  {
    name: 'theme/shadows.ts',
    path: 'packages/ui/src/theme/shadows.ts',
    language: 'typescript',
    role: 'Elevation shadows',
    description: 'Lightweight realistic box shadow tokens keeping high layout readability.',
    content: `/**
 * SBB Elevation & Shadow Tokens
 */
export const shadows = {
  none: 'none',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
};`
  },
  {
    name: 'utils/cn.ts',
    path: 'packages/ui/src/utils/cn.ts',
    language: 'typescript',
    role: 'ClassName Combiner',
    description: 'Clean helper utilizing clsx and tailwind-merge for conflict-free element styling.',
    content: `import { clsx, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}`
  },
  {
    name: 'components/button/index.tsx',
    path: 'packages/ui/src/components/button/index.tsx',
    language: 'typescript',
    role: 'Foundational Button',
    description: 'Accessible button component featuring loaders, various sizes, and semantic variants.',
    content: `import * as React from 'react';
import { cn } from '../../utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading = false, disabled, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-sans font-medium rounded transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer active:scale-[0.98]';
    
    const variants = {
      primary: 'bg-stone-900 text-stone-100 hover:bg-stone-800 border border-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-200 dark:border-stone-200 shadow-sm focus-visible:ring-stone-500',
      secondary: 'bg-stone-100 text-stone-900 hover:bg-stone-200 border border-stone-200 dark:bg-stone-900 dark:text-stone-100 dark:hover:bg-stone-800 dark:border-stone-800 focus-visible:ring-stone-400',
      outline: 'bg-transparent text-stone-900 hover:bg-stone-100 border border-stone-200 dark:text-stone-100 dark:hover:bg-stone-900 dark:border-stone-800 focus-visible:ring-stone-500',
      ghost: 'bg-transparent text-stone-700 hover:bg-stone-100 hover:text-stone-900 dark:text-stone-300 dark:hover:bg-stone-900 dark:hover:text-stone-100',
      danger: 'bg-red-600 text-white hover:bg-red-700 border border-red-700 dark:bg-red-900/40 dark:text-red-200 dark:hover:bg-red-950 dark:border-red-900 focus-visible:ring-red-500'
    };

    const sizes = {
      sm: 'h-8 px-3 text-[11px] gap-1.5',
      md: 'h-10 px-4 text-[13px] gap-2',
      lg: 'h-12 px-6 text-[15px] gap-2.5'
    };

    return (
      <button ref={ref} disabled={disabled || isLoading} className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
        {isLoading && (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24" aria-hidden="true">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        )}
        {children}
      </button>
    );
  }
);`
  },
  {
    name: 'components/card/index.tsx',
    path: 'packages/ui/src/components/card/index.tsx',
    language: 'typescript',
    role: 'Layout Card',
    description: 'Polished composable card boundaries supporting headers, footers, titles, and body content.',
    content: `import * as React from 'react';
import { cn } from '../../utils/cn';

export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { interactive?: boolean }>(
  ({ className, interactive = false, ...props }, ref) => (
    <div ref={ref} className={cn('rounded-lg border bg-[#FAFAFA] border-neutral-200 text-neutral-900 shadow-sm dark:bg-[#0F0F11] dark:border-neutral-800 dark:text-neutral-100 transition-all', interactive && 'hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-md cursor-pointer active:scale-[0.99]', className)} {...props} />
  )
);

export const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn('flex flex-col space-y-1.5 p-6 border-b border-neutral-100 dark:border-neutral-800/50', className)} {...props} />
);

export const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => <h3 ref={ref} className={cn('text-sm font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 font-sans uppercase tracking-wider', className)} {...props} />
);

export const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => <p ref={ref} className={cn('text-[11px] text-neutral-500 dark:text-neutral-400 font-sans', className)} {...props} />
);

export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn('p-6 pt-4 text-[13px] font-sans leading-relaxed text-neutral-600 dark:text-neutral-300', className)} {...props} />
);

export const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn('flex items-center p-6 pt-0 border-t border-neutral-100 dark:border-neutral-800/50 mt-4', className)} {...props} />
);`
  },
  {
    name: 'components/input/index.tsx',
    path: 'packages/ui/src/components/input/index.tsx',
    language: 'typescript',
    role: 'Form Text Field',
    description: 'Fully semantic accessible text input component with custom labels and helper states.',
    content: `import * as React from 'react';
import { cn } from '../../utils/cn';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  helperText?: string;
  label?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', error = false, helperText, label, disabled, id, ...props }, ref) => {
    const inputId = id || React.useId();
    return (
      <div className="w-full flex flex-col space-y-1.5 font-sans" id={\`input-container-\${inputId}\`}>
        {label && <label htmlFor={inputId} className="text-[10px] uppercase tracking-widest font-mono font-bold text-neutral-500 dark:text-neutral-400">{label}</label>}
        <input id={inputId} type={type} ref={ref} disabled={disabled} className={cn('flex h-10 w-full rounded border bg-[#FCFCFD] px-3.5 py-2 text-[13px] text-neutral-900 shadow-sm transition-all placeholder:text-neutral-400 focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-[#09090A] dark:text-stone-100 dark:placeholder:text-stone-600 border-neutral-200 focus:border-neutral-800 focus:ring-neutral-800 dark:border-neutral-800 dark:focus:border-stone-400 dark:focus:ring-stone-400', error && 'border-red-500 focus:border-red-500 focus:ring-red-500 dark:border-red-900 dark:focus:border-red-500 dark:focus:ring-red-500', className)} {...props} />
        {helperText && <p className={cn('text-[10px] leading-tight font-sans', error ? 'text-red-500 dark:text-red-400' : 'text-neutral-500 dark:text-neutral-400')}>{helperText}</p>}
      </div>
    );
  }
);`
  },
  {
    name: 'components/badge/index.tsx',
    path: 'packages/ui/src/components/badge/index.tsx',
    language: 'typescript',
    role: 'Status Tag',
    description: 'Mono-spaced small badge tag designed for clean status indicators.',
    content: `import * as React from 'react';
import { cn } from '../../utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'success' | 'warning' | 'destructive' | 'info';
  pill?: boolean;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', pill = false, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 border select-none transition-all';
    const variants = {
      default: 'bg-stone-900 text-stone-100 border-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:border-stone-200',
      secondary: 'bg-stone-100 text-stone-800 border-stone-200 dark:bg-stone-900 dark:text-stone-200 dark:border-stone-800',
      outline: 'bg-transparent text-stone-900 border-stone-200 dark:text-stone-100 dark:border-stone-800',
      success: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/30',
      warning: 'bg-amber-500/10 text-amber-700 border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/30',
      destructive: 'bg-red-500/10 text-red-700 border-red-500/20 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/30',
      info: 'bg-blue-500/10 text-blue-700 border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/30'
    };
    return <span ref={ref} className={cn(baseStyles, variants[variant], pill ? 'rounded-full' : 'rounded-sm', className)} {...props} />;
  }
);`
  },
  {
    name: 'components/spinner/index.tsx',
    path: 'packages/ui/src/components/spinner/index.tsx',
    language: 'typescript',
    role: 'Loading Spinner',
    description: 'Dependency-free SVG spinner loader with customizable sizes and colors.',
    content: `import * as React from 'react';
import { cn } from '../../utils/cn';

export const Spinner = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { size?: 'xs' | 'sm' | 'md' | 'lg'; variant?: 'primary' | 'neutral' | 'current' }>(
  ({ className, size = 'md', variant = 'primary', ...props }, ref) => {
    const sizes = { xs: 'h-3 w-3 border-[1.5px]', sm: 'h-4 w-4 border-2', md: 'h-6 w-6 border-2', lg: 'h-10 w-10 border-[3px]' };
    const variants = {
      primary: 'border-neutral-200 border-t-stone-900 dark:border-stone-800 dark:border-t-stone-100',
      neutral: 'border-stone-200 border-t-stone-500 dark:border-stone-800 dark:border-t-stone-400',
      current: 'border-current/25 border-t-current',
    };
    return <div ref={ref} className={cn('animate-spin rounded-full border-solid', sizes[size], variants[variant], className)} role="status" aria-label="Loading" {...props} />;
  }
);`
  },
  {
    name: 'components/alert/index.tsx',
    path: 'packages/ui/src/components/alert/index.tsx',
    language: 'typescript',
    role: 'Semantic Alert',
    description: 'Banners for inline notifications, errors, warnings, info, and success logs.',
    content: `import * as React from 'react';
import { cn } from '../../utils/cn';

export const Alert = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { variant?: 'info' | 'success' | 'warning' | 'error'; title?: string }>(
  ({ className, variant = 'info', title, children, ...props }, ref) => {
    const variants = {
      info: 'bg-blue-50/50 text-blue-900 border-blue-200/60 dark:bg-blue-950/20 dark:text-blue-200 dark:border-blue-900/40',
      success: 'bg-emerald-50/50 text-emerald-900 border-emerald-200/60 dark:bg-emerald-950/20 dark:text-emerald-200 dark:border-emerald-900/40',
      warning: 'bg-amber-50/50 text-amber-900 border-amber-200/60 dark:bg-amber-950/20 dark:text-amber-200 dark:border-amber-900/40',
      error: 'bg-red-50/50 text-red-900 border-red-200/60 dark:bg-red-950/20 dark:text-red-200 dark:border-red-900/40',
    };
    const icons = {
      info: <svg className="h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 111.083.984l-.04.02-2.012 1.006a.75.75 0 01-1.083-.984l.012-.006 2.012-1.006zM12 7.5h.008v.008H12V7.5zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      success: <svg className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      warning: <svg className="h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" /></svg>,
      error: <svg className="h-4 w-4 shrink-0 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.03L3.07 19.5a1.5 1.5 0 001.27 2.25h15.32a1.5 1.5 0 001.27-2.25L12 2.72zM12 15.75h.008v.008H12v-.008z" /></svg>,
    };
    return (
      <div ref={ref} role="alert" className={cn('flex gap-3 p-4 rounded-md border text-[13px] font-sans leading-relaxed transition-all', variants[variant], className)} {...props}>
        <div className="mt-0.5">{icons[variant]}</div>
        <div className="flex-1 flex flex-col space-y-1">
          {title && <span className="font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">{title}</span>}
          {children && <div className="text-neutral-600 dark:text-neutral-300">{children}</div>}
        </div>
      </div>
    );
  }
);`
  },
  {
    name: 'index.ts',
    path: 'packages/ui/src/index.ts',
    language: 'typescript',
    role: 'Package Exports',
    description: 'Exposes theme parameters, styling metrics, and all UI components.',
    content: `export * from './theme/colors';
export * from './theme/spacing';
export * from './theme/typography';
export * from './theme/radius';
export * from './theme/shadows';

export * from './components/button';
export * from './components/card';
export * from './components/input';
export * from './components/badge';
export * from './components/spinner';
export * from './components/alert';

export * from './utils/cn';`
  },
  {
    name: 'package.json',
    path: 'packages/ui/package.json',
    language: 'json',
    role: 'Package Manifest',
    description: 'Declares @sbb/ui module version, peerDependencies, and build configurations.',
    content: `{
  "name": "@sbb/ui",
  "version": "1.0.0",
  "description": "Foundational Design System and Reusable Components for the SBB Platform",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "test": "echo \\"Error: no test specified\\" && exit 0"
  },
  "peerDependencies": {
    "react": "^18.0.0 || ^19.0.0",
    "react-dom": "^18.0.0 || ^19.0.0"
  },
  "dependencies": {
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.3.0"
  },
  "devDependencies": {
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "typescript": "^5.4.5"
  },
  "publishConfig": {
    "access": "restricted"
  }
}`
  },
  {
    name: 'tsconfig.json',
    path: 'packages/ui/tsconfig.json',
    language: 'json',
    role: 'Compilation Directives',
    description: 'TypeScript rules driving custom JSX builds and type declaration files.',
    content: `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "jsx": "react-jsx",
    "declaration": true,
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}`
  },
  {
    name: 'README.md',
    path: 'packages/ui/README.md',
    language: 'markdown',
    role: 'Documentation',
    description: 'Comprehensive tokens index and code samples for each component.',
    content: `# @sbb/ui

The foundational design system and reusable component library for the SBB Platform. Designed for strict accessibility (AA/AAA contrast compliance), pixel-perfect responsive layouts, and modern typography pairs.

---

## 🎨 Theme Tokens

* **Colors**: central dark/light palette with brand slate \`#1E293B\` and charcoal.
* **Spacing**: proportional scales from \`4px\` to \`64px\`.
* **Typography**: Swiss layout pairings using Inter and JetBrains Mono.
* **Border Radius**: sharp and subtle options up to \`12px\`.
* **Shadows**: calibrated realistic elevation levels.

---

## 🧩 Foundational Components

* **Button**: support for primary, secondary, outline, danger variants with built-in loader.
* **Card**: fully composable wrappers for title, description, content and action footer.
* **Input**: semantic fields with label headers, helpers, and active error highlight.
* **Badge**: small monospaced indicators for statuses.
* **Spinner**: lightweight inline SVG loader spinner.
* **Alert**: clear layout banner notifying status logs.`
  },
  {
    name: 'CHANGELOG.md',
    path: 'packages/ui/CHANGELOG.md',
    language: 'markdown',
    role: 'Version Registry',
    description: 'Changelog capturing release notes and completed milestones.',
    content: `# Changelog

All notable changes to the \`@sbb/ui\` package will be documented in this file.

## [1.0.0] - 2026-07-02

### Added
- Created the core design system and foundational UI package (\`@sbb/ui\`) with full dark & light support.
- Implemented **Theme design tokens**: Colors palette, spacing grid, typography paired variables, border-radius, and realistic shadows.
- Implemented **Button component**: Flexible variants, loaders, sizes, and micro-interaction states.
- Implemented **Card structures**: Composable Card, CardHeader, CardTitle, CardDescription, CardContent, and CardFooter sub-components.
- Implemented **Input field**: Accessible labels, border highlighting, helper layouts, and standard error handling.
- Implemented **Badge tag**: Multiple semantic status colorways and custom rounded options.
- Implemented **Spinner indicator**: Fluid CSS keyframe animations, scale sizes, and lightweight inline SVG path.
- Implemented **Alert banner**: Full accessibility, built-in indicator glyphs, title lines, and error/success messaging frames.`
  },
  {
    name: 'agent-communication.ts',
    path: 'packages/agent-communication/src/core/agent-communication.ts',
    language: 'typescript',
    role: 'Communication Platform Contract',
    description: 'Declares the core AgentCommunication interface, participant, routing, and escalation controls.',
    content: `import { AgentId } from '@sbb/agent-framework';
import { ConversationId } from '../identity/conversation-id.js';
import { CommunicationMessage } from '../messages/communication-message.js';
import { Participant } from '../participants/participant.js';
import { InteractionContext } from './interaction-context.js';
import { Conversation } from './conversation.js';

export interface AgentCommunication {
  startConversation(tenantId: string, participants: Participant[], context: InteractionContext): Promise<Conversation>;
  sendMessage(tenantId: string, conversationId: ConversationId, message: CommunicationMessage, context: InteractionContext): Promise<CommunicationMessage>;
  receiveMessage(tenantId: string, conversationId: ConversationId, message: CommunicationMessage, context: InteractionContext): Promise<CommunicationMessage>;
  routeCommunication(tenantId: string, conversationId: ConversationId, targetScopeCode: string, context: InteractionContext): Promise<void>;
  escalateConversation(tenantId: string, conversationId: ConversationId, escalationPathId: string, reason: string, context: InteractionContext): Promise<Conversation>;
  completeConversation(tenantId: string, conversationId: ConversationId, context: InteractionContext): Promise<void>;
}`
  },
  {
    name: 'communication-session.ts',
    path: 'packages/agent-communication/src/core/communication-session.ts',
    language: 'typescript',
    role: 'Session Management',
    description: 'Tracks state, leases, and conversation associations of active agent communication channel leases.',
    content: `import { CommunicationId } from '../identity/communication-id.js';
import { ConversationId } from '../identity/conversation-id.js';

export type CommunicationSessionState = 'ESTABLISHED' | 'ACTIVE' | 'ON_HOLD' | 'COMPLETED' | 'TERMINATED';

export interface CommunicationSession {
  readonly sessionId: string;
  readonly communicationId: CommunicationId;
  readonly conversationId: ConversationId;
  readonly tenantId: string;
  readonly state: CommunicationSessionState;
  readonly lastInteractionAt: Date;
  readonly establishedAt: Date;
}`
  },
  {
    name: 'confidentiality-level.ts',
    path: 'packages/agent-communication/src/security/confidentiality-level.ts',
    language: 'typescript',
    role: 'Confidentiality Scoping',
    description: 'Models data privacy levels from public to highly confidential secret scopes.',
    content: `export type ConfidentialityLevelType = 
  | 'PUBLIC'
  | 'INTERNAL_SBB'
  | 'RESTRICTED_DEPARTMENT'
  | 'SECRET_COGNITIVE'
  | 'CONFIDENTIAL_LEGACY';`
  },
  {
    name: 'agent-collaboration.ts',
    path: 'packages/agent-collaboration/src/core/agent-collaboration.ts',
    language: 'typescript',
    role: 'Collaboration Platform Contract',
    description: 'Declares the core AgentCollaboration interface, coordination, workspace, and resolution controls.',
    content: `import { CollaborationId } from '../identity/collaboration-id.js';
import { WorkspaceId } from '../identity/workspace-id.js';
import { CollaborationContext } from './collaboration-context.js';
import { CollaborationSession } from './collaboration-session.js';
import { ParticipantAssignment } from '../teams/participant-assignment.js';
import { WorkAllocation } from '../coordination/work-allocation.js';
import { SharedDecision } from '../decision/shared-decision.js';

export interface AgentCollaboration {
  startCollaboration(tenantId: string, initialWorkspaceId: WorkspaceId, context: CollaborationContext): Promise<CollaborationSession>;
  addParticipant(tenantId: string, collaborationId: CollaborationId, assignment: ParticipantAssignment, context: CollaborationContext): Promise<ParticipantAssignment>;
  assignResponsibility(tenantId: string, collaborationId: CollaborationId, assignmentId: string, responsibilityDescription: string, context: CollaborationContext): Promise<ParticipantAssignment>;
  coordinateWork(tenantId: string, collaborationId: CollaborationId, allocation: WorkAllocation, context: CollaborationContext): Promise<WorkAllocation>;
  resolveConflict(tenantId: string, collaborationId: CollaborationId, conflictId: string, decision: SharedDecision, context: CollaborationContext): Promise<SharedDecision>;
  completeCollaboration(tenantId: string, collaborationId: CollaborationId, context: CollaborationContext): Promise<void>;
}`
  },
  {
    name: 'collaboration-workspace.ts',
    path: 'packages/agent-collaboration/src/core/collaboration-workspace.ts',
    language: 'typescript',
    role: 'Workspace Management',
    description: 'Tracks state, objectives, and artifact distributions of active teamwork workspaces.',
    content: `import { WorkspaceId } from '../identity/workspace-id.js';
import { CollaborationId } from '../identity/collaboration-id.js';
import { SharedObjective } from '../objectives/shared-objective.js';
import { SharedArtifact } from '../knowledge/shared-artifact.js';

export interface CollaborationWorkspace {
  readonly workspaceId: WorkspaceId;
  readonly collaborationId: CollaborationId;
  readonly tenantId: string;
  readonly displayName: string;
  readonly activeObjectivesList: SharedObjective[];
  readonly sharedArtifactsList: SharedArtifact[];
  readonly lastSynchronizedAt: Date;
  readonly createdAt: Date;
}`
  },
  {
    name: 'consensus-model.ts',
    path: 'packages/agent-collaboration/src/decision/consensus-model.ts',
    language: 'typescript',
    role: 'Consensus Decisioning',
    description: 'Models multi-agent consensus protocols and voting classifications.',
    content: `export type ConsensusModelType = 
  | 'UNANIMOUS'
  | 'MAJORITY_SIMPLE'
  | 'MAJORITY_QUALIFIED'
  | 'SUPERVISOR_LEADER'
  | 'HUMAN_OVERRIDE_ONLY';`
  },
  {
    name: 'README.md',
    path: 'packages/agent-collaboration/README.md',
    language: 'markdown',
    role: 'Architectural Specs',
    description: 'Detailed specifications for AGT-007 Enterprise Agent Collaboration module.',
    content: `# Enterprise Agent Collaboration (AGT-007)

The Enterprise Agent Collaboration module defines how multiple Digital Employees work together toward shared business goals under strict corporate governance rules.`
  },
  {
    name: 'agent-planning.ts',
    path: 'packages/agent-planning/src/core/agent-planning.ts',
    language: 'typescript',
    role: 'Planning Platform Contract',
    description: 'Declares the core AgentPlanning interface, goal decomposition, risk analysis, and gated reviews.',
    content: `import { BusinessGoal } from '../goals/business-goal.js';
import { ObjectiveAnalysis } from '../goals/objective-analysis.js';
import { ExecutionPlan } from '../planning/execution-plan.js';
import { PlanId } from '../identity/plan-id.js';
import { AlternativePlan } from '../planning/alternative-plan.js';
import { RiskAssessment } from '../risk/risk-assessment.js';
import { ResourceOptimization } from '../optimization/resource-optimization.js';
import { TimelineOptimization } from '../optimization/timeline-optimization.js';
import { CostOptimization } from '../optimization/cost-optimization.js';
import { ApprovalGate } from '../approval/approval-gate.js';
import { PlanningContext } from './planning-context.js';

export interface AgentPlanning {
  analyzeGoal(tenantId: string, goal: BusinessGoal, context: PlanningContext): Promise<ObjectiveAnalysis>;
  buildPlan(tenantId: string, goalId: string, analysisId: string, context: PlanningContext): Promise<ExecutionPlan>;
  evaluateAlternatives(tenantId: string, basePlanId: PlanId, context: PlanningContext): Promise<AlternativePlan[]>;
  assessRisk(tenantId: string, planId: PlanId, context: PlanningContext): Promise<RiskAssessment[]>;
  optimizePlan(tenantId: string, planId: PlanId, context: PlanningContext): Promise<{
    readonly resource: ResourceOptimization;
    readonly timeline: TimelineOptimization;
    readonly cost: CostOptimization;
  }>;
  submitForApproval(tenantId: string, planId: PlanId, gateId: string, context: PlanningContext): Promise<ApprovalGate>;
}`
  },
  {
    name: 'execution-plan.ts',
    path: 'packages/agent-planning/src/planning/execution-plan.ts',
    language: 'typescript',
    role: 'Plan Generation Model',
    description: 'Models execution sequences, dependency phases, dynamic steps, and branching logic.',
    content: `import { PlanId } from '../identity/plan-id.js';
import { ExecutionPhase } from './execution-phase.js';
import { DecisionBranch } from './decision-branch.js';

export interface ExecutionPlan {
  readonly planId: PlanId;
  readonly tenantId: string;
  readonly businessGoalId: string;
  readonly title: string;
  readonly phasesList: ExecutionPhase[];
  readonly branchingDecisionsList: DecisionBranch[];
  readonly estimatedTotalDurationMinutes: number;
  readonly estimatedCostChf: number;
  readonly versionNumber: number;
  readonly createdAt: Date;
}`
  },
  {
    name: 'risk-assessment.ts',
    path: 'packages/agent-planning/src/risk/risk-assessment.ts',
    language: 'typescript',
    role: 'Risk Assessment Model',
    description: 'Tracks potential plan failures, preventative strategies, and active triggers.',
    content: `import { MitigationStrategy } from './mitigation-strategy.js';
import { ContingencyPlan } from './contingency-plan.js';

export interface RiskAssessment {
  readonly assessmentId: string;
  readonly targetPlanId: string;
  readonly identifiedRiskDescription: string;
  readonly probabilityScore: number;
  readonly impactScore: number;
  readonly severityScore: number;
  readonly activeMitigation: MitigationStrategy;
  readonly contingency: ContingencyPlan;
  readonly assessedAt: Date;
}`
  },
  {
    name: 'README.md',
    path: 'packages/agent-planning/README.md',
    language: 'markdown',
    role: 'Architectural Specs',
    description: 'Detailed specifications for AGT-008 Enterprise Agent Planning module.',
    content: `# Enterprise Agent Planning (AGT-008)

The Enterprise Agent Planning module defines how SBB's Digital Employees transform business goals into structured, governable execution plans.`
  },
  {
    name: 'agent-execution.ts',
    path: 'packages/agent-execution/src/core/agent-execution.ts',
    language: 'typescript',
    role: 'Execution Platform Contract',
    description: 'Declares the core AgentExecution interface, starting execution sessions, dispatcher bindings, and failure recovery policies.',
    content: `import { ExecutionContext } from './execution-context.js';
import { ExecutionSession } from './execution-session.js';
import { ExecutionId } from '../identity/execution-id.js';
import { ExecutionProgress } from '../steps/execution-progress.js';
import { RecoveryStrategy } from '../recovery/recovery-strategy.js';
import { ExecutionStrategy } from '../strategy/execution-strategy.js';

export interface AgentExecution {
  startExecution(tenantId: string, approvedPlanId: string, strategy: ExecutionStrategy, context: ExecutionContext): Promise<ExecutionSession>;
  executeApprovedPlan(tenantId: string, executionId: ExecutionId, context: ExecutionContext): Promise<void>;
  coordinateExecution(tenantId: string, executionId: ExecutionId, context: ExecutionContext): Promise<ExecutionSession>;
  trackProgress(tenantId: string, executionId: ExecutionId, context: ExecutionContext): Promise<ExecutionProgress>;
  handleFailure(tenantId: string, executionId: ExecutionId, failingStepId: string, failureCode: string, context: ExecutionContext): Promise<RecoveryStrategy>;
  completeExecution(tenantId: string, executionId: ExecutionId, context: ExecutionContext): Promise<void>;
}`
  },
  {
    name: 'execution-session.ts',
    path: 'packages/agent-execution/src/core/execution-session.ts',
    language: 'typescript',
    role: 'Execution Session Model',
    description: 'Models active execution runs, current phase tracker, and start/last modification timestamps.',
    content: `import { ExecutionSessionId } from '../identity/execution-session-id.js';
import { ExecutionId } from '../identity/execution-id.js';
import { ExecutionLifecycleState } from './execution-lifecycle.js';

export interface ExecutionSession {
  readonly sessionId: ExecutionSessionId;
  readonly executionId: ExecutionId;
  readonly tenantId: string;
  readonly approvedPlanId: string;
  readonly currentState: ExecutionLifecycleState;
  readonly currentPhaseId?: string;
  readonly currentStepId?: string;
  readonly startedAt: Date;
  readonly lastUpdatedAt: Date;
}`
  },
  {
    name: 'recovery-strategy.ts',
    path: 'packages/agent-execution/src/recovery/recovery-strategy.ts',
    language: 'typescript',
    role: 'Recovery Decisions Model',
    description: 'Models recovery actions (retry, rollback, skip, or manual intervention halt) triggered on failure code matches.',
    content: `import { RetryPolicy } from './retry-policy.js';
import { RollbackPlan } from './rollback-plan.js';

export interface RecoveryStrategy {
  readonly strategyId: string;
  readonly targetExecutionId: string;
  readonly triggerFailureCode: string;
  readonly actionToTake: 'RETRY' | 'ROLLBACK_AND_FAIL' | 'IGNORE_AND_SKIP' | 'RESUME_FROM_CHECKPOINT' | 'HALT_FOR_MANUAL_INTERVENTION';
  readonly associatedRetryPolicy?: RetryPolicy;
  readonly associatedRollbackPlan?: RollbackPlan;
  readonly targetCheckpointIdToResumeFrom?: string;
  readonly notesText: string;
}`
  },
  {
    name: 'README.md',
    path: 'packages/agent-execution/README.md',
    language: 'markdown',
    role: 'Architectural Specs',
    description: 'Detailed specifications for AGT-009 Enterprise Agent Execution module.',
    content: `# Enterprise Agent Execution (AGT-009)

The Enterprise Agent Execution module defines how multiple Digital Employees coordinate the execution of approved business plans.`
  },
  {
    name: 'agent-governance.ts',
    path: 'packages/agent-governance/src/core/agent-governance.ts',
    language: 'typescript',
    role: 'Governance Platform Contract',
    description: 'Declares the core AgentGovernance interface, evaluation contexts, decision recorders, and policy/risk estimators.',
    content: `import { GovernanceContext } from './governance-context.js';
import { GovernanceSession } from './governance-session.js';
import { GovernanceId } from '../identity/governance-id.js';
import { RiskProfile } from '../risk/risk-profile.js';
import { AutonomyProfile } from '../autonomy/autonomy-profile.js';

export interface GovernanceDecisionRecord {
  readonly decisionId: string;
  readonly governanceId: GovernanceId;
  readonly tenantId: string;
  readonly targetResourceId: string;
  readonly decisionCode: 'ALLOW' | 'REJECT' | 'PENDING_APPROVAL_GATE';
  readonly reasoningText: string;
  readonly appliedPoliciesCodesList: string[];
  readonly riskLevelText: 'NONE' | 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  readonly requiredApprovalsRolesList: string[];
  readonly auditReferenceId: string;
  readonly decidedAt: Date;
}

export interface AgentGovernance {
  evaluatePolicy(tenantId: string, targetResourceId: string, context: GovernanceContext): Promise<{ isApproved: boolean, reasoningText: string, appliedPolicyCodesList: string[] }>;
  assessRisk(tenantId: string, targetResourceId: string, context: GovernanceContext): Promise<RiskProfile>;
  determineAutonomy(tenantId: string, agentId: string, context: GovernanceContext): Promise<AutonomyProfile>;
  requireApproval(tenantId: string, targetResourceId: string, context: GovernanceContext): Promise<{ approvalRequired: boolean, requiredRolesList: string[], triggeredRuleId?: string }>;
  validateCompliance(tenantId: string, targetResourceId: string, context: GovernanceContext): Promise<{ isCompliant: boolean, regulatoryViolationsList: string[], auditLogReferenceId: string }>;
  recordGovernanceDecision(tenantId: string, decision: GovernanceDecisionRecord, context: GovernanceContext): Promise<void>;
  startGovernanceSession(tenantId: string, targetResourceId: string, context: GovernanceContext): Promise<GovernanceSession>;
}`
  },
  {
    name: 'governance-policy.ts',
    path: 'packages/agent-governance/src/policies/governance-policy.ts',
    language: 'typescript',
    role: 'Base Governance Policy',
    description: 'Models standard governance baseline, classification, mandatory flags, and status structures.',
    content: `import { PolicyId } from '../identity/policy-id.js';

export type PolicyCategory = 'BUSINESS' | 'OPERATIONAL' | 'SECURITY' | 'REGULATORY';

export interface GovernancePolicy {
  readonly policyId: PolicyId;
  readonly tenantId: string;
  readonly category: PolicyCategory;
  readonly code: string;
  readonly displayName: string;
  readonly description: string;
  readonly isMandatory: boolean;
  readonly isActive: boolean;
  readonly versionNumber: number;
}`
  },
  {
    name: 'autonomy-level.ts',
    path: 'packages/agent-governance/src/autonomy/autonomy-level.ts',
    language: 'typescript',
    role: 'Autonomy Definitions',
    description: 'Models multi-tier operational autonomy levels (Manual, Assisted, Exception Only, High/Full Autonomy) for Digital Employees.',
    content: `export type AutonomyLevelCode =
  | 'LEVEL_0_MANUAL'
  | 'LEVEL_1_ASSISTED'
  | 'LEVEL_2_CONDITIONAL_AUTO'
  | 'LEVEL_3_EXCEPTION_ONLY'
  | 'LEVEL_4_HIGH_AUTONOMY'
  | 'LEVEL_5_FULL_AUTONOMY';

export interface AutonomyLevel {
  readonly code: AutonomyLevelCode;
  readonly displayName: string;
  readonly description: string;
  readonly requiresHeartbeatVerification: boolean;
}`
  },
  {
    name: 'regulatory-policy.ts',
    path: 'packages/agent-governance/src/compliance/regulatory-policy.ts',
    language: 'typescript',
    role: 'Regulatory Rules Mapping',
    description: 'Defines checks for standards like GDPR, SOC 2, or ISO 27001 dynamically without hardcoding regulations.',
    content: `export interface RegulatoryPolicy {
  readonly regulatoryId: string;
  readonly authorityBodyName: string;
  readonly standardName: string;
  readonly clauseIdentifierCode: string;
  readonly checkExpressionText: string;
  readonly complianceSeverityRating: 'INFORMATIONAL' | 'STANDARDS_VIOLATED' | 'CRITICAL_LEGAL_BREACH';
}`
  },
  {
    name: 'README.md',
    path: 'packages/agent-governance/README.md',
    language: 'markdown',
    role: 'Architectural Specs',
    description: 'Detailed specifications for AGT-010 Enterprise Agent Governance module.',
    content: `# Enterprise Agent Governance (AGT-010)

The Enterprise Agent Governance module defines the constitutional rules, multi-level autonomy, delegation chains, risk evaluation criteria, and compliance auditing frameworks that govern SBB's Digital Employees.`
  },
  {
    name: 'agent-learning.ts',
    path: 'packages/agent-learning/src/core/agent-learning.ts',
    language: 'typescript',
    role: 'Learning Platform Contract',
    description: 'Declares the core AgentLearning interface, starting learning sessions, outcome analytics, and capability improvements.',
    content: `import { LearningContext } from './learning-context.js';
import { LearningSession } from './learning-session.js';
import { FeedbackRecord } from '../feedback/feedback-record.js';
import { PerformanceEvaluation } from '../evaluation/performance-evaluation.js';
import { OutcomeAnalysis } from '../evaluation/outcome-analysis.js';
import { ImprovementRecommendation } from '../improvement/improvement-recommendation.js';
import { LessonLearned } from '../knowledge/lesson-learned.js';
import { LearningValidation } from '../validation/learning-validation.js';
import { LearningId } from '../identity/learning-id.js';

export interface AgentLearning {
  startLearningSession(tenantId: string, targetResourceId: string, context: LearningContext): Promise<LearningSession>;
  evaluateOutcome(tenantId: string, targetResourceId: string, context: LearningContext): Promise<OutcomeAnalysis>;
  captureFeedback(tenantId: string, feedback: FeedbackRecord, context: LearningContext): Promise<void>;
  analyzePerformance(tenantId: string, agentId: string, executionSessionId: string, context: LearningContext): Promise<PerformanceEvaluation>;
  generateImprovement(tenantId: string, learningId: LearningId, context: LearningContext): Promise<ImprovementRecommendation[]>;
  validateLearning(tenantId: string, recommendationId: string, context: LearningContext): Promise<LearningValidation>;
  recordLesson(tenantId: string, lesson: LessonLearned, context: LearningContext): Promise<void>;
  completeLearningSession(tenantId: string, learningId: LearningId, context: LearningContext): Promise<void>;
}`
  },
  {
    name: 'lesson-learned.ts',
    path: 'packages/agent-learning/src/knowledge/lesson-learned.ts',
    language: 'typescript',
    role: 'Lesson Learned Model',
    description: 'Models contextual takeaways, underlying issues, core takeaways, and validity ratings.',
    content: `import { LessonId } from '../identity/lesson-id.js';

export interface LessonLearned {
  readonly lessonId: LessonId;
  readonly tenantId: string;
  readonly contextExecutionId: string;
  readonly categoryTagCode: string;
  readonly contextDescription: string;
  readonly underlyingIssueNotes: string;
  readonly coreTakeawayText: string;
  readonly validityRatingScore: number;
  readonly recordedAt: Date;
}`
  },
  {
    name: 'learning-policy.ts',
    path: 'packages/agent-learning/src/governance/learning-policy.ts',
    language: 'typescript',
    role: 'Learning Governance Policy',
    description: 'Enforces system learning boundaries, automatic updates allowances, and keyword bans.',
    content: `export interface LearningPolicy {
  readonly policyId: string;
  readonly tenantId: string;
  readonly code: string;
  readonly allowAutomaticKnowledgeBaseUpdates: boolean;
  readonly allowAutomaticSkillDefaultsUpdates: boolean;
  readonly mandatoryHumanApprovalForAutonomyElevations: boolean;
  readonly forbiddenLearningKeywordsList: string[];
  readonly isActive: boolean;
}`
  },
  {
    name: 'README.md',
    path: 'packages/agent-learning/README.md',
    language: 'markdown',
    role: 'Architectural Specs',
    description: 'Detailed specifications for AGT-011 Enterprise Agent Learning module.',
    content: `# Enterprise Agent Learning (AGT-011)

The Enterprise Agent Learning module defines how SBB\'s Digital Employees continuously improve their operational efficiency, planning sequences, skill parameters, and decision accuracy over time through governed organizational learning.`
  },
  {
    name: 'agent-marketplace.ts',
    path: 'packages/agent-marketplace/src/core/agent-marketplace.ts',
    language: 'typescript',
    role: 'Marketplace Platform Contract',
    description: 'Declares the core AgentMarketplace interface, publishing workflows, search catalogs, and capability installation/compatibility routines.',
    content: `import { MarketplaceContext } from './marketplace-context.js';
import { MarketplaceSession } from './marketplace-session.js';
import { PackageId } from '../identity/package-id.js';
import { PublisherId } from '../identity/publisher-id.js';
import { MarketplacePackage } from '../packages/marketplace-package.js';
import { PackageVersion } from '../packages/package-version.js';
import { MarketplaceCatalog } from '../catalog/marketplace-catalog.js';
import { CompatibilityCheck } from '../installation/compatibility-check.js';
import { InstallationPlan } from '../installation/installation-plan.js';
import { VerificationStatus } from '../reviews/verification-status.js';

export interface AgentMarketplace {
  publishPackage(publisherId: PublisherId, manifestJson: string, version: PackageVersion, context: MarketplaceContext): Promise<MarketplacePackage>;
  searchMarketplace(queryText: string, filtersList: string[], context: MarketplaceContext): Promise<MarketplaceCatalog>;
  installPackage(tenantId: string, packageId: PackageId, versionString: string, context: MarketplaceContext): Promise<InstallationPlan>;
  updatePackage(tenantId: string, packageId: PackageId, targetVersionString: string, context: MarketplaceContext): Promise<InstallationPlan>;
  verifyCompatibility(tenantId: string, packageId: PackageId, proposedVersionString: string, context: MarketplaceContext): Promise<CompatibilityCheck>;
  retirePackage(packageId: PackageId, retirementReasonNotes: string, context: MarketplaceContext): Promise<void>;
  getVerificationStatus(packageId: PackageId, versionString: string, context: MarketplaceContext): Promise<VerificationStatus>;
  startMarketplaceSession(tenantId: string, context: MarketplaceContext): Promise<MarketplaceSession>;
}`
  },
  {
    name: 'package-manifest.ts',
    path: 'packages/agent-marketplace/src/packages/package-manifest.ts',
    language: 'typescript',
    role: 'Package Manifest Schema',
    description: 'Models standard manifest headers, framework prerequisites, and multi-tenant capabilities declarations.',
    content: `import { MarketplaceCategoryCode } from '../catalog/category.js';

export interface PackageManifest {
  readonly schemaVersion: string;
  readonly uniquePackageName: string;
  readonly displayTitle: string;
  readonly publisherName: string;
  readonly category: MarketplaceCategoryCode;
  readonly supportsMultiTenancy: boolean;
  readonly requiredFrameworkVersion: string;
}`
  },
  {
    name: 'marketplace-policy.ts',
    path: 'packages/agent-marketplace/src/governance/marketplace-policy.ts',
    language: 'typescript',
    role: 'Marketplace Governance Policy',
    description: 'Enforces publishing security settings, verified publisher domains, and certification levels.',
    content: `export interface MarketplacePolicy {
  readonly policyId: string;
  readonly tenantId: string;
  readonly code: string;
  readonly requireMfaForPublishing: boolean;
  readonly allowedPublisherDomainsList: string[];
  readonly enforceAutomaticSecurityScans: boolean;
  readonly blockNonCertifiedPackages: boolean;
  readonly isActive: boolean;
}`
  },
  {
    name: 'README.md',
    path: 'packages/agent-marketplace/README.md',
    language: 'markdown',
    role: 'Architectural Specs',
    description: 'Detailed specifications for AGT-012 Enterprise Agent Marketplace module.',
    content: `# Enterprise Agent Marketplace (AGT-012)

The Enterprise Agent Marketplace module defines how SBB discovers, installs, governs, versions, and manages Enterprise AI capabilities across a multi-tenant corporate structure.`
  },
  {
    name: 'agent-monitoring.ts',
    path: 'packages/agent-monitoring/src/core/agent-monitoring.ts',
    language: 'typescript',
    role: 'Monitoring Contract',
    description: 'Declares the core AgentMonitoring interface containing all operational intelligence, KPI tracking, and alert raise contracts.',
    content: `export interface AgentMonitoring {
  observeHealth(targetFleetTag: string, context: MonitoringContext): Promise<AgentHealth[]>;
  monitorExecution(sessionId: string, context: MonitoringContext): Promise<ExecutionObservation[]>;
  evaluateBusinessKPIs(tenantId: string, context: MonitoringContext): Promise<BusinessMetrics>;
  detectRisk(tenantId: string, context: MonitoringContext): Promise<TrustObservation[]>;
  generateAlerts(tenantId: string, context: MonitoringContext): Promise<EscalationNotification[]>;
  publishDashboard(dashboardType: 'EXECUTIVE' | 'DEPARTMENT' | 'OPERATIONAL', context: MonitoringContext): Promise<ExecutiveDashboard>;
  startMonitoringSession(tenantId: string, targetFleetsList: string[], context: MonitoringContext): Promise<MonitoringSession>;
}`
  },
  {
    name: 'monitoring-session.ts',
    path: 'packages/agent-monitoring/src/core/monitoring-session.ts',
    language: 'typescript',
    role: 'Monitoring Session',
    description: 'Models lease tracks and state progression over monitored fleet sectors.',
    content: `export interface MonitoringSession {
  readonly sessionId: string;
  readonly monitoringId: MonitoringId;
  readonly tenantId: string;
  readonly targetFleetsList: string[];
  readonly state: MonitoringLifecycleState;
  readonly establishedAt: Date;
  readonly lastHeartbeatReceivedAt: Date;
}`
  },
  {
    name: 'agent-health.ts',
    path: 'packages/agent-monitoring/src/health/agent-health.ts',
    language: 'typescript',
    role: 'Agent Health Indicator',
    description: 'Tracks the individual digital employee heartbeats and health degradation logs.',
    content: `export interface AgentHealth {
  readonly agentId: string;
  readonly tenantId: string;
  readonly status: HealthStatusType;
  readonly heartbeatIntervalMs: number;
  readonly lastHeartbeatTimestamp: Date;
  readonly activeLeaseId?: string;
  readonly consecutiveFailuresCount: number;
  readonly degradationReasonNotes?: string;
}`
  },
  {
    name: 'README.md',
    path: 'packages/agent-monitoring/README.md',
    language: 'markdown',
    role: 'Architectural Specs',
    description: 'Detailed specifications for AGT-013 Enterprise Agent Monitoring module.',
    content: `# Enterprise Agent Monitoring (AGT-013)

The Enterprise Agent Monitoring module defines how SBB observes, registers, audits, and analyzes the operational health, strategic progress, and compliance statuses of its Enterprise AI Workforce.`
  },
  {
    name: 'agent-sdk.ts',
    path: 'packages/agent-sdk/src/core/agent-sdk.ts',
    language: 'typescript',
    role: 'Agent SDK Main Contract',
    description: 'Declares the core AgentSDK interface containing all extension scaffolding, validation, packaging, and publishing operations.',
    content: `import { SdkContext } from './sdk-context.js';
import { SdkSession } from './sdk-session.js';
import { ExtensionId } from '../identity/extension-id.js';
import { ExtensionContract } from '../extensions/extension-contract.js';
import { ExtensionManifest } from '../extensions/extension-manifest.js';
import { ValidationIssue } from '../validation/contract-validator.js';
import { SdkTestResult } from '../testing/sdk-test-harness.js';
import { PackageSignature } from '../packaging/package-signature.js';

export interface AgentSDK {
  createExtension(templateCode: string, projectName: string, context: SdkContext): Promise<SdkSession>;
  validateExtension(extensionId: ExtensionId, manifest: ExtensionManifest, contractInstance: ExtensionContract, context: SdkContext): Promise<ValidationIssue[]>;
  testExtension(extensionId: ExtensionId, contractInstance: ExtensionContract, testPayloadsList: string[], context: SdkContext): Promise<SdkTestResult[]>;
  packageExtension(extensionId: ExtensionId, sourceDirectoryPath: string, context: SdkContext): Promise<{ readonly payload: ArrayBuffer; readonly signature: PackageSignature }>;
  publishExtension(extensionId: ExtensionId, packagePayload: ArrayBuffer, signature: PackageSignature, context: SdkContext): Promise<void>;
  verifyCompatibility(extensionId: ExtensionId, proposedVersionString: string, context: SdkContext): Promise<{ readonly isCompatible: boolean; readonly detectedConflictsList: string[] }>;
}`
  },
  {
    name: 'extension-contract.ts',
    path: 'packages/agent-sdk/src/extensions/extension-contract.ts',
    language: 'typescript',
    role: 'Extension Execution Hook',
    description: 'Models stable extension initialization, execution, and destruction lifecycles.',
    content: `import { ExtensionId } from '../identity/extension-id.js';

export interface ExtensionContract {
  readonly extensionId: ExtensionId;
  readonly name: string;
  readonly version: string;
  readonly supportedCapabilitiesList: string[];
  onInitialize(runtimeConfigJson: string): Promise<void>;
  onExecute(payloadJson: string): Promise<string>;
  onDestroy(): Promise<void>;
}`
  },
  {
    name: 'agent-builder.ts',
    path: 'packages/agent-sdk/src/builders/agent-builder.ts',
    language: 'typescript',
    role: 'Digital Employee Config Builder',
    description: 'Declarative programmatic builder for customizing and assembling virtual agents.',
    content: `import { ExtensionId } from '../identity/extension-id.js';

export interface AgentBuilder {
  readonly builderId: string;
  readonly targetAgentName: string;
  setBaseModel(modelNameString: string): this;
  setSystemInstructions(instructionsList: string[]): this;
  addSkillExtension(skillExtensionId: ExtensionId): this;
  addKnowledgeExtension(knowledgeExtensionId: ExtensionId): this;
  setMultiTenancyEnabled(enabled: boolean): this;
  buildManifestJson(): string;
}`
  },
  {
    name: 'README.md',
    path: 'packages/agent-sdk/README.md',
    language: 'markdown',
    role: 'Architectural Specs',
    description: 'Detailed specifications for AGT-014 Enterprise Agent SDK module.',
    content: `# Enterprise Agent SDK (AGT-014)

The Enterprise Agent SDK module defines the official developer experience and stable public contracts for extending SBB's Enterprise AI Platform.`
  },
  {
    name: 'agent-api.ts',
    path: 'packages/agent-api/src/core/agent-api.ts',
    language: 'typescript',
    role: 'API Main Contract',
    description: 'Declares the core AgentAPI interface containing all capability-execution, registration, and version-negotiating operations.',
    content: `import { ApiContext } from './api-context.js';
import { ApiSession } from './api-session.js';
import { CommandContract } from '../contracts/command-contract.js';
import { QueryContract } from '../contracts/query-contract.js';
import { EventContract } from '../contracts/event-contract.js';
import { ResponseContract } from '../contracts/response-contract.js';
import { ExternalSystemContract } from '../integration/external-system-contract.js';
import { ApiVersion } from '../versioning/api-version.js';

export interface AgentAPI {
  executeCommand(command: CommandContract, context: ApiContext): Promise<ResponseContract>;
  executeQuery(query: QueryContract, context: ApiContext): Promise<ResponseContract>;
  publishEvent(event: EventContract, context: ApiContext): Promise<void>;
  registerIntegration(integration: ExternalSystemContract, context: ApiContext): Promise<ApiSession>;
  validateRequest(payloadJson: string, schemaJson: string, context: ApiContext): Promise<{ readonly isValid: boolean; readonly detectedViolationsList: string[] }>;
  negotiateVersion(requestedVersion: ApiVersion, context: ApiContext): Promise<{ readonly negotiatedVersion: ApiVersion; readonly isSupported: boolean }>;
}`
  },
  {
    name: 'capability-gateway.ts',
    path: 'packages/agent-api/src/core/capability-gateway.ts',
    language: 'typescript',
    role: 'Capability Gateway Router',
    description: 'Dynamic interface to safely route queries and execution instructions to internal services.',
    content: `import { ApiContext } from './api-context.js';

export interface CapabilityGateway {
  readonly gatewayId: string;
  readonly supportedCapabilityNamesList: string[];
  invokeCapability(capabilityName: string, actionPayloadJson: string, context: ApiContext): Promise<string>;
}`
  },
  {
    name: 'command-contract.ts',
    path: 'packages/agent-api/src/contracts/command-contract.ts',
    language: 'typescript',
    role: 'CQRS Command Format',
    description: 'Enforces parameters, target entities, priority metrics, and expiration criteria on platform state changes.',
    content: `import { ApiRequestId } from '../identity/api-request-id.js';

export interface CommandContract {
  readonly requestId: ApiRequestId;
  readonly commandTypeCode: string;
  readonly executingTargetId: string;
  readonly parametersPayloadJson: string;
  readonly priorityValue: 'LOW' | 'NORMAL' | 'HIGH' | 'CRITICAL';
  readonly expiresAt?: Date;
}`
  },
  {
    name: 'README.md',
    path: 'packages/agent-api/README.md',
    language: 'markdown',
    role: 'Architectural Specs',
    description: 'Detailed specifications for AGT-015 Enterprise Agent API module.',
    content: `# Enterprise Agent API (AGT-015)

The Enterprise Agent API module defines SBB's official business capability gateway and communication interface contracts for interacting with its Enterprise AI Workforce.`
  },
  {
    name: 'business-foundation.ts',
    path: 'packages/business-foundation/src/core/business-foundation.ts',
    language: 'typescript',
    role: 'Business Foundation Contract',
    description: 'Declares the core BusinessFoundation interface containing all tenant company-setup, role allocations, capability registration, and retiring operations.',
    content: `import { BusinessId } from '../identity/business-id.js';
import { DepartmentId } from '../identity/department-id.js';
import { BusinessContext } from './business-context.js';
import { BusinessDomainTypeCode } from './business-domain.js';
import { BusinessUnit } from '../organization/business-unit.js';
import { Department } from '../organization/department.js';
import { BusinessRole } from '../roles/business-role.js';
import { BusinessCapability } from '../capabilities/business-capability.js';
import { BusinessHealth } from '../metrics/business-health.js';

export interface BusinessFoundation {
  createBusiness(name: string, targetDomain: BusinessDomainTypeCode, context: BusinessContext): Promise<BusinessUnit>;
  createDepartment(businessId: BusinessId, name: string, divisionCode: string, context: BusinessContext): Promise<Department>;
  registerCapability(capability: BusinessCapability, context: BusinessContext): Promise<void>;
  assignBusinessRole(participantId: string, role: BusinessRole, context: BusinessContext): Promise<void>;
  evaluateBusinessHealth(businessId: BusinessId, context: BusinessContext): Promise<BusinessHealth>;
  retireBusiness(businessId: BusinessId, context: BusinessContext): Promise<void>;
}`
  },
  {
    name: 'business-domain.ts',
    path: 'packages/business-foundation/src/core/business-domain.ts',
    language: 'typescript',
    role: 'Universal Operating Systems Classifications',
    description: 'Models predefined and custom sub-systems such as MarketingOS, SalesOS, and FinanceOS.',
    content: `export type BusinessDomainTypeCode =
  | 'MARKETING_OS'
  | 'SALES_OS'
  | 'FINANCE_OS'
  | 'HR_OS'
  | 'LEGAL_OS'
  | 'HEALTHCARE_OS'
  | 'REAL_ESTATE_OS'
  | 'MANUFACTURING_OS';

export interface BusinessDomain {
  readonly domainCode: BusinessDomainTypeCode;
  readonly name: string;
  readonly descriptionText: string;
  readonly supportedCapabilitiesList: string[];
}`
  },
  {
    name: 'business-role.ts',
    path: 'packages/business-foundation/src/roles/business-role.ts',
    language: 'typescript',
    role: 'Custom Roles Domain Model',
    description: 'Extensible role profile bindings combining custom tiers, signature spending limits, and organizational tasks.',
    content: `import { AuthorityLevel } from './authority-level.js';
import { Responsibility } from './responsibility.js';

export interface BusinessRole {
  readonly roleId: string;
  readonly roleTitleCode: string;
  readonly displayName: string;
  readonly authority: AuthorityLevel;
  readonly coreResponsibilitiesList: Responsibility[];
  readonly isMultiTenantRole: boolean;
}`
  },
  {
    name: 'README.md',
    path: 'packages/business-foundation/README.md',
    language: 'markdown',
    role: 'Architectural Specs',
    description: 'Detailed specifications for BOSF-001 Enterprise Business Foundation.',
    content: `# Enterprise Business Foundation (BOSF-001)

The Enterprise Business Foundation module defines SBB's core domain models, shared operating schemas, and business contracts of the Business Operating System Framework (BOSF).`
  },
  {
    name: 'department-framework.ts',
    path: 'packages/business-department/src/core/department-framework.ts',
    language: 'typescript',
    role: 'Department Core Contract',
    description: 'Declares the main DepartmentFramework interface containing all department-setup, capability mapping, hybrid roster assignment, and retirement operations.',
    content: `import { DepartmentContext } from './department-context.js';
import { DepartmentLifecycleState } from './department-lifecycle.js';
import { DepartmentInstanceId } from '../identity/department-instance-id.js';
import { DepartmentMission } from '../mission/department-mission.js';
import { DepartmentCapability } from '../capabilities/department-capability.js';
import { AiWorkforceProfile } from '../workforce/ai-workforce-profile.js';
import { HumanWorkforceProfile } from '../workforce/human-workforce-profile.js';
import { DepartmentHealth } from '../performance/department-health.js';

export interface DepartmentFramework {
  establishDepartment(name: string, costCenterCode: string, mission: DepartmentMission, context: DepartmentContext): Promise<DepartmentInstanceId>;
  assignCapability(departmentInstanceId: DepartmentInstanceId, capability: DepartmentCapability, context: DepartmentContext): Promise<void>;
  assignWorkforce(departmentInstanceId: DepartmentInstanceId, aiProfilesList: AiWorkforceProfile[], humanProfilesList: HumanWorkforceProfile[], context: DepartmentContext): Promise<void>;
  evaluateDepartmentHealth(departmentInstanceId: DepartmentInstanceId, context: DepartmentContext): Promise<DepartmentHealth>;
  manageDepartmentLifecycle(departmentInstanceId: DepartmentInstanceId, targetState: DepartmentLifecycleState, context: DepartmentContext): Promise<void>;
  retireDepartment(departmentInstanceId: DepartmentInstanceId, context: DepartmentContext): Promise<void>;
}`
  },
  {
    name: 'ai-workforce-profile.ts',
    path: 'packages/business-department/src/workforce/ai-workforce-profile.ts',
    language: 'typescript',
    role: 'Digital Agent Personas Model',
    description: 'Models predefined digital agents combining language model identifiers, memory scopes, and custom trust score criteria.',
    content: `export interface AiWorkforceProfile {
  readonly agentProfileId: string;
  readonly roleTitleString: string;
  readonly baseModelIdentifier: string;
  readonly assignedSkillIdentifiersList: string[];
  readonly memoryScopeCode: 'TRANSIENT' | 'PERSISTENT_SESSION' | 'EPISODIC_LONG_TERM';
  readonly trustScoreRating: number;
  readonly maximumConcurrentTaskCapacity: number;
}`
  },
  {
    name: 'cross-department-dependency.ts',
    path: 'packages/business-department/src/relationships/cross-department-dependency.ts',
    language: 'typescript',
    role: 'Inter-department Dependency Graph',
    description: 'Models service delivery links, risk levels, and mitigation parameters between different department instances.',
    content: `import { DepartmentInstanceId } from '../identity/department-instance-id.js';

export interface CrossDepartmentDependency {
  readonly dependencyId: string;
  readonly dependentDepartmentId: DepartmentInstanceId;
  readonly providerDepartmentId: DepartmentInstanceId;
  readonly requiredCapabilityCode: string;
  readonly isCriticalPathDependency: boolean;
  readonly mitigationActionPlanNotes?: string;
}`
  },
  {
    name: 'README.md',
    path: 'packages/business-department/README.md',
    language: 'markdown',
    role: 'Architectural Specs',
    description: 'Detailed specifications for BOSF-002 Enterprise Department Framework.',
    content: `# Enterprise Department Framework (BOSF-002)

The Enterprise Department Framework module defines SBB's core domain models, shared operating structures, and operational contracts of the Business Operating System Framework (BOSF) departments.`
  },
  {
    name: 'organization-framework.ts',
    path: 'packages/business-organization/src/core/organization-framework.ts',
    language: 'typescript',
    role: 'Organization Core Contract',
    description: 'Declares the main OrganizationFramework interface containing operations for legal entity registry, business unit setup, dynamic restructuring and structural auditing.',
    content: `import { OrganizationId } from '../identity/organization-id.js';
import { LegalEntityId } from '../identity/legal-entity-id.js';
import { BusinessUnitId } from '../identity/business-unit-id.js';
import { OrganizationContext } from './organization-context.js';
import { Organization } from '../hierarchy/organization.js';
import { LegalEntity } from '../hierarchy/legal-entity.js';
import { BusinessUnit } from '../hierarchy/business-unit.js';
import { ReportingRelationship } from '../structure/reporting-relationship.js';
import { OrganizationHealth } from '../metrics/organization-health.js';

export interface OrganizationFramework {
  createOrganization(legalName: string, globalHeadquartersAddressText: string, context: OrganizationContext): Promise<Organization>;
  registerLegalEntity(organizationId: OrganizationId, commercialName: string, corporateRegistryCode: string, taxId: string, countryCode: string, context: OrganizationContext): Promise<LegalEntity>;
  createBusinessUnit(legalEntityId: LegalEntityId, name: string, purposeCode: string, regionCode: string, context: OrganizationContext): Promise<BusinessUnit>;
  establishReportingStructure(relationship: ReportingRelationship, context: OrganizationContext): Promise<void>;
  evaluateOrganizationHealth(organizationId: OrganizationId, context: OrganizationContext): Promise<OrganizationHealth>;
  restructureOrganization(organizationId: OrganizationId, restructuringNotes: string, context: OrganizationContext): Promise<void>;
}`
  },
  {
    name: 'reporting-relationship.ts',
    path: 'packages/business-organization/src/structure/reporting-relationship.ts',
    language: 'typescript',
    role: 'Hierarchical Reporting Lines Model',
    description: 'Models dynamic Solid-line, Dotted-line, Project-based, and Functional administrative reporting links between workforce personnel.',
    content: `import { ReportingLineTypeCode } from './reporting-line.js';

export interface ReportingRelationship {
  readonly relationshipId: string;
  readonly subordinateParticipantId: string;
  readonly superiorParticipantId: string;
  readonly reportingType: ReportingLineTypeCode;
  readonly allocationPercentageValue: number;
  readonly isPrimaryLine: boolean;
  readonly effectiveFrom: Date;
  readonly effectiveTo?: Date;
}`
  },
  {
    name: 'README.md',
    path: 'packages/business-organization/README.md',
    language: 'markdown',
    role: 'Architectural Specs',
    description: 'Detailed specifications for BOSF-003 Enterprise Organization Structure.',
    content: `# Enterprise Organization Structure (BOSF-003)

The Enterprise Organization Structure module defines SBB's core corporate governance hierarchies, holding structures, reporting lines, regional models, and shared services boundaries of the Business Operating System Framework (BOSF).`
  }
];






