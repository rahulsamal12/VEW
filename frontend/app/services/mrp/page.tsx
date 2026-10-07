import React from "react";
import Image from "next/image";
import { getSiteImages } from "@/lib/api";
import Link from "next/link";
import { Layers, ArrowRight } from "lucide-react";
import { getMRPProjectsData } from "@/lib/api";

export default async function MRPServicePage() {
  const SITE_IMAGES = await getSiteImages();
  const MRP_PROJECTS = await getMRPProjectsData();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[110px] pb-16 md:pt-[140px] md:pb-20 space-y-16 transition-colors duration-200">
      {/* 01 - HERO (5/7 Image Left + Content Right Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        <div className="lg:col-span-5 relative w-full aspect-video lg:aspect-square bg-[var(--bg-secondary)] border border-[var(--border-color)] overflow-hidden shadow-sm order-2 lg:order-1 rounded-[8px]">
          <Image
            src={SITE_IMAGES.mrp}
            alt="Metal Recovery Plant Processing"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover object-center opacity-95 hover:scale-[1.02] transition-transform duration-700"
            priority
          />
        </div>

        <div className="lg:col-span-7 space-y-8 order-1 lg:order-2 lg:pl-6 border-l-0 lg:border-l-[3px] border-[var(--accent-brass)]">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--bg-secondary)] text-[var(--accent-brass)] text-[12px] font-bold uppercase tracking-wider border border-[var(--border-color)] rounded-[8px]">
            <Layers className="w-3.5 h-3.5 text-[var(--accent-brass)]" />{" "}
            Resource Recovery Capability
          </div>
          <h1 className="text-[34px] sm:text-[40px] md:text-[52px] font-bold text-[var(--text-primary)] leading-[1.1]">
            Metal Recovery Plants (MRP)
          </h1>
          <p className="text-[16px] md:text-[18px] text-[var(--text-secondary)] leading-relaxed font-medium">
            Metal Recovery Plant capabilities spanning Design, Manufacturing,
            Supply, Installation, Commissioning, Operation, and Maintenance. The
            company has proven experience competing with MNCs in MRP large-scale
            project execution.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-[var(--border-subtle)]">
            <div className="space-y-2">
              <span className="text-[12px] text-[var(--text-secondary)] uppercase tracking-widest font-bold block">
                Capacity Range
              </span>
              <p className="text-[28px] md:text-[32px] font-bold text-[var(--text-primary)]">
                50 TPD to 1500 TPD
              </p>
            </div>
            <div className="space-y-2 border-l border-[var(--border-color)] pl-6">
              <span className="text-[12px] text-[var(--text-secondary)] uppercase tracking-widest font-bold block">
                Executed Projects
              </span>
              <p className="text-[28px] md:text-[32px] font-bold text-[var(--accent-brass)]">
                100+ MRP Projects
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 06 - PROCESS / WORKFLOW */}
      <div className="space-y-6">
        <div className="border-l-[3px] border-[var(--accent-brass)] pl-4">
          <h2 className="text-[34px] md:text-[42px] font-bold text-[var(--text-primary)]">
            End-to-End Execution Flow
          </h2>
        </div>
        <div className="flex flex-col md:flex-row border border-[var(--border-color)] divide-y md:divide-y-0 md:divide-x divide-[var(--border-color)] bg-[var(--bg-surface)] rounded-[8px] overflow-hidden shadow-sm">
          {[
            "Design",
            "Manufacturing",
            "Supply",
            "Installation",
            "Commissioning",
            "Operation",
            "Maintenance",
          ].map((cap, i) => (
            <div
              key={i}
              className="flex-1 p-5 text-center group hover:bg-[var(--bg-secondary)] transition-colors"
            >
              <span className="block text-[12px] text-[var(--text-muted)] font-bold mb-2">
                0{i + 1}
              </span>
              <span className="block text-[12px] font-bold text-[var(--text-primary)] uppercase tracking-wider group-hover:text-[var(--accent-brass)] transition-colors">
                {cap}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 05 - PROJECT DATA */}
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-b border-[var(--border-color)] pb-4">
          <div className="border-l-[3px] border-[var(--accent-brass)] pl-4">
            <h2 className="text-[34px] md:text-[42px] font-bold text-[var(--text-primary)]">
              MRP Projects Portfolio
            </h2>
          </div>
          <Link
            href="/projects/mrp"
            className="industrial-button-secondary text-[12px] uppercase tracking-wider inline-flex items-center gap-2"
          >
            View All MRP Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="industrial-table-container shadow-sm border border-[var(--border-color)] rounded-[8px]">
          <table className="industrial-table w-full">
            <thead>
              <tr className="bg-[var(--bg-secondary)] border-b border-[var(--border-color)] text-[var(--text-primary)] uppercase tracking-wider text-[12px] font-bold text-left">
                <th className="px-5 py-4">Client</th>
                <th className="px-5 py-4">Scope</th>
                <th className="px-5 py-4">Type</th>
                <th className="px-5 py-4">Period</th>
                <th className="px-5 py-4">Process</th>
                <th className="px-5 py-4">Remarks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)] text-[14px]">
              {MRP_PROJECTS.slice(0, 6).map((p, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-[var(--bg-secondary)] transition-colors"
                >
                  <td className="px-5 py-4 font-bold text-[var(--text-primary)]">
                    {p.client}
                  </td>
                  <td className="px-5 py-4 text-[var(--accent-brass)] font-bold">
                    {p.scope}
                  </td>
                  <td className="px-5 py-4 font-medium text-[var(--text-secondary)]">
                    {p.type}
                  </td>
                  <td className="px-5 py-4 font-medium text-[var(--text-secondary)]">
                    {p.period}
                  </td>
                  <td className="px-5 py-4 font-medium text-[var(--text-secondary)]">
                    {p.process}
                  </td>
                  <td className="px-5 py-4 text-[13px] text-[var(--text-secondary)]">
                    {p.remarks}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 08 - RELATED SERVICES */}
      <div className="pt-12 border-t border-[var(--border-color)]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-[12px] font-bold">
          <span className="text-[12px] text-[var(--text-muted)] uppercase tracking-widest mr-4">
            Related Engineering Capabilities:
          </span>
          <Link
            href="/services/furnace-om"
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:underline uppercase tracking-wider"
          >
            Furnace O&M
          </Link>
          <span className="text-[var(--border-color)] hidden sm:inline">|</span>
          <Link
            href="/services/sinter-plants"
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:underline uppercase tracking-wider"
          >
            Sinter Plants
          </Link>
          <span className="text-[var(--border-color)] hidden sm:inline">|</span>
          <Link
            href="/services/fabrication-erection"
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:underline uppercase tracking-wider"
          >
            Fabrication & Erection
          </Link>
        </div>
      </div>
    </div>
  );
}
