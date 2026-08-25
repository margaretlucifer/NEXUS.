import { useState } from 'react';
import { Lightbulb, Compass, Palette, Code2, TrendingUp, Rocket, Check, ArrowRight } from 'lucide-react';

interface StageInfo {
  id: string;
  step: string;
  name: string;
  tagline: string;
  icon: typeof Lightbulb;
  color: string;
  borderColor: string;
  glowColor: string;
  teamFocus: string;
  clientTakeaway: string;
}

const STAGES: StageInfo[] = [
  {
    id: 'idea',
    step: '01',
    name: 'YOUR IDEA',
    tagline: 'You bring the vision, problem, or napkin sketch',
    icon: Lightbulb,
    color: 'text-amber-400',
    borderColor: 'border-amber-500/40',
    glowColor: 'from-amber-500/20',
    teamFocus: 'Active Listening & Requirements Clarification',
    clientTakeaway: 'You do not need full specs. Just tell us what you want to achieve.'
  },
  {
    id: 'discover',
    step: '02',
    name: 'DISCOVER',
    tagline: 'Market research, user flows & project scoping',
    icon: Compass,
    color: 'text-blue-400',
    borderColor: 'border-blue-500/40',
    glowColor: 'from-blue-500/20',
    teamFocus: 'Competitor Benchmarking & Scope Definition',
    clientTakeaway: 'We pinpoint your target audience and map the exact features needed.'
  },
  {
    id: 'design',
    step: '03',
    name: 'DESIGN',
    tagline: 'Wireframes, interactive UI/UX & brand identity',
    icon: Palette,
    color: 'text-purple-400',
    borderColor: 'border-purple-500/40',
    glowColor: 'from-purple-500/20',
    teamFocus: 'Figma Clickable Prototypes & Visual Systems',
    clientTakeaway: 'You test the full visual experience before a single line of code is written.'
  },
  {
    id: 'develop',
    step: '04',
    name: 'DEVELOP',
    tagline: 'Fast web apps, databases, 3D & AI automation',
    icon: Code2,
    color: 'text-indigo-400',
    borderColor: 'border-indigo-500/40',
    glowColor: 'from-indigo-500/20',
    teamFocus: 'Modern Code, Database Modeling & Integrations',
    clientTakeaway: 'Clean, lightning-fast code optimized for mobile responsiveness and speed.'
  },
  {
    id: 'grow',
    step: '05',
    name: 'GROW',
    tagline: 'SEO optimization, brand messaging & content funnels',
    icon: TrendingUp,
    color: 'text-teal-400',
    borderColor: 'border-teal-500/40',
    glowColor: 'from-teal-500/20',
    teamFocus: 'Search Engine Visibility & Conversion Copy',
    clientTakeaway: 'Your digital product is primed for search discovery and client conversions.'
  },
  {
    id: 'launch',
    step: '06',
    name: 'LAUNCH',
    tagline: 'Deployment, domain setup & post-launch support',
    icon: Rocket,
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500/40',
    glowColor: 'from-emerald-500/20',
    teamFocus: 'Production Go-Live & Client Handover',
    clientTakeaway: 'Your product is live in the hands of real users with ongoing team backing.'
  }
];

export function InteractiveWorkflow() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const activeStage = STAGES[activeStageIndex];

  return (
    <div id="interactive-hero-workflow" className="w-full">
      {/* Interactive Node Flow Container */}
      <div className="glass-panel p-5 sm:p-7 rounded-2xl border border-white/10 relative overflow-hidden shadow-2xl shadow-indigo-950/40">
        {/* Ambient background glow matching active stage */}
        <div
          className={`absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gradient-to-br ${activeStage.glowColor} to-transparent blur-3xl opacity-60 pointer-events-none transition-all duration-500`}
        />

        <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Interactive Execution Pipeline
            </span>
          </div>
          <span className="text-[11px] text-slate-400 hidden sm:inline">
            Click any step to inspect our workflow
          </span>
        </div>

        {/* Steps Grid / Horizontal Pipe on desktop, vertical on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 relative">
          {STAGES.map((stage, idx) => {
            const Icon = stage.icon;
            const isActive = idx === activeStageIndex;
            const isCompleted = idx < activeStageIndex;

            return (
              <button
                key={stage.id}
                id={`workflow-step-${stage.id}`}
                onClick={() => setActiveStageIndex(idx)}
                className={`relative flex flex-col items-start p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer group ${
                  isActive
                    ? `bg-slate-800/90 ${stage.borderColor} shadow-lg shadow-black/40 scale-[1.02] ring-1 ring-white/20`
                    : 'bg-slate-900/40 border-white/5 hover:border-white/20 hover:bg-slate-800/50'
                }`}
              >
                {/* Step indicator top */}
                <div className="w-full flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-bold tracking-widest ${isActive ? stage.color : 'text-slate-400'}`}>
                    STEP {stage.step}
                  </span>
                  {isCompleted ? (
                    <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px]">
                      <Check className="w-2.5 h-2.5" />
                    </span>
                  ) : (
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isActive ? 'bg-indigo-400 ring-4 ring-indigo-500/20' : 'bg-slate-700'
                      }`}
                    />
                  )}
                </div>

                {/* Step Icon & Title */}
                <div className="flex items-center gap-2 mb-1">
                  <div
                    className={`w-6 h-6 rounded-md flex items-center justify-center transition-colors ${
                      isActive ? 'bg-white/10 text-white' : 'bg-slate-800 text-slate-400 group-hover:text-slate-200'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span
                    className={`text-xs font-bold font-heading tracking-tight ${
                      isActive ? 'text-white' : 'text-slate-300'
                    }`}
                  >
                    {stage.name}
                  </span>
                </div>

                {/* Subtitle snippet */}
                <p className="text-[11px] text-slate-400 line-clamp-2 leading-tight">
                  {stage.tagline}
                </p>

                {/* Subtle progress connector line */}
                {idx < STAGES.length - 1 && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-slate-400 pointer-events-none">
                    <ArrowRight className="w-3.5 h-3.5 opacity-40" />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Card for Active Stage */}
        <div className="mt-5 p-4 sm:p-5 rounded-xl bg-slate-900/80 border border-white/10 backdrop-blur-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-start sm:items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center shrink-0">
                <activeStage.icon className={`w-5 h-5 ${activeStage.color}`} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-bold text-white font-heading">
                    Phase {activeStage.step}: {activeStage.name}
                  </h4>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-indigo-300 border border-indigo-500/20 font-medium">
                    {activeStage.teamFocus}
                  </span>
                </div>
                <p className="text-xs text-slate-300 mt-0.5">
                  {activeStage.tagline}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-center">
              <button
                id="workflow-prev-step-btn"
                onClick={() => setActiveStageIndex((prev) => (prev > 0 ? prev - 1 : STAGES.length - 1))}
                className="px-2.5 py-1 text-xs text-slate-400 hover:text-white bg-slate-800 rounded-lg border border-white/5"
              >
                ← Prev
              </button>
              <button
                id="workflow-next-step-btn"
                onClick={() => setActiveStageIndex((prev) => (prev < STAGES.length - 1 ? prev + 1 : 0))}
                className="px-3 py-1 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg"
              >
                Next Phase →
              </button>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-white/5 flex items-center gap-2 text-xs text-emerald-300 bg-emerald-950/20 px-3 py-2 rounded-lg border border-emerald-500/20">
            <span className="font-semibold shrink-0">Client Guarantee:</span>
            <span className="text-slate-200">{activeStage.clientTakeaway}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
