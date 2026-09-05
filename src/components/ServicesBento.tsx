import React from 'react';
import { motion } from 'motion/react';
import { Shield, Droplets, Anchor, Building2, ArrowUpRight } from 'lucide-react';
import { servicesData } from '../data/siteData';
import { ServiceImageCarousel } from './ServiceImageCarousel';

const getIcon = (name: string, isCore = false) => {
  const iconClass = `w-8 h-8 ${isCore ? 'text-[#FFEE32]' : 'text-[#FFEE32]'}`;
  switch (name) {
    case 'Shield':
      return <Shield className={iconClass} />;
    case 'Droplets':
      return <Droplets className={iconClass} />;
    case 'Anchor':
      return <Anchor className={iconClass} />;
    case 'Building2':
      return <Building2 className={iconClass} />;
    default:
      return <Shield className={iconClass} />;
  }
};

export const ServicesBento: React.FC = () => {
  const coreService = servicesData.find((s) => s.isCore);
  const otherServices = servicesData.filter((s) => !s.isCore);

  return (
    <section id="focus" className="py-24 sm:py-32 bg-[#202020] text-[#D6D6D6]">
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
              <span>What we do</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FFFFFF] leading-[1.12]">
              Four strategic areas
            </h2>
          </div>

          <div className="lg:col-span-6">
            <p className="text-base sm:text-lg text-[#D6D6D6]/80 leading-relaxed">
              From protective coatings to marine repair, every service is delivered with the same technical discipline  adapted to the project, the site, and the client.
            </p>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-12">
          {/* Featured Core Service Card (Spans 5 cols on lg, full height) */}
          {coreService && (
            <motion.div
              id={`service-card-${coreService.id}`}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 bg-[#333533] text-[#D6D6D6] rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-xl border border-[#FFEE32]/30 group hover:border-[#FFEE32]/60 hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Subtle background glow */}
              <div className="absolute -right-16 -bottom-16 w-56 h-56 rounded-full bg-[#FFEE32]/10 blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  {coreService.tag && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#FFEE32]/15 text-[#FFEE32] border border-[#FFEE32]/30">
                      {coreService.tag}
                    </span>
                  )}
                </div>

                {/* Core Service Real-world Scrollable Image Carousel */}
                <ServiceImageCarousel
                  images={
                    coreService.images && coreService.images.length > 0
                      ? coreService.images
                      : coreService.image
                      ? [{ url: coreService.image, caption: coreService.title }]
                      : []
                  }
                  title={coreService.title}
                  heightClass="h-52 sm:h-60"
                  idPrefix={`service-${coreService.id}`}
                />

                <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3 tracking-tight text-[#FFFFFF]">
                  {coreService.title}
                </h3>

                <p className="text-sm sm:text-base text-[#D6D6D6]/85 leading-relaxed font-normal">
                  {coreService.description}
                </p>
              </div>

              <div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-[#D6D6D6]/60 font-medium uppercase tracking-wider">
                  Engineered Durability
                </span>
                <a
                  href="#partner"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#FFEE32] hover:text-white transition-colors"
                >
                  <span>Request specification</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          )}

          {/* Secondary Services Grid (Spans 7 cols on lg) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {otherServices.map((service, index) => (
              <motion.div
                key={service.id}
                id={`service-card-${service.id}`}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, delay: (index + 1) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`bg-[#333533]/70 border border-[#333533] rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-lg hover:border-[#FFEE32]/50 hover:bg-[#333533] hover:-translate-y-1 transition-all duration-300 group ${
                  index === 2 ? 'sm:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-semibold text-[#FFEE32] uppercase tracking-wider">
                      {service.id === 'waterproofing' ? 'Structural Barrier' : service.id === 'marine-repair' ? 'Marine Transport' : 'Technical Supervision'}
                    </span>
                  </div>

                  {/* Strategic Area Scrollable Image Carousel */}
                  <ServiceImageCarousel
                    images={
                      service.images && service.images.length > 0
                        ? service.images
                        : service.image
                        ? [{ url: service.image, caption: service.title }]
                        : []
                    }
                    title={service.title}
                    heightClass={index === 2 ? 'h-44 sm:h-52' : 'h-36 sm:h-40'}
                    idPrefix={`service-${service.id}`}
                  />

                  <h3 className="font-display text-xl font-bold text-[#FFFFFF] mb-2.5">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#D6D6D6]/75 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#202020] flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#FFEE32] uppercase tracking-wider">
                    Specialised Solutions
                  </span>
                  <a
                    href="#partner"
                    className="p-1.5 rounded-full hover:bg-[#202020] text-[#FFEE32] transition-colors"
                    aria-label={`Inquire about ${service.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
