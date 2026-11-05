"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Icons } from "@/components/ui/Icons";
import { CAREERS_DATA } from "@/data/careers";
import { COMPANY_DATA } from "@/data/company";

export default function CareersPage() {
  const [selectedJobId, setSelectedJobId] = useState(CAREERS_DATA[0].id);
  const [applicationModalOpen, setApplicationModalOpen] = useState(false);
  const [targetJobTitle, setTargetJobTitle] = useState("");
  const [applied, setApplied] = useState(false);
  const [candidateForm, setCandidateForm] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "3-5",
    currentEmployer: "",
    noticePeriod: "30",
    coverNote: "",
  });

  const activeJob =
    CAREERS_DATA.find((j) => j.id === selectedJobId) || CAREERS_DATA[0];

  const handleApply = (title: string) => {
    setTargetJobTitle(title);
    setApplicationModalOpen(true);
    setApplied(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApplied(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-red-600 selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Careers Hero Section - ABB Editorial Format */}
        <section className="relative bg-slate-900 text-white overflow-hidden py-24 sm:py-28 px-4 sm:px-6">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url('/images/services/service-06-commissioning.jpg')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/60" />

          <div className="max-w-7xl mx-auto space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600 text-white text-xs font-mono font-bold uppercase tracking-widest">
              Careers & Culture • Pune Engineering Hub
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight max-w-4xl leading-[1.08]">
              Build Mission-Critical Automation Systems with Seasoned Specialists
            </h1>

            <p className="text-base sm:text-lg text-slate-200 max-w-3xl leading-relaxed">
              “A culture of continuous improvement and success. TecLogos is continuously searching for top talent, from freshers to seasoned professionals. Our employees are our greatest strength, and we strive to create an excellent workplace that elicits the very best from our engineers.”
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-300">
              <span className="flex items-center gap-2">
                <Icons.Check className="w-4 h-4 text-red-500" />
                Employee-Owned Principles
              </span>
              <span className="flex items-center gap-2">
                <Icons.Check className="w-4 h-4 text-red-500" />
                Direct OEM System Exposure
              </span>
              <span className="flex items-center gap-2">
                <Icons.Check className="w-4 h-4 text-red-500" />
                Equal Opportunity Employer
              </span>
            </div>
          </div>
        </section>

        {/* 2-Column Job Catalog & Application Reader */}
        <section className="py-20 px-4 sm:px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left 5 Columns: Open Positions List */}
            <div className="lg:col-span-5 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <h2 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                  Open Engineering Positions ({CAREERS_DATA.length})
                </h2>
                <span className="text-xs text-red-600 font-semibold">Pune Facility</span>
              </div>

              {CAREERS_DATA.map((job) => {
                const isSelected = selectedJobId === job.id;
                return (
                  <button
                    key={job.id}
                    onClick={() => setSelectedJobId(job.id)}
                    className={`w-full p-5 border text-left transition-all duration-200 space-y-2.5 ${isSelected
                        ? "bg-white border-red-600 shadow-md border-l-4"
                        : "bg-white border-slate-200 hover:border-slate-300"
                      }`}
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="text-red-600 font-bold uppercase">
                        {job.department}
                      </span>
                      <span className="px-2 py-0.5 bg-slate-100 text-slate-600 border border-slate-200">
                        {job.experienceRequired}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-slate-900 leading-snug">
                      {job.title}
                    </h3>

                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {job.overview}
                    </p>

                    <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                      <span>{job.location}</span>
                      <span className="font-semibold text-slate-700">{job.type}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right 7 Columns: Active Job Detail Pane */}
            <div className="lg:col-span-7 bg-white border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
              {/* Job Header */}
              <div className="space-y-4 pb-6 border-b border-slate-200">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <span className="px-2.5 py-1 bg-red-50 text-red-600 font-mono font-bold uppercase text-xs border border-red-200">
                    {activeJob.department}
                  </span>
                  <button
                    onClick={() => handleApply(activeJob.title)}
                    className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition shadow-xs"
                  >
                    Apply for this Position
                  </button>
                </div>

                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {activeJob.title}
                </h1>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-600">
                  <div className="p-2.5 bg-slate-50 border border-slate-200">
                    <span className="block text-[10px] uppercase font-mono text-slate-400">Experience</span>
                    <span className="font-bold text-slate-900">{activeJob.experienceRequired}</span>
                  </div>
                  <div className="p-2.5 bg-slate-50 border border-slate-200">
                    <span className="block text-[10px] uppercase font-mono text-slate-400">Location</span>
                    <span className="font-bold text-slate-900">{activeJob.location}</span>
                  </div>
                  <div className="p-2.5 bg-slate-50 border border-slate-200">
                    <span className="block text-[10px] uppercase font-mono text-slate-400">Employment</span>
                    <span className="font-bold text-slate-900">{activeJob.type}</span>
                  </div>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-wider text-red-600 font-bold">
                  Core Engineering Responsibilities
                </h3>
                <ul className="space-y-2">
                  {activeJob.keyResponsibilities.map((resp: string) => (
                    <li key={resp} className="text-xs text-slate-700 flex items-start gap-2.5">
                      <Icons.Check className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div className="space-y-3 pt-2">
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                  Candidate Qualifications & Technical Profile
                </h3>
                <ul className="space-y-2">
                  {activeJob.requiredSkills.map((req: string) => (
                    <li key={req} className="text-xs text-slate-700 flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0 mt-1.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct Application Details from content.txt */}
              <div className="p-6 bg-slate-50 border-l-3 border-red-600 space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold">
                  Direct HR Communication
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  For immediate evaluation, engineers and diploma holders may email their CV directly to our Pune staffing desk:
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-xs font-mono pt-1">
                  <a
                    href="mailto:hr@teclogos.in"
                    className="text-red-600 font-bold hover:underline flex items-center gap-1.5"
                  >
                    <Icons.Mail className="w-4 h-4 text-red-600" />
                    <span>hr@teclogos.in</span>
                  </a>
                  <span className="hidden sm:inline text-slate-300">•</span>
                  <a
                    href="tel:+917070777058"
                    className="text-slate-800 font-bold hover:underline flex items-center gap-1.5"
                  >
                    <Icons.Phone className="w-4 h-4 text-red-600" />
                    <span>+91 7070777058</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Application Modal */}
      {applicationModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="bg-white border border-slate-200 max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <button
              onClick={() => setApplicationModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-900"
            >
              <Icons.X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase text-red-600">
                Application Submission
              </span>
              <h3 className="text-xl font-black text-slate-900 tracking-tight">
                {targetJobTitle}
              </h3>
              <p className="text-xs text-slate-500">
                Submit your profile for review by the TecLogos engineering committee.
              </p>
            </div>

            {applied ? (
              <div className="p-6 bg-slate-50 border border-slate-200 text-center space-y-3">
                <Icons.CheckCircle className="w-10 h-10 text-red-600 mx-auto" />
                <h4 className="text-sm font-bold text-slate-900">
                  Profile Forwarded to HR Desk
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Thank you for applying. A member of our engineering management team will review your credentials and contact you within 48 business hours.
                </p>
                <button
                  onClick={() => setApplicationModalOpen(false)}
                  className="px-5 py-2 bg-slate-900 text-white text-xs font-bold uppercase tracking-wider"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-700">Full Name *</label>
                    <input
                      required
                      type="text"
                      value={candidateForm.name}
                      onChange={(e) => setCandidateForm({ ...candidateForm, name: e.target.value })}
                      className="w-full p-2 bg-slate-50 border border-slate-200 text-xs focus:border-red-600 focus:outline-hidden"
                      placeholder="e.g. Rahul Sharma"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-700">Email Address *</label>
                    <input
                      required
                      type="email"
                      value={candidateForm.email}
                      onChange={(e) => setCandidateForm({ ...candidateForm, email: e.target.value })}
                      className="w-full p-2 bg-slate-50 border border-slate-200 text-xs focus:border-red-600 focus:outline-hidden"
                      placeholder="e.g. rahul@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-700">Phone Number *</label>
                    <input
                      required
                      type="tel"
                      value={candidateForm.phone}
                      onChange={(e) => setCandidateForm({ ...candidateForm, phone: e.target.value })}
                      className="w-full p-2 bg-slate-50 border border-slate-200 text-xs focus:border-red-600 focus:outline-hidden"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-700">Years of Experience</label>
                    <select
                      value={candidateForm.experience}
                      onChange={(e) => setCandidateForm({ ...candidateForm, experience: e.target.value })}
                      className="w-full p-2 bg-slate-50 border border-slate-200 text-xs focus:border-red-600 focus:outline-hidden"
                    >
                      <option value="0-1">Fresher / Intern (0-1 yr)</option>
                      <option value="1-3">Junior Engineer (1-3 yrs)</option>
                      <option value="3-5">Mid Engineer (3-5 yrs)</option>
                      <option value="5+">Lead / Senior Specialist (5+ yrs)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-700">Brief Technical Summary</label>
                  <textarea
                    rows={3}
                    value={candidateForm.coverNote}
                    onChange={(e) => setCandidateForm({ ...candidateForm, coverNote: e.target.value })}
                    className="w-full p-2 bg-slate-50 border border-slate-200 text-xs focus:border-red-600 focus:outline-hidden"
                    placeholder="List specific controllers (Honeywell C300, Siemens S7-1500, Niagara N4), DCS systems, and project domains you have hands-on experience with..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition"
                >
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
