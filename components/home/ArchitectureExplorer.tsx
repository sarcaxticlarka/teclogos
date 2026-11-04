"use client";

import React, { useState } from "react";
import { Icons } from "@/components/ui/Icons";

interface ArchitectureLevel {
  level: number;
  code: string;
  title: string;
  subtitle: string;
  simpleAnalogy: string;
  technicalRole: string;
  hardwareExamples: string[];
  communicationProtocols: string[];
  teclogosScope: string;
}

const ARCHITECTURE_LEVELS: ArchitectureLevel[] = [
  {
    level: 3,
    code: "LEVEL 3: PLANT OPERATIONS & HISTORIAN",
    title: "Enterprise Supervisory & Data Historians",
    subtitle: "Historical Data Logging, Batch Tracking (ISA-88) & Cloud Telemetry",
    simpleAnalogy:
      "Like the black box flight recorder and navigation computer in an airliner, recording every movement and tracking fuel usage.",
    technicalRole:
      "Gathers millions of process data points per second from supervisory servers, archives them for decades without data loss, and enables predictive maintenance and batch recipe traceability.",
    hardwareExamples: [
      "Honeywell Uniformance PHD",
      "OSIsoft PI System / AVEVA Historian",
      "FactoryTalk Historian",
      "Tridium Niagara Cloud Sync",
    ],
    communicationProtocols: ["OPC Unified Architecture (OPC UA)", "MQTT Sparkplug B", "REST APIs", "ODBC / SQL"],
    teclogosScope:
      "We configure historian tags, build automated compliance reporting databases, and interface DCS networks safely through industrial DMZ firewalls.",
  },
  {
    level: 2,
    code: "LEVEL 2: SUPERVISORY & OPERATOR CONTROL (HMI/SCADA)",
    title: "Supervisory Control & Data Acquisition (SCADA / HMI)",
    subtitle: "Central Control Room Displays, High-Performance Graphics & Alarms",
    simpleAnalogy:
      "The cockpit dashboard with digital dials, switches, radar screens, and warning lights that the human pilot watches.",
    technicalRole:
      "Renders dynamic graphical plant schematics for operators, organizes prioritized audible and visual alarms (ISA-18.2), and transmits operator setpoint changes down to controllers.",
    hardwareExamples: [
      "Honeywell Experion Station",
      "Siemens WinCC Unified / Professional",
      "ABB System 800xA Workplace",
      "Rockwell FactoryTalk View SE",
      "Tridium Niagara N4 WebStation",
    ],
    communicationProtocols: ["Industrial Ethernet (TCP/IP)", "Modbus TCP", "Profinet", "OPC DA / UA"],
    teclogosScope:
      "We design ergonomic high-performance HMI graphics, configure multi-monitor operator consoles, and eliminate alarm flooding.",
  },
  {
    level: 1,
    code: "LEVEL 1: REAL-TIME CONTROLLERS & SAFETY SYSTEMS",
    title: "Programmable Logic Controllers (PLC) & DCS Process Controllers",
    subtitle: "Deterministic Millisecond Logic Execution & Fail-Safe Shutdown",
    simpleAnalogy:
      "The reflex nervous system of the human body. When you touch a hot stove, your spine pulls your hand back instantly before your brain even thinks about it.",
    technicalRole:
      "Microprocessor computers operating in millisecond cyclic scans. They compare sensor readings against PID setpoints, execute safety interlocks, and flip outputs without human intervention.",
    hardwareExamples: [
      "Honeywell Experion C300 & C200",
      "Honeywell Safety Manager (SIL 3)",
      "Siemens S7-1500 & S7-1500R Redundant",
      "ABB AC 800M & AC 900F",
      "Rockwell Allen-Bradley ControlLogix",
    ],
    communicationProtocols: ["ControlNet", "Profinet IRT", "EtherNet/IP CIP Sync", "Modbus RTU / TCP", "Profibus DP"],
    teclogosScope:
      "Our core discipline: writing IEC 61131-3 logic, tuning PID loops, configuring redundant failover, and validating Cause & Effect matrices.",
  },
  {
    level: 0,
    code: "LEVEL 0: FIELD INSTRUMENTATION & FINAL ACTUATORS",
    title: "Field Instruments, Transmitters & Final Control Elements",
    subtitle: "Physical Sensing and Modulation on Pipes, Tanks, Motors & Ducts",
    simpleAnalogy:
      "The physical sensory organs and muscles: eyes, ears, skin (sensors) and arms, legs, fingers (valves and motors).",
    technicalRole:
      "Transmitters measure temperature, pressure, differential flow, level, and analytical chemistry. Control valves, pneumatic dampers, and VFDs physically throttle fluids and gases.",
    hardwareExamples: [
      "Pressure & Differential Transmitters (HART / Foundation Fieldbus)",
      "Coriolis Mass & Magnetic Flowmeters",
      "Pneumatic Diaphragm Control Valves & Smart Positioners",
      "Variable Frequency Drives (VFDs)",
      "Thermocouples & RTD Temperature Sensors",
    ],
    communicationProtocols: ["4-20 mA with HART", "Foundation Fieldbus", "Profibus PA", "BACnet MS/TP", "0-10 VDC"],
    teclogosScope:
      "We prepare Instrument Indexes, loop sheets, hook-up drawings, calculate cable sizing, and conduct cold loop calibration on site.",
  },
];

