import { useState } from 'react';
import { Trophy, ArrowUpRight, CheckCircle2, Sparkles, Layers, Code, Bot } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projects';
import { ProjectCaseStudy } from '../types';
import { ProjectModal } from './ProjectModal';

interface PortfolioSectionProps {
  onStartSimilarProject: (projectTitle: string) => void;
}

export function PortfolioSection({ onStartSimilarProject }: PortfolioSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectCaseStudy | null>(null);

  const categories = [
    'All',
    'AI / 3D',
    'Software & DB',
    'Web & Education',
    'Marketing'
  ];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => {
        if (selectedCategory === 'AI / 3D') return p.category.includes('AI') || p.category.includes('3D') || p.category.includes('Python');
        if (selectedCategory === 'Software & DB') return p.category.includes('Database') || p.category.includes('Software');
        if (selectedCategory === 'Web & Education') return p.category.includes('Education') || p.category.includes('Web');
        if (selectedCategory === 'Marketing') return p.category.includes('Marketing') || p.category.includes('Branding');
        return true;
      });

  return (
    <section id="work" className="py-20 sm:py-28 relative bg-[#0D0F17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <span>Verified Case Studies</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Our Recent Work
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
              Real projects spanning software engineering, interactive 3D/AI, educational web platforms, and strategic brand positioning.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-900/60 p-1.5 rounded-xl border border-white/10 shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`portfolio-filter-${cat.toLowerCase().replace(/[\s\/]+/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              onClick={() => setActiveModalProject(project)}
              className="glass-panel glass-panel-hover rounded-2xl border border-white/10 overflow-hidden flex flex-col justify-between group cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-indigo-950/50"
            >
              {/* Card Top Preview Gradient & Badge */}
              <div className={`p-6 bg-gradient-to-br ${project.accentGradient} border-b border-white/5 relative`}>
                <div className="flex items-start justify-between gap-2 mb-4">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border backdrop-blur-md ${project.badgeColor}`}>
                    {project.typeLabel}
                  </span>

                  <div className="w-8 h-8 rounded-full bg-slate-900/80 border border-white/10 text-slate-300 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {project.awardText && (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[11px] font-semibold mb-3">
                    <Trophy className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="truncate">{project.awardText}</span>
                  </div>
                )}

                <h3 className="font-heading text-lg sm:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                  {project.subtitle}
                </p>
              </div>

              {/* Card Middle: Problem & Solution Snippet */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">
                    Problem Solved
                  </div>
                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                {/* Tech chips */}
                <div>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-slate-900 text-[10px] font-mono text-slate-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded bg-slate-900 text-[10px] text-slate-400">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Bottom: Click to view case study */}
              <div className="px-6 py-3.5 bg-slate-950/70 border-t border-white/5 flex items-center justify-between text-xs text-indigo-400 font-semibold group-hover:text-indigo-300">
                <span>Explore Full Case Study</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Transparent Honesty Note */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/40 border border-white/5 text-center text-xs text-slate-400 max-w-2xl mx-auto">
          <span className="text-slate-300 font-medium">Transparency Guarantee:</span> We clearly distinguish client builds, hackathon award winners, and innovation ideathon qualifiers. No fabricated claims or fake metrics.
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onStartSimilarProject={onStartSimilarProject}
      />
    </section>
  );
}
