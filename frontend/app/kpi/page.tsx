export const dynamic = 'force-dynamic';
import React from 'react';
import { getKpiData } from '@/lib/api';
import { Settings, Calculator, Activity } from 'lucide-react';

export default async function KpiTechnicalPage() {
  const KPI_DATA = await getKpiData();
  if (!KPI_DATA) return <div className="p-8 text-center text-gray-500">Service temporarily unavailable.</div>;
  const { title, powerCalculation, productionCalculation, grade65, grade60 } = KPI_DATA;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 space-y-10 transition-colors duration-200">
      
      {/* Header */}
      <div className="space-y-3">
        <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--accent-brass)] bg-[var(--bg-surface)] border border-[var(--border-color)] px-2.5 py-1 inline-flex items-center gap-1.5 rounded-sm">
          <Settings className="w-3.5 h-3.5" /> Technical Documentation
        </span>
        <h1 className="text-[32px] sm:text-[38px] lg:text-[46px] font-[600] text-[var(--text-primary)] leading-[1.1] tracking-tight">
          {title}
        </h1>
        <p className="text-[14px] md:text-[15px] text-[var(--text-secondary)] max-w-3xl leading-relaxed">
          Technical KPI calculations, power formulas, and grade specifications based on local ores of both Comilog & NGM.
        </p>
      </div>

      {/* Day Power & Production Formulas */}
      <div className="bg-[var(--bg-surface)] border border-[var(--border-color)] p-6 md:p-8 space-y-6 shadow-sm">
        <h2 className="text-[13px] md:text-[14px] font-[600] uppercase tracking-[0.06em] text-[var(--text-primary)] border-b border-[var(--border-color)] pb-3 flex items-center gap-2">
          <Calculator className="w-4 h-4 text-[var(--accent-brass)]" /> Operating Formulae
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-sm pt-2">
          
          <div className="pl-4 border-l-2 border-[var(--border-color)] hover:border-[var(--accent-brass)] transition-colors duration-200 space-y-2">
            <span className="text-[var(--text-muted)] font-semibold uppercase tracking-widest text-[11px] block">
              Day Power Generation Formula
            </span>
            <p className="text-[var(--text-primary)] font-mono font-medium text-[13px] md:text-[15px] tracking-wide">
              {powerCalculation}
            </p>
          </div>
          
          <div className="pl-4 border-l-2 border-[var(--border-color)] hover:border-[var(--accent-brass)] transition-colors duration-200 space-y-2">
            <span className="text-[var(--text-muted)] font-semibold uppercase tracking-widest text-[11px] block">
              Day Production Formula
            </span>
            <p className="text-[var(--text-primary)] font-mono font-medium text-[13px] md:text-[15px] tracking-wide">
              {productionCalculation}
            </p>
          </div>

        </div>
      </div>

      {/* Grade Comparison Table */}
      <div className="space-y-4">
        <h2 className="text-[13px] md:text-[14px] font-[600] uppercase tracking-[0.06em] text-[var(--text-primary)] flex items-center gap-2">
          <Activity className="w-4 h-4 text-[var(--accent-brass)]" /> Grade Specifications Matrix
        </h2>
        
        <div className="w-full overflow-x-auto custom-scrollbar border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-sm">
          <table className="w-full min-w-[600px] text-left border-collapse">
            <thead>
              <tr className="bg-[var(--bg-secondary)] border-b border-[var(--border-color)] text-[var(--text-primary)] uppercase tracking-wide text-[13px] font-[600]">
                <th className="px-5 py-4 w-1/3">Specification Parameter</th>
                <th className="px-5 py-4 w-1/3">{grade65.name}</th>
                <th className="px-5 py-4 w-1/3">{grade60.name}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)] text-[13px] md:text-[14px]">
              
              <tr className="hover:bg-[var(--bg-secondary)] transition-colors">
                <td className="px-5 py-4 font-sans font-medium text-[var(--text-primary)]">Mn : Fe Ratio</td>
                <td className="px-5 py-4 font-mono text-[var(--text-secondary)]">{grade65.ratio}</td>
                <td className="px-5 py-4 font-mono text-[var(--text-secondary)]">{grade60.ratio}</td>
              </tr>
              
              <tr className="hover:bg-[var(--bg-secondary)] transition-colors">
                <td className="px-5 py-4 font-sans font-medium text-[var(--text-primary)]">Carbon Input / MT</td>
                <td className="px-5 py-4 font-mono text-[var(--accent-brass)] font-semibold">{grade65.carbonInput}</td>
                <td className="px-5 py-4 font-mono text-[var(--text-secondary)]">{grade60.carbonInput}</td>
              </tr>
              
              <tr className="hover:bg-[var(--bg-secondary)] transition-colors">
                <td className="px-5 py-4 font-sans font-medium text-[var(--text-primary)]">Avg Mn Input</td>
                <td className="px-5 py-4 font-mono text-[var(--text-secondary)]">{grade65.mnInput}</td>
                <td className="px-5 py-4 font-mono text-[var(--text-secondary)]">{grade60.mnInput}</td>
              </tr>
              
              <tr className="hover:bg-[var(--bg-secondary)] transition-colors">
                <td className="px-5 py-4 font-sans font-medium text-[var(--text-primary)]">Basicity</td>
                <td className="px-5 py-4 font-mono text-[var(--text-secondary)]">{grade65.basicity}</td>
                <td className="px-5 py-4 font-mono text-[var(--text-secondary)]">{grade60.basicity}</td>
              </tr>
              
              <tr className="hover:bg-[var(--bg-secondary)] transition-colors">
                <td className="px-5 py-4 font-sans font-medium text-[var(--text-primary)]">MnO</td>
                <td className="px-5 py-4 font-mono text-[var(--text-secondary)]">{grade65.mno}</td>
                <td className="px-5 py-4 font-mono text-[var(--text-secondary)]">{grade60.mno}</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  );
}


