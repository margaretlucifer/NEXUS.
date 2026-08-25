import { useState } from 'react';
import { PROCESS_STEPS, CLIENT_JOURNEY_STEPS } from '../data/process';
import { 
  MessageSquare, 
  Compass, 
  FileText, 
  Palette, 
  Code2, 
  CheckCircle2, 
  Rocket, 
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Lightbulb,
  Send,
  Coffee,
  ListChecks,
  FileSpreadsheet,
  Layers,
  Terminal,
  Eye,
  PartyPopper
} from 'lucide-react';

interface ProcessSectionProps {
  onStartProject: () => void;
}

const STEP_ICONS: Record<string, typeof MessageSquare> = {
  MessageSquare,
  Compass,
  FileText,
  Palette,
  Code2,
  CheckCircle2,
  Rocket,
  ShieldCheck
};

const JOURNEY_ICONS: Record<string, typeof Lightbulb> = {
  Lightbulb,
  Send,
  Coffee,
  ListChecks,
  FileSpreadsheet,
  Layers,
  Terminal,
  Eye,
  PartyPopper
};

export function ProcessSection({ onStartProject }: ProcessSectionProps) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return (
    <section id="process" className="py-20 sm:py-28 relative bg-[#0D0F17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Structured Transparency</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            How Working With Us Looks
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            From your very first message to launch day and beyond, every step is organized, predictable, and transparent.
          </p>
        </div>

        {/* 8-Step Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = STEP_ICONS[step.iconName] || MessageSquare;
            const isHighlighted = idx === activeStepIndex;

            return (
              <div
                key={step.number}
                id={`process-step-card-${step.number}`}
                onClick={() => setActiveStepIndex(idx)}
                className={`glass-panel p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between cursor-pointer group ${
                  isHighlighted
                    ? 'border-indigo-500 bg-slate-800/90 shadow-xl shadow-indigo-950/50 scale-[1.02]'
                    : 'border-white/10 hover:border-white/20 hover:bg-slate-900/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">
                      {step.number}
                    </span>
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                      isHighlighted ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400 group-hover:text-white'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-white mb-1">
                    {step.title}
                  </h3>
                  <div className="text-xs text-indigo-400 font-semibold mb-3">
                    {step.subtitle}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 space-y-1 text-[11px]">
                  <div className="text-slate-400">
                    <span className="font-bold text-slate-200">You:</span> {step.clientAction}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section 14: Client Journey Visual Pipeline */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 bg-slate-950/70">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4 mb-6">
            <div>
              <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">
                End-to-End Client Journey
              </span>
              <h3 className="font-heading text-xl font-bold text-white">
                From Rough Idea to Live Launch
              </h3>
            </div>
            <span className="text-xs text-slate-400">
              Clear stages with zero guesswork
            </span>
          </div>

          {/* Journey Steps Horizontal / Grid visual */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-9 gap-3">
            {CLIENT_JOURNEY_STEPS.map((js, index) => {
              const JIcon = JOURNEY_ICONS[js.icon] || Lightbulb;
              return (
                <div
                  key={js.step}
                  className="p-3.5 rounded-xl bg-slate-900/80 border border-white/5 flex flex-col justify-between text-center relative group hover:border-indigo-500/40 transition-all"
                >
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-300 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                      <JIcon className="w-4 h-4" />
                    </div>
                    <div className="text-[10px] font-bold text-slate-400 font-mono">
                      {js.step}
                    </div>
                    <h4 className="text-xs font-bold text-white mt-0.5 mb-1 leading-snug">
                      {js.title}
                    </h4>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-tight">
                    {js.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-300 text-center sm:text-left">
              Ready to take the first step? Let's discuss your project during a free initial conversation.
            </p>
            <button
              id="process-start-journey-btn"
              onClick={onStartProject}
              className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shrink-0 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>Message The Team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
