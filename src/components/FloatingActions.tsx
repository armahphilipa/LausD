import React from 'react';
import { MessageSquarePlus, ArrowUp } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside
      aria-label="Quick contact and actions"
      className="fixed bottom-6 right-6 z-[180] flex flex-col gap-3 items-end"
    >
      {/* Scroll to Top / Partner Quick Action */}
      <a
        href="#partner"
        id="float-partner-btn"
        aria-label="Initiate partnership inquiry"
        title="Initiate partnership inquiry"
        className="w-12 h-12 rounded-full bg-[#FFEE32] hover:bg-[#ffe800] text-[#202020] flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-1 group"
      >
        <MessageSquarePlus className="w-5 h-5 group-hover:scale-110 transition-transform" />
      </a>

      {/* WhatsApp Floating Trigger */}
      <a
        href="https://wa.me/447898010522"
        id="float-whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp with our technical team"
        className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-1"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12 2a10 10 0 00-8.6 15.1L2 22l5.1-1.3A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1112 20.2zm4.5-6.2c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.7.9-.3.2-.5.1a6.8 6.8 0 01-2-1.2 7.4 7.4 0 01-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.4c.1-.1.2-.3.2-.4a.5.5 0 000-.5c-.1-.1-.5-1.2-.7-1.7s-.4-.4-.5-.4h-.5a.9.9 0 00-.7.3 2.7 2.7 0 00-.8 2 4.7 4.7 0 001 2.5 10.7 10.7 0 004.1 3.6c.6.2 1 .4 1.4.5.6.2 1.1.1 1.5.1.5-.1 1.4-.6 1.6-1.1s.2-1 .1-1.1-.2-.2-.4-.3z" />
        </svg>
      </a>
    </aside>
  );
};
