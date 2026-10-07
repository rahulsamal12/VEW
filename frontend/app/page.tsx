export const dynamic = "force-dynamic";
import React from "react";
import {
  getSiteImages,
  getCompanyInfo,
  getHomepageData,
  getServicesData,
  getClientsData,
  getInternationalProjectsData,
  getInnovationData,
} from "@/lib/api";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Flame,
  Layers,
  Globe,
  Users,
  Award,
  ArrowRight,
  CheckCircle2,
  Factory,
  Building2,
  ChevronRight,
} from "lucide-react";

export default async function HomePage() {
  const [
    COMPANY_INFO,
    homepage,
    SERVICES_LIST,
    MAJOR_CLIENTS,
    INTERNATIONAL_PROJECTS,
    INNOVATION_DATA,
    SITE_IMAGES,
  ] = await Promise.all([
    getCompanyInfo(),
    getHomepageData(),
    getServicesData(),
    getClientsData(),
    getInternationalProjectsData(),
    getInnovationData(),
    getSiteImages(),
  ]);

  if (!homepage || !COMPANY_INFO)
    return (
      <div className="p-8 text-center text-[var(--text-muted)]">
        Service temporarily unavailable.
      </div>
    );

  return (
    <div className="space-y-16 pb-20 transition-colors duration-200">
      {/* 1. HERO SECTION — Editorial Split Panel */}
      <section className="relative pt-[110px] pb-20 md:pt-[140px] md:pb-32 border-b border-[var(--border-color)] overflow-hidden bg-[var(--bg-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 items-center">
            {/* Main Content */}
            <div className="lg:w-[55%] space-y-8 z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-[8px] text-[12px] text-[var(--accent-steel)] dark:text-[var(--text-primary)] font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-[var(--accent-brass)]" />
                ISO Certified Metallurgical Operations • Estd. 2003
              </div>

              <h1 className="mb-4">
                {homepage.heroHeading ||
                  "Engineering Excellence in Ferro Alloys"}
              </h1>

              <p className="text-[16px] md:text-[18px] text-[var(--text-secondary)] leading-[1.75] max-w-lg">
                {homepage.companyIntro ||
                  COMPANY_INFO.description ||
                  "Leading metallurgical operations."}
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/services"
                  className="industrial-button-primary uppercase tracking-wider text-[12px] flex items-center gap-2 px-8 h-12"
                >
                  Explore Our Capabilities
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/projects"
                  className="industrial-button-secondary uppercase tracking-wider text-[12px] flex items-center gap-2 px-8 h-12"
                >
                  View Our Projects
                </Link>
              </div>
            </div>

            {/* Image Panel */}
            <div className="lg:w-[45%] w-full aspect-video lg:aspect-[4/3] relative border border-[var(--border-color)] overflow-hidden bg-[var(--bg-secondary)] rounded-[8px] shadow-sm">
              <Image
                src={SITE_IMAGES.hero}
                alt="Metallurgical Furnace Operations"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center opacity-95 transition-transform duration-700 hover:scale-[1.02]"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[var(--bg-surface)] via-[var(--bg-surface)]/80 to-transparent">
                <div className="bg-[var(--bg-surface)]/95 backdrop-blur-md border border-[var(--border-color)] rounded-[8px] p-5 shadow-sm">
                  <div className="text-[12px] uppercase tracking-widest text-[var(--accent-brass)] font-bold mb-2">
                    Scale & Capacity
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[14px] font-bold text-[var(--text-primary)]">
                      20+ National Sites
                    </span>
                    <span className="text-[14px] font-bold text-[var(--text-primary)]">
                      3,100+ Engineers
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. KEY STATISTICS STRIP — Technical Capability Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
        <div className="border-l-[3px] border-[var(--accent-brass)] pl-4 mb-10">
          <span className="text-[12px] uppercase tracking-widest text-[var(--text-secondary)] font-bold">
            Track Record
          </span>
          <h2 className="text-[34px] md:text-[42px] font-bold text-[var(--text-primary)] mt-1">
            Proven Performance Metrics
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {(homepage.keyStatistics || []).map((item: any, idx: number) => (
            <div
              key={idx}
              className="industrial-card p-8 space-y-3 border-[var(--border-subtle)] hover:border-[var(--accent-brass)] transition-colors"
            >
              <div className="text-[42px] lg:text-[48px] font-bold text-[var(--accent-steel)] dark:text-[var(--accent-brass)] leading-none">
                {item.stat}
              </div>
              <div className="text-[13px] lg:text-[14px] font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CORPORATE EDITORIAL ABOUT SECTION */}
      <section className="bg-[var(--bg-secondary)] border-y border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-20 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-7 space-y-8">
                <div className="inline-block border-l-[3px] border-[var(--accent-brass)] pl-4">
                  <span className="text-[12px] uppercase tracking-widest text-[var(--accent-steel)] dark:text-[var(--accent-brass)] font-bold">
                    Official Profile
                  </span>
                  <h2 className="text-[34px] md:text-[42px] font-bold text-[var(--text-primary)] mt-2 leading-[1.15]">
                    From Electrical Contracting to Comprehensive Metallurgical
                    EPC Leader
                  </h2>
                </div>
                <p className="text-[16px] sm:text-[18px] text-[var(--text-secondary)] leading-[1.75]">
                  {homepage.companyIntro ||
                    "Founded in 2003 by Mr. Jayaram Kothari, Venkateswar Engg Works Pvt. Ltd. has evolved into an engineering powerhouse. With Managing Partner Mr. Sreenivas Kothari joining in 2007, the company expanded into full turnkey execution, plant operation & maintenance, metal recovery plant (MRP) engineering, and sinter manufacturing."}
                </p>
                <div className="p-6 bg-[var(--bg-surface)] border-l-4 border-[var(--accent-steel)] text-[15px] text-[var(--text-primary)] space-y-2 shadow-sm rounded-[8px]">
                  <span className="font-bold uppercase tracking-wider text-[12px] text-[var(--text-muted)]">
                    Leadership Vision
                  </span>
                  <p className="italic leading-[1.75] text-[var(--text-secondary)] font-medium">
                    "
                    {COMPANY_INFO.vision ||
                      "To lead the metallurgical engineering sector with unmatched operational excellence and technical capability."}
                    "
                  </p>
                </div>
              </div>
              <div className="lg:col-span-5 space-y-6">
                <div className="p-8 bg-[var(--bg-surface)] border-t-[3px] border-[var(--accent-brass)] shadow-sm rounded-[8px] space-y-4">
                  <h3 className="text-[13px] font-bold uppercase tracking-wider text-[var(--text-primary)] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-brass)]" />
                    Executive Leadership
                  </h3>
                  <div className="text-[15px] space-y-3 text-[var(--text-secondary)] font-medium">
                    <p>
                      <strong className="text-[var(--text-primary)] font-bold block mb-0.5">
                        {COMPANY_INFO.founder || "Mr. Jayaram Kothari"}
                      </strong>{" "}
                      Founder
                    </p>
                    <p>
                      <strong className="text-[var(--text-primary)] font-bold block mb-0.5">
                        {COMPANY_INFO.managingPartner ||
                          "Mr. Sreenivas Kothari"}
                      </strong>{" "}
                      Managing Partner
                    </p>
                  </div>
                </div>
                <div className="p-8 bg-[var(--bg-surface)] border-t-[3px] border-[var(--accent-steel)] shadow-sm rounded-[8px] space-y-4">
                  <h3 className="text-[12px] font-bold uppercase tracking-wider text-[var(--text-primary)] flex items-center gap-2">
                    <Award className="w-4 h-4 text-[var(--accent-steel)] dark:text-[var(--accent-brass)]" />
                    Geographical Coverage
                  </h3>
                  <p className="text-[14px] text-[var(--text-secondary)] leading-[1.7] font-medium">
                    Deep operational footprint in Odisha, Chhattisgarh, Andhra
                    Pradesh, and West Bengal, alongside international plant
                    management setups in Oman and Zambia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INDUSTRIAL CAPABILITIES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="border-l-[3px] border-[var(--accent-brass)] pl-4">
            <span className="text-[12px] uppercase tracking-widest text-[var(--text-secondary)] font-bold">
              Services
            </span>
            <h2 className="text-[34px] md:text-[42px] font-bold text-[var(--text-primary)] mt-1">
              Industrial Capability Matrix
            </h2>
          </div>
          <Link
            href="/services"
            className="text-[13px] font-bold uppercase tracking-wider text-[var(--accent-brass)] hover:text-[var(--accent-brass-hover)] flex items-center gap-1.5 mt-6 md:mt-0 transition-colors"
          >
            Explore All 9 Capabilities <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {(SERVICES_LIST || [])
            .slice(0, 6)
            .map((service: any, idx: number) => (
              <div
                key={idx}
                className="industrial-card p-8 flex flex-col h-full border-[var(--border-subtle)] hover:border-[var(--accent-brass)] transition-colors group"
              >
                <div className="flex-grow space-y-5">
                  <div className="w-12 h-12 bg-[var(--bg-secondary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent-steel)] dark:text-[var(--accent-brass)] group-hover:scale-110 transition-transform duration-300">
                    <Factory className="w-5 h-5" />
                  </div>
                  <h3 className="text-[18px] font-bold text-[var(--text-primary)]">
                    {service.title}
                  </h3>
                  <div className="inline-flex items-center text-[12px] font-bold text-[var(--accent-brass)] bg-[var(--bg-secondary)] px-3 py-1 border border-[var(--border-color)] uppercase tracking-wider">
                    Capacity: {service.capacity}
                  </div>
                  <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed">
                    {service.overview}
                  </p>
                </div>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-8 pt-5 border-t border-[var(--border-subtle)] text-[12px] font-bold uppercase tracking-wider text-[var(--accent-steel)] dark:text-[var(--accent-brass)] flex items-center gap-1.5 hover:text-[var(--text-primary)] transition-colors"
                >
                  Detailed Specifications <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
        </div>
      </section>

      {/* 5. INDUSTRIES SERVED */}
      <section className="bg-[var(--bg-secondary)] border-y border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="border-l-[3px] border-[var(--accent-brass)] pl-4 mb-12">
            <span className="text-[12px] uppercase tracking-widest text-[var(--text-muted)] font-bold">
              Sectors
            </span>
            <h2 className="text-[34px] md:text-[42px] font-bold text-[var(--text-primary)] mt-1">
              Core Industrial Sectors
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[var(--bg-surface)] border-t-[3px] border-[var(--accent-brass)] p-8 shadow-sm rounded-[8px] space-y-5">
              <div className="w-10 h-10 bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--accent-brass)]">
                <Flame className="w-5 h-5" />
              </div>
              <h3 className="text-[18px] font-bold text-[var(--text-primary)]">
                Ferro Alloys Manufacturing
              </h3>
              <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed font-medium">
                Full spectrum metallurgical O&M for Fe Cr, Si Mn, Fe Mn, Fe Si,
                LC/MC Si Mn, and Pig Iron across furnace capacities from 5 MVA
                to 24 MVA.
              </p>
            </div>
            <div className="bg-[var(--bg-surface)] border-t-[3px] border-[var(--accent-steel)] p-8 shadow-sm rounded-[8px] space-y-5">
              <div className="w-10 h-10 bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--accent-steel)] dark:text-[var(--accent-brass)]">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-[18px] font-bold text-[var(--text-primary)]">
                Ore Mining & Beneficiation
              </h3>
              <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed font-medium">
                Manganese Ore extraction and beneficiation operations, upgrading
                Manganese (26% → 40%) and Iron (40% → 70%) using washing and
                jigging.
              </p>
            </div>
            <div className="bg-[var(--bg-surface)] border-t-[3px] border-[var(--border-color)] p-8 shadow-sm rounded-[8px] space-y-5">
              <div className="w-10 h-10 bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--text-muted)]">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-[18px] font-bold text-[var(--text-primary)]">
                Public Sector Units
              </h3>
              <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed font-medium">
                Turnkey project execution and technical operations for state
                government entities such as IFCAL (Govt. of Odisha).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TECHNICAL INNOVATION CASE STUDY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-[var(--border-color)] pb-6">
            <div className="border-l-[3px] border-[var(--accent-brass)] pl-4">
              <span className="text-[12px] uppercase tracking-widest text-[var(--accent-brass)] font-bold">
                Engineering Case Study
              </span>
              <h2 className="text-[34px] md:text-[42px] font-bold text-[var(--text-primary)] mt-1 leading-[1.15]">
                {INNOVATION_DATA?.title || "Technical Innovation"}
              </h2>
            </div>
            <Link
              href="/innovation"
              className="industrial-button-secondary uppercase tracking-wider text-[12px] mt-6 md:mt-0"
            >
              Full Case Study
            </Link>
          </div>
          <p className="text-[15px] text-[var(--text-secondary)] font-medium">
            <strong className="text-[var(--text-primary)] font-bold uppercase tracking-wider text-[12px] mr-2">
              Core Subject:
            </strong>{" "}
            {INNOVATION_DATA?.subject || ""}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="industrial-card p-6 space-y-4 border-[var(--border-subtle)]">
              <p className="text-[12px] font-bold uppercase tracking-wider text-[var(--text-muted)]">
                Innovation Features
              </p>
              <ul className="space-y-2.5 text-[15px] text-[var(--text-secondary)] font-medium">
                {(INNOVATION_DATA?.elements || []).map((el: any, i: number) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-brass)] shrink-0 mt-0.5" />
                    <span className="leading-[1.7]">{el}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="industrial-card p-6 space-y-4 border-[var(--border-subtle)]">
              <p className="text-[12px] font-bold uppercase tracking-wider text-[var(--text-muted)]">
                Performance Result
              </p>
              <p className="text-[16px] text-[var(--text-primary)] leading-[1.7] font-semibold">
                {INNOVATION_DATA?.result || ""}
              </p>
            </div>
            <div className="industrial-card p-6 space-y-4 border-[var(--border-subtle)]">
              <p className="text-[12px] font-bold uppercase tracking-wider text-[var(--text-muted)]">
                TSL Chrome Recovery Norms
              </p>
              <div className="space-y-2">
                <p className="text-[var(--text-primary)] font-bold text-[15px]">
                  {INNOVATION_DATA?.tslNorms?.client || ""}
                </p>
                <p className="text-[15px] text-[var(--text-secondary)] font-medium">
                  Norms revised:{" "}
                  <span className="line-through">
                    {INNOVATION_DATA?.tslNorms?.previous || ""}
                  </span>{" "}
                  →{" "}
                  <span className="text-[var(--accent-brass)] font-bold text-[17px]">
                    {INNOVATION_DATA?.tslNorms?.revised || ""}
                  </span>
                </p>
                <p className="text-[var(--text-muted)] text-[13px] italic mt-2">
                  {INNOVATION_DATA?.tslNorms?.context || ""}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. MAJOR CLIENT ROSTER */}
      <section className="bg-[var(--bg-secondary)] border-y border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="border-l-[3px] border-[var(--accent-brass)] pl-4 mb-10 text-center md:text-left md:border-none md:pl-0 md:flex md:flex-col md:items-center">
            <span className="text-[12px] uppercase tracking-widest text-[var(--text-muted)] font-bold">
              Client Roster
            </span>
            <h2 className="text-[34px] md:text-[42px] font-bold text-[var(--text-primary)] mt-1">
              Major Industry Clients
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {(MAJOR_CLIENTS || []).map((client: any, idx: number) => (
              <div
                key={idx}
                className="bg-[var(--bg-surface)] border border-[var(--border-color)] p-6 text-center flex flex-col justify-center items-center h-28 shadow-sm rounded-[8px] hover:border-[var(--accent-steel)] transition-colors"
              >
                <p className="text-[16px] font-bold text-[var(--text-primary)] leading-tight">
                  {client.name}
                </p>
                <p className="text-[13px] font-medium text-[var(--text-muted)] mt-2 line-clamp-2">
                  {client.fullName}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. INTERNATIONAL PRESENCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-[var(--border-color)] pb-6">
            <div className="border-l-[3px] border-[var(--accent-brass)] pl-4">
              <span className="text-[12px] uppercase tracking-widest text-[var(--accent-brass)] font-bold">
                Global Footprint
              </span>
              <h2 className="text-[34px] md:text-[42px] font-bold text-[var(--text-primary)] mt-1">
                International Projects
              </h2>
            </div>
            <Link
              href="/projects/international"
              className="text-[12px] font-bold uppercase tracking-wider text-[var(--accent-brass)] hover:text-[var(--text-primary)] flex items-center gap-1.5 mt-6 md:mt-0 transition-colors"
            >
              View All International Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(INTERNATIONAL_PROJECTS || []).map((proj: any, idx: number) => (
              <div
                key={idx}
                className="industrial-card p-6 border-[var(--border-subtle)] flex flex-col h-full space-y-4 group"
              >
                <div className="flex justify-between items-start">
                  <span className="font-bold text-[16px] text-[var(--text-primary)] max-w-[70%] leading-tight">
                    {proj.client}
                  </span>
                  <span className="px-2.5 py-1 bg-[var(--bg-secondary)] text-[var(--text-primary)] text-[12px] font-bold uppercase tracking-wider border border-[var(--border-color)] rounded-[8px]">
                    {proj.year}
                  </span>
                </div>
                <p className="text-[13px] font-bold uppercase tracking-wider text-[var(--accent-brass)] flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-[var(--accent-steel)] dark:text-[var(--text-primary)] group-hover:animate-pulse" />{" "}
                  {proj.location}
                </p>
                <div className="pt-3 border-t border-[var(--border-subtle)] flex-grow">
                  <p className="text-[13px] font-bold uppercase tracking-wider text-[var(--text-muted)] mb-1">
                    Scope of Work
                  </p>
                  <p className="text-[14px] text-[var(--text-secondary)] font-medium leading-relaxed">
                    {proj.scope}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CONTACT CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-[var(--accent-steel)] text-white border border-[var(--accent-steel)] p-12 lg:p-16 text-center space-y-8 rounded-[12px] relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="mb-6 text-white">
              Partner with India's Most Reliable Metallurgical Operations Team
            </h2>
            <p className="text-[15px] sm:text-[16px] text-white/90 leading-relaxed font-medium">
              Whether for Submerged Arc Furnace O&M, Metal Recovery Plant
              installation, Sinter turnkey execution, or BOOT/BOO models,
              Venkateswar Engg Works Pvt. Ltd. delivers technical competence and
              uncompromised uptime.
            </p>
            <div className="pt-6 flex justify-center">
              <Link
                href="/contact"
                className="industrial-button-accent uppercase tracking-wider text-[14px]"
              >
                Submit Project Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
