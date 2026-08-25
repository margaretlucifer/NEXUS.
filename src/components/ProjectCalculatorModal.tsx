import { useState } from 'react';
import { X, Sparkles, Clock, Users, CheckCircle2, ArrowRight, Layers, FileCheck } from 'lucide-react';

interface ProjectCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyToInquiry: (summary: string, timeline: string, budgetHint: string) => void;
}

export function ProjectCalculatorModal({ isOpen, onClose, onApplyToInquiry }: ProjectCalculatorModalProps) {
  const [projectType, setProjectType] = useState<'website' | 'ecommerce' | 'webapp' | 'branding' | 'custom'>('website');
  const [scale, setScale] = useState<'starter' | 'growth' | 'custom'>('starter');
  const [addons, setAddons] = useState<string[]>(['seo', 'mobile']);

  if (!isOpen) return null;

  const toggleAddon = (id: string) => {
    setAddons(prev => 
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  // Calculate estimated timeline
  let timeline = '1 to 2 Weeks';
  let budgetHint = 'Starter Range';
  let recommendedTeam = ['Aryan Jadhav (Dev)', 'Sahejata Patil (UI/UX)'];

  if (projectType === 'website') {
    if (scale === 'starter') {
      timeline = '1 to 2 Weeks';
      budgetHint = 'Starter Package';
      recommendedTeam = ['Aryan Jadhav (Lead Dev)', 'Sahejata Patil (UI/UX)'];
    } else if (scale === 'growth') {
      timeline = '2 to 3 Weeks';
      budgetHint = 'Growth Package';
      recommendedTeam = ['Aryan Jadhav (Dev)', 'Sahejata Patil (UI/UX)', 'Nakshatra Pachpund (Marketing/SEO)'];
    } else {
      timeline = '3 to 5 Weeks';
      budgetHint = 'Custom Solution';
      recommendedTeam = ['Aryan Jadhav (Dev)', 'Sahejata Patil (UI/UX)', 'Nakshatra (SEO)', 'Devang (Ops)'];
    }
  } else if (projectType === 'ecommerce') {
    timeline = scale === 'starter' ? '2 to 3 Weeks' : '3 to 5 Weeks';
    budgetHint = scale === 'starter' ? 'Growth Tier' : 'Custom E-Commerce Solution';
    recommendedTeam = ['Aryan Jadhav (Dev & DB)', 'Sahejata Patil (UI/UX)', 'Nakshatra (Marketing)'];
  } else if (projectType === 'webapp') {
    timeline = scale === 'starter' ? '2 to 4 Weeks' : '4 to 7 Weeks';
    budgetHint = 'Custom Full-Stack Scope';
    recommendedTeam = ['Aryan Jadhav (Lead Dev)', 'Devang (AI & Ops)', 'Sahejata (UI/UX)', 'Yashraj (Product)'];
  } else if (projectType === 'branding') {
    timeline = '1 to 2 Weeks';
    budgetHint = 'Strategic Brand Package';
    recommendedTeam = ['Nakshatra (Brand Strategist)', 'Sahejata (Visual Designer)', 'Yashraj (Storytelling)'];
  } else {
    timeline = 'Tailored Milestone Calendar';
    budgetHint = 'Custom Project Scope';
    recommendedTeam = ['All 5 Team Specialists Coordinated'];
  }

  if (addons.includes('3d') || addons.includes('ai')) {
    if (!recommendedTeam.some(t => t.includes('Aryan'))) recommendedTeam.push('Aryan Jadhav (3D/AI)');
  }

  const handleApply = () => {
    const summaryText = `Calculated Estimate: ${projectType.toUpperCase()} (${scale.toUpperCase()} Scale) with Addons: [${addons.join(', ')}]. Recommended Team: ${recommendedTeam.join(', ')}.`;
    onApplyToInquiry(summaryText, timeline, budgetHint);
    onClose();
  };

  return (
    <div
      id="project-estimator-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
    >
      <div className="bg-[#101420] border border-white/15 rounded-2xl max-w-2xl w-full my-auto shadow-2xl p-6 sm:p-8 relative max-h-[92vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-white/10 pb-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Scope & Timeline Estimator</span>
            </div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
              Plan Your Project Requirements
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800 border border-white/5"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step 1: Project Type */}
        <div className="mb-6">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5">
            1. What type of project are you planning?
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {[
              { id: 'website', label: 'Business Website' },
              { id: 'ecommerce', label: 'E-Commerce Store' },
              { id: 'webapp', label: 'Web App & AI' },
              { id: 'branding', label: 'Branding & Identity' },
              { id: 'custom', label: 'Custom / Other' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setProjectType(item.id as any)}
                className={`p-3 rounded-xl text-xs font-medium border text-left transition-all ${
                  projectType === item.id
                    ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-sm ring-1 ring-indigo-500/40'
                    : 'bg-slate-900/60 border-white/5 text-slate-300 hover:bg-slate-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Scale & Scope */}
        <div className="mb-6">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5">
            2. Scope & Depth
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'starter', title: 'Starter', desc: '1-3 key pages / MVP' },
              { id: 'growth', title: 'Growth', desc: 'Full multi-page / dynamic' },
              { id: 'custom', title: 'Comprehensive', desc: 'Complex systems & integrations' },
            ].map((lvl) => (
              <button
                key={lvl.id}
                onClick={() => setScale(lvl.id as any)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  scale === lvl.id
                    ? 'bg-indigo-600/20 border-indigo-500 text-white ring-1 ring-indigo-500/40'
                    : 'bg-slate-900/60 border-white/5 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <div className="text-xs font-bold text-white">{lvl.title}</div>
                <div className="text-[10px] text-slate-400 mt-0.5">{lvl.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Add-on Capabilities */}
        <div className="mb-6">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5">
            3. Optional Specializations
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {[
              { id: 'seo', label: 'Local & Search SEO' },
              { id: 'mobile', label: 'Mobile-First Polish' },
              { id: 'ai', label: 'AI Chat / Automation' },
              { id: '3d', label: '3D Graphics (Three.js)' },
              { id: 'deck', label: 'Investor Pitch Deck' },
              { id: 'rush', label: 'Fast-Track Delivery' },
            ].map((add) => {
              const isSelected = addons.includes(add.id);
              return (
                <button
                  key={add.id}
                  onClick={() => toggleAddon(add.id)}
                  className={`p-2.5 rounded-xl text-xs font-medium border flex items-center justify-between transition-all ${
                    isSelected
                      ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-300'
                      : 'bg-slate-900/60 border-white/5 text-slate-400 hover:bg-slate-800'
                  }`}
                >
                  <span>{add.label}</span>
                  {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Real-Time Calculated Estimate Card */}
        <div className="p-5 rounded-xl bg-gradient-to-br from-indigo-950/40 via-slate-900 to-emerald-950/30 border border-indigo-500/30 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                Estimated Delivery Window
              </span>
              <div className="font-heading text-lg font-bold text-emerald-400 flex items-center gap-1.5 mt-0.5">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>{timeline}</span>
              </div>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                Estimated Scope Tier
              </span>
              <div className="font-heading text-sm font-bold text-indigo-300 mt-0.5">
                {budgetHint}
              </div>
            </div>
          </div>

          <div className="pt-3">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-1.5">
              Assigned Team Specialists
            </span>
            <div className="flex flex-wrap gap-1.5">
              {recommendedTeam.map((m, i) => (
                <span key={i} className="px-2.5 py-1 rounded-md bg-slate-900/90 text-xs text-slate-200 border border-white/10">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-white"
          >
            Cancel
          </button>
          <button
            onClick={handleApply}
            className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-emerald-600 hover:from-indigo-500 hover:to-emerald-500 shadow-lg shadow-indigo-600/30 flex items-center gap-1.5 cursor-pointer"
          >
            <span>Transfer to Project Inquiry</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
