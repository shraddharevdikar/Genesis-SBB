/**
 * Returns unique elements of an array.
 * Optionally resolves uniqueness by an object property key or custom mapper function.
 */
export function unique<T>(arr: T[], key?: keyof T | ((item: T) => any)): T[] {
  if (!key) {
    return Array.from(new Set(arr));
  }
  const seen = new Set<any>();
  return arr.filter((item) => {
    const value = typeof key === 'function' ? key(item) : item[key];
    if (seen.has(value)) return false;
    seen.add(value);
    return true;
  });
}

/**
 * Groups an array of elements by a key or mapper function.
 */
export function groupBy<T, K extends string | number | symbol>(
  arr: T[],
  fn: keyof T | ((item: T) => K)
): Record<K, T[]> {
  return arr.reduce((acc, item) => {
    const key = typeof fn === 'function' ? fn(item) : (item[fn] as unknown as K);
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {} as Record<K, T[]>);
}

/**
 * Splits an array into chunks of a given maximum size.
 */
export function chunk<T>(arr: T[], size: number): T[][] {
  if (size <= 0) return [];
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

/**
 * Sorts an array (non-mutating) by a property key or custom selector.
 */
export function sortBy<T>(
  arr: T[],
  key: keyof T | ((item: T) => any),
  order: 'asc' | 'desc' = 'asc'
): T[] {
  const sorted = [...arr];
  sorted.sort((a, b) => {
    const valA = typeof key === 'function' ? key(a) : a[key];
    const valB = typeof key === 'function' ? key(b) : b[key];

    if (valA === valB) return 0;
    if (valA === null || valA === undefined) return 1;
    if (valB === null || valB === undefined) return -1;

    let comparison = 0;
    if (typeof valA === 'string' && typeof valB === 'string') {
      comparison = valA.localeCompare(valB);
    } else {
      comparison = valA < valB ? -1 : 1;
    }

    return order === 'asc' ? comparison : -comparison;
  });
  return sorted;
}
