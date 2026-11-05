"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { Icons } from "@/components/ui/Icons";
import { InteractiveRfqModal } from "@/components/rfq/InteractiveRfqModal";

export function Hero() {
  const [rfqOpen, setRfqOpen] = useState(false);

  const heroRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      // Subtle cinematic zoom-in on the industrial background photography
      if (bgRef.current) {
        gsap.fromTo(
          bgRef.current,
          { scale: 1.08 },
          { scale: 1, duration: 2.2, ease: "power2.out" }
        );
      }

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Eyebrow badge
      if (badgeRef.current) {
        tl.fromTo(
          badgeRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6 }
        );
      }

      // Main headline
      if (headlineRef.current) {
        tl.fromTo(
          headlineRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.3"
        );
      }

      // Supporting text
      if (textRef.current) {
        tl.fromTo(
          textRef.current,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.4"
        );
      }

      // CTA buttons
      if (buttonsRef.current) {
        tl.fromTo(
          buttonsRef.current.children,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
          "-=0.4"
        );
      }

      // Data strip metrics below hero
      if (metricsRef.current) {
        tl.fromTo(
          metricsRef.current.children,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 },
          "-=0.3"
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative bg-slate-900 text-white overflow-hidden">
      {/* Editorial High-Resolution Industrial Backdrop */}
      <div className="relative min-h-[82vh] flex items-center justify-center">
        {/* Real Industrial Facility Photography Backdrop */}
        <div
          ref={bgRef}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2000&q=85')`,
          }}
        />
        {/* Clean High-Contrast Dark Editorial Gradient Scrim (ABB Signature Style) */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/50" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10 py-24">
          <div className="max-w-3xl space-y-6">
            {/* ABB-Style Red Bracket Accent - Exactly as prescribed in Redesign Guide Page 5 */}
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2 px-3 py-1 bg-red-600 text-white text-xs font-mono font-bold uppercase tracking-widest"
            >
              INDUSTRIAL AUTOMATION · ENGINEERING · INTEGRATION
            </div>

            {/* Main Headline - Exactly as prescribed in Redesign Guide Page 5 */}
            <h1
              ref={headlineRef}
              className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.08]"
            >
              Engineering intelligent systems for a connected industrial world.
            </h1>

            {/* Supporting Text - Exactly as prescribed in Redesign Guide Page 5 */}
            <p
              ref={textRef}
              className="text-base sm:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl"
            >
              TecLogos brings automation, control systems and engineering services together to help industrial facilities monitor equipment, manage processes and keep operations running.
            </p>

            {/* Primary Action Buttons - Exactly as prescribed in Redesign Guide Page 5 */}
            <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <a
                href="#core-solutions"
                className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-3 shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Our Solutions</span>
                <Icons.ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => setRfqOpen(true)}
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white text-white hover:text-slate-900 border border-white/30 font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-3 backdrop-blur-sm hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Discuss Your Project</span>
                <Icons.ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Structural Data Strip Below Hero - Factual, Non-Quantified (Guide Page 16) */}
      <div className="bg-white text-slate-900 border-b border-slate-200 py-6 sm:py-8 px-4 sm:px-6 shadow-xs">
        <div ref={metricsRef} className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="border-l-2 border-red-600 pl-4 py-0.5 space-y-1">
            <div className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight whitespace-nowrap">
              Dec 2018
            </div>
            <div className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider">
              Incorporated in Pune, India
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Active engineering firm under RoC-Pune
            </p>
          </div>

          <div className="border-l-2 border-red-600 pl-4 py-0.5 space-y-1">
            <div className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight whitespace-nowrap">
              Simulated FAT
            </div>
            <div className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider">
              Factory Acceptance Testing
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Pre-dispatch loop checks and hardware verification
            </p>
          </div>

          <div className="border-l-2 border-red-600 pl-4 py-0.5 space-y-1">
            <div className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight whitespace-nowrap">
              Multi-Platform
            </div>
            <div className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider">
              Engineering Fluency
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Honeywell, Siemens, ABB, Rockwell & Niagara
            </p>
          </div>

          <div className="border-l-2 border-red-600 pl-4 py-0.5 space-y-1">
            <div className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight whitespace-nowrap">
              Turnkey Scope
            </div>
            <div className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider">
              Field to Control Room
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              From P&ID review to panel assembly and site testing
            </p>
          </div>
        </div>
      </div>

      <InteractiveRfqModal isOpen={rfqOpen} onClose={() => setRfqOpen(false)} />
    </section>
  );
}