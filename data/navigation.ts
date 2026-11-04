export interface NavItem {
  title: string;
  href: string;
  description?: string;
  badge?: string;
  children?: {
    title: string;
    href: string;
    description: string;
    tag?: string;
  }[];
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  {
    title: "Services & Capabilities",
    href: "/services",
    children: [
      {
        title: "Industrial Process Automation & DCS/PLC",
        href: "/services#industrial-automation",
        description: "Continuous process control, SCADA, Honeywell Experion, Siemens & ABB integration.",
        tag: "Core Engineering",
      },
      {
        title: "Electrical & Instrumentation (E&I) Detail Engineering",
        href: "/services#ei-engineering",
        description: "Pre-bid BOQ, instrument index, loop drawings, cable sizing, and earthing layouts.",
        tag: "Detailed Design",
      },
      {
        title: "Building Management Systems (BMS) & Smart OT",
        href: "/services#building-automation",
        description: "Tridium Niagara N4, Honeywell Spyder, smart HVAC, and energy telemetry.",
        tag: "Smart Facilities",
      },
      {
        title: "Custom Control Panel Engineering & FAT/SAT",
        href: "/services#control-panels",
        description: "PLC, DCS, and MCC panel manufacturing, wiring schematics, and rigorous FAT testing.",
        tag: "Fabrication & QA",
      },
      {
        title: "Plant Modernization & Legacy DCS/PLC Migration",
        href: "/services#migration-modernization",
        description: "Phased cutovers of TDC3000, SLC 500, and legacy PLCs without plant shutdown.",
        tag: "Risk Mitigation",
      },
      {
        title: "Lifecycle Support, Commissioning & AMC",
        href: "/services#lifecycle-support",
        description: "On-site cold/hot commissioning, loop checking, shutdown support, and preventive AMC.",
        tag: "Field Operations",
      },
    ],
  },
  {
    title: "Industries",
    href: "/industries",
    children: [
      {
        title: "Power Generation & Utilities",
        href: "/industries#power-generation",
        description: "Boiler automation, turbine trip logic, auxiliary balance of plant, SOE logging.",
        tag: "High Reliability",
      },
      {
        title: "Oil, Gas & Petrochemicals",
        href: "/industries#oil-gas",
        description: "Hazardous area design, SIL-3 safety instrumented systems, distillation control.",
        tag: "Safety Critical",
      },
      {
        title: "Water & Wastewater Treatment",
        href: "/industries#water-treatment",
        description: "Pumping stations, chemical dosing, filter backwash, and distributed SCADA.",
        tag: "Continuous Utility",
      },
      {
        title: "Cement & Heavy Minerals",
        href: "/industries#cement-minerals",
        description: "Raw mill grinding, preheater cyclone control, and high-dust kiln automation.",
        tag: "Rugged Control",
      },
      {
        title: "Steel & Metals Manufacturing",
        href: "/industries#steel-metals",
        description: "Continuous casting, reheating furnace heat zones, high-speed drive sync.",
        tag: "High Speed",
      },
      {
        title: "Chemicals & Continuous Processing",
        href: "/industries#chemicals-process",
        description: "Batch recipe execution (ISA-88), exothermic reaction safety, custody transfer.",
        tag: "Precision Batch",
      },
    ],
  },
  {
    title: "Technology Stack",
    href: "/technologies",
    children: [
      {
        title: "Honeywell Process Systems",
        href: "/technologies#honeywell",
        description: "Experion PKS, TPS, C200/C300, Safety Manager, MasterLogic & Spyder.",
        tag: "Ex-OEM Mastery",
      },
      {
        title: "Siemens Automation & Drives",
        href: "/technologies#siemens",
        description: "SIMATIC S7-1200/1500, TIA Portal, WinCC Unified, ET200 distributed I/O.",
        tag: "Global Standard",
      },
      {
        title: "ABB Process Automation",
        href: "/technologies#abb",
        description: "System 800xA, AC 800M controller, Freelance AC 900F & AC 800F.",
        tag: "Heavy Process",
      },
      {
        title: "Rockwell Automation (Allen-Bradley)",
        href: "/technologies#rockwell",
        description: "ControlLogix, CompactLogix, Studio 5000, FactoryTalk View SE/ME.",
        tag: "Industrial Discrete",
      },
      {
        title: "Tridium Niagara & Open BMS",
        href: "/technologies#niagara",
        description: "Niagara AX/N4 frameworks, BACnet/IP, Modbus, Johnson Controls & Alerton.",
        tag: "Open Protocol",
      },
    ],
  },
  {
    title: "Projects & Case Studies",
    href: "/projects",
  },
  {
    title: "About Us",
    href: "/about",
    children: [
      {
        title: "Corporate Profile & Overview",
        href: "/about#overview",
        description: "Registered Pune corporate entity, history since 2018, and core mission.",
      },
      {
        title: "Executive Leadership",
        href: "/about#leadership",
        description: "Led by former Honeywell automation engineers and seasoned operations directors.",
      },
      {
        title: "Engineering Culture & QHSE",
        href: "/about#qhse",
        description: "Quality management, IEC/ISA compliance, and zero-compromise safety protocols.",
      },
      {
        title: "The TecLogos Advantage",
        href: "/about#why-us",
        description: "Why EPC contractors and plant directors choose our vendor-agnostic team.",
      },
    ],
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

