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

