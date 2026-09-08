import React from 'react'; 
import { SITE_IMAGES } from '@/lib/images';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Flame, Layers, Factory, Globe } from 'lucide-react';
import { FURNACE_PROJECTS, MRP_PROJECTS, SINTER_PROJECTS, INTERNATIONAL_PROJECTS } from '@/lib/data';

export default function ProjectsHubPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 transition-colors duration-200">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-8 border-b border-[var(--border-color)]">
        <div className="lg:col-span-7 space-y-6 border-l-4 border-[var(--accent-brass)] pl-4">
          <span className="text-xs uppercase tracking-widest text-[var(--text-primary)] font-semibold bg-[var(--bg-secondary)] px-3 py-1 border border-[var(--border-color)] inline-block">Track Record</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight tracking-tight">Project Portfolio Hub</h1>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            Explore complete project experience tables across Furnace O&M, Metal Recovery Plants, Sinter Plants, and International operations.
          </p>
        </div>

        <div className="lg:col-span-5 relative w-full aspect-video bg-[var(--bg-secondary)] border border-[var(--border-color)] overflow-hidden shadow-sm">
          <Image 
            src={SITE_IMAGES.projects} 
            alt="Engineering Project Portfolio" 
            fill 
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover object-center opacity-90 hover:opacity-100 transition-opacity duration-500" 
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
        <Link href="/projects/furnace" className="group py-6 border-b border-[var(--border-subtle)] space-y-4 hover:bg-[var(--bg-secondary)] p-4 -mx-4 rounded-sm transition-colors">
          <div className="flex justify-between items-center">
            <div className="w-10 h-10 bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--accent-brass)] flex items-center justify-center">
              <Flame className="w-5 h-5" />
            </div>
            <span className="text-xs text-[var(--text-primary)] font-semibold bg-[var(--bg-surface)] px-2.5 py-1 border border-[var(--border-color)]">{FURNACE_PROJECTS.length} Key Projects</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-brass)] transition-colors">Furnace O&M Projects</h2>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">Aarti Steels (18+ yrs), MSP Sponge, Electro Steel, Vision Sponge, Tata Steels, and Rungta Steels.</p>
          <div className="pt-2 text-xs font-semibold text-[var(--accent-brass)] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            View Furnace Projects Table <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </Link>
        
        <Link href="/projects/mrp" className="group py-6 border-b border-[var(--border-subtle)] space-y-4 hover:bg-[var(--bg-secondary)] p-4 -mx-4 rounded-sm transition-colors">
          <div className="flex justify-between items-center">
            <div className="w-10 h-10 bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-secondary)] flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <span className="text-xs text-[var(--text-primary)] font-semibold bg-[var(--bg-surface)] px-2.5 py-1 border border-[var(--border-color)]">{MRP_PROJECTS.length} Key Projects</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-brass)] transition-colors">MRP Projects</h2>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">Tata Steel (3x200 TPD BOOT), Jindal Stainless (1200 TPD BOOT), Sarda Metals, IFCAL, IMFA, and Shyam Metallics.</p>
          <div className="pt-2 text-xs font-semibold text-[var(--accent-brass)] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            View MRP Projects Table <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </Link>
        
        <Link href="/projects/sinter" className="group py-6 border-b border-[var(--border-subtle)] space-y-4 hover:bg-[var(--bg-secondary)] p-4 -mx-4 rounded-sm transition-colors">
          <div className="flex justify-between items-center">
            <div className="w-10 h-10 bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-primary)] flex items-center justify-center">
              <Factory className="w-5 h-5" />
            </div>
            <span className="text-xs text-[var(--text-primary)] font-semibold bg-[var(--bg-surface)] px-2.5 py-1 border border-[var(--border-color)]">{SINTER_PROJECTS.length} Key Projects</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-brass)] transition-colors">Sinter Projects</h2>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">Vision Sponge (100 TPD), Singhal Energy, Shankar Ferro, Aarti Steels (200 TPD), and Real Ispat (200 TPD).</p>
          <div className="pt-2 text-xs font-semibold text-[var(--accent-brass)] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            View Sinter Projects Table <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </Link>
        
        <Link href="/projects/international" className="group py-6 border-b border-[var(--border-subtle)] space-y-4 hover:bg-[var(--bg-secondary)] p-4 -mx-4 rounded-sm transition-colors">
          <div className="flex justify-between items-center">
            <div className="w-10 h-10 bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--accent-brass)] flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <span className="text-xs text-[var(--text-primary)] font-semibold bg-[var(--bg-surface)] px-2.5 py-1 border border-[var(--border-color)]">{INTERNATIONAL_PROJECTS.length} Global Plants</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-brass)] transition-colors">International Projects</h2>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">Sohar Oman (Indsil Altaman 300 TPD) and Zambia (Omax, Bruhati, Amar, Shree Ramdoot MRP plants).</p>
          <div className="pt-2 text-xs font-semibold text-[var(--accent-brass)] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            View International Showcase <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </Link>
      </div>
    </div>
  );
}
