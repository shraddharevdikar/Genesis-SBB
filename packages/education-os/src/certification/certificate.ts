import { StudentId } from '../students/student.js';

export interface Certificate {
  readonly certificateId: string;
  readonly uniqueCertificateCode: string; // e.g. "CRT-2026-CH-004241"
  readonly associatedStudentId: StudentId;
  readonly associatedAcademicProgramIdString?: string; // Null if micro-credential
  readonly conferredCredentialTitle: string; // e.g., "B.S. in Computer Science"
  readonly honorsConferredText?: string; // e.g. "Summa Cum Laude"
  readonly dateConferred: Date;
  readonly registrarStaffRoleIdString: string; // Authorized signer
  readonly secureVerificationHashString: string; // Cryptographic SHA256 checksum for audits
  readonly certificateStorageURI: string; // PDF layout or digital credential badge
  readonly activeStatusFlag: boolean; // false if revoked
  readonly lastModifiedAt: Date;
}
