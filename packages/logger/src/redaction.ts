import { DEFAULT_REDACT_PATHS } from './constants.js';

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
}
