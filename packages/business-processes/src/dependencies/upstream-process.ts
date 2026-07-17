import { ProcessId } from '../identity/process-id.js';

export interface UpstreamProcess {
  readonly processIdRef: ProcessId;
  readonly uniqueReferenceCode: string;
  readonly sharedPayloadInputsList: string[]; // input parameter keys propagated
}
