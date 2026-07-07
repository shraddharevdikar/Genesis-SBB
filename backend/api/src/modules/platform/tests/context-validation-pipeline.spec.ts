import { RequestContextMiddleware } from '../middleware/request-context.middleware.js';
import { PlatformContextProvider } from '../context/platform-context.provider.js';
import { LocaleMiddleware } from '../middleware/locale.middleware.js';
import { FeatureFlagMiddleware } from '../middleware/feature-flag.middleware.js';
import { ZodValidationPipe } from '../pipes/zod-validation.pipe.js';
import { z } from 'zod';
import { ZodValidatable, ValidationError } from '@sbb/shared';

describe('Platform Request Context & Validation Pipeline (GEN-PLATFORM-003)', () => {
  let contextProvider: PlatformContextProvider;

  beforeEach(() => {
    contextProvider = new PlatformContextProvider();
  });

  describe('PlatformContextProvider & RequestContextMiddleware', () => {
    it('should extract request parameters, build immutable context and save in async storage', (done) => {
      const middleware = new RequestContextMiddleware(contextProvider);

      const mockReq: any = {
        headers: {
          'x-correlation-id': 'test-corr-111',
          'x-request-id': 'test-req-222',
          'user-agent': 'Mozilla/5.0 TestBrowser',
          'accept-language': 'fr-CH',
          'x-timezone': 'Europe/Zurich',
          'x-device-type': 'Desktop',
          'x-client-platform': 'Linux',
          'x-client-browser': 'Firefox',
          'x-app-version': '2.1.0',
        },
        socket: {
          remoteAddress: '192.168.1.1',
        },
        ip: '127.0.0.1',
        query: {},
      };

      const mockRes: any = {};
      const mockNext = () => {
        // We are now downstream. Let's check context
        const ctx = contextProvider.getRequiredContext();
        expect(ctx).toBeDefined();
        
        // Request properties
        expect(ctx.request.correlationId).toBe('test-corr-111');
        expect(ctx.request.requestId).toBe('test-req-222');
        expect(ctx.request.clientIp).toBe('192.168.1.1');
        expect(ctx.request.userAgent).toBe('Mozilla/5.0 TestBrowser');
        expect(ctx.request.locale).toBe('fr-CH');
        expect(ctx.request.timezone).toBe('Europe/Zurich');
        expect(ctx.request.timestamp).toBeDefined();

        // Client properties
        expect(ctx.client).toBeDefined();
        expect(ctx.client?.deviceType).toBe('Desktop');
        expect(ctx.client?.platform).toBe('Linux');
        expect(ctx.client?.browser).toBe('Firefox');
        expect(ctx.client?.appVersion).toBe('2.1.0');

        // Subcontexts exist as placeholders
        expect(ctx.identity).toBeDefined();
        expect(ctx.tenant).toBeDefined();
        expect(ctx.organization).toBeDefined();
        expect(ctx.featureFlags).toBeDefined();
        expect(ctx.featureFlags?.isEnabled('new-dashboard')).toBe(true);

        // Immutability check
        expect(() => {
          (ctx as any).request = null;
        }).toThrow();

        done();
      };

      middleware.use(mockReq, mockRes, mockNext);
    });
  });

  describe('Locale & FeatureFlag Middleware Placeholders', () => {
    it('should assign placeholders/resolved parameters', () => {
      const localeMiddleware = new LocaleMiddleware();
      const ffMiddleware = new FeatureFlagMiddleware();

      const mockReq: any = { headers: { 'accept-language': 'de-DE' } };
      const mockRes: any = {};
      let nextCalledCount = 0;
      const next = () => { nextCalledCount++; };

      localeMiddleware.use(mockReq, mockRes, next);
      expect(mockReq.resolvedLocale).toBe('de-DE');

      ffMiddleware.use(mockReq, mockRes, next);
      expect(mockReq.featureFlags).toEqual({
        'new-dashboard': true,
        'beta-features': false,
      });

      expect(nextCalledCount).toBe(2);
    });
  });

  describe('ZodValidationPipe (Explicit schema vs. Dynamic DTO Validation Adapter)', () => {
    const userSchema = z.object({
      email: z.string().email(),
      age: z.number().min(18),
    });

    class UserDto implements ZodValidatable {
      public static getSchema() {
        return z.object({
          username: z.string().min(3),
          role: z.enum(['ADMIN', 'USER']),
        });
      }

      public getSchema() {
        return UserDto.getSchema();
      }
    }

    it('should successfully validate payload with explicit schema in pipe constructor', () => {
      const pipe = new ZodValidationPipe(userSchema);
      const validPayload = { email: 'test@sbb.ch', age: 25 };
      const result = pipe.transform(validPayload, { type: 'body' });
      expect(result).toEqual(validPayload);
    });

    it('should throw ValidationError on explicit schema failure', () => {
      const pipe = new ZodValidationPipe(userSchema);
      const invalidPayload = { email: 'bad-email', age: 10 };

      expect(() => {
        pipe.transform(invalidPayload, { type: 'body' });
      }).toThrow(ValidationError);
    });

    it('should dynamically resolve schema and validate DTO class with getSchema method', () => {
      const pipe = new ZodValidationPipe(); // no schema in constructor
      const validPayload = { username: 'principal', role: 'ADMIN' };
      
      const result = pipe.transform(validPayload, {
        type: 'body',
        metatype: UserDto,
      });

      expect(result).toEqual(validPayload);
    });

    it('should dynamically throw ValidationError when DTO class validation fails', () => {
      const pipe = new ZodValidationPipe();
      const invalidPayload = { username: 'pr', role: 'SUPER_ADMIN' };

      expect(() => {
        pipe.transform(invalidPayload, {
          type: 'body',
          metatype: UserDto,
        });
      }).toThrow(ValidationError);
    });

    it('should bypass validation if no schema is provided and metatype does not have getSchema method', () => {
      const pipe = new ZodValidationPipe();
      const payload = { unrelated: 'data' };
      const result = pipe.transform(payload, { type: 'body', metatype: Object });
      expect(result).toEqual(payload);
    });
  });
});

declare const describe: any;
declare const it: any;
declare const expect: any;
declare const beforeEach: any;
