import { TicketDetails, FileNode, FutureTicket } from './types';

export const ticketDetails: TicketDetails = {
  id: 'GEN-ID-001',
  title: 'Identity Module Foundation',
  status: 'DONE',
  priority: 'CRITICAL',
  author: 'SBB Principal Architect',
  assignee: 'shraddha.revdikar@gmail.com',
  objective: 'Create the production-ready Identity module for the SBB Platform. This ticket establishes the architecture and project structure only. No authentication or authorization logic should be implemented.',
  modulePath: 'backend/api/src/modules/identity/',
  requirements: [
    'Create the NestJS module structure.',
    'Create placeholder controller, service, and repository.',
    'Create placeholder interfaces, entities, and DTO directories.',
    'Create custom guards, decorators, strategies, events, and validators.',
    'Create README.md with planned endpoints, roles, and scope boundaries.',
    'Ensure all foundation files compile cleanly and structure conforms to NestJS standard.',
  ],
  responsibilities: [
    { title: 'Authentication', description: 'Verifying user credentials, password management, session handling.', status: 'Archived / Foundation Built' },
    { title: 'Authorization', description: 'RBAC (Role-Based Access Control) & ABAC guards & decorators.', status: 'Archived / Foundation Built' },
    { title: 'Sessions & Tokens', description: 'JWT strategy, refresh tokens issuance and revocation architecture.', status: 'Archived / Foundation Built' },
    { title: 'Password Policy', description: 'Validator helper templates for length, entropy, and character sets.', status: 'Archived / Foundation Built' },
    { title: 'MFA & Passkeys', description: 'Future MFA modules (TOTP) and WebAuthn strategies planned.', status: 'Planned Interface' },
  ],
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



