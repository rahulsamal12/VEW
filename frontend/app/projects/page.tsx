export const dynamic = "force-dynamic";
import React from "react";
import { getSiteImages } from "@/lib/api";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Flame, Layers, Factory, Globe } from "lucide-react";
import {
  getFurnaceProjectsData,
  getMRPProjectsData,
  getSinterProjectsData,
  getInternationalProjectsData,
} from "@/lib/api";

export default async function ProjectsHubPage() {
  const SITE_IMAGES = await getSiteImages();
  const [
    FURNACE_PROJECTS,
    MRP_PROJECTS,
    SINTER_PROJECTS,
    INTERNATIONAL_PROJECTS,
  ] = await Promise.all([
    getFurnaceProjectsData(),
    getMRPProjectsData(),
    getSinterProjectsData(),
    getInternationalProjectsData(),
  ]);
  const furnaceCount = FURNACE_PROJECTS?.length || 0;
  const mrpCount = MRP_PROJECTS?.length || 0;
  const sinterCount = SINTER_PROJECTS?.length || 0;
  const intlCount = INTERNATIONAL_PROJECTS?.length || 0;
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[110px] pb-16 md:pt-[140px] md:pb-20 space-y-12 transition-colors duration-200">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pb-12 border-b border-[var(--border-color)]">
        <div className="lg:col-span-7 space-y-6 border-l-[3px] border-[var(--accent-brass)] pl-5">
          <span className="text-[12px] uppercase tracking-widest text-[var(--text-primary)] font-bold bg-[var(--bg-secondary)] px-3 py-1 border border-[var(--border-color)] rounded-[8px] inline-block">
            Track Record
          </span>
          <h1 className="text-[34px] sm:text-[40px] md:text-[52px] font-bold text-[var(--text-primary)] leading-[1.1]">
            Project Portfolio Hub
          </h1>
          <p className="text-[16px] md:text-[18px] text-[var(--text-secondary)] leading-relaxed font-medium">
            Explore complete project experience tables across Furnace O&M, Metal
            Recovery Plants, Sinter Plants, and International operations.
          </p>
        </div>

        <div className="lg:col-span-5 relative w-full aspect-video bg-[var(--bg-secondary)] border border-[var(--border-color)] overflow-hidden rounded-[8px] shadow-sm">
          <Image
            src={SITE_IMAGES.projects}
            alt="Engineering Project Portfolio"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover object-center opacity-95 hover:scale-[1.02] transition-transform duration-700 rounded-[8px]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
        <Link
          href="/projects/furnace"
          className="industrial-card group p-8 space-y-5 border-[var(--border-subtle)] hover:border-[var(--accent-brass)] transition-colors flex flex-col h-full"
        >
          <div className="flex justify-between items-center mb-2">
            <div className="w-12 h-12 bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--accent-brass)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Flame className="w-5 h-5" />
            </div>
            <span className="text-[12px] text-[var(--text-primary)] font-bold uppercase tracking-wider bg-[var(--bg-secondary)] px-3 py-1.5 border border-[var(--border-color)] rounded-[8px]">
              {furnaceCount} Key Projects
            </span>
          </div>
          <h3 className="text-[22px] font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-brass)] transition-colors">
            Furnace O&M Projects
          </h3>
          <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed font-medium flex-grow">
            Aarti Steels (18+ yrs), MSP Sponge, Electro Steel, Vision Sponge,
            Tata Steels, and Rungta Steels.
          </p>
          <div className="pt-4 mt-auto border-t border-[var(--border-subtle)] text-[12px] font-bold uppercase tracking-wider text-[var(--accent-steel)] dark:text-[var(--accent-brass)] flex items-center gap-1.5 group-hover:text-[var(--text-primary)] transition-colors">
            View Furnace Projects Table <ArrowRight className="w-4 h-4" />
          </div>
        </Link>

        <Link
          href="/projects/mrp"
          className="industrial-card group p-8 space-y-5 border-[var(--border-subtle)] hover:border-[var(--accent-brass)] transition-colors flex flex-col h-full"
        >
          <div className="flex justify-between items-center mb-2">
            <div className="w-12 h-12 bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--accent-steel)] dark:text-[var(--text-secondary)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Layers className="w-5 h-5" />
            </div>
            <span className="text-[12px] text-[var(--text-primary)] font-bold uppercase tracking-wider bg-[var(--bg-secondary)] px-3 py-1.5 border border-[var(--border-color)] rounded-[8px]">
              {mrpCount} Key Projects
            </span>
          </div>
          <h3 className="text-[22px] font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-brass)] transition-colors">
            MRP Projects
          </h3>
          <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed font-medium flex-grow">
            Tata Steel (3x200 TPD BOOT), Jindal Stainless (1200 TPD BOOT), Sarda
            Metals, IFCAL, IMFA, and Shyam Metallics.
          </p>
          <div className="pt-4 mt-auto border-t border-[var(--border-subtle)] text-[12px] font-bold uppercase tracking-wider text-[var(--accent-steel)] dark:text-[var(--accent-brass)] flex items-center gap-1.5 group-hover:text-[var(--text-primary)] transition-colors">
            View MRP Projects Table <ArrowRight className="w-4 h-4" />
          </div>
        </Link>

        <Link
          href="/projects/sinter"
          className="industrial-card group p-8 space-y-5 border-[var(--border-subtle)] hover:border-[var(--accent-brass)] transition-colors flex flex-col h-full"
        >
          <div className="flex justify-between items-center mb-2">
            <div className="w-12 h-12 bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Factory className="w-5 h-5" />
            </div>
            <span className="text-[12px] text-[var(--text-primary)] font-bold uppercase tracking-wider bg-[var(--bg-secondary)] px-3 py-1.5 border border-[var(--border-color)] rounded-[8px]">
              {sinterCount} Key Projects
            </span>
          </div>
          <h3 className="text-[22px] font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-brass)] transition-colors">
            Sinter Projects
          </h3>
          <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed font-medium flex-grow">
            Vision Sponge (100 TPD), Singhal Energy, Shankar Ferro, Aarti Steels
            (200 TPD), and Real Ispat (200 TPD).
          </p>
          <div className="pt-4 mt-auto border-t border-[var(--border-subtle)] text-[12px] font-bold uppercase tracking-wider text-[var(--accent-steel)] dark:text-[var(--accent-brass)] flex items-center gap-1.5 group-hover:text-[var(--text-primary)] transition-colors">
            View Sinter Projects Table <ArrowRight className="w-4 h-4" />
          </div>
        </Link>

        <Link
          href="/projects/international"
          className="industrial-card group p-8 space-y-5 border-[var(--border-subtle)] hover:border-[var(--accent-brass)] transition-colors flex flex-col h-full"
        >
          <div className="flex justify-between items-center mb-2">
            <div className="w-12 h-12 bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--accent-brass)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Globe className="w-5 h-5" />
            </div>
            <span className="text-[12px] text-[var(--text-primary)] font-bold uppercase tracking-wider bg-[var(--bg-secondary)] px-3 py-1.5 border border-[var(--border-color)] rounded-[8px]">
              {intlCount} Global Plants
            </span>
          </div>
          <h3 className="text-[22px] font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-brass)] transition-colors">
            International Projects
          </h3>
          <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed font-medium flex-grow">
            Sohar Oman (Indsil Altaman 300 TPD) and Zambia (Omax, Bruhati, Amar,
            Shree Ramdoot MRP plants).
          </p>
          <div className="pt-4 mt-auto border-t border-[var(--border-subtle)] text-[12px] font-bold uppercase tracking-wider text-[var(--accent-steel)] dark:text-[var(--accent-brass)] flex items-center gap-1.5 group-hover:text-[var(--text-primary)] transition-colors">
            View International Showcase <ArrowRight className="w-4 h-4" />
          </div>
        </Link>
      </div>
    </div>
  );
}
