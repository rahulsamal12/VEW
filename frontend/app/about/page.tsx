import React from 'react'; 
import { SITE_IMAGES } from '@/lib/images';
import Image from 'next/image';
import { COMPANY_INFO, KEY_STATISTICS } from '@/lib/data';
import { ShieldCheck, Target } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 transition-colors duration-200">
      {/* Header and Editorial Image */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4 border-l-4 border-[var(--accent-brass)] pl-4">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[var(--bg-secondary)] text-[var(--accent-brass)] text-xs font-semibold uppercase tracking-wider border border-[var(--border-color)]">
            <ShieldCheck className="w-3.5 h-3.5 text-[var(--accent-steel)] dark:text-[var(--accent-brass)]" />
            Corporate Overview
          </div>
          <h1 className="text-3xl font-bold text-[var(--text-primary)]">About Venkateswar Engg Works Pvt. Ltd.</h1>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            {COMPANY_INFO.description}
          </p>
        </div>
        
        <div className="lg:col-span-5 relative w-full aspect-video lg:aspect-[4/3] bg-[var(--bg-secondary)] border border-[var(--border-color)] overflow-hidden rounded-md shadow-sm">
          <Image 
            src={SITE_IMAGES.about} 
            alt="Heavy Engineering Environment" 
            fill 
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover object-center opacity-90 hover:opacity-100 transition-opacity duration-500" 
          />
        </div>
      </div>

      {/* Main Grid */} <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"> <div className="lg:col-span-7 space-y-6"> <div className="bg-[var(--bg-surface)] border border-[var(--border-color)] p-6 space-y-3"> <h2 className="text-sm font-bold uppercase tracking-wider text-[var(--text-primary)] flex items-center gap-2 border-b border-[var(--border-color)] pb-2"> <Target className="w-4 h-4 text-[var(--accent-brass)]" /> Founders&apos; Vision </h2> <p className="text-xs text-[var(--text-primary)] leading-relaxed italic border-l-2 border-[var(--accent-brass)] pl-3 py-1"> &quot;{COMPANY_INFO.vision}&quot; </p> </div> <div className="bg-[var(--bg-surface)] border border-[var(--border-color)] p-6 space-y-4"> <h2 className="text-sm font-bold uppercase tracking-wider text-[var(--text-primary)] border-b border-[var(--border-color)] pb-2"> Company Information & Credentials </h2> <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs"> <div className="p-3 bg-[var(--bg-secondary)] border border-[var(--border-color)]"> <span className="text-[var(--text-muted)] block text-[11px] uppercase font-bold tracking-wider">Full Legal Name</span> <span className="text-[var(--text-primary)] font-bold">{COMPANY_INFO.name}</span> </div> <div className="p-3 bg-[var(--bg-secondary)] border border-[var(--border-color)]"> <span className="text-[var(--text-muted)] block text-[11px] uppercase font-bold tracking-wider">GSTIN</span> <span className="text-[var(--accent-brass)] font-bold">{COMPANY_INFO.gstin}</span> </div> <div className="p-3 bg-[var(--bg-secondary)] border border-[var(--border-color)]"> <span className="text-[var(--text-muted)] block text-[11px] uppercase font-bold tracking-wider">Founded</span> <span className="text-[var(--text-primary)] font-bold">{COMPANY_INFO.founded}</span> </div> <div className="p-3 bg-[var(--bg-secondary)] border border-[var(--border-color)]"> <span className="text-[var(--text-muted)] block text-[11px] uppercase font-bold tracking-wider">Founder</span> <span className="text-[var(--text-primary)] font-bold">{COMPANY_INFO.founder}</span> </div> <div className="p-3 bg-[var(--bg-secondary)] border border-[var(--border-color)] sm:col-span-2"> <span className="text-[var(--text-muted)] block text-[11px] uppercase font-bold tracking-wider">Managing Partner</span> <span className="text-[var(--text-primary)] font-bold">{COMPANY_INFO.managingPartner}</span> </div> </div> </div> </div> {/* Stats Column */} <div className="lg:col-span-5 space-y-6"> <div className="bg-[var(--bg-surface)] border border-[var(--border-color)] p-6 space-y-4"> <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--text-primary)] border-b border-[var(--border-color)] pb-2">Operational Highlights</h3> <div className="space-y-3"> {KEY_STATISTICS.map((s, idx) => ( <div key={idx} className="flex justify-between items-center text-xs"> <span className="text-[var(--text-secondary)]">{s.label}</span> <span className="font-bold text-[var(--accent-brass)] bg-[var(--bg-secondary)] px-2 py-0.5 border border-[var(--border-color)]">{s.stat}</span> </div> ))} </div> </div> </div> </div> </div> );
}
