import { useState } from 'react';
import { FileNode } from '../types';
import { FileCode, Folder, Copy, Check, Terminal, Info, ChevronRight } from 'lucide-react';

interface FileBrowserProps {
  files: FileNode[];
  configFiles: FileNode[];
}

export function FileBrowser({ files, configFiles }: FileBrowserProps) {
  const [activePackage, setActivePackage] = useState<'identity' | 'config'>('identity');
  const activeFiles = activePackage === 'identity' ? files : configFiles;
  const [selectedFile, setSelectedFile] = useState<FileNode>(files[0]);
  const [copied, setCopied] = useState(false);

  const handlePackageSwitch = (pkg: 'identity' | 'config') => {
    setActivePackage(pkg);
    const targetFiles = pkg === 'identity' ? files : configFiles;
    setSelectedFile(targetFiles[0]);
  };

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  // Basic lightweight custom syntax highlighter for NestJS code
  const highlightCode = (code: string) => {
    return code.split('\n').map((line, idx) => {
      // Color decorators
      let formattedLine = line
        .replace(/(@[a-zA-Z]+)/g, '<span class="text-[#E0A82E] font-medium">$1</span>')
        // Color import / export / class / constructor / return
        .replace(/\b(import|from|export|class|constructor|private|readonly|async|await|return|promise|string|boolean|void|any)\b/g, '<span class="text-[#F43F5E] font-medium">$1</span>')
        // Color strings
        .replace(/(['"`].*?['"`])/g, '<span class="text-[#34D399]">$1</span>')
        // Color comments
        .replace(/(\/\/.*)$/g, '<span class="text-[#525252] italic">$1</span>')
        .replace(/(\/\*\*[\s\S]*?\*\/)/g, '<span class="text-[#525252] italic">$1</span>');

      return (
        <div key={idx} className="table-row">
          <span className="table-cell text-right pr-4 text-[#525252] font-mono text-xs select-none w-8 border-r border-[#262626]">
            {idx + 1}
          </span>
          <span 
            className="table-cell pl-4 font-mono text-xs text-[#E5E5E5] whitespace-pre"
            dangerouslySetInnerHTML={{ __html: formattedLine }}
          />
        </div>
      );
    });
  };

  return (
    <div className="bg-[#0F0F11] rounded-xl border border-[#262626] overflow-hidden grid grid-cols-1 lg:grid-cols-12" id="file-browser-panel">
      {/* File Sidebar */}
      <div className="lg:col-span-4 border-r border-[#262626] flex flex-col h-[580px]">
        <div className="p-4 border-b border-[#262626] bg-[#0A0A0B]">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[#737373]" />
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#737373]">
              Module Repository
            </span>
          </div>
          <p className="text-[11px] text-[#A3A3A3] mt-1 font-sans">
            Explore the created foundation files on disk.
          </p>
        </div>

        {/* Package Selector */}
        <div className="grid grid-cols-2 gap-1 p-2 bg-[#0A0A0B] border-b border-[#262626]">
          <button
            onClick={() => handlePackageSwitch('identity')}
            id="pkg-btn-identity"
            className={`py-1.5 text-[9px] font-mono uppercase font-bold tracking-wider rounded transition-all cursor-pointer ${
              activePackage === 'identity'
                ? 'bg-[#1C1917] text-white border border-[#44403C] shadow'
                : 'text-[#737373] hover:text-[#A3A3A3] hover:bg-[#0D0D0E]'
            }`}
          >
            @sbb/identity
          </button>
          <button
            onClick={() => handlePackageSwitch('config')}
            id="pkg-btn-config"
            className={`py-1.5 text-[9px] font-mono uppercase font-bold tracking-wider rounded transition-all cursor-pointer ${
              activePackage === 'config'
                ? 'bg-[#1C1917] text-white border border-[#44403C] shadow'
                : 'text-[#737373] hover:text-[#A3A3A3] hover:bg-[#0D0D0E]'
            }`}
          >
            @sbb/config
          </button>
        </div>

        {/* Directory Listing */}
        <div className="p-3 overflow-y-auto flex-1 space-y-1 bg-[#0D0D0E]">
          {/* Virtual Root Folder */}
          <div className="flex items-center gap-1.5 px-2 py-1 text-xs text-[#737373] font-mono">
            <Folder className="w-3.5 h-3.5 fill-[#1C1917] stroke-[#44403C]" />
            <span>{activePackage === 'identity' ? 'backend/api/src/modules/identity/' : 'packages/config/'}</span>
          </div>

          <div className="pl-4 space-y-1">
            {activeFiles.map((file) => {
              const isSelected = selectedFile.path === file.path;
              return (
                <button
                  key={file.path}
                  id={`file-btn-${file.name.replace(/\./g, '-')}`}
                  onClick={() => setSelectedFile(file)}
                  className={`w-full text-left flex items-start gap-2.5 px-3 py-2 rounded transition-all text-xs font-sans ${
                    isSelected
                      ? 'bg-[#1C1917] border border-[#44403C] text-white font-medium shadow'
                      : 'hover:bg-[#161619] border border-transparent text-[#A3A3A3]'
                  }`}
                >
                  <FileCode className={`w-4 h-4 shrink-0 mt-0.5 ${isSelected ? 'text-white' : 'text-[#525252]'}`} />
                  <div className="overflow-hidden">
                    <p className="truncate font-mono text-[11px]">{file.name}</p>
                    <p className="text-[10px] text-[#737373] truncate mt-0.5 font-normal">{file.role}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Code Editor Preview */}
      <div className="lg:col-span-8 flex flex-col h-[580px] bg-[#0A0A0B]">
        {/* Editor Title Bar */}
        <div className="p-4 border-b border-[#262626] bg-[#0F0F11] flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-hidden">
            <ChevronRight className="w-4 h-4 text-[#737373]" />
            <div className="overflow-hidden">
              <span className="text-[10px] font-mono text-[#737373] block truncate uppercase tracking-wider">
                {selectedFile.path}
              </span>
              <span className="text-xs font-semibold text-white font-mono block">
                {selectedFile.name}
              </span>
            </div>
          </div>
          <button
            onClick={() => handleCopy(selectedFile.content)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-[#44403C] bg-[#1C1917] hover:bg-[#2E2A27] text-[#F5F5F4] text-[11px] font-mono tracking-wider uppercase transition-all active:scale-95 cursor-pointer"
            title="Copy file contents"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-medium text-[11px]">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#A3A3A3]" />
                <span className="text-[11px]">Copy Code</span>
              </>
            )}
          </button>
        </div>

        {/* File Description Box */}
        <div className="mx-4 mt-4 p-3 bg-[#161619] border border-[#262626] rounded flex items-start gap-2.5">
          <Info className="w-4 h-4 text-[#A3A3A3] shrink-0 mt-0.5" />
          <div>
            <span className="text-[9px] font-mono font-bold tracking-widest uppercase text-white block">
              Architectural Context ({selectedFile.role})
            </span>
            <p className="text-[#A3A3A3] text-[11px] mt-0.5 font-sans leading-relaxed">
              {selectedFile.description}
            </p>
          </div>
        </div>

        {/* Code Content Container */}
        <div className="flex-1 m-4 p-4 bg-[#0D0D0E] border border-[#262626] rounded overflow-auto shadow-inner">
          <div className="table w-full">
            {highlightCode(selectedFile.content)}
          </div>
        </div>
      </div>
    </div>
  );
}
