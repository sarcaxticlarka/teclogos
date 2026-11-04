"use client";

import React from "react";
import Link from "next/link";
import { Icons } from "@/components/ui/Icons";
import { PROJECTS_DATA } from "@/data/projects";

export function ProjectsHighlight() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-red-600">
              <span className="w-8 h-[2px] bg-red-600 inline-block" />
              <span>Field Execution</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Featured Industrial Project Case Studies
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Real-world engineering challenges solved across critical utilities, petrochemical refining, municipal infrastructure, and large commercial facilities.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-red-600 text-white text-xs font-bold uppercase tracking-wider transition shrink-0"
          >
            <span>View All Case Studies</span>
            <Icons.ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Featured Projects Grid - ABB Editorial Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.slice(0, 3).map((project) => (
            <div
              key={project.id}
              className="editorial-card flex flex-col justify-between group"
            >
              <div>
                <div
                  className="h-56 w-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${project.imageUrl}')`,
                  }}
                />
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-100 text-slate-700 font-bold uppercase">
                      {project.clientSector.split("&")[0]}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      {project.location}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {project.scopeSummary}
                  </p>

                  {/* Outcome Metrics Strip */}
                  <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-100">
                    {project.measurableOutcomes.slice(0, 2).map((o) => (
                      <div
                        key={o.metric}
                        className="p-3 bg-slate-50 border border-slate-200 text-left"
                      >
                        <div className="text-lg font-black font-mono text-slate-900">
                          {o.metric}
                        </div>
                        <div className="text-[10px] text-slate-600 line-clamp-1">
                          {o.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technologies footer */}
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-[11px] font-mono text-slate-500 truncate max-w-[200px]">
                  {project.technologiesDeployed[0]}
                </span>
                <Link
                  href={`/projects#${project.id}`}
                  className="text-red-600 hover:text-red-700 font-bold flex items-center gap-1 transition text-xs uppercase tracking-wider"
                >
                  <span>Review Case</span>
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
