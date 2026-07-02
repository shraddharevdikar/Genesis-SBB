/**
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
}
