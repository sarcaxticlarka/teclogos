export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-Time" | "Internship / Trainee";
  experienceRequired: string;
  education: string;
  overview: string;
  keyResponsibilities: string[];
  requiredSkills: string[];
  preferredQualifications: string[];
}

export const CAREERS_DATA: JobPosition[] = [
  {
    id: "sr-automation-engineer",
    title: "Senior Industrial Automation Systems Engineer (DCS / PLC)",
    department: "Process Automation & Integration",
    location: "Pune, Maharashtra, India (Hadapsar HQ)",
    type: "Full-Time",
    experienceRequired: "3 – 6 Years in Industrial Automation",
    education: "B.E. / B.Tech in Instrumentation, Electronics, or Electrical Engineering",
    overview:
      "We are seeking an experienced Systems Engineer to lead the architectural design, software programming, FAT simulation, and on-site commissioning of DCS and PLC systems for power plants, refineries, and continuous process facilities.",
    keyResponsibilities: [
      "Develop control strategies, PID loop algorithms, interlocks, and Cause & Effect matrices.",
      "Program and configure DCS and PLC platforms (Honeywell Experion, Siemens TIA Portal, ABB 800xA, Rockwell Studio 5000).",
      "Design high-performance HMI operator graphics in compliance with ISA-101 standards.",
      "Lead simulated Factory Acceptance Testing (FAT) with client engineers at our Pune workshop.",
      "Deploy to customer sites for cold loop checking, hot commissioning, and SAT certification.",
    ],
    requiredSkills: [
      "Hands-on programming experience with at least two major OEM platforms (Honeywell, Siemens, ABB, or Rockwell).",
      "Deep understanding of industrial communications (Modbus TCP/RTU, Profinet, Profibus DP, Ethernet/IP).",
      "Familiarity with P&IDs, instrument hookups, and electrical loop schematics.",
      "Strong analytical and root-cause troubleshooting mindset under site conditions.",
    ],
    preferredQualifications: [
      "Prior experience with Honeywell C300 or Experion PKS builder is a strong plus.",
      "Knowledge of Safety Instrumented Systems (SIL 2/3) and IEC 61511 functional safety standards.",
    ],
  },
  {
    id: "ei-detailed-design-engineer",
    title: "Electrical & Instrumentation (E&I) Detailed Design Engineer",
    department: "Detailed Engineering Services",
    location: "Pune, Maharashtra, India (Hadapsar HQ)",
    type: "Full-Time",
    experienceRequired: "2 – 5 Years in Detailed Engineering",
    education: "B.E. / Diploma in Electrical or Instrumentation Engineering",
    overview:
      "Responsible for preparing comprehensive E&I deliverable packages for EPC projects, including instrument indexes, I/O lists, cable schedules, loop schematics, and control panel GA drawings.",
    keyResponsibilities: [
      "Prepare Instrument Index, Instrument Datasheets, and DCS/PLC I/O allocation databases.",
      "Generate detailed Loop Drawings, Hook-up Schematics, and Junction Box termination schedules.",
      "Calculate cable cross-sections, voltage drops, and cable tray sizing layouts.",
      "Design control panel General Arrangement (GA) drawings and internal power distribution schematics.",
      "Perform technical review of vendor bids and coordinate with civil/mechanical engineering teams.",
    ],
    requiredSkills: [
      "Proficiency in AutoCAD Electrical or EPLAN Electric P8.",
      "Knowledge of IEC, ISA, and IEEE electrical installation standards.",
      "Mastery of Excel database manipulation for large-scale (2,000+ I/O) project lists.",
    ],
    preferredQualifications: [
      "Experience working with EPC contractors in oil & gas, water treatment, or power sectors.",
      "Familiarity with hazardous area zoning and intrinsic safety barrier calculations.",
    ],
  },
  {
    id: "bms-controls-engineer",
    title: "Building Management Systems (BMS) Controls Specialist",
    department: "Smart Facilities & Building Automation",
    location: "Pune, Maharashtra, India (Hadapsar HQ)",
    type: "Full-Time",
    experienceRequired: "2 – 4 Years in Building Automation",
    education: "Degree / Diploma in Electrical, Electronics, or Mechanical Engineering",
    overview:
      "Join our building automation group to design, integrate, and commission open-protocol BMS platforms, HVAC energy optimization algorithms, and Tridium Niagara N4 supervisory networks for Grade-A commercial facilities.",
    keyResponsibilities: [
      "Engineer and program DDC controllers (Honeywell Spyder, Johnson Controls, Alerton, Distech).",
      "Develop supervisory dashboards, 3D floorplans, and trend logs on Tridium Niagara N4 WebStation.",
      "Configure BACnet/IP, BACnet MS/TP, and Modbus networks for chiller plants and AHUs.",
      "Commission variable frequency drives (VFDs) and electrical energy sub-meters on site.",
    ],
    requiredSkills: [
      "Demonstrated experience with Tridium Niagara AX / N4 Workbench or Honeywell CARE software.",
      "Thorough understanding of commercial HVAC systems (chillers, cooling towers, primary/secondary pumps, AHUs, VAVs).",
      "Network troubleshooting skills using BACnet analyzers and Wireshark.",
    ],
    preferredQualifications: [
      "Tridium Niagara N4 Technical Certification is highly valued.",
      "Experience optimizing chiller plant efficiency (kW/TR).",
    ],
  },
  {
    id: "engineering-intern-trainee",
    title: "Graduate Engineering Trainee / Intern (Instrumentation & Control)",
    department: "Engineering Development Program",
    location: "Pune, Maharashtra, India (Hadapsar HQ)",
    type: "Internship / Trainee",
    experienceRequired: "Fresh Graduate or Final Year Engineering Student",
    education: "B.E. / B.Tech / Diploma in Instrumentation & Control, Electrical, or Electronics",
    overview:
      "A fast-track hands-on apprenticeship program for ambitious engineering graduates seeking direct mentorship from seasoned automation specialists on real-world industrial projects.",
    keyResponsibilities: [
      "Assist senior engineers with PLC/SCADA simulation and I/O testing at our Pune testing bay.",
      "Learn and apply IEC 61131-3 logic programming (Ladder, Function Block, Structured Text).",
      "Support the drafting of electrical schematics and panel layout documentation in AutoCAD.",
      "Participate in panel continuity checking, component labeling, and workshop FAT protocols.",
    ],
    requiredSkills: [
      "Strong academic foundation in process control, electrical circuits, and digital electronics.",
      "Eager, curious mindset with a passion for hands-on industrial engineering and problem-solving.",
      "Basic familiarity with PLC concepts and electrical schematics.",
    ],
    preferredQualifications: [
      "Academic final-year project involving microcontrollers, PLCs, or IoT sensors.",
    ],
  },
];

