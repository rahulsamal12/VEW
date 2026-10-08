export const dynamic = "force-dynamic";
import React from "react";
import { getSiteImages } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import { getInnovationData } from "@/lib/api";
import { Settings2, ArrowDown, ArrowRight, TrendingUp } from "lucide-react";

export default async function InnovationPage() {
  const SITE_IMAGES = await getSiteImages();
  const INNOVATION_DATA = await getInnovationData();
  if (!INNOVATION_DATA)
    return (
      <div className="p-8 text-center text-[var(--text-muted)] font-medium">
        Service temporarily unavailable.
      </div>
    );
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[110px] pb-16 md:pt-[140px] md:pb-20 space-y-24 transition-colors duration-200">
      {/* 1. HERO & DIAPHRAGM JIG VISUAL */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center pb-8 border-b border-[var(--border-color)]">
        {/* Editorial Content */}
        <div className="lg:col-span-6 space-y-8">
          <div className="border-l-[3px] border-[var(--accent-brass)] pl-5">
            <span className="text-[12px] font-bold uppercase tracking-widest text-[var(--text-primary)] bg-[var(--bg-secondary)] px-3 py-1 border border-[var(--border-color)] rounded-[8px] block w-fit mb-4">
              Engineering Case Study
            </span>
            <h1 className="text-[34px] sm:text-[40px] md:text-[52px] font-bold text-[var(--text-primary)] leading-[1.1]">
              {INNOVATION_DATA.title}
            </h1>
          </div>

          <p className="text-[16px] md:text-[18px] text-[var(--text-secondary)] font-normal max-w-lg leading-relaxed">
            {INNOVATION_DATA.subject}
          </p>

          <div className="industrial-card p-6 border-[var(--border-subtle)] space-y-4">
            <h3 className="text-[12px] font-bold uppercase tracking-widest text-[var(--text-primary)] flex items-center gap-2 border-b border-[var(--border-color)] pb-3">
              <Settings2 className="w-4 h-4 text-[var(--accent-brass)]" /> Key
              Mechanical Features
            </h3>
            <ul className="space-y-3">
              {INNOVATION_DATA.elements.map((el, i) => (
                <li
                  key={i}
                  className="text-[14px] font-medium text-[var(--text-secondary)] flex items-start gap-2"
                >
                  <span className="text-[var(--accent-brass)] mt-0.5">•</span>
                  <span>{el}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Visual Centerpiece */}
        <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
          <div className="relative w-full aspect-[4/3] bg-[var(--bg-secondary)] border border-[var(--border-color)] overflow-hidden rounded-[8px] flex items-center justify-center p-8 shadow-sm">
            <Image
              src={SITE_IMAGES.innovation}
              alt="Technical Drawing of Diaphragm Jig"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-8 opacity-95 hover:scale-[1.02] transition-transform duration-700"
              priority
            />
          </div>
        </div>
      </section>

      {/* 2. TECHNICAL PROCESS VISUALIZATION */}
      <section className="space-y-10">
        <div className="border-l-[3px] border-[var(--accent-brass)] pl-5">
          <h2 className="text-[34px] md:text-[42px] font-bold text-[var(--text-primary)]">
            Separation Process Architecture
          </h2>
        </div>

        {/* Desktop Process Flow */}
        <div className="hidden md:flex items-center justify-between border border-[var(--border-color)] bg-[var(--bg-surface)] px-12 py-10 rounded-[8px] shadow-sm relative">
          <div className="flex flex-col items-center justify-center text-center space-y-4 z-10 w-48">
            <div className="w-14 h-14 border border-[var(--border-color)] bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--text-primary)] font-bold text-[18px]">
              01
            </div>
            <div className="text-[12px] font-bold uppercase tracking-widest text-[var(--text-secondary)]">
              Micro Fines
            </div>
          </div>

          <div className="flex-1 h-[2px] bg-[var(--border-color)] relative">
            <ArrowRight className="w-5 h-5 text-[var(--border-color)] absolute right-0 -top-[9px]" />
          </div>

          <div className="flex flex-col items-center justify-center text-center space-y-4 z-10 w-48">
            <div className="w-14 h-14 border-2 border-[var(--accent-brass)] bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--text-primary)] font-bold text-[18px] shadow-[0_0_15px_rgba(178,138,46,0.15)]">
              02
            </div>
            <div className="text-[12px] font-bold uppercase tracking-widest text-[var(--accent-brass)]">
              Diaphragm Jig
            </div>
          </div>

          <div className="flex-1 h-[2px] bg-[var(--border-color)] relative">
            <ArrowRight className="w-5 h-5 text-[var(--border-color)] absolute right-0 -top-[9px]" />
          </div>

          <div className="flex flex-col items-center justify-center text-center space-y-4 z-10 w-48">
            <div className="w-14 h-14 border border-[var(--border-color)] bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--text-primary)] font-bold text-[18px]">
              03
            </div>
            <div className="text-[12px] font-bold uppercase tracking-widest text-[var(--text-secondary)]">
              Separation
            </div>
          </div>

          <div className="flex-1 h-[2px] bg-[var(--border-color)] relative">
            <ArrowRight className="w-5 h-5 text-[var(--border-color)] absolute right-0 -top-[9px]" />
          </div>

          <div className="flex flex-col items-center justify-center text-center space-y-4 z-10 w-48">
            <div className="w-14 h-14 border border-[var(--accent-steel)] bg-[var(--accent-steel)] text-white flex items-center justify-center font-bold text-[18px]">
              04
            </div>
            <div className="text-[12px] font-bold uppercase tracking-widest text-[var(--text-primary)]">
              Recovered Metal
            </div>
          </div>
        </div>

        {/* Mobile Process Flow */}
        <div className="md:hidden flex flex-col items-center border border-[var(--border-color)] bg-[var(--bg-surface)] py-10 rounded-[8px] relative">
          {[
            "Micro Fines",
            "Diaphragm Jig",
            "Separation",
            "Recovered Metal",
          ].map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="flex flex-col items-center justify-center text-center space-y-3 z-10 w-full px-4">
                <div
                  className={`w-12 h-12 flex items-center justify-center font-bold text-[16px] ${idx === 1 ? "border-2 border-[var(--accent-brass)] bg-[var(--bg-secondary)] text-[var(--text-primary)]" : idx === 3 ? "border border-[var(--accent-steel)] bg-[var(--accent-steel)] text-white" : "border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-primary)]"}`}
                >
                  0{idx + 1}
                </div>
                <div
                  className={`text-[12px] font-bold uppercase tracking-widest ${idx === 1 ? "text-[var(--accent-brass)]" : idx === 3 ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"}`}
                >
                  {step}
                </div>
              </div>
              {idx < 3 && (
                <div className="h-10 w-[2px] bg-[var(--border-color)] my-4 relative">
                  <ArrowDown className="w-4 h-4 text-[var(--border-color)] absolute -bottom-[6px] -left-[7px]" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* 3. IMPACT & RESULTS DATA BLOCKS */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Recovery Result Block */}
        <div className="md:col-span-5 bg-[var(--accent-steel)] text-white border border-[var(--accent-steel)] rounded-[8px] p-8 md:p-10 flex flex-col justify-between space-y-8 shadow-sm relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-[12px] font-bold uppercase tracking-widest text-white/70 flex items-center gap-2 mb-6 border-b border-white/10 pb-3">
              <TrendingUp className="w-4 h-4" /> Performance Output
            </span>
            <div className="text-[64px] sm:text-[80px] font-bold text-[var(--accent-brass)] tracking-tighter leading-none mb-4 drop-shadow-sm">
              +2%
            </div>
            <div className="text-[15px] font-bold uppercase tracking-wider text-white">
              Additional Metal Recovery
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 relative z-10">
            <p className="text-[15px] text-white/80 leading-relaxed font-medium">
              {INNOVATION_DATA.result}
            </p>
          </div>
        </div>

        {/* TSL Norms Revision Block */}
        <div className="md:col-span-7 industrial-card p-8 md:p-10 flex flex-col justify-center space-y-10 border-[var(--border-subtle)]">
          <div className="border-l-[3px] border-[var(--accent-brass)] pl-4">
            <h2 className="text-[18px] font-bold text-[var(--text-primary)]">
              Industrial Benchmark Impact
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="space-y-3">
              <span className="text-[12px] font-bold uppercase tracking-widest text-[var(--text-muted)] block border-b border-[var(--border-color)] pb-2">
                Corporate Client
              </span>
              <p className="text-[20px] font-bold text-[var(--text-primary)]">
                {INNOVATION_DATA.tslNorms.client}
              </p>
              <span className="text-[12px] text-[var(--text-primary)] font-bold uppercase tracking-wider inline-block mt-2 bg-[var(--bg-secondary)] px-3 py-1.5 border border-[var(--border-subtle)] rounded-[8px]">
                {INNOVATION_DATA.tslNorms.context}
              </span>
            </div>

            <div className="space-y-3">
              <span className="text-[12px] font-bold uppercase tracking-widest text-[var(--text-muted)] block border-b border-[var(--border-color)] pb-2">
                Chrome Recovery Norm Revision
              </span>
              <div className="flex items-center gap-5 pt-2">
                <span className="text-[32px] font-bold text-[var(--text-muted)] line-through decoration-[var(--border-color)]">
                  {INNOVATION_DATA.tslNorms.previous}
                </span>
                <ArrowRight className="w-6 h-6 text-[var(--accent-brass)]" />
                <span className="text-[40px] sm:text-[48px] font-bold text-[var(--text-primary)]">
                  {INNOVATION_DATA.tslNorms.revised}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STRATEGIC BENEFITS */}
      <section className="pt-10 border-t border-[var(--border-color)]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="border-l-[3px] border-[var(--accent-brass)] pl-5">
            <h2 className="text-[34px] md:text-[42px] font-bold text-[var(--text-primary)]">
              Strategic & Commercial Capabilities
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[1px] bg-[var(--border-color)] border border-[var(--border-color)] rounded-[8px] overflow-hidden">
          {INNOVATION_DATA.impacts.map((imp, idx) => (
            <div
              key={idx}
              className="p-8 bg-[var(--bg-surface)] flex items-center justify-center text-center hover:bg-[var(--bg-secondary)] transition-colors"
            >
              <span className="text-[12px] font-bold uppercase tracking-wider text-[var(--text-primary)] leading-tight">
                {imp}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Footer */}
      <section className="pt-8 pb-16 flex justify-center">
        <Link
          href="/contact"
          className="industrial-button-primary uppercase tracking-wider text-[13px] px-10 h-14"
        >
          Discuss Plant Modernization
        </Link>
      </section>
    </div>
  );
}
