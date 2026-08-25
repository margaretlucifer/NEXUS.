import React, { useState, useEffect } from 'react';
import { 
  Send, 
  MessageCircle, 
  Mail, 
  Phone, 
  CheckCircle2, 
  Sparkles, 
  Copy, 
  Check, 
  ArrowRight,
  ShieldAlert,
  Clock
} from 'lucide-react';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  initialService?: string;
  initialDescription?: string;
  initialTimeline?: string;
  initialBudget?: string;
}

export function ContactSection({ 
  initialService, 
  initialDescription, 
  initialTimeline, 
  initialBudget 
}: ContactSectionProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phoneWhatsApp: '',
    businessOrg: '',
    serviceNeeded: initialService || 'Website',
    projectDescription: initialDescription || '',
    budgetRange: initialBudget || '',
    expectedTimeline: initialTimeline || ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedBrief, setCopiedBrief] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync prop changes if prefilled externally
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceNeeded: initialService }));
    }
    if (initialDescription) {
      setFormData((prev) => ({ 
        ...prev, 
        projectDescription: prev.projectDescription ? `${prev.projectDescription}\n${initialDescription}` : initialDescription 
      }));
    }
    if (initialTimeline) {
      setFormData((prev) => ({ ...prev, expectedTimeline: initialTimeline }));
    }
    if (initialBudget) {
      setFormData((prev) => ({ ...prev, budgetRange: initialBudget }));
    }
  }, [initialService, initialDescription, initialTimeline, initialBudget]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate real local processing & storing inquiry
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      try {
        const existing = JSON.parse(localStorage.getItem('nexus_project_inquiries') || '[]');
        existing.push({ ...formData, timestamp: new Date().toISOString() });
        localStorage.setItem('nexus_project_inquiries', JSON.stringify(existing));
      } catch (err) {
        console.error('Storage error', err);
      }
    }, 600);
  };

  const generateWhatsAppUrl = () => {
    const message = `Hello Nexus Co-Lab team! I'm reaching out regarding a ${formData.serviceNeeded || 'digital project'}. Name: ${formData.name || 'Client'}. Project brief: ${formData.projectDescription || 'Interested in discussing a project.'}`;
    return `https://wa.me/?text=${encodeURIComponent(message)}`;
  };

  const copyBriefToClipboard = () => {
    const briefText = `PROJECT INQUIRY — NEXUS CO-LAB\n--------------------------------\nClient: ${formData.name || 'N/A'}\nEmail: ${formData.email || 'N/A'}\nPhone/WhatsApp: ${formData.phoneWhatsApp || 'N/A'}\nBusiness/Org: ${formData.businessOrg || 'N/A'}\nService Needed: ${formData.serviceNeeded}\nBudget: ${formData.budgetRange || 'Flexible'}\nTimeline: ${formData.expectedTimeline || 'Flexible'}\n\nProject Details:\n${formData.projectDescription || 'N/A'}`;
    navigator.clipboard.writeText(briefText);
    setCopiedBrief(true);
    setTimeout(() => setCopiedBrief(false), 2500);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative bg-[#0D0F17] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info & WhatsApp Quick Chat */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open for Client Inquiries</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Let's Build Something.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Have a website idea, business problem, product concept or marketing challenge? Tell us what you're working on — even if you only have a rough idea and don't know exactly what you need yet.
              </p>
            </div>

            {/* Quick WhatsApp Highlight Card */}
            <div className="glass-panel p-6 rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/20 to-slate-900/60 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-white">
                    Prefer Fast Direct Chat?
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Message us directly on WhatsApp for quick questions, voice notes, or rapid consultations.
                  </p>
                  <a
                    id="contact-whatsapp-direct-btn"
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3.5 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all shadow-md shadow-emerald-600/20"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Email & Team Channels */}
            <div className="space-y-3.5">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/60 border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Direct Inquiries</div>
                  <a
                    href="mailto:uriaryan7565@gmail.com"
                    className="text-xs sm:text-sm font-semibold text-white hover:text-indigo-300 transition-colors truncate block"
                  >
                    uriaryan7565@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/60 border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">Response Guarantee</div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-200">
                    Within 24 business hours (often within 2 hrs)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-9 rounded-2xl border border-white/10 shadow-2xl relative">
              {submitted ? (
                <div className="text-center py-10 space-y-5 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white">
                    Inquiry Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>. Our team has recorded your brief. We will review your requirements and reply with next steps within 24 hours.
                  </p>

                  {/* Summary Box */}
                  <div className="bg-slate-950/80 p-4 rounded-xl border border-white/10 text-left text-xs text-slate-300 max-w-md mx-auto space-y-1.5">
                    <div><strong>Service:</strong> {formData.serviceNeeded}</div>
                    {formData.businessOrg && <div><strong>Organization:</strong> {formData.businessOrg}</div>}
                    {formData.expectedTimeline && <div><strong>Timeline:</strong> {formData.expectedTimeline}</div>}
                    <div><strong>Project Overview:</strong> {formData.projectDescription}</div>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <button
                      onClick={copyBriefToClipboard}
                      className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-white/10 flex items-center gap-1.5"
                    >
                      {copiedBrief ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      <span>{copiedBrief ? 'Brief Copied!' : 'Copy Inquiry Brief'}</span>
                    </button>

                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 flex items-center gap-1.5"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send to WhatsApp</span>
                    </a>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-white"
                    >
                      Send Another Note
                    </button>
                  </div>
                </div>
              ) : (
                <form id="project-inquiry-form" onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="input-name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Name <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        id="input-name"
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Alex Morgan"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="input-email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Email Address <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        id="input-email"
                        type="email"
                        name="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone / WhatsApp */}
                    <div>
                      <label htmlFor="input-phone" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        id="input-phone"
                        type="tel"
                        name="phoneWhatsApp"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phoneWhatsApp}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>

                    {/* Business / Org */}
                    <div>
                      <label htmlFor="input-business" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Business / Organization
                      </label>
                      <input
                        id="input-business"
                        type="text"
                        name="businessOrg"
                        placeholder="Brand name, cafe, or personal"
                        value={formData.businessOrg}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* What do you need? (Dropdown) */}
                  <div>
                    <label htmlFor="select-service" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      What do you need? <span className="text-emerald-400">*</span>
                    </label>
                    <select
                      id="select-service"
                      name="serviceNeeded"
                      value={formData.serviceNeeded}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    >
                      <option value="Website">Website (Landing page, Business site, Portfolio)</option>
                      <option value="E-commerce">E-Commerce Store (Shop, Catalog, Checkout)</option>
                      <option value="UI/UX">UI/UX Design & Figma Prototyping</option>
                      <option value="Branding">Branding & Visual Identity</option>
                      <option value="Marketing">Digital Marketing & SEO Growth</option>
                      <option value="AI Automation">AI & Workflow Automation</option>
                      <option value="Market Research">Market Research & Competitor Benchmarking</option>
                      <option value="Pitch Deck">Pitch Deck & Product Presentation</option>
                      <option value="Custom Project">Custom Multi-disciplinary Project</option>
                    </select>
                  </div>

                  {/* Tell us about your project */}
                  <div>
                    <label htmlFor="textarea-project-desc" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Tell us about your project <span className="text-emerald-400">*</span>
                    </label>
                    <textarea
                      id="textarea-project-desc"
                      name="projectDescription"
                      required
                      rows={4}
                      placeholder="Share your goals, target audience, preferred features, existing links, or rough ideas..."
                      value={formData.projectDescription}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors resize-y"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Budget Range — Optional */}
                    <div>
                      <label htmlFor="input-budget" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Budget Range — Optional
                      </label>
                      <input
                        id="input-budget"
                        type="text"
                        name="budgetRange"
                        placeholder="e.g. Starter / Flexible / $1k-$3k"
                        value={formData.budgetRange}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>

                    {/* Expected Timeline — Optional */}
                    <div>
                      <label htmlFor="input-timeline" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Expected Timeline — Optional
                      </label>
                      <input
                        id="input-timeline"
                        type="text"
                        name="expectedTimeline"
                        placeholder="e.g. Within 2 weeks / Next month"
                        value={formData.expectedTimeline}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-2">
                    <button
                      id="submit-inquiry-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-500 hover:from-indigo-500 hover:to-emerald-400 transition-all duration-200 shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Sending Inquiry...</span>
                      ) : (
                        <>
                          <span>Send Project Inquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
