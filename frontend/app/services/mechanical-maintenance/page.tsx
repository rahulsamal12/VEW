import React from 'react';
import Link from 'next/link';
import { Wrench, CheckCircle2 } from 'lucide-react';

export default function MechanicalMaintenancePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 transition-colors duration-200">
      
      {/* 01 - HERO (Text-Driven Editorial) */}
      <div className="max-w-4xl space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--bg-secondary)] text-[var(--text-secondary)] text-[11px] font-bold uppercase tracking-widest border border-[var(--border-color)]">
          <Wrench className="w-3.5 h-3.5 text-[var(--accent-brass)]" /> Plant Maintenance
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight tracking-tight">
          Mechanical Maintenance
        </h1>
        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl leading-relaxed">
          Comprehensive mechanical maintenance covering raw material handling, submerged arc furnaces, casting circuits, metal crushing & sizing, and plant-wide preventive routines.
        </p>
      </div>

      {/* 04 - TECHNICAL / OPERATIONAL INFORMATION */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">Maintenance & Engineering Scope</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="p-8 border border-[var(--border-color)] bg-[var(--bg-surface)] space-y-6">
            <h3 className="text-xl font-bold text-[var(--text-primary)] border-b border-[var(--border-subtle)] pb-4">
              Raw Material & Preparation
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-brass)] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[var(--text-secondary)]">Weighbridge calibration & load check</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-brass)] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[var(--text-secondary)]">Conveyor belt alignment & tensioning</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-brass)] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[var(--text-secondary)]">Crusher jaw & screen deck maintenance</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-brass)] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[var(--text-secondary)]">Grab bucket & skip hoist repairs</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-brass)] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[var(--text-secondary)]">Bin gate valves & dust extraction system</span>
              </li>
            </ul>
          </div>

          <div className="p-8 border border-[var(--border-color)] bg-[var(--bg-surface)] space-y-6">
            <h3 className="text-xl font-bold text-[var(--text-primary)] border-b border-[var(--border-subtle)] pb-4">
              SAF Furnace Mechanicals
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-brass)] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[var(--text-secondary)]">Furnace shell & refractory lining health audit</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-brass)] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[var(--text-secondary)]">Taphole drilling machine & mud gun hydraulic overhaul</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-brass)] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[var(--text-secondary)]">Electrode column, slipping clamps, & contact shoes</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-brass)] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[var(--text-secondary)]">Hydraulic systems for electrode regulation</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-brass)] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[var(--text-secondary)]">Bus tube cooling circuit, fume ducting, ID fans & bag house</span>
              </li>
            </ul>
          </div>

          <div className="p-8 border border-[var(--border-color)] bg-[var(--bg-surface)] space-y-6">
            <h3 className="text-xl font-bold text-[var(--text-primary)] border-b border-[var(--border-subtle)] pb-4">
              Casting & Metal Breaking
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-brass)] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[var(--text-secondary)]">Ladle refractory lining, trunnions, & EOT crane</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-brass)] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[var(--text-secondary)]">Slag granulation pumps & water spray nozzles</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-brass)] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[var(--text-secondary)]">Excavator rock breaker chisels & drop balls</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-brass)] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[var(--text-secondary)]">Jaw/cone crusher liners & vibrating screens</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-brass)] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[var(--text-secondary)]">Magnetic separator drums & dust collectors</span>
              </li>
            </ul>
          </div>

          <div className="p-8 border border-[var(--border-color)] bg-[var(--bg-surface)] space-y-6">
            <h3 className="text-xl font-bold text-[var(--text-primary)] border-b border-[var(--border-subtle)] pb-4">
              Preventive & Shutdown Schedules
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[10px] text-[var(--text-muted)] font-bold uppercase tracking-wider w-20 shrink-0 pt-0.5">Daily</span>
                <span className="text-sm font-semibold text-[var(--text-secondary)]">Lubrication routines across all rotating machinery</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[10px] text-[var(--text-muted)] font-bold uppercase tracking-wider w-20 shrink-0 pt-0.5">Weekly</span>
                <span className="text-sm font-semibold text-[var(--text-secondary)]">Belt conveyor inspection & tracking audit</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[10px] text-[var(--text-muted)] font-bold uppercase tracking-wider w-20 shrink-0 pt-0.5">Monthly</span>
                <span className="text-sm font-semibold text-[var(--text-secondary)]">Gearbox oil quality & level check</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[10px] text-[var(--text-muted)] font-bold uppercase tracking-wider w-20 shrink-0 pt-0.5">Shutdown</span>
                <span className="text-sm font-semibold text-[var(--text-secondary)]">Annual furnace relining (15-30 days), bag house overhaul, EOT crane servicing</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* 08 - RELATED SERVICES */}
      <div className="pt-12 border-t border-[var(--border-color)]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm font-semibold">
          <span className="text-[11px] text-[var(--text-muted)] uppercase tracking-widest mr-4">Related Engineering Capabilities:</span>
          <Link href="/services/electrical-maintenance" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:underline">Electrical Maintenance</Link>
          <span className="text-[var(--border-color)] hidden sm:inline">|</span>
          <Link href="/services/furnace-om" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:underline">Furnace O&M</Link>
        </div>
      </div>

    </div>
  );
}
