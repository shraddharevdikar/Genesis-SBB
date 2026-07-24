import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert';
import { DocumentSearchService } from './document-search.service.js';
import { DocumentRepository } from './repositories/document.repository.js';

describe('DocumentSearchService', () => {
  let searchService: DocumentSearchService;
  let documentRepository: DocumentRepository;

  beforeEach(async () => {
    documentRepository = new DocumentRepository();
    searchService = new DocumentSearchService(documentRepository);

    // Seed test documents
    await documentRepository.create({
      name: 'Q1 Financial Report.pdf',
      originalName: 'q1_fin_2026.pdf',
      contentType: 'application/pdf',
      extension: 'pdf',
      category: 'FINANCIAL',
      tags: ['q1', 'finance', '2026'],
      tenantId: 'tenant-1',
      organizationId: 'org-1',
      storageKey: 'docs/q1.pdf',
      createdAt: new Date('2026-01-15'),
    });

    await documentRepository.create({
      name: 'Employee Handbook.docx',
      originalName: 'handbook_v2.docx',
      contentType: 'application/msword',
      extension: 'docx',
      category: 'HR',
      tags: ['policy', 'hr'],
      tenantId: 'tenant-1',
      organizationId: 'org-1',
      storageKey: 'docs/hr.docx',
      createdAt: new Date('2026-02-10'),
    });

    await documentRepository.create({
      name: 'Tenant 2 Contract.pdf',
      category: 'LEGAL',
      tenantId: 'tenant-2',
      storageKey: 'docs/t2.pdf',
    });
  });

  it('should search by filename and tenant isolation', async () => {
    const res = await searchService.search({ filename: 'Financial' }, 'tenant-1');
    assert.strictEqual(res.total, 1);
    assert.strictEqual(res.items[0].name, 'Q1 Financial Report.pdf');
  });

  it('should search by category and tags with pagination', async () => {
    const resCategory = await searchService.search({ category: 'HR' }, 'tenant-1');
    assert.strictEqual(resCategory.total, 1);
    assert.strictEqual(resCategory.items[0].category, 'HR');

    const resTags = await searchService.search({ tags: ['q1'] }, 'tenant-1');
    assert.strictEqual(resTags.total, 1);
    assert.strictEqual(resTags.items[0].name, 'Q1 Financial Report.pdf');
  });

  it('should search by date range correctly', async () => {
    const res = await searchService.search(
      {
        startDate: '2026-02-01',
        endDate: '2026-02-28',
      },
      'tenant-1'
    );

    assert.strictEqual(res.total, 1);
    assert.strictEqual(res.items[0].name, 'Employee Handbook.docx');
  });
});
