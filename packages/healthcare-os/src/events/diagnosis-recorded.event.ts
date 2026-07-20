import { PatientDiagnosis } from '../clinical/diagnosis.js';
import { HealthcareContext } from '../core/healthcare-context.js';

export interface DiagnosisRecordedEvent {
  readonly eventId: string;
  readonly eventName: 'DIAGNOSIS_RECORDED';
  readonly payload: {
    readonly diagnosis: PatientDiagnosis;
  };
  readonly context: HealthcareContext;
}
