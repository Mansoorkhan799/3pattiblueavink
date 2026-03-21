'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';

const screenshots = [
  {
    src: '/3-patti-blue-game.webp',
    alt: '3 Patti Blue Game Screen – Play Teen Patti and earn real money',
  },
  {
    src: '/3-patti-blue-bonuses.webp',
    alt: '3 Patti Blue Bonuses – Daily rewards and welcome bonus',
  },
  {
    src: '/3-patti-blue-app-bonuses.webp',
    alt: '3 Patti Blue App Bonuses – Free chips and reward events',
  },
  {
    src: '/3-patti-blue-refer-and-earn.webp',
    alt: '3 Patti Blue Refer and Earn – Invite friends and earn commission',
  },
  {
    src: '/teen-patti-blue-add-money.webp',
    alt: '3 Patti Blue Add Money – Deposit via JazzCash and EasyPaisa',
  },
];

// Number of slides visible at once per breakpoint
const VISIBLE_DESKTOP = 4;
const VISIBLE_TABLET = 3;
const VISIBLE_MOBILE = 1;

export default function ScreenshotCarousel() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(VISIBLE_DESKTOP);
  const [paused, setPaused] = useState(false);

  // Update visible count based on window width
  useEffect(() => {
    function update() {
      if (window.innerWidth < 640) setVisible(VISIBLE_MOBILE);
      else if (window.innerWidth < 1024) setVisible(VISIBLE_TABLET);
      else setVisible(VISIBLE_DESKTOP);
    }
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const total = screenshots.length;
  const maxIndex = total - visible;

  const next = useCallback(() => {
    setCurrent((c) => (c >= maxIndex ? 0 : c + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrent((c) => (c <= 0 ? maxIndex : c - 1));
  }, [maxIndex]);

  // Auto-advance every 2.5 seconds
  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 2500);
    return () => clearInterval(id);
  }, [next, paused]);

  const slideWidthPct = 100 / visible;

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Sliding track */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * slideWidthPct}%)` }}
      >
        {screenshots.map((shot, i) => (
          <div
            key={i}
            className="flex-shrink-0 px-2"
            style={{ width: `${slideWidthPct}%` }}
          >
            <div className="rounded-xl overflow-hidden border border-gray-700 hover:border-[#FFA500] transition-all">
              <Image
                src={shot.src}
                alt={shot.alt}
                width={300}
                height={500}
                className="w-full h-auto object-cover"
                quality={80}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Prev button */}
      <button
        onClick={prev}
        aria-label="Previous screenshot"
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#FFA500] text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors z-10"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Next button */}
      <button
        onClick={next}
        aria-label="Next screenshot"
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#FFA500] text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors z-10"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-5">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === current ? 'bg-[#FFA500] w-6' : 'bg-gray-600 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
