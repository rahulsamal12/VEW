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
  getEngineeringInActionData,
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
    engineeringInAction,
  ] = await Promise.all([
    getCompanyInfo(),
    getHomepageData(),
    getServicesData(),
    getClientsData(),
    getInternationalProjectsData(),
    getInnovationData(),
    getSiteImages(),
    getEngineeringInActionData(),
  ]);

  if (!homepage || !COMPANY_INFO)
    return (
      <div className="p-8 text-center text-[var(--text-muted)]">
        Service temporarily unavailable.
      </div>
    );

  return (
    <div className="transition-colors duration-200">
      {/* 1. HERO SECTION — Editorial Split Panel */}
      <section className="relative min-h-[auto] lg:min-h-[640px] flex items-center pt-[36px] md:pt-[48px] lg:pt-[64px] pb-[48px] lg:pb-[80px] border-b border-[var(--border-color)] overflow-hidden bg-[var(--bg-surface)]">
        <div className="w-full max-w-[1280px] mx-auto px-[18px] md:px-[24px] lg:px-[40px]">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">
            {/* Main Content */}
            <div className="lg:w-[45%] space-y-6 lg:space-y-8 z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-[6px] text-[12px] text-[var(--accent-steel)] dark:text-[var(--text-primary)] font-bold uppercase tracking-wider">
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

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/services"
                  className="industrial-button-primary uppercase tracking-wider text-[12px] flex items-center gap-2 px-7 h-11"
                >
                  Explore Capabilities
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/projects"
                  className="industrial-button-secondary uppercase tracking-wider text-[12px] flex items-center gap-2 px-7 h-11"
                >
                  View Projects
                </Link>
              </div>
            </div>

            {/* Image Panel */}
            <div className="lg:w-[55%] w-full h-[320px] lg:h-[500px] relative border border-[var(--border-color)] overflow-hidden bg-[var(--bg-secondary)] rounded-[6px] shadow-sm">
              <Image
                src={SITE_IMAGES.hero}
                alt="Metallurgical Furnace Operations"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center opacity-95 transition-transform duration-700 hover:scale-[1.02]"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[var(--bg-surface)] via-[var(--bg-surface)]/80 to-transparent">
                <div className="bg-[var(--bg-surface)]/95 backdrop-blur-md border border-[var(--border-color)] rounded-[6px] p-4 shadow-sm">
                  <div className="text-[12px] uppercase tracking-widest text-[var(--accent-brass)] font-bold mb-1.5">
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
      <section className="w-full max-w-[1280px] mx-auto px-[18px] md:px-[24px] lg:px-[40px] py-[48px] lg:py-[80px]">
        <div className="border-l-[3px] border-[var(--accent-brass)] pl-4 mb-6 lg:mb-8">
          <span className="text-[12px] uppercase tracking-widest text-[var(--text-secondary)] font-bold">
            Track Record
          </span>
          <h2 className="text-[30px] md:text-[36px] font-bold text-[var(--text-primary)] mt-1">
            Proven Performance Metrics
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5">
          {(homepage.keyStatistics || []).map((item: any, idx: number) => (
            <div
              key={idx}
              className="industrial-card p-5 lg:p-6 flex flex-col justify-center space-y-2 h-[120px] lg:h-[140px] border-[var(--border-subtle)] hover:border-[var(--accent-brass)] transition-colors"
            >
              <div className="text-[36px] lg:text-[48px] font-bold text-[var(--accent-steel)] dark:text-[var(--accent-brass)] leading-none">
                {item.stat}
              </div>
              <div className="text-[12px] lg:text-[13px] font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CORPORATE EDITORIAL ABOUT SECTION */}
      <section className="bg-[var(--bg-secondary)] border-y border-[var(--border-color)]">
        <div className="w-full max-w-[1280px] mx-auto px-[18px] md:px-[24px] lg:px-[40px] py-[48px] lg:py-[80px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-block border-l-[3px] border-[var(--accent-brass)] pl-4">
                <span className="text-[12px] uppercase tracking-widest text-[var(--accent-steel)] dark:text-[var(--accent-brass)] font-bold">
                  Official Profile
                </span>
                <h2 className="text-[30px] md:text-[36px] font-bold text-[var(--text-primary)] mt-2 leading-[1.15]">
                  From Electrical Contracting to Comprehensive Metallurgical EPC Leader
                </h2>
              </div>
              <p className="text-[16px] sm:text-[17px] text-[var(--text-secondary)] leading-[1.75]">
                {homepage.companyIntro ||
                  "Founded in 2003 by Mr. Jayaram Kothari, Venkateswar Engg Works Pvt. Ltd. has evolved into an engineering powerhouse. With Managing Partner Mr. Sreenivas Kothari joining in 2007, the company expanded into full turnkey execution, plant operation & maintenance, metal recovery plant (MRP) engineering, and sinter manufacturing."}
              </p>
              <div className="p-6 bg-[var(--bg-surface)] border-l-[3px] border-[var(--accent-steel)] text-[15px] text-[var(--text-primary)] space-y-2 border-r border-t border-b border-r-[var(--border-color)] border-y-[var(--border-color)] rounded-r-[6px]">
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
            <div className="lg:col-span-5 flex flex-col space-y-5 lg:mt-4 h-full">
              <div className="flex-1 p-6 lg:p-8 bg-[var(--bg-surface)] border-t-[3px] border-[var(--accent-brass)] shadow-sm rounded-[6px] flex flex-col justify-center border-x border-b border-[var(--border-color)]">
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
              <div className="flex-1 p-6 lg:p-8 bg-[var(--bg-surface)] border-t-[3px] border-[var(--accent-steel)] shadow-sm rounded-[6px] flex flex-col justify-center border-x border-b border-[var(--border-color)]">
                <h3 className="text-[12px] font-bold uppercase tracking-wider text-[var(--text-primary)] flex items-center gap-2 mb-3">
                  <Award className="w-4 h-4 text-[var(--accent-steel)] dark:text-[var(--accent-brass)]" />
                  Geographical Coverage
                </h3>
                <p className="text-[14px] text-[var(--text-secondary)] leading-[1.7] font-medium">
                  Deep operational footprint in Odisha, Chhattisgarh, Andhra Pradesh, and West Bengal, alongside international plant management setups in Oman and Zambia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INDUSTRIAL CAPABILITIES GRID */}
      <section className="w-full max-w-[1280px] mx-auto px-[18px] md:px-[24px] lg:px-[40px] py-[48px] lg:py-[80px]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 lg:mb-10">
          <div className="border-l-[3px] border-[var(--accent-brass)] pl-4">
            <span className="text-[12px] uppercase tracking-widest text-[var(--text-secondary)] font-bold">
              Services
            </span>
            <h2 className="text-[30px] md:text-[36px] font-bold text-[var(--text-primary)] mt-1">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {(SERVICES_LIST || [])
            .slice(0, 6)
            .map((service: any, idx: number) => (
              <div
                key={idx}
                className="industrial-card p-6 lg:p-8 flex flex-col h-[380px] border-[var(--border-subtle)] hover:border-[var(--accent-brass)] transition-colors group"
              >
                <div className="flex-grow flex flex-col">
                  <div className="w-12 h-12 mb-5 bg-[var(--bg-secondary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent-steel)] dark:text-[var(--accent-brass)] group-hover:scale-105 transition-transform duration-300">
                    <Factory className="w-5 h-5" />
                  </div>
                  <h3 className="text-[18px] font-bold text-[var(--text-primary)] mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <div className="inline-flex w-fit items-center text-[11px] font-bold text-[var(--accent-brass)] bg-[var(--bg-secondary)] px-2.5 py-1 mb-4 border border-[var(--border-color)] uppercase tracking-wider">
                    Capacity: {service.capacity}
                  </div>
                  <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed line-clamp-3">
                    {service.overview}
                  </p>
                </div>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-auto pt-5 border-t border-[var(--border-subtle)] text-[12px] font-bold uppercase tracking-wider text-[var(--accent-steel)] dark:text-[var(--accent-brass)] flex items-center gap-1.5 hover:text-[var(--text-primary)] transition-colors"
                >
                  Detailed Specifications <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
        </div>
      </section>

      {/* 5. INDUSTRIES SERVED */}
      <section className="bg-[var(--bg-secondary)] border-y border-[var(--border-color)]">
        <div className="w-full max-w-[1280px] mx-auto px-[18px] md:px-[24px] lg:px-[40px] py-[48px] lg:py-[80px]">
          <div className="border-l-[3px] border-[var(--accent-brass)] pl-4 mb-8 lg:mb-10">
            <span className="text-[12px] uppercase tracking-widest text-[var(--text-muted)] font-bold">
              Sectors
            </span>
            <h2 className="text-[30px] md:text-[36px] font-bold text-[var(--text-primary)] mt-1">
              Core Industrial Sectors
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {(homepage.sectors && homepage.sectors.length > 0 ? homepage.sectors : [
              {
                title: "Ferro Alloys Manufacturing",
                description: "Full spectrum metallurgical O&M for Fe Cr, Si Mn, Fe Mn, Fe Si, LC/MC Si Mn, and Pig Iron across furnace capacities from 5 MVA to 24 MVA.",
                icon: "Flame"
              },
              {
                title: "Ore Mining & Beneficiation",
                description: "Manganese Ore extraction and beneficiation operations, upgrading Manganese (26% → 40%) and Iron (40% → 70%) using washing and jigging.",
                icon: "Layers"
              },
              {
                title: "Public Sector Units",
                description: "Turnkey project execution and technical operations for state government entities such as IFCAL (Govt. of Odisha).",
                icon: "Building2"
              }
            ]).map((sector: any, idx: number) => {
              const borderColors = ['border-[var(--accent-brass)]', 'border-[var(--accent-steel)]', 'border-[var(--border-color)]'];
              const textColors = ['text-[var(--accent-brass)]', 'text-[var(--accent-steel)] dark:text-[var(--accent-brass)]', 'text-[var(--text-muted)]'];
              const IconComp = sector.icon === 'Flame' ? Flame : sector.icon === 'Layers' ? Layers : Building2;
              
              return (
                <div key={idx} className={`bg-[var(--bg-surface)] border-t-[3px] border-x border-b border-x-[var(--border-color)] border-b-[var(--border-color)] ${borderColors[idx % 3]} p-6 lg:p-8 shadow-sm rounded-[6px] space-y-4 h-[240px] flex flex-col justify-center`}>
                  <div className={`w-10 h-10 bg-[var(--bg-secondary)] flex items-center justify-center ${textColors[idx % 3]}`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-[17px] font-bold text-[var(--text-primary)] leading-snug">
                    {sector.title}
                  </h3>
                  <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed font-medium line-clamp-4">
                    {sector.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. TECHNICAL INNOVATION CASE STUDY */}
      <section className="w-full max-w-[1280px] mx-auto px-[18px] md:px-[24px] lg:px-[40px] py-[48px] lg:py-[80px]">
        <div className="space-y-6 lg:space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-[var(--border-color)] pb-6">
            <div className="border-l-[3px] border-[var(--accent-brass)] pl-4">
              <span className="text-[12px] uppercase tracking-widest text-[var(--accent-brass)] font-bold">
                Engineering Case Study
              </span>
              <h2 className="text-[30px] md:text-[36px] font-bold text-[var(--text-primary)] mt-1 leading-[1.15]">
                {INNOVATION_DATA?.title || "Technical Innovation"}
              </h2>
            </div>
            <Link
              href="/innovation"
              className="industrial-button-secondary uppercase tracking-wider text-[12px] mt-6 md:mt-0 h-10 px-6"
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="industrial-card p-6 h-[260px] flex flex-col space-y-4 border-[var(--border-subtle)]">
              <p className="text-[12px] font-bold uppercase tracking-wider text-[var(--text-muted)]">
                Innovation Features
              </p>
              <ul className="space-y-2.5 text-[14px] text-[var(--text-secondary)] font-medium">
                {(INNOVATION_DATA?.elements || []).map((el: any, i: number) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-brass)] shrink-0 mt-0.5" />
                    <span className="leading-[1.6] line-clamp-2">{el}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="industrial-card p-6 h-[260px] flex flex-col space-y-4 border-[var(--border-subtle)]">
              <p className="text-[12px] font-bold uppercase tracking-wider text-[var(--text-muted)]">
                Performance Result
              </p>
              <p className="text-[15px] text-[var(--text-primary)] leading-[1.6] font-semibold">
                {INNOVATION_DATA?.result || ""}
              </p>
            </div>
            <div className="industrial-card p-6 h-[260px] flex flex-col space-y-4 border-[var(--border-subtle)]">
              <p className="text-[12px] font-bold uppercase tracking-wider text-[var(--text-muted)]">
                TSL Chrome Recovery Norms
              </p>
              <div className="space-y-2">
                <p className="text-[var(--text-primary)] font-bold text-[14px]">
                  {INNOVATION_DATA?.tslNorms?.client || ""}
                </p>
                <p className="text-[14px] text-[var(--text-secondary)] font-medium">
                  Norms revised:{" "}
                  <span className="line-through">
                    {INNOVATION_DATA?.tslNorms?.previous || ""}
                  </span>{" "}
                  →{" "}
                  <span className="text-[var(--accent-brass)] font-bold text-[16px]">
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
        <div className="w-full max-w-[1280px] mx-auto px-[18px] md:px-[24px] lg:px-[40px] py-[64px]">
          <div className="flex flex-col items-center text-center mb-9 lg:mb-10">
            <span className="text-[12px] uppercase tracking-widest text-[var(--text-muted)] font-bold">
              Client Roster
            </span>
            <h2 className="text-[30px] md:text-[36px] font-bold text-[var(--text-primary)] mt-1">
              Major Industry Clients
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-6">
            {(MAJOR_CLIENTS || []).map((client: any, idx: number) => (
              <div
                key={idx}
                className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-[6px] shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:-translate-y-[2px] hover:border-[var(--accent-steel)] hover:shadow-md transition-all duration-300 px-5 py-6 flex flex-col items-center justify-center min-h-[150px] lg:min-h-[160px]"
              >
                {client.logo && (
                  <div className="w-[50px] h-[50px] mb-4 flex items-center justify-center">
                    <img src={client.logo} alt={client.name} className="max-w-full max-h-full object-contain" />
                  </div>
                )}
                <p className="text-[16px] lg:text-[17px] font-[600] text-[var(--text-primary)] text-center leading-tight">
                  {client.name}
                </p>
                {client.fullName && client.fullName !== client.name && (
                  <p className="text-[13px] lg:text-[14px] text-[var(--text-secondary)] text-center mt-2.5 leading-[1.45] font-medium">
                    {client.fullName}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. INTERNATIONAL PRESENCE */}
      <section className="w-full max-w-[1280px] mx-auto px-[18px] md:px-[24px] lg:px-[40px] py-[48px] lg:py-[80px]">
        <div className="space-y-6 lg:space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-[var(--border-color)] pb-4 lg:pb-6">
            <div className="border-l-[3px] border-[var(--accent-brass)] pl-4">
              <span className="text-[12px] uppercase tracking-widest text-[var(--accent-brass)] font-bold">
                Global Footprint
              </span>
              <h2 className="text-[30px] md:text-[36px] font-bold text-[var(--text-primary)] mt-1">
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
          <div className="flex flex-wrap justify-center gap-5">
            {(INTERNATIONAL_PROJECTS || []).map((proj: any, idx: number) => (
              <div
                key={idx}
                className="industrial-card p-6 border-[var(--border-subtle)] flex flex-col w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] min-h-[220px] group"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="font-bold text-[15px] lg:text-[16px] text-[var(--text-primary)] max-w-[75%] leading-tight">
                    {proj.client}
                  </span>
                  <span className="px-2.5 py-1 bg-[var(--bg-secondary)] text-[var(--text-primary)] text-[11px] font-bold uppercase tracking-wider border border-[var(--border-color)] rounded-[4px]">
                    {proj.year}
                  </span>
                </div>
                <p className="text-[12px] font-bold uppercase tracking-wider text-[var(--accent-brass)] flex items-center gap-1.5 mb-4">
                  <Globe className="w-4 h-4 text-[var(--accent-steel)] dark:text-[var(--text-primary)] group-hover:animate-pulse" />{" "}
                  {proj.location}
                </p>
                <div className="pt-4 border-t border-[var(--border-subtle)] flex-grow">
                  <p className="text-[12px] font-bold uppercase tracking-wider text-[var(--text-muted)] mb-1.5">
                    Scope of Work
                  </p>
                  <p className="text-[14px] text-[var(--text-secondary)] font-medium leading-relaxed line-clamp-3">
                    {proj.scope}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CONTACT CTA */}
      <section className="w-full max-w-[1100px] mx-auto px-[18px] md:px-[24px] py-[48px] lg:py-[80px]">
        <div className="bg-[var(--accent-steel)] text-white border border-[var(--accent-steel)] px-8 py-[48px] lg:px-12 lg:py-[56px] text-center space-y-6 lg:space-y-8 rounded-[6px] relative overflow-hidden shadow-sm">
          <div className="relative z-10 max-w-2xl mx-auto space-y-5 lg:space-y-6">
            <h2 className="mb-4 lg:mb-6 text-[28px] lg:text-[32px] text-white leading-tight">
              {homepage.ctaHeading || "Partner with India's Most Reliable Metallurgical Operations Team"}
            </h2>
            <p className="text-[15px] lg:text-[16px] text-white/90 leading-relaxed font-medium">
              {homepage.ctaDescription || "Whether for Submerged Arc Furnace O&M, Metal Recovery Plant installation, Sinter turnkey execution, or BOOT/BOO models, Venkateswar Engg Works Pvt. Ltd. delivers technical competence and uncompromised uptime."}
            </p>
            <div className="pt-4 lg:pt-6 flex justify-center">
              <Link
                href={homepage.ctaLink || "/contact"}
                className="industrial-button-accent uppercase tracking-wider text-[13px] h-12 px-8"
              >
                {homepage.ctaText || "Submit Project Inquiry"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10. ENGINEERING IN ACTION — FINAL SCROLLING ROW */}
      {(engineeringInAction?.settings?.enabled !== false) && (
        <section className="bg-[var(--bg-secondary)] border-t border-[var(--border-color)] overflow-hidden pt-[64px] lg:pt-[72px] pb-[64px] lg:pb-[72px]">
          <div className="w-full max-w-[1280px] mx-auto px-[16px] md:px-[24px] lg:px-[32px] xl:px-[40px] mb-[36px] lg:mb-[40px]">
            <div className="border-l-[2px] border-[var(--accent-brass)] pl-4">
              <span className="block text-[12px] md:text-[13px] uppercase tracking-[0.12em] text-[var(--accent-brass)] font-bold">
                {engineeringInAction?.settings?.heading || "Engineering in Action"}
              </span>
              <h2 className="text-[30px] md:text-[40px] lg:text-[48px] font-semibold text-[var(--text-primary)] mt-2 leading-[1.2]">
                {engineeringInAction?.settings?.heading || "Engineering in Action"}
              </h2>
              <p className="text-[16px] md:text-[18px] text-[var(--text-secondary)] mt-3 max-w-[700px] leading-relaxed">
                {engineeringInAction?.settings?.description || "Advanced furnace and metallurgical operations engineered for reliable industrial performance."}
              </p>
            </div>
          </div>

          {/* Marquee Container */}
          <div className="w-full max-w-[1280px] mx-auto px-[16px] md:px-[24px] lg:px-[32px] xl:px-[40px] overflow-hidden">
            <div className="flex w-max animate-marquee gap-[24px] group-hover:[animation-play-state:paused] motion-reduce:animate-[marquee_90s_linear_infinite]">
              {/* First Set */}
              {(engineeringInAction?.items?.length > 0 ? engineeringInAction.items : [
                { imageUrl: "/images/a_wide_high_resolution_industrial_interior_scene.png", caption: "FURNACE OPERATIONS" },
                { imageUrl: "/images/vew-furnace-operations.png", caption: "METALLURGICAL ENGINEERING" },
                { imageUrl: "/images/vew-metal-breaking.png", caption: "INDUSTRIAL OPERATIONS" },
                { imageUrl: "/images/vew-mrp-material-recovery.png", caption: "MATERIAL RECOVERY" },
                { imageUrl: "/images/vew-about-engineering.png", caption: "FURNACE OPERATIONS" },
              ]).map((img: any, idx: number) => (
                <div key={`engineering-img-1-${idx}`} className="relative shrink-0 rounded-[4px] lg:rounded-[6px] overflow-hidden border border-[var(--border-color)] bg-[var(--bg-surface)] h-[220px] lg:h-[300px] xl:h-[325px] w-[300px] md:w-[380px] lg:w-[450px] lg:min-w-[450px]">
                  <Image
                    src={img.imageUrl}
                    alt={img.caption || `Industrial view ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 300px, (max-width: 1024px) 380px, 450px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 lg:bottom-5 lg:left-5 z-10">
                    <span className="text-[11px] lg:text-[12px] font-bold uppercase tracking-wider text-white/95 drop-shadow-md">
                      {img.caption}
                    </span>
                  </div>
                </div>
              ))}
              {/* Second Set for seamless loop */}
              {(engineeringInAction?.items?.length > 0 ? engineeringInAction.items : [
                { imageUrl: "/images/a_wide_high_resolution_industrial_interior_scene.png", caption: "FURNACE OPERATIONS" },
                { imageUrl: "/images/vew-furnace-operations.png", caption: "METALLURGICAL ENGINEERING" },
                { imageUrl: "/images/vew-metal-breaking.png", caption: "INDUSTRIAL OPERATIONS" },
                { imageUrl: "/images/vew-mrp-material-recovery.png", caption: "MATERIAL RECOVERY" },
                { imageUrl: "/images/vew-about-engineering.png", caption: "FURNACE OPERATIONS" },
              ]).map((img: any, idx: number) => (
                <div key={`engineering-img-2-${idx}`} className="relative shrink-0 rounded-[4px] lg:rounded-[6px] overflow-hidden border border-[var(--border-color)] bg-[var(--bg-surface)] h-[220px] lg:h-[300px] xl:h-[325px] w-[300px] md:w-[380px] lg:w-[450px] lg:min-w-[450px]">
                  <Image
                    src={img.imageUrl}
                    alt={img.caption || `Industrial view ${idx + 1} duplicate`}
                    fill
                    sizes="(max-width: 768px) 300px, (max-width: 1024px) 380px, 450px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 lg:bottom-5 lg:left-5 z-10">
                    <span className="text-[11px] lg:text-[12px] font-bold uppercase tracking-wider text-white/95 drop-shadow-md">
                      {img.caption}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
