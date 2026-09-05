import React from 'react';
import { motion } from 'motion/react';
import { timelineData } from '../data/siteData';
import { CheckCircle2, Globe2, Wrench, Shield } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#202020] text-[#D6D6D6] relative">
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
              <span>Background</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FFFFFF] leading-[1.12]">
              Built on UK standards, applied locally
            </h2>
          </div>

          <div className="lg:col-span-6">
            <p className="text-base sm:text-lg text-[#D6D6D6]/80 leading-relaxed">
              Since 2017, we've delivered specialised technical services across Ghana's construction and marine sectors applying international best practice adapted to local environmental and operational realities.
            </p>
          </div>
        </motion.div>

        {/* Section Content: Narrative + Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12 items-start">
          {/* Narrative Column */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6 text-[#D6D6D6]/85 text-base sm:text-lg leading-relaxed"
          >
            <p>
              <strong className="font-semibold text-[#FFFFFF]">LAUS DEO CONSULT</strong> is a Ghanaian technical consulting and industrial solutions company with core expertise in paints and industrial coatings, waterproofing systems, boat and canoe repair, and construction consultancy. We operate nationwide in Ghana and internationally.
            </p>
            <p>
              Our experience working in <span className="font-medium text-[#FFEE32]">London, United Kingdom</span> has strengthened our technical capacity, quality standards, and project execution positioning us as a reliable partner for both private and public-sector stakeholders.
            </p>

            {/* Core Capability Badges */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#333533]/60 border border-[#333533] flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#FFEE32]/15 text-[#FFEE32] shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-sm text-[#FFFFFF]">Rigorous Quality Assurance</h4>
                  <p className="text-xs text-[#D6D6D6]/70 mt-1">International coating thickness and adhesion testing protocols.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#333533]/60 border border-[#333533] flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#FFEE32]/15 text-[#FFEE32] shrink-0">
                  <Globe2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-sm text-[#FFFFFF]">Nationwide & Regional Reach</h4>
                  <p className="text-xs text-[#D6D6D6]/70 mt-1">Mobilized deployment across coastal fishing harbours and inland hubs.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Timeline Column */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 bg-[#333533]/50 border border-[#333533] rounded-2xl p-6 sm:p-8"
          >
            <h3 className="font-display font-bold text-lg text-[#FFFFFF] mb-6 flex items-center gap-2">
              <Wrench className="w-5 h-5 text-[#FFEE32]" />
              <span>Milestones & Technical Evolution</span>
            </h3>

            <div className="relative pl-6 space-y-8 before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-[#D6D6D6]/20">
              {timelineData.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Node Dot */}
                  <span className="absolute -left-[27px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#FFEE32] ring-4 ring-[#202020] group-hover:scale-125 transition-transform" />
                  
                  <div className="flex items-center gap-2">
                    <span className="font-display font-bold text-xs text-[#202020] bg-[#FFEE32] px-2.5 py-0.5 rounded-md">
                      {item.year}
                    </span>
                    <h4 className="font-display font-semibold text-sm text-[#FFFFFF]">
                      {item.title}
                    </h4>
                  </div>
                  
                  <p className="mt-2 text-xs sm:text-sm text-[#D6D6D6]/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
