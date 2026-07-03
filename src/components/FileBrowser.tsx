import { useState } from 'react';
import { FileNode } from '../types';
import { FileCode, Folder, Copy, Check, Terminal, Info, ChevronRight } from 'lucide-react';

interface FileBrowserProps {
  files: FileNode[];
  configFiles: FileNode[];
  loggerFiles: FileNode[];
  sharedFiles: FileNode[];
  databaseFiles: FileNode[];
  authFiles: FileNode[];
  typesFiles: FileNode[];
  validationFiles?: FileNode[];
  testingFiles?: FileNode[];
  utilsFiles?: FileNode[];
  uiFiles?: FileNode[];
}

export function FileBrowser({ files, configFiles, loggerFiles, sharedFiles, databaseFiles, authFiles, typesFiles, validationFiles = [], testingFiles = [], utilsFiles = [], uiFiles = [] }: FileBrowserProps) {
  const [activePackage, setActivePackage] = useState<'identity' | 'config' | 'logger' | 'shared' | 'database' | 'auth' | 'types' | 'validation' | 'testing' | 'utils' | 'ui'>('ui');
  const [searchQuery, setSearchQuery] = useState('');

  const activeFiles = 
    activePackage === 'identity' 
      ? files 
      : activePackage === 'config' 
        ? configFiles 
        : activePackage === 'logger'
          ? loggerFiles
          : activePackage === 'shared'
            ? sharedFiles
            : activePackage === 'database'
              ? databaseFiles
              : activePackage === 'auth'
                ? authFiles
                : activePackage === 'types'
                  ? typesFiles
                  : activePackage === 'validation'
                    ? validationFiles
                    : activePackage === 'testing'
                      ? testingFiles
                      : activePackage === 'utils'
                        ? utilsFiles
                        : uiFiles;

  const [selectedFile, setSelectedFile] = useState<FileNode>(() => (uiFiles && uiFiles.length > 0 ? uiFiles[0] : files[0]));
  const [copied, setCopied] = useState(false);

  // Combine all files for global search
  const allPackagesFiles = [
    ...files.map(f => ({ ...f, pkg: 'identity' as const })),
    ...configFiles.map(f => ({ ...f, pkg: 'config' as const })),
    ...loggerFiles.map(f => ({ ...f, pkg: 'logger' as const })),
    ...sharedFiles.map(f => ({ ...f, pkg: 'shared' as const })),
    ...databaseFiles.map(f => ({ ...f, pkg: 'database' as const })),
    ...authFiles.map(f => ({ ...f, pkg: 'auth' as const })),
    ...typesFiles.map(f => ({ ...f, pkg: 'types' as const })),
    ...validationFiles.map(f => ({ ...f, pkg: 'validation' as const })),
    ...testingFiles.map(f => ({ ...f, pkg: 'testing' as const })),
    ...utilsFiles.map(f => ({ ...f, pkg: 'utils' as const })),
    ...uiFiles.map(f => ({ ...f, pkg: 'ui' as const })),
  ];

  const filteredFiles = searchQuery.trim() === ''
    ? activeFiles
    : allPackagesFiles.filter(file => 
        file.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        file.path.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const handlePackageSwitch = (pkg: 'identity' | 'config' | 'logger' | 'shared' | 'database' | 'auth' | 'types' | 'validation' | 'testing' | 'utils' | 'ui') => {
    setSearchQuery('');
    setActivePackage(pkg);
    const targetFiles = 
      pkg === 'identity' 
        ? files 
        : pkg === 'config' 
          ? configFiles 
          : pkg === 'logger'
            ? loggerFiles
            : pkg === 'shared'
              ? sharedFiles
              : pkg === 'database'
                ? databaseFiles
                : pkg === 'auth'
                  ? authFiles
                  : pkg === 'types'
                    ? typesFiles
                    : pkg === 'validation'
                      ? validationFiles
                      : pkg === 'testing'
                        ? testingFiles
                        : pkg === 'utils'
                          ? utilsFiles
                          : uiFiles;
    setSelectedFile(targetFiles[0]);
  };

  const handleFileSelect = (file: FileNode & { pkg?: 'identity' | 'config' | 'logger' | 'shared' | 'database' | 'auth' | 'types' | 'validation' | 'testing' | 'utils' | 'ui' }) => {
    if (file.pkg) {
      setActivePackage(file.pkg);
    }
    setSelectedFile(file);
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
          <p className="text-[11px] text-[#A3A3A3] mt-1 font-sans mb-3">
            Explore the created foundation files on disk.
          </p>
          
          {/* Global Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search files by name or path..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-8 pl-8 pr-8 text-xs bg-[#0D0D0E] border border-[#262626] focus:border-[#44403C] rounded text-[#E5E5E5] placeholder-[#525252] focus:outline-none transition-all font-mono"
            />
            <div className="absolute left-2.5 top-2.5 flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-[#525252]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1.5 text-[#737373] hover:text-white text-sm font-mono cursor-pointer"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Package Selector */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-1 p-2 bg-[#0A0A0B] border-b border-[#262626]">
          <button
            onClick={() => handlePackageSwitch('identity')}
            id="pkg-btn-identity"
            className={`py-1.5 text-[8px] font-mono uppercase font-bold tracking-wider rounded transition-all cursor-pointer text-center ${
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
            className={`py-1.5 text-[8px] font-mono uppercase font-bold tracking-wider rounded transition-all cursor-pointer text-center ${
              activePackage === 'config'
                ? 'bg-[#1C1917] text-white border border-[#44403C] shadow'
                : 'text-[#737373] hover:text-[#A3A3A3] hover:bg-[#0D0D0E]'
            }`}
          >
            @sbb/config
          </button>
          <button
            onClick={() => handlePackageSwitch('logger')}
            id="pkg-btn-logger"
            className={`py-1.5 text-[8px] font-mono uppercase font-bold tracking-wider rounded transition-all cursor-pointer text-center ${
              activePackage === 'logger'
                ? 'bg-[#1C1917] text-white border border-[#44403C] shadow'
                : 'text-[#737373] hover:text-[#A3A3A3] hover:bg-[#0D0D0E]'
            }`}
          >
            @sbb/logger
          </button>
          <button
            onClick={() => handlePackageSwitch('shared')}
            id="pkg-btn-shared"
            className={`py-1.5 text-[8px] font-mono uppercase font-bold tracking-wider rounded transition-all cursor-pointer text-center ${
              activePackage === 'shared'
                ? 'bg-[#1C1917] text-white border border-[#44403C] shadow'
                : 'text-[#737373] hover:text-[#A3A3A3] hover:bg-[#0D0D0E]'
            }`}
          >
            @sbb/shared
          </button>
          <button
            onClick={() => handlePackageSwitch('database')}
            id="pkg-btn-database"
            className={`py-1.5 text-[8px] font-mono uppercase font-bold tracking-wider rounded transition-all cursor-pointer text-center ${
              activePackage === 'database'
                ? 'bg-[#1C1917] text-white border border-[#44403C] shadow'
                : 'text-[#737373] hover:text-[#A3A3A3] hover:bg-[#0D0D0E]'
            }`}
          >
            @sbb/database
          </button>
          <button
            onClick={() => handlePackageSwitch('auth')}
            id="pkg-btn-auth"
            className={`py-1.5 text-[8px] font-mono uppercase font-bold tracking-wider rounded transition-all cursor-pointer text-center ${
              activePackage === 'auth'
                ? 'bg-[#1C1917] text-white border border-[#44403C] shadow'
                : 'text-[#737373] hover:text-[#A3A3A3] hover:bg-[#0D0D0E]'
            }`}
          >
            @sbb/auth
          </button>
          <button
            onClick={() => handlePackageSwitch('types')}
            id="pkg-btn-types"
            className={`py-1.5 text-[8px] font-mono uppercase font-bold tracking-wider rounded transition-all cursor-pointer text-center ${
              activePackage === 'types'
                ? 'bg-[#1C1917] text-white border border-[#44403C] shadow'
                : 'text-[#737373] hover:text-[#A3A3A3] hover:bg-[#0D0D0E]'
            }`}
          >
            @sbb/types
          </button>
          <button
            onClick={() => handlePackageSwitch('validation')}
            id="pkg-btn-validation"
            className={`py-1.5 text-[8px] font-mono uppercase font-bold tracking-wider rounded transition-all cursor-pointer text-center ${
              activePackage === 'validation'
                ? 'bg-[#1C1917] text-white border border-[#44403C] shadow'
                : 'text-[#737373] hover:text-[#A3A3A3] hover:bg-[#0D0D0E]'
            }`}
          >
            @sbb/validation
          </button>
          <button
            onClick={() => handlePackageSwitch('testing')}
            id="pkg-btn-testing"
            className={`py-1.5 text-[8px] font-mono uppercase font-bold tracking-wider rounded transition-all cursor-pointer text-center ${
              activePackage === 'testing'
                ? 'bg-[#1C1917] text-white border border-[#44403C] shadow'
                : 'text-[#737373] hover:text-[#A3A3A3] hover:bg-[#0D0D0E]'
            }`}
          >
            @sbb/testing
          </button>
          <button
            onClick={() => handlePackageSwitch('utils')}
            id="pkg-btn-utils"
            className={`py-1.5 text-[8px] font-mono uppercase font-bold tracking-wider rounded transition-all cursor-pointer text-center ${
              activePackage === 'utils'
                ? 'bg-[#1C1917] text-white border border-[#44403C] shadow'
                : 'text-[#737373] hover:text-[#A3A3A3] hover:bg-[#0D0D0E]'
            }`}
          >
            @sbb/utils
          </button>
          <button
            onClick={() => handlePackageSwitch('ui')}
            id="pkg-btn-ui"
            className={`py-1.5 text-[8px] font-mono uppercase font-bold tracking-wider rounded transition-all cursor-pointer text-center ${
              activePackage === 'ui'
                ? 'bg-[#1C1917] text-white border border-[#44403C] shadow'
                : 'text-[#737373] hover:text-[#A3A3A3] hover:bg-[#0D0D0E]'
            }`}
          >
            @sbb/ui
          </button>
        </div>

        {/* Directory Listing */}
        <div className="p-3 overflow-y-auto flex-1 space-y-1 bg-[#0D0D0E]">
          {/* Virtual Root Folder or Search Status */}
          <div className="flex items-center gap-1.5 px-2 py-1 text-xs text-[#737373] font-mono">
            <Folder className="w-3.5 h-3.5 fill-[#1C1917] stroke-[#44403C]" />
            <span>
              {searchQuery.trim() !== '' 
                ? `Search: found ${filteredFiles.length} files`
                : (activePackage === 'identity' 
                  ? 'backend/api/src/modules/identity/' 
                  : activePackage === 'config' 
                    ? 'packages/config/' 
                    : activePackage === 'logger'
                      ? 'packages/logger/'
                      : activePackage === 'shared'
                        ? 'packages/shared/'
                        : activePackage === 'database'
                          ? 'packages/database/'
                          : activePackage === 'auth'
                            ? 'packages/auth/'
                            : activePackage === 'types'
                              ? 'packages/types/'
                              : activePackage === 'validation'
                                ? 'packages/validation/'
                                : activePackage === 'testing'
                                  ? 'packages/testing/'
                                  : activePackage === 'utils'
                                    ? 'packages/utils/'
                                    : 'packages/ui/')}
            </span>
          </div>

          <div className={`${searchQuery.trim() === '' ? 'pl-4' : ''} space-y-1`}>
            {filteredFiles.map((file) => {
              const isSelected = selectedFile.path === file.path;
              return (
                <button
                  key={file.path}
                  id={`file-btn-${file.name.replace(/\./g, '-')}`}
                  onClick={() => handleFileSelect(file)}
                  className={`w-full text-left flex items-start gap-2.5 px-3 py-2 rounded transition-all text-xs font-sans ${
                    isSelected
                      ? 'bg-[#1C1917] border border-[#44403C] text-white font-medium shadow'
                      : 'hover:bg-[#161619] border border-transparent text-[#A3A3A3]'
                  }`}
                >
                  <FileCode className={`w-4 h-4 shrink-0 mt-0.5 ${isSelected ? 'text-white' : 'text-[#525252]'}`} />
                  <div className="overflow-hidden w-full">
                    <p className="truncate font-mono text-[11px] flex justify-between items-center gap-2">
                      <span className="truncate">{file.name}</span>
                      {'pkg' in file && searchQuery.trim() !== '' && (
                        <span className="text-[8px] uppercase tracking-wider font-mono text-[#737373] bg-[#161619] px-1.5 py-0.5 rounded border border-[#262626] shrink-0">
                          {file.pkg}
                        </span>
                      )}
                    </p>
                    <p className="text-[10px] text-[#737373] truncate mt-0.5 font-normal">
                      {searchQuery.trim() !== '' ? file.path : file.role}
                    </p>
                  </div>
                </button>
              );
            })}
            {filteredFiles.length === 0 && (
              <div className="text-center py-12 text-[#525252] font-mono text-xs">
                No matching files found.
              </div>
            )}
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
