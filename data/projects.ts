export interface CaseStudy {
  id: string;
  title: string;
  clientSector: string;
  location: string;
  scopeSummary: string;
  clientChallenge: string;
  engineeringApproach: string[];
  technologiesDeployed: string[];
  measurableOutcomes: {
    metric: string;
    description: string;
  }[];
  architectureBadge: string;
  imageUrl: string;
}

export const PROJECTS_DATA: CaseStudy[] = [
  {
    id: "power-plant-bop-overhaul",
    title: "600 MW Thermal Power Station: Auxiliary BOP DCS & SCADA Modernization",
    clientSector: "Power Generation & Utilities",
    location: "Western India",
    scopeSummary:
      "Turnkey revamp of Balance of Plant (BOP) control systems encompassing coal handling, ash handling, cooling water pump house, and fuel oil pressurization.",
    clientChallenge:
      "The plant was operating with obsolete, fragmented standalone PLC panels across four separate auxiliary plant areas. Frequent communication dropouts, lack of central alarm visibility, and unavailable spare parts caused repeated boiler deratings.",
    engineeringApproach: [
      "Designed a fault-tolerant fiber-optic redundant ring network interconnecting all four remote pump houses to the central control room.",
      "Engineered redundant Siemens S7-1500R controllers with ET 200SP remote I/O nodes replacing legacy standalone racks.",
      "Developed high-performance WinCC SCADA graphics adhering to ISA-101 guidelines for intuitive alarm response.",
      "Conducted 100% simulated Factory Acceptance Testing (FAT) with client engineers over 14 days, verifying all 2,400+ I/O points.",
      "Executed cutover during a 10-day planned boiler maintenance window with zero schedule overrun.",
    ],
    technologiesDeployed: [
      "Siemens S7-1500R Redundant CPUs",
      "SIMATIC ET 200SP Distributed I/O",
      "WinCC Professional SCADA Server-Client",
      "Profinet over Redundant Fiber Optic Rings",
    ],
    measurableOutcomes: [
      { metric: "100%", description: "Elimination of auxiliary plant communication dropouts" },
      { metric: "2,400+", description: "I/O points integrated with sub-second HMI refresh rates" },
      { metric: "0 Days", description: "Zero plant downtime during post-maintenance synchronization" },
      { metric: "-35%", description: "Reduction in mean-time-to-repair (MTTR) for auxiliary faults" },
    ],
    architectureBadge: "Redundant PLC & High-Speed SCADA",
    imageUrl:
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "refinery-safety-manager-upgrade",
    title: "Refinery Hydrotreater Unit: SIL-3 Safety Instrumented System (SIS) Migration",
    clientSector: "Oil, Gas & Petrochemicals",
    location: "Gujarat Industrial Corridor, India",
    scopeSummary:
      "Upgrade of legacy emergency shutdown (ESD) system to modern Honeywell Safety Manager (SM) for high-pressure diesel hydrotreater reactor loop.",
    clientChallenge:
      "Aging legacy fail-safe controllers were approaching end-of-support, creating compliance vulnerabilities with updated international functional safety directives (IEC 61511). The refinery required an upgrade without delaying the planned 21-day plant turnaround.",
    engineeringApproach: [
      "Conducted comprehensive Cause & Effect (C&E) matrix validation against historical process safety documentation.",
      "Engineered quad-redundant (QMR) Honeywell Safety Manager logic with SIL-3 certified analog trip voting (2oo3).",
      "Pre-fabricated and fully wired custom marshalling cabinets with intrinsic safety barriers at TecLogos workshop.",
      "Staged full factory loop simulation mimicking high-pressure hydrogen release and automated quench valve triggering.",
      "Led on-site hot loop checking, burner management interlocks, and formal SAT certification alongside refinery safety inspectors.",
    ],
    technologiesDeployed: [
      "Honeywell Safety Manager (SM)",
      "Safety Builder v5.x Engineering Environment",
      "Pepperl+Fuchs Galvanic Isolators & IS Barriers",
      "Experion PKS peer-to-peer safety data exchange",
    ],
    measurableOutcomes: [
      { metric: "SIL-3", description: "Full functional safety compliance under IEC 61511 standards" },
      { metric: "100 ms", description: "Guaranteed emergency shutdown initiation time" },
      { metric: "21 Days", description: "Commissioning completed within turnaround window" },
      { metric: "Zero", description: "Zero spurious nuisance trips recorded during the first 12 months" },
    ],
    architectureBadge: "SIL-3 Safety Instrumented System",
    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "water-utility-scada-distribution",
    title: "50 MLD Municipal Sewage & Wastewater Treatment Plant: Complete Automation",
    clientSector: "Water & Wastewater Treatment",
    location: "Maharashtra, India",
    scopeSummary:
      "Turnkey automation and electrical instrumentation engineering for a 50 million-liters-per-day (MLD) municipal wastewater treatment facility utilizing Sequencing Batch Reactor (SBR) technology.",
    clientChallenge:
      "The municipality experienced inconsistent effluent biological parameters due to manual valve switching and erratic chemical dosing, resulting in regulatory penalty notices and high energy expenditure from uncontrolled blower operation.",
    engineeringApproach: [
      "Developed an automated 4-phase SBR cycle algorithm (Fill, React/Aerate, Settle, Decant) dynamically adjusting to incoming sewage flow rates.",
      "Integrated dissolved oxygen (DO) probe feedback loops to automatically modulate variable speed air blowers, drastically cutting power draw.",
      "Designed and fabricated 6 local motor control center (MCC) panels and a central PLC automation cabinet with IP55 dust protection.",
      "Deployed centralized SCADA with automated daily compliance reporting for BOD, COD, and Total Suspended Solids (TSS).",
    ],
    technologiesDeployed: [
      "Siemens SIMATIC S7-1500 PLC",
      "Siemens G120 Variable Frequency Drives",
      "WinCC SCADA with SQL Reporting Database",
      "Endress+Hauser Online Optical Dissolved Oxygen Sensors",
    ],
    measurableOutcomes: [
      { metric: "22%", description: "Reduction in electrical energy consumed by aeration blowers" },
      { metric: "100%", description: "Compliance with State Pollution Control Board effluent standards" },
      { metric: "50 MLD", description: "Continuous automated treatment volume with zero manual intervention" },
      { metric: "35%", description: "Chemical coagulant savings via flow-proportional dosing" },
    ],
    architectureBadge: "SBR Sequencing & Municipal SCADA",
    imageUrl:
      "https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "smart-campus-niagara-bms",
    title: "1.2M Sq. Ft. Corporate IT Park: Tridium Niagara N4 Integrated BMS & Chiller Optimization",
    clientSector: "Commercial Smart Buildings",
    location: "Pune Tech Corridor, Maharashtra",
    scopeSummary:
      "Enterprise Building Management System (BMS) overhaul across 3 commercial towers, unifying multi-vendor HVAC chillers, air handling units, and 120+ energy meters under Tridium Niagara N4.",
    clientChallenge:
      "The campus was crippled by proprietary vendor lock-in. One tower ran on Johnson Controls, another on Alerton, and the third on Honeywell Spyder. Facility managers could not obtain unified energy reports or coordinate central chiller plant staging.",
    engineeringApproach: [
      "Installed Tridium JACE 8000 edge controllers at each tower to ingest legacy BACnet MS/TP, Modbus RTU, and LonWorks protocols into a unified Niagara IP backbone.",
      "Engineered an automated Chiller Plant Optimization algorithm regulating chilled water supply temperature and cooling tower fan speeds to match real-time wet-bulb temperatures.",
      "Designed responsive HTML5 WebStation dashboards accessible from building operator tablets with 3D graphic floorplans.",
      "Implemented automated tenant energy sub-metering and email alerts for after-hours HVAC over-consumption.",
    ],
    technologiesDeployed: [
      "Tridium Niagara N4 Framework & JACE 8000 Controllers",
      "Honeywell Spyder DDC Controllers",
      "Schneider Electric Modbus Digital Energy Meters",
      "BACnet/IP and MS/TP Protocol Gateways",
    ],
    measurableOutcomes: [
      { metric: "19.4%", description: "Verified drop in overall campus HVAC electrical consumption" },
      { metric: "1.2M", description: "Square feet of Grade-A office space unified on single interface" },
      { metric: "120+", description: "Sub-meters automatically reconciled for monthly tenant billing" },
      { metric: "100%", description: "Elimination of proprietary OEM software licensing dependency" },
    ],
    architectureBadge: "Multi-Protocol Open Niagara BMS",
    imageUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "cement-mill-kiln-automation",
    title: "3,000 TPD Cement Plant: Raw Mill Grinding & Preheater Cyclone Automation",
    clientSector: "Cement & Heavy Minerals",
    location: "Central India",
    scopeSummary:
      "Complete control system engineering and field commissioning for raw material proportioning, vertical roller mill grinding, and preheater cyclone temperature optimization.",
    clientChallenge:
      "Severe limestone quality variations caused frequent vertical roller mill trip events and unstable preheater gas temperatures, leading to excessive thermal fuel consumption and clinker quality variance.",
    engineeringApproach: [
      "Deployed ABB System 800xA with AC 800M controllers communicating over redundant Profibus DP to field variable speed drives.",
      "Programmed advanced feed-forward control loops that modulate raw meal limestone, clay, and iron ore feed rates based on real-time X-ray fluorescence (XRF) laboratory feedback.",
      "Engineered preheater cyclone draft balancing logic to stabilize kiln inlet oxygen levels.",
      "Built heavy-duty IP65 Rittal stainless-steel marshalling cabinets with vibration dampers for harsh field environment installation.",
    ],
    technologiesDeployed: [
      "ABB System 800xA (AC 800M High-Performance CPUs)",
      "ABB ACS880 Industrial Inverter Drives",
      "Profibus DP / Modbus TCP Fieldbus Networks",
      "Rittal IP65 Heavy-Duty Industrial Enclosures",
    ],
    measurableOutcomes: [
      { metric: "+9.2%", description: "Increase in raw mill grinding throughput" },
      { metric: "-4.1%", description: "Reduction in specific thermal energy consumption per ton of clinker" },
      { metric: "-65%", description: "Fewer mill operational stoppages due to feed blockages" },
      { metric: "3,000", description: "Tons per day continuous stable clinker production" },
    ],
    architectureBadge: "DCS & High-Torque Drive Integration",
    imageUrl:
      "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
  },
];

