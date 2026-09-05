import React, { useState } from 'react';
import { motion } from 'motion/react';
import { faqData } from '../data/siteData';
import { Plus, HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#202020] text-[#D6D6D6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-[#FFEE32] uppercase tracking-wider mb-3">
            <HelpCircle className="w-4 h-4 text-[#FFEE32]" />
            <span>Common questions</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FFFFFF]">
            Before you reach out
          </h2>
          <p className="mt-4 text-base text-[#D6D6D6]/70">
            Answers to what prospective partners, funders, and manufacturers frequently ask our team.
          </p>
        </motion.div>

        {/* Accordion List */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="divide-y divide-[#333533] border-y border-[#333533]"
        >
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="py-2">
                <button
                  type="button"
                  id={`faq-btn-${item.id}`}
                  onClick={() => toggleFAQ(item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left py-4 sm:py-5 flex items-center justify-between gap-4 group focus:outline-none"
                >
                  <span className="font-display font-semibold text-base sm:text-lg text-[#FFFFFF] group-hover:text-[#FFEE32] transition-colors">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full border border-[#333533] flex items-center justify-center text-[#FFEE32] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-45 bg-[#FFEE32] text-[#202020] border-transparent font-bold' : 'group-hover:border-[#FFEE32]'
                    }`}
                  >
                    <Plus className="w-4 h-4" />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 pb-5' : 'grid-rows-[0fr] opacity-0 pb-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm sm:text-base text-[#D6D6D6]/80 leading-relaxed pr-8">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
