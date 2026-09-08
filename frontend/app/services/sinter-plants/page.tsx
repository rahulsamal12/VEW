import React from "react";
import Image from "next/image";
import { SITE_IMAGES } from "@/lib/images";
import Link from "next/link";
import { Factory, ArrowRight } from "lucide-react";
import { SINTER_PROJECTS } from "@/lib/data";

export default function SinterPlantsServicePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 transition-colors duration-200">
      
      {/* 01 - HERO (7/5 Editorial Layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--bg-secondary)] text-[var(--text-secondary)] text-[11px] font-bold uppercase tracking-widest border border-[var(--border-color)]">
            <Factory className="w-3.5 h-3.5 text-[var(--accent-brass)]" /> Turnkey Beneficiation
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight tracking-tight">
            Sinter Plants
          </h1>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl">
            Full turnkey execution of Sinter Plants for Iron and Manganese designed specifically for utilising fine stockpiles accumulated over years.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[var(--border-subtle)]">
            <div className="space-y-1">
              <span className="text-[11px] text-[var(--text-secondary)] uppercase tracking-widest font-bold">Plant Capacity Range</span>
              <p className="text-2xl font-bold text-[var(--text-primary)]">40 TPD to 200 TPD</p>
            </div>
            <div className="space-y-1">
              <span className="text-[11px] text-[var(--text-secondary)] uppercase tracking-widest font-bold">Execution Model</span>
              <p className="text-2xl font-bold text-[var(--accent-brass)]">Full Turnkey EPC</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative w-full aspect-video lg:aspect-[4/3] bg-[var(--bg-secondary)] border border-[var(--border-color)] overflow-hidden shadow-sm">
          <Image 
            src={SITE_IMAGES.sinter} 
            alt="Sinter Plant Manufacturing Environment" 
            fill 
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover object-center opacity-90 hover:opacity-100 transition-opacity duration-500" 
            priority
          />
        </div>
      </div>

      {/* 05 - PROJECT DATA */}
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">Sinter Projects Portfolio</h2>
          <Link href="/projects/sinter" className="industrial-button-secondary inline-flex items-center gap-2">
            View All Sinter Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="industrial-table-container">
          <table className="industrial-table">
            <thead>
              <tr>
                <th>Client</th>
                <th>Capacity</th>
                <th>Type</th>
                <th>Period</th>
                <th>Process</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              {SINTER_PROJECTS.map((p, idx) => (
                <tr key={idx}>
                  <td className="font-semibold text-[var(--text-primary)]">{p.client}</td>
                  <td className="text-[var(--accent-brass)] font-semibold">{p.capacity}</td>
                  <td>{p.type}</td>
                  <td>{p.period}</td>
                  <td>{p.process}</td>
                  <td className="text-xs">{p.remarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 08 - RELATED SERVICES */}
      <div className="pt-12 border-t border-[var(--border-color)]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm font-semibold">
          <span className="text-[11px] text-[var(--text-muted)] uppercase tracking-widest mr-4">Related Engineering Capabilities:</span>
          <Link href="/services/furnace-om" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:underline">Furnace O&M</Link>
          <span className="text-[var(--border-color)] hidden sm:inline">|</span>
          <Link href="/services/mrp" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:underline">Material Recovery Plants</Link>
          <span className="text-[var(--border-color)] hidden sm:inline">|</span>
          <Link href="/services/beneficiary-units" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:underline">Beneficiation</Link>
        </div>
      </div>

    </div>
  );
}
