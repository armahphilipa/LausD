import React from 'react';
import { motion } from 'motion/react';
import { manufacturingSteps } from '../data/siteData';
import { Factory, AlertCircle, CheckCircle, TreePine, Sparkles } from 'lucide-react';

export const Manufacturing: React.FC = () => {
  return (
    <section id="manufacturing" className="py-24 sm:py-32 bg-[#202020] text-[#D6D6D6] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-[#FFEE32]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#333533]/40 blur-3xl pointer-events-none" />

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
              <span>Manufacturing & industrial development</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FFFFFF] leading-[1.12]">
              Locally made marine fairing compounds
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-base sm:text-lg text-[#D6D6D6]/80 leading-relaxed">
              We are entering local manufacturing of industrial-strength marine fairing compounds, designed for boat and canoe manufacturers across Ghana and the wider sub-region.
            </p>
          </div>
        </motion.div>

        {/* 2-Column Grid: Solution Story + Step Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12 items-center">
          {/* Left Column: Context & Ecological/Economic Impact */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 space-y-6 text-[#D6D6D6]/85 text-base leading-relaxed"
          >
            <div className="p-6 rounded-2xl bg-[#333533]/70 border border-[#333533] backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-[#FFEE32]/15 text-[#FFEE32]">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <h4 className="font-display font-semibold text-[#FFFFFF] text-base">
                  The Problem in Water Transport
                </h4>
              </div>
              <p className="text-sm text-[#D6D6D6]/75 leading-relaxed">
                This responds to a critical gap in the marine and inland water transport sector. Today, technical support services are extremely limited, suitable marine-grade materials are largely imported or unavailable, and poor-quality repairs shorten vessel lifespan and put safety at risk.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#333533]/70 border border-[#FFEE32]/30 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-[#FFEE32]/20 text-[#FFEE32]">
                  <TreePine className="w-5 h-5" />
                </div>
                <h4 className="font-display font-semibold text-[#FFFFFF] text-base">
                  Easing Timber & Deforestation Pressure
                </h4>
              </div>
              <p className="text-sm text-[#D6D6D6]/75 leading-relaxed">
                The frequent replacement this drives also fuels indiscriminate use of scarce hardwood timber — a pressure our high-adhesion marine fairing compounds and technical training are engineered to systematically ease.
              </p>
            </div>

            {/* Value Highlights */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-[#333533] border border-[#333533] flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#FFEE32] shrink-0" />
                <span className="text-xs font-semibold text-[#FFFFFF]">Import Substitution</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#333533] border border-[#333533] flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#FFEE32] shrink-0" />
                <span className="text-xs font-semibold text-[#FFFFFF]">2x-3x Vessel Lifespan</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Connected Step-by-Step Flow */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 bg-[#333533]/50 border border-[#333533] rounded-3xl p-6 sm:p-8 backdrop-blur-md"
          >
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#333533]">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#FFEE32]">
                <Factory className="w-4 h-4" />
                <span>Sector Challenge Analysis</span>
              </div>
              <span className="text-xs text-[#D6D6D6]/50">4 Core Dynamics</span>
            </div>

            <div className="space-y-6 relative">
              {manufacturingSteps.map((step, idx) => (
                <div key={step.id} className="flex items-start gap-4 relative group">
                  {/* Step Connector Line */}
                  {idx < manufacturingSteps.length - 1 && (
                    <div className="absolute left-[17px] top-10 bottom-[-18px] w-[1px] bg-white/10 group-hover:bg-[#FFEE32]/50 transition-colors" />
                  )}

                  {/* Step Number Circle */}
                  <div className="w-9 h-9 rounded-full border border-[#FFEE32]/50 bg-[#FFEE32]/15 flex items-center justify-center font-display font-bold text-xs text-[#FFEE32] shrink-0 z-10 group-hover:bg-[#FFEE32] group-hover:text-[#202020] transition-all">
                    {step.id}
                  </div>

                  {/* Step Text */}
                  <div className="pt-0.5">
                    <h4 className="font-display font-semibold text-sm sm:base text-[#FFFFFF] mb-1">
                      {step.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#D6D6D6]/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
