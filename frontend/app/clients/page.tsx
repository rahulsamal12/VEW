export const dynamic = 'force-dynamic';
import React from "react";
import { getClientsData } from "@/lib/api";
import { ShieldCheck } from "lucide-react";

export default async function ClientsPage() {
  const MAJOR_CLIENTS = await getClientsData();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 transition-colors duration-200">
      <div className="space-y-6 pb-12 border-b border-[var(--border-color)]">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] tracking-tight leading-tight">
          Major Clients
        </h1>
        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl leading-relaxed">
          Official partner roster from Company Credentials. Long-term trusted relationships across India&apos;s leading metallurgical conglomerates.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {MAJOR_CLIENTS.map((c, idx) => {
          const initial = c.name ? c.name.charAt(0) : "C";
          return (
            <div
              key={idx}
              className="group p-6 border border-[var(--border-color)] hover:border-[var(--accent-brass)] transition-colors duration-300 bg-[var(--bg-surface)] flex flex-col justify-between items-start space-y-4"
            >
              <div className="flex items-center gap-4 w-full">
                <div className="w-12 h-12 flex-shrink-0 bg-[var(--bg-secondary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent-brass)] text-xl font-bold">
                  {initial}
                </div>
                <div className="space-y-1 flex-grow">
                  <h2 className="text-sm font-bold text-[var(--text-primary)] tracking-wide group-hover:text-[var(--accent-brass)] transition-colors">
                    {c.name}
                  </h2>
                  <p className="text-xs text-[var(--text-secondary)] line-clamp-2">
                    {c.fullName}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
