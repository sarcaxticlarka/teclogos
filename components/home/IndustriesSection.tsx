"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Icons } from "@/components/ui/Icons";
import { INDUSTRIES_DATA } from "@/data/industries";

export function IndustriesSection() {
  const [selectedSector, setSelectedSector] = useState(INDUSTRIES_DATA[0].id);

  const activeSector =
    INDUSTRIES_DATA.find((i) => i.id === selectedSector) || INDUSTRIES_DATA[0];

  return (
    <section className="py-24 px-4 sm:px-6 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Heading: ABB Style */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-red-600">
            <span className="w-8 h-[2px] bg-red-600 inline-block" />
            <span>Mission-Critical Verticals</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Engineered for Severe Process & Heavy Industrial Sectors
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Industrial processes differ drastically. We deliver domain-specific control logic and hazardous-area safety tailored to the operational realities of each vertical.
          </p>
        </div>

        {/* Sector Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {INDUSTRIES_DATA.map((ind) => {
            const isSelected = selectedSector === ind.id;
            return (
              <button
                key={ind.id}
                onClick={() => setSelectedSector(ind.id)}
                className={`p-3.5 text-left border transition ${
                  isSelected
                    ? "bg-white border-red-600 border-l-4 border-l-red-600 shadow-sm"
                    : "bg-white/70 border-slate-200 hover:bg-white hover:border-slate-300"
                }`}
              >
                <div className="text-xs font-bold text-slate-900 leading-tight">
                  {ind.name.split("&")[0]}
                </div>
                <span className="text-[10px] font-mono text-red-600 font-semibold block mt-1">
                  {ind.verificationLevel === "Verified Track Record"
                    ? "Verified Sector"
                    : "Core Competence"}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Sector Showcase Container - Clean White Editorial Block */}
        <div className="bg-white border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left 5 Columns: Real High-Res Photography */}
            <div
              className="lg:col-span-5 min-h-[300px] lg:min-h-full bg-cover bg-center relative"
              style={{
                backgroundImage: `url('${activeSector.imageUrl}')`,
              }}
            >
              <div className="absolute inset-0 bg-slate-950/20" />
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/95 backdrop-blur-xs border border-slate-200">
                <span className="text-[10px] font-mono text-red-600 font-bold uppercase tracking-wider block">
                  Sector Benchmark
                </span>
                <div className="text-xs font-bold text-slate-900">
                  {activeSector.name}
                </div>
              </div>
            </div>

            {/* Right 7 Columns: Operational Challenges & Solutions */}
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-wider">
                  Operational Breakdown • {activeSector.name}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {activeSector.heroHeadline}
                </h3>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {activeSector.summary}
              </p>

              {/* Specific Operational Challenges */}
              <div className="space-y-2.5 p-5 bg-slate-50 border-l-3 border-amber-500">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold flex items-center gap-2">
                  <Icons.Shield className="w-4 h-4 text-amber-500" />
                  <span>Key Operational Challenges Solved</span>
                </h4>
                <ul className="space-y-1.5">
                  {activeSector.operationalChallenges.map((ch) => (
                    <li key={ch} className="text-xs text-slate-700 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                      <span>{ch}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Delivered Solutions */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold">
                  Core Solutions Delivered by TecLogos
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeSector.coreSolutionsDelivered.map((sol) => (
                    <div
                      key={sol}
                      className="p-2.5 bg-slate-50 border border-slate-200 text-xs text-slate-800 flex items-center gap-2"
                    >
                      <Icons.Check className="w-3.5 h-3.5 text-red-600 shrink-0" />
                      <span className="line-clamp-1">{sol}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Metrics */}
              <div className="grid grid-cols-3 gap-3 pt-2 border-t border-slate-100">
                {activeSector.metrics.map((m) => (
                  <div key={m.label} className="p-3 bg-slate-50 border border-slate-200 text-center">
                    <div className="text-lg font-black font-mono text-slate-900">
                      {m.value}
                    </div>
                    <div className="text-[10px] text-slate-500 line-clamp-1">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href={`/industries#${activeSector.id}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider transition"
                >
                  <span>Explore {activeSector.name} Architecture</span>
                  <Icons.ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
