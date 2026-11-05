"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Icons } from "@/components/ui/Icons";
import { SERVICES_DATA } from "@/data/services";

export function CapabilitiesSection() {
  const [activeTab, setActiveTab] = useState(SERVICES_DATA[0].id);

  const selectedService =
    SERVICES_DATA.find((s) => s.id === activeTab) || SERVICES_DATA[0];

  const getServiceImage = (id: string) => {
    switch (id) {
      case "industrial-automation":
        return "/images/services/service-01-automation.jpg"; // DCS Control Room Station
      case "ei-engineering":
        return "/images/services/service-02-ei.jpg"; // Industrial Piping, Valves & Transmitters
      case "control-panels":
        return "/images/services/service-04-panels.jpg"; // Control panel fabrication & wiring
      case "building-automation":
        return "/images/services/service-03-bms.jpg"; // Commercial BMS skyscraper
      case "migration-modernization":
        return "/images/services/service-05-modernisation.jpg"; // Heavy industrial plant modernisation
      case "lifecycle-support":
        return "/images/services/service-06-commissioning.jpg"; // Site engineer in safety gear
      default:
        return "/images/services/service-01-automation.jpg";
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Editorial Section Heading - ABB Style */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-red-600">
            <span className="w-8 h-[2px] bg-red-600 inline-block" />
            <span>Turnkey Engineering Disciplines</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Integrated Process Automation & Electrical Engineering
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From pre-bid tender engineering and custom control panel manufacturing to DCS application development, FAT simulation, and 24/7 site commissioning.
          </p>
        </div>

        {/* Tab Selector Buttons - Sharp Corporate Gray Pills */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3">
          {SERVICES_DATA.map((service) => {
            const isActive = activeTab === service.id;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`px-4 py-2.5 text-xs sm:text-sm font-bold transition border-b-2 -mb-[13px] ${
                  isActive
                    ? "text-red-600 border-red-600 bg-red-50/50"
                    : "text-slate-600 hover:text-slate-900 border-transparent hover:border-slate-300"
                }`}
              >
                {service.title.split("&")[0]}
              </button>
            );
          })}
        </div>

        {/* Active Tab Showcase Card - Clean White Architectural Panel */}
        <div className="bg-slate-50 border border-slate-200 p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left 7 Columns: Technical Narrative & Deliverables */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-wider">
                  {selectedService.category} • {selectedService.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {selectedService.title}
                </h3>
                <p className="text-sm font-semibold text-slate-700">
                  {selectedService.tagline}
                </p>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {selectedService.overview}
              </p>

              {/* Deliverables List */}
              <div className="space-y-3 pt-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold">
                  Standard Technical Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.keyDeliverables.slice(0, 4).map((d) => (
                    <div
                      key={d.name}
                      className="p-4 bg-white border border-slate-200 space-y-1 shadow-2xs"
                    >
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                        <Icons.Check className="w-4 h-4 text-red-600 shrink-0" />
                        <span>{d.name}</span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        {d.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href={`/services#${selectedService.id}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider transition"
                >
                  <span>Read Full Technical Specification</span>
                  <Icons.ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right 5 Columns: Visual Asset, Standards, Platforms & Metrics */}
            <div className="lg:col-span-5 space-y-6 bg-white border border-slate-200 p-6 sm:p-8 shadow-xs">
              {/* Authentic Visual Snapshot */}
              <div className="relative aspect-[16/9] w-full overflow-hidden border border-slate-200/80 bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getServiceImage(selectedService.id)}
                  alt={selectedService.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-2.5 left-2.5">
                  <span className="inline-block px-2.5 py-0.5 bg-red-600 text-white text-[9.5px] font-bold uppercase tracking-wider shadow-xs">
                    {selectedService.badge}
                  </span>
                </div>
              </div>

              {/* Measurable Value */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold flex items-center gap-2">
                  <Icons.Activity className="w-4 h-4 text-red-600" />
                  <span>Measurable Operational Impact</span>
                </h4>
                <ul className="space-y-2.5">
                  {selectedService.measurableBenefits.map((b) => (
                    <li
                      key={b}
                      className="text-xs text-slate-700 flex items-start gap-2.5 font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0 mt-1.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Supported Tech Platforms */}
              <div className="space-y-2 pt-4 border-t border-slate-100">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                  Supported Platforms & Tools
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedService.supportedTechnologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-1 bg-slate-100 border border-slate-200 text-slate-800 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technical Standards */}
              <div className="space-y-2 pt-4 border-t border-slate-100">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                  International Compliance Standards
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedService.technicalStandards.map((std) => (
                    <span
                      key={std}
                      className="text-[10px] font-mono px-2 py-0.5 bg-slate-50 border border-slate-200 text-slate-700"
                    >
                      {std}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}