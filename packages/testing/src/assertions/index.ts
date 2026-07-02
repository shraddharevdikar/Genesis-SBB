/**
 * Framework-agnostic custom test assertions for consistent verification.
 */

/**
 * Asserts that a value is a valid UUID string (v4 or general format).
 */
export function assertUuid(value: any, message?: string): void {
  if (typeof value !== 'string') {
    throw new Error(message || `Expected string for UUID, but got ${typeof value}`);
  }
  const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
  // Also support deterministic test UUID format
  const testUuidRegex = /^00000000-0000-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
  
  if (!uuidRegex.test(value) && !testUuidRegex.test(value)) {
    throw new Error(message || `Expected valid UUID string, but got "${value}"`);
  }
}

/**
 * Asserts that a value matches the ISO 8601 date-time string pattern.
 */
export function assertIsoDateTime(value: any, message?: string): void {
  if (typeof value !== 'string') {
    throw new Error(message || `Expected string for ISO date-time, but got ${typeof value}`);
  }
  const isoRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/;
  if (!isoRegex.test(value)) {
    throw new Error(message || `Expected valid ISO 8601 UTC date-time string, but got "${value}"`);
  }
}

/**
 * Asserts that the provided function throws a validation error (Zod error or similar).
 */
export function assertValidationError(fn: () => any, expectedField?: string): void {
  try {
    fn();
  } catch (error: any) {
    // Check if it's a validation error (e.g., has "ZodError" name or "issues" property)
    const isZod = error.name === 'ZodError' || Array.isArray(error.issues);
    if (!isZod && !error.message?.toLowerCase().includes('validation')) {
      throw new Error(`Expected validation error, but caught different error: ${error.message}`);
    }

    if (expectedField && Array.isArray(error.issues)) {
      const hasField = error.issues.some((issue: any) => 
        issue.path?.includes(expectedField) || issue.message?.toLowerCase().includes(expectedField)
      );
      if (!hasField) {
        throw new Error(`Validation error thrown, but did not reference expected field "${expectedField}". Issues: ${JSON.stringify(error.issues)}`);
      }
    }
    return; // Success
  }
  throw new Error(`Expected function to throw validation error, but it succeeded without error.`);
}

/**
 * Asserts that an array or collection contains an element matching a predicate.
 */
export function assertContainsMatch<T>(
  array: T[],
  predicate: (item: T) => boolean,
  message?: string
): void {
  const match = array.some(predicate);
  if (!match) {
    throw new Error(message || 'Expected array to contain matching element, but no match was found.');
  }
}
