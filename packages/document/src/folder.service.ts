import { Injectable, Logger, NotFoundException, Optional } from '@nestjs/common';
import { FolderRepository } from './repositories/folder.repository.js';
import { DocumentRepository } from './repositories/document.repository.js';
import { IFolder } from './interfaces/folder.interface.js';
import { CreateFolderDto, UpdateFolderDto } from './dto/create-folder.dto.js';
import { AuditService } from '@sbb/audit';
import { EventBusService } from '@sbb/event-bus';
import { FolderCreatedEvent, FolderUpdatedEvent, FolderDeletedEvent } from './events/document.events.js';

@Injectable()
export class FolderService {
  private readonly logger = new Logger(FolderService.name);

  constructor(
    private readonly folderRepository: FolderRepository,
    private readonly documentRepository: DocumentRepository,
    @Optional() private readonly auditService?: AuditService,
    @Optional() private readonly eventBus?: EventBusService,
  ) {}

  async createFolder(dto: CreateFolderDto, userId: string = 'system'): Promise<IFolder> {
    if (dto.parentId) {
      const parent = await this.folderRepository.findById(dto.parentId, dto.tenantId, dto.organizationId);
      if (!parent) {
        throw new NotFoundException(`Parent folder ${dto.parentId} not found`);
      }
    }

    const folder = await this.folderRepository.create({
      name: dto.name,
      parentId: dto.parentId || null,
      tenantId: dto.tenantId || 'default-tenant',
      organizationId: dto.organizationId || 'default-org',
      ownerId: dto.ownerId || userId,
      createdBy: userId,
      isFavorite: dto.isFavorite || false,
    });

    if (this.auditService) {
      await this.auditService.createAuditLog({
        actorId: userId,
        action: 'FOLDER_CREATE',
        entity: 'Folder',
        entityId: folder.id,
        userId,
        tenantId: folder.tenantId,
        payload: { folderName: folder.name, parentId: folder.parentId },
      });
    }

    if (this.eventBus) {
      await this.eventBus.publish(
        new FolderCreatedEvent({
          tenantId: folder.tenantId,
          payload: {
            folderId: folder.id,
            name: folder.name,
            parentId: folder.parentId,
            ownerId: folder.ownerId,
            actionBy: userId,
          },
        })
      );
    }

    return folder;
  }

  async getFolderById(id: string, tenantId?: string, organizationId?: string): Promise<IFolder> {
    const folder = await this.folderRepository.findById(id, tenantId, organizationId);
    if (!folder) {
      throw new NotFoundException(`Folder ${id} not found`);
    }
    return folder;
  }

  async listFolders(filters: {
    tenantId?: string;
    organizationId?: string;
    ownerId?: string;
    parentId?: string | null;
    isFavorite?: boolean;
    isDeleted?: boolean;
  }): Promise<IFolder[]> {
    return this.folderRepository.findMany(filters);
  }

  async updateFolder(id: string, dto: UpdateFolderDto, userId: string = 'system', tenantId?: string): Promise<IFolder> {
    const folder = await this.getFolderById(id, tenantId);

    if (dto.parentId && dto.parentId !== folder.parentId) {
      const parent = await this.folderRepository.findById(dto.parentId, folder.tenantId);
      if (!parent) {
        throw new NotFoundException(`Parent folder ${dto.parentId} not found`);
      }
    }

    const updated = await this.folderRepository.update(id, {
      name: dto.name ?? folder.name,
      parentId: dto.parentId !== undefined ? dto.parentId : folder.parentId,
      isFavorite: dto.isFavorite !== undefined ? dto.isFavorite : folder.isFavorite,
    });

    if (this.auditService) {
      await this.auditService.createAuditLog({
        actorId: userId,
        action: 'FOLDER_UPDATE',
        entity: 'Folder',
        entityId: updated.id,
        userId,
        tenantId: updated.tenantId,
        payload: { name: updated.name, parentId: updated.parentId },
      });
    }

    if (this.eventBus) {
      await this.eventBus.publish(
        new FolderUpdatedEvent({
          tenantId: updated.tenantId,
          payload: {
            folderId: updated.id,
            name: updated.name,
            parentId: updated.parentId,
            ownerId: updated.ownerId,
            actionBy: userId,
          },
        })
      );
    }

    return updated;
  }

  async softDeleteFolder(id: string, userId: string = 'system', tenantId?: string): Promise<IFolder> {
    const folder = await this.getFolderById(id, tenantId);
    const deletedFolder = await this.folderRepository.softDelete(id);

    // Also soft delete documents in this folder
    const docsInFolder = await this.documentRepository.findMany({
      folderId: id,
      tenantId: folder.tenantId,
      isDeleted: false,
    });

    for (const doc of docsInFolder.items) {
      await this.documentRepository.softDelete(doc.id, userId);
    }

    if (this.auditService) {
      await this.auditService.createAuditLog({
        actorId: userId,
        action: 'FOLDER_DELETE',
        entity: 'Folder',
        entityId: id,
        userId,
        tenantId: folder.tenantId,
      });
    }

    if (this.eventBus) {
      await this.eventBus.publish(
        new FolderDeletedEvent({
          tenantId: folder.tenantId,
          payload: {
            folderId: folder.id,
            name: folder.name,
            ownerId: folder.ownerId,
            actionBy: userId,
          },
        })
      );
    }

    return deletedFolder;
  }

  async restoreFolder(id: string, userId: string = 'system', tenantId?: string): Promise<IFolder> {
    const folder = await this.getFolderById(id, tenantId);
    const restored = await this.folderRepository.restore(id);

    // Also restore documents in folder
    const deletedDocs = await this.documentRepository.findMany({
      folderId: id,
      tenantId: folder.tenantId,
      isDeleted: true,
    });

    for (const doc of deletedDocs.items) {
      await this.documentRepository.restore(doc.id);
    }

    return restored;
  }
}
