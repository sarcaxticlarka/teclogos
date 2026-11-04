"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Icons } from "@/components/ui/Icons";
import { COMPANY_DATA } from "@/data/company";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "technical-rfq",
    industry: "power-generation",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-red-600 selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Contact Hero Section - ABB Editorial Format */}
        <section className="relative bg-slate-900 text-white overflow-hidden py-24 sm:py-28 px-4 sm:px-6">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2000&q=80')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/60" />

          <div className="max-w-7xl mx-auto space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600 text-white text-xs font-mono font-bold uppercase tracking-widest">
              Direct Engineering Consultation
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight max-w-4xl leading-[1.08]">
              Connect with TecLogos Systems Integration Specialists
            </h1>

            <p className="text-base sm:text-lg text-slate-200 max-w-3xl leading-relaxed">
              Whether you are an EPC contractor preparing a pre-bid tender, a plant director evaluating a legacy DCS migration, or an engineer seeking career opportunities, our Pune engineering management team is ready to assist.
            </p>
          </div>
        </section>

        {/* 2-Column Enterprise Contact Layout */}
        <section className="py-20 px-4 sm:px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 5 Columns: Corporate Coordinates & Department Routing */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-red-600 font-bold">
                  Headquarters & Testing Facility
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Pune Operations Center
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Our corporate headquarters and systems simulation bay are strategically situated in Hadapsar, Pune—in close proximity to the Serum Institute and Pune’s engineering manufacturing corridor.
                </p>
              </div>

              {/* Physical Coordinates Box */}
              <div className="p-6 sm:p-8 bg-white border border-slate-200 space-y-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-50 border border-red-200 flex items-center justify-center text-red-600 shrink-0">
                    <Icons.MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-900">Registered Office Address</h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-mono">
                      {COMPANY_DATA.address.full}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
                  <div className="w-10 h-10 bg-red-50 border border-red-200 flex items-center justify-center text-red-600 shrink-0">
                    <Icons.Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-900">Direct Telephone Channels</h3>
                    <div className="text-xs font-mono text-slate-700 space-y-1">
                      <div>
                        <a href={`tel:${COMPANY_DATA.contacts.primaryPhone.replace(/\s+/g, "")}`} className="hover:text-red-600">
                          Primary: <span className="font-bold text-slate-900">{COMPANY_DATA.contacts.primaryPhone}</span>
                        </a>
                      </div>
                      <div>
                        <a href={`tel:${COMPANY_DATA.contacts.secondaryPhone.replace(/\s+/g, "")}`} className="hover:text-red-600">
                          HR & Recruitment: <span className="font-bold text-slate-900">{COMPANY_DATA.contacts.secondaryPhone}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
                  <div className="w-10 h-10 bg-red-50 border border-red-200 flex items-center justify-center text-red-600 shrink-0">
                    <Icons.Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-900">Department Email Routing</h3>
                    <div className="text-xs font-mono space-y-1">
                      <div>
                        <span className="text-slate-500">Business & Tenders: </span>
                        <a href={`mailto:${COMPANY_DATA.contacts.adminEmail}`} className="text-red-600 font-bold hover:underline">
                          {COMPANY_DATA.contacts.adminEmail}
                        </a>
                      </div>
                      <div>
                        <span className="text-slate-500">Careers & HR: </span>
                        <a href={`mailto:${COMPANY_DATA.contacts.hrEmail}`} className="text-red-600 font-bold hover:underline">
                          {COMPANY_DATA.contacts.hrEmail}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
                  <div className="w-10 h-10 bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
                    <Icons.Clock className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-900">Engineering Working Hours</h3>
                    <p className="text-xs text-slate-600 font-mono">
                      {COMPANY_DATA.contacts.workingHours}
                    </p>
                    <span className="text-[11px] text-emerald-700 block font-mono font-medium">
                      * 24/7 On-Call Support for Contracted AMC Facilities
                    </span>
                  </div>
                </div>
              </div>

              {/* Corporate Legal Registration Box */}
              <div className="p-4 bg-white border border-slate-200 text-xs font-mono text-slate-600 space-y-1.5 shadow-2xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">CIN:</span>
                  <span className="font-bold text-slate-900">{COMPANY_DATA.cin}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">RoC Office:</span>
                  <span className="font-bold text-slate-900">{COMPANY_DATA.roc}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Registration Date:</span>
                  <span className="font-bold text-slate-900">{COMPANY_DATA.dateOfIncorporation}</span>
                </div>
              </div>
            </div>

            {/* Right 7 Columns: Interactive Engineering Contact Form */}
            <div className="lg:col-span-7 bg-white border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
              <div className="space-y-1 pb-4 border-b border-slate-100">
                <span className="text-[11px] font-mono font-bold uppercase text-red-600">
                  Direct Inquiries & Scoping
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Request a Project Scope Consultation
                </h3>
                <p className="text-xs text-slate-500">
                  Provide your technical requirements or Bill of Materials for rapid engineering review.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 bg-slate-50 border border-slate-200 text-center space-y-3">
                  <Icons.CheckCircle className="w-12 h-12 text-red-600 mx-auto" />
                  <h4 className="text-base font-bold text-slate-900">
                    Inquiry Received by TecLogos Engineering Team
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed max-w-md mx-auto">
                    Thank you, {formState.name || "Customer"}. Our technical proposals group will review your scope specifications and contact you via {formState.email || "email"} within 24 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-slate-900 text-white text-xs font-bold uppercase tracking-wider"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-slate-700">Full Name *</label>
                      <input
                        required
                        type="text"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 text-xs focus:border-red-600 focus:outline-hidden"
                        placeholder="e.g. Vikram Joshi"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-slate-700">Corporate Email *</label>
                      <input
                        required
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 text-xs focus:border-red-600 focus:outline-hidden"
                        placeholder="e.g. v.joshi@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-slate-700">Phone Number *</label>
                      <input
                        required
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 text-xs focus:border-red-600 focus:outline-hidden"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-slate-700">Company / Organization *</label>
                      <input
                        required
                        type="text"
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 text-xs focus:border-red-600 focus:outline-hidden"
                        placeholder="e.g. Reliance / NTPC / EPC Firm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-slate-700">Inquiry Classification</label>
                      <select
                        value={formState.inquiryType}
                        onChange={(e) => setFormState({ ...formState, inquiryType: e.target.value })}
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 text-xs focus:border-red-600 focus:outline-hidden"
                      >
                        <option value="technical-rfq">Technical RFQ / Pre-Bid Proposal</option>
                        <option value="dcs-migration">Legacy DCS Migration / Retrofit</option>
                        <option value="control-panels">Control Panel Fabrication & FAT</option>
                        <option value="bms-automation">Building Automation (Niagara N4 / BMS)</option>
                        <option value="amc-service">Annual Maintenance Contract (AMC)</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-slate-700">Industry Sector</label>
                      <select
                        value={formState.industry}
                        onChange={(e) => setFormState({ ...formState, industry: e.target.value })}
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 text-xs focus:border-red-600 focus:outline-hidden"
                      >
                        <option value="power-generation">Power Generation & Utilities</option>
                        <option value="oil-gas">Oil, Gas & Petrochemicals</option>
                        <option value="water-treatment">Water & Wastewater Treatment</option>
                        <option value="cement-minerals">Cement & Heavy Minerals</option>
                        <option value="chemicals-process">Chemicals & Pharmaceuticals</option>
                        <option value="commercial-bms">Commercial High-Rise BMS</option>
                        <option value="other">Other Industrial Sector</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-700">
                      Technical Scope & Controller Requirements
                    </label>
                    <textarea
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 text-xs focus:border-red-600 focus:outline-hidden"
                      placeholder="Detail your target OEM platforms (Honeywell Experion, Siemens S7-1500, ABB 800xA, Niagara N4), approximate I/O count, timeline, and current system version..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition shadow-xs flex items-center justify-center gap-2"
                  >
                    <span>Transmit Scoping Inquiry</span>
                    <Icons.ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}