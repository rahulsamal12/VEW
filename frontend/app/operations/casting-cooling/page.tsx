import React from 'react';
import { Layers, Wrench, Cpu, CheckCircle2, ArrowDown, ArrowRight } from 'lucide-react';

export default function CastingCoolingSopPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="space-y-6 pb-12 border-b border-[var(--border-color)]">
<h1 className="text-4xl sm:text-6xl font-bold text-[var(--text-primary)] tracking-tight leading-tight">Casting & Cooling Operations</h1>
        <p className="text-sm text-[var(--text-secondary)] max-w-3xl leading-relaxed">
          Molten metal ladle pouring into moulds, pig casting machine, natural/water cooling, mould demoulding, and slag granulation.
        </p>
      </div>

      <div className="py-12 border-t border-[var(--border-color)] space-y-8">
        <h2 className="text-xs uppercase tracking-widest text-[var(--accent-brass)] font-bold text-center">Process Flow</h2>
        
        <div className="flex flex-col md:flex-row items-stretch justify-between gap-4 py-4">
          <div className="flex-1 industrial-card p-6 border border-[var(--border-color)] text-center bg-[var(--bg-surface)] hover:border-[var(--accent-brass)] transition-colors">
            <h3 className="font-bold text-[var(--text-primary)] text-sm tracking-wider mb-2">LADLE POURING</h3>
            <p className="text-xs text-[var(--text-secondary)]">Metal ladle poured into cast iron moulds, pig casting machine, or sand beds.</p>
          </div>
          
          <div className="flex justify-center md:items-center text-[var(--text-muted)]">
            <ArrowRight className="hidden md:block w-5 h-5" />
            <ArrowDown className="md:hidden w-5 h-5" />
          </div>
          
          <div className="flex-1 industrial-card p-6 border border-[var(--border-color)] text-center bg-[var(--bg-surface)] hover:border-[var(--accent-brass)] transition-colors">
            <h3 className="font-bold text-[var(--text-primary)] text-sm tracking-wider mb-2">COOLING</h3>
            <p className="text-xs text-[var(--text-secondary)]">Natural air cooling (24-48 hrs) or water spray. Slag separated from liquid metal stream.</p>
          </div>
          
          <div className="flex justify-center md:items-center text-[var(--text-muted)]">
            <ArrowRight className="hidden md:block w-5 h-5" />
            <ArrowDown className="md:hidden w-5 h-5" />
          </div>
          
          <div className="flex-1 industrial-card p-6 border border-[var(--border-color)] text-center bg-[var(--bg-surface)] hover:border-[var(--accent-brass)] transition-colors">
            <h3 className="font-bold text-[var(--text-primary)] text-sm tracking-wider mb-2">DEMOULDING</h3>
            <p className="text-xs text-[var(--text-secondary)]">Moulds demoulded after solidification for primary breaking.</p>
          </div>
          
          <div className="flex justify-center md:items-center text-[var(--text-muted)]">
            <ArrowRight className="hidden md:block w-5 h-5" />
            <ArrowDown className="md:hidden w-5 h-5" />
          </div>

          <div className="flex-1 industrial-card p-6 border border-cyan-500/30 text-center bg-[var(--bg-surface)]">
            <h3 className="font-bold text-[var(--text-primary)] text-sm tracking-wider mb-2 flex justify-center items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-[var(--accent-brass)]" /> SLAG GRANULATION
            </h3>
            <p className="text-xs text-[var(--text-secondary)]">Industry best practice to easily handle large volume slag.</p>
          </div>
        </div>
      </div> {/* Maintenance */} <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-[var(--border-color)]"> <div className="py-8 border-t border-[var(--border-subtle)] space-y-4"> <h3 className="text-base font-bold text-[var(--text-primary)] flex items-center gap-2"> <Wrench className="w-4 h-4 text-[var(--accent-brass)]" /> Mechanical Maintenance </h3> <ul className="space-y-2 text-xs text-[var(--text-secondary)]"> <li>• Ladle refractory lining & trunnions inspection</li> <li>• EOT crane servicing for ladle lifting</li> <li>• Casting machine chains & mould maintenance</li> <li>• Slag granulation high-pressure pumps & nozzles</li> </ul> </div> <div className="py-8 border-t border-[var(--border-subtle)] space-y-4"> <h3 className="text-base font-bold text-[var(--text-primary)] flex items-center gap-2"> <Cpu className="w-4 h-4 text-[var(--accent-brass)]" /> Electrical Maintenance </h3> <ul className="space-y-2 text-xs text-[var(--text-secondary)]"> <li>• EOT crane motors & VFD drives</li> <li>• Crane limit switches & ladle car motors</li> <li>• Pig Casting Machine (PCM) controls</li> <li>• Cooling tower fans & water pump controls</li> </ul> </div> </div> </div> );
}
