import { useState } from 'react';
import { SKILLS_MATRIX } from '../data/skills';
import { Code, Palette, TrendingUp, Briefcase, Search, Sparkles } from 'lucide-react';

const ICON_MAP = {
  Code,
  Palette,
  TrendingUp,
  Briefcase
};

export function SkillsMatrix() {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCategories = SKILLS_MATRIX.filter((cat) => {
    if (activeTab !== 'All' && cat.categoryName !== activeTab) return false;
    return true;
  }).map((cat) => ({
    ...cat,
    skills: cat.skills.filter((s) => {
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        s.name.toLowerCase().includes(q) ||
        s.tags.some((t) => t.toLowerCase().includes(q))
      );
    })
  })).filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="py-20 sm:py-24 relative bg-slate-950/60 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical & Strategic Capabilities</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Our Skills Matrix
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Only verified skills and technologies actively used across our projects. No inflated lists.
          </p>

          {/* Search & Category Filter Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8 max-w-xl mx-auto">
            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search skills (e.g. React, SEO)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-slate-200 placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 bg-slate-900/80 p-1 rounded-xl border border-white/10">
              {['All', 'Development', 'Design', 'Marketing', 'Business & Strategy'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab === 'Business & Strategy' ? 'Business & Strategy' : tab)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activeTab === tab
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((cat) => {
            const IconComponent = (ICON_MAP as any)[cat.iconName] || Code;

            return (
              <div
                key={cat.categoryName}
                className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center border border-indigo-500/20">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-white">
                        {cat.categoryName}
                      </h3>
                      <p className="text-xs text-slate-400">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Pills */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-5">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-2.5 rounded-xl bg-slate-900/70 border border-white/5 hover:border-indigo-500/30 transition-all flex flex-col justify-between"
                      >
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <span className="text-xs font-bold text-slate-100 font-heading">
                            {skill.name}
                          </span>
                          <span
                            className={`text-[9px] font-semibold uppercase tracking-wider px-1.5 py-0.2 rounded ${
                              skill.level === 'Core'
                                ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                                : 'bg-indigo-500/15 text-indigo-300 border border-indigo-500/30'
                            }`}
                          >
                            {skill.level}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {skill.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[10px] text-slate-400 bg-slate-800/60 px-1.5 py-0.5 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
