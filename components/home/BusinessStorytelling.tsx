"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Icons } from "@/components/ui/Icons";

export function BusinessStorytelling() {
  const [activeStoryTab, setActiveStoryTab] = useState<"plain" | "business" | "engineers">("plain");

  return (
    <section id="company-introduction" className="py-20 px-4 sm:px-6 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section 2 (PDF Page 5): Short Company Introduction */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-red-600">
            <span className="w-8 h-[2px] bg-red-600 inline-block" />
            <span>Company Introduction</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.12]">
            Engineering that connects people, machines and processes.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Factories and industrial plants depend on many systems working together. TecLogos provides engineering and automation services that help connect equipment, control systems and operator interfaces. From understanding the requirement to engineering, testing and commissioning, the company supports the stages agreed for each project.
          </p>
        </div>

        {/* Interactive 2-Layer Perspective Explainer (PDF Page 2, 3 & 15) */}
        <div className="bg-slate-50 border border-slate-200 p-6 sm:p-10 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
              Explore Our Work by Perspective:
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveStoryTab("plain")}
                className={`px-3.5 py-1.5 text-xs font-bold transition ${
                  activeStoryTab === "plain"
                    ? "bg-red-600 text-white shadow-2xs"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300"
                }`}
              >
                Plain English (How It Works)
              </button>
              <button
                onClick={() => setActiveStoryTab("business")}
                className={`px-3.5 py-1.5 text-xs font-bold transition ${
                  activeStoryTab === "business"
                    ? "bg-red-600 text-white shadow-2xs"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300"
                }`}
              >
                Business & Operational Value
              </button>
              <button
                onClick={() => setActiveStoryTab("engineers")}
                className={`px-3.5 py-1.5 text-xs font-bold transition ${
                  activeStoryTab === "engineers"
                    ? "bg-red-600 text-white shadow-2xs"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300"
                }`}
              >
                Technical Architecture
              </button>
            </div>
          </div>

          {/* Perspective 1: Plain English / Child-Friendly (Guide Page 2 & 3) */}
          {activeStoryTab === "plain" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest">
                  Simple Explanation
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  What is industrial automation?
                </h3>
                <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                  <p>
                    Industrial automation means using sensors, computers, controllers and machines to perform or manage work in a factory or plant. Instead of a person manually checking every machine all the time, connected systems can collect information and help operators control the process.
                  </p>
                  <p>
                    <strong>A simple example:</strong> Imagine a big factory making food, cement or electricity. Many machines must work in the right order. Sensors act like the factory's eyes. Controllers act like its brain. Motors and valves do the physical work. Screens help people see what is happening.
                  </p>
                  <p>
                    TecLogos connects these parts with custom wiring, control logic, and operator screens so facilities run safely, reliably, and efficiently.
                  </p>
                </div>
              </div>

              {/* Simple Example Table from Guide Page 3 */}
              <div className="lg:col-span-6 bg-white border border-slate-200 p-5 space-y-3">
                <div className="text-xs font-mono uppercase text-slate-500 font-bold border-b border-slate-100 pb-2 flex items-center justify-between">
                  <span>How Parts Connect: Water Treatment Plant Example</span>
                  <span className="text-[10px] text-red-600 font-mono">Process Analogy</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-100 text-slate-400 font-mono text-[10.5px]">
                        <th className="pb-2 font-bold uppercase">Part</th>
                        <th className="pb-2 font-bold uppercase">Simple Meaning</th>
                        <th className="pb-2 font-bold uppercase">Real Example</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="py-2.5 font-bold text-slate-900">Sensor (Eyes)</td>
                        <td className="py-2.5 text-slate-600">Measures what is happening.</td>
                        <td className="py-2.5 text-slate-500 font-mono text-[11px]">Measures water level or pressure.</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-bold text-slate-900">Controller (Brain)</td>
                        <td className="py-2.5 text-slate-600">Makes decisions using rules.</td>
                        <td className="py-2.5 text-slate-500 font-mono text-[11px]">Starts a pump when tank level is low.</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-bold text-slate-900">Motor / Valve (Muscles)</td>
                        <td className="py-2.5 text-slate-600">Does the physical work.</td>
                        <td className="py-2.5 text-slate-500 font-mono text-[11px]">Moves water through a pipe.</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-bold text-slate-900">SCADA / Screen</td>
                        <td className="py-2.5 text-slate-600">Shows info to the operator.</td>
                        <td className="py-2.5 text-slate-500 font-mono text-[11px]">Displays levels, alarms and trends.</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-bold text-slate-900">Network</td>
                        <td className="py-2.5 text-slate-600">Lets devices exchange data.</td>
                        <td className="py-2.5 text-slate-500 font-mono text-[11px]">Connects sensors to control screens.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Perspective 2: Business & Operational Value (Guide Page 15) */}
          {activeStoryTab === "business" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest">
                  Operational Value
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Protecting Plant Availability & Eliminating Single-Vendor Lock-in.
                </h3>
                <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                  <p>
                    For plant owners and project teams, unexpected equipment stoppage causes immediate production loss, off-specification batches, and costly emergency contractor callouts.
                  </p>
                  <p>
                    Furthermore, single-brand manufacturers often lock facilities into proprietary hardware and expensive captive service rates.
                  </p>
                  <p>
                    <strong>The TecLogos Approach:</strong> We provide independent systems integration. We select and configure the exact controller platform suited to your facility, upgrade legacy control cabinets while planning carefully to reduce disruption, and test everything thoroughly before site delivery.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white border border-slate-200 p-6 space-y-3 text-xs">
                <div className="text-xs font-mono uppercase text-slate-400 font-bold">
                  Core Business Benefits:
                </div>
                <div className="space-y-2.5">
                  <div className="p-3 bg-slate-50 border-l-2 border-red-600">
                    <strong className="text-slate-900 block font-bold">Reduced Operational Disruption</strong>
                    <span className="text-slate-600">Carefully staged migrations of older systems reduce downtime during changeovers.</span>
                  </div>
                  <div className="p-3 bg-slate-50 border-l-2 border-slate-900">
                    <strong className="text-slate-900 block font-bold">Vendor-Independent Selection</strong>
                    <span className="text-slate-600">Hardware and software chosen solely on technical suitability and lifecycle cost.</span>
                  </div>
                  <div className="p-3 bg-slate-50 border-l-2 border-red-600">
                    <strong className="text-slate-900 block font-bold">Energy & Utility Visibility</strong>
                    <span className="text-slate-600">Sub-metering and chiller/HVAC management for quantifiable electricity savings.</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Perspective 3: Technical Architecture */}
          {activeStoryTab === "engineers" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest">
                  Technical Architecture
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Multi-Platform Distributed Control, Safety Systems & Detailed E&I Schematics.
                </h3>
                <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                  <p>
                    TecLogos operates across Level 0 (field instrumentation) to Level 3 (supervisory operations) of the industrial automation pyramid. We prepare comprehensive Electrical & Instrumentation (E&I) deliverables: P&ID analysis, Instrument Indexes, Loop Schematics, Cable Sizing, and Marshalling Cabinet GA drawings.
                  </p>
                  <p>
                    Our engineering team brings hands-on experience across Honeywell Experion PKS/TPS, Siemens S7-1500/TIA Portal, ABB System 800xA, Rockwell ControlLogix, and open Tridium Niagara N4 frameworks.
                  </p>
                  <p>
                    All control cabinets undergo structured Factory Acceptance Testing (FAT) with simulated I/O verification before dispatch to site.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white border border-slate-200 p-6 space-y-3 text-xs">
                <div className="text-xs font-mono uppercase text-slate-400 font-bold mb-2">
                  Technical Standards & Platforms:
                </div>
                <div className="p-2.5 bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <span className="font-bold text-slate-900">DCS / Controllers:</span>
                  <span className="font-mono text-red-600">Honeywell, Siemens, ABB, Rockwell</span>
                </div>
                <div className="p-2.5 bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <span className="font-bold text-slate-900">Building Automation:</span>
                  <span className="font-mono text-slate-700">Tridium Niagara N4, BACnet, Modbus</span>
                </div>
                <div className="p-2.5 bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <span className="font-bold text-slate-900">Programming Languages:</span>
                  <span className="font-mono text-slate-700">IEC 61131-3 (Ladder, FBD, SCL)</span>
                </div>
                <div className="p-2.5 bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <span className="font-bold text-slate-900">Safety & Standards:</span>
                  <span className="font-mono text-slate-700">IEC 61511, ISA-88, ISA-101</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Section 3 (PDF Page 5 & 6): The 6 Core Service Cards */}
        <div id="core-solutions" className="space-y-8 pt-4">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-600">
              Core Engineering Services
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Six Key Solutions Delivered by TecLogos
            </h3>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
              Specialized automation and electrical engineering disciplines across the complete project lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Industrial Automation */}
            <div className="editorial-card group flex flex-col justify-between">
              <div>
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  <img
                    src="/images/services/service-01-automation.jpg"
                    alt="Industrial Process Automation & DCS Control Room"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                </div>
                <div className="p-6 space-y-2.5">
                  <span className="text-[10px] font-mono font-bold uppercase text-red-600 tracking-wider">
                    Service 01 • Process Control
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition">
                    Industrial Automation
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Systems that help factories and plants monitor and control machines and processes.
                  </p>
                  <p className="text-[11px] text-slate-500 pt-1">
                    Includes PLC, DCS, SCADA, HMI, and control system software integration.
                  </p>
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

            {/* Card 2: Electrical & Instrumentation */}
            <div className="editorial-card group flex flex-col justify-between">
              <div>
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  <img
                    src="/images/services/service-02-ei.jpg"
                    alt="Electrical & Instrumentation Detailed Engineering"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                </div>
                <div className="p-6 space-y-2.5">
                  <span className="text-[10px] font-mono font-bold uppercase text-red-600 tracking-wider">
                    Service 02 • Detailed Design
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition">
                    Electrical & Instrumentation
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Engineering for power, wiring and devices that measure pressure, temperature, flow and other conditions.
                  </p>
                  <p className="text-[11px] text-slate-500 pt-1">
                    Deliverables: Instrument Index, datasheets, loop drawings, and cable schedules.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link
                  href="/services#ei-engineering"
                  className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1.5 transition"
                >
                  <span>Explore E&I Engineering</span>
                  <Icons.ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 3: Building Automation */}
            <div className="editorial-card group flex flex-col justify-between">
              <div>
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  <img
                    src="/images/services/service-03-bms.jpg"
                    alt="Building Management Systems & Smart Facilities"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                </div>
                <div className="p-6 space-y-2.5">
                  <span className="text-[10px] font-mono font-bold uppercase text-red-600 tracking-wider">
                    Service 03 • Smart OT
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition">
                    Building Automation
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Systems that help manage building equipment such as heating, ventilation, air conditioning and energy monitoring.
                  </p>
                  <p className="text-[11px] text-slate-500 pt-1">
                    Platforms: Tridium Niagara N4, Honeywell Spyder, and open BACnet/IP frameworks.
                  </p>
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

            {/* Card 4: Control Panel Engineering */}
            <div className="editorial-card group flex flex-col justify-between">
              <div>
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  <img
                    src="/images/services/service-04-panels.jpg"
                    alt="Control Panel Fabrication & FAT Assembly"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                </div>
                <div className="p-6 space-y-2.5">
                  <span className="text-[10px] font-mono font-bold uppercase text-red-600 tracking-wider">
                    Service 04 • Workshop Assembly
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition">
                    Control Panel Engineering
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Designing and assembling electrical cabinets that house control and automation equipment.
                  </p>
                  <p className="text-[11px] text-slate-500 pt-1">
                    Stages: Design → component selection → wiring → inspection → simulated FAT.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link
                  href="/services#control-panels"
                  className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1.5 transition"
                >
                  <span>Explore Panel Engineering</span>
                  <Icons.ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 5: Plant Modernisation */}
            <div className="editorial-card group flex flex-col justify-between">
              <div>
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  <img
                    src="/images/services/service-05-modernisation.jpg"
                    alt="Plant Modernisation & Legacy DCS/PLC Migration"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                </div>
                <div className="p-6 space-y-2.5">
                  <span className="text-[10px] font-mono font-bold uppercase text-red-600 tracking-wider">
                    Service 05 • Lifecycle Upgrades
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition">
                    Plant Modernisation
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Updating older control systems and equipment where the project scope allows.
                  </p>
                  <p className="text-[11px] text-slate-500 pt-1">
                    Assessment, migration planning, swing-arm adapters, and cutover support.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link
                  href="/services#migration-modernization"
                  className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1.5 transition"
                >
                  <span>Explore Plant Modernisation</span>
                  <Icons.ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 6: Testing & Commissioning */}
            <div className="editorial-card group flex flex-col justify-between">
              <div>
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  <img
                    src="/images/services/service-06-commissioning.jpg"
                    alt="On-Site Testing, Loop Checks & Commissioning"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                </div>
                <div className="p-6 space-y-2.5">
                  <span className="text-[10px] font-mono font-bold uppercase text-red-600 tracking-wider">
                    Service 06 • Verification & Handover
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition">
                    Testing & Commissioning
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Checking that equipment and systems work correctly before handover.
                  </p>
                  <p className="text-[11px] text-slate-500 pt-1">
                    FAT in workshop, cold/hot loop checks at site, SAT certification, and training.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link
                  href="/services#lifecycle-support"
                  className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1.5 transition"
                >
                  <span>Explore Commissioning & Support</span>
                  <Icons.ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
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

        {/* Company Principles Section (Direct from content.txt) */}
        <div className="bg-slate-900 text-white p-8 sm:p-12 shadow-sm space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono font-bold uppercase text-red-500 tracking-widest">
              Guiding Ethos
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
              Annual CSR
            </div>
            <div className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">
              Primary Education Fund
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
