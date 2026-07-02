/**
 * Standard sorting directions.
 */
export enum SortDirection {
  ASC = 'asc',
  DESC = 'desc'
}

/**
 * Base tracking fields for entities stored within the system.
 */
export interface Timestamped {
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
}

/**
 * Standard identifier block for system entities.
 */
export interface BaseEntity extends Timestamped {
  id: string;
}

/**
 * Free-form dictionary structure for extensible metadata tags.
 */
export interface CustomMetadata {
  [key: string]: string | number | boolean | null | CustomMetadata | Array<string | number | boolean | null>;
}

/**
 * Generic type for allowing nullable values.
 */
export type Nullable<T> = T | null;

/**
 * Generic dictionary structure.
 */
export type Dictionary<T> = Record<string, T>;
