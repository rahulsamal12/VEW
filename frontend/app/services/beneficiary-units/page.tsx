import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_IMAGES } from '@/lib/images';
import { Layers } from 'lucide-react';

export default function BeneficiaryUnitsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 transition-colors duration-200">
      
      {/* 01 - HERO (7/5 Editorial Layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--bg-secondary)] text-[var(--text-secondary)] text-[11px] font-bold uppercase tracking-widest border border-[var(--border-color)]">
            <Layers className="w-3.5 h-3.5 text-[var(--accent-brass)]" /> Ore Upgradation
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight tracking-tight">
            Beneficiary Units
          </h1>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl">
            Beneficiation operations focused on upgrading low-grade ore stockpiles into high-value furnace feed. We maximize recovery through optimized metallurgical processes.
          </p>
          
          <div className="pt-4 border-t border-[var(--border-subtle)] space-y-2">
            <span className="text-[11px] text-[var(--text-secondary)] uppercase tracking-widest font-bold block">Processing Capacity</span>
            <p className="text-2xl font-bold text-[var(--text-primary)]">20 TPH onwards</p>
          </div>
        </div>

        <div className="lg:col-span-5 relative w-full aspect-video lg:aspect-[4/3] bg-[var(--bg-secondary)] border border-[var(--border-color)] overflow-hidden shadow-sm">
          <Image 
            src={SITE_IMAGES.mrp} 
            alt="Beneficiation and Ore Upgradation" 
            fill 
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover object-center opacity-90 hover:opacity-100 transition-opacity duration-500" 
            priority
          />
        </div>
      </div>

      {/* 04 - TECHNICAL / OPERATIONAL INFORMATION */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">Grade Upgrade Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 border border-[var(--border-color)] bg-[var(--bg-surface)] space-y-4">
            <span className="text-[11px] font-bold text-[var(--text-secondary)] uppercase tracking-widest block">Manganese Ore</span>
            <h3 className="text-3xl font-bold text-[var(--text-primary)]">26% <span className="text-[var(--text-muted)]">→</span> 40% <span className="text-lg text-[var(--accent-brass)]">Mn</span></h3>
            <p className="text-sm text-[var(--text-secondary)]">Upgrading low-grade manganese ore from 26% to high-value 40% Mn content.</p>
          </div>
          <div className="p-8 border border-[var(--border-color)] bg-[var(--bg-surface)] space-y-4">
            <span className="text-[11px] font-bold text-[var(--text-secondary)] uppercase tracking-widest block">Iron Ore</span>
            <h3 className="text-3xl font-bold text-[var(--text-primary)]">40% <span className="text-[var(--text-muted)]">→</span> 70% <span className="text-lg text-[var(--text-muted)]">Fe</span></h3>
            <p className="text-sm text-[var(--text-secondary)]">Upgrading low-grade iron ore from 40% to high-value 70% Fe content.</p>
          </div>
        </div>
      </div>

      {/* 06 - PROCESS / WORKFLOW */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">Beneficiation Technology</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-y border-[var(--border-color)] divide-y sm:divide-y-0 sm:divide-x divide-[var(--border-color)]">
          <div className="py-8 sm:pr-8 space-y-2 bg-[var(--bg-surface)]">
            <span className="text-[11px] text-[var(--text-secondary)] uppercase tracking-widest font-bold">Process Stages</span>
            <p className="text-base font-bold text-[var(--text-primary)]">Crushing, Multiple stage washing, Jigging</p>
          </div>
          <div className="py-8 sm:pl-8 space-y-2 bg-[var(--bg-surface)]">
            <span className="text-[11px] text-[var(--text-secondary)] uppercase tracking-widest font-bold">Diaphragm Jig Technology</span>
            <p className="text-base font-bold text-[var(--accent-brass)]">Micro-fines recovery via middle gates & stainless wedge screens</p>
          </div>
        </div>
      </div>

      {/* 08 - RELATED SERVICES */}
      <div className="pt-12 border-t border-[var(--border-color)]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm font-semibold">
          <span className="text-[11px] text-[var(--text-muted)] uppercase tracking-widest mr-4">Related Engineering Capabilities:</span>
          <Link href="/services/sinter-plants" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:underline">Sinter Plants</Link>
          <span className="text-[var(--border-color)] hidden sm:inline">|</span>
          <Link href="/services/mrp" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:underline">Material Recovery Plants</Link>
        </div>
      </div>

    </div>
  );
}
