"use client";

import React from "react";
import { Icons } from "@/components/ui/Icons";

const WORKFLOW_STEPS = [
  {
    step: "01",
    phase: "Pre-Bid & Tender Feasibility",
    tagline: "Accurate BOQ Estimation & System Scoping",
    description:
      "We analyze tender documents, P&IDs, and process descriptions to formulate preliminary single-line diagrams, controller architectures, and defendable bills of quantities (BOQ) that eliminate bidding uncertainty for EPC contractors.",
    deliverables: ["Preliminary Network Architecture", "Estimated I/O Count Breakdown", "Hardware Selection BOQ"],
  },
  {
    step: "02",
    phase: "Detailed E&I Engineering",
    tagline: "Rigorous Blueprints Adhering to IEC & ISA Standards",
    description:
      "Our design team develops comprehensive Instrument Indexes, PLC/DCS I/O allocation tables, individual loop drawings, cable sizing schedules, earthing calculations, and panel General Arrangement (GA) drawings.",
    deliverables: ["Instrument Datasheets", "Cable Schedules & Sizing", "Loop Schematics & Termination"],
  },
  {
    step: "03",
    phase: "Control Panel Fabrication",
    tagline: "Custom Enclosure Assembly with Certified Components",
    description:
      "At our assembly facility in Pune, we manufacture custom PLC, DCS, Marshalling, and MCC panels using premium enclosures (Rittal, Schneider) with laser-printed ferrules, proper voltage segregation, and thermal heat dissipation.",
    deliverables: ["General Arrangement (GA) CAD", "Power Distribution Schematics", "Internal Heat Calculations"],
  },
  {
    step: "04",
    phase: "Simulated Factory Acceptance Testing (FAT)",
    tagline: "Rigorous Workshop Signal & Logic Emulation",
    description:
      "Before any panel leaves our facility, we power up the controllers, inject simulated 4-20mA signals, emulate plant dynamics, and walk client engineers through every line of code and Cause & Effect emergency shutdown interlock.",
    deliverables: ["Factory Acceptance Test Report", "Cause & Effect Sign-off", "Emulated Loop Validation Dossier"],
  },
  {
    step: "05",
    phase: "On-Site Erection & SAT Commissioning",
    tagline: "Cold & Hot Loop Checks by Experienced Site Teams",
    description:
      "Our senior site engineers deploy to your facility to supervise cabinet placement, conduct point-to-point cold loop checks, calibrate field transmitters with HART communicators, and lead hot process commissioning.",
    deliverables: ["Site Acceptance Test (SAT) Handover", "Cold/Hot Calibration Records", "PID Loop Tuning Parameters"],
  },
  {
    step: "06",
    phase: "Plant Handover, Training & AMC",
    tagline: "Empowering Operators & Ensuring Continuous Uptime",
    description:
      "We provide classroom and control-room training for plant engineers, deliver complete As-Built documentation packages, and offer structured Annual Maintenance Contracts (AMC) with guaranteed emergency dispatch response.",
    deliverables: ["As-Built Documentation Pack", "Operator Training Manuals", "24/7 AMC Support Coverage"],
  },
];

export function EngineeringWorkflow() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-red-600">
            <span className="w-8 h-[2px] bg-red-600 inline-block" />
            <span>Turnkey Project Execution</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            The TecLogos Turnkey Execution Methodology
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Eliminating cost overruns and commissioning surprises through a disciplined, 6-stage engineering roadmap tested across critical industrial environments.
          </p>
        </div>

        {/* 6-Step Workflow Grid - Clean White Architectural Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORKFLOW_STEPS.map((w) => (
            <div
              key={w.step}
              className="p-8 bg-white border border-slate-200 hover:border-slate-300 transition shadow-2xs group flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-mono font-black text-slate-200 group-hover:text-red-600 transition">
                    {w.step}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-100 text-slate-600 font-bold uppercase">
                    STAGE {w.step}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-bold text-slate-900 tracking-tight group-hover:text-red-600 transition">
                    {w.phase}
                  </h3>
                  <p className="text-xs font-medium text-red-600">
                    {w.tagline}
                  </p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {w.description}
                </p>
              </div>

              {/* Deliverable Pills */}
              <div className="pt-4 border-t border-slate-100 space-y-1.5">
                <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">
                  Key Phase Deliverables:
                </span>
                <div className="space-y-1">
                  {w.deliverables.map((d) => (
                    <div
                      key={d}
                      className="text-[11px] text-slate-700 flex items-center gap-1.5"
                    >
                      <Icons.Check className="w-3.5 h-3.5 text-red-600 shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
