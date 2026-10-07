export const dynamic = "force-dynamic";
import React from "react";
import { getKpiData } from "@/lib/api";
import { Settings, Calculator, Activity } from "lucide-react";

export default async function KpiTechnicalPage() {
  const KPI_DATA = await getKpiData();
  if (!KPI_DATA)
    return (
      <div className="p-8 text-center text-[var(--text-muted)] font-medium">
        Service temporarily unavailable.
      </div>
    );
  const { title, powerCalculation, productionCalculation, grade65, grade60 } =
    KPI_DATA;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[110px] pb-16 md:pt-[140px] md:pb-20 space-y-16 transition-colors duration-200">
      {/* Header */}
      <div className="space-y-6 border-l-[3px] border-[var(--accent-brass)] pl-5">
        <span className="text-[12px] font-bold uppercase tracking-widest text-[var(--text-primary)] bg-[var(--bg-secondary)] border border-[var(--border-color)] px-3 py-1.5 inline-flex items-center gap-2 rounded-[8px]">
          <Settings className="w-4 h-4 text-[var(--accent-brass)]" /> Technical
          Documentation
        </span>
        <h1 className="text-[34px] sm:text-[40px] md:text-[52px] font-bold text-[var(--text-primary)] leading-[1.1]">
          {title}
        </h1>
        <p className="text-[16px] md:text-[18px] text-[var(--text-secondary)] max-w-3xl leading-relaxed font-medium">
          Technical KPI calculations, power formulas, and grade specifications
          based on local ores of both Comilog & NGM.
        </p>
      </div>

      {/* Day Power & Production Formulas */}
      <div className="industrial-card p-8 md:p-10 space-y-8 border-[var(--border-subtle)] shadow-sm">
        <h2 className="text-[14px] font-bold uppercase tracking-wider text-[var(--text-primary)] border-b border-[var(--border-color)] pb-3 flex items-center gap-2">
          <Calculator className="w-5 h-5 text-[var(--accent-brass)]" />{" "}
          Operating Formulae
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 text-sm pt-4">
          <div className="pl-5 border-l-[3px] border-[var(--border-color)] hover:border-[var(--accent-brass)] transition-colors duration-300 space-y-4 py-2">
            <span className="text-[var(--text-muted)] font-bold uppercase tracking-widest text-[12px] block">
              Day Power Generation Formula
            </span>
            <p className="text-[var(--text-primary)] tabular-nums font-bold text-[15px] md:text-[18px] tracking-wide bg-[var(--bg-secondary)] p-4 rounded-[8px] border border-[var(--border-subtle)] break-all">
              {powerCalculation}
            </p>
          </div>

          <div className="pl-5 border-l-[3px] border-[var(--border-color)] hover:border-[var(--accent-brass)] transition-colors duration-300 space-y-4 py-2">
            <span className="text-[var(--text-muted)] font-bold uppercase tracking-widest text-[12px] block">
              Day Production Formula
            </span>
            <p className="text-[var(--text-primary)] tabular-nums font-bold text-[15px] md:text-[18px] tracking-wide bg-[var(--bg-secondary)] p-4 rounded-[8px] border border-[var(--border-subtle)] break-all">
              {productionCalculation}
            </p>
          </div>
        </div>
      </div>

      {/* Grade Comparison Table */}
      <div className="space-y-6">
        <h2 className="text-[14px] font-bold uppercase tracking-wider text-[var(--text-primary)] flex items-center gap-2 border-b border-[var(--border-color)] pb-3">
          <Activity className="w-5 h-5 text-[var(--accent-brass)]" /> Grade
          Specifications Matrix
        </h2>

        <div className="w-full overflow-x-auto custom-scrollbar border border-[var(--border-color)] bg-[var(--bg-surface)] rounded-[8px] shadow-sm">
          <table className="w-full min-w-[600px] text-left border-collapse">
            <thead>
              <tr className="bg-[var(--bg-secondary)] border-b border-[var(--border-color)] text-[var(--text-primary)] uppercase tracking-wider text-[12px] font-bold">
                <th className="px-6 py-5 w-1/3">Specification Parameter</th>
                <th className="px-6 py-5 w-1/3 text-[var(--accent-brass)]">
                  {grade65.name}
                </th>
                <th className="px-6 py-5 w-1/3">{grade60.name}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)] text-[14px]">
              <tr className="hover:bg-[var(--bg-secondary)] transition-colors">
                <td className="px-6 py-5 font-sans font-bold text-[var(--text-primary)]">
                  Mn : Fe Ratio
                </td>
                <td className="px-6 py-5 tabular-nums text-[var(--text-secondary)] font-medium">
                  {grade65.ratio}
                </td>
                <td className="px-6 py-5 tabular-nums text-[var(--text-secondary)] font-medium">
                  {grade60.ratio}
                </td>
              </tr>

              <tr className="hover:bg-[var(--bg-secondary)] transition-colors">
                <td className="px-6 py-5 font-sans font-bold text-[var(--text-primary)]">
                  Carbon Input / MT
                </td>
                <td className="px-6 py-5 tabular-nums text-[var(--accent-brass)] font-bold">
                  {grade65.carbonInput}
                </td>
                <td className="px-6 py-5 tabular-nums text-[var(--text-secondary)] font-medium">
                  {grade60.carbonInput}
                </td>
              </tr>

              <tr className="hover:bg-[var(--bg-secondary)] transition-colors">
                <td className="px-6 py-5 font-sans font-bold text-[var(--text-primary)]">
                  Avg Mn Input
                </td>
                <td className="px-6 py-5 tabular-nums text-[var(--text-secondary)] font-medium">
                  {grade65.mnInput}
                </td>
                <td className="px-6 py-5 tabular-nums text-[var(--text-secondary)] font-medium">
                  {grade60.mnInput}
                </td>
              </tr>

              <tr className="hover:bg-[var(--bg-secondary)] transition-colors">
                <td className="px-6 py-5 font-sans font-bold text-[var(--text-primary)]">
                  Basicity
                </td>
                <td className="px-6 py-5 tabular-nums text-[var(--text-secondary)] font-medium">
                  {grade65.basicity}
                </td>
                <td className="px-6 py-5 tabular-nums text-[var(--text-secondary)] font-medium">
                  {grade60.basicity}
                </td>
              </tr>

              <tr className="hover:bg-[var(--bg-secondary)] transition-colors">
                <td className="px-6 py-5 font-sans font-bold text-[var(--text-primary)]">
                  MnO
                </td>
                <td className="px-6 py-5 tabular-nums text-[var(--text-secondary)] font-medium">
                  {grade65.mno}
                </td>
                <td className="px-6 py-5 tabular-nums text-[var(--text-secondary)] font-medium">
                  {grade60.mno}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
