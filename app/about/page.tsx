import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Icons } from "@/components/ui/Icons";
import { COMPANY_DATA } from "@/data/company";

export const metadata = {
  title: "About TecLogos Automation | Corporate Profile, Leadership, Principles & CSR",
  description:
    "Learn about Teclogos Automation Private Limited, incorporated in 2018 in Pune, India. Executive leadership by former Honeywell automation specialists, multi-OEM systems integration, employee-managed principles, and CSR initiatives.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-red-600 selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero Banner - ABB Editorial Style */}
        <section className="relative py-24 px-4 sm:px-6 bg-slate-900 text-white overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url('/images/services/service-01-automation.jpg')`,
            }}
          />
          <div className="max-w-7xl mx-auto space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600 text-white text-xs font-mono font-bold uppercase tracking-widest">
              Corporate Profile & Heritage
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight max-w-4xl">
              Engineering Dependable Automation Intelligence Since 2018
            </h1>
            <p className="text-base sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
              Teclogos Automation Private Limited was established in Pune, Maharashtra, to provide heavy process industries and commercial infrastructure with authentic, vendor-independent systems integration and detailed electrical & instrumentation blueprints.
            </p>
          </div>
        </section>

        {/* Corporate Overview & Founding Story */}
        <section id="overview" className="py-20 px-4 sm:px-6 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-red-600">
                <span className="w-8 h-[2px] bg-red-600 inline-block" />
                <span>Our Corporate Origins</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Founded by Seasoned Automation Engineers to Break Proprietary OEM Lock-In
              </h2>
              <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <p>
                  Before incorporating TecLogos in December 2018, our technical leadership spent years inside global industrial automation giants—notably engineering continuous process Distributed Control Systems (DCS) and Safety Instrumented Systems (SIS) at Honeywell.
                </p>
                <p>
                  We recognized a recurring problem across the industry: process plants and EPC contractors were held hostage by proprietary OEM service divisions charging exorbitant rates for minor modifications, database migrations, and support, while pushing single-brand hardware regardless of whether it suited the client's actual technical needs.
                </p>
                <p>
                  TecLogos was founded with a singular mandate: to provide the exact same OEM-grade engineering rigor, documentation standards, and testing protocols, but with complete vendor independence and agile, transparent turnaround times.
                </p>
              </div>

              {/* Core Philosophy Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 bg-slate-50 border-l-4 border-red-600 space-y-1">
                  <span className="text-xs font-bold text-slate-900 flex items-center gap-2">
                    <Icons.Check className="w-4 h-4 text-red-600" />
                    Vendor-Agnostic Integrity
                  </span>
                  <p className="text-xs text-slate-600">
                    We select hardware and protocols based on client requirements, never OEM sales quotas.
                  </p>
                </div>
                <div className="p-5 bg-slate-50 border-l-4 border-slate-900 space-y-1">
                  <span className="text-xs font-bold text-slate-900 flex items-center gap-2">
                    <Icons.Check className="w-4 h-4 text-slate-900" />
                    Rigorous Pre-Shipment FAT
                  </span>
                  <p className="text-xs text-slate-600">
                    Every digital and analog signal is pre-simulated in our Pune testing bay before dispatch.
                  </p>
                </div>
              </div>
            </div>

            {/* Corporate Registry Specification Card */}
            <div className="lg:col-span-5 bg-slate-50 border border-slate-200 p-8 space-y-5 shadow-sm">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold border-b border-slate-200 pb-3 flex items-center justify-between">
                <span>Verified Corporate Registration</span>
                <span className="text-emerald-700 text-[10px] font-bold px-2 py-0.5 bg-emerald-100">ACTIVE STATUS</span>
              </h3>

              <div className="space-y-3 text-xs font-mono">
                <div className="flex justify-between py-1.5 border-b border-slate-200">
                  <span className="text-slate-500">Legal Entity:</span>
                  <span className="text-slate-900 text-right font-bold">{COMPANY_DATA.legalName}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-200">
                  <span className="text-slate-500">Corporate Identity (CIN):</span>
                  <span className="text-red-600 text-right font-bold">{COMPANY_DATA.cin}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-200">
                  <span className="text-slate-500">Registration Number:</span>
                  <span className="text-slate-800 text-right">{COMPANY_DATA.registrationNumber}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-200">
                  <span className="text-slate-500">Date of Incorporation:</span>
                  <span className="text-slate-800 text-right">{COMPANY_DATA.dateOfIncorporation}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-200">
                  <span className="text-slate-500">Registrar of Companies:</span>
                  <span className="text-slate-800 text-right">{COMPANY_DATA.roc}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-200">
                  <span className="text-slate-500">Registered Office:</span>
                  <span className="text-slate-800 text-right max-w-[220px]">Hadapsar, Pune, MH, India</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-500">Official Communication:</span>
                  <span className="text-red-600 text-right font-medium">{COMPANY_DATA.contacts.adminEmail}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leonardo da Vinci Quote Section from content.txt */}
        <section className="py-12 px-6 sm:px-12 bg-slate-100 border-b border-slate-200">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl space-y-2">
              <span className="text-4xl sm:text-5xl font-serif text-red-600 leading-none">“</span>
              <p className="text-xl sm:text-2xl font-light text-slate-900 italic tracking-tight">
                The human foot is a masterpiece of engineering and a work of art.
              </p>
              <div className="text-xs font-mono uppercase text-slate-500 font-bold tracking-wider">
                — Leonardo da Vinci • Quoted in TecLogos Corporate Manifesto
              </div>
            </div>
            <div className="text-xs text-slate-600 max-w-md border-l-2 border-red-600 pl-4">
              We apply this principle to all our industrial control systems: combining uncompromising scientific precision with the elegance of intuitive human-machine design.
            </div>
          </div>
        </section>

        {/* Five Enduring Principles (Directly from content.txt) */}
        <section id="principles" className="py-20 px-4 sm:px-6 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-red-600">
                <span className="w-8 h-[2px] bg-red-600 inline-block" />
                <span>Our Five Guiding Principles</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                The Five Principles That Guide Our Operations
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Written into the foundation of TecLogos at its incorporation, these 5 principles shape how we treat clients, employees, and engineering problems.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                {
                  step: "01",
                  title: "To Be a Successful Enduring Business",
                  desc: "Building a company with sustainable financial health and long-term client trust over quick transactional profits.",
                },
                {
                  step: "02",
                  title: "To Focus on Design, Engineering & Special Services",
                  desc: "Prioritizing high-complexity, high-value technical engineering where real domain expertise delivers client ROI.",
                },
                {
                  step: "03",
                  title: "To Be a Good Place to Work",
                  desc: "Creating an environment where engineers feel respected, challenged with meaningful industrial work, and heard.",
                },
                {
                  step: "04",
                  title: "To Reward Effort",
                  desc: "Directly recognizing and compensating the engineers whose commitment brings critical customer plants online on time.",
                },
                {
                  step: "05",
                  title: "To Be Owned & Managed by Employees",
                  desc: "Governed directly by engineers and operations leaders with skin in the game and direct shop-floor experience.",
                },
              ].map((item) => (
                <div key={item.step} className="p-6 bg-white border border-slate-200 space-y-3 shadow-2xs">
                  <span className="text-2xl font-mono font-black text-red-600 block">
                    {item.step}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Executive Leadership Profiles */}
        <section id="leadership" className="py-20 px-4 sm:px-6 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-red-600">
                <span className="w-8 h-[2px] bg-red-600 inline-block" />
                <span>Executive Governance</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Executive Leadership with Direct Automation Lineage
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                TecLogos is steered by engineers who have spent their careers in control rooms, commissioning bays, and refinery turnarounds.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
              {COMPANY_DATA.leadership.map((leader) => (
                <div
                  key={leader.name}
                  className="bg-slate-50 border border-slate-200 p-8 space-y-6 shadow-2xs flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-red-600 text-white font-bold text-lg flex items-center justify-center">
                        {leader.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                          {leader.name}
                        </h3>
                        <p className="text-xs font-mono text-red-600 font-semibold">
                          {leader.role}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {leader.background}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200 space-y-2">
                    <span className="text-[11px] font-mono uppercase text-slate-400 font-bold block">
                      Executive Focus Areas:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {leader.focusAreas.map((f) => (
                        <span
                          key={f}
                          className="text-[11px] font-mono px-2 py-0.5 bg-white border border-slate-200 text-slate-700"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Corporate Social Responsibility (CSR) - Direct from content.txt */}
        <section id="csr" className="py-20 px-4 sm:px-6 bg-slate-900 text-white border-b border-slate-800">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-mono font-bold uppercase text-red-500 tracking-widest">
                Corporate Social Responsibility (CSR)
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Repaying the Debts of Society: Sponsoring Primary Education
              </h2>
              <div className="text-sm text-slate-300 space-y-3 leading-relaxed">
                <p>
                  “We believe that it is the responsibility of each and every human kind to repay the debts of society. This encourages us sparing and returning a share of our professional achievements and benefits back to the society as a form of thanks note.”
                </p>
                <p>
                  “So we decided that at the end of every year we are going to donate expenses of primary education of economically backward family kids.”
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="p-6 bg-slate-800/80 border border-slate-700 space-y-2">
                <span className="text-xs font-mono text-red-400 font-bold uppercase">Focus Area</span>
                <h4 className="text-base font-bold text-white">Primary Education</h4>
                <p className="text-xs text-slate-400">
                  Covering school tuition, books, uniforms, and learning supplies for children in economically backward families.
                </p>
              </div>

              <div className="p-6 bg-slate-800/80 border border-slate-700 space-y-2">
                <span className="text-xs font-mono text-red-400 font-bold uppercase">Frequency</span>
                <h4 className="text-base font-bold text-white">Annual Year-End Fund</h4>
                <p className="text-xs text-slate-400">
                  Allocating a dedicated portion of company annual earnings directly toward educational sponsorship.
                </p>
              </div>

              <div className="p-6 bg-slate-800/80 border border-slate-700 space-y-2">
                <span className="text-xs font-mono text-red-400 font-bold uppercase">Community</span>
                <h4 className="text-base font-bold text-white">Pune & Regional Maharashtra</h4>
                <p className="text-xs text-slate-400">
                  Working with community organizers and local schools in the Hadapsar and Pune industrial districts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quality, Health, Safety & Environment (QHSE) Compliance */}
        <section id="qhse" className="py-20 px-4 sm:px-6 bg-white">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-red-600">
                <span className="w-8 h-[2px] bg-red-600 inline-block" />
                <span>Rigorous Compliance</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Quality, Health, Safety & Environment (QHSE) Standards
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                In process industries, a single flawed interlock or poorly terminated cable can trigger human injury or multi-million dollar equipment damage. We adhere to non-negotiable international safety directives.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  code: "IEC 61508 / 61511",
                  title: "Functional Safety & SIL Standards",
                  description:
                    "Governing the design and implementation of Safety Instrumented Systems (SIS), Emergency Shutdown (ESD), and Burner Management Systems (BMS).",
                },
                {
                  code: "IEC 61131-3",
                  title: "PLC Programming Architecture",
                  description:
                    "Ensuring modular, readable, maintainable software using standardized Ladder, Function Block, Structured Text, and Sequential Function Chart languages.",
                },
                {
                  code: "ISA-88 / S88",
                  title: "Batch Recipe Execution",
                  description:
                    "Standard modular batch structures enabling flexible recipe execution in specialty chemical, food, and pharmaceutical applications.",
                },
                {
                  code: "ISA-101 & ISA-18.2",
                  title: "HMI Ergonomics & Alarm Management",
                  description:
                    "Preventing operator fatigue and catastrophic alarm floods during process excursions through prioritized rationalization.",
                },
                {
                  code: "IEEE & NEC Codes",
                  title: "Electrical Sizing & Protection",
                  description:
                    "Rigorous cable sizing, voltage drop limits, short-circuit calculations, and instrument clean earthing schemas.",
                },
                {
                  code: "ISO 9001 Alignment",
                  title: "Structured QA Testing Workflows",
                  description:
                    "End-to-end version control, design change tracking, signed FAT inspection dossiers, and formal As-Built deliverable packages.",
                },
              ].map((std) => (
                <div
                  key={std.code}
                  className="p-6 bg-slate-50 border border-slate-200 space-y-2 shadow-2xs"
                >
                  <span className="text-xs font-mono font-bold text-red-600">
                    {std.code}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 tracking-tight">
                    {std.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {std.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
