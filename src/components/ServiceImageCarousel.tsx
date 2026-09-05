import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ServiceImage } from '../types';

interface ServiceImageCarouselProps {
  images: ServiceImage[];
  title: string;
  heightClass?: string;
  idPrefix: string;
}

export const ServiceImageCarousel: React.FC<ServiceImageCarouselProps> = ({
  images,
  title,
  heightClass = 'h-52 sm:h-60',
  idPrefix,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(images.length > 1);

  const checkScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 8);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 8);

    const index = Math.round(scrollLeft / clientWidth);
    if (index >= 0 && index < images.length) {
      setActiveIndex(index);
    }
  }, [images.length]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScrollState();
    el.addEventListener('scroll', checkScrollState, { passive: true });
    return () => el.removeEventListener('scroll', checkScrollState);
  }, [checkScrollState]);

  const scrollTo = (direction: 'prev' | 'next') => {
    const el = scrollRef.current;
    if (!el) return;
    const width = el.clientWidth;
    const target = direction === 'next' ? el.scrollLeft + width : el.scrollLeft - width;
    el.scrollTo({ left: target, behavior: 'smooth' });
  };

  const scrollToIndex = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: 'smooth' });
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full rounded-2xl overflow-hidden mb-5 border border-[#202020] shadow-md group/carousel bg-[#202020]">
      {/* Scrollable Image Track */}
      <div
        ref={scrollRef}
        id={`${idPrefix}-carousel-track`}
        tabIndex={0}
        aria-label={`${title} image gallery, scrollable with ${images.length} photos`}
        className={`flex overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth w-full ${heightClass}`}
      >
        {images.map((item, idx) => (
          <div
            key={item.url + idx}
            className={`min-w-full w-full shrink-0 snap-center relative ${heightClass}`}
          >
            <img
              src={item.url}
              alt={`${title} - ${item.caption}`}
              className="w-full h-full object-cover select-none filter contrast-105"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            {/* Ambient shadow gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#202020]/90 via-[#202020]/25 to-transparent pointer-events-none" />

            {/* Caption Overlay */}
            <div className="absolute bottom-3 left-3 right-16 z-10 pointer-events-none">
              <span className="inline-block text-[11px] sm:text-xs font-medium text-[#FFFFFF] bg-[#202020]/85 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-md shadow-sm line-clamp-1">
                {item.caption}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Top Right Counter Badge */}
      <div className="absolute top-2.5 right-2.5 z-10 pointer-events-none">
        <span className="text-[10px] font-bold text-[#FFEE32] bg-[#202020]/90 backdrop-blur-md border border-[#FFEE32]/30 px-2 py-0.5 rounded-full shadow-sm">
          {activeIndex + 1} / {images.length}
        </span>
      </div>

      {/* Navigation Buttons (visible always or prominent on hover) */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            id={`${idPrefix}-carousel-prev`}
            onClick={() => scrollTo('prev')}
            disabled={!canScrollLeft}
            aria-label="Previous photo"
            className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center backdrop-blur-md border border-white/15 transition-all shadow-md ${
              canScrollLeft
                ? 'bg-[#202020]/80 text-[#FFFFFF] hover:bg-[#FFEE32] hover:text-[#202020] hover:scale-105 cursor-pointer opacity-90 group-hover/carousel:opacity-100'
                : 'bg-[#202020]/40 text-[#D6D6D6]/30 cursor-not-allowed opacity-0'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            type="button"
            id={`${idPrefix}-carousel-next`}
            onClick={() => scrollTo('next')}
            disabled={!canScrollRight}
            aria-label="Next photo"
            className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center backdrop-blur-md border border-white/15 transition-all shadow-md ${
              canScrollRight
                ? 'bg-[#202020]/80 text-[#FFFFFF] hover:bg-[#FFEE32] hover:text-[#202020] hover:scale-105 cursor-pointer opacity-90 group-hover/carousel:opacity-100'
                : 'bg-[#202020]/40 text-[#D6D6D6]/30 cursor-not-allowed opacity-0'
            }`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </>
      )}

      {/* Dot Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 bg-[#202020]/75 backdrop-blur-sm px-2 py-1 rounded-full border border-white/10">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              id={`${idPrefix}-dot-${i}`}
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === activeIndex
                  ? 'w-4 bg-[#FFEE32]'
                  : 'w-1.5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
