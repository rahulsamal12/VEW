"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { fetchAdminData } from "@/lib/adminApi";
import {
  Flame, Layers, Factory, Globe, Users, Mail,
  ArrowRight, ShieldCheck, Plus, Clock, Server,
  Database, Shield, Activity, FileText, CheckCircle2,
  XCircle, Briefcase, Star
} from "lucide-react";

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadData = async () => {
    setIsLoading(true);
    const res = await fetchAdminData("/admin/dashboard/stats");
    if (res && res.success) {
      setStats(res.data);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  if (isLoading) {
    return <div className="py-20 text-center text-admin-text-muted">Loading Dashboard...</div>;
  }

  if (!stats) {
    return <div className="py-20 text-center text-rose-500">Failed to load dashboard data. Ensure backend is running.</div>;
  }

  return (
    <div className="space-y-8 transition-colors duration-200 pb-16">
      {/* 1. HEADER */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-admin-border pb-5">
        <div>
          <h1 className="text-[24px] font-bold text-admin-text-primary tracking-tight">
            Dashboard Overview
          </h1>
          <p className="text-[13px] text-admin-text-secondary mt-1">
            Venkateswar Engg Works Pvt. Ltd. Enterprise Management Console
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={loadData} className="px-3 py-1.5 border border-admin-border text-[12px] uppercase tracking-wider font-bold rounded-sm hover:bg-admin-border transition-colors">
            Refresh
          </button>
          <div className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-[12px] font-bold uppercase tracking-wider rounded-sm shadow-sm flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4" />
            System Active • GSTIN: 21ARXPK7658Q1ZO
          </div>
        </div>
      </div>
      
      {/* 2. KPI CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="bg-admin-surface p-5 border border-admin-border rounded-sm shadow-sm space-y-3">
          <div className="flex justify-between items-center text-admin-text-secondary">
            <span className="text-[11px] font-bold uppercase tracking-wider">Furnace O&M</span>
            <Flame className="w-4 h-4 text-admin-brass" />
          </div>
          <p className="text-[28px] font-bold text-admin-text-primary leading-none">{stats.projects.furnace}</p>
          <span className="text-[11px] text-admin-text-muted font-medium block">Active Projects</span>
        </div>
        <div className="bg-admin-surface p-5 border border-admin-border rounded-sm shadow-sm space-y-3">
          <div className="flex justify-between items-center text-admin-text-secondary">
            <span className="text-[11px] font-bold uppercase tracking-wider">MRP Projects</span>
            <Layers className="w-4 h-4 text-admin-brass" />
          </div>
          <p className="text-[28px] font-bold text-admin-text-primary leading-none">{stats.projects.mrp}</p>
          <span className="text-[11px] text-admin-text-muted font-medium block">Active Projects</span>
        </div>
        <div className="bg-admin-surface p-5 border border-admin-border rounded-sm shadow-sm space-y-3">
          <div className="flex justify-between items-center text-admin-text-secondary">
            <span className="text-[11px] font-bold uppercase tracking-wider">Sinter Plants</span>
            <Factory className="w-4 h-4 text-admin-brass" />
          </div>
          <p className="text-[28px] font-bold text-admin-text-primary leading-none">{stats.projects.sinter}</p>
          <span className="text-[11px] text-admin-text-muted font-medium block">Active Projects</span>
        </div>
        <div className="bg-admin-surface p-5 border border-admin-border rounded-sm shadow-sm space-y-3">
          <div className="flex justify-between items-center text-admin-text-secondary">
            <span className="text-[11px] font-bold uppercase tracking-wider">International</span>
            <Globe className="w-4 h-4 text-admin-brass" />
          </div>
          <p className="text-[28px] font-bold text-admin-text-primary leading-none">{stats.projects.international}</p>
          <span className="text-[11px] text-admin-text-muted font-medium block">Global Operations</span>
        </div>
        <div className="bg-admin-surface p-5 border border-admin-border rounded-sm shadow-sm space-y-3">
          <div className="flex justify-between items-center text-admin-text-secondary">
            <span className="text-[11px] font-bold uppercase tracking-wider">Manpower</span>
            <Users className="w-4 h-4 text-admin-brass" />
          </div>
          <p className="text-[24px] font-bold text-admin-steel dark:text-admin-brass leading-none truncate" title={stats.manpower?.personnelCount || "0"}>
            {stats.manpower?.personnelCount || "0"}
          </p>
          <span className="text-[11px] text-admin-text-muted font-medium block">{stats.manpower?.activeSites || "0"} Active Sites</span>
        </div>
        <div className="bg-admin-surface p-5 border border-admin-border rounded-sm shadow-sm space-y-3">
          <div className="flex justify-between items-center text-admin-text-secondary">
            <span className="text-[11px] font-bold uppercase tracking-wider">Enquiries</span>
            <Mail className="w-4 h-4 text-admin-brass" />
          </div>
          <p className="text-[28px] font-bold text-admin-text-primary leading-none">{stats.enquiries.total}</p>
          <span className="text-[11px] text-admin-text-muted font-medium block">{stats.enquiries.new} Unread</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (Wider) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* 5. QUICK ACTIONS */}
          <div className="bg-admin-surface border border-admin-border rounded-sm shadow-sm p-6 space-y-4">
            <h2 className="text-[14px] font-bold uppercase tracking-wider text-admin-text-secondary flex items-center gap-2">
              <Plus className="w-4 h-4 text-admin-brass" /> Quick Actions
            </h2>
            <div className="flex flex-wrap gap-3">
              <Link href="/projects/furnace" className="btn-primary py-2 px-4"><Plus className="w-4 h-4 mr-1"/> Furnace</Link>
              <Link href="/projects/mrp" className="btn-primary py-2 px-4"><Plus className="w-4 h-4 mr-1"/> MRP</Link>
              <Link href="/projects/sinter" className="btn-primary py-2 px-4"><Plus className="w-4 h-4 mr-1"/> Sinter</Link>
              <Link href="/projects/international" className="btn-primary py-2 px-4"><Plus className="w-4 h-4 mr-1"/> International</Link>
              <Link href="/clients" className="btn-secondary py-2 px-4"><Plus className="w-4 h-4 mr-1"/> Client</Link>
              <Link href="/home" className="btn-secondary py-2 px-4">Manage Home Page</Link>
              <Link href="/about" className="btn-secondary py-2 px-4">Manage About Us</Link>
              <Link href="/journey" className="btn-secondary py-2 px-4">Manage Journey</Link>
            </div>
          </div>

          {/* 8 & 9 & 10. SUMMARIES ROW */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-admin-surface border border-admin-border rounded-sm shadow-sm p-5 space-y-3">
              <h3 className="text-[12px] font-bold uppercase tracking-wider text-admin-text-muted">Project Portfolio</h3>
              <div className="text-[32px] font-bold text-admin-text-primary">{stats.projects.total}</div>
              <p className="text-[12px] text-admin-text-secondary">Total lifetime projects logged across all categories.</p>
            </div>
            <div className="bg-admin-surface border border-admin-border rounded-sm shadow-sm p-5 space-y-3">
              <h3 className="text-[12px] font-bold uppercase tracking-wider text-admin-text-muted">Clients</h3>
              <div className="text-[32px] font-bold text-admin-text-primary">{stats.clients.total}</div>
              <p className="text-[12px] text-admin-text-secondary">Major industry clients actively verified in database.</p>
            </div>
            <div className="bg-admin-surface border border-admin-border rounded-sm shadow-sm p-5 space-y-3">
              <h3 className="text-[12px] font-bold uppercase tracking-wider text-admin-text-muted">Manpower</h3>
              <div className="text-[20px] font-bold text-admin-text-primary truncate">{stats.manpower?.personnelCount || "0"}</div>
              <p className="text-[12px] text-admin-text-secondary">Current personnel deployed across India and globally.</p>
            </div>
          </div>

          {/* 3. CONTENT MANAGEMENT MODULES */}
          <div className="bg-admin-surface border border-admin-border rounded-sm shadow-sm p-6 space-y-4">
            <h2 className="text-[14px] font-bold uppercase tracking-wider text-admin-text-secondary border-b border-admin-border pb-3 flex items-center gap-2">
              <FileText className="w-4 h-4 text-admin-brass" /> Content Management Modules
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {[
                { name: "Home Page", path: "/home" },
                { name: "About Us", path: "/about" },
                { name: "Company Journey", path: "/journey" },
                { name: "Engineering in Action", path: "/engineering-in-action" },
                { name: "Furnace O&M", path: "/projects/furnace" },
                { name: "MRP Projects", path: "/projects/mrp" },
                { name: "Sinter Projects", path: "/projects/sinter" },
                { name: "International", path: "/projects/international" },
                { name: "Operations & SOPs", path: "/operations" },
                { name: "KPI Specs", path: "/kpi" },
                { name: "Manpower Stats", path: "/manpower" },
                { name: "Maintenance", path: "/maintenance" },
                { name: "Innovation", path: "/innovation" },
                { name: "Clients", path: "/clients" },
                { name: "Site Images", path: "/images" },
                { name: "Site Settings", path: "/settings" }
              ].map(mod => (
                <Link key={mod.name} href={mod.path} className="px-3 py-2 text-[13px] font-semibold text-admin-text-secondary border border-admin-border rounded-sm hover:border-admin-brass hover:text-admin-text-primary transition-colors">
                  {mod.name}
                </Link>
              ))}
            </div>
          </div>

          {/* ENGINEERING IN ACTION MODULE CARD */}
          <div className="bg-admin-surface border border-admin-border rounded-sm shadow-sm p-6 space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-[14px] font-bold uppercase tracking-wider text-admin-text-secondary flex items-center gap-2">
                  <Globe className="w-4 h-4 text-admin-brass" /> Engineering in Action
                </h2>
                <p className="text-[12px] text-admin-text-muted mt-1">
                  Manage the dynamic image gallery on the homepage.
                </p>
              </div>
              <div className="text-right">
                <div className="text-[24px] font-bold text-admin-text-primary leading-none">{stats.engineeringInActionCount || 0}</div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-admin-text-muted mt-1">Images</div>
              </div>
            </div>
            <div className="pt-3 border-t border-admin-border">
              <Link href="/engineering-in-action" className="text-[13px] font-bold text-admin-brass hover:text-admin-brass-hover flex items-center gap-1">
                Manage <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* 6. RECENT ACTIVITY */}
          <div className="bg-admin-surface border border-admin-border rounded-sm shadow-sm p-6 space-y-4">
            <h2 className="text-[14px] font-bold uppercase tracking-wider text-admin-text-secondary border-b border-admin-border pb-3 flex items-center gap-2">
              <Clock className="w-4 h-4 text-admin-brass" /> Recent Activity
            </h2>
            <div className="space-y-0 divide-y divide-admin-border">
              {stats.activity && stats.activity.length > 0 ? stats.activity.map((act: any, i: number) => (
                <div key={i} className="py-3 flex justify-between items-center group">
                  <div>
                    <p className="text-[14px] font-bold text-admin-text-primary flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${act.action === 'Deleted' ? 'bg-rose-500' : act.action === 'Added' ? 'bg-emerald-500' : 'bg-admin-brass'}`}></span>
                      {act.action} {act.module}
                    </p>
                    <p className="text-[12px] text-admin-text-muted mt-0.5">{act.details}</p>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-admin-text-muted">
                    {new Date(act.timestamp).toLocaleDateString()}
                  </span>
                </div>
              )) : (
                <div className="py-6 text-center text-[13px] text-admin-text-muted">No recent activity logged.</div>
              )}
            </div>
          </div>

        </div>

        {/* Right Column (Narrow) */}
        <div className="space-y-6">
          
          {/* 7. SYSTEM HEALTH */}
          <div className="bg-admin-surface border border-admin-border rounded-sm shadow-sm p-6 space-y-4">
            <h2 className="text-[14px] font-bold uppercase tracking-wider text-admin-text-secondary border-b border-admin-border pb-3 flex items-center gap-2">
              <Activity className="w-4 h-4 text-admin-brass" /> System Health
            </h2>
            <div className="space-y-4 text-[13px] font-semibold">
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2 text-admin-text-secondary"><Server className="w-4 h-4"/> Backend API</span>
                <span className="text-emerald-500 flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4"/> Connected</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2 text-admin-text-secondary"><Database className="w-4 h-4"/> MongoDB</span>
                <span className="text-emerald-500 flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4"/> Connected</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2 text-admin-text-secondary"><Shield className="w-4 h-4"/> Admin Auth</span>
                <span className="text-emerald-500 flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4"/> Active</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2 text-admin-text-secondary"><Globe className="w-4 h-4"/> Public API</span>
                <span className="text-emerald-500 flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4"/> Connected</span>
              </div>
            </div>
          </div>

          {/* 11. CONTENT COMPLETENESS */}
          <div className="bg-admin-surface border border-admin-border rounded-sm shadow-sm p-6 space-y-4">
            <h2 className="text-[14px] font-bold uppercase tracking-wider text-admin-text-secondary border-b border-admin-border pb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-admin-brass" /> Content Completeness
            </h2>
            <div className="space-y-4 text-[13px] font-semibold">
              {Object.entries(stats.contentStatus).map(([key, status]: any) => (
                <div key={key} className="flex justify-between items-center">
                  <span className="capitalize text-admin-text-secondary">{key}</span>
                  <span className={`px-2 py-0.5 rounded-[4px] text-[11px] uppercase tracking-wider border ${status === 'Configured' ? 'bg-emerald-500/10 text-emerald-600 border-emerald-500/30' : 'bg-rose-500/10 text-rose-600 border-rose-500/30'}`}>
                    {status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 4. COMMUNICATION / ENQUIRIES */}
          <div className="bg-admin-surface border border-admin-border rounded-sm shadow-sm p-6 flex flex-col space-y-4 relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-admin-brass/5 rounded-full blur-2xl pointer-events-none"></div>
            <h3 className="font-bold text-admin-text-primary text-[15px] flex items-center gap-2">
              <Mail className="w-5 h-5 text-admin-brass" /> Enquiries Manager
            </h3>
            <div className="flex-1 space-y-2">
              <p className="text-[13px] text-admin-text-secondary">
                You have <strong className="text-admin-text-primary">{stats.enquiries.new} new/unread</strong> enquiries out of {stats.enquiries.total} total.
              </p>
              {stats.enquiries.latestDate && (
                <p className="text-[12px] text-admin-text-muted">Latest: {new Date(stats.enquiries.latestDate).toLocaleDateString()}</p>
              )}
            </div>
            <div className="pt-2 border-t border-admin-border mt-auto">
              <Link href="/enquiries" className="btn-primary w-full justify-center">
                Open Enquiries Manager <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
