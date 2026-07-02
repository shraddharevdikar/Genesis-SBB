import { TicketDetails } from '../types';
import { Ticket, Shield, Clock, FileText, CheckCircle2, User, HelpCircle } from 'lucide-react';

interface TicketDetailProps {
  details: TicketDetails;
}

export function TicketDetail({ details }: TicketDetailProps) {
  return (
    <div className="bg-[#0F0F11] rounded-xl border border-[#262626] overflow-hidden" id="ticket-detail-panel">
      {/* Ticket Header Banner */}
      <div className="bg-[#0A0A0B] px-6 py-5 text-[#E5E5E5] flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#262626]">
        <div className="flex items-center gap-3">
          <div className="bg-[#1C1917] text-[#D4D4D8] p-2 rounded border border-[#44403C]">
            <Ticket className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs tracking-widest text-white font-bold bg-[#1C1917] border border-[#44403C] px-2 py-0.5 rounded">
                {details.id}
              </span>
              <span className="text-[10px] text-[#737373] tracking-widest uppercase font-mono">Priority: CRITICAL</span>
            </div>
            <h1 className="text-xl font-light text-white tracking-wide mt-1 italic" style={{ fontFamily: "'Georgia', serif" }}>
              {details.title}
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-mono tracking-widest bg-[#1C1917] text-[#F5F5F4] border border-[#44403C] rounded">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
            STRUCTURE COMPLETE
          </span>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Quick Parameters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4" id="params-grid">
          <div className="bg-[#0D0D0E] p-4 rounded border border-[#262626] flex items-center gap-3">
            <Shield className="w-4.5 h-4.5 text-[#737373] shrink-0" />
            <div>
              <p className="text-[10px] uppercase tracking-wider text-[#737373] font-mono">Module Owner</p>
              <p className="text-xs font-semibold text-[#D4D4D8] truncate">{details.author}</p>
            </div>
          </div>
          <div className="bg-[#0D0D0E] p-4 rounded border border-[#262626] flex items-center gap-3">
            <User className="w-4.5 h-4.5 text-[#737373] shrink-0" />
            <div>
              <p className="text-[10px] uppercase tracking-wider text-[#737373] font-mono">Assignee Eng</p>
              <p className="text-xs font-semibold text-[#D4D4D8] truncate">{details.assignee}</p>
            </div>
          </div>
          <div className="bg-[#0D0D0E] p-4 rounded border border-[#262626] flex items-center gap-3">
            <Clock className="w-4.5 h-4.5 text-[#737373] shrink-0" />
            <div>
              <p className="text-[10px] uppercase tracking-wider text-[#737373] font-mono">Target Directory</p>
              <p className="text-xs font-mono font-semibold text-[#D4D4D8] truncate">{details.modulePath}</p>
            </div>
          </div>
        </div>

        {/* Objective & Constraint Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Technical Objective */}
          <div className="lg:col-span-7 space-y-2">
            <h2 className="text-[11px] uppercase tracking-widest font-mono text-[#737373] font-bold flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-[#737373]" />
              Technical Objective
            </h2>
            <div className="bg-[#0D0D0E] rounded border border-[#262626] p-4">
              <p className="text-[#A3A3A3] text-sm leading-relaxed">
                {details.objective}
              </p>
            </div>
          </div>

          {/* Constraint Policy Warning Box */}
          <div className="lg:col-span-5 space-y-2">
            <h2 className="text-[11px] uppercase tracking-widest font-mono text-[#EF4444] font-bold flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[#EF4444]" />
              Constraint Policy
            </h2>
            <div className="p-4 bg-[#110C0B] border border-[#2D1612] rounded flex flex-col justify-center h-[calc(100%-24px)]">
              <span className="text-[10px] font-mono tracking-widest font-bold text-[#EF4444] uppercase block mb-1">STRICT COMPLIANCE</span>
              <p className="text-xs text-[#A3A3A3] italic leading-relaxed">
                Strictly no database entities, credential hashing, endpoints, or active business logic in this deliverable. Establish structure and boundaries only.
              </p>
            </div>
          </div>
        </div>

        {/* Requirements Checklist */}
        <div className="space-y-3">
          <h2 className="text-[11px] uppercase tracking-widest font-mono text-[#737373] font-bold flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#A3A3A3]" />
            Deliverables & Verification Rules
          </h2>
          <div className="bg-[#0D0D0E] border border-[#262626] rounded divide-y divide-[#262626]">
            {details.requirements.map((req, idx) => (
              <div key={idx} className="p-3 flex items-start gap-3 hover:bg-[#161619] transition-colors">
                <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded bg-[#1C1917] border border-[#44403C] flex items-center justify-center text-[10px] text-white font-bold font-mono">
                  ✓
                </span>
                <span className="text-[#D4D4D8] text-xs leading-relaxed font-sans">{req}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Responsibilities Map */}
        <div className="space-y-3">
          <h2 className="text-[11px] uppercase tracking-widest font-mono text-[#737373] font-bold flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-[#737373]" />
            Module Domain Architecture
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="responsibilities-grid">
            {details.responsibilities.map((resp, idx) => (
              <div key={idx} className="p-4 bg-[#0D0D0E] rounded border border-[#262626] flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xs font-semibold text-white tracking-wide">{resp.title}</h3>
                  <p className="text-[#A3A3A3] text-[11px] leading-relaxed mt-1">{resp.description}</p>
                </div>
                <div className="pt-2 border-t border-[#1E1E20] flex items-center justify-between">
                  <span className="text-[9px] font-mono tracking-wider text-[#525252]">DOMAIN BOUNDARY</span>
                  <span className="text-[10px] font-mono font-bold uppercase text-[#F5F5F4] bg-[#1C1917] border border-[#44403C] px-2 py-0.5 rounded">
                    {resp.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
