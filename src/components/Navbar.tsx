import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, MessageSquare, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenContact: (prefillService?: string) => void;
  onOpenEstimator: () => void;
}

export function Navbar({ onOpenContact, onOpenEstimator }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Team', href: '#team' },
    { name: 'Process', href: '#process' },
    { name: 'Packages', href: '#packages' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0D0F17]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/30'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            id="nav-logo"
            href="#"
            className="flex items-center gap-2.5 group cursor-pointer text-left"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-indigo-600 via-indigo-500 to-emerald-400 p-[1px] shadow-sm shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#0D0F17] rounded-[7px] flex items-center justify-center">
                <span className="font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400 text-sm">
                  NX
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-bold text-base text-slate-100 tracking-tight group-hover:text-indigo-300 transition-colors">
                  NEXUS CO-LAB
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" title="Available for projects" />
              </div>
              <span className="block text-[11px] font-medium text-slate-400 tracking-wider uppercase">
                Freelance Digital Team
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav-links" className="hidden lg:flex items-center gap-1 bg-slate-900/50 p-1.5 rounded-full border border-white/10 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`nav-link-${link.name.toLowerCase()}`}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="nav-scope-estimator-btn"
              onClick={onOpenEstimator}
              className="px-3.5 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-white/10 transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Project Estimator</span>
            </button>

            <button
              id="nav-hire-us-btn"
              onClick={() => onOpenContact()}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-emerald-500 transition-all shadow-md shadow-indigo-600/20 hover:shadow-indigo-500/30 flex items-center gap-1.5 group cursor-pointer"
            >
              <span>Hire Us</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile menu hamburger toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              id="nav-mobile-quick-contact"
              onClick={() => onOpenContact()}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 sm:hidden"
            >
              Hire Us
            </button>
            <button
              id="nav-mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800/80 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="lg:hidden bg-[#0D0F17]/95 border-b border-white/10 backdrop-blur-xl px-4 pt-3 pb-6 mt-3 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="grid grid-cols-2 gap-2 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`mobile-nav-link-${link.name.toLowerCase()}`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors block text-left"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <button
              id="mobile-scope-estimator-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEstimator();
              }}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-medium text-slate-200 bg-slate-800/90 border border-white/10 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Interactive Project Estimator</span>
            </button>

            <button
              id="mobile-hire-us-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-500 flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Start a Project Discussion</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
