import { UserRole, UserStatus } from '@sbb/types';
import { TestUuids, TestClock } from '../helpers/index.js';
import { mockUserFixture, mockTenantFixture, mockOrganizationFixture } from '../fixtures/index.js';

/**
 * Interface representing active secure platform execution context.
 */
export interface SbbRequestContext {
  tenantId: string;
  organizationId: string | null;
  userId: string | null;
  userRole: UserRole | null;
  userEmail: string | null;
  correlationId: string;
}

/**
 * Creates a mock SbbRequestContext with defaults that can be partially overridden.
 */
export function createMockRequestContext(overrides?: Partial<SbbRequestContext>): SbbRequestContext {
  return {
    tenantId: TestUuids.tenant,
    organizationId: TestUuids.organization,
    userId: TestUuids.user,
    userRole: UserRole.MEMBER,
    userEmail: 'test.user@sbb.internal',
    correlationId: `test-corr-${Date.now()}`,
    ...overrides,
  };
}

/**
 * Creates a fully mocked mock HTTP Request object with standard Express bindings.
 */
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

/**
 * Creates a mocked HTTP Response collector object for testing controllers.
 */
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
}
