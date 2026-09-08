import React from 'react'; 
import { SITE_IMAGES } from '@/lib/images';
import Image from 'next/image';
import { ShieldCheck, Wrench, Cpu, ArrowDown, ArrowRight } from 'lucide-react';

export default function PackingDispatchSopPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-12 border-b border-[var(--border-color)]">
        <div className="lg:col-span-7 space-y-6">
          <h1 className="text-3xl sm:text-5xl font-bold text-[var(--text-primary)] tracking-tight leading-tight">Packing & Dispatch</h1>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            Weighing, packing in 1MT jumbo bags, labelling, safe storage, and loading operations for final dispatch.
          </p>
        </div>

        <div className="lg:col-span-5 relative w-full aspect-video bg-[var(--bg-secondary)] border border-[var(--border-color)] overflow-hidden rounded-md shadow-sm">
          <Image 
            src={SITE_IMAGES.packingDispatch} 
            alt="Packing and Dispatch" 
            fill 
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover object-center opacity-90 hover:opacity-100 transition-opacity duration-500" 
          />
        </div>
      </div>

      <div className="py-12 border-t border-[var(--border-color)] space-y-8">
        <h2 className="text-xs uppercase tracking-widest text-[var(--accent-brass)] font-bold text-center">Packing & Dispatch Procedure</h2>
        
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-2 py-4">
          <div className="flex-1 industrial-card p-4 border border-[var(--border-color)] text-center bg-[var(--bg-surface)] hover:border-[var(--accent-brass)] transition-colors">
            <h3 className="font-bold text-[var(--text-primary)] text-xs tracking-wider mb-2">WEIGHING</h3>
            <p className="text-[10px] text-[var(--text-secondary)]">Auto bagging machine recording tare/gross weight.</p>
          </div>
          
          <div className="flex justify-center lg:items-center text-[var(--text-muted)] py-1 lg:py-0">
            <ArrowRight className="hidden lg:block w-4 h-4" />
            <ArrowDown className="lg:hidden w-4 h-4" />
          </div>
          
          <div className="flex-1 industrial-card p-4 border border-[var(--border-color)] text-center bg-[var(--bg-surface)] hover:border-[var(--accent-brass)] transition-colors">
            <h3 className="font-bold text-[var(--text-primary)] text-xs tracking-wider mb-2">PACKING</h3>
            <p className="text-[10px] text-[var(--text-secondary)]">1 MT jumbo bags, 50kg bags, or loose.</p>
          </div>
          
          <div className="flex justify-center lg:items-center text-[var(--text-muted)] py-1 lg:py-0">
            <ArrowRight className="hidden lg:block w-4 h-4" />
            <ArrowDown className="lg:hidden w-4 h-4" />
          </div>
          
          <div className="flex-1 industrial-card p-4 border border-[var(--border-color)] text-center bg-[var(--bg-surface)] hover:border-[var(--accent-brass)] transition-colors">
            <h3 className="font-bold text-[var(--text-primary)] text-xs tracking-wider mb-2">LABELLING</h3>
            <p className="text-[10px] text-[var(--text-secondary)]">Grade, Lot no, Weight, Date printed on bag.</p>
          </div>
          
          <div className="flex justify-center lg:items-center text-[var(--text-muted)] py-1 lg:py-0">
            <ArrowRight className="hidden lg:block w-4 h-4" />
            <ArrowDown className="lg:hidden w-4 h-4" />
          </div>
          
          <div className="flex-1 industrial-card p-4 border border-[var(--border-color)] text-center bg-[var(--bg-surface)] hover:border-[var(--accent-brass)] transition-colors">
            <h3 className="font-bold text-[var(--text-primary)] text-xs tracking-wider mb-2">STORAGE</h3>
            <p className="text-[10px] text-[var(--text-secondary)]">Covered shed grade-wise stacking.</p>
          </div>
          
          <div className="flex justify-center lg:items-center text-[var(--text-muted)] py-1 lg:py-0">
            <ArrowRight className="hidden lg:block w-4 h-4" />
            <ArrowDown className="lg:hidden w-4 h-4" />
          </div>

          <div className="flex-1 industrial-card p-4 border border-[var(--border-color)] text-center bg-[var(--bg-surface)] hover:border-[var(--accent-brass)] transition-colors">
            <h3 className="font-bold text-[var(--text-primary)] text-xs tracking-wider mb-2">DISPATCH</h3>
            <p className="text-[10px] text-[var(--text-secondary)]">Truck weighing, invoice, loading.</p>
          </div>
        </div>
        
        <div className="py-4 border-b border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] font-mono flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[var(--accent-brass)]" />
          <span>Quality Control Statement: <strong>UDIN not applicable here but QC cert with each lot.</strong></span>
        </div>
      </div> {/* Maintenance Grid */} <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-[var(--border-color)]"> <div className="py-8 border-t border-[var(--border-subtle)] space-y-4"> <h3 className="text-base font-bold text-[var(--text-primary)] flex items-center gap-2"> <Wrench className="w-4 h-4 text-[var(--accent-brass)]" /> Mechanical Maintenance </h3> <ul className="space-y-2 text-xs text-[var(--text-secondary)]"> <li>• Auto bagging machine calibration & maintenance</li> <li>• Bag stitching machine servicing</li> <li>• Weighing scales verification</li> <li>• Forklift servicing & pneumatic conveying</li> <li>• Loading chutes maintenance</li> </ul> </div> <div className="py-8 border-t border-[var(--border-subtle)] space-y-4"> <h3 className="text-base font-bold text-[var(--text-primary)] flex items-center gap-2"> <Cpu className="w-4 h-4 text-[var(--accent-brass)]" /> Electrical Maintenance </h3> <ul className="space-y-2 text-xs text-[var(--text-secondary)]"> <li>• Load cell calibration for weighbridges & scales</li> <li>• Bagging machine PLC controls</li> <li>• Printer & barcode scanner maintenance</li> <li>• Dispatch area lighting & fire alarm systems</li> </ul> </div> </div> </div> );
}
