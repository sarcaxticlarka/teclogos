export interface IndustrySector {
  id: string;
  name: string;
  heroHeadline: string;
  summary: string;
  operationalChallenges: string[];
  automationRole: string;
  architectureHighlight: string;
  coreSolutionsDelivered: string[];
  keyTechnologies: string[];
  verificationLevel: "Verified Track Record" | "Core Engineering Competency";
  metrics: {
    label: string;
    value: string;
  }[];
  imageUrl: string;
}

export const INDUSTRIES_DATA: IndustrySector[] = [
  {
    id: "power-generation",
    name: "Power Generation & Utilities",
    heroHeadline: "Ensuring Grid Stability, Turbine Safety & Combustion Efficiency",
    summary:
      "Modern thermal, hydro, and captive power plants demand continuous, fail-safe automation across steam boilers, turbine auxiliaries, cooling towers, and fuel handling systems to guarantee grid synchronization and prevent catastrophic generator trips.",
    operationalChallenges: [
      "Extremely hazardous superheated high-pressure steam environments requiring millisecond trip response times",
      "Strict environmental emissions limits (SOx, NOx, particulate matter) demanding dynamic air-to-fuel ratio control",
      "Complex auxiliary balance-of-plant (BOP) systems requiring coordination across coal handling, ash disposal, and water demineralization",
      "Need for Sequence of Events (SOE) recording with sub-millisecond resolution to diagnose transient electrical trips",
    ],
    automationRole:
      "DCS and redundant PLC systems govern the complete thermal cycle: Drum Level 3-element control, combustion optimization, furnace draft balancing, turbine bypass valves, and electrical generator protection interlocks.",
    architectureHighlight:
      "Triple-modular redundant (TMR) or dual-redundant DCS controllers communicating over fault-tolerant fiber optic Ethernet rings with deterministic I/O processing.",
    coreSolutionsDelivered: [
      "Boiler Drum Level 3-Element Control and Steam Temperature Desuperheating",
      "Auxiliary Balance of Plant (BOP) SCADA and Remote I/O telemetry",
      "Turbine Supervisory Instrumentation (TSI) and Emergency Trip System (ETS) interfacing",
      "Demineralized (DM) Water Treatment Plant PLC & SCADA integration",
      "Sequence of Events (SOE) high-speed event monitoring",
    ],
    keyTechnologies: [
      "ABB System 800xA & Freelance AC 800M",
      "Honeywell Experion PKS & C300 Controllers",
      "Siemens SIMATIC S7-1500 Redundant (S7-1500R/H)",
      "Fiber Optic Modbus TCP / Profinet Ring Architecture",
    ],
    verificationLevel: "Verified Track Record",
    metrics: [
      { label: "Target Availability", value: "99.99%" },
      { label: "Trip Sequence SOE", value: "< 1 ms" },
      { label: "Combustion Efficiency", value: "+3.2%" },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "oil-gas",
    name: "Oil, Gas & Petrochemicals",
    heroHeadline: "Process Safety, SIL-3 Protection & Reliable Hydrocarbon Refining",
    summary:
      "Upstream wellheads, pipeline distribution networks, and downstream refineries operate with explosive hydrocarbons under extreme temperatures and pressures. Safety Instrumented Systems (SIS) and precise continuous control are vital.",
    operationalChallenges: [
      "Severe fire and explosion hazards mandating strict ATEX/IECEx hazardous area zoning and intrinsic safety",
      "Continuous fractionation columns and hydrotreaters where unstable process loops trigger runaway reactions",
      "Stringent functional safety mandates requiring SIL 2 and SIL 3 certified safety shutdown architectures",
      "Geographically dispersed custody transfer pipelines requiring low-power telemetry and leak detection",
    ],
    automationRole:
      "Segregated Distributed Control Systems (DCS) for continuous operations paired with dedicated Safety Instrumented Systems (SIS) for Emergency Shutdown (ESD) and Fire & Gas (F&G) detection.",
    architectureHighlight:
      "Independent safety loops separated from the basic process control system (BPCS) with SIL 3 rated logic solvers, redundant 24V DC power, and fail-safe field valves.",
    coreSolutionsDelivered: [
      "Safety Instrumented Systems (SIS) & Emergency Shutdown (ESD) integration",
      "Crude distillation column advanced regulatory control (ARC)",
      "Tank farm telemetry, automated overfill prevention & custody transfer",
      "Compressor antisurge control and vibration monitoring integration",
      "Fire & Gas (F&G) detection logic with voting architectures (2oo3)",
    ],
    keyTechnologies: [
      "Honeywell Safety Manager (SM) & Fail Safe Controller (FSC)",
      "Honeywell Experion PKS (C300 with HART I/O modules)",
      "Intrinsically Safe Barriers (MTL, Pepperl+Fuchs)",
      "Modbus RTU / Foundation Fieldbus over hazardous area barriers",
    ],
    verificationLevel: "Verified Track Record",
    metrics: [
      { label: "Safety Integrity Level", value: "SIL 2 / SIL 3" },
      { label: "Voting Architecture", value: "2oo3 / 1oo2D" },
      { label: "Hazardous Compliance", value: "Zone 1 / Zone 2" },
    ],
    imageUrl:
      "/images/services/service-02-ei.jpg",
  },
  {
    id: "water-treatment",
    name: "Water & Wastewater Treatment",
    heroHeadline: "Precision Pumping, Chemical Dosing & Municipal SCADA Networks",
    summary:
      "Municipal clean water supply, industrial effluent treatment (ETP), and sewage treatment plants (STP) rely on automated chemical dosing, clarifiers, and filtration membranes to ensure public health and environmental compliance.",
    operationalChallenges: [
      "Widely distributed remote pumping stations and reservoir tanks across vast geographical terrains",
      "Fluctuating biological and chemical loads demanding dynamic coagulant and chlorine dosing",
      "High electrical energy costs associated with continuous multi-megawatt raw water intake pumps",
      "Strict regulatory reporting for effluent biological oxygen demand (BOD) and chemical oxygen demand (COD)",
    ],
    automationRole:
      "High-reliability PLCs linked via long-range telemetry to a central municipal SCADA control center, orchestrating variable frequency pump drives, automated backwash cycles, and flow balancing.",
    architectureHighlight:
      "Hierarchical SCADA master station monitoring remote pump houses via secure 4G/LTE, optical fiber, and radio telemetry using open protocols (DNP3, Modbus TCP).",
    coreSolutionsDelivered: [
      "Municipal Water Distribution SCADA with automated tank level replenishment",
      "Sewage Treatment Plant (STP) Sequencing Batch Reactor (SBR) automation",
      "Reverse Osmosis (RO) high-pressure membrane protection and clean-in-place (CIP)",
      "Flow proportional chemical dosing and continuous pH/turbidity monitoring",
      "Pump energy optimization algorithms matching municipal water demand curves",
    ],
    keyTechnologies: [
      "Siemens SIMATIC S7-1200 / S7-1500 PLCs & WinCC SCADA",
      "Rockwell Allen-Bradley CompactLogix",
      "Cellular Telemetry Modems & Industrial Ethernet Gateways",
      "Variable Frequency Drives (VFDs) with Modbus / Profinet control",
    ],
    verificationLevel: "Verified Track Record",
    metrics: [
      { label: "Pumping Energy Savings", value: "18% – 25%" },
      { label: "Chemical Dosing Precision", value: "± 0.5%" },
      { label: "Telemetry Uptime", value: "99.95%" },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "cement-minerals",
    name: "Cement & Heavy Minerals",
    heroHeadline: "Rugged Process Control for Extreme Vibration, Heat & Dust",
    summary:
      "Cement manufacturing involves extreme physical transformation—crushing limestone, raw mill grinding, burning in 1400°C rotary kilns, and final cement milling. Plant automation must endure harsh conditions while maximizing clinker quality.",
    operationalChallenges: [
      "Hostile environments with abrasive dust, high ambient heat, and severe mechanical vibration",
      "Non-linear thermochemical kiln dynamics that can lead to costly ring formation or refractory failure",
      "Enormous energy consumption in raw material and clinker ball mills",
      "Heavy material handling conveyors requiring coordinated interlocks and emergency pull-cord safety stops",
    ],
    automationRole:
      "Ruggedized PLC/DCS systems controlling raw meal homogenisation, preheater cyclone temperatures, kiln rotational speed, cooler grate hydraulic drives, and baghouse emissions filters.",
    architectureHighlight:
      "Hardened remote I/O enclosures installed in field electrical rooms close to heavy drives, communicating back to the central control room via redundant optical fiber.",
    coreSolutionsDelivered: [
      "Rotary Kiln and Preheater Tower temperature and draft pressure control",
      "Raw Mill and Cement Grinding Mill feed rate balancing and mill load optimization",
      "Clinker Cooler grate speed control for optimized heat recovery",
      "Material handling conveyor sequencers, pull-cord safety interlocks & zero-speed switches",
      "Air pollution control baghouse pulse-jet cleaning automation",
    ],
    keyTechnologies: [
      "ABB Freelance & System 800xA Process Automation",
      "Rockwell Automation ControlLogix & PowerFlex Drives",
      "Siemens SIMATIC S7-400 / S7-1500 with ET200SP Remote I/O",
      "Heavy-duty Rittal IP65 Stainless & Painted Steel Enclosures",
    ],
    verificationLevel: "Verified Track Record",
    metrics: [
      { label: "Kiln Thermal Fuel Savings", value: "3.5% – 5%" },
      { label: "Grinding Mill Throughput", value: "+8%" },
      { label: "Conveyor Stoppage Reduction", value: "45%" },
    ],
    imageUrl:
      "/images/services/service-05-modernisation.jpg",
  },
  {
    id: "steel-metals",
    name: "Steel & Metals Manufacturing",
    heroHeadline: "High-Speed Synchronization, Furnace Controls & Continuous Casting",
    summary:
      "From blast furnaces and electric arc furnaces to continuous casters and rolling mills, steel production requires high-speed deterministic coordination across heavy electric drives, molten metal ladles, and precision water cooling sprays.",
    operationalChallenges: [
      "Extreme thermal radiation and airborne graphite dust near molten steel vessels",
      "Ultra-fast line speeds requiring millisecond controller task execution to prevent product cobbles",
      "Strict metallurgical temperature profiles in reheating furnaces to ensure consistent tensile strength",
      "Heavy hydraulic servo actuators operating at high hydraulic pressures (up to 250 bar)",
    ],
    automationRole:
      "High-speed PLCs and specialized drive controllers orchestrating hydraulic billet clamping, mould oscillation, secondary cooling water zones, and automated flying shear cutters.",
    architectureHighlight:
      "Isochronous real-time Industrial Ethernet (Profinet IRT / EtherNet/IP CIP Sync) coordinating multi-axis motor drives and hydraulic proportional valves.",
    coreSolutionsDelivered: [
      "Reheating furnace multi-zone temperature control and combustion management",
      "Continuous casting machine mould level control and hydraulic oscillator synchronization",
      "Rolling mill speed matching, looper control, and automated crop shear cutovers",
      "Cooling bed sequencing and automated billet bundle tagging",
      "Water treatment auxiliary plant automation for closed-loop mill cooling",
    ],
    keyTechnologies: [
      "Siemens S7-1500 with TIA Portal Motion & Profinet IRT",
      "Rockwell ControlLogix 5580 with Kinetix / PowerFlex Drives",
      "ABB Industrial Drives & Automation",
      "High-speed optical pyrometers and laser distance measurement sensors",
    ],
    verificationLevel: "Verified Track Record",
    metrics: [
      { label: "Loop Synchronization", value: "< 1 ms" },
      { label: "Furnace Scale Loss Reduction", value: "1.8%" },
      { label: "Mill Cobble Incidents", value: "-60%" },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "chemicals-process",
    name: "Chemicals & Continuous Processing",
    heroHeadline: "Batch Recipe Automation (ISA-88), Exothermic Reaction Safety & Dosing",
    summary:
      "Specialty chemical synthesis, polymer manufacturing, and pharmaceutical intermediates require flexible batch automation, strict recipe management, and automated safety venting for exothermic reactions.",
    operationalChallenges: [
      "Exothermic polymerization reactions that can run away if coolant jacket valves fail to open in seconds",
      "Frequent product changeovers requiring validated recipe management and automated Clean-in-Place (CIP)",
      "Strict electronic audit trails and electronic signature compliance (aligned with FDA 21 CFR Part 11)",
      "Corrosive chemical vapors demanding specialized PTFE-lined or Hastelloy-C wetted instrumentation",
    ],
    automationRole:
      "Batch automation logic compliant with ISA-88 modular standards, allowing process chemists to alter recipe setpoints while maintaining hardcoded safety interlocks.",
    architectureHighlight:
      "ISA-88 compliant batch management software with automated phase state logic (Running, Holding, Aborting, Restarting) tied to an enterprise data historian.",
    coreSolutionsDelivered: [
      "Batch Reactor automation with ISA-88 recipe management",
      "Emergency jacket cooling and nitrogen purge automated safety interlocks",
      "Multi-solvent automated weighing, mass flow dosing, and transfer routing",
      "Clean-in-Place (CIP) automated wash, acid, alkali, and pure water rinse cycles",
      "Batch reporting with electronic batch records (EBR) and batch historian trending",
    ],
    keyTechnologies: [
      "Honeywell Experion PKS Batch Automation",
      "Siemens SIMATIC BATCH & TIA Portal",
      "Rockwell FactoryTalk Batch",
      "Coriolis Mass Flowmeters & HART Smart Positioners",
    ],
    verificationLevel: "Verified Track Record",
    metrics: [
      { label: "Batch Cycle Time", value: "-14%" },
      { label: "Recipe Repeatability", value: "99.9%" },
      { label: "Off-Spec Batch Reduction", value: "85%" },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80",
  },
];

