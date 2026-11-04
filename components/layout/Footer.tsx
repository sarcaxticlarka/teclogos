"use client";

import React from "react";
import Link from "next/link";
import { Icons } from "@/components/ui/Icons";
import { COMPANY_DATA } from "@/data/company";
import { TecLogosLogo } from "@/components/ui/TecLogosLogo";
import { SERVICES_DATA } from "@/data/services";
import { INDUSTRIES_DATA } from "@/data/industries";
import { TECHNOLOGIES_DATA } from "@/data/technologies";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-slate-900 text-slate-300 pt-16 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Pre-footer Call to Action Strip - ABB Style */}
        <div className="bg-slate-950 border border-slate-800 p-8 sm:p-12 mb-16 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-red-500">
              Engineering Feasibility & Tender Support
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Planning a Plant Modernization or Turnkey Project?
            </h3>
            <p className="text-sm text-slate-400 max-w-xl leading-relaxed">
              Connect directly with our senior process automation specialists in Pune to review P&IDs, control architectures, and pre-bid feasibility.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition text-center shadow-xs"
            >
              Consult with Senior Engineers
            </Link>
            <a
              href={`tel:${COMPANY_DATA.contacts.primaryPhone.replace(/\s+/g, "")}`}
              className="w-full sm:w-auto px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition flex items-center justify-center gap-2"
            >
              <Icons.Phone className="w-4 h-4 text-red-500" />
              <span>{COMPANY_DATA.contacts.primaryPhone}</span>
            </a>
          </div>
        </div>

        {/* 5-Column Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800 text-xs">
          {/* Column 1: Corporate Profile & Origins (2 Cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            {/* Official TecLogos Corporate Logo - Seamless Vector Presentation */}
            <Link href="/" className="inline-block transition-transform hover:scale-[1.02]">
              <TecLogosLogo className="h-10 sm:h-11" variant="dark" />
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed pr-6">
              TecLogos Automation Private Limited is a specialized engineering, systems integration, and consultancy firm headquartered in Pune, Maharashtra. We deliver vendor-independent DCS, SCADA, PLC, BMS, and detailed E&I engineering solutions for heavy process industries and commercial facilities.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <Icons.MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>{COMPANY_DATA.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Icons.Phone className="w-4 h-4 text-red-500 shrink-0" />
                <span>{COMPANY_DATA.contacts.primaryPhone} / {COMPANY_DATA.contacts.secondaryPhone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Icons.Mail className="w-4 h-4 text-red-500 shrink-0" />
                <span>{COMPANY_DATA.contacts.adminEmail}</span>
              </div>
              <div className="pt-2 flex flex-wrap gap-2 text-[10px] font-mono text-slate-400">
                <span className="px-2 py-0.5 bg-slate-800 border border-slate-700">
                  CIN: {COMPANY_DATA.cin}
                </span>
                <span className="px-2 py-0.5 bg-slate-800 border border-slate-700">
                  ROC: {COMPANY_DATA.roc}
                </span>
                <span className="px-2 py-0.5 bg-slate-800 border border-slate-700">
                  Incorporated Dec 2018
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Solutions & Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Solutions & Services
            </h4>
            <ul className="space-y-2 text-slate-400">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <Link
                    href={`/services#${srv.id}`}
                    className="hover:text-red-400 transition flex items-center gap-1.5"
                  >
                    <span>{srv.title.split("&")[0]}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Industries Served
            </h4>
            <ul className="space-y-2 text-slate-400">
              {INDUSTRIES_DATA.map((ind) => (
                <li key={ind.id}>
                  <Link
                    href={`/industries#${ind.id}`}
                    className="hover:text-red-400 transition flex items-center gap-1.5"
                  >
                    <span>{ind.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Technologies, CSR & Careers */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Company & Society
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/about#overview" className="hover:text-red-400 transition">
                  Company Overview & Origins
                </Link>
              </li>
              <li>
                <Link href="/about#leadership" className="hover:text-red-400 transition">
                  Leadership (Shekhar Girame, CEO)
                </Link>
              </li>
              <li>
                <Link href="/about#principles" className="hover:text-red-400 transition">
                  Five Enduring Principles
                </Link>
              </li>
              <li>
                <Link href="/about#csr" className="hover:text-red-400 transition text-red-400 font-semibold">
                  CSR: Primary Education Sponsorship
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-red-400 transition">
                  Case Studies & Executed Projects
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-red-400 transition">
                  Careers at TecLogos (Open Positions)
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Trademark Disclosure Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="text-center md:text-left space-y-1">
            <p>
              © {new Date().getFullYear()} Teclogos Automation Private Limited. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-500 max-w-3xl">
              Brand Disclaimer: Honeywell, Siemens, ABB, Rockwell Automation, Schneider Electric, and Tridium are registered trademarks of their respective owners. TecLogos operates as an independent systems engineering and integration specialist.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={scrollToTop}
              className="px-3 py-1.5 bg-slate-800 border border-slate-700 text-slate-400 hover:text-white hover:border-slate-600 transition flex items-center gap-1.5 text-xs font-medium"
            >
              <span>Back to Top</span>
              <Icons.ChevronRight className="w-3.5 h-3.5 -rotate-90 text-red-500" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
