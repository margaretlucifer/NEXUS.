import { ArrowRight, Sparkles, MessageSquare } from 'lucide-react';

interface FinalCTAProps {
  onStartProject: () => void;
  onViewWork: () => void;
}

export function FinalCTA({ onStartProject, onViewWork }: FinalCTAProps) {
  return (
    <section id="final-cta" className="py-20 sm:py-24 relative bg-gradient-to-b from-[#0D0F17] via-indigo-950/30 to-[#0D0F17] border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="glass-panel p-8 sm:p-14 rounded-3xl border border-indigo-500/30 shadow-2xl relative overflow-hidden bg-gradient-to-tr from-indigo-950/40 via-slate-900/90 to-emerald-950/30">
          {/* Subtle background glow circle */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready When You Are</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5 leading-tight">
            Your Idea Is The Starting Point.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Whether you need a website, digital product, brand strategy, marketing support or a complete digital solution — let's talk.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="final-start-project-btn"
              onClick={onStartProject}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-500 hover:from-indigo-500 hover:to-emerald-400 transition-all duration-200 shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="final-view-work-btn"
              onClick={onViewWork}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>View Our Work</span>
            </button>
          </div>

          <div className="mt-8 text-xs text-slate-400">
            Freelance flexibility • No locked-in retainers • Clear milestones
          </div>
        </div>
      </div>
    </section>
  );
}
