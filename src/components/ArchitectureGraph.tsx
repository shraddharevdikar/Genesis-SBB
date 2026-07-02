import { useState } from 'react';
import { ArrowRight, ShieldAlert, KeyRound, Database, MessageSquare, Code, HelpCircle } from 'lucide-react';

interface ArchNode {
  id: string;
  label: string;
  file: string;
  role: string;
  desc: string;
  icon: any;
  tier: 'inbound' | 'security' | 'logic' | 'data' | 'pubsub';
  color: string;
  bgColor: string;
  borderColor: string;
}

export function ArchitectureGraph() {
  const [activeNode, setActiveNode] = useState<string>('controller');

  const nodes: ArchNode[] = [
    {
      id: 'client',
      label: 'Client / Web Request',
      file: 'External Call',
      role: 'Inbound Request',
      desc: 'An external HTTP POST request targets endpoints like /identity/register or /identity/login.',
      icon: ArrowRight,
      tier: 'inbound',
      color: 'text-[#A3A3A3]',
      bgColor: 'bg-[#161619]',
      borderColor: 'border-[#262626]',
    },
    {
      id: 'guard',
      label: 'AuthGuard',
      file: 'guards/auth.guard.ts',
      role: 'Authentication Layer',
      desc: 'Intercepts incoming calls, checks headers for JWT tokens, and protects endpoints from unauthorized users.',
      icon: ShieldAlert,
      tier: 'security',
      color: 'text-[#EF4444]',
      bgColor: 'bg-[#110C0B]',
      borderColor: 'border-[#2D1612]',
    },
    {
      id: 'controller',
      label: 'IdentityController',
      file: 'controllers/identity.controller.ts',
      role: 'Route Controller',
      desc: 'Binds routes, handles request parameters, validates body payloads via class-validator DTOs, and returns HTTP responses.',
      icon: Code,
      tier: 'logic',
      color: 'text-white',
      bgColor: 'bg-[#161619]',
      borderColor: 'border-[#262626]',
    },
    {
      id: 'service',
      label: 'IdentityService',
      file: 'services/identity.service.ts',
      role: 'Business Logic Orchestrator',
      desc: 'Coordinates core logic: issues auth tokens, manages passwords checks, checks system constraints, and dispatches event structures.',
      icon: KeyRound,
      tier: 'logic',
      color: 'text-[#A3A3A3]',
      bgColor: 'bg-[#161619]',
      borderColor: 'border-[#262626]',
    },
    {
      id: 'repository',
      label: 'IdentityRepository',
      file: 'repositories/identity.repository.ts',
      role: 'Data Access Object',
      desc: 'Abstracts database communication. Performs direct operations to find users, store hashes, and query states.',
      icon: Database,
      tier: 'data',
      color: 'text-emerald-400',
      bgColor: 'bg-[#161619]',
      borderColor: 'border-[#262626]',
    },
    {
      id: 'events',
      label: 'UserRegisteredEvent',
      file: 'events/user-registered.event.ts',
      role: 'Domain Event Dispatch',
      desc: 'Broad-castable domain payload dispatched asynchronously to listeners whenever a registration matches successfully.',
      icon: MessageSquare,
      tier: 'pubsub',
      color: 'text-amber-500',
      bgColor: 'bg-[#1F1D1A]',
      borderColor: 'border-[#3D3325]',
    },
  ];

  const currentNode = nodes.find(n => n.id === activeNode) || nodes[0];

  return (
    <div className="bg-[#0F0F11] rounded-xl border border-[#262626] p-6 space-y-6" id="architecture-graph-panel">
      <div>
        <h2 className="text-sm font-semibold tracking-tight text-white uppercase tracking-wider font-mono">
          Module Pipeline Architecture
        </h2>
        <p className="text-[#A3A3A3] text-xs mt-1">
          Interactive flow diagram showing how incoming requests traverse guards, controller routes, validation schemas, logic services, and database persistence.
        </p>
      </div>

      {/* Visual Canvas Board */}
      <div className="bg-[#0D0D0E] rounded-xl p-4 sm:p-6 border border-[#262626] flex flex-col xl:flex-row gap-6 items-stretch justify-center">
        
        {/* Connection pipeline map */}
        <div className="flex-1 flex flex-col md:flex-row xl:flex-col justify-between items-center gap-4 py-2 relative">
          
          {/* Connector lines behind nodes (desktop-only vertical line, tablet-only horizontal line) */}
          <div className="hidden xl:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-[#262626] -translate-x-1/2 -z-0"></div>
          
          {nodes.map((node, idx) => {
            const Icon = node.icon;
            const isSelected = activeNode === node.id;
            
            // Dynamic theme override
            let cardBg = isSelected ? 'bg-white text-black border-white' : `${node.bgColor} ${node.borderColor} text-[#D4D4D8] hover:bg-[#1A1A1D]`;
            let iconContainerBg = isSelected ? 'bg-black/10' : 'bg-[#0D0D0E] border-[#262626]';
            let textTitleColor = isSelected ? 'text-black' : 'text-white';
            let textSubtitleColor = isSelected ? 'text-neutral-700' : 'text-[#737373]';
            let iconColor = isSelected ? 'text-black' : node.color;

            return (
              <div key={node.id} className="relative z-10 w-full max-w-[240px]">
                <button
                  onClick={() => setActiveNode(node.id)}
                  id={`arch-node-${node.id}`}
                  className={`w-full text-left p-3.5 rounded border flex items-center gap-3 transition-all cursor-pointer ${cardBg}`}
                >
                  <div className={`p-1.5 rounded border ${iconContainerBg}`}>
                    <Icon className={`w-4 h-4 ${iconColor}`} />
                  </div>
                  <div className="overflow-hidden">
                    <p className={`text-[11px] font-semibold truncate ${textTitleColor}`}>
                      {node.label}
                    </p>
                    <p className={`text-[9px] font-mono truncate ${textSubtitleColor}`}>
                      {node.file}
                    </p>
                  </div>
                </button>
                {idx < nodes.length - 1 && (
                  <div className="md:hidden xl:hidden flex justify-center py-1">
                    <ArrowRight className="w-4 h-4 text-[#737373] rotate-90" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Selected Node Details Card */}
        <div className="xl:w-[320px] bg-[#0F0F11] border border-[#262626] rounded-xl p-5 shadow-sm flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="p-2 rounded bg-[#1C1917] border border-[#44403C]">
                {<currentNode.icon className={`w-5 h-5 ${currentNode.color}`} />}
              </span>
              <div>
                <span className="text-[9px] font-mono font-bold tracking-widest uppercase text-[#737373] block">
                  {currentNode.role}
                </span>
                <h3 className="text-xs font-bold text-white">
                  {currentNode.label}
                </h3>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-[9px] uppercase tracking-widest font-mono text-[#737373] block">Target Source File</span>
              <span className="inline-block px-2.5 py-1 rounded bg-[#0D0D0E] border border-[#262626] text-white font-mono text-[10px]">
                {currentNode.file}
              </span>
            </div>

            <div className="space-y-1.5">
              <span className="text-[9px] uppercase tracking-widest font-mono text-[#737373] block">Behavioral Spec</span>
              <p className="text-[#A3A3A3] text-xs leading-relaxed font-sans">
                {currentNode.desc}
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#262626] flex items-center gap-1.5 text-[10px] text-[#737373] font-mono">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Select any node to inspect specification</span>
          </div>
        </div>

      </div>
    </div>
  );
}
