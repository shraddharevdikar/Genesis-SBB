import { Injectable, Logger } from '@nestjs/common';
import { DocumentRepository } from './repositories/document.repository.js';
import { SearchDocumentDto } from './dto/search-document.dto.js';
import { IDocument } from './interfaces/document.interface.js';

@Injectable()
export class DocumentSearchService {
  private readonly logger = new Logger(DocumentSearchService.name);

  constructor(private readonly documentRepository: DocumentRepository) {}

  async search(dto: SearchDocumentDto, tenantId?: string, organizationId?: string): Promise<{
    items: IDocument[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  }> {
    const activeTenant = dto.tenantId || tenantId;
    const activeOrg = dto.organizationId || organizationId;

    const startDate = dto.startDate ? new Date(dto.startDate) : undefined;
    const endDate = dto.endDate ? new Date(dto.endDate) : undefined;

    const result = await this.documentRepository.findMany({
      tenantId: activeTenant,
      organizationId: activeOrg,
      filename: dto.filename,
      tags: dto.tags,
      ownerId: dto.owner,
      category: dto.category,
      folderId: dto.folderId,
      documentType: dto.documentType,
      startDate,
      endDate,
      isFavorite: dto.isFavorite,
      isDeleted: dto.isDeleted ?? false,
      page: dto.page || 1,
      limit: dto.limit || 20,
      sortBy: dto.sortBy || 'createdAt',
      sortOrder: dto.sortOrder || 'desc',
    });

    const page = dto.page || 1;
    const limit = dto.limit || 20;
    const totalPages = Math.ceil(result.total / limit) || 1;

    this.logger.log(`Search query executed. Found ${result.total} documents (page ${page}/${totalPages})`);

    return {
      items: result.items,
      total: result.total,
      page,
      limit,
      totalPages,
    };
  }
}
