import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Phone, Mail, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-[#243746] dark:bg-[#15191C] text-[#C5CDD1] font-sans border-t border-[rgba(255,255,255,0.05)] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Col 1: Brand & About */}
          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <span className="text-[20px] md:text-[22px] font-bold text-[#F5F5F2] tracking-tight leading-tight">
                Venkateswar Engg<br />Works Pvt. Ltd.
              </span>
            </div>
            
            <p className="text-[14px] md:text-[15px] text-[#C5CDD1] font-normal leading-relaxed max-w-sm">
              Multi-disciplinary engineering firm with deep operational expertise in Ferro Alloys & Metallurgical Engineering across India and globally.
            </p>
            
            <div className="text-[13px] space-y-2 pt-2">
              <div className="flex items-center gap-2 text-[#C19A45] font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-[#F2F3F1]">GSTIN:</span> <span className="text-[#C5CDD1]">{COMPANY_INFO.gstin}</span>
              </div>
              <p className="text-[#AEB8BD]">Founded: {COMPANY_INFO.founded} by {COMPANY_INFO.founder}</p>
            </div>
          </div>

          {/* Col 2: Core Capabilities */}
          <div>
            <h4 className="text-[#F2F3F1] font-semibold text-[13px] md:text-[14px] tracking-wide mb-6 uppercase">
              Core Capabilities
            </h4>
            <ul className="space-y-3 text-[14px] md:text-[15px] font-normal">
              <li><Link href="/services/furnace-om" className="text-[#C5CDD1] hover:text-[#D4AF37] transition-colors duration-200">Furnace O&M (5-24 MVA)</Link></li>
              <li><Link href="/services/mrp" className="text-[#C5CDD1] hover:text-[#D4AF37] transition-colors duration-200">Metal Recovery Plants (50-1500 TPD)</Link></li>
              <li><Link href="/services/sinter-plants" className="text-[#C5CDD1] hover:text-[#D4AF37] transition-colors duration-200">Sinter Plants (40-200 TPD)</Link></li>
              <li><Link href="/services/boot-boo" className="text-[#C5CDD1] hover:text-[#D4AF37] transition-colors duration-200">BOOT / BOO Models (Up to 19 Yrs)</Link></li>
              <li><Link href="/services/turnkey-projects" className="text-[#C5CDD1] hover:text-[#D4AF37] transition-colors duration-200">Turnkey EPC Execution</Link></li>
              <li><Link href="/services/beneficiary-units" className="text-[#C5CDD1] hover:text-[#D4AF37] transition-colors duration-200">Beneficiary Ore Upgrade</Link></li>
              <li><Link href="/services/fabrication-erection" className="text-[#C5CDD1] hover:text-[#D4AF37] transition-colors duration-200">Fabrication & Erection</Link></li>
            </ul>
          </div>

          {/* Col 3: Operations & Projects */}
          <div>
            <h4 className="text-[#F2F3F1] font-semibold text-[13px] md:text-[14px] tracking-wide mb-6 uppercase">
              Operations & Projects
            </h4>
            <ul className="space-y-3 text-[14px] md:text-[15px] font-normal">
              <li><Link href="/projects/furnace" className="text-[#C5CDD1] hover:text-[#D4AF37] transition-colors duration-200">Furnace O&M Projects</Link></li>
              <li><Link href="/projects/mrp" className="text-[#C5CDD1] hover:text-[#D4AF37] transition-colors duration-200">MRP Project Portfolio</Link></li>
              <li><Link href="/projects/sinter" className="text-[#C5CDD1] hover:text-[#D4AF37] transition-colors duration-200">Sinter Turnkey Projects</Link></li>
              <li><Link href="/projects/international" className="text-[#C5CDD1] hover:text-[#D4AF37] transition-colors duration-200">International Projects (Oman & Zambia)</Link></li>
              <li><Link href="/operations/raw-materials" className="text-[#C5CDD1] hover:text-[#D4AF37] transition-colors duration-200">NGM Smelters Raw Material SOP</Link></li>
              <li><Link href="/innovation" className="text-[#C5CDD1] hover:text-[#D4AF37] transition-colors duration-200">Diaphragm Jig Micro Fines Innovation</Link></li>
              <li><Link href="/kpi" className="text-[#C5CDD1] hover:text-[#D4AF37] transition-colors duration-200">KPI Technical Specifications</Link></li>
              <li><Link href="/manpower" className="text-[#C5CDD1] hover:text-[#D4AF37] transition-colors duration-200">Manpower Distribution (~3,100)</Link></li>
            </ul>
          </div>

          {/* Col 4: Leadership Contact */}
          <div>
            <h4 className="text-[#F2F3F1] font-semibold text-[13px] md:text-[14px] tracking-wide mb-6 uppercase">
              Leadership & Contact
            </h4>
            <div className="space-y-6">
              {COMPANY_INFO.contacts.map((c, i) => (
                <div key={i} className="space-y-1.5">
                  <p className="font-semibold text-[#F2F3F1] text-[15px]">{c.name}</p>
                  <p className="text-[#C19A45] text-[13px] font-medium tracking-wide uppercase">{c.title}</p>
                  <div className="pt-1 space-y-2 text-[14px] md:text-[15px]">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#AEB8BD]" />
                      <a href={`tel:${c.phone}`} className="text-[#D0D6D9] hover:text-[#C19A45] transition-colors duration-200 font-medium">{c.phone}</a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#AEB8BD]" />
                      <a href={`mailto:${c.email}`} className="text-[#D0D6D9] hover:text-[#C19A45] transition-colors duration-200 font-medium">{c.email}</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[rgba(255,255,255,0.14)] flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
          <p className="text-[#AEB8BD] text-[13px] md:text-[14px] font-normal text-center md:text-left">
            © {new Date().getFullYear()} Venkateswar Engg Works Pvt. Ltd. All Rights Reserved.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-[13px] md:text-[14px] font-normal">
            <span className="text-[#BFC7CB]">ISO Certified Operations</span>
            <Link href="http://localhost:3001" target="_blank" className="text-[#BFC7CB] hover:text-[#C19A45] flex items-center gap-1.5 transition-colors duration-200">
              Admin Portal <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
