import { ProcessId } from '../identity/process-id.js';

export interface DownstreamProcess {
  readonly processIdRef: ProcessId;
  readonly uniqueReferenceCode: string;
  readonly triggersAutomaticallyUponSuccess: boolean;
}
