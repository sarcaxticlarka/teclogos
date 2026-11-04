"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Icons } from "@/components/ui/Icons";
import { InteractiveRfqModal } from "@/components/rfq/InteractiveRfqModal";

export function Hero() {
  const [rfqOpen, setRfqOpen] = useState(false);

  return (
    <section className="relative bg-slate-900 text-white overflow-hidden">
      {/* Editorial High-Resolution Industrial Backdrop */}
      <div className="relative min-h-[82vh] flex items-center justify-center">
        {/* Real Industrial Facility Photography Backdrop */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2000&q=85')`,
          }}
        />
        {/* Clean High-Contrast Dark Editorial Gradient Scrim (ABB Signature Style) */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/50" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10 py-24">
          <div className="max-w-3xl space-y-6">
            {/* ABB-Style Red Bracket Accent */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600 text-white text-xs font-mono font-bold uppercase tracking-widest">
              Industrial Automation & Systems Integration
            </div>

            {/* Main Headline - Massive, Authoritative, Sans-Serif */}
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.08]">
              Transforming Industry. Engineering High-Availability Automation.
            </h1>

            {/* Subheadline - Clear, Direct, Business-Driven */}
            <p className="text-base sm:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl">
              TecLogos architects, programs, fabricates, and commissions turnkey Distributed Control Systems (DCS), PLC/SCADA networks, and detailed electrical & instrumentation (E&I) packages across continuous process plants and smart infrastructure.
            </p>

            {/* Primary Action Buttons - Sharp, High-Contrast */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <button
                onClick={() => setRfqOpen(true)}
                className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-3 shadow-lg"
              >
                <span>Request a Quote / Project Scope</span>
                <Icons.ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/services"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white text-white hover:text-slate-900 border border-white/30 font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-3 backdrop-blur-sm"
              >
                <span>Explore Capabilities</span>
                <Icons.ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Structural Data Strip Below Hero - Clean Pure White Box with Sharp Borders */}
      <div className="bg-white text-slate-900 border-b border-slate-200 py-8 px-4 sm:px-6 shadow-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="border-l-2 border-red-600 pl-4 space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-mono">
              Dec 2018
            </div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Incorporated in Pune, India
            </div>
            <p className="text-xs text-slate-600">
              Active engineering firm under RoC-Pune
            </p>
          </div>

          <div className="border-l-2 border-red-600 pl-4 space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-mono">
              100% FAT
            </div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Simulated Factory Testing
            </div>
            <p className="text-xs text-slate-600">
              Zero-defect pre-shipment signal loop checks
            </p>
          </div>

          <div className="border-l-2 border-red-600 pl-4 space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-mono">
              Multi-OEM
            </div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Vendor-Independent Fluency
            </div>
            <p className="text-xs text-slate-600">
              Honeywell, Siemens, ABB, Rockwell & Niagara
            </p>
          </div>

          <div className="border-l-2 border-red-600 pl-4 space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-mono">
              SIL 2 / SIL 3
            </div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Functional Process Safety
            </div>
            <p className="text-xs text-slate-600">
              IEC 61511 Safety Instrumented Systems
            </p>
          </div>
        </div>
      </div>

      <InteractiveRfqModal isOpen={rfqOpen} onClose={() => setRfqOpen(false)} />
    </section>
  );
}