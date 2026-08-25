import { ArrowRight, Sparkles, CheckCircle2, MessageCircle, Code, Layers, TrendingUp } from 'lucide-react';
import { InteractiveWorkflow } from './InteractiveWorkflow';

interface HeroProps {
  onOpenContact: () => void;
  onExploreWork: () => void;
}

export function Hero({ onOpenContact, onExploreWork }: HeroProps) {
  return (
    <section
      id="hero-section"
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-grid-pattern"
    >
      {/* Background ambient radial glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[400px] bg-gradient-to-br from-indigo-600/15 via-emerald-600/10 to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-10 left-10 w-80 h-80 bg-indigo-500/10 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          {/* Small Top Label */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-widest mb-6 shadow-sm shadow-indigo-500/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>FREELANCE DIGITAL TEAM</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
            We Build Digital Experiences That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-200 to-emerald-400">
              Move Ideas Forward.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto mb-8">
            A multidisciplinary freelance team combining development, design, marketing, operations and product strategy to help businesses turn ideas into real digital experiences.
          </p>

          {/* CTAs & Trust statement */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-6">
            <button
              id="hero-start-project-btn"
              onClick={onOpenContact}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-500 hover:from-indigo-500 hover:to-emerald-400 transition-all duration-200 shadow-xl shadow-indigo-600/30 hover:shadow-indigo-500/40 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="hero-view-work-btn"
              onClick={onExploreWork}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>View Our Work</span>
            </button>
          </div>

          {/* Small trust statement */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Available for freelance projects & collaborations
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
              No big agency overhead — Direct team communication
            </span>
          </div>
        </div>

        {/* Hero Interactive Workflow Visual */}
        <div className="max-w-5xl mx-auto">
          <InteractiveWorkflow />
        </div>

        {/* Quick capability ticker badges */}
        <div className="mt-12 pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-3 rounded-xl bg-slate-900/40 border border-white/5">
            <div className="text-xl sm:text-2xl font-extrabold text-white font-heading">5 In-House</div>
            <div className="text-xs text-slate-400 mt-0.5">Specialized Skill Disciplines</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/40 border border-white/5">
            <div className="text-xl sm:text-2xl font-extrabold text-emerald-400 font-heading">1 Unified</div>
            <div className="text-xs text-slate-400 mt-0.5">Coordinated Workflow</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/40 border border-white/5">
            <div className="text-xl sm:text-2xl font-extrabold text-indigo-400 font-heading">Sub-Second</div>
            <div className="text-xs text-slate-400 mt-0.5">Fast Page Load Speeds</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/40 border border-white/5">
            <div className="text-xl sm:text-2xl font-extrabold text-white font-heading">100% Honest</div>
            <div className="text-xs text-slate-400 mt-0.5">Transparent Scope & Quotes</div>
          </div>
        </div>
      </div>
    </section>
  );
}
