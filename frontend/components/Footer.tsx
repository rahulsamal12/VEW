import React from "react";
import Link from "next/link";
import { ShieldCheck, Phone, Mail, ExternalLink } from "lucide-react";
import { getCompanyInfo } from "@/lib/api";

export default async function Footer() {
  const COMPANY_INFO = await getCompanyInfo();
  if (!COMPANY_INFO) return null;
  return (
    <footer className="bg-[var(--accent-steel)] text-[#D1D9DD] font-sans border-t border-[rgba(255,255,255,0.15)] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-12">
          {/* Col 1: Brand & About (Span 4) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex flex-col gap-2">
              <span className="company-logo text-[24px] md:text-[28px] text-[#F3F4F2]">
                Venkateswar Engg
                <br />
                Works Pvt. Ltd.
              </span>
            </div>

            <p className="text-[15px] md:text-[16px] text-[#D1D9DD] font-normal leading-[1.75] max-w-sm">
              Multi-disciplinary engineering firm with deep operational
              expertise in Ferro Alloys & Metallurgical Engineering across India
              and globally.
            </p>

            <div className="text-[14px] space-y-3 pt-4">
              <div className="flex items-center gap-2 text-[#B68A2C] font-semibold">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-[#F3F4F2]">GSTIN:</span>{" "}
                <span className="text-[#D1D9DD]">{COMPANY_INFO.gstin}</span>
              </div>
              <p className="text-[#D1D9DD]">
                Founded: {COMPANY_INFO.founded} by {COMPANY_INFO.founder}
              </p>
            </div>
          </div>

          {/* Col 2: Core Capabilities (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-[#F3F4F2] font-bold text-[13px] tracking-wider mb-8 uppercase">
              Core Capabilities
            </h4>
            <ul className="space-y-4 text-[15px] md:text-[16px] font-normal">
              <li>
                <Link
                  href="/services/furnace-om"
                  className="text-[#E5E9EA] hover:text-[#B68A2C] transition-colors duration-200"
                >
                  Furnace O&M (5-24 MVA)
                </Link>
              </li>
              <li>
                <Link
                  href="/services/mrp"
                  className="text-[#E5E9EA] hover:text-[#B68A2C] transition-colors duration-200"
                >
                  Metal Recovery Plants (50-1500 TPD)
                </Link>
              </li>
              <li>
                <Link
                  href="/services/sinter-plants"
                  className="text-[#E5E9EA] hover:text-[#B68A2C] transition-colors duration-200"
                >
                  Sinter Plants (40-200 TPD)
                </Link>
              </li>
              <li>
                <Link
                  href="/services/boot-boo"
                  className="text-[#E5E9EA] hover:text-[#B68A2C] transition-colors duration-200"
                >
                  BOOT / BOO Models (Up to 19 Yrs)
                </Link>
              </li>
              <li>
                <Link
                  href="/services/turnkey-projects"
                  className="text-[#E5E9EA] hover:text-[#B68A2C] transition-colors duration-200"
                >
                  Turnkey EPC Execution
                </Link>
              </li>
              <li>
                <Link
                  href="/services/beneficiary-units"
                  className="text-[#E5E9EA] hover:text-[#B68A2C] transition-colors duration-200"
                >
                  Beneficiary Ore Upgrade
                </Link>
              </li>
              <li>
                <Link
                  href="/services/fabrication-erection"
                  className="text-[#E5E9EA] hover:text-[#B68A2C] transition-colors duration-200"
                >
                  Fabrication & Erection
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Operations & Projects (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-[#F3F4F2] font-bold text-[13px] tracking-wider mb-8 uppercase">
              Operations & Projects
            </h4>
            <ul className="space-y-4 text-[15px] md:text-[16px] font-normal">
              <li>
                <Link
                  href="/projects/furnace"
                  className="text-[#E5E9EA] hover:text-[#B68A2C] transition-colors duration-200"
                >
                  Furnace O&M Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/mrp"
                  className="text-[#E5E9EA] hover:text-[#B68A2C] transition-colors duration-200"
                >
                  MRP Project Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/sinter"
                  className="text-[#E5E9EA] hover:text-[#B68A2C] transition-colors duration-200"
                >
                  Sinter Turnkey Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/international"
                  className="text-[#E5E9EA] hover:text-[#B68A2C] transition-colors duration-200"
                >
                  International Projects (Oman & Zambia)
                </Link>
              </li>
              <li>
                <Link
                  href="/operations/raw-materials"
                  className="text-[#E5E9EA] hover:text-[#B68A2C] transition-colors duration-200"
                >
                  NGM Smelters Raw Material SOP
                </Link>
              </li>
              <li>
                <Link
                  href="/innovation"
                  className="text-[#E5E9EA] hover:text-[#B68A2C] transition-colors duration-200"
                >
                  Diaphragm Jig Micro Fines Innovation
                </Link>
              </li>
              <li>
                <Link
                  href="/kpi"
                  className="text-[#E5E9EA] hover:text-[#B68A2C] transition-colors duration-200"
                >
                  KPI Technical Specifications
                </Link>
              </li>
              <li>
                <Link
                  href="/manpower"
                  className="text-[#E5E9EA] hover:text-[#B68A2C] transition-colors duration-200"
                >
                  Manpower Distribution (~3,100)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Leadership Contact (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-[#F3F4F2] font-bold text-[13px] tracking-wider mb-8 uppercase">
              Leadership & Contact
            </h4>
            <div className="space-y-8">
              {COMPANY_INFO.contacts.map((c, i) => (
                <div key={i} className="space-y-1.5">
                  <p className="font-semibold text-[#F3F4F2] text-[15px]">
                    {c.name}
                  </p>
                  <p className="text-[#B68A2C] text-[12px] font-bold tracking-wider uppercase">
                    {c.title}
                  </p>
                  <div className="pt-1 space-y-2 text-[14px] md:text-[15px]">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#D1D9DD]" />
                      <a
                        href={`tel:${c.phone}`}
                        className="text-[#E5E9EA] hover:text-[#B68A2C] transition-colors duration-200 font-medium"
                      >
                        {c.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#D1D9DD]" />
                      <a
                        href={`mailto:${c.email}`}
                        className="text-[#E5E9EA] hover:text-[#B68A2C] transition-colors duration-200 font-medium"
                      >
                        {c.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[rgba(255,255,255,0.15)] flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
          <p className="text-[#C7D0D5] text-[13px] md:text-[14px] font-normal text-center md:text-left">
            © {new Date().getFullYear()} Venkateswar Engg Works Pvt. Ltd. All
            Rights Reserved.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-6 text-[13px] font-bold uppercase tracking-wider text-[#D1D9DD]">
            <span className="text-[#D1D9DD]">ISO Certified Operations</span>
            <Link
              href="http://localhost:3001"
              target="_blank"
              className="text-[#D1D9DD] hover:text-[#B68A2C] flex items-center gap-1.5 transition-colors duration-200"
            >
              Admin Portal <ExternalLink className="w-3.5 h-3.5 -mt-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
