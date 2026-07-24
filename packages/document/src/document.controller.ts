import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query,
  Headers,
  HttpCode,
  HttpStatus,
  UseInterceptors,
  UploadedFile,
  Res,
} from '@nestjs/common';
import { DocumentService } from './document.service.js';
import { FolderService } from './folder.service.js';
import { DocumentVersionService } from './document-version.service.js';
import { UploadDocumentDto } from './dto/upload-document.dto.js';
import { UpdateDocumentDto } from './dto/update-document.dto.js';
import { SearchDocumentDto } from './dto/search-document.dto.js';
import { CreateFolderDto, UpdateFolderDto } from './dto/create-folder.dto.js';
import { MoveDocumentDto, CopyDocumentDto } from './dto/move-document.dto.js';
import { StorageFile } from './interfaces/storage-provider.interface.js';
import { Response } from 'express';
import { Readable } from 'node:stream';

@Controller('documents')
export class DocumentController {
  constructor(
    private readonly documentService: DocumentService,
    private readonly folderService: FolderService,
    private readonly versionService: DocumentVersionService,
  ) {}

  @Post('upload')
  async uploadDocument(
    @Body() dto: UploadDocumentDto,
    @Headers('x-user-id') userId: string = 'system',
    @Headers('x-tenant-id') tenantId?: string,
    @Headers('x-organization-id') orgId?: string,
  ) {
    // Simulated upload payload if file buffer is embedded or string
    const mockFile: StorageFile = {
      filename: dto.name || 'document.pdf',
      mimetype: 'application/pdf',
      size: 1024,
      buffer: Buffer.from('Mock file content buffer'),
    };

    return this.documentService.uploadDocument(mockFile, dto, userId, tenantId, orgId);
  }

  @Post('search')
  @HttpCode(HttpStatus.OK)
  async searchDocuments(
    @Body() dto: SearchDocumentDto,
    @Headers('x-user-id') userId: string = 'system',
    @Headers('x-tenant-id') tenantId?: string,
    @Headers('x-organization-id') orgId?: string,
  ) {
    return this.documentService.searchDocuments(dto, userId, tenantId, orgId);
  }

  @Get('recycle-bin/list')
  async getRecycleBin(
    @Headers('x-user-id') userId: string = 'system',
    @Headers('x-tenant-id') tenantId?: string,
    @Headers('x-organization-id') orgId?: string,
  ) {
    return this.documentService.getRecycleBin(userId, tenantId, orgId);
  }

  @Get()
  async getDocuments(
    @Query() query: SearchDocumentDto,
    @Headers('x-user-id') userId: string = 'system',
    @Headers('x-tenant-id') tenantId?: string,
    @Headers('x-organization-id') orgId?: string,
  ) {
    return this.documentService.searchDocuments(query, userId, tenantId, orgId);
  }

  @Get(':id')
  async getDocumentById(
    @Param('id') id: string,
    @Headers('x-user-id') userId: string = 'system',
    @Headers('x-tenant-id') tenantId?: string,
  ) {
    return this.documentService.getDocumentById(id, userId, tenantId);
  }

  @Get(':id/download')
  async downloadDocument(
    @Param('id') id: string,
    @Res() res: Response,
    @Headers('x-user-id') userId: string = 'system',
    @Headers('x-tenant-id') tenantId?: string,
  ) {
    const { document, content } = await this.documentService.downloadDocument(id, userId, tenantId);

    res.setHeader('Content-Type', document.contentType || 'application/octet-stream');
    res.setHeader('Content-Disposition', `attachment; filename="${encodeURIComponent(document.originalName)}"`);

    if (Buffer.isBuffer(content)) {
      return res.send(content);
    } else if (content instanceof Readable) {
      return content.pipe(res);
    }
    return res.status(200).send(content);
  }

  @Put(':id')
  async updateDocument(
    @Param('id') id: string,
    @Body() dto: UpdateDocumentDto,
    @Headers('x-user-id') userId: string = 'system',
    @Headers('x-tenant-id') tenantId?: string,
  ) {
    return this.documentService.updateDocument(id, dto, undefined, userId, tenantId);
  }

  @Delete(':id')
  async deleteDocument(
    @Param('id') id: string,
    @Headers('x-user-id') userId: string = 'system',
    @Headers('x-tenant-id') tenantId?: string,
  ) {
    return this.documentService.deleteDocument(id, userId, tenantId);
  }

  @Post(':id/restore')
  async restoreDocument(
    @Param('id') id: string,
    @Headers('x-user-id') userId: string = 'system',
    @Headers('x-tenant-id') tenantId?: string,
  ) {
    return this.documentService.restoreDocument(id, userId, tenantId);
  }

  @Get(':id/versions')
  async getVersions(@Param('id') id: string) {
    return this.versionService.getVersionHistory(id);
  }

  @Post(':id/move')
  async moveDocument(
    @Param('id') id: string,
    @Body() dto: MoveDocumentDto,
    @Headers('x-user-id') userId: string = 'system',
    @Headers('x-tenant-id') tenantId?: string,
  ) {
    return this.documentService.moveDocument(id, dto.folderId ?? null, userId, tenantId);
  }

  @Post(':id/copy')
  async copyDocument(
    @Param('id') id: string,
    @Body() dto: CopyDocumentDto,
    @Headers('x-user-id') userId: string = 'system',
    @Headers('x-tenant-id') tenantId?: string,
  ) {
    return this.documentService.copyDocument(id, dto.folderId, dto.newName, userId, tenantId);
  }

  @Post(':id/restore-version/:versionId')
  async restoreVersion(
    @Param('id') id: string,
    @Param('versionId') versionId: string,
    @Headers('x-user-id') userId: string = 'system',
    @Headers('x-tenant-id') tenantId?: string,
  ) {
    return this.documentService.restoreVersion(id, versionId, userId, tenantId);
  }

  // Folder management routes
  @Post('/folders')
  async createFolder(
    @Body() dto: CreateFolderDto,
    @Headers('x-user-id') userId: string = 'system',
  ) {
    return this.folderService.createFolder(dto, userId);
  }

  @Put('/folders/:id')
  async updateFolder(
    @Param('id') id: string,
    @Body() dto: UpdateFolderDto,
    @Headers('x-user-id') userId: string = 'system',
    @Headers('x-tenant-id') tenantId?: string,
  ) {
    return this.folderService.updateFolder(id, dto, userId, tenantId);
  }

  @Get('/folders')
  async getFolders(
    @Query('parentId') parentId?: string,
    @Headers('x-tenant-id') tenantId?: string,
    @Headers('x-organization-id') orgId?: string,
  ) {
    return this.folderService.listFolders({
      tenantId,
      organizationId: orgId,
      parentId: parentId !== undefined ? parentId : null,
    });
  }
}
