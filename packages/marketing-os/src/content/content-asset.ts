export type ContentAssetTypeCode =
  | 'BLOG_POST'
  | 'WHITE_PAPER'
  | 'CASE_STUDY'
  | 'INFOGRAPHIC'
  | 'PRODUCT_VIDEO'
  | 'WEBINAR_RECORDING';

export interface ContentAsset {
  readonly assetId: string;
  readonly uniqueAssetCode: string; // e.g. "AST-WP-SOVEREIGNTY"
  readonly displayName: string;
  readonly assetType: ContentAssetTypeCode;
  readonly rawTextContentOrTranscriptionText?: string;
  readonly mediaStoragePathURI?: string;
  readonly authorOperatorRoleId: string;
  readonly seoMetadataKeywordsList: string[];
  readonly wordCountNumeric: number;
  readonly isBrandCheckedAndApprovedFlag: boolean;
}
