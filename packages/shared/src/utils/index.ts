/**
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
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
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
};

export * from './api-versioning.js';

