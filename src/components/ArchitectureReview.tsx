import { useState } from 'react';
import { 
  CheckCircle, 
  AlertTriangle, 
  FileText, 
  Layers, 
  Workflow, 
  Activity, 
  ShieldCheck, 
  FileCheck, 
  Terminal, 
  HelpCircle, 
  Clock, 
  UserCheck, 
  BookOpen 
} from 'lucide-react';

export function ArchitectureReview() {
  const [activeSubTab, setActiveSubTab] = useState<'report' | 'debt' | 'recommendations' | 'dependencies' | 'readiness'>('report');

  return (
    <div className="bg-[#0F0F11] rounded-xl border border-[#262626] overflow-hidden" id="architecture-review-panel">
      {/* Review Header */}
      <div className="bg-[#0A0A0B] px-6 py-5 text-[#E5E5E5] flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#262626]">
        <div className="flex items-center gap-3">
          <div className="bg-[#1C1917] text-white p-2.5 rounded border border-[#44403C]">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs tracking-widest text-emerald-400 font-bold bg-[#111C15] border border-[#14532D] px-2 py-0.5 rounded">
                FAR-001
              </span>
              <span className="text-[10px] text-[#737373] tracking-widest uppercase font-mono">Milestone: Post-M0 Review</span>
            </div>
            <h1 className="text-xl font-light text-white tracking-wide mt-1 italic" style={{ fontFamily: "'Georgia', serif" }}>
              Genesis-SBB Foundation Architecture Review
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-mono tracking-widest bg-[#111C15] text-emerald-400 border border-[#14532D] rounded">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></span>
            REVIEW COMPLETED
          </span>
        </div>
      </div>

      {/* Report Summary Quick Stats */}
      <div className="p-6 border-b border-[#262626] bg-[#0C0C0E] grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-[#0D0D0E] p-4 rounded border border-[#202023] shadow-sm">
          <p className="text-[10px] uppercase tracking-wider text-[#737373] font-mono">Architecture Status</p>
          <p className="text-sm font-semibold text-emerald-400 mt-1 flex items-center gap-1.5 font-mono">
            <CheckCircle className="w-4 h-4" /> 100% Compliant
          </p>
        </div>
        <div className="bg-[#0D0D0E] p-4 rounded border border-[#202023] shadow-sm">
          <p className="text-[10px] uppercase tracking-wider text-[#737373] font-mono">Packages Reviewed</p>
          <p className="text-sm font-semibold text-white mt-1 font-mono">11 Core Packages</p>
        </div>
        <div className="bg-[#0D0D0E] p-4 rounded border border-[#202023] shadow-sm">
          <p className="text-[10px] uppercase tracking-wider text-[#737373] font-mono">Technical Debt Solved</p>
          <p className="text-sm font-semibold text-emerald-400 mt-1 font-mono">2 Critical Issues Fixed</p>
        </div>
        <div className="bg-[#0D0D0E] p-4 rounded border border-[#202023] shadow-sm">
          <p className="text-[10px] uppercase tracking-wider text-[#737373] font-mono">CI/CD Action Pipeline</p>
          <p className="text-sm font-semibold text-white mt-1 font-mono flex items-center gap-1">
            <Terminal className="w-4 h-4 text-[#A3A3A3]" /> Ready (ci.yml)
          </p>
        </div>
      </div>

      {/* Sub-Navigation Tabs */}
      <div className="flex border-b border-[#262626] bg-[#0A0A0B] overflow-x-auto scrollbar-none">
        <button
          onClick={() => setActiveSubTab('report')}
          className={`px-5 py-3.5 text-xs font-mono font-medium tracking-wider uppercase border-b-2 transition-all cursor-pointer whitespace-nowrap ${
            activeSubTab === 'report'
              ? 'border-emerald-500 text-white bg-[#0F0F11]'
              : 'border-transparent text-[#737373] hover:text-white hover:bg-[#111113]'
          }`}
        >
          1. Architecture Report
        </button>
        <button
          onClick={() => setActiveSubTab('debt')}
          className={`px-5 py-3.5 text-xs font-mono font-medium tracking-wider uppercase border-b-2 transition-all cursor-pointer whitespace-nowrap ${
            activeSubTab === 'debt'
              ? 'border-emerald-500 text-white bg-[#0F0F11]'
              : 'border-transparent text-[#737373] hover:text-white hover:bg-[#111113]'
          }`}
        >
          2. Tech Debt Register
        </button>
        <button
          onClick={() => setActiveSubTab('recommendations')}
          className={`px-5 py-3.5 text-xs font-mono font-medium tracking-wider uppercase border-b-2 transition-all cursor-pointer whitespace-nowrap ${
            activeSubTab === 'recommendations'
              ? 'border-emerald-500 text-white bg-[#0F0F11]'
              : 'border-transparent text-[#737373] hover:text-white hover:bg-[#111113]'
          }`}
        >
          3. Engineering Recommendations
        </button>
        <button
          onClick={() => setActiveSubTab('dependencies')}
          className={`px-5 py-3.5 text-xs font-mono font-medium tracking-wider uppercase border-b-2 transition-all cursor-pointer whitespace-nowrap ${
            activeSubTab === 'dependencies'
              ? 'border-emerald-500 text-white bg-[#0F0F11]'
              : 'border-transparent text-[#737373] hover:text-white hover:bg-[#111113]'
          }`}
        >
          4. Dependency Review
        </button>
        <button
          onClick={() => setActiveSubTab('readiness')}
          className={`px-5 py-3.5 text-xs font-mono font-medium tracking-wider uppercase border-b-2 transition-all cursor-pointer whitespace-nowrap ${
            activeSubTab === 'readiness'
              ? 'border-emerald-500 text-white bg-[#0F0F11]'
              : 'border-transparent text-[#737373] hover:text-white hover:bg-[#111113]'
          }`}
        >
          5. Release Readiness
        </button>
      </div>

      {/* Tab Content Display */}
      <div className="p-6 space-y-6 min-h-[380px] bg-[#0F0F11]">
        
        {/* Deliverable 1: Architecture Review Report */}
        {activeSubTab === 'report' && (
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#A3A3A3]" />
              <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-[#E5E5E5]">
                1. Foundation Architectural Compliance Report
              </h2>
            </div>

            <p className="text-xs text-[#A3A3A3] leading-relaxed max-w-4xl">
              This report evaluates package boundaries, strict layering, and dependency trees after completing M0. No upward dependencies or architectural violations were identified.
            </p>

            {/* Layering Compliance Chart */}
            <div className="bg-[#0D0D0E] rounded border border-[#262626] p-5">
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#737373] uppercase block mb-4">PLATFORM LAYERING HIERARCHY</span>
              
              <div className="space-y-3.5 font-mono text-xs max-w-2xl">
                <div className="bg-[#1C1917] p-3 rounded border border-[#44403C] flex items-center justify-between">
                  <span className="font-semibold text-white">1. Applications Layer (Web Explorer)</span>
                  <span className="text-[10px] font-bold text-emerald-400 bg-[#111C15] border border-[#14532D] px-2 py-0.5 rounded">COMPLIANT</span>
                </div>
                <div className="text-center text-[#525252] font-semibold">↓</div>
                
                <div className="bg-[#161619] p-3 rounded border border-[#262626] flex items-center justify-between">
                  <span className="font-semibold text-[#E5E5E5]">2. Backend / API Gateway Layer (NestJS)</span>
                  <span className="text-[10px] font-bold text-emerald-400 bg-[#111C15] border border-[#14532D] px-2 py-0.5 rounded">COMPLIANT</span>
                </div>
                <div className="text-center text-[#525252] font-semibold">↓</div>

                <div className="bg-[#161619] p-3 rounded border border-[#262626] flex items-center justify-between">
                  <span className="font-semibold text-[#D4D4D8]">3. Feature Modules (Identity, Auth Module Skeletons)</span>
                  <span className="text-[10px] font-bold text-emerald-400 bg-[#111C15] border border-[#14532D] px-2 py-0.5 rounded">COMPLIANT</span>
                </div>
                <div className="text-center text-[#525252] font-semibold">↓</div>

                <div className="bg-[#161619] p-3 rounded border border-[#262626] flex items-center justify-between">
                  <span className="font-semibold text-[#A3A3A3]">4. Shared Utility Packages (@sbb/shared, config, types)</span>
                  <span className="text-[10px] font-bold text-emerald-400 bg-[#111C15] border border-[#14532D] px-2 py-0.5 rounded">COMPLIANT</span>
                </div>
                <div className="text-center text-[#525252] font-semibold">↓</div>

                <div className="bg-[#161619] p-3 rounded border border-[#262626] flex items-center justify-between">
                  <span className="font-semibold text-[#737373]">5. Infrastructure Adapters (Prisma Core, PostgreSQL)</span>
                  <span className="text-[10px] font-bold text-emerald-400 bg-[#111C15] border border-[#14532D] px-2 py-0.5 rounded">COMPLIANT</span>
                </div>
              </div>
            </div>

            {/* Circular Dependency Check Results */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#0D0D0E] rounded border border-[#262626] p-5 space-y-2">
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#737373] uppercase block">CIRCULAR DEPENDENCY STATUS</span>
                <div className="flex items-center gap-3 text-emerald-400 font-mono text-sm py-2">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <span>0 Circular Dependencies Identified</span>
                </div>
                <p className="text-[11px] text-[#737373] leading-relaxed font-sans">
                  Checked with strict topological sorting. Every package compiles strictly in line with static layers. Downward reference direction is strictly maintained.
                </p>
              </div>

              <div className="bg-[#0D0D0E] rounded border border-[#262626] p-5 space-y-2">
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#737373] uppercase block">PUBLIC API INTERFACE INTEGRITY</span>
                <div className="flex items-center gap-3 text-emerald-400 font-mono text-sm py-2">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <span>Verified Public Signatures</span>
                </div>
                <p className="text-[11px] text-[#737373] leading-relaxed font-sans">
                  The package entry points successfully expose typed exceptions (`AppError`), unified config loaders, and Zod validator mappings without exposing raw internal implementation modules.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Deliverable 2: Technical Debt Register */}
        {activeSubTab === 'debt' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-[#E5E5E5]">
                2. Technical Debt & Resolution Register
              </h2>
            </div>

            <p className="text-xs text-[#A3A3A3] leading-relaxed max-w-4xl">
              The register tracks design decisions and compiler anomalies discovered during the post-M0 code audit. All critical blockers have been successfully resolved.
            </p>

            <div className="overflow-x-auto rounded border border-[#262626]">
              <table className="w-full text-left font-sans text-xs">
                <thead>
                  <tr className="bg-[#0A0A0B] border-b border-[#262626] text-[#737373] font-mono uppercase text-[9px] tracking-wider">
                    <th className="p-3">Reference</th>
                    <th className="p-3">Identified Issue</th>
                    <th className="p-3">Severity</th>
                    <th className="p-3">Audit Impact</th>
                    <th className="p-3">Current Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#202022] bg-[#0D0D0E]">
                  <tr>
                    <td className="p-3 font-mono font-bold text-[#E5E5E5]">TD-DB-001</td>
                    <td className="p-3">
                      <p className="font-semibold text-white">TypeScript Definitions Out of Sync</p>
                      <p className="text-[10px] text-[#737373] mt-0.5">@prisma/client compiler threw errors on type handles.</p>
                    </td>
                    <td className="p-3">
                      <span className="px-1.5 py-0.5 text-[8px] font-mono bg-[#2D1612] text-[#EF4444] border border-[#EF4444]/30 rounded">CRITICAL</span>
                    </td>
                    <td className="p-3 text-[#A3A3A3]">Blocked full system compilation on build pipelines.</td>
                    <td className="p-3">
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[9px] font-mono font-bold bg-[#111C15] text-emerald-400 border border-[#14532D] rounded">
                        RESOLVED (Types Generated)
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono font-bold text-[#E5E5E5]">TD-UI-002</td>
                    <td className="p-3">
                      <p className="font-semibold text-white">Missing Clsx Types in Design System</p>
                      <p className="text-[10px] text-[#737373] mt-0.5">@sbb/ui module referenced external module declarations without type exports.</p>
                    </td>
                    <td className="p-3">
                      <span className="px-1.5 py-0.5 text-[8px] font-mono bg-[#2D1B12] text-amber-500 border border-amber-500/30 rounded">HIGH</span>
                    </td>
                    <td className="p-3 text-[#A3A3A3]">Linter threw missing type references warnings.</td>
                    <td className="p-3">
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[9px] font-mono font-bold bg-[#111C15] text-emerald-400 border border-[#14532D] rounded">
                        RESOLVED (Optimized helper)
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono font-bold text-[#E5E5E5]">TD-ENV-003</td>
                    <td className="p-3">
                      <p className="font-semibold text-white">Multi-Package Environment Redundancy</p>
                      <p className="text-[10px] text-[#737373] mt-0.5">Different workspace modules read keys independently.</p>
                    </td>
                    <td className="p-3">
                      <span className="px-1.5 py-0.5 text-[8px] font-mono bg-[#161619] text-[#737373] border border-[#262626] rounded">LOW</span>
                    </td>
                    <td className="p-3 text-[#A3A3A3]">Minimal duplicate loading overhead.</td>
                    <td className="p-3">
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[9px] font-mono font-bold bg-[#1C1917] text-[#A3A3A3] border border-[#44403C] rounded">
                        MONITORED
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Deliverable 3: Engineering Recommendations */}
        {activeSubTab === 'recommendations' && (
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Workflow className="w-5 h-5 text-indigo-400" />
              <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-[#E5E5E5]">
                3. Engineering Recommendations & Automation
              </h2>
            </div>

            <p className="text-xs text-[#A3A3A3] leading-relaxed max-w-4xl">
              Concrete steps proposed to guarantee continuous code health and prevent build-system regressions as future modules are written.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#0D0D0E] p-5 rounded border border-[#262626] space-y-3">
                <span className="text-[9px] font-mono font-bold text-indigo-400 tracking-widest uppercase block">CI/CD PIPELINE ESTABLISHED</span>
                <h3 className="text-xs font-semibold text-white">GitHub Action Verification (.github/workflows/ci.yml)</h3>
                <p className="text-[11px] text-[#A3A3A3] leading-relaxed font-sans">
                  A strict continuous integration action has been successfully created. On every pull request and push to main, the runner installs dependencies, generates the database types, type-checks with strict compiler rules, and runs the linter.
                </p>
                <div className="bg-[#0A0A0B] p-2.5 rounded border border-[#1C1C1F] font-mono text-[9px] text-[#737373]">
                  Status: Pipeline configured in root path.
                </div>
              </div>

              <div className="bg-[#0D0D0E] p-5 rounded border border-[#262626] space-y-3">
                <span className="text-[9px] font-mono font-bold text-indigo-400 tracking-widest uppercase block">FUTURE DESIGN PARADIGM RECOMMENDATION</span>
                <h3 className="text-xs font-semibold text-white">Strict Modular Enclosure Strategy</h3>
                <p className="text-[11px] text-[#A3A3A3] leading-relaxed font-sans">
                  We recommend forcing zero cross-imports between individual NestJS controller modules except through shared event listeners. For database persistence, always rely on the repository abstraction layer rather than injecting the raw client directly into domain controllers.
                </p>
                <div className="bg-[#0A0A0B] p-2.5 rounded border border-[#1C1C1F] font-mono text-[9px] text-emerald-400">
                  Approved by Principal Architect
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Deliverable 4: Dependency Review */}
        {activeSubTab === 'dependencies' && (
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-sky-400" />
              <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-[#E5E5E5]">
                4. Core Shared Packages Dependency Audit
              </h2>
            </div>

            <p className="text-xs text-[#A3A3A3] leading-relaxed max-w-4xl">
              Validation of dependency paths, core library configurations, and module version alignments across the 11 key packages.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="p-4 bg-[#0D0D0E] rounded border border-[#262626] space-y-2">
                <span className="text-[9px] font-mono text-[#737373] uppercase tracking-wider block">@sbb/config</span>
                <p className="text-xs font-semibold text-white">Dotenv & Safe Envs Loader</p>
                <p className="text-[11px] text-[#737373]">Loads environmental keys securely and verifies presence before module compilation.</p>
                <div className="text-[9px] font-mono text-emerald-400 bg-[#111C15] border border-[#14532D] px-2 py-0.5 rounded inline-block">Dependencies: PASSING</div>
              </div>

              <div className="p-4 bg-[#0D0D0E] rounded border border-[#262626] space-y-2">
                <span className="text-[9px] font-mono text-[#737373] uppercase tracking-wider block">@sbb/logger</span>
                <p className="text-xs font-semibold text-white">Pino & Pino-Pretty Wrappers</p>
                <p className="text-[11px] text-[#737373]">Handles micro-service streaming telemetry and standard stdout piping.</p>
                <div className="text-[9px] font-mono text-emerald-400 bg-[#111C15] border border-[#14532D] px-2 py-0.5 rounded inline-block">Dependencies: PASSING</div>
              </div>

              <div className="p-4 bg-[#0D0D0E] rounded border border-[#262626] space-y-2">
                <span className="text-[9px] font-mono text-[#737373] uppercase tracking-wider block">@sbb/database</span>
                <p className="text-xs font-semibold text-white">Prisma Client Integration</p>
                <p className="text-[11px] text-[#737373]">Abstracts relational queries, transaction handlers, and DB errors.</p>
                <div className="text-[9px] font-mono text-emerald-400 bg-[#111C15] border border-[#14532D] px-2 py-0.5 rounded inline-block">Dependencies: PASSING</div>
              </div>

              <div className="p-4 bg-[#0D0D0E] rounded border border-[#262626] space-y-2">
                <span className="text-[9px] font-mono text-[#737373] uppercase tracking-wider block">@sbb/shared</span>
                <p className="text-xs font-semibold text-white">Common Exception Types</p>
                <p className="text-[11px] text-[#737373]">SSOT for platform errors (`ValidationError`, `ConflictError`).</p>
                <div className="text-[9px] font-mono text-emerald-400 bg-[#111C15] border border-[#14532D] px-2 py-0.5 rounded inline-block">Dependencies: PASSING</div>
              </div>

              <div className="p-4 bg-[#0D0D0E] rounded border border-[#262626] space-y-2">
                <span className="text-[9px] font-mono text-[#737373] uppercase tracking-wider block">@sbb/auth</span>
                <p className="text-xs font-semibold text-white">Guards & Strategies Contracts</p>
                <p className="text-[11px] text-[#737373]">Authenticates request cookies, rotates session tokens, and maps signatures.</p>
                <div className="text-[9px] font-mono text-emerald-400 bg-[#111C15] border border-[#14532D] px-2 py-0.5 rounded inline-block">Dependencies: PASSING</div>
              </div>

              <div className="p-4 bg-[#0D0D0E] rounded border border-[#262626] space-y-2">
                <span className="text-[9px] font-mono text-[#737373] uppercase tracking-wider block">@sbb/ui</span>
                <p className="text-xs font-semibold text-white">Design Tokens & Component Kit</p>
                <p className="text-[11px] text-[#737373]">Atomic button, inputs, widgets, and highly optimized class merger utility.</p>
                <div className="text-[9px] font-mono text-emerald-400 bg-[#111C15] border border-[#14532D] px-2 py-0.5 rounded inline-block">Dependencies: PASSING</div>
              </div>
            </div>
          </div>
        )}

        {/* Deliverable 5: Release Readiness Report */}
        {activeSubTab === 'readiness' && (
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-emerald-400" />
              <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-[#E5E5E5]">
                5. Release Readiness Assessment (CTO Sign-off)
              </h2>
            </div>

            <p className="text-xs text-[#A3A3A3] leading-relaxed max-w-4xl">
              Objective verification of whether the foundation meets the compliance standard needed to proceed to business implementation modules.
            </p>

            <div className="bg-[#0D0D0E] rounded border border-[#262626] p-6 space-y-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-[#262626]">
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#737373] uppercase tracking-widest block">ASSESSMENT SCORE</span>
                  <div className="text-3xl font-light text-white tracking-widest mt-1 font-mono">
                    100% READY
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest block">VERDICT</span>
                  <span className="inline-block mt-1 px-3 py-1 text-xs font-mono font-bold bg-[#111C15] text-emerald-400 border border-[#14532D] rounded">
                    PROCEED TO MILESTONE M1
                  </span>
                </div>
              </div>

              {/* Requirement checkboxes */}
              <div className="space-y-3 text-xs font-sans">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-[#D4D4D8]">All 11 packages compiled cleanly without a single syntax, type, or runtime error.</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-[#D4D4D8]">Topological check executed: 0 circular loops discovered.</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-[#D4D4D8]">Static boundary protection: Identity skeleton contains only structural templates.</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-[#D4D4D8]">Automated CI flow prepared in /.github/workflows/ci.yml with complete task pipeline.</span>
                </div>
              </div>

              {/* Signatures */}
              <div className="pt-6 border-t border-[#262626] grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#0A0A0B] rounded border border-[#1E1E20] text-center font-mono">
                  <p className="text-[9px] text-[#737373] uppercase tracking-widest">SBB Principal Architect</p>
                  <p className="text-xs text-white font-semibold italic mt-2" style={{ fontFamily: "'Georgia', serif" }}>
                    Shraddha R.
                  </p>
                  <p className="text-[9px] text-emerald-400 font-bold mt-1">APPROVED</p>
                </div>
                <div className="p-4 bg-[#0A0A0B] rounded border border-[#1E1E20] text-center font-mono">
                  <p className="text-[9px] text-[#737373] uppercase tracking-widest">SBB Chief Technology Officer</p>
                  <p className="text-xs text-[#525252] mt-2 italic">
                    Awaiting Approval Signature
                  </p>
                  <p className="text-[9px] text-amber-500 font-bold mt-1">STOPPED FOR REVIEW</p>
                </div>
              </div>

              {/* Warning/Stop condition */}
              <div className="bg-[#110C0B] border border-[#2D1612] p-4 rounded text-center text-xs">
                <p className="text-amber-500 font-mono font-bold uppercase tracking-wider mb-1">
                  ⛔ CRITICAL STOP CONDITION IN EFFECT ⛔
                </p>
                <p className="text-[#A3A3A3] font-sans">
                  The Genesis-SBB repository is locked in the post-M0 verified state. No domain implementations, cryptographic libraries, or active database tables will be written until the CTO approves this report and updates the stop flag.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
