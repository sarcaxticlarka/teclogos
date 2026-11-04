import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://teclogos.in"),
  title: {
    default: "TecLogos Automation | Industrial Automation & Process Control Engineering",
    template: "%s | TecLogos Automation",
  },
  description:
    "Enterprise-grade industrial automation, DCS/SCADA/PLC systems integration, building management systems (BMS), and detailed electrical & instrumentation (E&I) engineering. Multi-OEM expertise across Honeywell, Siemens, ABB, and Rockwell.",
  keywords: [
    "Industrial Automation",
    "Process Automation Pune",
    "DCS Systems Integration",
    "Honeywell Experion PKS",
    "Siemens TIA Portal",
    "ABB System 800xA",
    "Rockwell Automation Allen Bradley",
    "Building Management Systems",
    "Tridium Niagara N4",
    "Electrical and Instrumentation Engineering",
    "Turnkey Automation EPC",
    "Factory Acceptance Testing FAT",
    "TecLogos Automation",
  ],
  authors: [{ name: "TecLogos Automation Private Limited" }],
  creator: "TecLogos Automation Pvt. Ltd.",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://teclogos.in",
    siteName: "TecLogos Automation",
    title: "TecLogos Automation | Industrial Automation & Process Control Engineering",
    description:
      "Enterprise industrial automation, DCS/SCADA/PLC integration, building management systems (BMS), and detailed electrical & instrumentation (E&I) engineering.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TecLogos Automation | Industrial Automation & Process Control Engineering",
    description:
      "Enterprise industrial automation, DCS/SCADA/PLC systems integration, and detailed E&I engineering. Pune, India.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.png", sizes: "256x256", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-sans selection:bg-red-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
