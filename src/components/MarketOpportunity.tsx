import React from 'react';
import { motion } from 'motion/react';
import { marketCards } from '../data/siteData';
import { TrendingUp, Award, DollarSign, Handshake } from 'lucide-react';

export const MarketOpportunity: React.FC = () => {
  return (
    <section
      id="market"
      className="py-24 sm:py-32 bg-gradient-to-br from-[#202020] via-[#262626] to-[#202020] text-[#D6D6D6] relative overflow-hidden"
    >
      {/* Subtle geometric pattern / glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFEE32]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end pb-12 sm:pb-16 border-b border-[#333533]"
        >
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#FFEE32] uppercase tracking-wider mb-3">
              <span className="w-5 h-[2px] bg-[#FFEE32]" />
              <span>Market opportunity</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FFFFFF] leading-[1.12]">
              An open market, waiting for a local producer
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-base sm:text-lg text-[#D6D6D6]/80 leading-relaxed">
              Ghana's inland waterways, fishing communities, and coastal transport networks create sustained demand for durable marine repair materials with no local producer of marine fairing compounds yet serving it.
            </p>
          </div>
        </motion.div>

        {/* 3-Column Market Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
          {marketCards.map((card, idx) => (
            <motion.div
              key={card.id}
              id={`market-card-${idx + 1}`}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#333533]/80 hover:bg-[#333533] border border-[#333533] hover:border-[#FFEE32]/50 backdrop-blur-md rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display font-bold text-2xl text-[#FFEE32]">
                    {card.number}
                  </span>
                  <div className="p-2 rounded-lg bg-[#202020] border border-[#333533] text-[#FFEE32]">
                    {idx === 0 && <Award className="w-5 h-5 text-[#FFEE32]" />}
                    {idx === 1 && <DollarSign className="w-5 h-5 text-[#FFEE32]" />}
                    {idx === 2 && <Handshake className="w-5 h-5 text-[#FFEE32]" />}
                  </div>
                </div>

                <h4 className="font-display text-xl font-bold text-[#FFFFFF] mb-3">
                  {card.title}
                </h4>

                <p className="text-xs sm:text-sm text-[#D6D6D6]/80 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 text-[11px] font-semibold text-[#FFEE32] uppercase tracking-wider">
                Strategic Advantage
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
