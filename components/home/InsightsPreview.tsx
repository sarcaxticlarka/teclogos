"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icons } from "@/components/ui/Icons";
import { INSIGHTS_DATA } from "@/data/insights";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function InsightsPreview() {
  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-4 sm:px-6 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header: ABB Editorial Format */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-red-600">
              <span className="w-8 h-[2px] bg-red-600 inline-block" />
              <span>Engineering Knowledge Centre</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Practical Automation Knowledge for Plant Leaders
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Clear, practical technical explainers designed to help plant directors, EPC project managers, and engineers make informed control system decisions.
            </p>
          </div>

          <Link
            href="/insights"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-red-600 text-white text-xs font-bold uppercase tracking-wider transition shrink-0"
          >
            <span>View All Engineering Articles</span>
            <Icons.ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Core Articles Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INSIGHTS_DATA.slice(0, 3).map((article) => (
            <div
              key={article.id}
              className="bg-white border border-slate-200 p-6 sm:p-8 flex flex-col justify-between group hover:border-slate-300 transition shadow-2xs"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span className="text-red-600 font-bold uppercase text-[10px]">
                    {article.category}
                  </span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {article.summary}
                </p>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="font-medium text-slate-700">{article.author}</span>
                  <span>{article.publishedDate}</span>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  href={`/insights#${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 group-hover:text-red-700 transition"
                >
                  <span>Read Technical Explainer</span>
                  <Icons.ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
