import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_IMAGES } from '@/lib/images';
import { Factory } from 'lucide-react';

export default function TurnkeyProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 transition-colors duration-200">
      
      {/* 01 - HERO (7/5 Editorial Layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--bg-secondary)] text-[var(--text-secondary)] text-[11px] font-bold uppercase tracking-widest border border-[var(--border-color)]">
            <Factory className="w-3.5 h-3.5 text-[var(--accent-brass)]" /> EPC Delivery
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight tracking-tight">
            Turnkey Project Execution
          </h1>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl">
            Over 45+ MRP/Sinter turnkey projects delivered with end-to-end execution. We manage the complete lifecycle including design, manufacturing, supply, installation, and commissioning.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[var(--border-subtle)]">
            <div className="space-y-1">
              <span className="text-[11px] text-[var(--text-secondary)] uppercase tracking-widest font-bold">Total Turnkey Projects</span>
              <p className="text-2xl font-bold text-[var(--accent-brass)]">45+ Projects</p>
            </div>
            <div className="space-y-1">
              <span className="text-[11px] text-[var(--text-secondary)] uppercase tracking-widest font-bold">Government Partner</span>
              <p className="text-2xl font-bold text-[var(--text-primary)]">IFCAL</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative w-full aspect-video lg:aspect-[4/3] bg-[var(--bg-secondary)] border border-[var(--border-color)] overflow-hidden shadow-sm">
          <Image 
            src={SITE_IMAGES.projects} 
            alt="Turnkey Project Construction" 
            fill 
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover object-center opacity-90 hover:opacity-100 transition-opacity duration-500" 
            priority
          />
        </div>
      </div>

      {/* 04 - EXECUTION SCOPE */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">Comprehensive Execution Scope</h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-0 border-y border-[var(--border-color)] divide-x divide-y sm:divide-y-0 divide-[var(--border-color)] bg-[var(--bg-surface)]">
          {['Design & Engineering', 'Manufacturing', 'Global Supply', 'Installation', 'Commissioning'].map((step, idx) => (
            <div key={idx} className="p-6 text-center space-y-2 hover:bg-[var(--bg-secondary)] transition-colors">
              <span className="block text-[10px] text-[var(--text-muted)] font-bold">PHASE 0{idx+1}</span>
              <span className="block font-bold text-xs text-[var(--text-primary)] uppercase tracking-wider">{step}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 08 - RELATED SERVICES */}
      <div className="pt-12 border-t border-[var(--border-color)]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm font-semibold">
          <span className="text-[11px] text-[var(--text-muted)] uppercase tracking-widest mr-4">Related Engineering Capabilities:</span>
          <Link href="/services/fabrication-erection" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:underline">Fabrication & Erection</Link>
          <span className="text-[var(--border-color)] hidden sm:inline">|</span>
          <Link href="/services/boot-boo" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:underline">BOOT/BOO Models</Link>
          <span className="text-[var(--border-color)] hidden sm:inline">|</span>
          <Link href="/services/mrp" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:underline">Material Recovery Plants</Link>
        </div>
      </div>

    </div>
  );
}
