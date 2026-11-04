"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Icons } from "@/components/ui/Icons";
import { SERVICES_DATA } from "@/data/services";
import { InteractiveRfqModal } from "@/components/rfq/InteractiveRfqModal";

export default function ServicesPage() {
  const [rfqModalOpen, setRfqModalOpen] = useState(false);
  const [targetService, setTargetService] = useState("");

  const handleOpenRfq = (srvId: string) => {
    setTargetService(srvId);
    setRfqModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-red-600 selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Services Page Hero: ABB Editorial Style */}
        <section className="relative py-24 px-4 sm:px-6 bg-slate-900 text-white overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-25"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80')`,
            }}
          />
          <div className="max-w-7xl mx-auto space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600 text-white text-xs font-mono font-bold uppercase tracking-widest">
              Turnkey Engineering Capabilities
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight max-w-4xl">
              Turnkey Process Automation & Detailed E&I Engineering
            </h1>
            <p className="text-base sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
              From tender-stage feasibility and detailed CAD schematics to custom control panel assembly, simulated FAT testing, and live site commissioning. Explore our full engineering deliverable packages.
            </p>

            {/* Quick Navigation Jump Anchors */}
            <div className="flex flex-wrap gap-2 pt-4">
              {SERVICES_DATA.map((srv) => (
                <a
                  key={srv.id}
                  href={`#${srv.id}`}
                  className="px-3.5 py-1.5 bg-white/10 hover:bg-white text-white hover:text-slate-900 border border-white/20 text-xs font-semibold uppercase tracking-wider transition"
                >
                  ↓ {srv.title.split("&")[0]}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Deep Service Breakdown Sections - Clean White Architectural Layout */}
        <div className="divide-y divide-slate-200">
          {SERVICES_DATA.map((service, index) => (
            <section
              key={service.id}
              id={service.id}
              className={`py-24 px-4 sm:px-6 ${
                index % 2 === 0 ? "bg-white" : "bg-slate-50"
              }`}
            >
              <div className="max-w-7xl mx-auto space-y-10">
                {/* Header of Service */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200">
                  <div className="space-y-2 max-w-3xl">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 bg-slate-100 text-slate-800 border border-slate-200 uppercase">
                        SERVICE 0{index + 1}
                      </span>
                      <span className="text-xs font-mono font-bold text-red-600 uppercase">
                        {service.category}
                      </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                      {service.title}
                    </h2>
                    <p className="text-base font-semibold text-slate-700">
                      {service.tagline}
                    </p>
                  </div>

                  <button
                    onClick={() => handleOpenRfq(service.id)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition shrink-0"
                  >
                    <span>Request Scoping for this Service</span>
                    <Icons.ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* 3-Column Educational & Technical Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Column 1: The Challenge & Why It Matters */}
                  <div className="p-8 bg-white border border-slate-200 space-y-4 shadow-2xs">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold flex items-center gap-2 border-b border-slate-100 pb-2">
                      <Icons.Shield className="w-4 h-4 text-red-600" />
                      <span>Why Industries Need This</span>
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {service.whyIndustriesNeedIt}
                    </p>

                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold pt-2">
                      Common Plant Applications
                    </h4>
                    <ul className="space-y-1.5">
                      {service.industrialApplications.map((app) => (
                        <li key={app} className="text-xs text-slate-700 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0 mt-1.5" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 2: How the Technology Works */}
                  <div className="p-8 bg-white border border-slate-200 space-y-4 shadow-2xs">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold flex items-center gap-2 border-b border-slate-100 pb-2">
                      <Icons.Cpu className="w-4 h-4 text-red-600" />
                      <span>How the Technology Works</span>
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {service.howItWorks}
                    </p>

                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold pt-2">
                      TecLogos Execution Methodology
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {service.howTecLogosDelivers}
                    </p>
                  </div>

                  {/* Column 3: Measurable Outcomes & Platforms */}
                  <div className="p-8 bg-white border border-slate-200 space-y-4 shadow-2xs">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold flex items-center gap-2 border-b border-slate-100 pb-2">
                      <Icons.Activity className="w-4 h-4 text-emerald-600" />
                      <span>Measurable Operational Benefits</span>
                    </h3>
                    <ul className="space-y-2">
                      {service.measurableBenefits.map((b) => (
                        <li key={b} className="text-xs text-slate-700 flex items-start gap-2">
                          <Icons.Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold pt-2">
                      Supported Platforms
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {service.supportedTechnologies.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono px-2 py-0.5 bg-slate-100 border border-slate-200 text-slate-800"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Technical Deliverables Box */}
                <div className="p-8 bg-white border border-slate-200 space-y-4 shadow-xs">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold">
                    Official Deliverables Generated for this Scope
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {service.keyDeliverables.map((d) => (
                      <div
                        key={d.name}
                        className="p-4 bg-slate-50 border border-slate-200 space-y-1"
                      >
                        <div className="text-xs font-bold text-slate-900 flex items-center gap-2">
                          <Icons.FileText className="w-3.5 h-3.5 text-red-600 shrink-0" />
                          <span>{d.name}</span>
                        </div>
                        <p className="text-[11px] text-slate-600 leading-relaxed">
                          {d.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500">
                    <div>
                      <span className="font-bold text-slate-800">Compliance Standards: </span>
                      {service.technicalStandards.join(" • ")}
                    </div>
                    <button
                      onClick={() => handleOpenRfq(service.id)}
                      className="text-red-600 hover:text-red-700 font-bold flex items-center gap-1 uppercase tracking-wider"
                    >
                      <span>Inquire About {service.title.split("&")[0]} Scope</span>
                      <Icons.ArrowRight className="w-3 h-3" />
                    </button>
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
        initialService={targetService}
      />
    </div>
  );
}
