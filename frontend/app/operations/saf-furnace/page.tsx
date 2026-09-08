import React from 'react'; 
import { SITE_IMAGES } from '@/lib/images';
import Image from 'next/image';
import { Flame, ShieldAlert, Wrench, Cpu, ArrowDown, ArrowRight } from 'lucide-react';

export default function SafFurnaceSopPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-12 border-b border-[var(--border-color)]">
        <div className="lg:col-span-7 space-y-6">
          <h1 className="text-3xl sm:text-5xl font-bold text-[var(--text-primary)] tracking-tight leading-tight">Smelting — Submerged Arc Furnace (SAF) Operation</h1>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            Metallurgical smelting process for 3-electrode Submerged Arc Furnaces operating at 1400-1600°C.
          </p>
        </div>
        
        <div className="lg:col-span-5 relative w-full aspect-video bg-[var(--bg-secondary)] border border-[var(--border-color)] overflow-hidden rounded-md shadow-sm">
          <Image 
            src={SITE_IMAGES.furnaceOperations} 
            alt="SAF Furnace Smelting Operation" 
            fill 
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover object-center opacity-90 hover:opacity-100 transition-opacity duration-500" 
          />
        </div>
      </div>


      <div className="py-12 border-t border-[var(--border-color)] space-y-8">
        <h2 className="text-xs uppercase tracking-widest text-[var(--accent-brass)] font-bold text-center">Metallurgical Process Steps</h2>
        
        <div className="flex flex-col md:flex-row items-stretch justify-between gap-4 py-4">
          <div className="flex-1 industrial-card p-6 border border-[var(--border-color)] text-center bg-[var(--bg-surface)] hover:border-[var(--accent-brass)] transition-colors">
            <h3 className="font-bold text-[var(--text-primary)] text-sm tracking-wider mb-2">CHARGING</h3>
            <p className="text-xs text-[var(--text-secondary)]">Continuous/batch charging of mix into furnace through charging chutes.</p>
          </div>
          
          <div className="flex justify-center md:items-center text-[var(--text-muted)]">
            <ArrowRight className="hidden md:block w-5 h-5" />
            <ArrowDown className="md:hidden w-5 h-5" />
          </div>
          
          <div className="flex-1 industrial-card p-6 border border-[var(--border-color)] text-center bg-[var(--bg-surface)] hover:border-[var(--accent-brass)] transition-colors">
            <h3 className="font-bold text-[var(--text-primary)] text-sm tracking-wider mb-2">SMELTING</h3>
            <p className="text-xs text-[var(--text-secondary)]">3-electrode SAF (22.5 MVA) operating at 1400-1600°C with baked/self-baking electrodes forming slag & metal.</p>
          </div>
          
          <div className="flex justify-center md:items-center text-[var(--text-muted)]">
            <ArrowRight className="hidden md:block w-5 h-5" />
            <ArrowDown className="md:hidden w-5 h-5" />
          </div>
          
          <div className="flex-1 industrial-card p-6 border border-[var(--border-color)] text-center bg-[var(--bg-surface)] hover:border-[var(--accent-brass)] transition-colors">
            <h3 className="font-bold text-[var(--text-primary)] text-sm tracking-wider mb-2">TAPPING EXECUTION</h3>
            <p className="text-xs text-[var(--text-secondary)]">Executed every 2–2.30 hrs by burning taphole with oxygen pipe, metal + slag flowing to ladles/granulation.</p>
          </div>
          
          <div className="flex justify-center md:items-center text-[var(--text-muted)]">
            <ArrowRight className="hidden md:block w-5 h-5" />
            <ArrowDown className="md:hidden w-5 h-5" />
          </div>

          <div className="flex-1 industrial-card p-6 border border-[var(--accent-brass)] text-center bg-[var(--bg-surface)]">
            <h3 className="font-bold text-[var(--text-primary)] text-sm tracking-wider mb-2">ELECTRODE MANAGEMENT</h3>
            <p className="text-xs text-[var(--text-secondary)]">Slipping, casing welding, paste charging, maintaining electrode length/current, <em className="font-semibold">which is the key factor of Operation</em>.</p>
          </div>
        </div> {/* Source Note Box */} <div className="p-4 rounded-sm bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] text-xs font-mono flex items-center gap-2"> <ShieldAlert className="w-4 h-4 shrink-0" /> <span>Operational Observation: <strong>ERAMET Not able to maintain properly</strong></span> </div> </div> {/* Furnace Maintenance Grid */} <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-[var(--border-color)]"> <div className="py-8 border-t border-[var(--border-subtle)] space-y-4"> <h3 className="text-base font-bold text-[var(--text-primary)] flex items-center gap-2"> <Wrench className="w-4 h-4 text-[var(--accent-brass)]" /> Furnace Mechanical Maintenance </h3> <ul className="space-y-2 text-xs text-[var(--text-secondary)]"> <li>• Furnace shell & refractory lining inspection</li> <li>• Taphole drilling machine & mud gun maintenance</li> <li>• Electrode column, slipping clamps, & pressure rings</li> <li>• Contact shoes & bus tube cooling maintenance</li> <li>• Hydraulic systems for electrode regulation</li> <li>• Fume extraction ducts, bag house, & ID fans</li> </ul> </div> <div className="py-8 border-t border-[var(--border-subtle)] space-y-4"> <h3 className="text-base font-bold text-[var(--text-primary)] flex items-center gap-2"> <Cpu className="w-4 h-4 text-[var(--accent-brass)]" /> Furnace Electrical Maintenance </h3> <ul className="space-y-2 text-xs text-[var(--text-secondary)]"> <li>• Furnace transformer (33kV to 80-200V)</li> <li>• OLTC & RTCC panels testing</li> <li>• Thyristor / PLC based electrode regulation system</li> <li>• CT/PT, HT/LT switchgear, capacitor banks for PF correction</li> <li>• Electrode hoist motors & hydraulic power pack controls</li> <li>• Temperature/level sensors & furnace SCADA</li> </ul> </div> </div> </div> );
}
