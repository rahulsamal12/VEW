import React from 'react';
import { Factory, Wrench, Cpu, ArrowDown, ArrowRight } from 'lucide-react';

export default function RawMaterialPrepSopPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="space-y-6 pb-12 border-b border-[var(--border-color)]">
<h1 className="text-4xl sm:text-6xl font-bold text-[var(--text-primary)] tracking-tight leading-tight">Raw Material Preparation</h1>
        <p className="text-sm text-[var(--text-secondary)] max-w-3xl leading-relaxed">
          Screening, batching, and skip/belt conveyor charging of raw materials into furnace hoppers.
        </p>
      </div>

      <div className="py-12 border-t border-[var(--border-color)] space-y-8">
        <h2 className="text-xs uppercase tracking-widest text-[var(--accent-brass)] font-bold text-center">Process Flow</h2>
        
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 py-4">
          <div className="flex-1 industrial-card p-6 border border-[var(--border-color)] text-center relative bg-[var(--bg-surface)] hover:border-[var(--accent-brass)] transition-colors">
            <h3 className="font-bold text-[var(--text-primary)] text-lg tracking-wider mb-2">SCREENING</h3>
            <p className="text-xs text-[var(--text-secondary)]">Screening to avoid under sized material.</p>
          </div>
          
          <div className="flex justify-center md:items-center text-[var(--text-muted)]">
            <ArrowRight className="hidden md:block w-6 h-6" />
            <ArrowDown className="md:hidden w-6 h-6" />
          </div>
          
          <div className="flex-1 industrial-card p-6 border border-[var(--border-color)] text-center relative bg-[var(--bg-surface)] hover:border-[var(--accent-brass)] transition-colors">
            <h3 className="font-bold text-[var(--text-primary)] text-lg tracking-wider mb-2">BATCHING</h3>
            <p className="text-xs text-[var(--text-secondary)]">Weigh feeders batch ore + coke + flux as per mix Grade & design for furnace charge.</p>
          </div>
          
          <div className="flex justify-center md:items-center text-[var(--text-muted)]">
            <ArrowRight className="hidden md:block w-6 h-6" />
            <ArrowDown className="md:hidden w-6 h-6" />
          </div>
          
          <div className="flex-1 industrial-card p-6 border border-[var(--border-color)] text-center relative bg-[var(--bg-surface)] hover:border-[var(--accent-brass)] transition-colors">
            <h3 className="font-bold text-[var(--text-primary)] text-lg tracking-wider mb-2">CHARGING</h3>
            <p className="text-xs text-[var(--text-secondary)]">Belt conveyor charges mix to furnace bins/hoppers.</p>
          </div>
        </div>
      </div> {/* Maintenance Grid */} <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-[var(--border-color)]"> <div className="py-8 border-t border-[var(--border-subtle)] space-y-4"> <h3 className="text-base font-bold text-[var(--text-primary)] flex items-center gap-2"> <Wrench className="w-4 h-4 text-[var(--accent-brass)]" /> Mechanical Maintenance Jobs </h3> <ul className="space-y-2 text-xs text-[var(--text-secondary)]"> <li>• Screen mesh replacement & tensioning</li> <li>• Crusher & screen bearings, gearboxes audit</li> <li>• Skip hoist ropes & pulleys inspection</li> <li>• Weigh feeder calibration & belt tracking</li> <li>• Hopper gate maintenance</li> </ul> </div> <div className="py-8 border-t border-[var(--border-subtle)] space-y-4"> <h3 className="text-base font-bold text-[var(--text-primary)] flex items-center gap-2"> <Cpu className="w-4 h-4 text-[var(--accent-brass)]" /> Electrical Maintenance Jobs </h3> <ul className="space-y-2 text-xs text-[var(--text-secondary)]"> <li>• Motor drives for crushers & vibrating screens</li> <li>• Weigh feeder load cells verification</li> <li>• Proximity sensors & skip hoist limit switches</li> <li>• Skip hoist motor & electromagnetic brakes</li> <li>• Control panels & MCC panels maintenance</li> </ul> </div> </div> </div> );
}
