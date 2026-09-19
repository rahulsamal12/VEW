export const dynamic = 'force-dynamic';
import React from 'react'; 
import { SITE_IMAGES } from '@/lib/images';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck, Flame, Layers, Globe, Users, Award, ArrowRight, CheckCircle2, Factory, Building2, ChevronRight
} from 'lucide-react';
import {
  COMPANY_INFO, KEY_STATISTICS, SERVICES_LIST, MAJOR_CLIENTS, INTERNATIONAL_PROJECTS, INNOVATION_DATA
} from '@/lib/data';

export default function HomePage() {
  return (
    <div className="space-y-16 pb-20 transition-colors duration-200">

      {/* 1. HERO SECTION — Editorial Split Panel */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-[var(--border-color)] overflow-hidden bg-[var(--bg-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Main Content */}
            <div className="lg:w-1/2 space-y-8 z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--bg-secondary)] border border-[var(--border-color)] text-xs text-[var(--accent-steel)] dark:text-[var(--accent-brass)] font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[var(--accent-brass)]" />
                ISO Certified Metallurgical Operations • Estd. 2003
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)] leading-tight">
                Engineering Excellence in <br/> <span className="text-[var(--accent-brass)]">Ferro Alloys</span>
              </h1>
              
              <p className="text-base text-[var(--text-secondary)] leading-relaxed max-w-lg">
                {COMPANY_INFO.description}
              </p>
              
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/services"
                  className="industrial-button-primary uppercase tracking-wider text-xs flex items-center gap-2 px-6 h-12"
                >
                  Explore Our Capabilities
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/projects"
                  className="industrial-button-secondary uppercase tracking-wider text-xs flex items-center gap-2 px-6 h-12"
                >
                  View Our Projects
                </Link>
              </div>
            </div>

            {/* Image Panel */}
            <div className="lg:w-1/2 w-full aspect-video lg:aspect-[4/3] relative border border-[var(--border-color)] overflow-hidden bg-[var(--bg-secondary)] rounded-lg shadow-sm">
              <Image 
                src={SITE_IMAGES.hero}
                alt="Metallurgical Furnace Operations"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center opacity-90"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[var(--bg-surface)] to-transparent">
                <div className="bg-[var(--bg-surface)]/90 backdrop-blur border border-[var(--border-color)] p-4 shadow-xl">
                  <div className="text-xs uppercase tracking-widest text-[var(--accent-brass)] font-bold mb-1">Scale & Capacity</div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-[var(--text-primary)]">20+ National Sites</span>
                    <span className="text-sm font-semibold text-[var(--text-primary)]">3,100+ Engineers</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. KEY STATISTICS STRIP — Technical Capability Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-l-4 border-[var(--accent-brass)] pl-4 mb-8">
          <span className="text-xs uppercase tracking-widest text-[var(--text-secondary)] font-bold">Track Record</span>
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">Proven Performance Metrics</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {KEY_STATISTICS.map((item, idx) => (
            <div key={idx} className="bg-[var(--bg-surface)] border border-[var(--border-color)] p-6 space-y-1">
              <div className="text-3xl font-bold text-[var(--accent-steel)] dark:text-[var(--accent-brass)]">
                {item.stat}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)]">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CORPORATE EDITORIAL ABOUT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block border-l-2 border-[var(--accent-brass)] pl-3">
                <span className="text-xs uppercase tracking-widest text-[var(--accent-steel)] dark:text-[var(--accent-brass)] font-bold">Official Profile</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mt-1">
                  From Electrical Contracting to Comprehensive Metallurgical EPC Leader
                </h2>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Founded in 2003 by Mr. Jayaram Kothari, Venkateswar Engg Works Pvt. Ltd. has evolved into an engineering powerhouse. With Managing Partner Mr. Sreenivas Kothari joining in 2007, the company expanded into full turnkey execution, plant operation & maintenance, metal recovery plant (MRP) engineering, and sinter manufacturing.
              </p>
              <div className="p-4 bg-[var(--bg-secondary)] border-l-4 border-[var(--accent-steel)] text-xs text-[var(--text-primary)] space-y-1">
                <span className="font-bold uppercase tracking-wider text-[11px] text-[var(--accent-brass)]">Leadership Vision</span>
                <p className="italic leading-relaxed">{COMPANY_INFO.vision}</p>
              </div>
            </div>
            <div className="lg:col-span-5 space-y-4">
              <div className="p-8 bg-[var(--bg-secondary)] border-l-2 border-[var(--accent-brass)] space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--text-primary)] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent-brass)]" />
                  Executive Leadership
                </h3>
                <div className="text-xs space-y-2 text-[var(--text-secondary)]">
                  <p><strong className="text-[var(--text-primary)]">Mr. Jayaram Kothari:</strong> Founder (Ph: 9776111022)</p>
                  <p><strong className="text-[var(--text-primary)]">Mr. Sreenivas Kothari:</strong> Managing Partner (Ph: 9437034481)</p>
                </div>
              </div>
              <div className="p-8 bg-[var(--bg-secondary)] border-l-2 border-[var(--accent-brass)] space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--text-primary)] flex items-center gap-2">
                  <Award className="w-4 h-4 text-[var(--accent-brass)]" />
                  Geographical Coverage
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Deep operational footprint in Odisha, Chhattisgarh, Andhra Pradesh, and West Bengal, alongside international plant management setups in Oman and Zambia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INDUSTRIAL CAPABILITIES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
          <div className="border-l-4 border-[var(--accent-brass)] pl-4">
            <span className="text-xs uppercase tracking-widest text-[var(--text-secondary)] font-bold">Services</span>
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">Industrial Capability Matrix</h2>
          </div>
          <Link href="/services" className="text-xs font-semibold text-[var(--accent-brass)] hover:underline flex items-center gap-1 mt-4 md:mt-0">
            Explore All 9 Capabilities <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES_LIST.slice(0, 6).map((service, idx) => (
            <div key={idx} className="flex flex-col space-y-4 py-8 border-b border-[var(--border-color)] hover:border-[var(--accent-brass)] transition-colors">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-[var(--bg-secondary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent-steel)] dark:text-[var(--accent-brass)]">
                  <Factory className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[var(--text-primary)]">
                  {service.title}
                </h3>
                <div className="inline-block text-[11px] font-semibold text-[var(--accent-brass)] bg-[var(--bg-secondary)] px-2 py-0.5 border border-[var(--border-color)]">
                  Capacity: {service.capacity}
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {service.overview}
                </p>
              </div>
              <Link href={`/services/${service.slug}`} className="pt-4 border-t border-[var(--border-subtle)] text-xs font-semibold text-[var(--accent-steel)] dark:text-[var(--accent-brass)] flex items-center gap-1 hover:underline">
                Detailed Specifications <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 5. INDUSTRIES SERVED */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-l-4 border-[var(--accent-brass)] pl-4 mb-8">
          <span className="text-xs uppercase tracking-widest text-[var(--text-secondary)] font-bold">Sectors</span>
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">Core Industrial Sectors</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="py-8 border-t border-[var(--border-color)] space-y-4">
            <div className="w-8 h-8 bg-[var(--bg-secondary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent-brass)]">
              <Flame className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-[var(--text-primary)]">Ferro Alloys Manufacturing</h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Full spectrum metallurgical O&M for Fe Cr, Si Mn, Fe Mn, Fe Si, LC/MC Si Mn, and Pig Iron across furnace capacities from 5 MVA to 24 MVA.
            </p>
          </div>
          <div className="py-8 border-t border-[var(--border-color)] space-y-4">
            <div className="w-8 h-8 bg-[var(--bg-secondary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent-brass)]">
              <Layers className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-[var(--text-primary)]">Ore Mining & Beneficiation</h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Manganese Ore extraction and beneficiation operations, upgrading Manganese (26% → 40%) and Iron (40% → 70%) using washing and jigging.
            </p>
          </div>
          <div className="py-8 border-t border-[var(--border-color)] space-y-4">
            <div className="w-8 h-8 bg-[var(--bg-secondary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent-brass)]">
              <Building2 className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-[var(--text-primary)]">Public Sector Units</h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Turnkey project execution and technical operations for state government entities such as IFCAL (Govt. of Odisha).
            </p>
          </div>
        </div>
      </section>

      {/* 6. TECHNICAL INNOVATION CASE STUDY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border-color)] pb-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[var(--accent-brass)] font-bold">Engineering Case Study</span>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mt-1">{INNOVATION_DATA.title}</h2>
            </div>
            <Link href="/innovation" className="industrial-button-secondary uppercase tracking-wider text-xs">
              Full Case Study
            </Link>
          </div>
          <p className="text-xs text-[var(--text-secondary)]">
            <strong className="text-[var(--text-primary)]">Core Subject:</strong> {INNOVATION_DATA.subject}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-[var(--bg-secondary)] border border-[var(--border-color)] space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">Innovation Features</p>
              <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
                {INNOVATION_DATA.elements.map((el, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-brass)]" />
                    {el}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-4 bg-[var(--bg-secondary)] border border-[var(--border-color)] space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">Performance Result</p>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-medium">
                {INNOVATION_DATA.result}
              </p>
            </div>
            <div className="p-4 bg-[var(--bg-secondary)] border border-[var(--border-color)] space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">TSL Chrome Recovery Norms</p>
              <div className="text-xs space-y-1 text-[var(--text-secondary)]">
                <p className="text-[var(--text-primary)] font-bold">{INNOVATION_DATA.tslNorms.client}</p>
                <p>
                  Norms revised: <span className="line-through">{INNOVATION_DATA.tslNorms.previous}</span> → <span className="text-[var(--accent-brass)] font-bold">{INNOVATION_DATA.tslNorms.revised}</span>
                </p>
                <p className="text-[var(--text-muted)] text-[11px]">{INNOVATION_DATA.tslNorms.context}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. MAJOR CLIENT ROSTER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-l-4 border-[var(--accent-brass)] pl-4 mb-8">
          <span className="text-xs uppercase tracking-widest text-[var(--text-secondary)] font-bold">Client Roster</span>
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">Major Industry Clients</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {MAJOR_CLIENTS.map((client, idx) => (
            <div key={idx} className="bg-[var(--bg-surface)] border border-[var(--border-color)] p-4 text-center flex flex-col justify-center items-center h-20">
              <p className="text-sm font-bold text-[var(--text-primary)]">{client.name}</p>
              <p className="text-[10px] text-[var(--text-secondary)] mt-0.5 line-clamp-1">{client.fullName}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. INTERNATIONAL PRESENCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-[var(--border-color)] pb-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[var(--accent-brass)] font-bold">Global Footprint</span>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mt-1">International Projects</h2>
            </div>
            <Link href="/projects/international" className="text-xs font-semibold text-[var(--accent-brass)] hover:underline flex items-center gap-1 mt-2 md:mt-0">
              View All International Projects <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {INTERNATIONAL_PROJECTS.map((proj, idx) => (
              <div key={idx} className="p-5 bg-[var(--bg-secondary)] border border-[var(--border-color)] space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-[var(--text-primary)]">{proj.client}</span>
                  <span className="px-2 py-0.5 bg-[var(--bg-surface)] text-[var(--accent-brass)] text-[10px] font-bold border border-[var(--border-color)]">{proj.year}</span>
                </div>
                <p className="text-xs text-[var(--accent-brass)] font-medium flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5 text-[var(--accent-steel)] dark:text-[var(--accent-brass)]" /> {proj.location}
                </p>
                <p className="text-xs text-[var(--text-secondary)]">Scope: {proj.scope}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CONTACT CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
            Partner with India&apos;s Most Reliable Metallurgical Operations Team
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            Whether for Submerged Arc Furnace O&M, Metal Recovery Plant installation, Sinter turnkey execution, or BOOT/BOO models, Venkateswar Engg Works Pvt. Ltd. delivers technical competence and uncompromised uptime.
          </p>
          <div className="pt-2 flex justify-center">
            <Link href="/contact" className="industrial-button-primary uppercase tracking-wider text-xs">
              Submit Project Inquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


