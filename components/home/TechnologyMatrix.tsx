"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icons } from "@/components/ui/Icons";
import { TECHNOLOGIES_DATA } from "@/data/technologies";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const GLOSSARY_TERMS = [
  {
    term: "PLC",
    title: "Programmable Logic Controller",
    simple: "A small industrial computer that controls a machine or process.",
    example: "Controls motors, pumps, conveyors and automated sequences.",
  },
  {
    term: "SCADA",
    title: "Supervisory Control & Data Acquisition",
    simple: "A system that lets people monitor and supervise a plant.",
    example: "Shows live process graphics, alarm lists, and trend charts.",
  },
  {
    term: "DCS",
    title: "Distributed Control System",
    simple: "A control system spread across many parts of a large plant.",
    example: "Coordinates continuous chemical, refining, and power processes.",
  },
  {
    term: "HMI",
    title: "Human-Machine Interface",
    simple: "The screen an operator uses to interact with equipment.",
    example: "Shows pushbuttons, tank levels, motor states, and fault alarms.",
  },
  {
    term: "Instrumentation",
    title: "Field Measuring Devices",
    simple: "Devices that measure physical plant conditions.",
    example: "Transmitters that measure pressure, temperature, flow, and tank level.",
  },
  {
    term: "BMS",
    title: "Building Management System",
    simple: "A system that monitors and controls commercial building equipment.",
    example: "Manages central chillers, air handling units (AHU), and energy usage.",
  },
  {
    term: "FAT",
    title: "Factory Acceptance Testing",
    simple: "A test carried out before equipment leaves the workshop.",
    example: "Simulates inputs and outputs to ensure cabinets work to specification.",
  },
  {
    term: "Commissioning & SAT",
    title: "Site Acceptance & Startup",
    simple: "Checking and starting up installed systems on site.",
    example: "Point-to-point cold loop checks and live process synchronization.",
  },
];

export function TechnologyMatrix() {
  const [selectedTech, setSelectedTech] = useState(TECHNOLOGIES_DATA[0].id);
  const [glossaryOpen, setGlossaryOpen] = useState(false);

  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const activeTech =
    TECHNOLOGIES_DATA.find((t) => t.id === selectedTech) || TECHNOLOGIES_DATA[0];

  return (
    <section ref={containerRef} className="py-24 px-4 sm:px-6 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header: ABB Editorial Style */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-red-600">
              <span className="w-8 h-[2px] bg-red-600 inline-block" />
              <span>Multi-Platform Integration Experience</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Multi-OEM Technology Platforms We Engineer & Integrate
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We explain what each platform is used for. TecLogos provides independent, multi-vendor engineering expertise across global automation systems tailored to each client's technical requirements.
            </p>
          </div>

          <button
            onClick={() => setGlossaryOpen(!glossaryOpen)}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider transition shrink-0 border border-slate-300"
          >
            <Icons.BookOpen className="w-4 h-4 text-red-600" />
            <span>{glossaryOpen ? "Hide Automation Glossary" : "View Non-Technical Glossary"}</span>
          </button>
        </div>

        {/* Short Glossary for Non-Technical Visitors (PDF Page 3 & 9) */}
        {glossaryOpen && (
          <div className="p-6 sm:p-8 bg-slate-50 border border-slate-200 space-y-4 animate-in fade-in-0 duration-150">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-600">
                  Plain-English Reference
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  Key Industrial Automation Terms Explained Simply
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-500">Essential Engineering Concepts</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              {GLOSSARY_TERMS.map((item) => (
                <div key={item.term} className="p-4 bg-white border border-slate-200 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-black text-red-600">{item.term}</span>
                    <span className="text-[10px] text-slate-400 font-mono">Concept</span>
                  </div>
                  <div className="text-xs font-bold text-slate-900 leading-snug">{item.title}</div>
                  <p className="text-[11.5px] text-slate-600 leading-relaxed">{item.simple}</p>
                  <p className="text-[11px] text-slate-500 font-mono pt-1 border-t border-slate-100">
                    e.g. {item.example}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

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
        <div ref={cardRef} className="bg-slate-50 border border-slate-200 p-8 sm:p-12 shadow-sm">
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
                  Engineering Scope on {activeTech.brand}
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {activeTech.teclogosDifferentiator}
                </p>
              </div>

              {/* Engineering Capabilities */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold">
                  Confirmed Engineering Capabilities
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

        {/* Important Distinction Note (PDF Page 9 Requirement) */}
        <div className="p-4 bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-3">
          <Icons.Info className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
          <p>
            <strong>Engineering Experience Distinction:</strong> TecLogos provides independent engineering, programming, and systems integration on these platforms based on verified field experience. We describe engineering proficiency rather than manufacturer partnerships unless explicitly authorized. All trademarks belong to their respective OEMs.
          </p>
        </div>
      </div>
    </section>
  );
}
