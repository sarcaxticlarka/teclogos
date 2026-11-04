"use client";

import React, { useState } from "react";
import { Icons } from "@/components/ui/Icons";
import { COMPANY_DATA } from "@/data/company";

interface RfqModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialIndustry?: string;
}

export function InteractiveRfqModal({
  isOpen,
  onClose,
  initialService = "",
  initialIndustry = "",
}: RfqModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    industry: initialIndustry || "power-generation",
    scope: initialService || "turnkey-automation",
    platformPreference: "honeywell",
    ioScale: "250-1000",
    projectPhase: "detailed-engineering",
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    projectLocation: "",
    scopeDetails: "",
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleNext = () => setStep((s) => Math.min(s + 1, 3));
  const handlePrev = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-xs">
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden my-8">
        {/* Top Header - ABB Style */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-50 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-red-600 text-white font-bold flex items-center justify-center text-xs">
              RFQ
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Industrial Engineering RFQ Builder
              </h3>
              <p className="text-xs text-slate-500">
                Direct Technical Scoping & Cost Estimation • TecLogos Pune HQ
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-xs hover:bg-slate-100 transition"
          >
            <Icons.X className="w-5 h-5" />
          </button>
        </div>

        {/* Multi-step progress bar */}
        {!submitted && (
          <div className="px-6 pt-4 pb-2 bg-white border-b border-slate-100">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
              <span className={step >= 1 ? "text-red-600" : ""}>
                1. Project Scope
              </span>
              <span className={step >= 2 ? "text-red-600" : ""}>
                2. Technical Parameters
              </span>
              <span className={step >= 3 ? "text-red-600" : ""}>
                3. Engineering Contact
              </span>
            </div>
            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-red-600 transition-all duration-200"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Content Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 mx-auto bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center text-emerald-600">
                <Icons.CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">
                Request for Quote Transmitted
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Your engineering scope has been routed to our Pune Systems Integration Group.
              </p>
              <div className="bg-slate-50 p-4 border border-slate-200 text-xs text-slate-600 text-left max-w-md mx-auto space-y-1">
                <div><span className="text-slate-400">Industry:</span> {formData.industry}</div>
                <div><span className="text-slate-400">I/O Scale:</span> {formData.ioScale} Points</div>
                <div><span className="text-slate-400">Direct Notification:</span> {COMPANY_DATA.contacts.adminEmail}</div>
                <div><span className="text-slate-400">Response SLA:</span> Within 24 Business Hours</div>
              </div>
              <button
                onClick={onClose}
                className="mt-6 px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Step 1: Project Scope */}
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-700 mb-2 font-bold">
                      Select Industry Vertical
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {[
                        { id: "power-generation", label: "Power & Utilities" },
                        { id: "oil-gas", label: "Oil, Gas & Petrochem" },
                        { id: "water-treatment", label: "Water & Wastewater" },
                        { id: "cement-minerals", label: "Cement & Minerals" },
                        { id: "steel-metals", label: "Steel & Metals" },
                        { id: "bms-smart-facilities", label: "Commercial BMS" },
                      ].map((item) => (
                        <button
                          type="button"
                          key={item.id}
                          onClick={() => setFormData({ ...formData, industry: item.id })}
                          className={`p-3 text-xs font-semibold border text-left transition ${
                            formData.industry === item.id
                              ? "bg-red-50 border-red-600 text-red-700"
                              : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-700 mb-2 font-bold">
                      Engineering Scope Needed
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        { id: "turnkey-automation", label: "Full Turnkey Systems Integration" },
                        { id: "ei-detailed-design", label: "Detailed E&I Engineering Blueprints" },
                        { id: "panel-fabrication", label: "Custom Control Panel Fabrication & FAT" },
                        { id: "legacy-migration", label: "Legacy DCS / PLC Modernization Cutover" },
                        { id: "bms-integration", label: "Niagara N4 / Open BMS Deployment" },
                        { id: "field-commissioning", label: "On-Site Loop Checking & AMC Support" },
                      ].map((scope) => (
                        <button
                          type="button"
                          key={scope.id}
                          onClick={() => setFormData({ ...formData, scope: scope.id })}
                          className={`p-3 text-xs font-semibold border text-left transition ${
                            formData.scope === scope.id
                              ? "bg-red-50 border-red-600 text-red-700"
                              : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                          }`}
                        >
                          {scope.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Technical Parameters */}
              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-700 mb-2 font-bold">
                      Preferred OEM Platform Architecture
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {[
                        { id: "honeywell", label: "Honeywell (Experion / TPS)" },
                        { id: "siemens", label: "Siemens (S7 / TIA Portal)" },
                        { id: "abb", label: "ABB (800xA / Freelance)" },
                        { id: "rockwell", label: "Rockwell (ControlLogix)" },
                        { id: "niagara", label: "Tridium Niagara N4" },
                        { id: "vendor-agnostic", label: "Open / Recommend Best" },
                      ].map((item) => (
                        <button
                          type="button"
                          key={item.id}
                          onClick={() => setFormData({ ...formData, platformPreference: item.id })}
                          className={`p-3 text-xs font-semibold border text-left transition ${
                            formData.platformPreference === item.id
                              ? "bg-red-50 border-red-600 text-red-700"
                              : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-700 mb-1.5 font-bold">
                        Estimated I/O Count
                      </label>
                      <select
                        value={formData.ioScale}
                        onChange={(e) => setFormData({ ...formData, ioScale: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                      >
                        <option value="under-250">Compact (&lt; 250 I/O Points)</option>
                        <option value="250-1000">Medium (250 – 1,000 I/O Points)</option>
                        <option value="1000-5000">Plant-Scale (1,000 – 5,000 I/O Points)</option>
                        <option value="above-5000">Mega Facility (5,000+ I/O Points)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-700 mb-1.5 font-bold">
                        Project Stage
                      </label>
                      <select
                        value={formData.projectPhase}
                        onChange={(e) => setFormData({ ...formData, projectPhase: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                      >
                        <option value="pre-bid-tender">Pre-Bid Tender / Budgetary Estimation</option>
                        <option value="detailed-engineering">Detailed Engineering & Procurement</option>
                        <option value="turnaround-cutover">Upcoming Plant Turnaround Window</option>
                        <option value="immediate-troubleshooting">Immediate Emergency Site Support</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-700 mb-1.5 font-bold">
                      Brief Technical Requirements / Notes
                    </label>
                    <textarea
                      rows={3}
                      value={formData.scopeDetails}
                      onChange={(e) => setFormData({ ...formData, scopeDetails: e.target.value })}
                      placeholder="e.g. Redundant C300 controllers, 16-channel analog input modules, hazardous Zone 2 requirement, FAT required by Q3..."
                      className="w-full px-3 py-2 bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-600"
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Engineering Contact */}
              {step === 3 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-700 mb-1.5 font-bold">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Ramesh Kulkarni"
                        className="w-full px-3 py-2 bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-700 mb-1.5 font-bold">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. ramesh@company.com"
                        className="w-full px-3 py-2 bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-700 mb-1.5 font-bold">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3 py-2 bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-700 mb-1.5 font-bold">
                        Company / EPC Entity
                      </label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Reliance, L&T, BHEL or EPC Subcontractor"
                        className="w-full px-3 py-2 bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-700 mb-1.5 font-bold">
                      Plant Site Location / Country
                    </label>
                    <input
                      type="text"
                      value={formData.projectLocation}
                      onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                      placeholder="e.g. Dahej, Gujarat / Pune, Maharashtra"
                      className="w-full px-3 py-2 bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                    />
                  </div>

                  <div className="p-3 bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
                    <Icons.Shield className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <span>
                      Direct Engineering Submission: Scope is routed straight to Senior Technical Management at TecLogos Pune. We maintain strict non-disclosure compliance.
                    </span>
                  </div>
                </div>
              )}

              {/* Step Navigation Controls */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="px-5 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 uppercase tracking-wider transition"
                  >
                    Back
                  </button>
                ) : (
                  <div />
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-6 py-2.5 text-xs font-bold text-white bg-red-600 hover:bg-red-700 uppercase tracking-wider transition flex items-center gap-2"
                  >
                    <span>Continue</span>
                    <Icons.ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-6 py-2.5 text-xs font-bold text-white bg-red-600 hover:bg-red-700 uppercase tracking-wider transition shadow-sm flex items-center gap-2"
                  >
                    <span>Transmit Scope to Pune HQ</span>
                    <Icons.Check className="w-4 h-4" />
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
