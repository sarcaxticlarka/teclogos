export interface TechPlatform {
  id: string;
  name: string;
  brand: string;
  tagline: string;
  category: "DCS / Process" | "PLC / SCADA" | "Safety Systems" | "Open BMS";
  hardwareSeries: string[];
  softwareEnvironment: string[];
  engineeringCapabilities: string[];
  teclogosDifferentiator: string;
  typicalUseCases: string[];
  oemRelationship: string;
}

export const TECHNOLOGIES_DATA: TechPlatform[] = [
  {
    id: "honeywell",
    name: "Honeywell Process Solutions & Building Controls",
    brand: "Honeywell",
    tagline: "Ex-OEM Engineering Mastery Across Experion PKS, TPS & Safety Systems",
    category: "DCS / Process",
    hardwareSeries: [
      "Experion C300 & C200 Controllers",
      "TotalPlant Solution (TPS) / HPM / APM / PM",
      "Safety Manager (SM) & Fail Safe Controller (FSC)",
      "MasterLogic ML200 / ML200R Redundant PLCs",
      "LCS 620-35 Modular Controller",
      "Honeywell Spyder DDC Controllers (BACnet/LonWorks)",
    ],
    softwareEnvironment: [
      "Experion Process Knowledge System (EPKS) R4xx / R5xx",
      "Experion Control Builder & QuickBuilder",
      "PlantScape SCADA Server & Display Builder",
      "Safety Builder for Safety Manager",
      "Honeywell CARE Tool for Spyder DDCs",
    ],
    engineeringCapabilities: [
      "Complete Control Builder strategy programming (PID, Cascade, Ratio, Custom Algorithms)",
      "Legacy TotalPlant Solution (TPS/TDC3000) to Experion PKS modernization & cutover",
      "Safety Instrumented Systems (SIS) logic programming and Cause & Effect matrix validation",
      "HMI graphics creation adhering to ASM (Abnormal Situation Management) principles",
      "Factory Acceptance Testing (FAT) with software emulation and loop injection",
    ],
    teclogosDifferentiator:
      "Our core executive technical leadership worked directly as Honeywell automation engineers. We bring authentic OEM-grade architectural discipline without exorbitant vendor captive fees.",
    typicalUseCases: [
      "Refinery distillation & hydroprocessing control",
      "Large-scale continuous chemical manufacturing",
      "Thermal power plant DCS upgrades",
      "Commercial facility HVAC optimization via Spyder DDCs",
    ],
    oemRelationship: "Independent Specialist with Ex-OEM Engineering Lineage",
  },
  {
    id: "siemens",
    name: "Siemens SIMATIC & TIA Portal Automation",
    brand: "Siemens",
    tagline: "High-Performance Discrete, Hybrid & Water Infrastructure Control",
    category: "PLC / SCADA",
    hardwareSeries: [
      "SIMATIC S7-1500 & S7-1500R/H Redundant CPUs",
      "SIMATIC S7-1200 Compact Controllers",
      "Legacy SIMATIC S7-300 & S7-400 Automation Systems",
      "ET 200SP & ET 200MP Distributed I/O Modules",
      "SIMATIC HMI Comfort Panels & KTP Basic Displays",
      "SITOP Redundant Industrial Power Supplies",
    ],
    softwareEnvironment: [
      "Totally Integrated Automation (TIA Portal) v16 – v19",
      "STEP 7 Professional (LAD, FBD, SCL, STL, Graph)",
      "WinCC Comfort / Advanced / Professional",
      "WinCC Unified & Industrial Edge Integration",
      "SIMATIC STEP 7 v5.6 (for legacy S7-300/400 maintenance)",
    ],
    engineeringCapabilities: [
      "Structured programming using User-Defined Types (UDT) and reusable Function Blocks (FB)",
      "Profinet ring topologies with Media Redundancy Protocol (MRP) for zero-loss network failover",
      "Integrated motion control and SINAMICS VFD drive parametrization over Profidrive",
      "S5 to S7-1500 legacy software translation and hardware swing-arm panel engineering",
      "Web-server based diagnostics and industrial cybersecurity hardening",
    ],
    teclogosDifferentiator:
      "Deep experience deploying Siemens across severe industrial environments (steel rolling, municipal water pumping, heavy manufacturing) with clean, modular, self-documenting SCL code.",
    typicalUseCases: [
      "Municipal wastewater treatment SCADA and pumping networks",
      "Steel rolling mill looper and shear synchronization",
      "Food & beverage packaging and clean CIP skids",
      "Automated material handling and automotive stamping cells",
    ],
    oemRelationship: "Independent Systems Integration Specialist",
  },
  {
    id: "abb",
    name: "ABB Process Automation (System 800xA & Freelance)",
    brand: "ABB",
    tagline: "Industrial Heavyweight Control for Power, Cement & Minerals",
    category: "DCS / Process",
    hardwareSeries: [
      "System 800xA with AC 800M High-Performance Controllers",
      "Freelance DCS with AC 900F & AC 800F Process Controllers",
      "S800 & S900 Distributed I/O Systems (including Intrinsic Safety)",
      "ABB Ability Remote I/O and Fieldbus Interfaces",
      "ABB Industrial Drives (ACS880 / ACS580) Profibus/Modbus integration",
    ],
    softwareEnvironment: [
      "800xA Control Builder M & Engineering Workplace",
      "Freelance Engineering (Control Builder F & DigiVis HMI)",
      "System 800xA Operations (High-Performance Workplace)",
      "ABB PGIM (Process Information Management) Plant Historian",
    ],
    engineeringCapabilities: [
      "Multi-system integration unifying electrical protection relays, drives, and process loops into 800xA",
      "Advanced process control library development for cement kilns and power boilers",
      "Redundant controller configuration with bumpless hot-standby switchover",
      "Fieldbus integration across Profibus DP/PA, Foundation Fieldbus, and Modbus TCP",
    ],
    teclogosDifferentiator:
      "Engineered execution of complex industrial balance-of-plant systems where electrical switchgear and process control converge into a single supervisory screen.",
    typicalUseCases: [
      "Power plant auxiliary balance-of-plant (BOP) control",
      "Cement raw mill and rotary kiln automation",
      "Metals reheating furnaces and continuous casters",
      "Chemical batch processing using Freelance DCS",
    ],
    oemRelationship: "Independent Systems Integration Specialist",
  },
  {
    id: "rockwell",
    name: "Rockwell Automation / Allen-Bradley Logix Platforms",
    brand: "Rockwell Automation",
    tagline: "Deterministic High-Speed Logic & Plant-Wide Manufacturing Intelligence",
    category: "PLC / SCADA",
    hardwareSeries: [
      "ControlLogix 5570 & 5580 PACs (Programmable Automation Controllers)",
      "CompactLogix 5370 & 5380 Controllers",
      "Legacy Allen-Bradley SLC 500 & PLC-5 Systems",
      "POINT I/O & FLEX 5000 Distributed I/O Modules",
      "PanelView Plus 7 & PanelView 5000 Graphic Terminals",
      "PowerFlex 525 / 755 Variable Frequency Drives",
    ],
    softwareEnvironment: [
      "Studio 5000 Logix Designer & Logix Emulate",
      "RSLogix 500 (for legacy SLC 500 maintenance)",
      "FactoryTalk View Site Edition (SE) & Machine Edition (ME)",
      "FactoryTalk Historian & VantagePoint Reporting",
      "RSLinx Classic & FactoryTalk Linx Communications",
    ],
    engineeringCapabilities: [
      "High-speed Add-On Instructions (AOI) and User-Defined Data Types (UDT) development",
      "EtherNet/IP Device Level Ring (DLR) fault-tolerant network architecture design",
      "CIP Motion multi-axis servo coordination and electronic camming",
      "SLC 500 to CompactLogix/ControlLogix phased migrations with 1746 chassis adapters",
      "FactoryTalk View SE networked distributed server-client graphics systems",
    ],
    teclogosDifferentiator:
      "Mastery in converting aging, unmaintainable SLC 500 codebases into elegant Studio 5000 architectures while minimizing panel recabling through specialized conversion kits.",
    typicalUseCases: [
      "High-speed discrete assembly and packaging machinery",
      "Automotive component manufacturing lines",
      "Material handling conveyor sorters and warehouse cranes",
      "Water pump stations and industrial utilities",
    ],
    oemRelationship: "Independent Systems Integration Specialist",
  },
  {
    id: "niagara",
    name: "Tridium Niagara & Open Framework Building Systems",
    brand: "Tridium Niagara / Multi-Vendor BMS",
    tagline: "Vendor-Neutral Smart Facility Automation & Decarbonization",
    category: "Open BMS",
    hardwareSeries: [
      "Tridium JACE 8000 & JACE 9000 IoT Edge Controllers",
      "Honeywell Spyder & CIPer Model 30 Controllers",
      "Johnson Controls NAE / NIE Network Automation Engines & FEC DDCs",
      "Alerton Compass & VisualLogic DDC Controllers",
      "Distech Controls ECL, ECB & ECY Series BACnet Controllers",
    ],
    softwareEnvironment: [
      "Niagara AX & Niagara N4 Workbench",
      "Niagara WebStation HTML5 Supervisory Interfaces",
      "Honeywell WEBs-N4 Software",
      "Alerton Compass Supervisory Software",
      "InduSoft Web Studio SCADA",
    ],
    engineeringCapabilities: [
      "Multi-protocol normalization bridging BACnet/IP, BACnet MS/TP, Modbus RTU/TCP, LonWorks, and MQTT into a unified schema",
      "Legacy proprietary BMS migration to Niagara N4 open framework without replacing field valves or actuators",
      "HTML5 responsive facility dashboards accessible from workstations, tablets, and smartphones",
      "Advanced chiller plant optimization (kW/TR minimization algorithms)",
      "Automated tenant sub-billing and carbon footprint reporting",
    ],
    teclogosDifferentiator:
      "True multi-vendor building integration: we break proprietary vendor lock-in by uniting Johnson Controls, Alerton, Honeywell, and Siemens equipment under a single Niagara glass pane.",
    typicalUseCases: [
      "Commercial IT parks and enterprise corporate campuses",
      "Tier-III/IV Data center cooling and electrical monitoring",
      "Hospital cleanrooms and isolation ward HVAC control",
      "Large shopping malls and multi-tenant commercial towers",
    ],
    oemRelationship: "Independent Certified Systems Integrator",
  },
];

