import React, { useState } from 'react';
import { motion } from 'motion/react';
import { teamData } from '../data/siteData';
import { TeamMember } from '../types';
import { 
  Award, 
  MapPin, 
  Globe2, 
  ChevronRight, 
  Quote, 
  Compass, 
  CheckCircle2, 
  Sparkles,
  Layers,
  Anchor
} from 'lucide-react';

export const Team: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<Record<string, 'uk' | 'ghana'>>({
    'kwame-asante': 'uk',
    'dr-efua-mensah': 'uk',
    'nii-armah-tagoe': 'uk',
  });

  const founder = teamData.find((m) => m.isFounder) || teamData[0];
  const otherMembers = teamData.filter((m) => !m.isFounder);

  const toggleTab = (id: string, tab: 'uk' | 'ghana') => {
    setSelectedTab((prev) => ({ ...prev, [id]: tab }));
  };

  return (
    <section id="team" className="py-24 sm:py-32 bg-[#202020] text-[#D6D6D6] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#FFEE32]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#333533]/40 rounded-full blur-3xl pointer-events-none" />

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
              <span>Leadership & technical personnel</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FFFFFF] leading-[1.12]">
              UK technical discipline, grounded in Ghanaian realities
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base sm:text-lg text-[#D6D6D6]/80 leading-relaxed">
              Our leadership unites advanced British marine coating standards and industrial engineering with deep operational roots across Ghana's waterways, ports, and construction projects.
            </p>
          </div>
        </motion.div>

        {/* Featured Founder Profile: Kennedy Boakye */}
        <div className="pt-12 sm:pt-16">
          <motion.div
            id={`team-member-${founder.id}`}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#333533] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden transition-all duration-300 group"
          >
            {/* Corner Decorative Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#FFEE32]/10 to-transparent pointer-events-none rounded-bl-full" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Founder Photo & Quick Badges */}
              <div className="lg:col-span-5 flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-3xl overflow-hidden shadow-l bg-[#202020] mb-6">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback to secondary public path if needed
                      const target = e.currentTarget;
                      if (!target.src.includes('kennedy_boakye')) {
                        target.src = '/images/kennedy-boakye.jpg';
                      }
                    }}
                  />
                </div>

                <div className="w-full">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#FFFFFF] tracking-tight">
                    {founder.name}
                  </h3>
                  <p className="text-sm font-semibold text-[#FFEE32] mt-0.5">
                    {founder.role}
                  </p>
                  <p className="text-xs sm:text-sm text-[#D6D6D6]/75 mt-3 leading-relaxed">
                    {founder.bio}
                  </p>

                  {/* Founder Quote */}
                  {founder.quote && (
                    <div className="mt-5 p-4 rounded-2xl bg-[#202020]/80 border border-[#333533] relative">
                      <Quote className="w-5 h-5 text-[#FFEE32]/40 absolute top-3 left-3 -scale-x-100" />
                      <p className="text-xs italic text-[#D6D6D6]/90 pl-6 leading-relaxed">
                        “{founder.quote}”
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Founder Dual Experience Columns */}
              <div className="lg:col-span-7 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {/* UK Experience Box */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-[#202020]/90 border border-[#333533] hover:border-[#FFEE32]/40 transition-colors">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FFEE32] mb-3 pb-2 border-b border-[#333533]">
                      <Globe2 className="w-4 h-4 text-[#FFEE32]" />
                      <span>UK Industry Experience</span>
                    </div>
                    <ul className="space-y-3">
                      {founder.ukExperience.map((exp, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#D6D6D6]/85 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-[#FFEE32] shrink-0 mt-0.5" />
                          <span>{exp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ghana Expertise Box */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-[#202020]/90 border border-[#333533] hover:border-[#FFEE32]/40 transition-colors">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FFEE32] mb-3 pb-2 border-b border-[#333533]">
                      <MapPin className="w-4 h-4 text-[#FFEE32]" />
                      <span>Local Ghanaian Expertise</span>
                    </div>
                    <ul className="space-y-3">
                      {founder.ghanaExpertise.map((exp, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#D6D6D6]/85 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-[#FFEE32] shrink-0 mt-0.5" />
                          <span>{exp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Specialties Badges */}
                <div className="pt-2">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#D6D6D6]/60 block mb-2.5">
                    Core Technical Domains
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {founder.specialties.map((spec, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#202020] border border-[#FFEE32]/30 text-[#FFFFFF]"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

     

        {/* Value Callout: Why This Dual Pedigree Matters */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#333533] to-[#202020] border border-[#333533] flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-display font-bold text-lg sm:text-xl text-[#FFFFFF] flex items-center justify-center md:justify-start gap-2">
              <Award className="w-5 h-5 text-[#FFEE32]" />
              <span>Engineered for Reliability. Built for West Africa.</span>
            </h4>
            <p className="text-xs sm:text-sm text-[#D6D6D6]/75 max-w-2xl">
              By applying British standards directly to Ghanaian materials and tropical operational stresses, we provide marine and industrial clients with durability that imported off-the-shelf products cannot deliver.
            </p>
          </div>
          <a
            href="#partner"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFEE32] hover:bg-[#ffe800] text-[#202020] text-xs sm:text-sm font-bold shadow-lg transition-all"
          >
            <span>Consult our technical team</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
