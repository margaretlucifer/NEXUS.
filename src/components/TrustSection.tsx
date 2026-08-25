import { Trophy, Award, CheckCircle2, ShieldCheck, ArrowRight, Sparkles, MessageSquare } from 'lucide-react';
import { CREDIBILITY_DATA } from '../data/credibility';

interface TrustSectionProps {
  onStartConversation: () => void;
}

export function TrustSection({ onStartConversation }: TrustSectionProps) {
  return (
    <section id="credibility" className="py-20 sm:py-24 relative bg-slate-950/80 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Honest Credibility & Track Record</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Verified Achievements. Zero Fake Hype.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            We don’t fabricate reviews or invent client logos. Our credibility comes from verified technical competitions, national ideathon qualifications, and real software delivery.
          </p>
        </div>

        {/* Real Milestones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {CREDIBILITY_DATA.map((item) => (
            <div
              key={item.id}
              id={`credibility-card-${item.id}`}
              className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col justify-between hover:border-indigo-500/30 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                    {item.badge}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">
                    {item.dateOrStatus}
                  </span>
                </div>

                <h3 className="font-heading text-base sm:text-lg font-bold text-white group-hover:text-indigo-300 transition-colors mb-1">
                  {item.title}
                </h3>
                <div className="text-xs text-indigo-400/90 font-medium mb-3">
                  {item.organizationOrContext}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 bg-slate-900/40 p-2.5 rounded-xl border border-white/5">
                <span className="text-[10px] uppercase font-bold text-emerald-400 block mb-0.5">
                  Demonstrated Competency
                </span>
                <p className="text-[11px] text-slate-200 leading-snug">
                  {item.impact}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Honest Callout (Section 18 Testimonial Alternative) */}
        <div className="glass-panel p-8 sm:p-10 rounded-2xl border border-indigo-500/30 bg-gradient-to-r from-indigo-950/40 via-slate-900/80 to-emerald-950/30 relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2 block">
              Honest Client Collaboration
            </span>
            <h3 className="font-heading text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              "Your Project Could Be Our Next Case Study."
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
              We work with founders, businesses, and creators who want attentive, high-caliber execution. We treat every project like our flagship piece of work.
            </p>
            <button
              id="trust-start-conversation-btn"
              onClick={onStartConversation}
              className="px-8 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-emerald-600 hover:from-indigo-500 hover:to-emerald-500 shadow-xl shadow-indigo-600/30 inline-flex items-center gap-2 group cursor-pointer transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
