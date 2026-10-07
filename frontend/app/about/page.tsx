export const dynamic = "force-dynamic";
import React from "react";
import { getSiteImages, getCompanyInfo, getHomepageData, getAboutData } from "@/lib/api";
import Image from "next/image";
import { ShieldCheck, Target } from "lucide-react";

export default async function AboutPage() {
  const [SITE_IMAGES, COMPANY_INFO, homepage, ABOUT_DATA] = await Promise.all([
    getSiteImages(),
    getCompanyInfo(),
    getHomepageData(),
    getAboutData(),
  ]);
  const KEY_STATISTICS = homepage?.keyStatistics || [];

  if (!COMPANY_INFO)
    return (
      <div className="p-8 text-center text-[var(--text-muted)]">
        Service temporarily unavailable.
      </div>
    );
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[110px] pb-16 md:pt-[140px] md:pb-20 space-y-12 transition-colors duration-200">
      {/* Header and Editorial Image */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-6 border-l-[3px] border-[var(--accent-brass)] pl-5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--bg-secondary)] text-[var(--accent-brass)] text-[12px] font-bold uppercase tracking-wider border border-[var(--border-color)] rounded-[8px]">
            <ShieldCheck className="w-3.5 h-3.5 text-[var(--accent-steel)] dark:text-[var(--accent-brass)]" />
            Corporate Overview
          </div>
          <h1 className="text-[34px] sm:text-[40px] md:text-[52px] font-bold text-[var(--text-primary)] leading-[1.1]">
            About Venkateswar Engg Works Pvt. Ltd.
          </h1>
          <p className="text-[16px] md:text-[18px] text-[var(--text-secondary)] leading-[1.75] font-normal">
            {ABOUT_DATA.overview || COMPANY_INFO.description}
          </p>
        </div>

        <div className="lg:col-span-5 relative w-full aspect-video lg:aspect-[4/3] bg-[var(--bg-secondary)] border border-[var(--border-color)] overflow-hidden rounded-[8px] shadow-sm">
          <Image
            src={SITE_IMAGES.about}
            alt="Heavy Engineering Environment"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover object-center opacity-95 hover:scale-[1.02] transition-transform duration-700"
          />
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 space-y-8">
          <div className="industrial-card p-6 md:p-8 space-y-4">
            <h2 className="text-[34px] md:text-[42px] font-bold text-[var(--text-primary)] border-b border-[var(--border-color)] pb-4">
              Founders&apos; Vision
            </h2>
            <p className="text-[16px] md:text-[18px] text-[var(--text-primary)] leading-[1.75] italic border-l-[4px] border-[var(--accent-brass)] pl-5 py-2 font-normal">
              &quot;{ABOUT_DATA.foundersVision || COMPANY_INFO.vision}&quot;
            </p>
          </div>

          <div className="industrial-card p-6 md:p-8 space-y-6">
            <h2 className="text-[34px] md:text-[42px] font-bold text-[var(--text-primary)] border-b border-[var(--border-color)] pb-4">
              Company Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[13px]">
              <div className="p-4 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-[8px]">
                <span className="text-[var(--text-muted)] block text-[12px] uppercase font-bold tracking-wider mb-1">
                  Full Legal Name
                </span>
                <span className="text-[var(--text-primary)] font-bold text-[14px]">
                  {COMPANY_INFO.companyName ||
                    "Venkateswar Engg Works Pvt. Ltd."}
                </span>
              </div>
              <div className="p-4 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-[8px]">
                <span className="text-[var(--text-muted)] block text-[12px] uppercase font-bold tracking-wider mb-1">
                  GSTIN
                </span>
                <span className="text-[var(--accent-brass)] font-bold text-[14px]">
                  {COMPANY_INFO.gstin}
                </span>
              </div>
              <div className="p-4 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-[8px]">
                <span className="text-[var(--text-muted)] block text-[12px] uppercase font-bold tracking-wider mb-1">
                  Founded
                </span>
                <span className="text-[var(--text-primary)] font-bold text-[14px]">
                  {COMPANY_INFO.founded}
                </span>
              </div>
              <div className="p-4 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-[8px]">
                <span className="text-[var(--text-muted)] block text-[12px] uppercase font-bold tracking-wider mb-1">
                  Founder
                </span>
                <span className="text-[var(--text-primary)] font-bold text-[14px]">
                  {COMPANY_INFO.founder}
                </span>
              </div>
              <div className="p-4 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-[8px] sm:col-span-2">
                <span className="text-[var(--text-muted)] block text-[12px] uppercase font-bold tracking-wider mb-1">
                  Managing Partner
                </span>
                <span className="text-[var(--text-primary)] font-bold text-[14px]">
                  {COMPANY_INFO.managingPartner}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="industrial-card p-8 space-y-5 border-[var(--border-subtle)] bg-[var(--accent-steel)] text-white border-none shadow-sm relative overflow-hidden">
            {/* Removed decorative faint pattern */}
            <h3 className="text-[14px] font-bold uppercase tracking-wider text-white border-b border-white/10 pb-3 relative z-10">
              Operational Highlights
            </h3>
            <div className="space-y-4 relative z-10">
              {KEY_STATISTICS.map((s, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center text-[13px]"
                >
                  <span className="text-white/80 font-medium">{s.label}</span>
                  <span className="font-bold text-[var(--accent-brass)] bg-black/20 px-3 py-1 border border-white/5 rounded-[8px] shadow-inner">
                    {s.stat}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
