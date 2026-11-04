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
        <Hero />
        <BusinessStorytelling />
        <CapabilitiesSection />
        <ArchitectureExplorer />
        <IndustriesSection />
        <TechnologyMatrix />
        <EngineeringWorkflow />
        <ProjectsHighlight />
        <RfqQuickSection />
      </main>
      <Footer />
    </div>
  );
}
