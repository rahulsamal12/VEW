import React from 'react';
import { HISTORY_TIMELINE, KEY_STATISTICS } from '@/lib/data';
import { Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function JourneyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24 transition-colors duration-200">
      
      {/* 01 - HERO SECTION */}
      <div className="max-w-4xl space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--bg-secondary)] text-[var(--text-secondary)] text-[11px] font-bold uppercase tracking-widest border border-[var(--border-color)]">
          <Calendar className="w-3.5 h-3.5 text-[var(--accent-brass)]" /> Our Journey
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight tracking-tight">
          Our Journey & History
        </h1>
        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl leading-relaxed">
          From electrical contracting in 2003 to an internationally recognized Ferro Alloys O&M and Turnkey solution provider.
        </p>
      </div>

      {/* 02 - JOURNEY TIMELINE (Premium Alternating Layout) */}
      <div className="relative border-l border-[var(--border-color)] md:border-l-0 md:before:absolute md:before:inset-0 md:before:ml-[50%] md:before:-translate-x-px md:before:w-[1px] md:before:bg-[var(--border-color)] md:before:h-full ml-4 md:ml-0 space-y-16 py-8">
        {HISTORY_TIMELINE.map((item, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div key={idx} className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center w-full group">
              
              {/* Mobile Timeline Marker */}
              <div className="absolute -left-[21px] top-1.5 md:hidden w-10 h-10 bg-[var(--bg-surface)] border border-[var(--border-color)] flex items-center justify-center rounded-full shadow-sm">
                <div className="w-2 h-2 bg-[var(--accent-brass)] rounded-full"></div>
              </div>
              
              {/* Desktop Timeline Marker */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-[var(--bg-surface)] border border-[var(--border-color)] items-center justify-center rounded-full shadow-sm z-10">
                <div className="w-2 h-2 bg-[var(--accent-brass)] rounded-full group-hover:scale-150 transition-transform duration-300"></div>
              </div>

              {/* Content Box */}
              <div className={`w-full md:w-[45%] pl-8 md:pl-0 ${!isEven ? 'md:order-3 md:ml-auto md:text-left' : 'md:order-1 md:text-right md:pr-8'}`}>
                <div className="space-y-4">
                  <div className={`flex flex-col ${!isEven ? 'md:items-start' : 'md:items-end'}`}>
                    <span className="text-5xl font-bold text-[var(--text-primary)] opacity-90">{item.year}</span>
                    <span className="text-[11px] font-bold text-[var(--accent-brass)] uppercase tracking-widest mt-1">
                      {item.title}
                    </span>
                  </div>
                  
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-sm ml-0 md:ml-auto">
                    {item.description}
                  </p>
                  
                  {item.contracts && item.contracts.length > 0 && (
                    <div className={`pt-4 border-t border-[var(--border-subtle)] max-w-sm ${!isEven ? 'mr-auto' : 'ml-auto'}`}>
                      <span className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-bold block mb-3">Key Contracts / Milestones</span>
                      <div className={`flex flex-wrap gap-2 ${!isEven ? 'justify-start' : 'md:justify-end'}`}>
                        {item.contracts.map((c, i) => (
                          <span key={i} className="text-[11px] px-2.5 py-1 bg-[var(--bg-secondary)] text-[var(--text-primary)] border border-[var(--border-color)] font-medium">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Spacer for Flex */}
              <div className="hidden md:block w-full md:w-[45%] md:order-2"></div>
            </div>
          );
        })}
      </div>

      {/* 03 - STATISTICS / PROOF SECTION */}
      <div className="pt-16 border-t border-[var(--border-color)]">
        <h2 className="text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-widest mb-8 text-center sm:text-left">
          Operational Scale & Proven Metrics
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-y border-[var(--border-color)] divide-x divide-y md:divide-y-0 divide-[var(--border-color)] bg-[var(--bg-surface)]">
          {KEY_STATISTICS.slice(0, 4).map((stat, idx) => (
            <div key={idx} className="p-8 text-center space-y-3">
              <span className="block text-4xl font-bold text-[var(--text-primary)]">{stat.stat}</span>
              <span className="block text-xs font-semibold text-[var(--text-secondary)] leading-tight">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 04 - END OF JOURNEY / CTA */}
      <div className="pt-16 pb-8 border-t border-[var(--border-subtle)] text-center space-y-6">
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">Explore Our Capabilities</h2>
        <p className="text-sm text-[var(--text-secondary)] max-w-2xl mx-auto">
          Discover how decades of metallurgical experience translate into optimized turnkey project execution, material recovery, and reliable plant O&M.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link href="/services" className="industrial-button-primary inline-flex items-center gap-2">
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/projects" className="industrial-button-secondary inline-flex items-center gap-2">
            Project Portfolio
          </Link>
        </div>
      </div>

    </div>
  );
}
