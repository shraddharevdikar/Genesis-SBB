import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert';
import { FolderService } from './folder.service.js';
import { FolderRepository } from './repositories/folder.repository.js';
import { DocumentRepository } from './repositories/document.repository.js';

describe('FolderService', () => {
  let folderService: FolderService;
  let folderRepository: FolderRepository;
  let documentRepository: DocumentRepository;

  beforeEach(() => {
    folderRepository = new FolderRepository();
    documentRepository = new DocumentRepository();
    folderService = new FolderService(folderRepository, documentRepository);
  });

  it('should create and list folders with parent-child structure', async () => {
    const root = await folderService.createFolder({
      name: 'Root Folder',
      tenantId: 'tenant-1',
      organizationId: 'org-1',
    });

    const sub = await folderService.createFolder({
      name: 'Sub Folder',
      parentId: root.id,
      tenantId: 'tenant-1',
      organizationId: 'org-1',
    });

    assert.ok(root.id);
    assert.strictEqual(sub.parentId, root.id);

    const subfolders = await folderService.listFolders({
      tenantId: 'tenant-1',
      parentId: root.id,
    });

    assert.strictEqual(subfolders.length, 1);
    assert.strictEqual(subfolders[0].name, 'Sub Folder');
  });

  it('should soft delete and restore folder along with contained documents', async () => {
    const folder = await folderService.createFolder({ name: 'Financial Records', tenantId: 'tenant-1' });
    const doc = await documentRepository.create({
      name: 'Tax2025.pdf',
      folderId: folder.id,
      tenantId: 'tenant-1',
      storageKey: 'docs/tax.pdf',
    });

    const deletedFolder = await folderService.softDeleteFolder(folder.id, 'user-admin', 'tenant-1');
    assert.strictEqual(deletedFolder.isDeleted, true);

    const docAfterDelete = await documentRepository.findById(doc.id);
    assert.strictEqual(docAfterDelete?.isDeleted, true);

    const restoredFolder = await folderService.restoreFolder(folder.id, 'user-admin', 'tenant-1');
    assert.strictEqual(restoredFolder.isDeleted, false);

    const docAfterRestore = await documentRepository.findById(doc.id);
    assert.strictEqual(docAfterRestore?.isDeleted, false);
  });
});
