import React from 'react';
import { motion } from 'motion/react';
import { Eye, Target } from 'lucide-react';

export const VisionMission: React.FC = () => {
  return (
    <section id="vision-mission" className="grid grid-cols-1 lg:grid-cols-2 border-t border-b border-[#333533] overflow-hidden">
      {/* Vision Panel (Dark Neutral #202020) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="bg-[#202020] text-[#D6D6D6] p-10 sm:p-16 lg:p-20 flex flex-col justify-center relative overflow-hidden border-b lg:border-b-0 lg:border-r border-[#333533]"
      >
        <div className="absolute right-0 top-0 w-64 h-64 bg-[#FFEE32]/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#FFEE32] mb-6">
            <Eye className="w-4 h-4 text-[#FFEE32]" />
            <span>Our Vision</span>
          </div>

          <p className="font-display text-2xl sm:text-3xl lg:text-3xl font-semibold leading-snug text-[#FFFFFF]">
            “To become a leading Ghanaian and regional provider of industrial coatings, marine solutions, and locally manufactured marine materials — contributing to safer transportation systems and sustainable industrial growth.”
          </p>
        </div>
      </motion.div>

      {/* Mission Panel (Charcoal #333533 with Yellow Accents) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="bg-[#333533] text-[#D6D6D6] p-10 sm:p-16 lg:p-20 flex flex-col justify-center relative overflow-hidden"
      >
        <div className="absolute right-0 bottom-0 w-64 h-64 bg-[#FFEE32]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#FFEE32] mb-6">
            <Target className="w-4 h-4 text-[#FFEE32]" />
            <span>Our Mission</span>
          </div>

          <p className="font-display text-2xl sm:text-3xl lg:text-3xl font-semibold leading-snug text-[#D6D6D6]">
            “To deliver technically sound, locally relevant, and sustainable solutions that strengthen Ghana's construction and marine industries while creating long-term economic and environmental value.”
          </p>
        </div>
      </motion.div>
    </section>
  );
};
