import { EncounterId } from './encounter.js';

export interface SOAPNote {
  readonly subjectiveText: string; // Patient reported symptoms and history
  readonly objectiveText: string; // Clinician physical findings, vitals, exam details
  readonly assessmentText: string; // Clinician differential diagnoses or clinical impressions
  readonly planText: string; // Prescriptions, referrals, follow-up parameters
}

export interface ClinicalNote {
  readonly noteId: string;
  readonly uniqueNoteCode: string; // e.g. "NTE-2026-SOAP-44"
  readonly associatedEncounterId: EncounterId;
  readonly authorPhysicianIdString: string;
  readonly authorNurseIdString?: string;
  readonly classification: 'SOAP_EXAM' | 'NURSING_DAILY_SHIFT_REPORT' | 'SURGICAL_PROCEDURE_LOG' | 'DISCHARGE_SUMMARY';
  readonly soapStructure?: SOAPNote;
  readonly freeformNarrativeText?: string;
  readonly electronicSignatureDocURI?: string; // Clinician signed-off ledger validation
  readonly signedOffFlag: boolean;
  readonly writtenAt: Date;
}
