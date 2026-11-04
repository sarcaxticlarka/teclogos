"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Icons } from "@/components/ui/Icons";
import { PROJECTS_DATA } from "@/data/projects";
import { InteractiveRfqModal } from "@/components/rfq/InteractiveRfqModal";

export default function ProjectsPage() {
  const [rfqModalOpen, setRfqModalOpen] = useState(false);
  const [sectorFilter, setSectorFilter] = useState("all");

  const filteredProjects =
    sectorFilter === "all"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) =>
          p.clientSector.toLowerCase().includes(sectorFilter.toLowerCase())
        );

  const getProjectImage = (id: string) => {
    switch (id) {
      case "thermal-power-bop":
        return "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80"; // Power plant steam & towers
      case "refinery-esd-migration":
        return "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80"; // Refinery piping
      case "municipal-water-scada":
        return "https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?auto=format&fit=crop&w=1200&q=80"; // Water pumps & clarifier
      case "cement-kiln-optimization":
        return "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"; // Industrial plant machinery
      case "commercial-bms-niagara":
        return "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"; // Smart glass tower
      default:
        return "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1200&q=80";
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-red-600 selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section - ABB Customer Stories Style */}
        <section className="relative bg-slate-900 text-white overflow-hidden py-24 sm:py-28 px-4 sm:px-6">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=2000&q=80')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/60" />

          <div className="max-w-7xl mx-auto space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600 text-white text-xs font-mono font-bold uppercase tracking-widest">
              Field Execution Track Record
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight max-w-4xl leading-[1.08]">
              Executed Automation Projects & Engineering Case Studies
            </h1>

            <p className="text-base sm:text-lg text-slate-200 max-w-3xl leading-relaxed">
              Explore how TecLogos solves severe operational challenges: from 600 MW thermal power plant auxiliary overhauls to SIL-3 refinery safety shut-down cutovers, municipal water SCADA, and commercial chiller plant energy optimization.
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 pt-4">
              {[
                { id: "all", label: "All Projects" },
                { id: "power", label: "Power & Utilities" },
                { id: "oil", label: "Oil, Gas & Petrochemicals" },
                { id: "water", label: "Water & Wastewater" },
                { id: "cement", label: "Cement & Minerals" },
                { id: "commercial", label: "Commercial BMS" },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setSectorFilter(f.id)}
                  className={`px-4 py-2 text-xs font-semibold transition ${
                    sectorFilter === f.id
                      ? "bg-red-600 text-white shadow-xs"
                      : "bg-white/10 text-slate-200 hover:bg-white hover:text-slate-900 border border-white/20"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Project Case Studies List - ABB Editorial Layout */}
        <section className="py-20 px-4 sm:px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto space-y-12">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                id={project.id}
                className="bg-white border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8"
              >
                {/* Case Study Header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-200">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-red-50 text-red-600 border border-red-200 uppercase">
                        {project.clientSector}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="text-xs font-mono text-slate-500">
                        {project.location}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="text-xs font-mono px-2 py-0.5 bg-slate-100 text-slate-700 border border-slate-200 font-semibold">
                        {project.architectureBadge}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      {project.title}
                    </h2>
                  </div>

                  <button
                    onClick={() => setRfqModalOpen(true)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-red-600 text-white text-xs font-bold uppercase tracking-wider transition shrink-0"
                  >
                    <Icons.Sliders className="w-3.5 h-3.5" />
                    <span>Inquire for Similar Project</span>
                  </button>
                </div>

                {/* Split Banner: Real Photo + Scope */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-5 h-56 sm:h-64 overflow-hidden border border-slate-200 shadow-2xs">
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-500 hover:scale-105"
                      style={{
                        backgroundImage: `url('${getProjectImage(project.id)}')`,
                      }}
                    />
                  </div>
                  <div className="lg:col-span-7 p-6 bg-slate-50 border-l-3 border-red-600 space-y-2">
                    <span className="text-xs font-mono font-bold text-red-600 uppercase">
                      Execution Scope Summary
                    </span>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {project.scopeSummary}
                    </p>
                  </div>
                </div>

                {/* 2-Column Problem & Approach */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  {/* Left Column: Client Challenge */}
                  <div className="p-6 bg-slate-50 border border-slate-200 space-y-3">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold flex items-center gap-2">
                      <Icons.AlertTriangle className="w-4 h-4 text-amber-600" />
                      <span>The Operational Challenge</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {project.clientChallenge}
                    </p>
                  </div>

                  {/* Right Column: TecLogos Engineering Approach */}
                  <div className="p-6 bg-slate-50 border border-slate-200 space-y-3">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-red-600 font-bold flex items-center gap-2">
                      <Icons.Cpu className="w-4 h-4 text-red-600" />
                      <span>TecLogos Engineering Approach</span>
                    </h3>
                    <ul className="space-y-2">
                      {project.engineeringApproach.map((step) => (
                        <li key={step} className="text-xs text-slate-700 flex items-start gap-2.5">
                          <Icons.Check className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Quantifiable Outcomes Matrix */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                    Quantifiable Operational Outcomes
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {project.measurableOutcomes.map((o) => (
                      <div
                        key={o.metric}
                        className="p-4 bg-slate-50 border border-slate-200 text-left space-y-1"
                      >
                        <div className="text-2xl font-black font-mono text-red-600">
                          {o.metric}
                        </div>
                        <div className="text-xs text-slate-600 leading-tight">
                          {o.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies Deployed Footer */}
                <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-slate-500 font-medium">Technologies Deployed:</span>
                    {project.technologiesDeployed.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-1 bg-slate-100 border border-slate-200 text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      <InteractiveRfqModal
        isOpen={rfqModalOpen}
        onClose={() => setRfqModalOpen(false)}
      />
    </div>
  );
}