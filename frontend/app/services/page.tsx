import React from "react";
import { getSiteImages } from "@/lib/api";
import Link from "next/link";
import Image from "next/image";
import { getServicesData } from "@/lib/api";
import { Factory, ArrowRight } from "lucide-react";

export default async function ServicesPage() {
  const SITE_IMAGES = await getSiteImages();
  const SERVICES_LIST = await getServicesData();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[110px] pb-16 md:pt-[140px] md:pb-20 space-y-12 transition-colors duration-200">
      {/* Header */}
      <div className="space-y-6 border-l-[3px] border-[var(--accent-brass)] pl-5">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--bg-secondary)] text-[var(--accent-brass)] text-[12px] font-bold uppercase tracking-wider border border-[var(--border-color)] rounded-[8px]">
          <Factory className="w-3.5 h-3.5 text-[var(--accent-steel)] dark:text-[var(--accent-brass)]" />
          Engineering Capabilities
        </div>
        <h1 className="text-[34px] sm:text-[40px] md:text-[52px] font-bold text-[var(--text-primary)] leading-[1.1]">
          Core Capabilities & Services
        </h1>
        <p className="text-[16px] md:text-[18px] text-[var(--text-secondary)] max-w-3xl leading-[1.75] font-normal">
          Complete engineering, operation, maintenance, and turnkey solution
          portfolio for Ferro Alloy and Metallurgical plants.
        </p>
      </div>

      {/* Editorial Capability Visual */}
      <div className="relative w-full aspect-video md:aspect-[21/9] bg-[var(--bg-secondary)] border border-[var(--border-color)] overflow-hidden rounded-[8px] shadow-sm">
        <Image
          src={SITE_IMAGES.furnaceOperations}
          alt="Technical Operations"
          fill
          className="object-cover object-center opacity-95 hover:scale-[1.02] transition-transform duration-700"
        />
      </div>

      {/* Industrial Capability Matrix Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {SERVICES_LIST.map((service, idx) => (
          <div
            key={idx}
            className="industrial-card p-8 flex flex-col h-full border-[var(--border-subtle)] hover:border-[var(--accent-brass)] transition-colors group"
          >
            <div className="flex-grow space-y-5">
              <div className="w-12 h-12 bg-[var(--bg-secondary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent-steel)] dark:text-[var(--accent-brass)] group-hover:scale-110 transition-transform duration-300">
                <Factory className="w-5 h-5" />
              </div>
              <h2 className="text-[18px] font-bold text-[var(--text-primary)]">
                {service.title}
              </h2>
              <div className="inline-flex items-center text-[12px] font-bold text-[var(--accent-brass)] bg-[var(--bg-secondary)] px-3 py-1 border border-[var(--border-color)] uppercase tracking-wider">
                Capacity: {service.capacity}
              </div>
              <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed font-medium">
                {service.overview}
              </p>
              {service.products && (
                <div className="pt-2 flex flex-wrap gap-2">
                  {service.products.map((p, i) => (
                    <span
                      key={i}
                      className="text-[12px] px-2.5 py-1 bg-[var(--bg-secondary)] text-[var(--text-muted)] border border-[var(--border-color)] font-bold uppercase tracking-wider rounded-[8px]"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <Link
              href={`/services/${service.slug}`}
              className="mt-8 pt-5 border-t border-[var(--border-subtle)] text-[12px] font-bold uppercase tracking-wider text-[var(--accent-steel)] dark:text-[var(--accent-brass)] flex items-center gap-1.5 hover:text-[var(--text-primary)] transition-colors"
            >
              Specifications & Parameters
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
