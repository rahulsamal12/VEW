import React from 'react'; 
import { SITE_IMAGES } from '@/lib/images';
import Image from 'next/image';
import { Layers, ShieldAlert, Wrench, Cpu, ArrowDown, ArrowRight } from 'lucide-react';

export default function BreakingSortingSopPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-12 border-b border-[var(--border-color)]">
        <div className="lg:col-span-7 space-y-6">
          <h1 className="text-3xl sm:text-5xl font-bold text-[var(--text-primary)] tracking-tight leading-tight">Metal Breaking, Sizing & Sorting</h1>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            Primary/secondary breaking, screening, magnetic separation, and manual sorting of cooled metal pigs for final sizing and slag removal.
          </p>
        </div>

        <div className="lg:col-span-5 relative w-full aspect-video bg-[var(--bg-secondary)] border border-[var(--border-color)] overflow-hidden rounded-md shadow-sm">
          <Image 
            src={SITE_IMAGES.metalBreaking} 
            alt="Metal Breaking and Sorting" 
            fill 
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover object-center opacity-90 hover:opacity-100 transition-opacity duration-500" 
          />
        </div>
      </div>

      <div className="py-12 border-t border-[var(--border-color)] space-y-8">
        <h2 className="text-xs uppercase tracking-widest text-[var(--accent-brass)] font-bold text-center">Operational Workflow</h2>
        
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-2 py-4">
          <div className="flex-1 industrial-card p-4 border border-[var(--border-color)] text-center bg-[var(--bg-surface)] hover:border-[var(--accent-brass)] transition-colors">
            <h3 className="font-bold text-[var(--text-primary)] text-xs tracking-wider mb-2">PRIMARY BREAKING</h3>
            <p className="text-[10px] text-[var(--text-secondary)]">Excavator with rock breaker to break slabs &lt;300mm.</p>
          </div>
          
          <div className="flex justify-center lg:items-center text-[var(--text-muted)] py-1 lg:py-0">
            <ArrowRight className="hidden lg:block w-4 h-4" />
            <ArrowDown className="lg:hidden w-4 h-4" />
          </div>
          
          <div className="flex-1 industrial-card p-4 border border-[var(--border-color)] text-center bg-[var(--bg-surface)] hover:border-[var(--accent-brass)] transition-colors">
            <h3 className="font-bold text-[var(--text-primary)] text-xs tracking-wider mb-2">CRUSHING & SCREENING</h3>
            <p className="text-[10px] text-[var(--text-secondary)]">Jaw/cone crusher, screens sizing 10-150mm.</p>
          </div>
          
          <div className="flex justify-center lg:items-center text-[var(--text-muted)] py-1 lg:py-0">
            <ArrowRight className="hidden lg:block w-4 h-4" />
            <ArrowDown className="lg:hidden w-4 h-4" />
          </div>
          
          <div className="flex-1 industrial-card p-4 border border-[var(--border-color)] text-center bg-[var(--bg-surface)] hover:border-[var(--accent-brass)] transition-colors">
            <h3 className="font-bold text-[var(--text-primary)] text-xs tracking-wider mb-2">SORTING & MAGNETS</h3>
            <p className="text-[10px] text-[var(--text-secondary)]">Remove slag pieces, magnetic drums for iron.</p>
          </div>
          
          <div className="flex justify-center lg:items-center text-[var(--text-muted)] py-1 lg:py-0">
            <ArrowRight className="hidden lg:block w-4 h-4" />
            <ArrowDown className="lg:hidden w-4 h-4" />
          </div>
          
          <div className="flex-1 industrial-card p-4 border border-[var(--border-color)] text-center bg-[var(--bg-surface)] hover:border-[var(--accent-brass)] transition-colors">
            <h3 className="font-bold text-[var(--text-primary)] text-xs tracking-wider mb-2">LAB SAMPLING</h3>
            <p className="text-[10px] text-[var(--text-secondary)]">Lot-wise sample for chemical analysis.</p>
          </div>
          
          <div className="flex justify-center lg:items-center text-[var(--text-muted)] py-1 lg:py-0">
            <ArrowRight className="hidden lg:block w-4 h-4" />
            <ArrowDown className="lg:hidden w-4 h-4" />
          </div>

          <div className="flex-1 industrial-card p-4 border border-amber-400/50 text-center bg-[var(--bg-surface)]">
            <h3 className="font-bold text-amber-500 text-xs tracking-wider mb-2">METAL RECOVERY</h3>
            <p className="text-[10px] text-[var(--text-secondary)]">MRP to recover metal from contaminated slag.</p>
          </div>
        </div>
      </div> {/* Maintenance Grid */} <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-[var(--border-color)]"> <div className="py-8 border-t border-[var(--border-subtle)] space-y-4"> <h3 className="text-base font-bold text-[var(--text-primary)] flex items-center gap-2"> <Wrench className="w-4 h-4 text-[var(--accent-brass)]" /> Mechanical Maintenance </h3> <ul className="space-y-2 text-xs text-[var(--text-secondary)]"> <li>• Rock breaker chisel replacement & hydraulic check</li> <li>• Crusher liners & jaw plates replacement</li> <li>• Screen decks maintenance & tensioning</li> <li>• Conveyor belts & idlers replacement</li> <li>• Magnetic separator drum overhaul & dust collectors</li> </ul> </div> <div className="py-8 border-t border-[var(--border-subtle)] space-y-4"> <h3 className="text-base font-bold text-[var(--text-primary)] flex items-center gap-2"> <Cpu className="w-4 h-4 text-[var(--accent-brass)]" /> Electrical Maintenance </h3> <ul className="space-y-2 text-xs text-[var(--text-secondary)]"> <li>• Crusher heavy motors & starters maintenance</li> <li>• Variable Frequency Drives (VFDs) servicing</li> <li>• Metal detector controls & interlocks</li> <li>• Bag filter pulse valves & MCC panels for crushing plant</li> </ul> </div> </div> </div> );
}
