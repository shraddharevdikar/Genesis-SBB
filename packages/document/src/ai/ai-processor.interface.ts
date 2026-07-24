export interface IDAIOcrResult {
  text: string;
  confidence: number;
  pages: number;
}

export interface IDAISummaryResult {
  summary: string;
  keyPoints: string[];
}

export interface IDAIClassificationResult {
  category: string;
  tags: string[];
  confidence: number;
}

export interface IDAIEntityExtractionResult {
  entities: Array<{ name: string; type: string; confidence: number }>;
}

export interface IDAIEmbeddingResult {
  embedding: number[];
  vectorDimensions: number;
}

export interface IDAIDocumentQAResponse {
  answer: string;
  confidence: number;
  citations: string[];
}

export interface IDAIProcessor {
  extractText(documentId: string, content: Buffer): Promise<IDAIOcrResult>;
  summarize(text: string): Promise<IDAISummaryResult>;
  classify(text: string): Promise<IDAIClassificationResult>;
  extractEntities(text: string): Promise<IDAIEntityExtractionResult>;
  generateEmbeddings(text: string): Promise<IDAIEmbeddingResult>;
  queryDocument(documentId: string, question: string): Promise<IDAIDocumentQAResponse>;
}
