import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { BusinessStorytelling } from "@/components/home/BusinessStorytelling";
import { CapabilitiesSection } from "@/components/home/CapabilitiesSection";
import { ArchitectureExplorer } from "@/components/home/ArchitectureExplorer";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { TechnologyMatrix } from "@/components/home/TechnologyMatrix";
import { EngineeringWorkflow } from "@/components/home/EngineeringWorkflow";
import { ProjectsHighlight } from "@/components/home/ProjectsHighlight";
import { InsightsPreview } from "@/components/home/InsightsPreview";
import { RfqQuickSection } from "@/components/home/RfqQuickSection";

export const metadata = {
  title: "TecLogos Automation | Precision Industrial Automation & Process Control Engineering",
  description:
    "Turnkey systems integration and detailed engineering across DCS, SCADA, PLC, and BMS. Multi-vendor mastery across Honeywell, Siemens, ABB, Rockwell, and Tridium Niagara. Headquartered in Pune, India.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-red-600 selection:text-white">
      <Navbar />
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero />
        {/* 2. Company Introduction & 6 Core Solution Cards */}
        <BusinessStorytelling />
        {/* 3. Deep Capabilities & Engineering Deliverables */}
        <CapabilitiesSection />
        {/* 4. Industries We Serve */}
        <IndustriesSection />
        {/* 5. How Projects Work (6-Stage Turnkey Workflow) */}
        <EngineeringWorkflow />
        {/* 6. Technology Expertise & Architecture */}
        <TechnologyMatrix />
        <ArchitectureExplorer />
        {/* 7. Featured Project Case Studies */}
        <ProjectsHighlight />
        {/* 8. Engineering Knowledge Centre (Insights / News) */}
        <InsightsPreview />
        {/* 9. Contact CTA & Enquiry */}
        <RfqQuickSection />
      </main>
      <Footer />
    </div>
  );
}
