import React from 'react';
import { KPI_DATA } from '@/lib/data';
import { Settings, Calculator, Activity, CheckCircle2 } from 'lucide-react';

export default function KpiTechnicalPage() {
  const { title, powerCalculation, productionCalculation, grade65, grade60 } = KPI_DATA;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 transition-colors duration-200">
      {/* Header */}
      <div className="space-y-4 border-l-4 border-[var(--accent-brass)] pl-4">
        <span className="text-xs uppercase tracking-widest text-[var(--accent-brass)] font-semibold bg-[var(--bg-secondary)] px-2 py-1 border border-[var(--border-color)] inline-flex items-center gap-2 mb-2">
          <Settings className="w-3.5 h-3.5" /> Technical Documentation
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight tracking-tight">{title}</h1>
        <p className="text-sm text-[var(--text-secondary)] max-w-3xl leading-relaxed">
          Technical KPI calculations, power formulas, and grade specifications based on local ores of both Comilog & NGM.
        </p>
      </div>

      {/* Day Power & Production Formulas */}
      <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] p-8 space-y-6">
        <h2 className="text-sm font-bold uppercase tracking-wider text-[var(--text-primary)] border-b border-[var(--border-color)] pb-3 flex items-center gap-2">
          <Calculator className="w-4 h-4 text-[var(--accent-brass)]" /> Operating Formulae
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div className="py-8 border-b border-[var(--border-color)] space-y-3 relative overflow-hidden group hover:border-[var(--accent-brass)] transition-colors">
            <div className="absolute top-0 left-0 w-1 h-full bg-[var(--accent-steel)] dark:bg-[var(--accent-brass)]"></div>
            <span className="text-[var(--text-muted)] font-bold uppercase tracking-widest text-[10px] block">Day Power Generation Formula</span>
            <p className="text-[var(--text-primary)] font-mono font-medium text-base tracking-wide bg-[var(--bg-secondary)] p-3 border border-[var(--border-color)] inline-block">{powerCalculation}</p>
          </div>
          
          <div className="py-8 border-b border-[var(--border-color)] space-y-3 relative overflow-hidden group hover:border-[var(--accent-brass)] transition-colors">
            <div className="absolute top-0 left-0 w-1 h-full bg-[var(--accent-brass)]"></div>
            <span className="text-[var(--text-muted)] font-bold uppercase tracking-widest text-[10px] block">Day Production Formula</span>
            <p className="text-[var(--text-primary)] font-mono font-medium text-base tracking-wide bg-[var(--bg-secondary)] p-3 border border-[var(--border-color)] inline-block">{productionCalculation}</p>
          </div>
        </div>
      </div>

      {/* Grade Comparison Table */}
      <div className="space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-[var(--text-primary)] flex items-center gap-2">
          <Activity className="w-4 h-4 text-[var(--accent-brass)]" /> Grade Specifications Matrix
        </h2>
        <div className="industrial-table-container custom-scrollbar border border-[var(--border-color)] bg-[var(--bg-surface)]">
          <table className="industrial-table w-full text-left text-sm">
            <thead>
              <tr className="bg-[var(--bg-secondary)] border-b border-[var(--border-color)] text-[var(--text-muted)] uppercase tracking-wider text-[11px] font-bold">
                <th className="p-4">Specification Parameter</th>
                <th className="p-4">{grade65.name}</th>
                <th className="p-4">{grade60.name}</th>
              </tr>
            </thead>
            <tbody className="font-mono divide-y divide-[var(--border-color)]">
              <tr className="hover:bg-[var(--bg-secondary)] transition-colors">
                <td className="p-4 font-sans font-semibold text-[var(--text-primary)] text-xs uppercase tracking-wide">Mn : Fe Ratio</td>
                <td className="p-4 text-[var(--text-secondary)]">{grade65.ratio}</td>
                <td className="p-4 text-[var(--text-secondary)]">{grade60.ratio}</td>
              </tr>
              <tr className="hover:bg-[var(--bg-secondary)] transition-colors">
                <td className="p-4 font-sans font-semibold text-[var(--text-primary)] text-xs uppercase tracking-wide">Carbon Input / MT</td>
                <td className="p-4 text-[var(--accent-brass)] font-bold">{grade65.carbonInput}</td>
                <td className="p-4 text-[var(--text-secondary)]">{grade60.carbonInput}</td>
              </tr>
              <tr className="hover:bg-[var(--bg-secondary)] transition-colors">
                <td className="p-4 font-sans font-semibold text-[var(--text-primary)] text-xs uppercase tracking-wide">Avg Mn Input</td>
                <td className="p-4 text-[var(--text-secondary)]">{grade65.mnInput}</td>
                <td className="p-4 text-[var(--text-secondary)]">{grade60.mnInput}</td>
              </tr>
              <tr className="hover:bg-[var(--bg-secondary)] transition-colors">
                <td className="p-4 font-sans font-semibold text-[var(--text-primary)] text-xs uppercase tracking-wide">Basicity</td>
                <td className="p-4 text-[var(--text-secondary)]">{grade65.basicity}</td>
                <td className="p-4 text-[var(--text-secondary)]">{grade60.basicity}</td>
              </tr>
              <tr className="hover:bg-[var(--bg-secondary)] transition-colors">
                <td className="p-4 font-sans font-semibold text-[var(--text-primary)] text-xs uppercase tracking-wide">MnO</td>
                <td className="p-4 text-[var(--text-secondary)]">{grade65.mno}</td>
                <td className="p-4 text-[var(--text-secondary)]">{grade60.mno}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
