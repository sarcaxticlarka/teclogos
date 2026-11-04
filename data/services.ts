export interface ServiceDeliverable {
  name: string;
  description: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  shortDescription: string;
  category: string;
  tagline: string;
  overview: string;
  whyIndustriesNeedIt: string;
  howItWorks: string;
  howTecLogosDelivers: string;
  keyDeliverables: ServiceDeliverable[];
  supportedTechnologies: string[];
  industrialApplications: string[];
  technicalStandards: string[];
  measurableBenefits: string[];
  badge: string;
}

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: "industrial-automation",
    title: "Industrial Process Automation & DCS/PLC/SCADA",
    shortDescription:
      "Integrated process control systems architecture, application programming, graphics creation, and simulation for high-availability manufacturing and continuous process plants.",
    category: "Core Automation",
    tagline: "Autonomous, Resilient Process Control from Field I/O to Enterprise Control Workstations",
    overview:
      "Industrial automation integrates field sensors, high-speed controllers, and supervisory human-machine interfaces to govern critical physical parameters—such as pressure, temperature, flow rates, and chemical proportions—without human error. TecLogos provides end-to-end integration across Distributed Control Systems (DCS), Supervisory Control and Data Acquisition (SCADA), and Programmable Logic Controllers (PLC).",
    whyIndustriesNeedIt:
      "Modern continuous process plants run 24 hours a day, 365 days a year. A single unplanned trip or delayed valve reaction can result in catastrophic production loss, environmental damage, or equipment failure. Industrial automation guarantees deterministic response times, automatic safety interlocks, and complete operational transparency.",
    howItWorks:
      "Field instrumentation (transmitters, thermocouples, flowmeters) measures physical variables and converts them into standard 4-20mA or digital fieldbus signals. Distributed controllers execute complex PID control algorithms, compare real-time values against setpoints, and instantly command final control elements (control valves, variable frequency drives, dampers). Centralized SCADA/HMI servers log historical alarms and present operators with real-time visual schematics.",
    howTecLogosDelivers:
      "We prepare Functional Design Specifications (FDS), develop control logic in accordance with IEC 61131-3, configure high-performance HMI graphics using human factors engineering principles, perform 100% simulated Factory Acceptance Testing (FAT), and lead cold and hot commissioning on site.",
    keyDeliverables: [
      {
        name: "Functional Design Specification (FDS)",
        description: "Comprehensive narrative detailing every control loop, interlock, alarm limit, and operating state.",
      },
      {
        name: "PLC / DCS Application Codebase",
        description: "Fully commented, modular application logic adhering to IEC 61131-3 languages (Ladder, FBD, SCL, STL).",
      },
      {
        name: "High-Performance HMI Graphics",
        description: "Ergonomic operator screens designed according to ISA-101 standards to reduce operator fatigue and highlight alarms.",
      },
      {
        name: "Alarm Management Database",
        description: "Prioritized alarm hierarchies and suppression logic aligned with ISA-18.2 to prevent alarm flooding.",
      },
      {
        name: "Factory Acceptance Test (FAT) Protocol",
        description: "Rigorous test dossiers simulating 100% of I/O points and abnormal shutdown scenarios prior to panel shipment.",
      },
    ],
    supportedTechnologies: [
      "Honeywell Experion PKS & TPS (C200/C300)",
      "Siemens SIMATIC S7-1200 / S7-1500 & TIA Portal",
      "ABB System 800xA & Freelance (AC 800M/800F)",
      "Rockwell Allen-Bradley ControlLogix & Studio 5000",
      "Schneider Modicon & EcoStruxure",
      "InduSoft Web Studio & WinCC SCADA",
    ],
    industrialApplications: [
      "Boiler & combustion control in thermal power generation",
      "Continuous chemical distillation column optimization",
      "Municipal water pumping and filtration automation",
      "Cement raw mill grinding and preheater kiln balancing",
      "Steel continuous casting and cooling bed controls",
    ],
    technicalStandards: [
      "IEC 61131-3 (Programmable Controllers)",
      "ISA-101 (Human-Machine Interfaces for Process Automation)",
      "ISA-18.2 (Management of Alarm Systems)",
      "ISA-88 (Batch Control Architecture)",
    ],
    measurableBenefits: [
      "Up to 99.98% control loop operational availability",
      "30% reduction in operator response time during process excursions",
      "Elimination of manual transcription errors through automated historian logging",
      "Zero-defect commissioning through pre-validated FAT simulations",
    ],
    badge: "Core Process Control",
  },
  {
    id: "ei-engineering",
    title: "Electrical & Instrumentation (E&I) Detail Engineering",
    shortDescription:
      "Comprehensive multi-disciplinary basic and detail engineering packages for EPC contractors, plant owners, and equipment builders.",
    category: "Detailed Design",
    tagline: "Rigorous Engineering Blueprints that Bridge Process Chemistry to Field Cabling & Control Panels",
    overview:
      "Detailed Electrical & Instrumentation (E&I) engineering produces the exhaustive technical documentation, sizing calculations, schematics, and schedules necessary to physically construct, wire, and commission a modern industrial plant. TecLogos acts as a specialized engineering arm for EPC contractors and plant owners.",
    whyIndustriesNeedIt:
      "Without precise engineering deliverables, industrial construction suffers severe cost overruns, improper cable sizing that causes fire risks or signal attenuation, mismatched vendor equipment, and extended commissioning delays.",
    howItWorks:
      "Starting from Piping & Instrumentation Diagrams (P&IDs) and electrical Single Line Diagrams (SLDs), our engineers calculate electrical loads, determine cable cross-sections based on voltage drop and short-circuit withstand ratings, specify instruments suitable for hazardous areas, and assign every I/O point to controller racks.",
    howTecLogosDelivers:
      "Using industry-standard CAD and database engineering tools, TecLogos produces comprehensive packages covering pre-bid tender estimation, basic engineering, and detailed construction blueprints.",
    keyDeliverables: [
      {
        name: "Instrument Index & Datasheets",
        description: "Master database cataloging all plant instruments with operating process conditions, ranges, and materials.",
      },
      {
        name: "DCS / PLC I/O Assignment Lists",
        description: "Channel-by-channel allocation of digital and analog inputs/outputs across controller marshalling cabinets.",
      },
      {
        name: "Instrument Loop & Hook-up Diagrams",
        description: "Individual schematic drawings showing wiring from field transmitter to junction box, marshalling rack, and I/O card.",
      },
      {
        name: "Cable Schedules & Cable Tray Layouts",
        description: "Detailed routing, drum schedules, segregation rules (power, control, signal), and tray fill calculations.",
      },
      {
        name: "Earthing & Lightning Protection Layouts",
        description: "Calculations and physical layout drawings ensuring instrument clean earth and plant electrical safety.",
      },
    ],
    supportedTechnologies: [
      "AutoCAD Electrical",
      "EPLAN Pro Panel / Electric P8",
      "SmartPlant Instrumentation (INtools) formats",
      "Microsoft SQL / Access engineering databases",
      "Custom load flow & cable sizing spreadsheets",
    ],
    industrialApplications: [
      "Greenfield refinery and petrochemical processing units",
      "EPC tender preparation and pre-bid cost estimation",
      "Substation automation and Motor Control Center (MCC) revamps",
      "Water desalination and municipal wastewater treatment plants",
      "Bulk material handling and conveyor telemetry systems",
    ],
    technicalStandards: [
      "IEEE 519 (Harmonic Control in Electric Power Systems)",
      "IEC 60079 (Explosive Atmospheres & Hazardous Area Classification)",
      "ISA-5.1 (Instrumentation Symbols and Identification)",
      "NEC / NFPA 70 (National Electrical Code)",
    ],
    measurableBenefits: [
      "Up to 25% savings in electrical installation costs through optimized cable routing",
      "Zero site rework due to automated I/O conflict detection",
      "Fast-tracked EPC bidding with accurate, defendable BOQ estimations",
      "100% compliance with hazardous area and electrical safety codes",
    ],
    badge: "Detailed Blueprints",
  },
  {
    id: "building-automation",
    title: "Building Management Systems (BMS) & Smart OT",
    shortDescription:
      "Open-protocol building automation, smart HVAC energy optimization, environmental monitoring, and facility integration for commercial towers and critical environments.",
    category: "Smart Infrastructure",
    tagline: "Transforming Commercial & Industrial Facilities into Self-Optimizing, Energy-Efficient Environments",
    overview:
      "Building Management Systems (BMS) unify disparate building services—including Heating, Ventilation, Air Conditioning (HVAC), lighting, electrical metering, and access controls—into a single intelligent operating technology (OT) network. TecLogos provides open-protocol engineering and system integration.",
    whyIndustriesNeedIt:
      "Commercial campuses, IT parks, cleanrooms, and data centers expend up to 50% of their operational energy on HVAC and lighting. Without automated supervisory control, chillers run inefficiently, indoor air quality suffers, and equipment fails prematurely.",
    howItWorks:
      "Direct Digital Controllers (DDC) monitor temperature, humidity, CO2 levels, and static duct pressures. Intelligent algorithms modulate variable frequency drives (VFDs) on air handling units (AHUs) and optimize chiller staging to match real-time thermal load. Field data communicates over BACnet/IP, MS/TP, or Modbus to central supervisory servers (such as Niagara N4).",
    howTecLogosDelivers:
      "We design hardware architectures, engineer DDC programs, integrate Niagara N4 supervisors, create high-resolution 3D facility graphic dashboards, and configure automated energy consumption reporting.",
    keyDeliverables: [
      {
        name: "DDC Controller Hardware Architecture",
        description: "Network topology drawings detailing field controller distribution, BACnet routers, and IP backbones.",
      },
      {
        name: "HVAC Sequence of Operations Code",
        description: "Control algorithms for chiller plant optimization, cooling tower fan sequencing, and VAV modulation.",
      },
      {
        name: "Niagara N4 / WebStation Supervisory Graphics",
        description: "Dynamic floorplan displays, interactive equipment popups, and automated alarm email dispatch.",
      },
      {
        name: "Energy Metering & Telemetry Reports",
        description: "Sub-metering dashboards tracking kWh per square meter, water usage, and carbon footprint metrics.",
      },
      {
        name: "Indoor Environmental Quality (IEQ) Monitoring",
        description: "Automated ventilation cycling based on real-time CO2, particulate matter, and humidity sensors.",
      },
    ],
    supportedTechnologies: [
      "Tridium Niagara Framework (Niagara AX & Niagara N4)",
      "Honeywell Spyder DDC Controllers & CARE software",
      "Johnson Controls Metasys (NAE / FEC controllers)",
      "Alerton Compass & BACtalk DDCs",
      "Distech Controls (ECL / ECB / ECY series)",
      "Modbus RTU / TCP Energy Meters & VFD Gateways",
    ],
    industrialApplications: [
      "Tier-III & Tier-IV Data Center environmental monitoring",
      "Pharmaceutical cleanroom pressure cascade and humidity control",
      "Commercial high-rise office towers and corporate IT parks",
      "Healthcare facilities and critical hospital isolation rooms",
      "Large-scale airport terminals and transit hubs",
    ],
    technicalStandards: [
      "ANSI / ASHRAE Standard 135 (BACnet Protocol)",
      "ASHRAE 90.1 (Energy Standard for Buildings)",
      "LEED & Green Building Certification Requirements",
      "ISO 50001 (Energy Management Systems)",
    ],
    measurableBenefits: [
      "15% to 35% reduction in annual HVAC electrical consumption",
      "Prolonged chiller and pump lifespan through automated runtime equalization",
      "Immediate detection of refrigerant leaks, filter clogs, or fan belt failures",
      "Unified single-pane-of-glass visibility across multi-vendor facility equipment",
    ],
    badge: "Smart OT & Energy",
  },
  {
    id: "control-panels",
    title: "Custom Control Panel Engineering & FAT/SAT",
    shortDescription:
      "Custom electrical, PLC, DCS, and Marshalling panel fabrication with rigorous 100% Factory Acceptance Testing simulation before dispatch.",
    category: "Fabrication & QA",
    tagline: "Industrial-Grade Enclosures Built for Hostile Operating Environments with Zero-Defect Factory Testing",
    overview:
      "A control panel is the physical home of an automation system. It protects sensitive microprocessors, I/O modules, power supplies, and safety relays from ambient dust, moisture, corrosive gases, and electrical noise. TecLogos designs and manufactures custom control panels engineered specifically for continuous operating duty.",
    whyIndustriesNeedIt:
      "Poorly engineered panels suffer from internal thermal buildup, inadequate wire labeling, electromagnetic interference (EMI), and hazardous voltage exposure. A faulty panel causes erratic sensor readings and unpredictable controller reboots.",
    howItWorks:
      "We calculate heat dissipation to size industrial cooling fans or air conditioners, calculate power budgets to ensure redundant DC power supplies never overload, layout components for safe separation of high-voltage AC from 24V DC signals, and wire every terminal with permanent sleeve markers.",
    howTecLogosDelivers:
      "Each enclosure is built using premium components (Rittal / Schneider enclosures, Phoenix Contact / Weidmüller terminals, Mean Well / Schneider power supplies), followed by multi-point point-to-point continuity checks, insulation resistance testing, and live controller powering for client FAT.",
    keyDeliverables: [
      {
        name: "General Arrangement (GA) Drawings",
        description: "Scale CAD drawings detailing external dimensions, door cutouts, component spacing, and cable gland entry.",
      },
      {
        name: "Power Distribution & Wiring Schematics",
        description: "Complete schematics specifying circuit breaker ratings, terminal strip numbering, and wire cross-sections.",
      },
      {
        name: "Thermal Dissipation Calculations",
        description: "Calculations verifying that enclosure internal ambient temperatures stay well within component limits.",
      },
      {
        name: "Bill of Materials (BOM) Specification",
        description: "Exhaustive component breakdown with OEM part numbers, voltage ratings, and safety certifications.",
      },
      {
        name: "FAT Simulation Dossier",
        description: "Comprehensive signed test reports verifying every digital and analog signal loop before dispatch.",
      },
    ],
    supportedTechnologies: [
      "Rittal, Schneider Electric & Hensel Enclosures (IP54 to IP66 ratings)",
      "Siemens, ABB, Honeywell & Rockwell I/O Marshalling Racks",
      "Weidmüller, Phoenix Contact & WAGO Termination Systems",
      "Intrinsic Safety (IS) Barriers (MTL, Pepperl+Fuchs)",
      "Redundant 24VDC Power Supplies & Buffer Modules",
    ],
    industrialApplications: [
      "DCS System and Marshalling Cabinets for power plants",
      "Remote I/O (RIO) junction cabinets for distributed plant areas",
      "Hazardous area purge panels for petrochemical facilities",
      "Motor Control Centers (MCC) and Drive Panels with VFD integration",
      "Packaged skid control panels for water purification skids",
    ],
    technicalStandards: [
      "IEC 61439-1 / 2 (Low-Voltage Switchgear and Controlgear Assemblies)",
      "NEMA 4X / IP65 Ingress Protection Ratings",
      "UL 508A (Standard for Industrial Control Panels guidelines)",
      "IEC 60204-1 (Safety of Machinery - Electrical Equipment of Machines)",
    ],
    measurableBenefits: [
      "100% pre-tested panel integrity eliminating field wiring discovery delays",
      "Optimized internal climate preventing thermal microprocessor throttling",
      "Neat, color-coded, laser-printed ferrule labeling for effortless field maintenance",
      "Full compliance with international shock, vibration, and dust ratings",
    ],
    badge: "Precision Fabrication",
  },
  {
    id: "migration-modernization",
    title: "Plant Modernization & Legacy DCS/PLC Migration",
    shortDescription:
      "Risk-free, non-disruptive migration pathways from obsolete legacy automation hardware to state-of-the-art modern control platforms.",
    category: "Modernization",
    tagline: "Extending Operating Plant Lifespans Without Halting Active Production Lines",
    overview:
      "Thousands of industrial processing plants operate on legacy control systems installed 15 to 30 years ago. These systems suffer from scarce replacement parts, aging CRT monitors, and unsupported software. TecLogos provides phased, risk-mitigated migration architectures.",
    whyIndustriesNeedIt:
      "A complete 'rip-and-replace' plant shutdown is financially impossible for facilities that produce hundreds of thousands of dollars in output daily. Plants require engineering specialists who understand both the obsolete legacy architecture and modern digital platforms.",
    howItWorks:
      "We perform on-site reverse engineering of legacy control code, map historical I/O databases to modern tag structures, fabricate custom swing-arm wiring harnesses that plug existing field cables directly into new I/O modules, and execute staged cutovers during brief planned turnarounds.",
    howTecLogosDelivers:
      "Drawing from decades of direct engineering experience on Honeywell legacy systems (TDC3000, TPS, HPM) and early Siemens/Rockwell platforms, TecLogos audits the existing installation, recreates graphics, validates logic in software emulation, and performs cutovers in tight time windows.",
    keyDeliverables: [
      {
        name: "Legacy Plant Automation Audit Report",
        description: "Full assessment of obsolescence risks, hardware condition, spare part scarcity, and migration priorities.",
      },
      {
        name: "I/O Cross-Reference & Tag Migration Matrix",
        description: "Database mapping old controller memory addresses to modern structured tag names with zero omissions.",
      },
      {
        name: "Control Logic Translation & Optimization",
        description: "Translating proprietary legacy code into modern IEC 61131-3 logic while enhancing diagnostic routines.",
      },
      {
        name: "Swing-Arm / Marshalling Retrofit Design",
        description: "Custom wiring adaptation plates that preserve existing field cables without requiring re-pulling or re-terminating.",
      },
      {
        name: "Turnaround Cutover Execution Schedule",
        description: "Hour-by-hour operational cutover roadmap coordinated with plant shutdown teams.",
      },
    ],
    supportedTechnologies: [
      "Honeywell TDC3000 / TPS to Experion PKS (C300)",
      "Rockwell Allen-Bradley SLC 500 / PLC-5 to ControlLogix",
      "Siemens SIMATIC S5 to S7-1500 / TIA Portal",
      "Legacy DCS to Modern Open Architecture",
      "Legacy Proprietary BMS to Tridium Niagara N4 Open Framework",
    ],
    industrialApplications: [
      "Refinery unit control upgrades during scheduled biennial turnaround",
      "Thermal power plant turbine supervisory modernization",
      "Continuous chemical processing batch system upgrade",
      "Water utility SCADA telemetry platform modernization",
      "Commercial building legacy Johnson Controls Metasys to Niagara migration",
    ],
    technicalStandards: [
      "ISA-84 / IEC 61511 Safety Lifecycle Management",
      "IEC 62443 (Industrial Network and System Security)",
      "NAMUR NE 107 (Self-Monitoring and Diagnosis of Field Devices)",
    ],
    measurableBenefits: [
      "Up to 70% lower capital expense compared to complete plant rewiring",
      "Elimination of obsolete component failure risks and exorbitant gray-market parts pricing",
      "Zero unplanned downtime during transition phase through thorough emulation",
      "Access to modern cybersecurity, cloud historians, and IIoT connectivity",
    ],
    badge: "Risk-Free Upgrades",
  },
  {
    id: "lifecycle-support",
    title: "Lifecycle Support, Commissioning & AMC",
    shortDescription:
      "Dedicated field engineering, site acceptance testing (SAT), cold loop checks, 24/7 turnaround coverage, and Annual Maintenance Contracts (AMC).",
    category: "Field Engineering",
    tagline: "Empowering Long-Term Plant Availability with Experienced On-Site Automation Engineers",
    overview:
      "The true test of an automation system occurs on the live plant floor. TecLogos provides field engineering services to guarantee that control loops are tuned, field instruments communicate reliably, safety trips trigger accurately, and operating teams are thoroughly trained.",
    whyIndustriesNeedIt:
      "Even the most elegant software code will fail if field transmitters are miscalibrated, signal wires pick up electrical noise, or PID loops are untuned. In addition, routine software backups and controller firmware updates are essential to prevent sudden shutdowns.",
    howItWorks:
      "Our field engineers conduct physical point-to-point loop checks, inject simulated 4-20mA signals from transmitters to verify HMI readouts, tune PID loops under live operating dynamics, and conduct formal Site Acceptance Tests (SAT) alongside plant operators and client inspectors.",
    howTecLogosDelivers:
      "TecLogos provides dedicated site teams equipped with calibrated test equipment, signal calibrators, HART communicators, and oscilloscope diagnostic tools. We offer flexible Annual Maintenance Contracts (AMC) with guaranteed response times.",
    keyDeliverables: [
      {
        name: "Cold & Hot Loop Check Dossiers",
        description: "Signed calibration and verification sheets for every analog and digital loop in the facility.",
      },
      {
        name: "Site Acceptance Test (SAT) Certification",
        description: "Official handover documentation validating that the system fulfills all tender contractual specifications.",
      },
      {
        name: "PID Loop Optimization & Tuning Records",
        description: "Empirically tuned proportional, integral, and derivative parameters minimizing overshoot and hunting.",
      },
      {
        name: "Plant Operator & Maintenance Training",
        description: "Classroom and hands-on operational training ensuring plant technicians can navigate alarms and troubleshoot.",
      },
      {
        name: "Preventive AMC & Scheduled Health Audits",
        description: "Periodic visits for controller battery replacement, diagnostic log reviews, filter cleaning, and backups.",
      },
    ],
    supportedTechnologies: [
      "Fluke Calibrators & Signal Generators",
      "Emerson 475 / Trex Field Communicators for HART & Foundation Fieldbus",
      "Industrial Ethernet Network Analyzers (Wireshark, ProfiTrace)",
      "Multimeters, Insulation Testers & Meggers",
      "OEM Diagnostic & Remote Access Gateways",
    ],
    industrialApplications: [
      "New plant greenfield cold and hot commissioning",
      "Annual plant turnaround and overhaul support",
      "Critical emergency troubleshooting for tripped control loops",
      "Long-term AMC for commercial BMS facilities and industrial plants",
      "Post-commissioning loop tuning for unstable chemical reactions",
    ],
    technicalStandards: [
      "ISA-TR20.00.01 (Specification Forms for Process Measurement and Control)",
      "IEC 62381 (Automation Systems in the Process Industry - Factory / Site Acceptance Testing)",
      "IEC 62382 (Electrical and Instrumentation Loop Check Procedures)",
    ],
    measurableBenefits: [
      "Guaranteed on-site engineer dispatch for contract AMC partners",
      "Stable process control with up to 40% reduction in loop oscillation",
      "Comprehensive handover dossiers meeting insurance and regulatory inspection standards",
      "Empowered plant operators capable of resolving first-line operational alerts",
    ],
    badge: "Field Operations",
  },
];

