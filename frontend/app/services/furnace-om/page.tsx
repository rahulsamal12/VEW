import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Flame, ArrowRight } from "lucide-react";
import { getFurnaceProjectsData } from "@/lib/api";

export default async function FurnaceOMServicePage() {
  const FURNACE_PROJECTS = await getFurnaceProjectsData();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[110px] pb-16 md:pt-[140px] md:pb-20 space-y-16 transition-colors duration-200">
      {/* 01 - HERO (7/5 Editorial Layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        <div className="lg:col-span-7 space-y-8 border-l-[3px] border-[var(--accent-brass)] pl-5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--bg-secondary)] text-[var(--accent-brass)] text-[12px] font-bold uppercase tracking-wider border border-[var(--border-color)] rounded-[8px]">
            <Flame className="w-3.5 h-3.5 text-[var(--accent-brass)]" /> Core
            Engineering Service
          </div>
          <h1 className="text-[34px] sm:text-[40px] md:text-[52px] font-bold text-[var(--text-primary)] leading-[1.1]">
            Furnace Operation & Maintenance
          </h1>
          <p className="text-[16px] md:text-[18px] text-[var(--text-secondary)] font-normal max-w-2xl leading-relaxed">
            Complete metallurgical operation & maintenance services for ferro
            alloy furnaces across various product types including Fe Cr, Si Mn,
            Fe Mn, Fe Si, LC/MC Si Mn, and Pig Iron.
          </p>
        </div>

        <div className="lg:col-span-5 relative w-full aspect-video lg:aspect-[4/3] bg-[var(--bg-secondary)] border border-[var(--border-color)] overflow-hidden rounded-[8px] shadow-sm">
          <Image
            src="/images/vew-furnace-operations.png"
            alt="Furnace Operation and Maintenance"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover object-center opacity-95 hover:scale-[1.02] transition-transform duration-700"
            priority
          />
        </div>
      </div>

      {/* 05 - CAPACITY / EXPERIENCE DATA */}
      <div className="industrial-card p-8 md:p-10 border-[var(--border-subtle)] bg-[var(--bg-secondary)] shadow-sm relative overflow-hidden">
        {/* Removed decorative faint pattern */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 relative z-10">
          <div className="space-y-3">
            <span className="text-[12px] text-[var(--text-secondary)] uppercase tracking-widest font-bold">
              Furnace Capacity Range
            </span>
            <p className="text-[32px] md:text-[40px] font-bold text-[var(--text-primary)] leading-none">
              5 MVA to 24 MVA
            </p>
          </div>
          <div className="space-y-3 border-t md:border-t-0 md:border-l border-[var(--border-color)] pt-6 md:pt-0 md:pl-8">
            <span className="text-[12px] text-[var(--text-secondary)] uppercase tracking-widest font-bold">
              Metallurgical O&M Track Record
            </span>
            <p className="text-[32px] md:text-[40px] font-bold text-[var(--text-primary)] leading-none">
              60+ Furnaces
            </p>
          </div>
          <div className="space-y-3 border-t md:border-t-0 md:border-l border-[var(--border-color)] pt-6 md:pt-0 md:pl-8">
            <span className="text-[12px] text-[var(--text-secondary)] uppercase tracking-widest font-bold">
              Longest Continuous Contract
            </span>
            <p className="text-[32px] md:text-[40px] font-bold text-[var(--accent-brass)] leading-none drop-shadow-sm">
              18+ Years
            </p>
            <span className="text-[12px] text-[var(--text-secondary)] font-bold">
              (Since 2006)
            </span>
          </div>
        </div>
      </div>

      {/* 04 - TECHNICAL / OPERATIONAL INFORMATION */}
      <div className="space-y-8">
        <div className="border-l-[3px] border-[var(--accent-brass)] pl-4">
          <h2 className="text-[34px] md:text-[42px] font-bold text-[var(--text-primary)]">
            Furnace Products & Metallurgical Scope
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-[1px] bg-[var(--border-color)] border border-[var(--border-color)] rounded-[8px] overflow-hidden shadow-sm">
          {["Fe Cr", "Si Mn", "Fe Mn", "Fe Si", "LC/MC Si Mn", "Pig Iron"].map(
            (prod, idx) => (
              <div
                key={idx}
                className="p-6 bg-[var(--bg-surface)] text-center font-bold text-[13px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors uppercase tracking-wider"
              >
                {prod}
              </div>
            ),
          )}
        </div>
      </div>

      {/* 05 - PROJECT DATA */}
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-b border-[var(--border-color)] pb-4">
          <div className="border-l-[3px] border-[var(--accent-brass)] pl-4">
            <h2 className="text-[34px] md:text-[42px] font-bold text-[var(--text-primary)]">
              Representative Furnace O&M Contracts
            </h2>
          </div>
          <Link
            href="/projects/furnace"
            className="industrial-button-secondary text-[12px] uppercase tracking-wider inline-flex items-center gap-2"
          >
            View Full Track Record <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="industrial-table-container shadow-sm border border-[var(--border-color)] rounded-[8px]">
          <table className="industrial-table w-full">
            <thead>
              <tr className="bg-[var(--bg-secondary)] border-b border-[var(--border-color)] text-[var(--text-primary)] uppercase tracking-wider text-[12px] font-bold text-left">
                <th className="px-5 py-4">Client</th>
                <th className="px-5 py-4">Fur Capacity</th>
                <th className="px-5 py-4">Type</th>
                <th className="px-5 py-4">Period</th>
                <th className="px-5 py-4">Process</th>
                <th className="px-5 py-4">Remarks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)] text-[14px]">
              {FURNACE_PROJECTS.slice(0, 6).map((p, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-[var(--bg-secondary)] transition-colors"
                >
                  <td className="px-5 py-4 font-bold text-[var(--text-primary)]">
                    {p.client}
                  </td>
                  <td className="px-5 py-4 text-[var(--accent-brass)] font-bold">
                    {p.furCapacity}
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
            href="/services/mrp"
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:underline uppercase tracking-wider"
          >
            Material Recovery Plants
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
            href="/services/turnkey-projects"
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:underline uppercase tracking-wider"
          >
            Turnkey Execution
          </Link>
        </div>
      </div>
    </div>
  );
}
