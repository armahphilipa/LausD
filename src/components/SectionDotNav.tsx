import React, { useEffect, useState } from 'react';

interface Section {
  id: string;
  label: string;
}

const sections: Section[] = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'team', label: 'Team' },
  { id: 'focus', label: 'Services' },
  { id: 'manufacturing', label: 'Manufacturing' },
  { id: 'impact', label: 'Impact' },
  { id: 'market', label: 'Market' },
  { id: 'faq', label: 'FAQ' },
  { id: 'partner', label: 'Partner' },
];

export const SectionDotNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.35,
      rootMargin: '-10% 0px -40% 0px',
    });

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      id="dotnav"
      aria-label="Section navigation"
      className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-[150] flex-col gap-3.5 bg-[#202020]/85 backdrop-blur-md p-2 rounded-full border border-[#333533] shadow-lg"
    >
      {sections.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <button
            key={section.id}
            id={`dotnav-btn-${section.id}`}
            onClick={() => scrollToSection(section.id)}
            aria-label={`Scroll to ${section.label}`}
            className="group relative flex items-center justify-center p-1 cursor-pointer focus:outline-none"
          >
            <span
              className={`rounded-full transition-all duration-300 ${
                isActive
                  ? 'w-3 h-3 bg-[#FFEE32] ring-4 ring-[#FFEE32]/25'
                  : 'w-2 h-2 bg-[#D6D6D6]/40 hover:bg-[#FFEE32] hover:scale-125'
              }`}
            />
            {/* Tooltip on hover */}
            <span className="pointer-events-none absolute right-7 px-2.5 py-1 rounded bg-[#333533] text-[#D6D6D6] border border-white/10 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-md">
              {section.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};
