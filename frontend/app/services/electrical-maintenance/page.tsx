import React from 'react';
import Link from 'next/link';
import { Cpu, CheckCircle2 } from 'lucide-react';

export default function ElectricalMaintenancePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 transition-colors duration-200">
      
      {/* 01 - HERO (Text-Driven Editorial) */}
      <div className="max-w-4xl space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--bg-secondary)] text-[var(--text-secondary)] text-[11px] font-bold uppercase tracking-widest border border-[var(--border-color)]">
          <Cpu className="w-3.5 h-3.5 text-[var(--accent-brass)]" /> HT/LT Engineering
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight tracking-tight">
          Electrical Maintenance
        </h1>
        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl leading-relaxed">
          Specialized electrical maintenance covering 33kV furnace transformers, OLTC, RTCC, PLC/thyristor electrode regulation systems, switchgears, VFDs, and SCADA automation.
        </p>
      </div>

      {/* 04 - TECHNICAL / OPERATIONAL INFORMATION */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">Maintenance & Engineering Scope</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="p-8 border border-[var(--border-color)] bg-[var(--bg-surface)] space-y-6">
            <h3 className="text-xl font-bold text-[var(--text-primary)] border-b border-[var(--border-subtle)] pb-4">
              33kV Transformer & Switchgear
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-brass)] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[var(--text-secondary)]">Furnace Transformer (33kV to 80-200V) maintenance</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-brass)] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[var(--text-secondary)]">OLTC (On-Load Tap Changer) & RTCC panels testing</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-brass)] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[var(--text-secondary)]">CT/PT, HT/LT switchgear overhauling</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-brass)] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[var(--text-secondary)]">Capacitor banks maintenance for Power Factor correction (0.78 PF target)</span>
              </li>
            </ul>
          </div>

          <div className="p-8 border border-[var(--border-color)] bg-[var(--bg-surface)] space-y-6">
            <h3 className="text-xl font-bold text-[var(--text-primary)] border-b border-[var(--border-subtle)] pb-4">
              Electrode Regulation & Automation
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-brass)] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[var(--text-secondary)]">Thyristor / PLC-based automatic electrode regulation system</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-brass)] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[var(--text-secondary)]">Hydraulic power pack controls & electrode hoist motor starters</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-brass)] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[var(--text-secondary)]">Temperature, level, pressure, and position sensors calibration</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-brass)] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[var(--text-secondary)]">Furnace SCADA / DCS logic backup and updates</span>
              </li>
            </ul>
          </div>

          <div className="p-8 border border-[var(--border-color)] bg-[var(--bg-surface)] space-y-6">
            <h3 className="text-xl font-bold text-[var(--text-primary)] border-b border-[var(--border-subtle)] pb-4">
              Preventive Electrical Testing
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[10px] text-[var(--text-muted)] font-bold uppercase tracking-wider w-20 shrink-0 pt-0.5">Monthly</span>
                <span className="text-sm font-semibold text-[var(--text-secondary)]">IR thermography of HT/LT panels</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[10px] text-[var(--text-muted)] font-bold uppercase tracking-wider w-20 shrink-0 pt-0.5">Quarterly</span>
                <span className="text-sm font-semibold text-[var(--text-secondary)]">Transformer oil Breakdown Voltage (BDV) & DGA testing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[10px] text-[var(--text-muted)] font-bold uppercase tracking-wider w-20 shrink-0 pt-0.5">Half-Yearly</span>
                <span className="text-sm font-semibold text-[var(--text-secondary)]">Earth pit resistance measurement</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[10px] text-[var(--text-muted)] font-bold uppercase tracking-wider w-20 shrink-0 pt-0.5">Annually</span>
                <span className="text-sm font-semibold text-[var(--text-secondary)]">Protection relay calibration & testing</span>
              </li>
            </ul>
          </div>

          <div className="p-8 border border-[var(--border-color)] bg-[var(--bg-surface)] space-y-6">
            <h3 className="text-xl font-bold text-[var(--text-primary)] border-b border-[var(--border-subtle)] pb-4">
              Advanced Condition Monitoring
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-brass)] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[var(--text-secondary)]">Vibration analysis of ID fan motors</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-brass)] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[var(--text-secondary)]">Motor Current Signature Analysis (MCSA) for HT motors</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-brass)] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[var(--text-secondary)]">Tan-Delta testing of HT cables</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 08 - RELATED SERVICES */}
      <div className="pt-12 border-t border-[var(--border-color)]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm font-semibold">
          <span className="text-[11px] text-[var(--text-muted)] uppercase tracking-widest mr-4">Related Engineering Capabilities:</span>
          <Link href="/services/mechanical-maintenance" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:underline">Mechanical Maintenance</Link>
          <span className="text-[var(--border-color)] hidden sm:inline">|</span>
          <Link href="/services/furnace-om" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:underline">Furnace O&M</Link>
        </div>
      </div>

    </div>
  );
}
