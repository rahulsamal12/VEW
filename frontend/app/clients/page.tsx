export const dynamic = "force-dynamic";
import React from "react";
import { getClientsData } from "@/lib/api";
import { Briefcase } from "lucide-react";

export default async function ClientsPage() {
  const MAJOR_CLIENTS = await getClientsData();
  
  // Calculate how many items fit perfectly in a 3-column grid, leaving exactly 1 (if it would be alone on the last row) for the special footer treatment.
  const remainder = MAJOR_CLIENTS.length % 3;
  const useSpecialTreatment = remainder === 1;
  const gridClients = useSpecialTreatment ? MAJOR_CLIENTS.slice(0, -1) : MAJOR_CLIENTS;
  const finalClient = useSpecialTreatment ? MAJOR_CLIENTS[MAJOR_CLIENTS.length - 1] : null;

  return (
    <div className="bg-[var(--bg-primary)] min-h-screen transition-colors duration-200 font-sans">
      <div className="max-w-[1280px] mx-auto px-8 sm:px-12 pt-[80px] pb-24 md:pt-[100px] space-y-16">
        
        {/* INTRODUCTION COMPOSITION */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-12 lg:gap-16 items-start pb-12 border-b border-[var(--border-color)]">
          {/* LEFT: Heading & Description */}
          <div className="space-y-5">
            <div className="flex items-center gap-2 text-[var(--accent-brass)] font-semibold tracking-widest text-[11px] sm:text-[12px] uppercase">
              <Briefcase className="w-3.5 h-3.5" />
              <span>CLIENT PARTNERSHIPS</span>
            </div>
            <h1 className="text-[34px] sm:text-[40px] lg:text-[56px] font-bold text-[var(--text-primary)] tracking-tight leading-[1.1]">
              Major Clients
            </h1>
            <p className="text-[15px] sm:text-[17px] text-[var(--text-secondary)] max-w-xl leading-[1.6]">
              Official partner roster from Company Credentials. Long-term trusted
              relationships across India&apos;s leading metallurgical conglomerates.
            </p>
          </div>

          {/* MIDDLE: Restrained Divider (Desktop only) */}
          <div className="hidden lg:block w-[1px] h-full min-h-[140px] bg-[var(--border-color)] relative">
             <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-[var(--accent-brass)] to-transparent opacity-60"></div>
          </div>

          {/* RIGHT: Trust Statement */}
          <div className="lg:pt-8">
             <div className="pl-4 border-l-2 border-[var(--accent-brass)]">
                <p className="text-[14px] text-[var(--text-primary)] font-medium leading-[1.6] max-w-sm">
                  Leveraging deep engineering and operational expertise to drive continuous value and production efficiency for our long-term partners.
                </p>
             </div>
          </div>
        </div>

        {/* CLIENT DIRECTORY */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {gridClients.map((c, idx) => {
              const initial = c.name ? c.name.charAt(0).toUpperCase() : "C";
              return (
                <div
                  key={idx}
                  className="group flex items-start gap-5 p-6 bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-[3px] hover:border-[#B68A2C] hover:-translate-y-[2px] transition-all duration-250 ease-out h-full relative overflow-hidden"
                >
                  {/* Subtle brass marker on hover */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-[#B68A2C] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>

                  <div className="w-[46px] h-[46px] flex-shrink-0 bg-[#FDFCF6] dark:bg-[#1C2023] border border-[var(--border-color)] flex items-center justify-center rounded-[2px] text-[#B68A2C] text-[18px] font-bold font-sans">
                    {initial}
                  </div>
                  <div className="flex flex-col min-w-0">
                    <h3 className="text-[18px] font-[600] text-[var(--text-primary)] leading-[1.3] truncate whitespace-normal break-words">
                      {c.name}
                    </h3>
                    {c.fullName && c.fullName !== c.name && (
                      <p className="text-[14px] text-[var(--text-secondary)] mt-1.5 leading-[1.4]">
                        {c.fullName}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* 10th Client (IFCAL) Full-width offset treatment */}
          {finalClient && (
             <div className="w-full lg:w-2/3 mt-[24px]">
               <div className="group flex items-start sm:items-center gap-5 p-6 sm:p-8 bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-[3px] hover:border-[#B68A2C] hover:-translate-y-[2px] transition-all duration-250 ease-out relative overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-[3px] bg-[#B68A2C] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300"></div>
                  
                  <div className="w-[46px] h-[46px] sm:w-[54px] sm:h-[54px] flex-shrink-0 bg-[#FDFCF6] dark:bg-[#1C2023] border border-[var(--border-color)] flex items-center justify-center rounded-[2px] text-[#B68A2C] text-[20px] font-bold font-sans">
                    {finalClient.name ? finalClient.name.charAt(0).toUpperCase() : "I"}
                  </div>
                  <div className="flex flex-col min-w-0">
                    <h3 className="text-[20px] font-[600] text-[var(--text-primary)] leading-[1.3]">
                      {finalClient.name}
                    </h3>
                    {finalClient.fullName && finalClient.fullName !== finalClient.name && (
                      <p className="text-[15px] text-[var(--text-secondary)] mt-1.5 leading-[1.4]">
                        {finalClient.fullName}
                      </p>
                    )}
                  </div>
               </div>
             </div>
          )}
        </div>
      </div>
    </div>
  );
}
