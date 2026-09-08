import React from 'react';
import Image from 'next/image';
import { SITE_IMAGES } from '@/lib/images';
import Link from 'next/link';
import { Layers, ArrowRight } from 'lucide-react';
import { MRP_PROJECTS } from '@/lib/data';

export default function MRPServicePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 transition-colors duration-200">
      
      {/* 01 - HERO (5/7 Image Left + Content Right Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 relative w-full aspect-video lg:aspect-square bg-[var(--bg-secondary)] border border-[var(--border-color)] overflow-hidden shadow-sm order-2 lg:order-1">
          <Image 
            src={SITE_IMAGES.mrp} 
            alt="Metal Recovery Plant Processing" 
            fill 
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover object-center opacity-90 hover:opacity-100 transition-opacity duration-500" 
            priority
          />
        </div>
        
        <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--bg-secondary)] text-[var(--text-secondary)] text-[11px] font-bold uppercase tracking-widest border border-[var(--border-color)]">
            <Layers className="w-3.5 h-3.5 text-[var(--accent-brass)]" /> Resource Recovery Capability
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight tracking-tight">
            Metal Recovery Plants (MRP)
          </h1>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            Metal Recovery Plant capabilities spanning Design, Manufacturing, Supply, Installation, Commissioning, Operation, and Maintenance. The company has proven experience competing with MNCs in MRP large-scale project execution.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[var(--border-subtle)]">
            <div className="space-y-1">
              <span className="text-[11px] text-[var(--text-secondary)] uppercase tracking-widest font-bold">Capacity Range</span>
              <p className="text-2xl font-bold text-[var(--text-primary)]">50 TPD to 1500 TPD</p>
            </div>
            <div className="space-y-1">
              <span className="text-[11px] text-[var(--text-secondary)] uppercase tracking-widest font-bold">Executed Projects</span>
              <p className="text-2xl font-bold text-[var(--accent-brass)]">100+ MRP Projects</p>
            </div>
          </div>
        </div>
      </div>

      {/* 06 - PROCESS / WORKFLOW */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">End-to-End Execution Flow</h2>
        <div className="flex flex-col md:flex-row border border-[var(--border-color)] divide-y md:divide-y-0 md:divide-x divide-[var(--border-color)] bg-[var(--bg-surface)]">
          {['Design', 'Manufacturing', 'Supply', 'Installation', 'Commissioning', 'Operation', 'Maintenance'].map((cap, i) => (
            <div key={i} className="flex-1 p-4 text-center group hover:bg-[var(--bg-secondary)] transition-colors">
              <span className="block text-[10px] text-[var(--text-muted)] font-bold mb-1">0{i+1}</span>
              <span className="block text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider group-hover:text-[var(--accent-brass)] transition-colors">{cap}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 05 - PROJECT DATA */}
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">MRP Projects Portfolio</h2>
          <Link href="/projects/mrp" className="industrial-button-secondary inline-flex items-center gap-2">
            View All MRP Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="industrial-table-container">
          <table className="industrial-table">
            <thead>
              <tr>
                <th>Client</th>
                <th>Scope</th>
                <th>Type</th>
                <th>Period</th>
                <th>Process</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              {MRP_PROJECTS.slice(0, 6).map((p, idx) => (
                <tr key={idx}>
                  <td className="font-semibold text-[var(--text-primary)]">{p.client}</td>
                  <td className="text-[var(--accent-brass)] font-semibold">{p.scope}</td>
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
          <Link href="/services/sinter-plants" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:underline">Sinter Plants</Link>
          <span className="text-[var(--border-color)] hidden sm:inline">|</span>
          <Link href="/services/fabrication-erection" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:underline">Fabrication & Erection</Link>
        </div>
      </div>

    </div>
  );
}
