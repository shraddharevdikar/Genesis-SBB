import { Injectable } from '@nestjs/common';
import { IDocumentMetadata } from '../interfaces/metadata.interface.js';
import { ChecksumProcessor } from './checksum.processor.js';
import * as path from 'node:path';

@Injectable()
export class MetadataProcessor {
  constructor(private readonly checksumProcessor: ChecksumProcessor) {}

  extractBasicMetadata(file: {
    filename: string;
    originalFilename?: string;
    contentType?: string;
    size: number;
    buffer?: Buffer;
    owner?: string;
    createdBy?: string;
    category?: string;
    retentionPolicy?: string;
    tags?: string[];
  }): IDocumentMetadata {
    const originalName = file.originalFilename || file.filename;
    const ext = path.extname(originalName).replace('.', '').toLowerCase() || 'unknown';
    const contentType = file.contentType || this.guessContentType(ext);
    
    let checksum = '';
    let wordCount: number | undefined;

    if (file.buffer) {
      checksum = this.checksumProcessor.calculateBufferChecksum(file.buffer);
      if (contentType.includes('text') || contentType.includes('json') || contentType.includes('markdown')) {
        const textContent = file.buffer.toString('utf-8');
        wordCount = textContent.split(/\s+/).filter(Boolean).length;
      }
    }

    return {
      filename: file.filename,
      originalFilename: originalName,
      contentType,
      extension: ext,
      size: file.size,
      checksum,
      owner: file.owner || 'system',
      createdBy: file.createdBy || file.owner || 'system',
      modifiedBy: file.createdBy || file.owner || 'system',
      tags: file.tags || [],
      category: file.category || null,
      retentionPolicy: file.retentionPolicy || null,
      aiProcessingStatus: 'PENDING',
      wordCount,
    };
  }

  private guessContentType(extension: string): string {
    const map: Record<string, string> = {
      pdf: 'application/pdf',
      doc: 'application/msword',
      docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      xls: 'application/vnd.ms-excel',
      xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      png: 'image/png',
      jpg: 'image/jpeg',
      jpeg: 'image/jpeg',
      gif: 'image/gif',
      svg: 'image/svg+xml',
      txt: 'text/plain',
      json: 'application/json',
      csv: 'text/csv',
    };
    return map[extension.toLowerCase()] || 'application/octet-stream';
  }
}
