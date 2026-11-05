"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Icons } from "@/components/ui/Icons";
import { INDUSTRIES_DATA } from "@/data/industries";
import { InteractiveRfqModal } from "@/components/rfq/InteractiveRfqModal";

export default function IndustriesPage() {
  const [rfqModalOpen, setRfqModalOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState("");

  const handleOpenRfq = (indId: string) => {
    setSelectedIndustry(indId);
    setRfqModalOpen(true);
  };

  const getIndustryImage = (id: string) => {
    switch (id) {
      case "power-generation":
        return "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80"; // Power plant cooling towers / steam
      case "oil-gas":
        return "/images/services/service-02-ei.jpg"; // Petrochemical refinery piping & valves
      case "chemicals-process":
        return "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80"; // High-tech processing vessels
      case "water-treatment":
        return "https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?auto=format&fit=crop&w=1200&q=80"; // Clean water aeration & pumps
      case "cement-minerals":
        return "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"; // Heavy industrial kilns & conveyor
      case "steel-metals":
        return "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80"; // Industrial metallurgy & continuous casting
      case "bms-smart-facilities":
        return "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"; // Modern high-rise smart towers
      default:
        return "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1200&q=80";
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-red-600 selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section - ABB Corporate Editorial Layout */}
        <section className="relative bg-slate-900 text-white overflow-hidden py-24 sm:py-28 px-4 sm:px-6">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=2000&q=80')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/60" />

          <div className="max-w-7xl mx-auto space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600 text-white text-xs font-mono font-bold uppercase tracking-widest">
              Sector Engineering Solutions
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight max-w-4xl leading-[1.08]">
              Domain-Specific Process Automation & Critical Control
            </h1>

            <p className="text-base sm:text-lg text-slate-200 max-w-3xl leading-relaxed">
              Continuous thermal, petrochemical, and manufacturing operations operate under strict physical constraints. TecLogos architects high-availability DCS architectures, SIL-3 safety systems, and smart facility platforms tuned to each sector’s exact regulatory standards.
            </p>

            <div className="flex flex-wrap gap-2 pt-4">
              {INDUSTRIES_DATA.map((ind) => (
                <a
                  key={ind.id}
                  href={`#${ind.id}`}
                  className="px-3.5 py-1.5 bg-white/10 hover:bg-white text-slate-200 hover:text-slate-900 border border-white/20 text-xs font-medium transition"
                >
                  ↓ {ind.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Deep Dive Industry Sections - Clean ABB Pure White & Slate Grid */}
        <div className="divide-y divide-slate-200">
          {INDUSTRIES_DATA.map((industry, index) => (
            <section
              key={industry.id}
              id={industry.id}
              className={`py-20 px-4 sm:px-6 ${
                index % 2 === 0 ? "bg-white" : "bg-slate-50"
              }`}
            >
              <div className="max-w-7xl mx-auto space-y-12">
                {/* Sector Header with Action */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200">
                  <div className="space-y-2 max-w-3xl">
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-mono font-bold text-red-600 uppercase tracking-widest">
                        Sector 0{index + 1}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="text-xs font-mono px-2 py-0.5 bg-slate-100 text-slate-700 border border-slate-200 font-semibold">
                        {industry.verificationLevel}
                      </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                      {industry.name}
                    </h2>
                    <p className="text-sm font-semibold text-slate-600">
                      {industry.heroHeadline}
                    </p>
                  </div>

                  <button
                    onClick={() => handleOpenRfq(industry.id)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition shadow-sm shrink-0"
                  >
                    <Icons.Sliders className="w-3.5 h-3.5" />
                    <span>Inquire for {industry.name.split("&")[0]} Scope</span>
                  </button>
                </div>

                {/* 2-Column Sector Anatomy with Photo */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  {/* Left 7 Columns: Real Plant Photo, Challenges & Solutions */}
                  <div className="lg:col-span-7 space-y-6">
                    {/* Plant Photography */}
                    <div className="relative h-64 sm:h-80 w-full overflow-hidden border border-slate-200 shadow-sm">
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-500 hover:scale-105"
                        style={{
                          backgroundImage: `url('${getIndustryImage(industry.id)}')`,
                        }}
                      />
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 to-transparent p-4 text-white">
                        <span className="text-xs font-mono tracking-wider font-semibold">
                          Field Architecture • {industry.name}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-slate-700 leading-relaxed">
                      {industry.summary}
                    </p>

                    {/* Operational Challenges */}
                    <div className="p-6 bg-slate-100/70 border-l-3 border-amber-600 space-y-3">
                      <h3 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold flex items-center gap-2">
                        <Icons.AlertTriangle className="w-4 h-4 text-amber-600" />
                        <span>Critical Operational Challenges Solved</span>
                      </h3>
                      <ul className="space-y-2">
                        {industry.operationalChallenges.map((ch) => (
                          <li key={ch} className="text-xs text-slate-700 flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0 mt-1.5" />
                            <span>{ch}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* The Role of Automation */}
                    <div className="space-y-2">
                      <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                        The Role of Automation & Process Control
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {industry.automationRole}
                      </p>
                    </div>

                    {/* Core Deliverables */}
                    <div className="space-y-3 pt-2">
                      <h3 className="text-xs font-mono uppercase tracking-wider text-red-600 font-bold">
                        Core Deliverables Executed by TecLogos
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {industry.coreSolutionsDelivered.map((sol) => (
                          <div
                            key={sol}
                            className="p-3 bg-white border border-slate-200 text-xs text-slate-800 flex items-center gap-2.5 shadow-2xs"
                          >
                            <Icons.Check className="w-3.5 h-3.5 text-red-600 shrink-0" />
                            <span>{sol}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right 5 Columns: Architecture, Metrics & Tech */}
                  <div className="lg:col-span-5 space-y-6 bg-white border border-slate-200 p-6 sm:p-8 shadow-sm">
                    {/* Performance Targets */}
                    <div className="space-y-3">
                      <h3 className="text-xs font-mono uppercase tracking-wider text-red-600 font-bold">
                        Operational Benchmark Targets
                      </h3>
                      <div className="grid grid-cols-3 gap-2">
                        {industry.metrics.map((m) => (
                          <div
                            key={m.label}
                            className="p-3 bg-slate-50 border border-slate-200 text-center"
                          >
                            <div className="text-lg font-black text-slate-900 font-mono">
                              {m.value}
                            </div>
                            <div className="text-[10px] text-slate-500 font-medium line-clamp-1">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Architecture Topology */}
                    <div className="p-4 bg-slate-50 border-l-2 border-slate-900 space-y-1.5">
                      <span className="text-[11px] font-mono text-slate-900 font-bold uppercase tracking-wider">
                        Typical Network Topology
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {industry.architectureHighlight}
                      </p>
                    </div>

                    {/* Target Platforms */}
                    <div className="space-y-2">
                      <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                        Target OEM Platforms & Protocols
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {industry.keyTechnologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] font-mono px-2 py-1 bg-slate-100 border border-slate-200 text-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Quality & Safety Compliance */}
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                      <span>Compliant with IEC 61511 & ISA-88</span>
                      <span className="font-semibold text-red-600">Pune Engineering FAT</span>
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
        initialIndustry={selectedIndustry}
      />
    </div>
  );
}