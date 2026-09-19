import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Flame, ArrowRight } from 'lucide-react';
import { getFurnaceProjectsData } from '@/lib/api';

export default async function FurnaceOMServicePage() {
  const FURNACE_PROJECTS = await getFurnaceProjectsData();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 transition-colors duration-200">
      
      {/* 01 - HERO (7/5 Editorial Layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--bg-secondary)] text-[var(--text-secondary)] text-[11px] font-bold uppercase tracking-widest border border-[var(--border-color)]">
            <Flame className="w-3.5 h-3.5 text-[var(--accent-brass)]" /> Core Engineering Service
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight tracking-tight">
            Furnace Operation & Maintenance
          </h1>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl leading-relaxed">
            Complete metallurgical operation & maintenance services for ferro alloy furnaces across various product types including Fe Cr, Si Mn, Fe Mn, Fe Si, LC/MC Si Mn, and Pig Iron.
          </p>
        </div>

        <div className="lg:col-span-5 relative w-full aspect-video lg:aspect-[4/3] bg-[var(--bg-secondary)] border border-[var(--border-color)] overflow-hidden shadow-sm">
          <Image 
            src="/images/vew-furnace-operations.png" 
            alt="Furnace Operation and Maintenance" 
            fill 
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover object-center opacity-90 hover:opacity-100 transition-opacity duration-500" 
            priority
          />
        </div>
      </div>

      {/* 05 - CAPACITY / EXPERIENCE DATA */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-y border-[var(--border-subtle)]">
        <div className="space-y-2">
          <span className="text-[11px] text-[var(--text-secondary)] uppercase tracking-widest font-bold">Furnace Capacity Range</span>
          <p className="text-3xl font-bold text-[var(--text-primary)]">5 MVA to 24 MVA</p>
        </div>
        <div className="space-y-2 border-l-0 md:border-l border-[var(--border-subtle)] md:pl-8">
          <span className="text-[11px] text-[var(--text-secondary)] uppercase tracking-widest font-bold">Metallurgical O&M Track Record</span>
          <p className="text-3xl font-bold text-[var(--text-primary)]">60+ Furnaces</p>
        </div>
        <div className="space-y-2 border-l-0 md:border-l border-[var(--border-subtle)] md:pl-8">
          <span className="text-[11px] text-[var(--text-secondary)] uppercase tracking-widest font-bold">Longest Continuous Contract</span>
          <p className="text-3xl font-bold text-[var(--accent-brass)]">18+ Years (Since 2006)</p>
        </div>
      </div>

      {/* 04 - TECHNICAL / OPERATIONAL INFORMATION */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">Furnace Products & Metallurgical Scope</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-0 border-y border-[var(--border-color)] divide-x divide-y divide-[var(--border-color)]">
          {['Fe Cr', 'Si Mn', 'Fe Mn', 'Fe Si', 'LC/MC Si Mn', 'Pig Iron'].map((prod, idx) => (
            <div key={idx} className="p-6 bg-[var(--bg-surface)] text-center font-bold text-sm text-[var(--text-secondary)] hover:text-[var(--accent-brass)] hover:bg-[var(--bg-secondary)] transition-colors">
              {prod}
            </div>
          ))}
        </div>
      </div>

      {/* 05 - PROJECT DATA */}
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">Representative Furnace O&M Contracts</h2>
          <Link href="/projects/furnace" className="industrial-button-secondary inline-flex items-center gap-2">
            View Full Track Record <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="industrial-table-container">
          <table className="industrial-table">
            <thead>
              <tr>
                <th>Client</th>
                <th>Fur Capacity</th>
                <th>Type</th>
                <th>Period</th>
                <th>Process</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              {FURNACE_PROJECTS.slice(0, 6).map((p, idx) => (
                <tr key={idx}>
                  <td className="font-semibold text-[var(--text-primary)]">{p.client}</td>
                  <td className="text-[var(--accent-brass)] font-semibold">{p.furCapacity}</td>
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
          <Link href="/services/mrp" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:underline">Material Recovery Plants</Link>
          <span className="text-[var(--border-color)] hidden sm:inline">|</span>
          <Link href="/services/sinter-plants" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:underline">Sinter Plants</Link>
          <span className="text-[var(--border-color)] hidden sm:inline">|</span>
          <Link href="/services/turnkey-projects" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:underline">Turnkey Execution</Link>
        </div>
      </div>

    </div>
  );
}
