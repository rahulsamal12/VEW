export const dynamic = "force-dynamic";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getOperationalSopData } from "@/lib/api";
import { ArrowRight, Factory, ArrowDownRight } from "lucide-react";

export default async function OperationsSopHubPage() {
  const OPERATIONAL_SOP_DATA = await getOperationalSopData();
  if (!OPERATIONAL_SOP_DATA)
    return (
      <div className="p-8 text-center text-[var(--text-muted)]">
        Service temporarily unavailable.
      </div>
    );
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[110px] pb-16 md:pt-[140px] md:pb-20 space-y-10 transition-colors duration-200">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-8">
        <div className="lg:col-span-7 space-y-4 border-l-4 border-[var(--accent-brass)] pl-4">
          <h1 className="text-[34px] sm:text-[40px] md:text-[52px] font-bold text-[var(--text-primary)] leading-[1.1]">
            {OPERATIONAL_SOP_DATA.heading} ({OPERATIONAL_SOP_DATA.furnaceSpec})
            — {OPERATIONAL_SOP_DATA.location}
          </h1>
          <p className="text-[16px] md:text-[18px] text-[var(--text-secondary)] font-normal leading-[1.75]">
            {OPERATIONAL_SOP_DATA.title}: {OPERATIONAL_SOP_DATA.scopeMatrix}.
            Comprehensive operational and technical workflow covering{" "}
            {OPERATIONAL_SOP_DATA.scopeOverview}.
          </p>
        </div>

        <div className="lg:col-span-5 relative w-full aspect-video bg-[var(--bg-secondary)] border border-[var(--border-color)] overflow-hidden rounded-[8px] shadow-sm">
          <Image
            src="/images/vew-furnace-operations.png"
            alt="Furnace Smelting Operations"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover object-center opacity-90 hover:opacity-100 transition-opacity duration-500"
          />
        </div>
      </div>
      {/* Visual Process Flow Diagram */}{" "}
      <div className="bg-[var(--bg-surface)] border border-[var(--border-color)] p-6 space-y-4">
        {" "}
        <h2 className="text-xs uppercase tracking-widest text-[var(--accent-brass)] font-bold text-[var(--text-primary)]">
          Standard Operating Process Flow
        </h2>{" "}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-2 text-center text-xs font-bold">
          {" "}
          <div className="p-3 bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)]">
            RAW MATERIAL
          </div>{" "}
          <div className="p-3 bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)]">
            PREPARATION
          </div>{" "}
          <div className="p-3 bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)]">
            SMELTING
          </div>{" "}
          <div className="p-3 bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)]">
            CASTING
          </div>{" "}
          <div className="p-3 bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)]">
            BREAKING
          </div>{" "}
          <div className="p-3 bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)]">
            RECOVERY
          </div>{" "}
          <div className="p-3 bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)]">
            PACKING
          </div>{" "}
          <div className="p-3 bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)]">
            DISPATCH
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* Scope Matrix */}{" "}
      <div className="bg-[var(--bg-surface)] border border-[var(--border-color)] p-6 space-y-4">
        {" "}
        <h2 className="text-sm font-bold uppercase tracking-wider text-[var(--text-primary)]">
          Full Operational Scope ({OPERATIONAL_SOP_DATA.coverage})
        </h2>{" "}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {" "}
          {OPERATIONAL_SOP_DATA.activities.map((act, i) => (
            <div
              key={i}
              className="p-3 bg-[var(--bg-secondary)] border border-[var(--border-color)] text-center text-xs font-semibold text-[var(--text-primary)]"
            >
              {" "}
              {act}{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
      {/* 6 Sequential Operations Cards */}{" "}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {" "}
        {OPERATIONAL_SOP_DATA.steps && OPERATIONAL_SOP_DATA.steps.slice(0, 6).map((step: any, idx: number) => {
          const stepConfigs = [
            { href: "/operations/raw-materials", bottomText: "Material Matrix & Shed SOP" },
            { href: "/operations/material-prep", bottomText: "Preparation SOP" },
            { href: "/operations/saf-furnace", bottomText: "SAF Operation SOP" },
            { href: "/operations/casting-cooling", bottomText: "Casting SOP" },
            { href: "/operations/breaking-sorting", bottomText: "Breaking & Recovery SOP" },
            { href: "/operations/packing-dispatch", bottomText: "Packing & Dispatch SOP" }
          ];
          const config = stepConfigs[idx] || stepConfigs[0];
          
          return (
            <Link
              key={idx}
              href={config.href}
              className="py-8 border-t border-[var(--border-subtle)] space-y-4"
            >
              {" "}
              <div className="flex justify-between items-center">
                {" "}
                <span className="text-[12px] font-bold text-[var(--accent-brass)] bg-[var(--bg-secondary)] px-2 py-0.5 border border-[var(--border-color)]">
                  STEP 0{idx + 1}
                </span>{" "}
                <ArrowDownRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--accent-brass)]" />{" "}
              </div>{" "}
              <h3 className="text-[22px] font-bold text-[var(--text-primary)]">
                {step.name}
              </h3>{" "}
              <p className="text-[14px] md:text-[15px] text-[var(--text-secondary)] font-medium leading-[1.6]">
                {step.overview}
              </p>{" "}
              <div className="pt-2 text-xs text-[var(--accent-steel)] dark:text-[var(--accent-brass)] font-semibold flex items-center gap-1">
                {" "}
                {config.bottomText} <ArrowRight className="w-3.5 h-3.5" />{" "}
              </div>{" "}
            </Link>
          );
        })}
      </div>{" "}
    </div>
  );
}
