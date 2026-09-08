import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_IMAGES } from '@/lib/images';
import { Wrench } from 'lucide-react';

export default function FabricationErectionPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 transition-colors duration-200">
      
      {/* 01 - HERO (12-Col Constrained Top Visual) */}
      <div className="space-y-8">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--bg-secondary)] text-[var(--text-secondary)] text-[11px] font-bold uppercase tracking-widest border border-[var(--border-color)]">
            <Wrench className="w-3.5 h-3.5 text-[var(--accent-brass)]" /> Heavy Engineering
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight tracking-tight">
            Fabrication & Erection
          </h1>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            Over 8,500+ MT of structural fabrication and plant erection executed across major metallurgical facilities. We provide robust engineering structures tailored for heavy industrial operations.
          </p>
        </div>

        <div className="relative w-full max-w-5xl aspect-video bg-[var(--bg-secondary)] border border-[var(--border-color)] overflow-hidden shadow-sm">
          <Image 
            src={SITE_IMAGES.projects} 
            alt="Structural Fabrication and Erection" 
            fill 
            sizes="(max-width: 1024px) 100vw, 100vw"
            className="object-cover object-center opacity-90 hover:opacity-100 transition-opacity duration-500" 
            priority
          />
        </div>
      </div>

      {/* 05 - PROJECT DATA / CAPACITY */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">Major Fabrication Contracts</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-y border-[var(--border-color)] divide-y md:divide-y-0 md:divide-x divide-[var(--border-color)] bg-[var(--bg-surface)]">
          <div className="p-8 space-y-2">
            <h3 className="text-lg font-bold text-[var(--text-primary)]">Balmukund Ferro Alloys</h3>
            <p className="text-3xl font-bold text-[var(--accent-brass)]">1200 MT</p>
            <p className="text-xs text-[var(--text-secondary)] uppercase tracking-wider font-semibold">Fabrication & Erection</p>
          </div>
          <div className="p-8 space-y-2">
            <h3 className="text-lg font-bold text-[var(--text-primary)]">Tata Steel Ltd., GCP</h3>
            <p className="text-3xl font-bold text-[var(--accent-brass)]">900 MT</p>
            <p className="text-xs text-[var(--text-secondary)] uppercase tracking-wider font-semibold">2 x 16 MVA GCP Erection</p>
          </div>
          <div className="p-8 space-y-2">
            <h3 className="text-lg font-bold text-[var(--text-primary)]">Jabamayee Ferro Alloys</h3>
            <p className="text-3xl font-bold text-[var(--accent-brass)]">350 MT</p>
            <p className="text-xs text-[var(--text-secondary)] uppercase tracking-wider font-semibold">Fabrication & Erection</p>
          </div>
          <div className="p-8 space-y-2 lg:border-t border-[var(--border-color)]">
            <h3 className="text-lg font-bold text-[var(--text-primary)]">Neelkhant Ferro Alloys</h3>
            <p className="text-3xl font-bold text-[var(--accent-brass)]">250 MT</p>
            <p className="text-xs text-[var(--text-secondary)] uppercase tracking-wider font-semibold">Fabrication & Erection</p>
          </div>
          <div className="p-8 space-y-2 lg:col-span-2 lg:border-t border-[var(--border-color)] bg-[var(--bg-secondary)]">
            <h3 className="text-lg font-bold text-[var(--text-primary)]">Combined MRP & Sinter Projects</h3>
            <p className="text-3xl font-bold text-[var(--text-primary)]">~7000 MT</p>
            <p className="text-xs text-[var(--text-secondary)] uppercase tracking-wider font-semibold">Total Structural Fabrication & Erection across all MRP and Sinter contracts</p>
          </div>
        </div>
      </div>

      {/* 08 - RELATED SERVICES */}
      <div className="pt-12 border-t border-[var(--border-color)]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm font-semibold">
          <span className="text-[11px] text-[var(--text-muted)] uppercase tracking-widest mr-4">Related Engineering Capabilities:</span>
          <Link href="/services/turnkey-projects" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:underline">Turnkey Execution</Link>
          <span className="text-[var(--border-color)] hidden sm:inline">|</span>
          <Link href="/services/furnace-om" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:underline">Furnace O&M</Link>
        </div>
      </div>

    </div>
  );
}
