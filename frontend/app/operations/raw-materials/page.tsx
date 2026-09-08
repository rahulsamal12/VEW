import React from "react"; 
import { SITE_IMAGES } from '@/lib/images';
import Image from "next/image";
import { RAW_MATERIAL_DATA } from "@/lib/data";
import { Layers, CheckCircle2, ShieldAlert } from "lucide-react";
export default function RawMaterialsSopPage() {
  const { operatingConditions, materials, note, excelNote, storageShed } =
    RAW_MATERIAL_DATA;
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      {" "}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-8">
        <div className="lg:col-span-7 space-y-4">
          <h1 className="text-3xl sm:text-5xl font-bold text-[var(--text-primary)] leading-tight tracking-tight">
            Raw Material Requirements & Storage Shed
          </h1>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            Official raw material consumption matrix, monthly requirements, size
            specifications, operating conditions, and 3-month inventory storage
            shed guidelines.
          </p>
        </div>

        <div className="lg:col-span-5 relative w-full aspect-video bg-[var(--bg-secondary)] border border-[var(--border-color)] overflow-hidden rounded-md shadow-sm">
          <Image 
            src={SITE_IMAGES.rawMaterials} 
            alt="Raw Materials Stockpile" 
            fill 
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover object-center opacity-90 hover:opacity-100 transition-opacity duration-500" 
          />
        </div>
      </div>

      {/* Operating Conditions Banner */}{" "}
      <div className="py-8 border-t border-[var(--border-subtle)] space-y-4">
        {" "}
        <h2 className="text-xl font-bold text-[var(--text-primary)]">
          Operating Conditions (22.5 MVA SAF)
        </h2>{" "}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-xs">
          {" "}
          <div className="py-3 border-b border-[var(--border-subtle)]">
            {" "}
            <span className="text-[var(--text-secondary)] block">
              Load
            </span>{" "}
            <span className="text-[var(--accent-brass)] font-bold">
              {operatingConditions.load}
            </span>{" "}
          </div>{" "}
          <div className="py-3 border-b border-[var(--border-subtle)]">
            {" "}
            <span className="text-[var(--text-secondary)] block">
              Power Factor (PF)
            </span>{" "}
            <span className="text-[var(--text-primary)] font-bold">
              {operatingConditions.pf}
            </span>{" "}
          </div>{" "}
          <div className="py-3 border-b border-[var(--border-subtle)]">
            {" "}
            <span className="text-[var(--text-secondary)] block">
              Load Factor (LF)
            </span>{" "}
            <span className="text-[var(--text-primary)] font-bold">
              {operatingConditions.lf}
            </span>{" "}
          </div>{" "}
          <div className="py-3 border-b border-[var(--border-subtle)]">
            {" "}
            <span className="text-[var(--text-secondary)] block">
              Specific Power
            </span>{" "}
            <span className="text-[var(--text-primary)] font-bold">
              {operatingConditions.specificPower}
            </span>{" "}
          </div>{" "}
          <div className="py-3 border-b border-[var(--border-subtle)]">
            {" "}
            <span className="text-[var(--text-secondary)] block">
              Production / Day
            </span>{" "}
            <span className="text-[var(--accent-brass)] font-bold">
              {operatingConditions.productionPerDay}
            </span>{" "}
          </div>{" "}
          <div className="py-3 border-b border-[var(--border-subtle)]">
            {" "}
            <span className="text-[var(--text-secondary)] block">
              Total Monthly Production
            </span>{" "}
            <span className="text-[var(--text-primary)] font-bold">
              {operatingConditions.totalProduction}
            </span>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* Raw Materials Table */}{" "}
      <div className="py-8 border-t border-[var(--border-subtle)] space-y-4">
        {" "}
        <h2 className="text-xl font-bold text-[var(--text-primary)]">
          Raw Material Consumption Matrix
        </h2>{" "}
        <div className="table-responsive custom-scrollbar">
          {" "}
          <table className="w-full text-left text-xs text-[var(--text-secondary)]">
            {" "}
            <thead className="bg-[var(--bg-surface)] text-[var(--text-secondary)] uppercase font-semibold border-b border-[var(--border-color)] text-[var(--text-primary)]">
              {" "}
              <tr>
                {" "}
                <th className="p-4 text-[var(--text-primary)]">
                  Material
                </th>{" "}
                <th className="p-4 text-[var(--text-primary)]">
                  Consumption / MT Metal
                </th>{" "}
                <th className="p-4 text-[var(--text-primary)]">
                  Monthly Requirement
                </th>{" "}
                <th className="p-4 text-[var(--text-primary)]">Size</th>{" "}
                <th className="p-4 text-[var(--text-primary)]">
                  Specifications
                </th>{" "}
              </tr>{" "}
            </thead>{" "}
            <tbody className="divide-y divide-[var(--border-color)]">
              {" "}
              {materials.map((mat, idx) => (
                <tr key={idx} className="hover:bg-[var(--bg-secondary)]">
                  {" "}
                  <td className="p-4 font-bold text-[var(--text-primary)]">
                    {mat.material}
                  </td>{" "}
                  <td className="p-4 text-[var(--accent-brass)] font-semibold">
                    {mat.consumption}
                  </td>{" "}
                  <td className="p-4 text-[var(--text-primary)]">
                    {mat.monthly}
                  </td>{" "}
                  <td className="p-4 text-[var(--text-table-body)]">
                    {mat.size}
                  </td>{" "}
                  <td className="p-4 text-[var(--text-secondary)] font-medium">
                    {mat.specs}
                  </td>{" "}
                </tr>
              ))}{" "}
            </tbody>{" "}
          </table>{" "}
        </div>{" "}
        {/* Source Notes */}{" "}
        <div className="pt-4 space-y-2 border-t border-[var(--border-color)] text-xs">
          {" "}
          <div className="p-3 rounded-sm bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] flex items-center gap-2">
            {" "}
            <ShieldAlert className="w-4 h-4 shrink-0" />{" "}
            <span>
              <strong>Note:</strong> {note}
            </span>{" "}
          </div>{" "}
          <div className="py-3 border-b border-[var(--border-subtle)] text-[var(--text-secondary)] font-mono text-[11px]">
            {" "}
            {excelNote}{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* Storage Shed Requirements */}{" "}
      <div className="py-8 border-t border-[var(--border-subtle)] space-y-4">
        {" "}
        <h2 className="text-xl font-bold text-[var(--text-primary)]">
          STORAGE SHED REQUIREMENT
        </h2>{" "}
        <p className="text-xs text-[var(--text-secondary)]">
          {storageShed.description}
        </p>{" "}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
          {" "}
          <div className="py-4 border-b border-[var(--border-subtle)]">
            {" "}
            <span className="text-[var(--text-secondary)] block mb-1">
              Dimensions
            </span>{" "}
            <span className="text-[var(--accent-brass)] font-bold text-base">
              {storageShed.dimensions}
            </span>{" "}
          </div>{" "}
          <div className="py-4 border-b border-[var(--border-subtle)]">
            {" "}
            <span className="text-[var(--text-secondary)] block mb-1">
              Center Height
            </span>{" "}
            <span className="text-[var(--text-primary)] font-bold text-base">
              {storageShed.height}
            </span>{" "}
          </div>{" "}
          <div className="py-4 border-b border-[var(--border-subtle)]">
            {" "}
            <span className="text-[var(--text-secondary)] block mb-1">
              Sides Height
            </span>{" "}
            <span className="text-[var(--text-primary)] font-bold text-base">
              {storageShed.bothSides}
            </span>{" "}
          </div>{" "}
          <div className="py-4 border-b border-[var(--border-subtle)]">
            {" "}
            <span className="text-[var(--text-secondary)] block mb-1">
              Shed Construction Type
            </span>{" "}
            <span className="text-[var(--text-primary)] font-bold text-base">
              {storageShed.type}
            </span>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
