export type ClassroomType =
  | 'LECTURE_HALL'
  | 'SEMINAR_ROOM'
  | 'COMPUTER_LAB'
  | 'BIOLOGY_CHEMISTRY_LAB'
  | 'ART_STUDIO'
  | 'VIRTUAL_CONFERENCING_ROOM';

export interface Classroom {
  readonly classroomId: string;
  readonly uniqueClassroomCode: string; // e.g., "CRM-SCI-302"
  readonly associatedCampusIdString: string; // Links to Campus
  readonly displayName: string;
  readonly roomNumberString: string; // e.g., "302"
  readonly buildingNameString: string; // e.g., "Hall of Physical Sciences"
  readonly classroomType: ClassroomType;
  readonly maximumStudentCapacityCount: number; // For scheduling safety & compliance
  readonly equippedAudioVisualCapabilitiesList: string[]; // e.g. ["PROJECTOR", "SMART_BOARD", "HYBRID_CAMERA"]
  readonly activeStatusFlag: boolean;
  readonly lastModifiedAt: Date;
}
