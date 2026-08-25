import { XCircle, CheckCircle2, ArrowDown, ArrowRight, Zap, Users, RefreshCw } from 'lucide-react';

interface DifferentiatorSectionProps {
  onStartProject: () => void;
}

export function DifferentiatorSection({ onStartProject }: DifferentiatorSectionProps) {
  return (
    <section id="differentiator" className="py-20 sm:py-24 relative bg-slate-950/70 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>The Single-Team Advantage</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Why Hire Five Skills Separately?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Managing independent freelancers is stressful and disjointed. We bring developer, designer, strategist, marketer, and operations under one coordinated workflow.
          </p>
        </div>

        {/* Side-by-Side Comparison Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Traditional Approach (Chaotic & Fragmented) */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-red-500/20 bg-gradient-to-b from-red-950/10 via-slate-900/40 to-slate-900/60 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-red-500/15 mb-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-red-400">
                    The Fragmented Way
                  </span>
                  <h3 className="text-xl font-heading font-bold text-white mt-0.5">
                    Hiring 5 Separate Freelancers
                  </h3>
                </div>
                <div className="w-9 h-9 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center">
                  <XCircle className="w-5 h-5" />
                </div>
              </div>

              {/* Visual Flow diagram of chaos */}
              <div className="bg-slate-950/60 p-4 rounded-xl border border-red-500/10 mb-6 text-center space-y-2">
                <div className="inline-block px-3 py-1 bg-slate-800 rounded-md text-xs font-semibold text-slate-200">
                  YOU (The Client)
                </div>
                <div className="text-red-400 text-xs flex items-center justify-center gap-1 font-mono">
                  ↓ Manages 5 separate threads ↓
                </div>
                <div className="grid grid-cols-5 gap-1 text-[11px] font-medium text-slate-400">
                  <div className="p-1.5 rounded bg-slate-900 border border-slate-800">Designer</div>
                  <div className="p-1.5 rounded bg-slate-900 border border-slate-800">Developer</div>
                  <div className="p-1.5 rounded bg-slate-900 border border-slate-800">Marketer</div>
                  <div className="p-1.5 rounded bg-slate-900 border border-slate-800">Strategist</div>
                  <div className="p-1.5 rounded bg-slate-900 border border-slate-800">Presenter</div>
                </div>
              </div>

              {/* Pain points list */}
              <ul className="space-y-3.5 text-xs text-slate-300">
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span><strong>Multiple Contacts:</strong> You spend hours repeating requirements and playing middleman.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span><strong>Communication Gaps:</strong> The developer blames the designer; the marketer blames the website.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span><strong>Mismatched Timelines:</strong> Waiting on one person halts the entire launch for weeks.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span><strong>No Shared Accountability:</strong> When something breaks, nobody takes ownership.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 text-[11px] text-slate-400 font-medium text-center">
              High management friction • Unpredictable quality • Hidden coordination costs
            </div>
          </div>

          {/* Our Approach (Unified & Coordinated) */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-emerald-500/30 bg-gradient-to-b from-indigo-950/20 via-slate-900/60 to-emerald-950/20 flex flex-col justify-between relative shadow-xl shadow-indigo-950/30">
            {/* Top highlight badge */}
            <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-emerald-500 text-[#0D0F17] font-bold text-[10px] uppercase tracking-wider shadow-md">
              Recommended Choice
            </div>

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-emerald-500/20 mb-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                    The Nexus Co-Lab Way
                  </span>
                  <h3 className="text-xl font-heading font-bold text-white mt-0.5">
                    One Coordinated Team & Workflow
                  </h3>
                </div>
                <div className="w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              </div>

              {/* Visual Flow diagram of synergy */}
              <div className="bg-slate-950/80 p-4 rounded-xl border border-emerald-500/20 mb-6 text-center space-y-2">
                <div className="inline-block px-4 py-1 bg-indigo-600 rounded-md text-xs font-bold text-white">
                  YOU (The Client)
                </div>
                <div className="text-emerald-400 text-xs flex items-center justify-center gap-1 font-semibold">
                  ↓ Single Point of Contact ↓
                </div>
                <div className="p-2.5 rounded-lg bg-gradient-to-r from-indigo-900/60 via-slate-800 to-emerald-900/60 border border-white/10 text-xs font-bold text-white flex items-center justify-center gap-2">
                  <Users className="w-4 h-4 text-emerald-400" />
                  <span>ONE TEAM (Dev + Design + Marketing + Strategy)</span>
                </div>
                <div className="text-emerald-400 text-[11px] font-semibold">
                  = ONE UNIFIED WORKFLOW & FAST LAUNCH
                </div>
              </div>

              {/* Benefits list */}
              <ul className="space-y-3.5 text-xs text-slate-200">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>One Clear Contact:</strong> Communicate your requirements once; our operations lead handles team sync.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Interdisciplinary Reviews:</strong> Designers, developers, and marketers review your project together.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Synchronized Milestones:</strong> Design, development, and SEO happen in parallel, cutting weeks off launch.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>End-to-End Ownership:</strong> From initial idea to live production deployment and post-launch tuning.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-emerald-500/20 flex items-center justify-between gap-4">
              <span className="text-[11px] text-emerald-300 font-medium">
                Save hours of management time & get clean results.
              </span>
              <button
                id="diff-start-project-btn"
                onClick={onStartProject}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-emerald-600 transition-colors flex items-center gap-1 shrink-0 cursor-pointer"
              >
                <span>Hire The Team</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
