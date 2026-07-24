import { Injectable } from '@nestjs/common';
import { createHash } from 'node:crypto';
import { Readable } from 'node:stream';
import { DEFAULT_CHECKSUM_ALGORITHM } from '../constants/document.constants.js';

@Injectable()
export class ChecksumProcessor {
  calculateBufferChecksum(buffer: Buffer, algorithm: string = DEFAULT_CHECKSUM_ALGORITHM): string {
    return createHash(algorithm).update(buffer).digest('hex');
  }

  async calculateStreamChecksum(stream: Readable, algorithm: string = DEFAULT_CHECKSUM_ALGORITHM): Promise<string> {
    const hash = createHash(algorithm);
    return new Promise((resolve, reject) => {
      stream.on('data', (chunk) => hash.update(chunk));
      stream.on('error', (err) => reject(err));
      stream.on('end', () => resolve(hash.digest('hex')));
    });
  }

  verifyChecksum(calculatedChecksum: string, expectedChecksum: string): boolean {
    if (!calculatedChecksum || !expectedChecksum) return false;
    return calculatedChecksum.toLowerCase() === expectedChecksum.toLowerCase();
  }
}
