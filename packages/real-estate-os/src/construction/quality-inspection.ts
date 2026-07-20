import { RealEstateProjectId } from '../projects/real-estate-project.js';
import { TowerId } from '../projects/tower.js';

export interface QualityDefectItem {
  readonly itemId: string;
  readonly severityLevel: 'MINOR' | 'MAJOR' | 'STRUCTURAL_CRITICAL';
  readonly locationDetailsText: string; // e.g. "Flat A-1204 Master Bedroom Wall"
  readonly physicalFindingDescription: string; // e.g. "Hairline plaster cracks detected"
  readonly resolvedFlag: boolean;
  readonly resolvedAt?: Date;
}

export interface QualityInspection {
  readonly inspectionId: string;
  readonly uniqueInspectionCode: string; // e.g. "INS-QC-HEIGHTS-2026-10"
  readonly associatedProjectId: RealEstateProjectId;
  readonly associatedTowerId?: TowerId;
  readonly inspectorNameString: string;
  readonly inspectedAt: Date;
  readonly overallPassScoreDecimal: number; // e.g. 0.94 (94% quality score)
  readonly defectsFoundList: QualityDefectItem[];
  readonly standardSOPCodeReference: string; // e.g. "QC-SOP-CONCRETE-3"
  readonly reportAttachmentURI?: string;
  readonly approvalStatus: 'PENDING_REVIEW' | 'APPROVED_PASSED' | 'FAILED_RE_WORK_REQUIRED';
}
