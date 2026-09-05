import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#202020] text-[#D6D6D6]/70 pt-16 pb-12 border-t border-[#333533]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#333533]">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#hero"
              className="inline-block transition-transform hover:scale-[1.02] focus:outline-none"
              aria-label="Laus Deo Consult Home"
            >
              <img
                src="/logo-placeholder.svg"
                alt="Laus Deo Consult Logo"
                className="h-10 w-auto object-contain max-w-[200px]"
                referrerPolicy="no-referrer"
              />
            </a>

            <p className="text-xs sm:text-sm text-[#D6D6D6]/65 max-w-sm leading-relaxed">
              Industrial coatings, waterproofing, boat & canoe repair, and construction consultancy — built on UK technical standards, applied nationwide across Ghana since 2017.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-[#333533] border border-[#333533] text-[#FFEE32]">
                <span>●</span> Local Manufacturing Initiative
              </span>
            </div>
          </div>

          {/* Links Column 1: Company */}
          <div className="md:col-span-2 space-y-3">
            <h5 className="font-display font-semibold text-xs uppercase tracking-wider text-[#FFEE32]">
              Company
            </h5>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#about" className="hover:text-[#FFEE32] transition-colors">About Us</a>
              </li>
              <li>
                <a href="#team" className="hover:text-[#FFEE32] transition-colors">Our Team</a>
              </li>
              <li>
                <a href="#focus" className="hover:text-[#FFEE32] transition-colors">Core Services</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#FFEE32] transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Initiative */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="font-display font-semibold text-xs uppercase tracking-wider text-[#FFEE32]">
              Initiative
            </h5>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#manufacturing" className="hover:text-[#FFEE32] transition-colors">Local Manufacturing</a>
              </li>
              <li>
                <a href="#impact" className="hover:text-[#FFEE32] transition-colors">Development Impact</a>
              </li>
              <li>
                <a href="#partner" className="hover:text-[#FFEE32] transition-colors">Partner With Us</a>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Reach */}
          <div className="md:col-span-2 space-y-3">
            <h5 className="font-display font-semibold text-xs uppercase tracking-wider text-[#FFEE32]">
              Operational Reach
            </h5>
            <div className="space-y-2 text-xs text-[#D6D6D6]/60">
              <p>Ghana — Nationwide</p>
              <p>Inland Waterways & Harbours</p>
              <p>International Projects</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D6D6D6]/50">
          <p>© {new Date().getFullYear()} Laus Deo Consult. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Engineered for Ghana's water, work & weather</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-[#FFEE32] transition-colors text-xs font-medium"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
