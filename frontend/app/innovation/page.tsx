export const dynamic = 'force-dynamic';
import React from 'react'; 
import { SITE_IMAGES } from '@/lib/images';
import Image from 'next/image';
import Link from 'next/link';
import { getInnovationData } from "@/lib/api";
import { Settings2, ArrowDown, ArrowRight, CornerDownRight, TrendingUp } from 'lucide-react';

export default async function InnovationPage() {
  const INNOVATION_DATA = await getInnovationData();
  if (!INNOVATION_DATA) return <div className="p-8 text-center text-gray-500">Service temporarily unavailable.</div>;
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20 transition-colors duration-200">
      
      {/* 1. HERO & DIAPHRAGM JIG VISUAL */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center border-b border-[var(--border-color)] pb-16">
        
        {/* Editorial Content */}
        <div className="lg:col-span-6 space-y-6">
          <div className="border-l-4 border-[var(--accent-brass)] pl-4">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[var(--text-muted)] block mb-2">
              Engineering Case Study
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight tracking-tight">
              {INNOVATION_DATA.title}
            </h1>
          </div>
          
          <p className="text-lg text-[var(--text-secondary)] font-medium max-w-lg leading-relaxed">
            {INNOVATION_DATA.subject}
          </p>

          <div className="pt-4">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Settings2 className="w-3.5 h-3.5 text-[var(--accent-brass)]" /> Key Mechanical Features
            </h3>
            <ul className="space-y-3 border-l border-[var(--border-color)] pl-4">
              {INNOVATION_DATA.elements.map((el, i) => (
                <li key={i} className="text-sm font-semibold text-[var(--text-primary)]">
                  {el}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Visual Centerpiece */}
        <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
          <div className="relative w-full aspect-[4/3] bg-[var(--bg-secondary)] border border-[var(--border-color)] overflow-hidden rounded-md flex items-center justify-center p-8">
            <Image 
              src={SITE_IMAGES.innovation} 
              alt="Technical Drawing of Diaphragm Jig" 
              fill 
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-8 opacity-95 hover:opacity-100 transition-opacity duration-300" 
              priority
            />
            {/* Technical Labels Overlay */}
            <div className="absolute top-4 left-4 border border-[var(--border-subtle)] bg-[var(--bg-surface)]/80 backdrop-blur-sm px-2 py-1 text-[10px] font-mono font-bold tracking-wider text-[var(--text-muted)] uppercase">
              FIG 1.0 — Diaphragm Jig
            </div>
          </div>
        </div>

      </section>


      {/* 2. TECHNICAL PROCESS VISUALIZATION */}
      <section className="space-y-8">
        <div className="border-l-2 border-[var(--accent-brass)] pl-3">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--text-primary)]">
            Separation Process Architecture
          </h2>
        </div>

        {/* Desktop Process Flow */}
        <div className="hidden md:flex items-center justify-between border border-[var(--border-color)] bg-[var(--bg-surface)] px-12 py-8 relative">
          
          <div className="flex flex-col items-center justify-center text-center space-y-3 z-10 w-48">
            <div className="w-12 h-12 border border-[var(--border-color)] bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--text-primary)] font-bold">01</div>
            <div className="text-[11px] font-bold uppercase tracking-widest text-[var(--text-secondary)]">Micro Fines</div>
          </div>
          
          <div className="flex-1 h-[1px] bg-[var(--border-color)] relative">
            <ArrowRight className="w-4 h-4 text-[var(--border-color)] absolute right-0 -top-[7px]" />
          </div>

          <div className="flex flex-col items-center justify-center text-center space-y-3 z-10 w-48">
            <div className="w-12 h-12 border border-[var(--accent-brass)] bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--text-primary)] font-bold">02</div>
            <div className="text-[11px] font-bold uppercase tracking-widest text-[var(--accent-brass)]">Diaphragm Jig</div>
          </div>

          <div className="flex-1 h-[1px] bg-[var(--border-color)] relative">
            <ArrowRight className="w-4 h-4 text-[var(--border-color)] absolute right-0 -top-[7px]" />
          </div>

          <div className="flex flex-col items-center justify-center text-center space-y-3 z-10 w-48">
            <div className="w-12 h-12 border border-[var(--border-color)] bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--text-primary)] font-bold">03</div>
            <div className="text-[11px] font-bold uppercase tracking-widest text-[var(--text-secondary)]">Separation</div>
          </div>

          <div className="flex-1 h-[1px] bg-[var(--border-color)] relative">
            <ArrowRight className="w-4 h-4 text-[var(--border-color)] absolute right-0 -top-[7px]" />
          </div>

          <div className="flex flex-col items-center justify-center text-center space-y-3 z-10 w-48">
            <div className="w-12 h-12 border border-[var(--text-primary)] bg-[var(--text-primary)] text-[var(--bg-surface)] flex items-center justify-center font-bold">04</div>
            <div className="text-[11px] font-bold uppercase tracking-widest text-[var(--text-primary)]">Recovered Metal</div>
          </div>

        </div>

        {/* Mobile Process Flow */}
        <div className="md:hidden flex flex-col items-center border border-[var(--border-color)] bg-[var(--bg-surface)] py-8 relative">
          {['Micro Fines', 'Diaphragm Jig', 'Separation', 'Recovered Metal'].map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="flex flex-col items-center justify-center text-center space-y-2 z-10 w-full px-4">
                <div className={`w-10 h-10 flex items-center justify-center font-bold text-sm ${idx === 1 ? 'border border-[var(--accent-brass)] bg-[var(--bg-secondary)] text-[var(--text-primary)]' : idx === 3 ? 'border border-[var(--text-primary)] bg-[var(--text-primary)] text-[var(--bg-surface)]' : 'border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-primary)]'}`}>
                  0{idx + 1}
                </div>
                <div className={`text-[10px] font-bold uppercase tracking-widest ${idx === 1 ? 'text-[var(--accent-brass)]' : idx === 3 ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}`}>
                  {step}
                </div>
              </div>
              {idx < 3 && (
                <div className="h-8 w-[1px] bg-[var(--border-color)] my-2 relative">
                  <ArrowDown className="w-3 h-3 text-[var(--border-color)] absolute -bottom-[4px] -left-[5px]" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>


      {/* 3. IMPACT & RESULTS DATA BLOCKS */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Recovery Result Block */}
        <div className="md:col-span-5 bg-[var(--bg-secondary)] border-t-2 border-t-[var(--accent-brass)] border-b border-l border-r border-[var(--border-color)] p-8 sm:p-10 flex flex-col justify-between space-y-8">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] flex items-center gap-2 mb-4">
              <TrendingUp className="w-3.5 h-3.5" /> Performance Output
            </span>
            <div className="text-6xl sm:text-7xl font-bold text-[var(--text-primary)] tracking-tighter">
              +2%
            </div>
            <div className="text-sm font-bold uppercase tracking-wide text-[var(--text-primary)] mt-2">
              Additional Metal Recovery
            </div>
          </div>
          
          <div className="border-t border-[var(--border-color)] pt-6">
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-medium">
              {INNOVATION_DATA.result}
            </p>
          </div>
        </div>

        {/* TSL Norms Revision Block */}
        <div className="md:col-span-7 border border-[var(--border-color)] bg-[var(--bg-surface)] p-8 sm:p-10 flex flex-col justify-center space-y-8">
          <div className="border-l-2 border-[var(--accent-brass)] pl-3 mb-2">
            <h2 className="text-[11px] font-bold uppercase tracking-widest text-[var(--text-primary)]">
              Industrial Benchmark Impact
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] block mb-1">Corporate Client</span>
              <p className="text-base font-bold text-[var(--text-primary)]">{INNOVATION_DATA.tslNorms.client}</p>
              <span className="text-xs text-[var(--text-secondary)] font-medium inline-block mt-1 bg-[var(--bg-secondary)] px-2 py-0.5 border border-[var(--border-subtle)]">
                {INNOVATION_DATA.tslNorms.context}
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] block mb-3">Chrome Recovery Norm Revision</span>
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-[var(--text-muted)] line-through decoration-[var(--border-color)]">
                  {INNOVATION_DATA.tslNorms.previous}
                </span>
                <ArrowRight className="w-5 h-5 text-[var(--accent-brass)]" />
                <span className="text-4xl sm:text-5xl font-bold text-[var(--text-primary)]">
                  {INNOVATION_DATA.tslNorms.revised}
                </span>
              </div>
            </div>
          </div>
        </div>

      </section>

      
      {/* 4. STRATEGIC BENEFITS */}
      <section className="pt-8 border-t border-[var(--border-color)]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="border-l-2 border-[var(--accent-brass)] pl-3">
            <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--text-primary)]">
              Strategic & Commercial Capabilities
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-0 border-t border-l border-[var(--border-color)]">
          {INNOVATION_DATA.impacts.map((imp, idx) => (
            <div key={idx} className="p-6 bg-[var(--bg-surface)] border-b border-r border-[var(--border-color)] flex items-center justify-center text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">
                {imp}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Footer */}
      <section className="pt-8 pb-12 flex justify-center">
        <Link href="/contact" className="industrial-button-primary text-xs uppercase tracking-wider px-8 py-4">
          Discuss Plant Modernization
        </Link>
      </section>

    </div>
  );
}


