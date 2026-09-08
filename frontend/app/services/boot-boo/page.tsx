import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

export default function BootBooPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 transition-colors duration-200">
      
      {/* 01 - HERO (Text-Driven Editorial) */}
      <div className="max-w-4xl space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--bg-secondary)] text-[var(--text-secondary)] text-[11px] font-bold uppercase tracking-widest border border-[var(--border-color)]">
          <ShieldCheck className="w-3.5 h-3.5 text-[var(--accent-brass)]" /> Strategic Commercial Partnership
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight tracking-tight">
          BOOT / BOO Commercial Models
        </h1>
        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl leading-relaxed">
          Flexible commercial frameworks enabling clients to realize metallurgical recovery improvements without upfront capital risk. Our commitment is demonstrated through operational contracts that have extended up to 19 years.
        </p>
      </div>

      {/* 04 - TECHNICAL / OPERATIONAL INFORMATION */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">Execution Frameworks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 border border-[var(--border-color)] bg-[var(--bg-surface)] space-y-4">
            <span className="text-[11px] font-bold text-[var(--text-secondary)] uppercase tracking-widest block">BOOT Model</span>
            <h3 className="text-2xl font-bold text-[var(--text-primary)]">Build - Own - Operate - Transfer</h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Venkateswar Engg Works Pvt. Ltd. finances, constructs, and operates the recovery/sinter infrastructure. Upon completion of the long-term operational tenure, the entire plant asset is transferred to the client.
            </p>
          </div>
          
          <div className="p-8 border border-[var(--border-color)] bg-[var(--bg-surface)] space-y-4">
            <span className="text-[11px] font-bold text-[var(--text-secondary)] uppercase tracking-widest block">BOO Model</span>
            <h3 className="text-2xl font-bold text-[var(--text-primary)]">Build - Own - Operate</h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              The company constructs and retains ownership of the asset while delivering continuous operational management, guaranteeing strict metal and recovery yields directly to the client facility.
            </p>
          </div>
        </div>
      </div>

      {/* 06 - PROCESS / WORKFLOW HIGHLIGHTS */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-[var(--text-primary)] flex items-center gap-3">
          <Clock className="w-6 h-6 text-[var(--accent-brass)]" /> Key Highlights & Partnerships
        </h2>
        <div className="bg-[var(--bg-surface)] border border-[var(--border-color)]">
          <ul className="divide-y divide-[var(--border-color)]">
            <li className="p-6 flex items-start gap-4">
              <CheckCircle2 className="w-5 h-5 text-[var(--accent-brass)] shrink-0 mt-0.5" />
              <p className="text-sm font-semibold text-[var(--text-primary)]">
                Builds client confidence in precise metal recoveries and the long-term commercial viability of metallurgical projects.
              </p>
            </li>
            <li className="p-6 flex items-start gap-4">
              <CheckCircle2 className="w-5 h-5 text-[var(--accent-brass)] shrink-0 mt-0.5" />
              <p className="text-sm font-semibold text-[var(--text-primary)]">
                Demonstrated operational commitment with continuous site partnerships extending up to 19 years.
              </p>
            </li>
            <li className="p-6 flex items-start gap-4">
              <CheckCircle2 className="w-5 h-5 text-[var(--accent-brass)] shrink-0 mt-0.5" />
              <p className="text-sm font-semibold text-[var(--text-primary)]">
                Key partnerships include Tata Steel Ltd (3x200 TPD), Jindal Stainless Ltd (1200 TPD extended 2022-2032), Sarda Metals, and IFCAL (Govt. of Odisha).
              </p>
            </li>
          </ul>
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
