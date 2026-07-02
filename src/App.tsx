import { useState } from 'react';
import { TicketDetail } from './components/TicketDetail';
import { FileBrowser } from './components/FileBrowser';
import { ArchitectureGraph } from './components/ArchitectureGraph';
import { RoadmapTimeline } from './components/RoadmapTimeline';
import { ticketDetails, fileList, futureTickets, configFileList, loggerFileList, sharedFileList, databaseFileList, authFileList, typesFileList, validationFileList, testingFileList, utilsFileList, uiFileList } from './data';
import { 
  FolderCheck, 
  Terminal, 
  Layers, 
  Compass, 
  Clock, 
  Github, 
  Cpu, 
  Code2, 
  Workflow, 
  ExternalLink 
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'ticket' | 'code' | 'pipeline' | 'roadmap'>('ticket');

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#E5E5E5] flex flex-col font-sans" id="app-root">
      {/* Top Professional Header Bar */}
      <header className="sticky top-0 z-40 bg-[#0F0F11] border-b border-[#262626] px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="bg-[#1C1917] text-white p-2.5 rounded border border-[#44403C] flex items-center justify-center">
            <Cpu className="w-5 h-5 text-[#A3A3A3] animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[9px] uppercase tracking-[0.3em] font-mono font-bold text-[#737373]">
                SBB Platform / Engineering Core
              </span>
              <span className="text-[#262626] font-mono text-xs">|</span>
              <span className="text-[#525252] font-mono text-[10px] flex items-center gap-1">
                <Clock className="w-3 h-3" /> Core Release 2026
              </span>
            </div>
            <h1 className="text-xl tracking-widest font-light text-white italic flex items-center gap-2" style={{ fontFamily: "'Georgia', serif" }}>
              GENESIS
            </h1>
          </div>
        </div>

        {/* System Health Indicators */}
        <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-end">
          <div className="flex items-center gap-2 bg-[#0D0D0E] px-3 py-1.5 rounded border border-[#262626]">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
            <span className="text-[10px] font-mono text-[#A3A3A3]">Dev Server Port: 3000</span>
          </div>
          <div className="flex items-center gap-2 bg-[#0D0D0E] px-3 py-1.5 rounded border border-[#262626]">
            <FolderCheck className="w-3.5 h-3.5 text-[#A3A3A3]" />
            <span className="text-[10px] font-mono text-[#A3A3A3]">Files: 67 Active Files</span>
          </div>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-1.5 bg-[#1C1917] hover:bg-[#2E2A27] text-[#F5F5F4] border border-[#44403C] px-3 py-1.5 rounded text-[10px] uppercase font-semibold font-mono tracking-widest transition-all"
          >
            <Github className="w-3.5 h-3.5" />
            <span>SBB Repo</span>
            <ExternalLink className="w-2.5 h-2.5" />
          </a>
        </div>
      </header>

      {/* Main Container Dashboard */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
        
        {/* Core Quick Overview Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4" id="stats-dashboard">
          <div className="bg-[#0F0F11] p-4 rounded border border-[#262626]">
            <div className="flex items-center justify-between">
              <span className="text-[#737373] font-mono text-[10px] uppercase tracking-wider">Active Tickets</span>
              <span className="text-[10px] font-mono text-[#D4D4D8] bg-[#1C1917] border border-[#44403C] px-1.5 py-0.5 rounded">GEN-000.4.10</span>
            </div>
            <p className="text-xl font-light text-white mt-2 font-mono">11 Packages</p>
            <p className="text-[11px] text-[#A3A3A3] mt-1 flex items-center gap-1">
              <span>All 11 Core Foundation Packages Complete</span>
            </p>
          </div>

          <div className="bg-[#0F0F11] p-4 rounded border border-[#262626]">
            <div className="flex items-center justify-between">
              <span className="text-[#737373] font-mono text-[10px] uppercase tracking-wider">Files Written</span>
              <Code2 className="w-4 h-4 text-[#737373]" />
            </div>
            <p className="text-xl font-light text-white mt-2 font-mono">148 Files</p>
            <p className="text-[11px] text-[#737373] mt-1">Identity (15) + Config (9) + Logger (12) + Shared (14) + DB (17) + Auth (8) + Types (15) + Validation (15) + Testing (13) + Utils (13) + UI (17)</p>
          </div>

          <div className="bg-[#0F0F11] p-4 rounded border border-[#262626]">
            <div className="flex items-center justify-between">
              <span className="text-[#737373] font-mono text-[10px] uppercase tracking-wider">NestJS Module</span>
              <Layers className="w-4 h-4 text-[#737373]" />
            </div>
            <p className="text-xl font-light text-white mt-2 font-mono">Registered</p>
            <p className="text-[11px] text-[#737373] mt-1">identity.module.ts</p>
          </div>

          <div className="bg-[#0F0F11] p-4 rounded border border-[#262626]">
            <div className="flex items-center justify-between">
              <span className="text-[#737373] font-mono text-[10px] uppercase tracking-wider">Validation, ORM & Results</span>
              <Workflow className="w-4 h-4 text-[#737373]" />
            </div>
            <p className="text-xl font-light text-white mt-2 font-mono">Pino, Zod & Prisma</p>
            <p className="text-[11px] text-[#737373] mt-1">Safe Env, Monads & Repositories</p>
          </div>
        </section>

        {/* Interactive Workspace Navigation Tabs */}
        <section className="flex items-center justify-between border-b border-[#262626] pb-1 overflow-x-auto gap-4 scrollbar-none" id="workspace-tabs">
          <div className="flex items-center gap-2 min-w-max">
            <button
              onClick={() => setActiveTab('ticket')}
              id="tab-btn-ticket"
              className={`flex items-center gap-2 px-4 py-2 rounded text-[10px] font-semibold tracking-widest font-mono uppercase transition-all cursor-pointer ${
                activeTab === 'ticket'
                  ? 'bg-[#1C1917] text-[#F5F5F4] border border-[#44403C]'
                  : 'hover:bg-[#161619] text-[#737373] border border-transparent'
              }`}
            >
              <Terminal className="w-4 h-4" />
              <span>Engineering Spec</span>
            </button>
            
            <button
              onClick={() => setActiveTab('code')}
              id="tab-btn-code"
              className={`flex items-center gap-2 px-4 py-2 rounded text-[10px] font-semibold tracking-widest font-mono uppercase transition-all cursor-pointer ${
                activeTab === 'code'
                  ? 'bg-[#1C1917] text-[#F5F5F4] border border-[#44403C]'
                  : 'hover:bg-[#161619] text-[#737373] border border-transparent'
              }`}
            >
              <Code2 className="w-4 h-4" />
              <span>Directory & Code</span>
            </button>

            <button
              onClick={() => setActiveTab('pipeline')}
              id="tab-btn-pipeline"
              className={`flex items-center gap-2 px-4 py-2 rounded text-[10px] font-semibold tracking-widest font-mono uppercase transition-all cursor-pointer ${
                activeTab === 'pipeline'
                  ? 'bg-[#1C1917] text-[#F5F5F4] border border-[#44403C]'
                  : 'hover:bg-[#161619] text-[#737373] border border-transparent'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Pipeline Architecture</span>
            </button>

            <button
              onClick={() => setActiveTab('roadmap')}
              id="tab-btn-roadmap"
              className={`flex items-center gap-2 px-4 py-2 rounded text-[10px] font-semibold tracking-widest font-mono uppercase transition-all cursor-pointer ${
                activeTab === 'roadmap'
                  ? 'bg-[#1C1917] text-[#F5F5F4] border border-[#44403C]'
                  : 'hover:bg-[#161619] text-[#737373] border border-transparent'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>Integration Roadmap</span>
            </button>
          </div>
          
          <div className="text-[10px] font-mono uppercase tracking-widest text-[#525252] hidden sm:block">
            STABLE SKELETON ENGINE
          </div>
        </section>

        {/* Dynamic Display Board based on active tab */}
        <section className="transition-all duration-300" id="dynamic-display-board">
          {activeTab === 'ticket' && (
            <TicketDetail details={ticketDetails} />
          )}

          {activeTab === 'code' && (
            <FileBrowser files={fileList} configFiles={configFileList} loggerFiles={loggerFileList} sharedFiles={sharedFileList} databaseFiles={databaseFileList} authFiles={authFileList} typesFiles={typesFileList} validationFiles={validationFileList} testingFiles={testingFileList} utilsFiles={utilsFileList} uiFiles={uiFileList} />
          )}

          {activeTab === 'pipeline' && (
            <ArchitectureGraph />
          )}

          {activeTab === 'roadmap' && (
            <RoadmapTimeline tickets={futureTickets} />
          )}
        </section>

        {/* Architecture Disclaimer banner */}
        <footer className="p-5 bg-[#0F0F11] text-[#737373] rounded border border-[#262626] text-center text-xs font-sans space-y-1.5 shadow-md">
          <p className="text-white font-light flex items-center justify-center gap-1.5">
            <Layers className="w-4 h-4 text-[#A3A3A3]" />
            Module Architecture Integrity: 100%
          </p>
          <p className="text-[#A3A3A3] text-[11px] leading-relaxed max-w-2xl mx-auto italic">
            This workspace contains actual boilerplate skeleton files in <code className="font-mono bg-[#0D0D0E] px-1.5 py-0.5 rounded text-white border border-[#262626]">backend/api/src/modules/identity/</code>. As per ticket GEN-ID-001 specification boundaries, all services, controllers, guards, DTOs, strategies, validators, and entities exist in correct paths, but do not contain business logic or database queries.
          </p>
        </footer>

      </main>
    </div>
  );
}
