"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Icons } from "@/components/ui/Icons";
import { TECHNOLOGIES_DATA } from "@/data/technologies";
import { InteractiveRfqModal } from "@/components/rfq/InteractiveRfqModal";

export default function TechnologiesPage() {
  const [rfqModalOpen, setRfqModalOpen] = useState(false);
  const [selectedTech, setSelectedTech] = useState("");

  const handleOpenRfq = (brand: string) => {
    setSelectedTech(brand);
    setRfqModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-red-600 selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Technologies Hero Section - ABB Editorial Format */}
        <section className="relative bg-slate-900 text-white overflow-hidden py-24 sm:py-28 px-4 sm:px-6">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url('/images/services/service-04-panels.jpg')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/60" />

          <div className="max-w-7xl mx-auto space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600 text-white text-xs font-mono font-bold uppercase tracking-widest">
              Multi-OEM Integration Fluency
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight max-w-4xl leading-[1.08]">
              Vendor-Independent Systems Integration Across Global Platforms
            </h1>

            <p className="text-base sm:text-lg text-slate-200 max-w-3xl leading-relaxed">
              We eliminate proprietary OEM lock-in. Our Pune engineering core delivers deep architectural mastery across Honeywell, Siemens, ABB, Rockwell Automation, and open Niagara frameworks—ensuring unbiased equipment selection and lowest total lifecycle cost.
            </p>

            <div className="flex flex-wrap gap-2 pt-4">
              {TECHNOLOGIES_DATA.map((tech) => (
                <a
                  key={tech.id}
                  href={`#${tech.id}`}
                  className="px-3.5 py-1.5 bg-white/10 hover:bg-white text-slate-200 hover:text-slate-900 border border-white/20 text-xs font-medium transition"
                >
                  ↓ {tech.brand}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed OEM Breakdown Sections - Clean Pure White & Slate Grid */}
        <div className="divide-y divide-slate-200">
          {TECHNOLOGIES_DATA.map((tech, index) => (
            <section
              key={tech.id}
              id={tech.id}
              className={`py-20 px-4 sm:px-6 ${
                index % 2 === 0 ? "bg-white" : "bg-slate-50"
              }`}
            >
              <div className="max-w-7xl mx-auto space-y-12">
                {/* Brand Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200">
                  <div className="space-y-2 max-w-3xl">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-600">
                        {tech.category}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="text-xs font-mono px-2 py-0.5 bg-slate-100 text-slate-700 border border-slate-200 font-semibold">
                        {tech.oemRelationship}
                      </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                      {tech.name}
                    </h2>
                    <p className="text-sm font-semibold text-slate-600">
                      {tech.tagline}
                    </p>
                  </div>

                  <button
                    onClick={() => handleOpenRfq(tech.brand)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition shadow-sm shrink-0"
                  >
                    <Icons.Sliders className="w-3.5 h-3.5" />
                    <span>Inquire for {tech.brand} Scope</span>
                  </button>
                </div>

                {/* 2-Column Tech Anatomy */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  {/* Left 7 Columns: Differentiator & Capabilities */}
                  <div className="lg:col-span-7 space-y-6">
                    {/* The TecLogos Differentiator for this OEM */}
                    <div className="p-6 bg-slate-100/80 border-l-3 border-red-600 space-y-2 shadow-2xs">
                      <h3 className="text-xs font-mono font-bold text-red-600 uppercase flex items-center gap-2">
                        <Icons.Shield className="w-4 h-4" />
                        <span>The TecLogos Advantage on {tech.brand}</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {tech.teclogosDifferentiator}
                      </p>
                    </div>

                    {/* Engineering Capabilities */}
                    <div className="space-y-3">
                      <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                        Engineering Scope Executed by TecLogos
                      </h3>
                      <div className="space-y-2">
                        {tech.engineeringCapabilities.map((cap) => (
                          <div
                            key={cap}
                            className="p-3 bg-white border border-slate-200 text-xs text-slate-800 flex items-start gap-2.5 shadow-2xs"
                          >
                            <Icons.CheckCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Typical Industrial Applications */}
                    <div className="space-y-2 pt-2">
                      <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                        Typical Industrial Applications
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {tech.typicalUseCases.map((uc) => (
                          <div
                            key={uc}
                            className="p-2.5 bg-slate-100/80 border border-slate-200 text-xs text-slate-700 flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                            <span className="line-clamp-1">{uc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right 5 Columns: Hardware & Software Stack */}
                  <div className="lg:col-span-5 space-y-6 bg-white border border-slate-200 p-6 sm:p-8 shadow-sm">
                    {/* Hardware Series */}
                    <div className="space-y-2.5">
                      <h3 className="text-xs font-mono uppercase tracking-wider text-red-600 font-bold">
                        Hardware Families Supported
                      </h3>
                      <div className="space-y-1.5">
                        {tech.hardwareSeries.map((hw) => (
                          <div
                            key={hw}
                            className="p-2.5 bg-slate-50 border border-slate-200 text-xs font-mono text-slate-800 flex items-center gap-2"
                          >
                            <Icons.Cpu className="w-3.5 h-3.5 text-red-600 shrink-0" />
                            <span>{hw}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Software Environments */}
                    <div className="space-y-2 pt-4 border-t border-slate-100">
                      <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                        Engineering Software Tools
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {tech.softwareEnvironment.map((sw) => (
                          <span
                            key={sw}
                            className="text-[11px] font-mono px-2 py-1 bg-slate-100 border border-slate-200 text-slate-700"
                          >
                            {sw}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* FAT & Simulation Guarantee */}
                    <div className="p-4 bg-slate-50 border-l-2 border-slate-900 space-y-1">
                      <span className="text-[11px] font-bold text-slate-900 block">
                        FAT Simulation Guarantee
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Every control application is tested against dynamic simulated I/O before site shipment to drastically minimize commissioning risks and logic errors during live plant cutover.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>

      <Footer />

      <InteractiveRfqModal
        isOpen={rfqModalOpen}
        onClose={() => setRfqModalOpen(false)}
        initialService={selectedTech}
      />
    </div>
  );
}