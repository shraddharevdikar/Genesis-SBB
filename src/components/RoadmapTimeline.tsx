import { useState } from 'react';
import { FutureTicket } from '../types';
import { Calendar, CheckCircle2, ChevronRight, Lock, Flag } from 'lucide-react';

interface RoadmapTimelineProps {
  tickets: FutureTicket[];
}

export function RoadmapTimeline({ tickets }: RoadmapTimelineProps) {
  const [activePhase, setActivePhase] = useState<string>(tickets[0].id);

  return (
    <div className="bg-[#0F0F11] rounded-xl border border-[#262626] p-6 space-y-6" id="roadmap-timeline-panel">
      <div>
        <h2 className="text-sm font-semibold tracking-tight text-white uppercase tracking-wider font-mono">
          SBB Platform Identity Integration Roadmap
        </h2>
        <p className="text-[#A3A3A3] text-xs mt-1">
          Detailed phase-by-phase planning. Each foundation element created in GEN-ID-001 acts as the container for future feature tickets.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Side Phases Nav */}
        <div className="lg:col-span-5 space-y-3">
          {tickets.map((ticket, idx) => {
            const isActive = activePhase === ticket.id;
            const isCompleted = idx === 0; // First ticket is current completed foundation
            
            return (
              <button
                key={ticket.id}
                id={`roadmap-btn-${ticket.id}`}
                onClick={() => setActivePhase(ticket.id)}
                className={`w-full text-left p-3.5 rounded border transition-all flex items-start gap-3.5 cursor-pointer ${
                  isActive
                    ? 'bg-[#1C1917] border-[#44403C] text-white shadow'
                    : 'bg-[#0D0D0E] hover:bg-[#161619] border-[#262626] text-[#A3A3A3]'
                }`}
              >
                <div className={`p-2 rounded shrink-0 ${
                  isActive 
                    ? 'bg-white/10' 
                    : isCompleted 
                      ? 'bg-[#110C0B] text-emerald-400 border border-[#2D1612]' 
                      : 'bg-[#161619] text-[#525252] border border-[#262626]'
                }`}>
                  {isCompleted ? (
                    <CheckCircle2 className="w-4 h-4" />
                  ) : (
                    <Lock className="w-4 h-4" />
                  )}
                </div>
                
                <div className="overflow-hidden">
                  <div className="flex items-center gap-1.5">
                    <span className={`text-[9px] font-mono font-bold uppercase tracking-wider ${
                      isActive ? 'text-white' : 'text-[#737373]'
                    }`}>
                      {ticket.id}
                    </span>
                    <span className={`text-[9px] font-medium font-mono uppercase tracking-widest ${
                      isActive ? 'text-[#A3A3A3]' : 'text-[#525252]'
                    }`}>
                      • {ticket.phase}
                    </span>
                  </div>
                  <h3 className={`text-xs font-semibold truncate mt-1 ${isActive ? 'text-white font-medium' : 'text-[#A3A3A3]'}`}>
                    {ticket.title}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Side Expanded Active Phase Specs */}
        {(() => {
          const selectedTicket = tickets.find((t) => t.id === activePhase) || tickets[0];
          const isSelectedCompleted = selectedTicket.id === 'GEN-ID-001';
          
          return (
            <div className="lg:col-span-7 bg-[#0D0D0E] rounded-xl border border-[#262626] p-5 space-y-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-mono font-semibold text-white bg-[#1C1917] border border-[#44403C] px-2 py-0.5 rounded">
                      {selectedTicket.id}
                    </span>
                    <span className="text-xs text-[#737373] font-sans">• Phase Details</span>
                  </div>
                  <h3 className="text-sm font-semibold text-white mt-1.5 font-sans">
                    {selectedTicket.title}
                  </h3>
                </div>

                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono tracking-wider rounded ${
                  isSelectedCompleted 
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/35' 
                    : 'bg-[#1C1917] text-[#A3A3A3] border border-[#44403C]'
                }`}>
                  {isSelectedCompleted ? 'COMPLETED' : 'PLANNED'}
                </span>
              </div>

              <div className="space-y-1.5">
                <span className="text-[9px] uppercase tracking-widest font-mono text-[#737373] block">Phase Description</span>
                <p className="text-[#A3A3A3] text-xs leading-relaxed font-sans bg-[#161619] p-3.5 rounded border border-[#262626]">
                  {selectedTicket.description}
                </p>
              </div>

              <div className="space-y-3">
                <span className="text-[9px] uppercase tracking-widest font-mono text-[#737373] block">Key Deliverables</span>
                <div className="space-y-2">
                  {selectedTicket.milestones.map((milestone, i) => (
                    <div key={i} className="flex items-center gap-2.5 bg-[#161619] px-3 py-2 rounded border border-[#262626]">
                      <span className="w-5 h-5 rounded bg-[#1C1917] border border-[#44403C] flex items-center justify-center text-[9px] text-white font-mono font-bold">
                        {i + 1}
                      </span>
                      <span className="text-[#D4D4D8] text-xs font-sans">{milestone}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 text-[10px] text-[#737373] font-mono bg-[#161619] border border-[#262626] p-2.5 rounded">
                <Calendar className="w-3.5 h-3.5 text-[#525252]" />
                <span>Target Release Schedule: Q3 2026 Core Platform Rollout</span>
              </div>
            </div>
          );
        })()}
      </div>
    </div>
  );
}