export function ArchitectureExplorer() {
  const [selectedLevel, setSelectedLevel] = useState<number>(1);

  const current =
    ARCHITECTURE_LEVELS.find((l) => l.level === selectedLevel) ||
    ARCHITECTURE_LEVELS[1];

  return (
    <section className="py-24 px-4 sm:px-6 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-red-600">
            <span className="w-8 h-[2px] bg-red-600 inline-block" />
            <span>Industrial Control Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            How Industrial Plants Operate: The Automation Hierarchy
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Industrial operations require strict deterministic layers. Explore each level to understand how field signals journey from pipe sensors to executive dashboards—and where TecLogos delivers engineering mastery.
          </p>
        </div>

        {/* Interactive Pyramid Selector & Detail Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Visual Pyramid Stack (5 Columns) */}
          <div className="lg:col-span-5 space-y-3">
            {ARCHITECTURE_LEVELS.map((item) => {
              const isSelected = selectedLevel === item.level;
              return (
                <button
                  key={item.level}
                  onClick={() => setSelectedLevel(item.level)}
                  className={`w-full p-5 border text-left transition-all duration-200 flex items-center justify-between group ${
                    isSelected
                      ? "bg-white border-red-600 shadow-md border-l-4 border-l-red-600"
                      : "bg-white/70 border-slate-200 hover:bg-white hover:border-slate-300"
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 font-bold ${
                          isSelected
                            ? "bg-red-600 text-white"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        LEVEL {item.level}
                      </span>
                      <span
                        className={`text-sm font-bold ${
                          isSelected ? "text-slate-900" : "text-slate-700"
                        }`}
                      >
                        {item.title.split("(")[0]}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-1">
                      {item.subtitle}
                    </p>
                  </div>
                  <Icons.ChevronRight
                    className={`w-5 h-5 shrink-0 transition ${
                      isSelected
                        ? "text-red-600 translate-x-1"
                        : "text-slate-400 group-hover:text-slate-600"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Inspector Panel (7 Columns) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 p-8 sm:p-10 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-100">
              <span className="text-xs font-mono font-bold text-red-600 tracking-wider">
                {current.code}
              </span>
              <span className="text-xs font-mono px-2.5 py-1 bg-slate-100 border border-slate-200 text-slate-700 font-semibold">
                Deterministic Scan Standard
              </span>
            </div>

            <div className="space-y-1.5">
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                {current.title}
              </h3>
              <p className="text-xs font-mono text-slate-500">
                {current.subtitle}
              </p>
            </div>

            {/* Plain-Language Analogy Box */}
            <div className="p-5 bg-slate-50 border-l-4 border-red-600 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider">
                <Icons.Activity className="w-4 h-4 text-red-600" />
                <span>Plain-Language Engineering Analogy</span>
              </div>
              <p className="text-xs text-slate-700 italic leading-relaxed">
                "{current.simpleAnalogy}"
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {current.technicalRole}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold">
                  Controllers & Hardware Handled
                </h4>
                <div className="space-y-1.5">
                  {current.hardwareExamples.map((hw) => (
                    <div
                      key={hw}
                      className="text-xs text-slate-700 flex items-center gap-2 font-mono"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                      <span>{hw}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold">
                  Field Communications
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {current.communicationProtocols.map((p) => (
                    <span
                      key={p}
                      className="text-[11px] font-mono px-2 py-0.5 bg-slate-100 border border-slate-200 text-slate-700"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* TecLogos Delivery Role */}
            <div className="pt-4 border-t border-slate-100 space-y-1.5">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold">
                TecLogos Engineering Scope at this Level:
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                {current.teclogosScope}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
