import { Check, Sparkles, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { PACKAGES_DATA } from '../data/packages';

interface PackagesSectionProps {
  onSelectPackage: (packageName: string) => void;
  onOpenEstimator: () => void;
}

export function PackagesSection({ onSelectPackage, onOpenEstimator }: PackagesSectionProps) {
  return (
    <section id="packages" className="py-20 sm:py-28 relative bg-[#0D0F17] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tailored Engagement Tiers</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Need Something Simple?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Whether you need a sleek landing page in under two weeks or a bespoke full-stack system, we tailor our scope precisely to your budget and needs.
          </p>
        </div>

        {/* 3 Package Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
          {PACKAGES_DATA.map((pkg) => (
            <div
              key={pkg.id}
              id={`package-tier-${pkg.id}`}
              className={`glass-panel p-7 sm:p-8 rounded-2xl border flex flex-col justify-between transition-all duration-300 relative ${
                pkg.isPopular
                  ? 'border-indigo-500/60 bg-gradient-to-b from-indigo-950/40 via-slate-900/80 to-slate-900/90 shadow-2xl shadow-indigo-950/60 scale-[1.02]'
                  : 'border-white/10 hover:border-white/20 bg-slate-900/40'
              }`}
            >
              {/* Popular Pill */}
              {pkg.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-gradient-to-r from-indigo-500 to-emerald-400 text-[#0D0F17] font-bold text-[10px] uppercase tracking-wider shadow-md">
                  Most Popular for Growing Businesses
                </div>
              )}

              <div>
                <div className="mb-4">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    {pkg.targetAudience}
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-white mt-1">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {pkg.tagline}
                  </p>
                </div>

                {/* Example Projects */}
                <div className="bg-slate-950/60 p-3.5 rounded-xl border border-white/5 mb-6">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-indigo-300 mb-2">
                    Typical Deliverables
                  </div>
                  <div className="space-y-1 text-xs text-slate-300">
                    {pkg.examples.map((ex, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                        <span>{ex}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* What is included checklist */}
                <div className="space-y-2.5 mb-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-200">
                    What's Included:
                  </div>
                  {pkg.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Timeline info */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 mb-6">
                  <span>Typical Turnaround:</span>
                  <span className="font-semibold text-slate-200">{pkg.typicalTimeline}</span>
                </div>
              </div>

              {/* Package CTA */}
              <div className="pt-2">
                <button
                  id={`select-package-btn-${pkg.id}`}
                  onClick={() => onSelectPackage(`${pkg.title} Package`)}
                  className={`w-full py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    pkg.isPopular
                      ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-emerald-500 text-white shadow-lg shadow-indigo-600/30'
                      : 'bg-slate-800/90 hover:bg-slate-700 text-white border border-white/10'
                  }`}
                >
                  <span>{pkg.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Honest Pricing Note & Project Estimator CTA */}
        <div className="mt-14 p-6 rounded-2xl bg-slate-900/50 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                Every project is quoted transparently based on requirements.
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                No hidden agency fees. No rigid retainer lock-ins. You pay for real deliverables.
              </p>
            </div>
          </div>

          <button
            id="packages-open-estimator-btn"
            onClick={onOpenEstimator}
            className="px-5 py-2.5 rounded-xl text-xs font-semibold text-indigo-300 bg-indigo-500/10 hover:bg-indigo-600 hover:text-white border border-indigo-500/30 transition-all shrink-0 cursor-pointer"
          >
            Calculate Custom Scope & Timeline →
          </button>
        </div>
      </div>
    </section>
  );
}
