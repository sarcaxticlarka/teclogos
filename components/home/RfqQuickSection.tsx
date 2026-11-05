"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icons } from "@/components/ui/Icons";
import { COMPANY_DATA } from "@/data/company";
import { InteractiveRfqModal } from "@/components/rfq/InteractiveRfqModal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function RfqQuickSection() {
  const [rfqModalOpen, setRfqModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("turnkey-automation");
  const [selectedIndustry, setSelectedIndustry] = useState("power-generation");

  const containerRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          { opacity: 0, y: 35 },
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

  const openScopedRfq = (srv: string, ind: string) => {
    setSelectedService(srv);
    setSelectedIndustry(ind);
    setRfqModalOpen(true);
  };

  return (
    <>
      <section ref={containerRef} className="py-24 px-4 sm:px-6 bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div ref={cardRef} className="bg-white border border-slate-200 p-8 sm:p-14 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Technical Narrative & Commitments */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-red-600">
                  <span className="w-8 h-[2px] bg-red-600 inline-block" />
                  <span>Direct Engineering Scoping</span>
                </div>

                <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                  Accelerate Your Plant Project with Direct Engineering Consultation
                </h2>

                <p className="text-base text-slate-600 leading-relaxed">
                  Skip sales intermediaries. Speak directly with senior systems integration specialists in Pune who understand P&IDs, controller redundancy, hazardous area classifications, and turnarounds.
                </p>

                {/* Commitments Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {[
                    {
                      title: "Guaranteed 24-Hr SLA",
                      description: "Initial feasibility review delivered within 1 business day.",
                    },
                    {
                      title: "Non-Disclosure Protected",
                      description: "Strict confidentiality for all P&IDs and process schematics.",
                    },
                    {
                      title: "Defendable BOQ Pricing",
                      description: "Transparent engineering hours and component bill of materials.",
                    },
                    {
                      title: "Direct Leadership Access",
                      description: "Scoping reviewed by Director & CEO Shekhar Girame.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="p-4 bg-slate-50 border border-slate-200 space-y-1"
                    >
                      <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                        <Icons.Check className="w-4 h-4 text-red-600" />
                        <span>{item.title}</span>
                      </div>
                      <p className="text-[11px] text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Quick Scoper Card */}
              <div className="lg:col-span-5 bg-slate-50 border border-slate-200 p-8 space-y-5 shadow-2xs">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-900">
                    Express Project Estimator
                  </h3>
                  <p className="text-xs text-slate-500">
                    Select your parameters to pre-populate our engineering scope builder.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-700 mb-1.5 font-bold">
                      Target Industry
                    </label>
                    <select
                      value={selectedIndustry}
                      onChange={(e) => setSelectedIndustry(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                    >
                      <option value="power-generation">Power Generation & Utilities</option>
                      <option value="oil-gas">Oil, Gas & Petrochemicals</option>
                      <option value="water-treatment">Water & Wastewater Treatment</option>
                      <option value="cement-minerals">Cement & Heavy Minerals</option>
                      <option value="steel-metals">Steel & Metals Manufacturing</option>
                      <option value="bms-smart-facilities">Commercial Facilities & BMS</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-700 mb-1.5 font-bold">
                      Primary Engineering Need
                    </label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                    >
                      <option value="turnkey-automation">Turnkey DCS / PLC Automation</option>
                      <option value="ei-detailed-design">Detailed E&I Engineering Blueprints</option>
                      <option value="panel-fabrication">Control Panel Fabrication & FAT</option>
                      <option value="legacy-migration">Legacy System Modernization Cutover</option>
                      <option value="field-commissioning">Site Commissioning & AMC Support</option>
                    </select>
                  </div>

                  <button
                    onClick={() => openScopedRfq(selectedService, selectedIndustry)}
                    className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition shadow-sm flex items-center justify-center gap-2"
                  >
                    <span>Open Detailed Scoping Wizard</span>
                    <Icons.ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="text-center pt-2">
                    <span className="text-xs text-slate-500">
                      Or contact directly:{" "}
                      <a
                        href={`tel:${COMPANY_DATA.contacts.primaryPhone.replace(/\s+/g, "")}`}
                        className="text-red-600 hover:underline font-mono font-bold"
                      >
                        {COMPANY_DATA.contacts.primaryPhone}
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InteractiveRfqModal
        isOpen={rfqModalOpen}
        onClose={() => setRfqModalOpen(false)}
        initialService={selectedService}
        initialIndustry={selectedIndustry}
      />
    </>
  );
}
