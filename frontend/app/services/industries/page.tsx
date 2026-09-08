import React from 'react';
import Link from 'next/link';
import { Flame, Layers, Building2 } from 'lucide-react';

export default function IndustriesServedPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 transition-colors duration-200">
      
      {/* 01 - HERO (Text-Driven Editorial) */}
      <div className="max-w-4xl space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--bg-secondary)] text-[var(--text-secondary)] text-[11px] font-bold uppercase tracking-widest border border-[var(--border-color)]">
          <Layers className="w-3.5 h-3.5 text-[var(--accent-brass)]" /> Sectors
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight tracking-tight">
          Industries Served
        </h1>
        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl leading-relaxed">
          Venkateswar Engg Works Pvt. Ltd. delivers specialized engineering, operation, and maintenance solutions across three primary industry domains.
        </p>
      </div>

      {/* 04 - TECHNICAL / OPERATIONAL INFORMATION */}
      <div className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-y border-[var(--border-color)] divide-y lg:divide-y-0 lg:divide-x divide-[var(--border-color)] bg-[var(--bg-surface)]">
          
          <div className="p-8 space-y-6 hover:bg-[var(--bg-secondary)] transition-colors">
            <div className="w-12 h-12 flex items-center justify-center bg-[var(--bg-secondary)] border border-[var(--border-color)]">
              <Flame className="w-5 h-5 text-[var(--accent-brass)]" />
            </div>
            <h2 className="text-xl font-bold text-[var(--text-primary)]">Ferro Alloys Sector</h2>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Full O&M, metal recovery, and sinter execution for product lines including:
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {['Fe Cr', 'Si Mn', 'Fe Mn', 'Fe Si', 'LC/MC Si Mn', 'Pig Iron'].map((p, i) => (
                <span key={i} className="text-[11px] px-2.5 py-1 bg-[var(--bg-surface)] text-[var(--text-primary)] font-bold uppercase tracking-wider border border-[var(--border-color)]">
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div className="p-8 space-y-6 hover:bg-[var(--bg-secondary)] transition-colors">
            <div className="w-12 h-12 flex items-center justify-center bg-[var(--bg-secondary)] border border-[var(--border-color)]">
              <Layers className="w-5 h-5 text-[var(--accent-brass)]" />
            </div>
            <h2 className="text-xl font-bold text-[var(--text-primary)]">Mining & Ore Processing</h2>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Manganese Ore extraction, crushing, washing, and beneficiation operations upgrading Manganese (26% → 40%) and Iron (40% → 70%).
            </p>
          </div>

          <div className="p-8 space-y-6 hover:bg-[var(--bg-secondary)] transition-colors">
            <div className="w-12 h-12 flex items-center justify-center bg-[var(--bg-secondary)] border border-[var(--border-color)]">
              <Building2 className="w-5 h-5 text-[var(--accent-brass)]" />
            </div>
            <h2 className="text-xl font-bold text-[var(--text-primary)]">Government & PSU Sector</h2>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Turnkey project execution and long-term operational partnerships for state government enterprises such as IFCAL (Govt. of Odisha).
            </p>
          </div>

        </div>
      </div>

      {/* 08 - RELATED SERVICES */}
      <div className="pt-12 border-t border-[var(--border-color)]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm font-semibold">
          <span className="text-[11px] text-[var(--text-muted)] uppercase tracking-widest mr-4">Related Engineering Capabilities:</span>
          <Link href="/services/furnace-om" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:underline">Furnace O&M</Link>
          <span className="text-[var(--border-color)] hidden sm:inline">|</span>
          <Link href="/services/turnkey-projects" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:underline">Turnkey Execution</Link>
          <span className="text-[var(--border-color)] hidden sm:inline">|</span>
          <Link href="/services/mrp" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:underline">Material Recovery</Link>
        </div>
      </div>

    </div>
  );
}
