import { UserCheck, Sparkles, Sliders, Users, Rocket, Target, CheckCircle2 } from 'lucide-react';

export function WhyUsSection() {
  const reasons = [
    {
      id: 'one-contact',
      title: 'One Contact Point',
      description: 'You communicate with one coordinated team lead rather than chasing five different freelancers across separate chat apps.',
      icon: UserCheck,
      color: 'text-indigo-400',
      bg: 'bg-indigo-500/10 border-indigo-500/20'
    },
    {
      id: 'multiple-skills',
      title: 'Multiple Disciplines in One',
      description: 'Full-stack development, UI/UX prototyping, brand positioning, and SEO growth united under one seamless workflow.',
      icon: Sparkles,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10 border-emerald-500/20'
    },
    {
      id: 'flexible',
      title: 'Flexible & Budget Conscious',
      description: 'We adapt project scope to fit real small business and startup budgets without pushing unnecessary bloated features.',
      icon: Sliders,
      color: 'text-amber-400',
      bg: 'bg-amber-500/10 border-amber-500/20'
    },
    {
      id: 'collaborative',
      title: 'Cross-Functional Reviews',
      description: 'Every interface and codebase is reviewed from multiple angles: design aesthetics, technical speed, and marketing conversion.',
      icon: Users,
      color: 'text-purple-400',
      bg: 'bg-purple-500/10 border-purple-500/20'
    },
    {
      id: 'startup-friendly',
      title: 'Startup & Creator Friendly',
      description: 'We understand early-stage constraints. We help you launch fast, test customer response, and iterate based on real feedback.',
      icon: Rocket,
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10 border-cyan-500/20'
    },
    {
      id: 'end-to-end',
      title: 'End-to-End Execution',
      description: 'From a rough thought on paper to clickable Figma mockups, production code, domain configuration, and launch support.',
      icon: Target,
      color: 'text-pink-400',
      bg: 'bg-pink-500/10 border-pink-500/20'
    }
  ];

  return (
    <section id="why-us" className="py-20 sm:py-24 relative bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Value Pillars</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Why Work With Us?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            We provide the speed and dedication of independent freelancers with the reliability and breadth of a coordinated digital agency.
          </p>
        </div>

        {/* 6 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.id}
                id={`why-us-card-${r.id}`}
                className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-indigo-500/30 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl ${r.bg} border flex items-center justify-center mb-5 group-hover:scale-105 transition-transform`}>
                    <Icon className={`w-6 h-6 ${r.color}`} />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white group-hover:text-indigo-300 transition-colors mb-2">
                    {r.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {r.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
