import React from 'react'; 
import { SITE_IMAGES } from '@/lib/images';
import Link from 'next/link';
import Image from 'next/image';
import { SERVICES_LIST } from '@/lib/data';
import { Factory, ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 transition-colors duration-200">
      {/* Header */}
      <div className="space-y-3 border-l-4 border-[var(--accent-brass)] pl-4">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[var(--bg-secondary)] text-[var(--accent-brass)] text-xs font-semibold uppercase tracking-wider border border-[var(--border-color)]">
          <Factory className="w-3.5 h-3.5 text-[var(--accent-steel)] dark:text-[var(--accent-brass)]" />
          Engineering Capabilities
        </div>
        <h1 className="text-3xl font-bold text-[var(--text-primary)]">Core Capabilities & Services</h1>
        <p className="text-xs text-[var(--text-secondary)] max-w-2xl">
          Complete engineering, operation, maintenance, and turnkey solution portfolio for Ferro Alloy and Metallurgical plants.
        </p>
      </div>

      {/* Editorial Capability Visual */}
      <div className="relative w-full aspect-video md:aspect-[21/9] bg-[var(--bg-secondary)] border border-[var(--border-color)] overflow-hidden">
        <Image 
          src={SITE_IMAGES.furnaceOperations} 
          alt="Technical Operations" 
          fill 
          className="object-cover object-center opacity-90 hover:opacity-100 transition-opacity duration-500" 
        />
      </div>

      {/* Industrial Capability Matrix Grid */} <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {SERVICES_LIST.map((service, idx) => ( <div key={idx} className="py-8 border-t border-[var(--border-subtle)] space-y-4"> <div className="space-y-3"> <div className="w-10 h-10 bg-[var(--bg-secondary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent-steel)] dark:text-[var(--accent-brass)]"> <Factory className="w-5 h-5" /> </div> <h2 className="text-base font-bold text-[var(--text-primary)]">{service.title}</h2> <span className="inline-block text-[11px] font-semibold text-[var(--accent-brass)] bg-[var(--bg-secondary)] px-2 py-0.5 border border-[var(--border-color)]"> Capacity: {service.capacity} </span> <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{service.overview}</p> {service.products && ( <div className="pt-2 flex flex-wrap gap-1.5"> {service.products.map((p, i) => ( <span key={i} className="text-[11px] px-2 py-0.5 bg-[var(--bg-secondary)] text-[var(--text-muted)] border border-[var(--border-color)] font-medium"> {p} </span> ))} </div> )} </div> <Link href={`/services/${service.slug}`} className="pt-4 border-t border-[var(--border-subtle)] text-xs font-semibold text-[var(--accent-steel)] dark:text-[var(--accent-brass)] flex items-center gap-1 hover:underline" > Specifications & Parameters <ArrowRight className="w-3.5 h-3.5" /> </Link> </div> ))} </div> </div> );
}
