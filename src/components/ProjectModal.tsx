import { useState } from 'react';
import { 
  X, 
  Trophy, 
  ExternalLink, 
  Layers, 
  Code2, 
  TrendingUp, 
  Users, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Calendar
} from 'lucide-react';
import { ProjectCaseStudy } from '../types';

interface ProjectModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
  onStartSimilarProject: (projectTitle: string) => void;
}

export function ProjectModal({ project, onClose, onStartSimilarProject }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'engineering' | 'team'>('overview');

  if (!project) return null;

  return (
    <div
      id="project-case-study-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
    >
      <div className="bg-[#101420] border border-white/15 rounded-2xl max-w-4xl w-full my-auto shadow-2xl overflow-hidden relative flex flex-col max-h-[92vh]">
        {/* Header Bar */}
        <div className="p-5 sm:p-7 border-b border-white/10 bg-slate-900/80 flex items-start justify-between gap-4 sticky top-0 z-20 backdrop-blur-md">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${project.badgeColor}`}>
                {project.typeLabel}
              </span>
              {project.awardText && (
                <span className="flex items-center gap-1 text-[11px] font-bold text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                  <Trophy className="w-3 h-3 text-amber-400" />
                  {project.awardText}
                </span>
              )}
            </div>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-white leading-tight">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              {project.subtitle}
            </p>
          </div>

          <button
            id="close-project-modal-btn"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/80 border border-white/10 hover:bg-slate-700 transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab navigation within modal */}
        <div className="flex items-center gap-2 px-6 pt-3 border-b border-white/10 bg-slate-950/40 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-2.5 px-2 border-b-2 transition-colors ${
              activeTab === 'overview'
                ? 'border-indigo-400 text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Case Study Overview
          </button>
          <button
            onClick={() => setActiveTab('engineering')}
            className={`pb-2.5 px-2 border-b-2 transition-colors ${
              activeTab === 'engineering'
                ? 'border-indigo-400 text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Design & Tech Architecture
          </button>
          <button
            onClick={() => setActiveTab('team')}
            className={`pb-2.5 px-2 border-b-2 transition-colors ${
              activeTab === 'team'
                ? 'border-indigo-400 text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Team Contribution ({project.teamContribution.length})
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6 text-sm">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Context / Project Type Label */}
              <div className="bg-slate-900/60 p-4 rounded-xl border border-white/10 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    Project Classification & Context
                  </span>
                  <div className="text-xs font-semibold text-slate-200 mt-0.5">
                    {project.clientOrProject}
                  </div>
                </div>
              </div>

              {/* The Problem & Our Approach */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-red-950/20 p-4 rounded-xl border border-red-500/20">
                  <div className="text-xs font-bold text-red-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <span>The Problem</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="bg-indigo-950/20 p-4 rounded-xl border border-indigo-500/20">
                  <div className="text-xs font-bold text-indigo-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <span>Our Approach</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.approach}
                  </p>
                </div>
              </div>

              {/* Final Solution */}
              <div className="bg-slate-900/80 p-5 rounded-xl border border-white/10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-2">
                  Final Delivered Solution
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.finalSolution}
                </p>
              </div>

              {/* Verified Result / Status */}
              <div className="bg-emerald-950/25 p-4 rounded-xl border border-emerald-500/30 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    Result & Current Status
                  </div>
                  <div className="text-xs text-slate-200 mt-1 leading-relaxed">
                    {project.resultStatus}
                  </div>
                </div>
              </div>

              {/* Key Highlights Chips */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5">
                  Key Technical Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.keyHighlights.map((hl, i) => (
                    <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-white/5 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'engineering' && (
            <div className="space-y-6">
              {/* Design Aspects */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  <span>UI/UX & Visual Design Execution</span>
                </h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {project.designAspects.map((d, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-purple-400 font-bold">•</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Development Aspects */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3 flex items-center gap-2">
                  <Code2 className="w-4 h-4" />
                  <span>Full-Stack & Systems Engineering</span>
                </h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {project.developmentAspects.map((dev, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-indigo-400 font-bold">•</span>
                      <span>{dev}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Marketing / Strategy Aspects */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-3 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  <span>Market Positioning & Commercial Strategy</span>
                </h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {project.marketingAndStrategyAspects.map((m, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-teal-400 font-bold">•</span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Matrix */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Verified Tech Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-slate-800 text-xs font-mono text-indigo-300 border border-indigo-500/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'team' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-400">
                Here is exactly how our multidisciplinary members coordinated across design, code, and strategy on this project:
              </p>
              <div className="grid grid-cols-1 gap-3">
                {project.teamContribution.map((tc, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-white">{tc.member}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-indigo-300 font-medium">
                          {tc.role}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        {tc.contribution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer CTA in modal */}
        <div className="p-4 sm:p-5 border-t border-white/10 bg-slate-950/90 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-400 text-center sm:text-left">
            Interested in a similar build or digital solution?
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-white bg-slate-800 border border-white/5"
            >
              Close
            </button>
            <button
              id="modal-start-similar-project-btn"
              onClick={() => {
                const title = project.title;
                onClose();
                onStartSimilarProject(title);
              }}
              className="w-1/2 sm:w-auto px-5 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Build Similar Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
