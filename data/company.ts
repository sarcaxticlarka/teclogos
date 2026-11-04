export interface ExecutiveLeader {
  name: string;
  role: string;
  designation: string;
  background: string;
  focusAreas: string[];
}

export interface CompanyDossier {
  legalName: string;
  brandName: string;
  cin: string;
  registrationNumber: string;
  dateOfIncorporation: string;
  roc: string;
  status: string;
  capital: {
    authorized: string;
    paidUp: string;
  };
  address: {
    line1: string;
    line2: string;
    landmark: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    full: string;
  };
  contacts: {
    primaryPhone: string;
    secondaryPhone: string;
    adminEmail: string;
    hrEmail: string;
    workingHours: string;
  };
  leadership: ExecutiveLeader[];
  mission: string;
  vision: string;
  coreValues: {
    title: string;
    description: string;
    icon: string;
  }[];
  standardsCompliance: string[];
}

export const COMPANY_DATA: CompanyDossier = {
  legalName: "Teclogos Automation Private Limited",
  brandName: "TecLogos Automation",
  cin: "U74999PN2018PTC180671",
  registrationNumber: "180671",
  dateOfIncorporation: "11 December 2018",
  roc: "RoC-Pune (Registrar of Companies, Maharashtra)",
  status: "Active (Private Limited Company)",
  capital: {
    authorized: "₹1,00,000 INR",
    paidUp: "₹1,00,000 INR",
  },
  address: {
    line1: "Survey No. 94/2A/1/12, Virungla",
    line2: "Behind Annasaheb Magar College, Tukaram Tupe Nagar",
    landmark: "Near Serum Institute, Manjari Budruk",
    area: "Hadapsar",
    city: "Pune",
    state: "Maharashtra",
    pincode: "411028",
    country: "India",
    full: "Survey No. 94/2A/1/12, Virungla, Behind Annasaheb Magar College, Tukaram Tupe Nagar, Near Serum Institute, Manjari Budruk, Hadapsar, Pune, Maharashtra 411028, India",
  },
  contacts: {
    primaryPhone: "+91 8261007671",
    secondaryPhone: "+91 7070777058",
    adminEmail: "Admin@teclogos.in",
    hrEmail: "Hr@teclogos.in",
    workingHours: "Monday – Saturday: 09:00 AM – 06:30 PM IST",
  },
  leadership: [
    {
      name: "Shekhar Balasaheb Girame",
      role: "Director & Chief Executive Officer (CEO)",
      designation: "Co-Founder & Technical Managing Director",
      background:
        "Former automation and control systems engineer at Honeywell with deep technical domain authority across continuous process control, Distributed Control Systems (Experion PKS / TPS), safety instrumented systems, and plant-wide integrations.",
      focusAreas: [
        "Process Automation Strategy",
        "Honeywell & Multi-OEM Systems Engineering",
        "Plant Migration & Turnkey EPC Operations",
        "Safety Instrumented Systems (SIS / SIL)",
      ],
    },
    {
      name: "Rajendra Salunkhe",
      role: "Director",
      designation: "Co-Founder & Director of Operations",
      background:
        "Industrial engineering executive directing business operations, corporate governance, multi-disciplinary engineering project delivery, panel fabrication quality assurance, and commercial client partnerships.",
      focusAreas: [
        "Operational Execution Rigor",
        "Electrical & Instrumentation Project Management",
        "Quality Assurance & Vendor Governance",
        "Client Partnership Management",
      ],
    },
  ],
  mission:
    "To deliver vendor-independent industrial automation and electrical engineering intelligence that maximizes uptime, process safety, and energy efficiency across mission-critical continuous and hybrid industrial facilities.",
  vision:
    "To be India's premier independent systems integration and engineering consultancy firm, bridging field-level instrumentation to enterprise digital operations across global infrastructure and heavy industry.",
  coreValues: [
    {
      title: "Vendor-Agnostic Integrity",
      description:
        "We specify and architect solutions based purely on our clients' technical requirements and total cost of ownership—never constrained by single-OEM sales agendas.",
      icon: "Shield",
    },
    {
      title: "Engineering Precision",
      description:
        "Every single I/O list, loop sheet, functional design document, and panel schematic is engineered to rigorous IEC, ISA, and IEEE standards.",
      icon: "Cpu",
    },
    {
      title: "Zero-Downtime Migration",
      description:
        "We specialize in non-disruptive cutovers of aging legacy DCS and PLC systems, protecting plant availability through comprehensive FAT simulation.",
      icon: "Activity",
    },
    {
      title: "Field-Proven Accountability",
      description:
        "From pre-bid feasibility to cold loop checks and 24/7 shutdown commissioning, our senior engineers stand side-by-side with plant operators on the plant floor.",
      icon: "CheckCircle",
    },
  ],
  standardsCompliance: [
    "IEC 61131-3 (Standard for PLC Programming)",
    "ISA-88 / S88 (Batch Control Standards)",
    "ISA-95 / S95 (Enterprise-Control System Integration)",
    "IEC 61508 / IEC 61511 (Functional Safety & Safety Instrumented Systems)",
    "IEEE & National Electrical Code (NEC) Standards",
    "ISO 9001:2015 Quality Management Framework Alignment",
  ],
};

