import { ApiLifecycle } from '../enums/index.js';
import { ApiVersion, ApiVersionResolver, DeprecationPolicy } from '../types/api-versioning.types.js';

export class SbbApiVersionResolver implements ApiVersionResolver {
  private readonly supportedVersions: Map<string, ApiVersion>;
  private readonly defaultVersion: string;

  constructor(versions: ApiVersion[], defaultVersion?: string) {
    this.supportedVersions = new Map();
    versions.forEach(v => {
      this.supportedVersions.set(v.version, v);
    });

    if (defaultVersion) {
      if (!this.supportedVersions.has(defaultVersion)) {
        throw new Error(`Default version ${defaultVersion} is not in the supported versions list`);
      }
      this.defaultVersion = defaultVersion;
    } else {
      // Find latest STABLE version
      const stableVersions = versions
        .filter(v => v.status === ApiLifecycle.STABLE)
        .sort((a, b) => b.version.localeCompare(a.version));

      if (stableVersions.length > 0) {
        this.defaultVersion = stableVersions[0].version;
      } else {
        if (versions.length === 0) {
          throw new Error('At least one supported version must be provided');
        }
        this.defaultVersion = versions[0].version;
      }
    }
  }

  /**
   * Resolves the API version from the request.
   * Supports:
   * 1. URI Versioning (e.g. from url pathname like /v1/users)
   * 2. Header Versioning (e.g. X-API-Version or Accept-Version header)
   * 3. Media-Type Versioning (e.g. Accept header like application/vnd.sbb.v1+json)
   */
  public resolveVersion(request: { url?: string; headers?: Record<string, string | string[] | undefined> }): string {
    // 1. Try URI Versioning
    if (request.url) {
      const match = request.url.match(/\/(v\d+(?:\.\d+)?)(?:\/|\?|$)/);
      if (match && match[1]) {
        return match[1];
      }
    }

    // 2. Try Header Versioning
    if (request.headers) {
      const versionHeader = request.headers['x-api-version'] || request.headers['accept-version'];
      if (typeof versionHeader === 'string') {
        const cleaned = versionHeader.trim();
        if (cleaned) {
          return cleaned.startsWith('v') ? cleaned : `v${cleaned}`;
        }
      }

      // 3. Try Media-Type Versioning (Accept header: e.g., application/vnd.sbb.v1+json)
      const acceptHeader = request.headers['accept'];
      if (typeof acceptHeader === 'string') {
        const match = acceptHeader.match(/vnd\.sbb\.(v\d+(?:\.\d+)?)\+json/);
        if (match && match[1]) {
          return match[1];
        }
      }
    }

    // Default to the latest stable version
    return this.defaultVersion;
  }

  public validateVersion(version: string): boolean {
    const meta = this.supportedVersions.get(version);
    if (!meta) {
      return false;
    }
    // Sunset versions are considered unsupported/invalid
    return meta.status !== ApiLifecycle.SUNSET;
  }

  public getDefaultVersion(): string {
    return this.defaultVersion;
  }

  public getVersionMetadata(version: string): ApiVersion | undefined {
    return this.supportedVersions.get(version);
  }
}

export class SbbDeprecationPolicy {
  /**
   * Generates deprecation and sunset headers for warning clients.
   * Conforms to RFC 9457 / general warning structures.
   */
  public static getHeaders(metadata: ApiVersion, migrationHint?: string): Record<string, string> {
    const headers: Record<string, string> = {};
    if (metadata.status === ApiLifecycle.DEPRECATED) {
      headers['Deprecation'] = 'true';
      
      let warningMsg = `API version ${metadata.version} is deprecated.`;
      if (metadata.sunsetAt) {
        const sunsetDate = new Date(metadata.sunsetAt);
        headers['Sunset'] = sunsetDate.toUTCString();
        warningMsg += ` Scheduled for sunset on ${sunsetDate.toISOString()}.`;
      }
      if (migrationHint) {
        warningMsg += ` ${migrationHint}`;
      }
      headers['Warning'] = `299 - "${warningMsg}"`;
    }
    return headers;
  }
}
