"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Icons } from "@/components/ui/Icons";
import { INSIGHTS_DATA } from "@/data/insights";

export default function InsightsPage() {
  const [selectedArticleId, setSelectedArticleId] = useState(INSIGHTS_DATA[0].id);

  const activeArticle =
    INSIGHTS_DATA.find((a) => a.id === selectedArticleId) || INSIGHTS_DATA[0];

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-red-600 selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Insights Hero Section - ABB Editorial Format */}
        <section className="relative bg-slate-900 text-white overflow-hidden py-24 sm:py-28 px-4 sm:px-6">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2000&q=80')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/60" />

          <div className="max-w-7xl mx-auto space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600 text-white text-xs font-mono font-bold uppercase tracking-widest">
              Engineering Knowledge & Technical Insights
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight max-w-4xl leading-[1.08]">
              Industrial Automation Whitepapers & Architecture Guides
            </h1>

            <p className="text-base sm:text-lg text-slate-200 max-w-3xl leading-relaxed">
              Authored by senior process control engineers in Pune. We explore architectural trade-offs, Factory Acceptance Testing (FAT) simulation, zero-downtime legacy DCS cutovers, and open BMS energy optimization.
            </p>
          </div>
        </section>

        {/* 2-Column Article Reader Layout - Clean White Editorial Grid */}
        <section className="py-20 px-4 sm:px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left 4 Columns: Article Index */}
            <div className="lg:col-span-4 space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-3">
                Technical Guides Catalog
              </h2>
              {INSIGHTS_DATA.map((article) => {
                const isSelected = selectedArticleId === article.id;
                return (
                  <button
                    key={article.id}
                    onClick={() => setSelectedArticleId(article.id)}
                    className={`w-full p-4 border text-left transition-all duration-200 space-y-2 ${isSelected
                        ? "bg-white border-red-600 shadow-md border-l-4"
                        : "bg-white border-slate-200 hover:border-slate-300"
                      }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="text-red-600 font-bold uppercase">
                        {article.category}
                      </span>
                      <span className="text-slate-400">{article.readTime}</span>
                    </div>

                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-2 leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-[11px] text-slate-500 line-clamp-2 leading-normal">
                      {article.summary}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Right 8 Columns: Active Article Reader */}
            <div className="lg:col-span-8 bg-white border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
              {/* Article Header */}
              <div className="space-y-4 pb-6 border-b border-slate-200">
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <span className="px-2.5 py-0.5 bg-red-50 text-red-600 font-mono font-bold uppercase text-[11px] border border-red-200">
                    {activeArticle.category}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-500 font-mono text-[11px]">{activeArticle.publishedDate}</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-500 font-mono text-[11px]">{activeArticle.readTime}</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-700 font-semibold text-[11px]">By {activeArticle.author}</span>
                </div>

                <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  {activeArticle.title}
                </h1>

                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                  {activeArticle.summary}
                </p>
              </div>

              {/* Key Takeaways Callout Box */}
              <div className="p-6 bg-slate-50 border-l-3 border-red-600 space-y-2">
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold flex items-center gap-2">
                  <Icons.CheckCircle className="w-4 h-4 text-red-600" />
                  <span>Executive Engineering Takeaways</span>
                </h3>
                <ul className="space-y-1.5 pt-1">
                  {activeArticle.keyTakeaways.map((takeaway) => (
                    <li key={takeaway} className="text-xs text-slate-700 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0 mt-1.5" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Article Content Sections */}
              <div className="space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
                {activeArticle.content.map((sec, i) => (
                  <div key={i} className="space-y-2">
                    <h2 className="text-base sm:text-lg font-bold text-slate-900 pt-2 pb-1 border-b border-slate-100">
                      {sec.sectionHeading}
                    </h2>
                    <p className="leading-relaxed">{sec.body}</p>
                  </div>
                ))}
              </div>

              {/* Article Footer & Consultation Link */}
              <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-500">
                  Need custom engineering consultation on this topic?
                </div>
                <a
                  href="/contact"
                  className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition shadow-xs"
                >
                  Contact Our Pune Engineering Hub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
