export interface FileNode {
  name: string;
  path: string;
  content: string;
  description: string;
  language: string;
  role: string;
}

export interface DirectoryNode {
  name: string;
  path: string;
  children?: (DirectoryNode | FileNode)[];
  isFile: boolean;
}

export interface TicketDetails {
  id: string;
  title: string;
  status: 'PENDING' | 'IN_PROGRESS' | 'DONE';
  priority: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  author: string;
  assignee: string;
  objective: string;
  modulePath: string;
  requirements: string[];
  responsibilities: {
    title: string;
    description: string;
    status: string;
  }[];
}

export interface FutureTicket {
  id: string;
  title: string;
  phase: string;
  description: string;
  milestones: string[];
}
