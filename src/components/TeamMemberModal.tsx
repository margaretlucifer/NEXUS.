import { X, CheckCircle2, Linkedin, Github, Mail, Sparkles } from 'lucide-react';
import { TeamMember } from '../types';

interface TeamMemberModalProps {
  member: TeamMember | null;
  onClose: () => void;
  onDirectInquiry: (memberName: string) => void;
}

export function TeamMemberModal({ member, onClose, onDirectInquiry }: TeamMemberModalProps) {
  if (!member) return null;

  return (
    <div
      id="team-member-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
    >
      <div className="bg-[#101420] border border-white/15 rounded-2xl max-w-xl w-full my-auto shadow-2xl p-6 sm:p-8 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800 border border-white/5"
          aria-label="Close member modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Avatar & Name */}
        <div className="flex items-center gap-4 mb-6">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${member.avatarColor} flex items-center justify-center text-white text-xl font-bold font-heading shadow-lg`}>
            {member.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
              {member.name}
            </h3>
            <div className="text-xs sm:text-sm font-semibold text-indigo-400">
              {member.role}
            </div>
            <div className="text-xs text-slate-400">
              {member.title}
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 text-xs italic text-slate-300 mb-6">
          "{member.quote}"
        </div>

        {/* Bio */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
            Professional Overview
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            {member.bio}
          </p>
        </div>

        {/* Focus Areas */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-300 mb-2.5">
            Core Focus & Capabilities
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {member.focus.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Strengths */}
        <div className="mb-6 pt-4 border-t border-white/5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
            Primary Tools & Frameworks
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {member.tools.map((tool, idx) => (
              <span key={idx} className="px-2.5 py-1 rounded-md bg-slate-900 text-xs font-mono text-indigo-300 border border-white/5">
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
          <span className="text-xs text-slate-400">
            Directly collaborate with {member.name.split(' ')[0]}
          </span>
          <button
            onClick={() => {
              const name = member.name;
              onClose();
              onDirectInquiry(name);
            }}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors cursor-pointer"
          >
            Inquire With {member.name.split(' ')[0]} →
          </button>
        </div>
      </div>
    </div>
  );
}
