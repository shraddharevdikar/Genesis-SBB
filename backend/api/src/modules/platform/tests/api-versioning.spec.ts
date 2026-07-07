import { ApiLifecycle, SbbApiVersionResolver, SbbDeprecationPolicy, ApiVersion } from '@sbb/shared';

describe('SBB API Versioning & Lifecycle Management (GEN-PLATFORM-005)', () => {
  const mockApiVersions: ApiVersion[] = [
    {
      version: 'v1',
      status: ApiLifecycle.DEPRECATED,
      releasedAt: '2025-01-01',
      deprecatedAt: '2026-01-01',
      sunsetAt: '2026-12-31',
    },
    {
      version: 'v2',
      status: ApiLifecycle.STABLE,
      releasedAt: '2026-01-01',
    },
    {
      version: 'v3-beta',
      status: ApiLifecycle.BETA,
      releasedAt: '2026-06-01',
    },
    {
      version: 'v4-preview',
      status: ApiLifecycle.PREVIEW,
      releasedAt: '2026-07-01',
    },
    {
      version: 'v0-sunset',
      status: ApiLifecycle.SUNSET,
      releasedAt: '2024-01-01',
      deprecatedAt: '2024-06-01',
      sunsetAt: '2024-12-31',
    },
  ];

  describe('ApiLifecycle Enum', () => {
    it('should support all standard API lifecycle states', () => {
      expect(ApiLifecycle.PREVIEW).toBe('preview');
      expect(ApiLifecycle.BETA).toBe('beta');
      expect(ApiLifecycle.STABLE).toBe('stable');
      expect(ApiLifecycle.DEPRECATED).toBe('deprecated');
      expect(ApiLifecycle.SUNSET).toBe('sunset');
    });
  });

  describe('SbbApiVersionResolver', () => {
    let resolver: SbbApiVersionResolver;

    beforeEach(() => {
      resolver = new SbbApiVersionResolver(mockApiVersions);
    });

    it('should default to the latest stable version if none specified', () => {
      expect(resolver.getDefaultVersion()).toBe('v2');
      const resolved = resolver.resolveVersion({});
      expect(resolved).toBe('v2');
    });

    it('should resolve version from URI path matching v[digit]', () => {
      const resolvedV1 = resolver.resolveVersion({ url: '/v1/health' });
      expect(resolvedV1).toBe('v1');

      const resolvedV2 = resolver.resolveVersion({ url: '/api/v2/users?active=true' });
      expect(resolvedV2).toBe('v2');

      const resolvedV3 = resolver.resolveVersion({ url: '/v3-beta/metrics' });
      expect(resolvedV3).toBe('v3-beta');
    });

    it('should resolve version from custom header', () => {
      const resolvedHeader = resolver.resolveVersion({
        headers: { 'x-api-version': 'v1' },
      });
      expect(resolvedHeader).toBe('v1');

      const resolvedAcceptVersion = resolver.resolveVersion({
        headers: { 'accept-version': '3-beta' },
      });
      expect(resolvedAcceptVersion).toBe('v3-beta');
    });

    it('should resolve version from Accept vendor media-type header', () => {
      const resolvedMediaType = resolver.resolveVersion({
        headers: { accept: 'application/vnd.sbb.v1+json' },
      });
      expect(resolvedMediaType).toBe('v1');
    });

    it('should validate version support correctly', () => {
      // Stable is supported
      expect(resolver.validateVersion('v2')).toBe(true);
      // Beta is supported
      expect(resolver.validateVersion('v3-beta')).toBe(true);
      // Deprecated is supported until sunset
      expect(resolver.validateVersion('v1')).toBe(true);
      // Sunset is NOT supported
      expect(resolver.validateVersion('v0-sunset')).toBe(false);
      // Unknown version is NOT supported
      expect(resolver.validateVersion('v99')).toBe(false);
    });

    it('should throw an error if instantiated with empty versions array', () => {
      expect(() => {
        new SbbApiVersionResolver([]);
      }).toThrow();
    });

    it('should allow custom default version overrides', () => {
      const customResolver = new SbbApiVersionResolver(mockApiVersions, 'v3-beta');
      expect(customResolver.getDefaultVersion()).toBe('v3-beta');
    });
  });

  describe('SbbDeprecationPolicy', () => {
    it('should construct appropriate warning and sunset headers for deprecated versions', () => {
      const deprecatedV1 = mockApiVersions.find(v => v.version === 'v1')!;
      const headers = SbbDeprecationPolicy.getHeaders(deprecatedV1, 'Please migrate to v2.');

      expect(headers['Deprecation']).toBe('true');
      expect(headers['Sunset']).toBe(new Date('2026-12-31').toUTCString());
      expect(headers['Warning']).toContain('API version v1 is deprecated.');
      expect(headers['Warning']).toContain('Scheduled for sunset on 2026-12-31T00:00:00.000Z.');
      expect(headers['Warning']).toContain('Please migrate to v2.');
    });

    it('should return empty headers for stable or non-deprecated versions', () => {
      const stableV2 = mockApiVersions.find(v => v.version === 'v2')!;
      const headers = SbbDeprecationPolicy.getHeaders(stableV2);
      expect(headers).toEqual({});
    });
  });
});

declare const describe: any;
declare const it: any;
declare const expect: any;
declare const beforeEach: any;
