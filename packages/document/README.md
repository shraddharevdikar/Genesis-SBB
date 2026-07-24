# Enterprise File & Document Service (`@sbb/document`)

Enterprise file and document management service for Genesis-SBB, providing robust multi-tenant document storage, versioning, metadata extraction, folder hierarchies, search, recycle bin, RBAC permissions, audit logging, and workflow/AI runtime interfaces.

---

## 🏗 Architecture

`@sbb/document` follows clean modular NestJS architecture with strict separation of concerns:

- **DocumentModule & Controller**: Exposes standard NestJS REST endpoints for uploading, downloading, search, folders, version history, recycle bin, and metadata updates.
- **DocumentService**: Core orchestrator handling file workflows, versioning, storage abstraction, RBAC permission checks, audit logging, and event bus publishing.
- **DocumentStorageService**: Abstract storage layer supporting dynamic dispatch across storage providers (`LOCAL`, `GCS`, `S3`, `AZURE`).
- **DocumentVersionService**: Manages automatic document version creation, version history tracking, comparisons, and version restoration.
- **DocumentMetadataService & Processors**: Handles metadata extraction, checksum generation (SHA-256), classification tags, retention policy tracking, and AI processing statuses.
- **FolderService**: Manages hierarchical directory structures with nested folder support, soft deletes, and cascade operations.
- **Repositories**: Dual-mode repositories supporting Prisma `DatabaseService` delegation with automatic in-memory fallbacks.

---

## 💾 Storage Providers

The service implements a unified `IStorageProvider` interface:

1. **Local Storage Provider**: High-performance disk/memory storage engine.
2. **Google Cloud Storage (GCS) Provider**: Interface stub for GCP object storage (`gs://`).
3. **Amazon S3 Provider**: Interface stub for AWS S3 buckets (`s3://`).
4. **Azure Blob Storage Provider**: Interface stub for Azure Blob containers (`azure://`).

---

## 📜 Versioning

- **Automatic Versioning**: Every file re-upload automatically increments the version number ($V_1, V_2, \dots, V_n$).
- **Version History**: Full historical record including size, checksum, timestamp, creator, and version comments.
- **Restore Version**: Restoring an earlier version promotes that version's content to a new top-level version without destroying history.
- **Compare Versions**: Automated comparison tool calculating size deltas and checksum equality.

---

## 🏷 Metadata & Processors

Stored document metadata includes:
- Filename, Original Filename, Content Type, Extension, Size, Checksum (SHA-256).
- Owner, Creator, Last Modifier, Tags, Category, Retention Policy.
- AI Processing Status (`PENDING`, `IN_PROGRESS`, `COMPLETED`, `FAILED`).
- Extracted Word Count, Document Dimensions, Page Count, and Custom Properties.

---

## 🔄 Workflow Integration

Workflows in `@sbb/workflow` can attach and process documents seamlessly:
- `attachToWorkflow(documentId, workflowId, stepId)`: Binds documents to workflow instances.
- `readWorkflowDocument(documentId)`: Retrieves document streams for step execution.
- `archiveWorkflowDocument(documentId)`: Locks document under permanent retention policies.

---

## 🤖 AI Runtime Interfaces

Exposes clean interfaces (`IDAIProcessor`) for future AI service extensions:
- **OCR**: Text extraction & confidence scoring (`extractText`).
- **Summarization**: Document text summarization (`summarize`).
- **Classification**: Automated categorisation & tag generation (`classify`).
- **Entity Extraction**: Extracting named entities (`extractEntities`).
- **Embeddings**: Vector embedding generation (`generateEmbeddings`).
- **Document QA**: RAG question answering over documents (`queryDocument`).

---

## 💻 Code Examples

### Uploading a Document

```typescript
import { DocumentService } from '@sbb/document';

const doc = await documentService.uploadDocument(
  {
    filename: 'Q4_Financial_Report.pdf',
    mimetype: 'application/pdf',
    size: 2048576,
    buffer: pdfBuffer,
  },
  {
    name: 'Q4 2026 Financial Report',
    category: 'FINANCIAL',
    tags: ['q4', 'finance', '2026'],
    retentionPolicy: 'SEVEN_YEARS',
  },
  'user-123',
  'tenant-acme',
  'org-finance'
);
```

### Restoring a Previous Version

```typescript
const restoredVersion = await documentService.restoreVersion(
  documentId,
  versionIdToRestore,
  'user-123',
  'tenant-acme'
);
```

---

## 🧪 Testing & Validation

Run unit tests and type checks:

```bash
pnpm --filter @sbb/document test
pnpm --filter @sbb/document lint
pnpm --filter @sbb/document build
```
