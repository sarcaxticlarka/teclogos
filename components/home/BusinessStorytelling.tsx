"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Icons } from "@/components/ui/Icons";

export function BusinessStorytelling() {
  const [activeStoryTab, setActiveStoryTab] = useState<"kids" | "business" | "engineers">("kids");

  return (
    <section className="py-20 px-4 sm:px-6 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header: ABB Editorial Style */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-red-600">
            <span className="w-8 h-[2px] bg-red-600 inline-block" />
            <span>The TecLogos Story</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Who We Are, What We Do & How We Power Industry
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From the factory floor to the commercial skyscraper, here is how TecLogos transforms complex industrial machinery into safe, automated, and energy-efficient operations.
          </p>
        </div>

        {/* Interactive "Perspective Switcher" (Explain Like I'm 10 vs. Business Executive vs. Plant Engineer) */}
        <div className="bg-slate-50 border border-slate-200 p-6 sm:p-10 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
              Choose Your Perspective:
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveStoryTab("kids")}
                className={`px-3.5 py-1.5 text-xs font-bold transition rounded-xs ${
                  activeStoryTab === "kids"
                    ? "bg-red-600 text-white shadow-2xs"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300"
                }`}
              >
                In 60 Seconds (Simple Analogy)
              </button>
              <button
                onClick={() => setActiveStoryTab("business")}
                className={`px-3.5 py-1.5 text-xs font-bold transition rounded-xs ${
                  activeStoryTab === "business"
                    ? "bg-red-600 text-white shadow-2xs"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300"
                }`}
              >
                Business & ROI Perspective
              </button>
              <button
                onClick={() => setActiveStoryTab("engineers")}
                className={`px-3.5 py-1.5 text-xs font-bold transition rounded-xs ${
                  activeStoryTab === "engineers"
                    ? "bg-red-600 text-white shadow-2xs"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300"
                }`}
              >
                Technical Engineering Perspective
              </button>
            </div>
          </div>

          {/* Perspective 1: In 60 Seconds (Simple Analogy) */}
          {activeStoryTab === "kids" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest">
                  Simple Explanation
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  We Build the Brain and Nervous System of Giant Factories.
                </h3>
                <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                  <p>
                    Think of a giant power station, an oil refinery, or a city water treatment plant. It has <strong>thousands of giant pipes, valves, heaters, and water pumps</strong>.
                  </p>
                  <p>
                    A human being cannot run around turning 2,000 valves by hand every second without making a mistake! If a valve opens too late, the pipe could burst. If a boiler gets too hot, the whole plant could shut down.
                  </p>
                  <p>
                    <strong>That is what TecLogos does:</strong> We build the smart electronic brains (computers called PLCs and DCS) and wire them to thousands of sensors. When a pipe gets too hot, our computer notices in one millisecond and automatically turns the cooling valve. The factory runs smoothly, safely, and cleanly 24 hours a day without any human getting hurt.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white border border-slate-200 p-6 space-y-4">
                <div className="text-xs font-mono uppercase text-slate-400 font-bold">
                  The Simple 3-Part Formula:
                </div>
                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-slate-50 border-l-2 border-red-600">
                    <strong className="text-slate-900 block font-bold">1. The Senses (Sensors)</strong>
                    <span className="text-slate-600">Thermometers and pressure gauges that feel the heat and flow in the pipes.</span>
                  </div>
                  <div className="p-3 bg-slate-50 border-l-2 border-slate-900">
                    <strong className="text-slate-900 block font-bold">2. The Brain (Our Controllers)</strong>
                    <span className="text-slate-600">Rugged industrial computers programmed by TecLogos engineers to make millisecond decisions.</span>
                  </div>
                  <div className="p-3 bg-slate-50 border-l-2 border-red-600">
                    <strong className="text-slate-900 block font-bold">3. The Muscles (Valves & Motors)</strong>
                    <span className="text-slate-600">Heavy electric motors and valves that physically move and pump based on our commands.</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Perspective 2: Business & ROI Perspective */}
          {activeStoryTab === "business" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest">
                  Executive Value Proposition
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Protecting Plant Availability, Eliminating OEM Lock-in & Slashing Energy Costs.
                </h3>
                <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                  <p>
                    For plant owners, industrial CEOs, and EPC contractors, unplanned downtime costs between <strong>\$20,000 and \$200,000 per hour</strong> in lost output.
                  </p>
                  <p>
                    Moreover, global automation OEMs (Honeywell, Siemens, ABB, Rockwell) frequently lock customers into expensive captive service contracts, charging inflated hourly rates and forcing total hardware replacements for minor upgrades.
                  </p>
                  <p>
                    <strong>The TecLogos Advantage:</strong> We are a vendor-independent integration partner. We provide the exact same OEM-grade programming discipline and SIL-3 safety systems, but at competitive domestic rates. We upgrade aging 20-year-old control systems during short maintenance windows with <em>zero unplanned plant downtime</em>.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white border border-slate-200 p-6 space-y-4">
                <div className="text-xs font-mono uppercase text-slate-400 font-bold">
                  Business ROI Metrics:
                </div>
                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-slate-50 border-l-2 border-emerald-600">
                    <strong className="text-slate-900 block font-bold">15% – 35% HVAC Energy Savings</strong>
                    <span className="text-slate-600">Verified electricity reduction in commercial towers using our Niagara N4 chiller staging algorithms.</span>
                  </div>
                  <div className="p-3 bg-slate-50 border-l-2 border-red-600">
                    <strong className="text-slate-900 block font-bold">Zero-Downtime Migration</strong>
                    <span className="text-slate-600">Upgrading legacy TDC3000 and SLC 500 without rewiring field cables, saving up to 70% in capital expenditure.</span>
                  </div>
                  <div className="p-3 bg-slate-50 border-l-2 border-slate-900">
                    <strong className="text-slate-900 block font-bold">Fast-Track EPC Turnaround</strong>
                    <span className="text-slate-600">Pre-bid BOQ engineering and 100% pre-commissioned panels prevent costly on-site contractor delays.</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Perspective 3: Technical Engineering Perspective */}
          {activeStoryTab === "engineers" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest">
                  Technical Architecture
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Multi-Vendor Distributed Control, Safety Instrumented Systems & E&I Blueprints.
                </h3>
                <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                  <p>
                    TecLogos operates across Level 0 to Level 3 of the industrial automation pyramid. We prepare comprehensive Instrumentation & Electrical (I&E) deliverables, including P&ID reviews, Instrument Indexes, Loop Schematics, Cable Sizing, and Marshalling Cabinet General Arrangement (GA) drawings.
                  </p>
                  <p>
                    Our core technical lineage comes from senior engineers formerly with Honeywell. We program continuous process algorithms in Honeywell Experion PKS (C200/C300), configure Siemens TIA Portal S7-1500R redundant PLCs, deploy ABB System 800xA (AC 800M), and build SIL-2 / SIL-3 Safety Instrumented Systems (Honeywell Safety Manager / FSC).
                  </p>
                  <p>
                    Every panel undergoes strict 100% Factory Acceptance Testing (FAT) with simulated I/O injection before shipment, ensuring verified cause-and-effect matrix execution.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white border border-slate-200 p-6 space-y-3 text-xs">
                <div className="text-xs font-mono uppercase text-slate-400 font-bold mb-2">
                  Engineering Stack & Standards:
                </div>
                <div className="p-2.5 bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <span className="font-bold text-slate-900">DCS / Safety Systems:</span>
                  <span className="font-mono text-red-600">Experion PKS, TPS, Safety Manager</span>
                </div>
                <div className="p-2.5 bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <span className="font-bold text-slate-900">PLC & HMI:</span>
                  <span className="font-mono text-slate-700">Siemens S7, WinCC, ControlLogix</span>
                </div>
                <div className="p-2.5 bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <span className="font-bold text-slate-900">Open BMS Frameworks:</span>
                  <span className="font-mono text-slate-700">Tridium Niagara N4, Spyder, BACnet</span>
                </div>
                <div className="p-2.5 bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <span className="font-bold text-slate-900">Compliance Directives:</span>
                  <span className="font-mono text-slate-700">IEC 61131-3, IEC 61511, ISA-88/101</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Leonardo da Vinci Quote Section from content.txt - ABB Editorial Layout */}
        <div className="border-t border-b border-slate-200 py-12 px-6 sm:px-12 bg-slate-50/50 flex flex-col md:flex-row items-center gap-8 justify-between">
          <div className="max-w-2xl space-y-2">
            <span className="text-4xl sm:text-5xl font-serif text-red-600 leading-none">“</span>
            <p className="text-lg sm:text-2xl font-light text-slate-900 italic tracking-tight leading-snug">
              The human foot is a masterpiece of engineering and a work of art.
            </p>
            <div className="text-xs font-mono uppercase text-slate-500 font-semibold tracking-wider pt-1">
              — Leonardo da Vinci • Quoted in TecLogos Founding Manifesto
            </div>
          </div>
          <div className="text-xs text-slate-600 max-w-md leading-relaxed border-l-2 border-red-600 pl-4 shrink-0">
            At TecLogos, we regard industrial automation not merely as wiring and software, but as the disciplined craftsmanship of precision engineering.
          </div>
        </div>

        {/* The 3 Core Offerings Breakdown (from content.txt) with High-Res Industrial Photography */}
        <div className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-600">
              Core Offerings Detailed
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Three Pillars of Industrial & Building Excellence
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1: Industrial Automation */}
            <div className="editorial-card group flex flex-col justify-between">
              <div>
                <div
                  className="h-52 w-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80')`,
                  }}
                />
                <div className="p-6 space-y-3">
                  <span className="text-[10px] font-mono font-bold uppercase text-red-600 tracking-wider">
                    Pillar 01 • Heavy Process
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition">
                    Industrial Automation & DCS
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    End-to-end integrated system instrumentation design from field devices to central control rooms. Solution consulting, software application development, graphics displays, database migrations, and 100% FAT/SAT testing.
                  </p>
                  <div className="text-[11px] text-slate-500 pt-1 space-y-1">
                    <div>• <strong>Platforms:</strong> Honeywell Experion/TPS, Siemens S7, ABB 800xA, Rockwell SLC/Logix</div>
                    <div>• <strong>Services:</strong> Greenfield consulting, performance baselining, automation audits</div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href="/services#industrial-automation"
                  className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1.5 transition"
                >
                  <span>Explore Industrial Automation</span>
                  <Icons.ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Pillar 2: Building Automation BMS */}
            <div className="editorial-card group flex flex-col justify-between">
              <div>
                <div
                  className="h-52 w-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80')`,
                  }}
                />
                <div className="p-6 space-y-3">
                  <span className="text-[10px] font-mono font-bold uppercase text-red-600 tracking-wider">
                    Pillar 02 • Smart Facilities
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition">
                    Building Management Systems (BMS)
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Total integrated building control and HVAC instrumentation design. Upgrading old legacy pneumatic or closed systems to open Niagara N4 platforms, saving 15%–35% in commercial facility electricity.
                  </p>
                  <div className="text-[11px] text-slate-500 pt-1 space-y-1">
                    <div>• <strong>Platforms:</strong> Tridium Niagara N4, Honeywell Spyder DDC, Johnson Controls NAE/FEC</div>
                    <div>• <strong>Upgrades:</strong> Niagara AX to N4, Johnson Controls to Niagara, pneumatic retrofits</div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href="/services#building-automation"
                  className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1.5 transition"
                >
                  <span>Explore Building Automation</span>
                  <Icons.ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Pillar 3: Turnkey E&I & Custom Panels */}
            <div className="editorial-card group flex flex-col justify-between">
              <div>
                <div
                  className="h-52 w-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80')`,
                  }}
                />
                <div className="p-6 space-y-3">
                  <span className="text-[10px] font-mono font-bold uppercase text-red-600 tracking-wider">
                    Pillar 03 • Fabrication & Design
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition">
                    Turnkey E&I & Panel Fabrication
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Detailed Electrical & Instrumentation (E&I) design deliverables and custom control panel manufacturing. Assembled in our Pune workshop with certified Rittal/Schneider enclosures and 100% pre-shipment simulated FAT.
                  </p>
                  <div className="text-[11px] text-slate-500 pt-1 space-y-1">
                    <div>• <strong>Deliverables:</strong> Instrument Index, I/O lists, Cable Schedules, Loop Drawings, BOM</div>
                    <div>• <strong>Testing:</strong> Power-on test, continuity checks, simulated signal injection</div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href="/services#control-panels"
                  className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1.5 transition"
                >
                  <span>Explore Turnkey & Panels</span>
                  <Icons.ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Company Principles Section (Direct from content.txt) */}
        <div className="bg-slate-900 text-white p-8 sm:p-12 shadow-sm space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono font-bold uppercase text-red-500 tracking-widest">
              Guiding Ethos from content.txt
            </span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              The Five Enduring Principles of TecLogos
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Formulated at our inception in 2018 to ensure sustainable growth, technical excellence, and deep employee pride.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                num: "01",
                title: "To Be a Successful Enduring Business",
                desc: "Focusing on long-term client relationships and technical reliability rather than short-term gains.",
              },
              {
                num: "02",
                title: "To Focus on Design, Engineering & Special Services",
                desc: "Never settling for basic trade, but mastering the deepest mathematical and architectural engineering disciplines.",
              },
              {
                num: "03",
                title: "To Be a Good Place to Work",
                desc: "Fostering psychological safety, continuous skills development, and mutual respect on the shop floor.",
              },
              {
                num: "04",
                title: "To Reward Effort",
                desc: "Directly recognizing and compensating the engineers whose dedication brings critical plants online on time.",
              },
              {
                num: "05",
                title: "To Be Owned & Managed by Employees",
                desc: "An engineering-driven company governed by the professionals who actually design and commission the systems.",
              },
            ].map((p) => (
              <div key={p.num} className="p-4 bg-slate-800/80 border border-slate-700 space-y-2">
                <span className="text-xl font-mono font-black text-red-500 block">
                  {p.num}
                </span>
                <h4 className="text-xs font-bold text-white leading-tight">
                  {p.title}
                </h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Social Responsibility (CSR) Spotlight (Direct from content.txt) */}
        <div className="p-8 sm:p-10 bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-600">
              Social Responsibility • Giving Back
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Sponsoring Primary Education for Children in Need
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              “We believe that it is the responsibility of each and every human kind to repay the debts of society. This encourages us sparing and returning a share of our professional achievements back to society. At the end of every year, TecLogos donates the complete primary education expenses for children from economically backward families.”
            </p>
          </div>

          <div className="shrink-0 p-4 bg-white border border-slate-200 text-center space-y-1 shadow-2xs">
            <div className="text-2xl font-black font-mono text-red-600">
              100% Annual
            </div>
            <div className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">
              Education Sponsorship Commitment
            </div>
            <div className="text-[10px] text-slate-500">
              Hadapsar & Pune District Initiatives
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}