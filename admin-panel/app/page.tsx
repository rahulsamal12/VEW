"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { fetchAdminData } from "@/lib/adminApi";
import {
  Flame,
  Layers,
  Factory,
  Globe,
  Users,
  Mail,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  RefreshCw
} from "lucide-react";
export default function AdminDashboardPage() {
  const [stats, setStats] = useState({
    furnaceCount: 10,
    mrpCount: 7,
    sinterCount: 5,
    intCount: 5,
    manpower: "~3,100",
    enquiriesCount: 0,
  });
  useEffect(() => {
    async function loadStats() {
      const enquiriesRes = await fetchAdminData("/admin/enquiries");
      if (enquiriesRes && enquiriesRes.data) {
        setStats((prev) => ({
          ...prev,
          enquiriesCount: enquiriesRes.data.length,
        }));
      }
    }
    loadStats();
  }, []);
  return (
    <div className="space-y-8 transition-colors duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-admin-border pb-5">
        <div>
          <h1 className="text-[24px] font-bold text-admin-text-primary tracking-tight">
            Dashboard Overview
          </h1>
          <p className="text-[13px] text-admin-text-secondary mt-1">
            Venkateswar Engg Works Pvt. Ltd. Enterprise Management Console
          </p>
        </div>
        <div className="px-3 py-1.5 bg-admin-surface border border-admin-border text-admin-steel dark:text-admin-brass text-[12px] font-semibold flex items-center gap-1.5 uppercase tracking-wider rounded-sm shadow-sm">
          <ShieldCheck className="w-4 h-4" />
          System Active • GSTIN: 21ARXPK7658Q1ZO
        </div>
      </div>
      
      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="bg-admin-surface p-5 border border-admin-border rounded-sm shadow-sm space-y-3 transition-colors hover:border-admin-steel dark:hover:border-admin-brass">
          <div className="flex justify-between items-center text-admin-text-secondary">
            <span className="text-[11px] font-bold uppercase tracking-wider">
              Furnace O&M
            </span>
            <Flame className="w-4 h-4 text-admin-brass" />
          </div>
          <p className="text-[28px] font-bold text-admin-text-primary leading-none">
            {stats.furnaceCount}
          </p>
          <span className="text-[11px] text-admin-text-muted font-medium block">
            5 MVA to 24 MVA
          </span>
        </div>
        
        <div className="bg-admin-surface p-5 border border-admin-border rounded-sm shadow-sm space-y-3 transition-colors hover:border-admin-steel dark:hover:border-admin-brass">
          <div className="flex justify-between items-center text-admin-text-secondary">
            <span className="text-[11px] font-bold uppercase tracking-wider">
              MRP Projects
            </span>
            <Layers className="w-4 h-4 text-admin-brass" />
          </div>
          <p className="text-[28px] font-bold text-admin-text-primary leading-none">
            {stats.mrpCount}
          </p>
          <span className="text-[11px] text-admin-text-muted font-medium block">
            50 TPD to 1500 TPD
          </span>
        </div>
        
        <div className="bg-admin-surface p-5 border border-admin-border rounded-sm shadow-sm space-y-3 transition-colors hover:border-admin-steel dark:hover:border-admin-brass">
          <div className="flex justify-between items-center text-admin-text-secondary">
            <span className="text-[11px] font-bold uppercase tracking-wider">
              Sinter Plants
            </span>
            <Factory className="w-4 h-4 text-admin-brass" />
          </div>
          <p className="text-[28px] font-bold text-admin-text-primary leading-none">
            {stats.sinterCount}
          </p>
          <span className="text-[11px] text-admin-text-muted font-medium block">
            40 TPD to 200 TPD
          </span>
        </div>
        
        <div className="bg-admin-surface p-5 border border-admin-border rounded-sm shadow-sm space-y-3 transition-colors hover:border-admin-steel dark:hover:border-admin-brass">
          <div className="flex justify-between items-center text-admin-text-secondary">
            <span className="text-[11px] font-bold uppercase tracking-wider">
              International
            </span>
            <Globe className="w-4 h-4 text-admin-brass" />
          </div>
          <p className="text-[28px] font-bold text-admin-text-primary leading-none">
            {stats.intCount}
          </p>
          <span className="text-[11px] text-admin-text-muted font-medium block">
            Oman & Zambia
          </span>
        </div>
        
        <div className="bg-admin-surface p-5 border border-admin-border rounded-sm shadow-sm space-y-3 transition-colors hover:border-admin-steel dark:hover:border-admin-brass">
          <div className="flex justify-between items-center text-admin-text-secondary">
            <span className="text-[11px] font-bold uppercase tracking-wider">
              Manpower
            </span>
            <Users className="w-4 h-4 text-admin-brass" />
          </div>
          <p className="text-[24px] font-bold text-admin-steel dark:text-admin-brass leading-none">
            {stats.manpower}
          </p>
          <span className="text-[11px] text-admin-text-muted font-medium block">
            Across 20+ Sites
          </span>
        </div>
        
        <div className="bg-admin-surface p-5 border border-admin-border rounded-sm shadow-sm space-y-3 transition-colors hover:border-admin-steel dark:hover:border-admin-brass">
          <div className="flex justify-between items-center text-admin-text-secondary">
            <span className="text-[11px] font-bold uppercase tracking-wider">
              Enquiries
            </span>
            <Mail className="w-4 h-4 text-admin-brass" />
          </div>
          <p className="text-[28px] font-bold text-admin-text-primary leading-none">
            {stats.enquiriesCount}
          </p>
          <span className="text-[11px] text-admin-text-muted font-medium block">
            Total Submissions
          </span>
        </div>
      </div>
      
      {/* Content Management Modules Grid */}
      <div className="space-y-4 pt-4">
        <h2 className="text-[14px] font-semibold uppercase tracking-wider text-admin-text-secondary border-b border-admin-border pb-3">
          Content Management Modules
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="bg-admin-surface p-6 border border-admin-border rounded-sm shadow-sm space-y-4 flex flex-col">
            <h3 className="font-bold text-admin-text-primary text-[15px]">
              Project Portfolio Management
            </h3>
            <p className="text-[13px] text-admin-text-secondary leading-relaxed flex-1">
              Manage Furnace O&M, MRP, Sinter, and International project listings.
            </p>
            <div className="pt-3 flex flex-wrap gap-2">
              <Link href="/projects/furnace" className="btn-secondary text-[12px] px-3 py-1.5 h-auto">
                Furnace O&M
              </Link>
              <Link href="/projects/mrp" className="btn-secondary text-[12px] px-3 py-1.5 h-auto">
                MRP Projects
              </Link>
              <Link href="/projects/sinter" className="btn-secondary text-[12px] px-3 py-1.5 h-auto">
                Sinter Projects
              </Link>
            </div>
          </div>
          
          <div className="bg-admin-surface p-6 border border-admin-border rounded-sm shadow-sm space-y-4 flex flex-col">
            <h3 className="font-bold text-admin-text-primary text-[15px]">
              Enquiries Manager
            </h3>
            <p className="text-[13px] text-admin-text-secondary leading-relaxed flex-1">
              Review contact submissions, update status, and manage client inquiries.
            </p>
            <div className="pt-3">
              <Link href="/enquiries" className="btn-primary gap-2 w-full">
                Open Enquiries Manager <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          
          <div className="bg-admin-surface p-6 border border-admin-border rounded-sm shadow-sm space-y-4 flex flex-col">
            <h3 className="font-bold text-admin-text-primary text-[15px]">
              Operations & Specs Content
            </h3>
            <p className="text-[13px] text-admin-text-secondary leading-relaxed flex-1">
              Manage NGM Smelters SOPs, Raw Material Specs, KPI grade values, and Manpower stats.
            </p>
            <div className="pt-3 flex flex-wrap gap-2">
              <Link href="/operations" className="btn-secondary text-[12px] px-3 py-1.5 h-auto">
                Operations SOP
              </Link>
              <Link href="/kpi" className="btn-secondary text-[12px] px-3 py-1.5 h-auto">
                KPI Specs
              </Link>
              <Link href="/manpower" className="btn-secondary text-[12px] px-3 py-1.5 h-auto">
                Manpower
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

