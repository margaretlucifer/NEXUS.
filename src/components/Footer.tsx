import { ArrowUp, Mail, MessageCircle, Github, Linkedin, Sparkles } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#090B10] border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large Aesthetic Typography Headline */}
        <div className="border-b border-white/10 pb-12 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 block mb-2">
                NEXUS CO-LAB • FREELANCE DIGITAL TEAM
              </span>
              <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 leading-none">
                BUILD. DESIGN. GROW.
              </h2>
            </div>

            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors self-start md:self-auto flex items-center gap-2 text-xs font-medium"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Links & Information Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12 text-sm">
          {/* Col 1: Brand positioning */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-emerald-400 p-[1px]">
                <div className="w-full h-full bg-[#0D0F17] rounded-[7px] flex items-center justify-center font-heading font-black text-xs text-white">
                  NX
                </div>
              </div>
              <span className="font-heading font-bold text-lg text-white">
                NEXUS CO-LAB
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              A multidisciplinary freelance team combining web engineering, UI/UX design, marketing strategy, operations, and product storytelling to turn your ideas into digital reality.
            </p>
            <div className="text-xs text-emerald-400 font-medium flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for new freelance projects & consulting</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-300 mb-3">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#services" className="hover:text-white transition-colors">Services & Outcomes</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Verified Case Studies</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why Work With Us</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">The Team</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Process & Workflow</a></li>
              <li><a href="#packages" className="hover:text-white transition-colors">Freelance Packages</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact & Inquiries</a></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-300 mb-3">
              Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#services" className="hover:text-white transition-colors">Websites & Web Apps</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">E-Commerce Stores</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">UI/UX & Figma Prototyping</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">SEO & Growth Marketing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">AI & Workflow Automation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Investor Pitch Decks</a></li>
            </ul>
          </div>

          {/* Col 4: Direct Channels */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-300 mb-3">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a
                  href="mailto:uriaryan7565@gmail.com"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-indigo-400" />
                  <span className="truncate">uriaryan7565@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/?text=Hello%20Nexus%20Co-Lab%20team%2C%20I%20would%20like%20to%20discuss%20a%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-emerald-400"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Chat</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & honest ethics note */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} NEXUS CO-LAB. All rights reserved.
          </div>
          <div className="text-center sm:text-right">
            <span>Honest Freelance Collective • Designed for Real Client Results</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
