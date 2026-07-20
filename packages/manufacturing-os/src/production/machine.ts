import { MachineOperationalState } from '../core/production-lifecycle.js';

export interface Machine {
  readonly machineId: string;
  readonly uniqueMachineCode: string; // e.g. "MAC-ROBOTIC-WELD-02"
  readonly displayName: string;
  readonly manufacturerBrandName: string;
  readonly modelDesignationCodeText: string;
  readonly serialNumberString: string;
  readonly dateOfCommissioning: Date;
  readonly currentOperationalState: MachineOperationalState;
  readonly cumulativeOperatingHoursDecimal: number;
  readonly lastCalibrationDate?: Date;
  readonly firmwareVersionString?: string;
  readonly sensorTelemetryStreamURL?: string; // Links to live industrial IoT stream
  readonly activeStatusFlag: boolean;
}
