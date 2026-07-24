import { Injectable, Logger, Optional } from '@nestjs/common';
import { DatabaseService } from '@sbb/database';
import { IFolder } from '../interfaces/folder.interface.js';

@Injectable()
export class FolderRepository {
  private readonly logger = new Logger(FolderRepository.name);
  private memoryStore = new Map<string, IFolder>();

  constructor(@Optional() private readonly db?: DatabaseService) {}

  async create(data: Partial<IFolder>): Promise<IFolder> {
    const id = data.id || `folder-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
    const now = new Date();

    const folder: IFolder = {
      id,
      name: data.name!,
      parentId: data.parentId || null,
      tenantId: data.tenantId || 'default-tenant',
      organizationId: data.organizationId || 'default-org',
      ownerId: data.ownerId || 'system',
      createdBy: data.createdBy || data.ownerId || 'system',
      isFavorite: data.isFavorite || false,
      isDeleted: data.isDeleted || false,
      deletedAt: data.deletedAt || null,
      createdAt: now,
      updatedAt: now,
    };

    if (this.db && (this.db as any).folder) {
      try {
        await (this.db as any).folder.create({
          data: {
            id: folder.id,
            name: folder.name,
            parentId: folder.parentId,
            tenantId: folder.tenantId,
            organizationId: folder.organizationId,
            ownerId: folder.ownerId,
            createdBy: folder.createdBy,
            isFavorite: folder.isFavorite,
            isDeleted: folder.isDeleted,
            deletedAt: folder.deletedAt,
          },
        });
        this.memoryStore.set(folder.id, folder);
        return folder;
      } catch (err: any) {
        this.logger.warn(`DB insert failed for Folder, using memory fallback: ${err.message}`);
      }
    }

    this.memoryStore.set(id, folder);
    return folder;
  }

  async findById(id: string, tenantId?: string, organizationId?: string): Promise<IFolder | null> {
    if (this.db && (this.db as any).folder) {
      try {
        const where: any = { id };
        if (tenantId) where.tenantId = tenantId;
        if (organizationId) where.organizationId = organizationId;

        const res = await (this.db as any).folder.findFirst({ where });
        if (res) return res as IFolder;
      } catch (err: any) {
        this.logger.warn(`DB findById failed for Folder, using memory fallback: ${err.message}`);
      }
    }

    const folder = this.memoryStore.get(id);
    if (!folder) return null;

    if (tenantId && folder.tenantId !== tenantId) return null;
    if (organizationId && folder.organizationId !== organizationId) return null;

    return folder;
  }

  async update(id: string, data: Partial<IFolder>): Promise<IFolder> {
    const existing = await this.findById(id);
    if (!existing) {
      throw new Error(`Folder ${id} not found`);
    }

    const updated: IFolder = {
      ...existing,
      ...data,
      updatedAt: new Date(),
    };

    if (this.db && (this.db as any).folder) {
      try {
        await (this.db as any).folder.update({
          where: { id },
          data: {
            name: updated.name,
            parentId: updated.parentId,
            isFavorite: updated.isFavorite,
            isDeleted: updated.isDeleted,
            deletedAt: updated.deletedAt,
          },
        });
      } catch (err: any) {
        this.logger.warn(`DB update failed for Folder, using memory fallback: ${err.message}`);
      }
    }

    this.memoryStore.set(id, updated);
    return updated;
  }

  async softDelete(id: string): Promise<IFolder> {
    return this.update(id, { isDeleted: true, deletedAt: new Date() });
  }

  async restore(id: string): Promise<IFolder> {
    return this.update(id, { isDeleted: false, deletedAt: null });
  }

  async deletePermanent(id: string): Promise<boolean> {
    if (this.db && (this.db as any).folder) {
      try {
        await (this.db as any).folder.delete({ where: { id } });
      } catch (err: any) {
        this.logger.warn(`DB permanent delete failed for Folder: ${err.message}`);
      }
    }
    return this.memoryStore.delete(id);
  }

  async findMany(filters: {
    tenantId?: string;
    organizationId?: string;
    ownerId?: string;
    parentId?: string | null;
    isFavorite?: boolean;
    isDeleted?: boolean;
  }): Promise<IFolder[]> {
    let list = Array.from(this.memoryStore.values());

    if (filters.tenantId) list = list.filter((f) => f.tenantId === filters.tenantId);
    if (filters.organizationId) list = list.filter((f) => f.organizationId === filters.organizationId);

    const isDeletedFilter = filters.isDeleted !== undefined ? filters.isDeleted : false;
    list = list.filter((f) => f.isDeleted === isDeletedFilter);

    if (filters.ownerId) list = list.filter((f) => f.ownerId === filters.ownerId);
    if (filters.parentId !== undefined) list = list.filter((f) => f.parentId === filters.parentId);
    if (filters.isFavorite !== undefined) list = list.filter((f) => f.isFavorite === filters.isFavorite);

    return list.sort((a, b) => a.name.localeCompare(b.name));
  }
}
