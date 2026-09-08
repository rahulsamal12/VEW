import React from 'react';
import { MANPOWER_DATA } from '@/lib/data';
import { Users, Flame, Layers, Factory, CheckCircle2, Activity } from 'lucide-react';

export default function ManpowerPage() {
  const { title, totalStrength, sitesCount, furnaceSites, mrpSites, sinterSites, keyObservations, conclusion } = MANPOWER_DATA;

  const totalFurnaceManpower = furnaceSites.reduce((acc, curr) => acc + curr.strength, 0);
  const totalMrpManpower = mrpSites.reduce((acc, curr) => acc + curr.strength, 0);
  const totalSinterManpower = sinterSites.reduce((acc, curr) => acc + curr.strength, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 transition-colors duration-200">
      {/* Header */}
      <div className="space-y-4 border-l-4 border-[var(--accent-brass)] pl-4">
        <span className="text-xs uppercase tracking-widest text-[var(--accent-brass)] font-semibold bg-[var(--bg-secondary)] px-2 py-1 border border-[var(--border-color)] inline-flex items-center gap-2 mb-2">
          <Activity className="w-3.5 h-3.5" /> Resource Dashboard
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight tracking-tight">{title}</h1>
        <p className="text-sm text-[var(--text-secondary)] max-w-3xl leading-relaxed">
          Site-wise manpower distribution matrix across furnace, MRP, and sinter operational projects.
        </p>
      </div>

      {/* Top Capability Stats */}
      <div className="bg-[var(--bg-surface)] border border-[var(--border-color)] p-8 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-[var(--border-color)]">
        <div className="space-y-2">
          <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-widest font-bold">Total Workforce</span>
          <p className="text-4xl font-black text-[var(--text-primary)]">{totalStrength}</p>
        </div>
        <div className="space-y-2 pl-8">
          <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-widest font-bold">Active Sites</span>
          <p className="text-4xl font-black text-[var(--text-primary)]">{sitesCount}</p>
        </div>
        <div className="space-y-2 pl-8">
          <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-widest font-bold">Furnace Manpower</span>
          <p className="text-4xl font-black text-[var(--accent-brass)]">{totalFurnaceManpower}</p>
          <span className="text-[10px] text-[var(--text-secondary)] uppercase">Tech/Non-Tech</span>
        </div>
        <div className="space-y-2 pl-8">
          <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-widest font-bold">MRP & Sinter Manpower</span>
          <p className="text-4xl font-black text-[var(--text-primary)]">{totalMrpManpower + totalSinterManpower}</p>
          <span className="text-[10px] text-[var(--text-secondary)] uppercase">Tech/Non-Tech</span>
        </div>
      </div>

      {/* Site Breakdown Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Furnace Sites */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[var(--text-primary)] font-bold text-sm uppercase tracking-wider pb-2 border-b border-[var(--accent-brass)]">
            <Flame className="w-4 h-4 text-[var(--accent-brass)]" /> Furnace O&M Sites
          </div>
          <table className="w-full text-left text-xs">
            <tbody className="divide-y divide-[var(--border-color)]">
              {furnaceSites.map((site, i) => (
                <tr key={i} className="hover:bg-[var(--bg-secondary)]">
                  <td className="py-3 font-semibold text-[var(--text-primary)]">{site.clientSite}</td>
                  <td className="py-3 text-right text-[var(--text-secondary)] font-mono">{site.strength}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* MRP Sites */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[var(--text-primary)] font-bold text-sm uppercase tracking-wider pb-2 border-b border-[var(--accent-brass)]">
            <Layers className="w-4 h-4 text-[var(--accent-brass)]" /> MRP Sites
          </div>
          <table className="w-full text-left text-xs">
            <tbody className="divide-y divide-[var(--border-color)]">
              {mrpSites.map((site, i) => (
                <tr key={i} className="hover:bg-[var(--bg-secondary)]">
                  <td className="py-3 font-semibold text-[var(--text-primary)]">{site.clientSite}</td>
                  <td className="py-3 text-right text-[var(--text-secondary)] font-mono">{site.strength}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Sinter Sites */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[var(--text-primary)] font-bold text-sm uppercase tracking-wider pb-2 border-b border-[var(--accent-brass)]">
            <Factory className="w-4 h-4 text-[var(--accent-brass)]" /> Sinter Sites
          </div>
          <table className="w-full text-left text-xs">
            <tbody className="divide-y divide-[var(--border-color)]">
              {sinterSites.map((site, i) => (
                <tr key={i} className="hover:bg-[var(--bg-secondary)]">
                  <td className="py-3 font-semibold text-[var(--text-primary)]">{site.clientSite}</td>
                  <td className="py-3 text-right text-[var(--text-secondary)] font-mono">{site.strength}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Key Observations */}
      <div className="bg-[var(--bg-surface)] border border-[var(--border-color)] p-8 space-y-6">
        <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--text-primary)] border-b border-[var(--border-color)] pb-3">Operational Observations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {keyObservations.map((obs, idx) => (
            <div key={idx} className="text-xs text-[var(--text-secondary)] flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[var(--accent-brass)] shrink-0 mt-0.5" />
              <span className="leading-relaxed">{obs}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Official Conclusion */}
      <div className="p-8 bg-[var(--bg-secondary)] border border-[var(--border-color)] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-[var(--accent-brass)]"></div>
        <h2 className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] mb-3">Management Conclusion</h2>
        <p className="text-sm text-[var(--text-primary)] leading-relaxed italic font-medium max-w-4xl">
          &quot;{conclusion}&quot;
        </p>
      </div>
    </div>
  );
}
