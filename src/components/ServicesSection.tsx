import { useState } from 'react';
import { 
  Globe, 
  ShoppingBag, 
  Layout, 
  TrendingUp, 
  Bot, 
  Sparkles, 
  Search, 
  Presentation,
  ArrowRight,
  CheckCircle2,
  Check
} from 'lucide-react';
import { SERVICES_DATA } from '../data/services';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForInquiry: (serviceTitle: string) => void;
}

const ICON_MAP: Record<string, typeof Globe> = {
  Globe,
  ShoppingBag,
  Layout,
  TrendingUp,
  Bot,
  Sparkles,
  Search,
  Presentation
};

export function ServicesSection({ onSelectServiceForInquiry }: ServicesSectionProps) {
  const [selectedClientType, setSelectedClientType] = useState<string>('All');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const clientTypes = [
    'All',
    'Local Businesses',
    'Startups',
    'E-Commerce',
    'Creators',
    'Institutions'
  ];

  const filteredServices = selectedClientType === 'All'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.recommendedFor.some((rec) => rec.toLowerCase().includes(selectedClientType.toLowerCase())));

  return (
    <section id="services" className="py-20 sm:py-28 relative bg-[#0D0F17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Client-First Capabilities</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">
            What Can We Help You Build?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            We don’t sell technical jargon. We provide end-to-end digital solutions structured around your real commercial goals, audience, and growth.
          </p>

          {/* Interactive Client Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <span className="text-xs text-slate-400 font-medium mr-1">Filter by your profile:</span>
            {clientTypes.map((type) => (
              <button
                key={type}
                id={`filter-client-${type.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedClientType(type)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedClientType === type
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-white/5'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid (8 Outcome Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {filteredServices.map((service) => {
            const IconComponent = ICON_MAP[service.iconName] || Globe;

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 border border-white/10 group hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-950/40 relative overflow-hidden"
              >
                {/* Top icon and tags */}
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-800 text-slate-400 border border-white/5">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Outcome Formula: BENEFIT & RESULT */}
                  <div className="space-y-2.5 pt-3 border-t border-white/5 mb-5">
                    <div className="bg-slate-900/60 p-2.5 rounded-lg border border-white/5">
                      <div className="text-[10px] font-bold text-indigo-300 uppercase tracking-wider mb-1 flex items-center gap-1">
                        <span>Benefit</span>
                      </div>
                      <p className="text-xs text-slate-200 leading-snug">
                        {service.benefit}
                      </p>
                    </div>

                    <div className="bg-emerald-950/20 p-2.5 rounded-lg border border-emerald-500/20">
                      <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                        <span>Expected Outcome</span>
                      </div>
                      <p className="text-xs text-slate-200 leading-snug">
                        {service.result}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-2 mt-auto">
                  <button
                    id={`service-deliverables-btn-${service.id}`}
                    onClick={() => setActiveModalService(service)}
                    className="text-xs text-slate-400 hover:text-white transition-colors underline-offset-4 hover:underline"
                  >
                    View Deliverables
                  </button>

                  <button
                    id={`service-inquiry-btn-${service.id}`}
                    onClick={() => onSelectServiceForInquiry(service.title)}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold text-indigo-300 bg-indigo-500/10 hover:bg-indigo-600 hover:text-white border border-indigo-500/30 transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Small reassurance banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-slate-900/60 to-emerald-950/30 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Not sure which service you need?</h4>
              <p className="text-xs text-slate-300">
                You do not need to diagnose your project alone. Tell us what you want to achieve, and we will recommend the right path.
              </p>
            </div>
          </div>
          <button
            id="services-recommendation-cta"
            onClick={() => onSelectServiceForInquiry('General Consultation / Not Sure Yet')}
            className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shrink-0 transition-colors cursor-pointer"
          >
            Free Project Consultation →
          </button>
        </div>
      </div>

      {/* Deliverables Detail Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#131722] border border-white/15 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">
                  Service Deliverables
                </span>
                <h3 className="font-heading text-xl font-bold text-white">
                  {activeModalService.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalService(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white bg-slate-800"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-300 mb-5 leading-relaxed">
              {activeModalService.benefit}
            </p>

            <div className="space-y-2 mb-6">
              <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                What’s Included:
              </h4>
              {activeModalService.deliverables.map((del, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{del}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => setActiveModalService(null)}
                className="px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-white"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const sTitle = activeModalService.title;
                  setActiveModalService(null);
                  onSelectServiceForInquiry(sTitle);
                }}
                className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500"
              >
                Discuss {activeModalService.title} →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
