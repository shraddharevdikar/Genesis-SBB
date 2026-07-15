export interface SdkReferenceEntry {
  readonly apiSymbolName: string;
  readonly kind: 'INTERFACE' | 'CLASS' | 'ENUM' | 'METHOD';
  readonly signatureDeclarationText: string;
  readonly descriptionText: string;
  readonly exampleCodeSnippetText?: string;
  readonly deprecatedInVersion?: string;
}

export interface SdkReference {
  readonly sdkVersion: string;
  readonly entriesList: SdkReferenceEntry[];
}
