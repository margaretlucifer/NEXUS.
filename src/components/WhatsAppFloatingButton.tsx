import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export function WhatsAppFloatingButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-3">
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#131722] border border-emerald-500/30 text-white text-xs px-3.5 py-2 rounded-xl shadow-xl shadow-black/50 animate-in fade-in slide-in-from-right-4 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Have an idea? <strong>Chat on WhatsApp</strong></span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white ml-1"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <a
        id="floating-whatsapp-btn"
        href="https://wa.me/?text=Hello%20Nexus%20Co-Lab%20team%2C%20I%20have%20an%20idea%20and%20would%20like%20to%20discuss%20a%20freelance%20project."
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 hover:scale-105 transition-all cursor-pointer group"
        aria-label="Chat with the team on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 group-hover:rotate-12 transition-transform" />
      </a>
    </div>
  );
}
