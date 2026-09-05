import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, ShieldCheck, Award, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import { statsData } from '../data/siteData';

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  format?: 'year' | 'number';
}

const CountUp: React.FC<CountUpProps> = ({ end, duration = 1200, suffix = '', format = 'number' }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3); // cubic ease-out
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [hasStarted, end, duration]);

  return (
    <span ref={elementRef} className="tabular-nums font-bold">
      {format === 'year' ? count : `${count}${suffix}`}
    </span>
  );
};

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center bg-gradient-to-br from-[#202020] via-[#262626] to-[#202020] text-[#D6D6D6] overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Background Ambience Glow */}
      <div
        className="absolute -right-32 -top-24 w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-[#FFEE32]/10 to-[#333533]/50 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -left-32 bottom-0 w-[500px] h-[500px] rounded-full bg-[#333533]/60 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Decorative Blueprint Vector Ring */}
      <svg
        className="absolute right-0 top-1/4 w-[480px] h-[480px] opacity-20 pointer-events-none hidden xl:block"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="200" cy="200" r="180" stroke="#FFEE32" strokeWidth="1" strokeDasharray="4 8" />
        <circle cx="200" cy="200" r="130" stroke="#D6D6D6" strokeWidth="1.5" />
        <path d="M50 200h300M200 50v300" stroke="#D6D6D6" strokeWidth="0.5" strokeOpacity="0.4" />
      </svg>

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Column */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] text-[#FFFFFF] max-w-2xl">
              Protection engineered for Ghana's{' '}
              <span className="text-[#FFEE32]">
                water, work & weather
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="mt-6 text-base sm:text-lg text-[#D6D6D6]/85 leading-relaxed max-w-xl font-normal">
              Industrial coatings, waterproofing, boat and canoe repair, and construction consultancy  built on technical standards developed over five years in the UK, applied to Ghanaian conditions.
            </p>

            {/* Call to Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#partner"
                id="hero-cta-partner"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#FFEE32] hover:bg-[#ffe800] text-[#202020] font-bold text-sm tracking-wide shadow-lg shadow-[#FFEE32]/15 hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Partner with us</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#focus"
                id="hero-cta-services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#D6D6D6]/30 hover:border-[#FFEE32] bg-[#333533]/50 hover:bg-[#333533] text-[#D6D6D6] hover:text-[#FFEE32] font-medium text-sm transition-all"
              >
                <span>Explore services</span>
              </a>
            </div>

            {/* Quick credibility bullet tags */}
            <div className="mt-8 pt-6 border-t border-[#333533] flex flex-wrap items-center gap-6 text-xs text-[#D6D6D6]/80 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FFEE32]" />
                <span>Marine-Grade Certified Formulations</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#FFEE32]" />
                <span>UK Technical Standards</span>
              </div>
            </div>
          </motion.div>

          {/* Stat Stack Column */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {statsData.map((stat, idx) => (
              <div
                key={stat.id}
                id={`stat-card-${idx + 1}`}
                className="group relative bg-[#333533]/70 hover:bg-[#333533] border border-[#333533] hover:border-[#FFEE32]/50 backdrop-blur-md rounded-2xl p-5 sm:p-6 flex items-center justify-between transition-all duration-300 transform hover:-translate-y-1 shadow-md"
              >
                <div className="flex flex-col">
                  <div className="font-display font-bold text-3xl sm:text-4xl text-[#FFFFFF] tracking-tight group-hover:text-[#FFEE32] transition-colors">
                    <CountUp
                      end={stat.value}
                      suffix={stat.suffix}
                      format={stat.format}
                    />
                  </div>
                  <span className="text-xs text-[#D6D6D6]/60 uppercase tracking-wider font-semibold mt-1">
                    Verified Benchmark
                  </span>
                </div>

                <div className="text-right text-xs sm:text-sm text-[#D6D6D6]/85 font-medium max-w-[170px] leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}

            {/* Highlighted Callout Box */}
            <div className="bg-[#333533]/80 border border-[#FFEE32]/35 rounded-2xl p-5 backdrop-blur-md text-xs sm:text-sm text-[#D6D6D6] flex items-start gap-3">
              <div className="p-2 rounded-lg bg-[#FFEE32]/15 text-[#FFEE32] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-[#FFFFFF] mb-0.5">Local Manufacturing Pioneer</p>
                <p className="text-[#D6D6D6]/75 leading-relaxed">
                  Pioneering local production of industrial-strength marine fairing compounds for Ghana's maritime sector.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Cue */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[11px] text-[#D6D6D6]/60 hover:text-[#FFEE32] tracking-widest uppercase transition-colors z-20"
      >
        <span className="h-7 w-[1.5px] bg-gradient-to-b from-[#FFEE32] to-transparent animate-scroll-cue" />
        <span className="font-medium flex items-center gap-0.5">
          Scroll <ChevronDown className="w-3 h-3" />
        </span>
      </a>
    </section>
  );
};
