import { useState } from 'react';
import { TEAM_MEMBERS } from '../data/team';
import { TeamMember } from '../types';
import { TeamMemberModal } from './TeamMemberModal';
import { Users, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

interface TeamSectionProps {
  onDirectInquiry: (memberName: string) => void;
}

export function TeamSection({ onDirectInquiry }: TeamSectionProps) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <section id="team" className="py-20 sm:py-28 relative bg-[#0D0F17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>Multidisciplinary Talent</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            The People Behind The Work.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            You don't need to hire five separate freelancers. Our team brings development, brand strategy, operations, UI/UX design, and product storytelling together under one workflow.
          </p>
        </div>

        {/* Team Cards Grid (5 members) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              id={`team-card-${member.id}`}
              className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-2xl border border-white/10 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-950/40"
            >
              <div>
                {/* Avatar & Role Header */}
                <div className="flex items-center gap-3.5 mb-5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${member.avatarColor} flex items-center justify-center text-white text-lg font-bold font-heading shadow-md group-hover:scale-105 transition-transform shrink-0`}>
                    {member.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {member.name}
                    </h3>
                    <div className="text-xs font-semibold text-emerald-400">
                      {member.role}
                    </div>
                    <div className="text-[11px] text-slate-400 truncate max-w-[180px]">
                      {member.title}
                    </div>
                  </div>
                </div>

                {/* Short Bio Snippet */}
                <p className="text-xs text-slate-300 leading-relaxed mb-5 line-clamp-3">
                  {member.bio}
                </p>

                {/* Focus List */}
                <div className="space-y-1.5 pt-4 border-t border-white/5 mb-5">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Core Specializations
                  </div>
                  {member.focus.slice(0, 4).map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                      <span>{f}</span>
                    </div>
                  ))}
                  {member.focus.length > 4 && (
                    <div className="text-[11px] text-indigo-400 pt-0.5 font-medium">
                      +{member.focus.length - 4} more focus areas
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-2 mt-auto">
                <button
                  id={`team-view-profile-btn-${member.id}`}
                  onClick={() => setSelectedMember(member)}
                  className="text-xs text-slate-400 hover:text-white transition-colors underline-offset-4 hover:underline"
                >
                  View Full Profile
                </button>

                <button
                  id={`team-collaborate-btn-${member.id}`}
                  onClick={() => onDirectInquiry(member.name)}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold text-indigo-300 bg-indigo-500/10 hover:bg-indigo-600 hover:text-white border border-indigo-500/20 transition-all flex items-center gap-1 cursor-pointer"
                >
                  <span>Connect</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}

          {/* 6th Slot: The Team Advantage Summary Card */}
          <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-dashed border-indigo-500/30 bg-gradient-to-br from-indigo-950/20 to-slate-900/40 flex flex-col justify-between text-left">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="font-heading text-lg font-bold text-white mb-2">
                Need the Whole Team?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Every project we accept gets cross-checked by engineering, UI design, operations, and marketing for maximum polish before launch.
              </p>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>No sub-contracting or hidden agency layers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Transparent progress demos every week</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Flexible project-based or milestone billing</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onDirectInquiry('Entire Team / Multi-disciplinary Build')}
              className="mt-6 w-full py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-emerald-600 hover:from-indigo-500 hover:to-emerald-500 transition-all flex items-center justify-center gap-2"
            >
              <span>Work With The Whole Team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Member Details Modal */}
      <TeamMemberModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
        onDirectInquiry={onDirectInquiry}
      />
    </section>
  );
}
