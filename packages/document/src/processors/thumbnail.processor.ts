import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class ThumbnailProcessor {
  private readonly logger = new Logger(ThumbnailProcessor.name);

  async generateThumbnail(documentId: string, contentType: string, buffer?: Buffer): Promise<Buffer> {
    this.logger.log(`Generating thumbnail for document ${documentId} (${contentType})`);
    
    // Generates a lightweight SVG/JPEG placeholder thumbnail buffer based on content type
    const svg = `
      <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#f1f5f9"/>
        <text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#475569">
          ${contentType.split('/')[1]?.toUpperCase() || 'FILE'}
        </text>
        <text x="50%" y="65%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#64748b">
          DOC #${documentId.slice(0, 8)}
        </text>
      </svg>
    `;

    return Buffer.from(svg.trim());
  }
}
