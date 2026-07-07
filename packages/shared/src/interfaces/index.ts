export interface BaseEntity {
  id: string;
}

export interface Timestamped {
  createdAt: Date;
  updatedAt: Date;
}

export interface Auditable {
  createdBy?: string;
  updatedBy?: string;
}

export interface SoftDelete {
  deletedAt?: Date | null;
  deletedBy?: string | null;
  isDeleted: boolean;
}

export interface ZodValidatable {
  getSchema(): any;
}
