"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "@/components/ui/Icons";
import { COMPANY_DATA } from "@/data/company";
import { TecLogosLogo } from "@/components/ui/TecLogosLogo";
import { InteractiveRfqModal } from "@/components/rfq/InteractiveRfqModal";

interface NavDropdownItem {
  title: string;
  href: string;
  desc: string;
  badge?: string;
}

interface NavFeaturedCard {
  title: string;
  badge: string;
  desc: string;
  href: string;
  linkText: string;
  imageUrl: string;
}

interface NavSection {
  title: string;
  href: string;
  dropdown?: {
    category: string;
    items: NavDropdownItem[];
  }[];
  featured?: NavFeaturedCard;
}

const NAV_STRUCTURE: NavSection[] = [
  {
    title: "Solutions & Services",
    href: "/services",
    dropdown: [
      {
        category: "Plant & Process Control",
        items: [
          {
            title: "Industrial Automation & DCS",
            href: "/services#industrial-automation",
            desc: "Continuous process control, loop tuning, SCADA, and DCS architectures across Honeywell, Siemens & ABB.",
            badge: "Core Process",
          },
          {
            title: "Electrical & Instrumentation (I&E)",
            href: "/services#ei-engineering",
            desc: "P&ID analysis, Instrument Index, Cable Schedules, JB hookups, and CAD electrical schematics.",
            badge: "Detailed Design",
          },
          {
            title: "Control Panel Fabrication & FAT",
            href: "/services#control-panels",
            desc: "Custom PLC, DCS, and Marshalling cabinets built with pre-dispatch loop simulation in Pune.",
            badge: "Pune Workshop",
          },
        ],
      },
      {
        category: "Smart Facilities & Lifecycle",
        items: [
          {
            title: "Building Automation (BMS)",
            href: "/services#building-automation",
            desc: "Tridium Niagara N4, Honeywell Spyder & BACnet/IP integration for energy & chiller plant control.",
            badge: "Smart OT",
          },
          {
            title: "Plant Modernization & Migration",
            href: "/services#migration-modernization",
            desc: "Phased hot cutovers of legacy TDC3000, SLC 500, and S5 systems with zero unplanned downtime.",
            badge: "Retrofit",
          },
          {
            title: "Site Commissioning & AMC",
            href: "/services#lifecycle-support",
            desc: "Cold/hot loop checks, instrumentation calibration, 24/7 turnaround coverage, and AMC contracts.",
            badge: "Field Ops",
          },
        ],
      },
    ],
    featured: {
      badge: "Pune Integration Hub",
      title: "Rigorous Pre-Commissioned FAT Simulation",
      desc: "Every control panel leaves our Pune workshop pre-wired, simulated with virtual I/O, and thoroughly validated before site delivery — slashing on-site commissioning time by up to 40%.",
      href: "/services",
      linkText: "Explore Engineering Capabilities",
      imageUrl: "/images/services/service-04-panels.jpg",
    },
  },
  {
    title: "Industries",
    href: "/industries",
    dropdown: [
      {
        category: "Continuous Heavy Process",
        items: [
          {
            title: "Power Generation & Utilities",
            href: "/industries#power-generation",
            desc: "Combustion control, turbine trip logic, water-steam balance, and balance-of-plant automation.",
            badge: "Turbine & Boiler",
          },
          {
            title: "Oil, Gas & Petrochemicals",
            href: "/industries#oil-gas",
            desc: "Hazardous area instrumentation, SIL-3 Emergency Shutdown (ESD), and custody transfer skids.",
            badge: "SIL-3 Safety",
          },
          {
            title: "Chemicals & Processing",
            href: "/industries#chemicals-process",
            desc: "ISA-88 batch recipe control, reactor runaway safety, and clean-in-place (CIP) skid automation.",
            badge: "ISA-88 Batch",
          },
        ],
      },
      {
        category: "Manufacturing & Infrastructure",
        items: [
          {
            title: "Water & Wastewater Treatment",
            href: "/industries#water-treatment",
            desc: "Municipal pumping stations, automated chemical dosing, clarification tanks, and SBR sewage plants.",
            badge: "Telemetry & SCADA",
          },
          {
            title: "Cement & Heavy Minerals",
            href: "/industries#cement-minerals",
            desc: "Raw mill grinding, rotary kiln temperature balancing, bag filters, and high-dust conveyors.",
            badge: "Heavy Duty",
          },
          {
            title: "Commercial Smart Facilities",
            href: "/industries#bms-smart-facilities",
            desc: "Grade-A corporate campuses, central chiller plant kW/TR optimization, and indoor air quality.",
            badge: "Niagara N4",
          },
        ],
      },
    ],
    featured: {
      badge: "Process Criticality",
      title: "Engineered for 24/7 Zero-Trip Uptime",
      desc: "Industrial plants lose $20,000 to $200,000 per hour during unplanned downtime. Our redundant architectures and fail-safe logic guarantee continuous operational uptime.",
      href: "/industries",
      linkText: "View Industry Solutions",
      imageUrl: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=700&q=80",
    },
  },
  {
    title: "Technologies",
    href: "/technologies",
    dropdown: [
      {
        category: "Global DCS & Safety Platforms",
        items: [
          {
            title: "Honeywell Process Solutions",
            href: "/technologies#honeywell",
            desc: "Experion PKS (C200/C300), TPS, Safety Manager (SIL 3), and legacy TDC3000 migration.",
            badge: "Ex-OEM Lineage",
          },
          {
            title: "Siemens Automation & Drives",
            href: "/technologies#siemens",
            desc: "SIMATIC S7-1500/1200, PCS 7, WinCC Unified, TIA Portal, and ET200 distributed I/O.",
            badge: "TIA Portal",
          },
          {
            title: "ABB Process Automation",
            href: "/technologies#abb",
            desc: "ABB System 800xA, AC 800M controllers, Freelance AC 900F/800F, and fieldbus networks.",
            badge: "System 800xA",
          },
        ],
      },
      {
        category: "PLC, SCADA & Smart OT",
        items: [
          {
            title: "Rockwell / Allen-Bradley",
            href: "/technologies#rockwell",
            desc: "ControlLogix, CompactLogix, Studio 5000, FactoryTalk View, and PlantPAx process systems.",
            badge: "ControlLogix",
          },
          {
            title: "Tridium Niagara & Open BMS",
            href: "/technologies#niagara",
            desc: "Open BACnet, Modbus, and LonWorks frameworks with Niagara AX/N4 and Johnson Controls.",
            badge: "Open BACnet",
          },
          {
            title: "SCADA & Industrial Networks",
            href: "/technologies#networks",
            desc: "Ignition, AVEVA InTouch, Profibus, Profinet, Modbus TCP/IP, and OT cybersecurity zoning.",
            badge: "Industrial IoT",
          },
        ],
      },
    ],
    featured: {
      badge: "Vendor Neutrality",
      title: "Multi-Platform Systems Integration",
      desc: "Unlike single-brand vendors that push proprietary hardware, TecLogos selects and integrates the exact controller platform that maximizes your plant's performance and ROI.",
      href: "/technologies",
      linkText: "Explore Technology Stack",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=700&q=80",
    },
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "About Us",
    href: "/about",
    dropdown: [
      {
        category: "Corporate Profile",
        items: [
          {
            title: "Overview & Origins",
            href: "/about#overview",
            desc: "Founded in 2018 in Pune to deliver unbiased, world-class industrial automation engineering.",
            badge: "Est. 2018",
          },
          {
            title: "Executive Leadership",
            href: "/about#leadership",
            desc: "Led by former Honeywell process automation specialists with decades of field commissioning.",
            badge: "Leadership",
          },
          {
            title: "5 Enduring Principles",
            href: "/about#principles",
            desc: "Employee ownership, rewarding engineer effort, customer partnership, and ethical excellence.",
            badge: "Core Ethos",
          },
        ],
      },
      {
        category: "Community & Execution",
        items: [
          {
            title: "CSR Primary Education Fund",
            href: "/about#csr",
            desc: "Annual sponsorship of complete primary school educational expenses for underprivileged children.",
            badge: "Annual Giving",
          },
          {
            title: "Our Engineering Approach",
            href: "/about#approach",
            desc: "The 6-stage turnkey EPC execution cycle from P&ID review to FAT simulation and site handover.",
            badge: "6-Stage EPC",
          },
          {
            title: "Quality & Safety Standards",
            href: "/about#qhse",
            desc: "Strict compliance with IEC 61131, IEC 61511, ISA-88, and global industrial safety protocols.",
            badge: "IEC / ISA",
          },
        ],
      },
    ],
    featured: {
      badge: "Our Philosophy",
      title: "“Simplicity is the Ultimate Sophistication”",
      desc: "Inspired by Leonardo da Vinci's maxim, we eliminate unnecessary complexity in automation systems to deliver rock-solid, transparent, and serviceable engineering.",
      href: "/about",
      linkText: "Read Company Story",
      imageUrl: "/images/services/service-06-commissioning.jpg",
    },
  },
  {
    title: "Insights",
    href: "/insights",
  },
  {
    title: "Careers",
    href: "/careers",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [rfqModalOpen, setRfqModalOpen] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (title: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(title);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const activeSection = NAV_STRUCTURE.find((s) => s.title === activeDropdown);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white transition-all duration-200">
        {/* Sleek Minimalist Top Utility Bar - Ultra Slim, Low-Noise ABB Format (25px) */}
        <div className="hidden lg:block bg-slate-50/90 border-b border-slate-200/60 text-[11px] text-slate-500 py-1 px-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2.5 font-medium text-slate-600">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 inline-block" />
              <span>Pune Systems Integration Hub</span>
              <span className="text-slate-300">•</span>
              <span className="font-mono text-[10.5px] text-slate-400">CIN: {COMPANY_DATA.cin}</span>
            </div>

            <div className="flex items-center gap-4 text-slate-600">
              <a
                href={`tel:${COMPANY_DATA.contacts.primaryPhone.replace(/\s+/g, "")}`}
                className="hover:text-red-600 transition-colors flex items-center gap-1.5"
              >
                <Icons.Phone className="w-3 h-3 text-red-600" />
                <span>{COMPANY_DATA.contacts.primaryPhone}</span>
              </a>
              <span className="text-slate-300">•</span>
              <a
                href={`mailto:${COMPANY_DATA.contacts.adminEmail}`}
                className="hover:text-red-600 transition-colors flex items-center gap-1.5"
              >
                <Icons.Mail className="w-3 h-3 text-red-600" />
                <span>{COMPANY_DATA.contacts.adminEmail}</span>
              </a>
              <span className="text-slate-300">•</span>
              <span className="text-[10px] font-semibold text-slate-700 tracking-wider uppercase">
                India | EN
              </span>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar - Balanced 64px Height, Crisp White ABB Style */}
        <nav
          className={`relative w-full bg-white border-b border-slate-200/80 transition-all duration-200 ${
            isScrolled ? "py-2 shadow-[0_2px_8px_rgba(0,0,0,0.04)]" : "py-2.5 sm:py-3"
          } px-4 sm:px-6`}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Crisp Vector Corporate Logo - 100% Scalable & Sharp on Retina Displays */}
            <Link href="/" className="flex items-center group py-0.5">
              <TecLogosLogo className="h-10 sm:h-11 transition-transform group-hover:scale-[1.02]" />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {NAV_STRUCTURE.map((item) => {
                const hasDropdown = item.dropdown && item.dropdown.length > 0;
                const isHovered = activeDropdown === item.title;
                const isRouteActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <div
                    key={item.title}
                    className="relative py-2"
                    onMouseEnter={() => {
                      if (hasDropdown) {
                        handleMouseEnter(item.title);
                      } else {
                        handleMouseLeave();
                      }
                    }}
                  >
                    <Link
                      href={item.href}
                      className={`relative flex items-center gap-1 px-3 py-1.5 text-[13.5px] transition-colors ${
                        isRouteActive || isHovered
                          ? "text-red-600 font-bold"
                          : "text-slate-700 font-medium hover:text-red-600"
                      }`}
                    >
                      <span>{item.title}</span>
                      {hasDropdown && (
                        <Icons.ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isHovered ? "rotate-180 text-red-600" : "text-slate-400"
                          }`}
                        />
                      )}
                      {/* Active indicator dot/tab */}
                      {isHovered && hasDropdown && (
                        <span className="absolute -bottom-2.5 left-3 right-3 h-[2px] bg-red-600 z-50" />
                      )}
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* Desktop Action CTA - Refined, Balanced Corporate Button */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => setRfqModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold text-xs tracking-wide transition-all shadow-xs rounded-none group"
              >
                <span>Request a Quote</span>
                <Icons.ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>

            {/* Mobile Hamburger & Quick Quote */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setRfqModalOpen(true)}
                className="px-3 py-1.5 text-xs font-semibold bg-red-600 text-white rounded-none"
              >
                Quote
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 text-slate-700 hover:text-slate-900 bg-slate-100 rounded-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <Icons.X className="w-5 h-5" />
                ) : (
                  <Icons.Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Full-Width Container Mega-Dropdown Panel (Authentic ABB Style) */}
          {activeSection && activeSection.dropdown && (
            <div
              className="absolute top-full left-0 right-0 w-full bg-white border-t-2 border-red-600 border-b border-slate-200/90 shadow-2xl shadow-slate-900/15 z-50 animate-in fade-in-0 slide-in-from-top-1 duration-150"
              onMouseEnter={() => {
                if (timeoutRef.current) {
                  clearTimeout(timeoutRef.current);
                  timeoutRef.current = null;
                }
              }}
              onMouseLeave={handleMouseLeave}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 py-7">
                <div className="grid grid-cols-12 gap-8 items-start">
                  {/* Left 8 Columns: Two Generous Categorized Columns */}
                  <div className="col-span-8 grid grid-cols-2 gap-8 border-r border-slate-100 pr-8">
                    {activeSection.dropdown.map((col) => (
                      <div key={col.category} className="space-y-3.5">
                        <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-600 inline-block shrink-0" />
                          <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-900">
                            {col.category}
                          </h4>
                        </div>
                        <div className="space-y-1.5">
                          {col.items.map((sub) => (
                            <Link
                              key={sub.title}
                              href={sub.href}
                              onClick={() => setActiveDropdown(null)}
                              className="group block p-2.5 rounded-none hover:bg-slate-50 border border-transparent hover:border-slate-200/70 transition-all"
                            >
                              <div className="flex items-center justify-between gap-2">
                                <span className="text-[13px] font-semibold text-slate-900 group-hover:text-red-600 transition-colors flex items-center gap-1.5">
                                  {sub.title}
                                  <Icons.ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 text-red-600 transition-all" />
                                </span>
                                {sub.badge && (
                                  <span className="whitespace-nowrap px-1.5 py-0.5 text-[9.5px] font-mono font-medium uppercase tracking-wider bg-slate-100 text-slate-600 border border-slate-200/80 rounded-none shrink-0">
                                    {sub.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-[11.5px] text-slate-500 group-hover:text-slate-600 leading-relaxed mt-1">
                                {sub.desc}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Right 4 Columns: ABB-Style Editorial Showcase Card */}
                  {activeSection.featured && (
                    <div className="col-span-4 flex flex-col justify-between h-full pl-2">
                      <Link
                        href={activeSection.featured.href}
                        onClick={() => setActiveDropdown(null)}
                        className="group block bg-slate-50/70 hover:bg-slate-50 border border-slate-200/80 p-4 transition-all hover:border-slate-300 hover:shadow-sm"
                      >
                        <div className="relative aspect-[16/10] w-full overflow-hidden mb-3.5 bg-slate-200">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={activeSection.featured.imageUrl}
                            alt={activeSection.featured.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-2.5 left-2.5">
                            <span className="inline-block px-2 py-0.5 bg-red-600 text-white text-[9.5px] font-bold uppercase tracking-wider shadow-xs">
                              {activeSection.featured.badge}
                            </span>
                          </div>
                        </div>
                        <h5 className="text-[13.5px] font-bold text-slate-900 group-hover:text-red-600 transition-colors leading-snug">
                          {activeSection.featured.title}
                        </h5>
                        <p className="text-xs text-slate-600 leading-relaxed mt-1.5">
                          {activeSection.featured.desc}
                        </p>
                        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 mt-3 group-hover:gap-2 transition-all">
                          <span>{activeSection.featured.linkText}</span>
                          <Icons.ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </Link>
                    </div>
                  )}
                </div>

                {/* Bottom Bar: Corporate Alignment & Direct Link */}
                <div className="mt-6 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-slate-700">TecLogos Automation Pvt. Ltd.</span>
                    <span className="text-slate-300">•</span>
                    <span>Pune Systems Integration Bay</span>
                    <span className="text-slate-300">•</span>
                    <span className="font-mono text-[11px] text-slate-400">CIN: {COMPANY_DATA.cin}</span>
                  </div>
                  <Link
                    href={activeSection.href}
                    onClick={() => setActiveDropdown(null)}
                    className="inline-flex items-center gap-1.5 text-red-600 hover:text-red-700 font-bold tracking-wide transition-colors"
                  >
                    <span>Explore All {activeSection.title}</span>
                    <Icons.ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>

        {/* Mobile Slideout Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden w-full bg-white border-b border-slate-200 px-6 py-4 space-y-3 max-h-[85vh] overflow-y-auto shadow-lg">
            <div className="space-y-2">
              {NAV_STRUCTURE.map((item) => (
                <div key={item.title} className="border-b border-slate-100 pb-2">
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-sm font-bold text-slate-900 hover:text-red-600 py-1"
                  >
                    {item.title}
                  </Link>
                  {item.dropdown && (
                    <div className="pl-3 pt-1 space-y-1.5 border-l border-slate-200">
                      {item.dropdown.flatMap((d) => d.items).map((sub) => (
                        <Link
                          key={sub.title}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-xs text-slate-600 hover:text-red-600 py-0.5"
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setRfqModalOpen(true);
                }}
                className="w-full py-2.5 bg-red-600 text-white text-xs font-bold uppercase tracking-wider text-center"
              >
                Request a Quote / Project Scope
              </button>
            </div>
          </div>
        )}
      </header>

      <InteractiveRfqModal
        isOpen={rfqModalOpen}
        onClose={() => setRfqModalOpen(false)}
      />
    </>
  );
}
