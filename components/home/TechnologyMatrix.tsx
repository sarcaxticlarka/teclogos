"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Icons } from "@/components/ui/Icons";
import { TECHNOLOGIES_DATA } from "@/data/technologies";

export function TechnologyMatrix() {
  const [selectedTech, setSelectedTech] = useState(TECHNOLOGIES_DATA[0].id);

  const activeTech =
    TECHNOLOGIES_DATA.find((t) => t.id === selectedTech) || TECHNOLOGIES_DATA[0];

  return (
    <section className="py-24 px-4 sm:px-6 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header: ABB Editorial Style */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-red-600">
            <span className="w-8 h-[2px] bg-red-600 inline-block" />
            <span>Multi-Vendor Independence</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Multi-OEM Technology Platforms We Engineer & Integrate
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Unlike captive OEM service arms that force you into single-brand hardware, we provide objective, multi-platform engineering expertise tailored to your technical requirements.
          </p>
        </div>

        {/* OEM Selector Pills - Clean White/Red Buttons */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3">
          {TECHNOLOGIES_DATA.map((t) => {
            const isSelected = selectedTech === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setSelectedTech(t.id)}
                className={`px-5 py-2.5 text-xs sm:text-sm font-bold transition border-b-2 -mb-[13px] ${
                  isSelected
                    ? "text-red-600 border-red-600 bg-red-50/40"
                    : "text-slate-600 hover:text-slate-900 border-transparent hover:border-slate-300"
                }`}
              >
                <span>{t.brand}</span>
              </button>
            );
          })}
        </div>

        {/* Selected OEM Deep Detail Card */}
        <div className="bg-slate-50 border border-slate-200 p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-red-600 font-bold uppercase">
                    {activeTech.category}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-xs font-mono text-slate-600">
                    {activeTech.oemRelationship}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {activeTech.name}
                </h3>
                <p className="text-sm font-semibold text-slate-700">
                  {activeTech.tagline}
                </p>
              </div>

              {/* The TecLogos Differentiator for this OEM */}
              <div className="p-5 bg-white border-l-4 border-red-600 space-y-1 shadow-2xs">
                <span className="text-xs font-mono font-bold text-slate-900 uppercase">
                  The TecLogos Advantage on {activeTech.brand}
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {activeTech.teclogosDifferentiator}
                </p>
              </div>

              {/* Engineering Capabilities */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold">
                  Engineering Scope Executed by TecLogos
                </h4>
                <div className="space-y-2">
                  {activeTech.engineeringCapabilities.map((cap) => (
                    <div
                      key={cap}
                      className="text-xs text-slate-700 flex items-start gap-2.5"
                    >
                      <Icons.Check className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href={`/technologies#${activeTech.id}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-red-600 hover:text-red-700 transition"
                >
                  <span>Explore full {activeTech.brand} engineering documentation</span>
                  <Icons.ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right 5 Columns: Hardware, Software & Typical Use Cases */}
            <div className="lg:col-span-5 space-y-6 bg-white border border-slate-200 p-8 shadow-xs">
              {/* Hardware Families Handled */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold">
                  Hardware & Controller Families
                </h4>
                <div className="space-y-1.5">
                  {activeTech.hardwareSeries.map((hw) => (
                    <div
                      key={hw}
                      className="text-xs font-mono text-slate-800 flex items-center gap-2 p-2 bg-slate-50 border border-slate-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                      <span>{hw}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Software Tooling */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                  Engineering Software Tools
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeTech.softwareEnvironment.map((sw) => (
                    <span
                      key={sw}
                      className="text-[11px] font-mono px-2 py-0.5 bg-slate-100 border border-slate-200 text-slate-700 font-medium"
                    >
                      {sw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Typical Plant Applications */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                  Common Facility Applications
                </h4>
                <ul className="space-y-1">
                  {activeTech.typicalUseCases.map((uc) => (
                    <li
                      key={uc}
                      className="text-xs text-slate-600 flex items-center gap-1.5"
                    >
                      <span className="w-1 h-1 rounded-full bg-slate-400" />
                      <span>{uc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}