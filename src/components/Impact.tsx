import React from 'react';
import { motion } from 'motion/react';
import { impactData, priorityPills } from '../data/siteData';
import { ShieldCheck, Navigation, Users, Leaf, Cpu, Award } from 'lucide-react';

const getImpactIcon = (id: string) => {
  const iconClass = "w-6 h-6 text-[#FFEE32]";
  switch (id) {
    case 'safety':
      return <ShieldCheck className={iconClass} />;
    case 'transport':
      return <Navigation className={iconClass} />;
    case 'manufacturers':
      return <Users className={iconClass} />;
    case 'sustainability':
      return <Leaf className={iconClass} />;
    case 'capacity':
      return <Cpu className={iconClass} />;
    case 'skills':
      return <Award className={iconClass} />;
    default:
      return <ShieldCheck className={iconClass} />;
  }
};

export const Impact: React.FC = () => {
  return (
    <section id="impact" className="py-24 sm:py-32 bg-[#202020] text-[#D6D6D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end pb-12 sm:pb-16 border-b border-[#333533]"
        >
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#FFEE32] uppercase tracking-wider mb-3">
              <span className="w-5 h-[2px] bg-[#FFEE32]" />
              <span>Development & public value</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FFFFFF] leading-[1.12]">
              What this initiative delivers
            </h2>
          </div>

          <div className="lg:col-span-6">
            <p className="text-base sm:text-lg text-[#D6D6D6]/80 leading-relaxed">
              Beyond commercial value, locally manufactured marine materials and technical support create outcomes that reach fishing communities, artisans, and Ghana's wider industrial base.
            </p>
          </div>
        </motion.div>

        {/* 6-Cell Impact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
          {impactData.map((item, idx) => (
            <motion.div
              key={item.id}
              id={`impact-card-${item.id}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: (idx % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#333533]/60 hover:bg-[#333533] border border-[#333533] hover:border-[#FFEE32]/40 rounded-2xl p-7 transition-all duration-300 transform hover:-translate-y-1 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="p-3 rounded-xl bg-[#202020] w-fit mb-5 shadow-xs border border-[#333533]">
                  {getImpactIcon(item.id)}
                </div>

                <h4 className="font-display font-bold text-lg text-[#FFFFFF] mb-2.5">
                  {item.title}
                </h4>

                <p className="text-xs sm:text-sm text-[#D6D6D6]/75 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#202020] flex items-center justify-between text-[11px] font-semibold text-[#FFEE32] uppercase tracking-wider">
                <span>Direct Beneficiary Impact</span>
                <span>✓</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Strategic Priorities Badges / Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 pt-8 border-t border-[#333533]"
        >
          <p className="text-xs uppercase tracking-wider font-semibold text-[#D6D6D6]/60 mb-4">
            Aligned National & Regional Development Goals
          </p>
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {priorityPills.map((pill, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full border border-[#333533] bg-[#333533]/80 hover:border-[#FFEE32] hover:bg-[#FFEE32] hover:text-[#202020] text-[#D6D6D6] text-xs sm:text-sm font-semibold transition-all cursor-default"
              >
                {pill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
