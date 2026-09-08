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
      {" "}
      {/* Header */}{" "}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[var(--admin-border)] pb-5">
        {" "}
        <div>
          {" "}
          <h1 className="text-2xl font-bold text-[var(--admin-text-primary)] uppercase tracking-tight">
            Dashboard Overview
          </h1>{" "}
          <p className="text-xs text-[var(--admin-text-secondary)] mt-0.5">
            {" "}
            Venkateswar Engg Works Pvt. Ltd. Enterprise Management Console{" "}
          </p>{" "}
        </div>{" "}
        <div className="px-3 py-1 bg-[var(--admin-surface)] border border-[var(--admin-border)] text-[var(--admin-brass)] text-xs font-bold flex items-center gap-1.5 uppercase tracking-wider">
          {" "}
          <ShieldCheck className="w-4 h-4 text-[var(--admin-accent)] dark:text-[var(--admin-brass)]" />{" "}
          System Active • GSTIN: 21ARXPK7658Q1ZO{" "}
        </div>{" "}
      </div>{" "}
      {/* Stats Cards Grid */}{" "}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {" "}
        <div className="bg-[var(--admin-surface)] p-5 border border-[var(--admin-border)] space-y-2">
          {" "}
          <div className="flex justify-between items-center text-[var(--admin-text-secondary)]">
            {" "}
            <span className="text-[11px] font-bold uppercase tracking-wider">
              Furnace O&M
            </span>{" "}
            <Flame className="w-4 h-4 text-[var(--admin-brass)]" />{" "}
          </div>{" "}
          <p className="text-2xl font-bold text-[var(--admin-text-primary)]">
            {stats.furnaceCount}
          </p>{" "}
          <span className="text-[10px] text-[var(--admin-text-secondary)] block">
            5 MVA to 24 MVA
          </span>{" "}
        </div>{" "}
        <div className="bg-[var(--admin-surface)] p-5 border border-[var(--admin-border)] space-y-2">
          {" "}
          <div className="flex justify-between items-center text-[var(--admin-text-secondary)]">
            {" "}
            <span className="text-[11px] font-bold uppercase tracking-wider">
              MRP Projects
            </span>{" "}
            <Layers className="w-4 h-4 text-[var(--admin-brass)]" />{" "}
          </div>{" "}
          <p className="text-2xl font-bold text-[var(--admin-text-primary)]">
            {stats.mrpCount}
          </p>{" "}
          <span className="text-[10px] text-[var(--admin-text-secondary)] block">
            50 TPD to 1500 TPD
          </span>{" "}
        </div>{" "}
        <div className="bg-[var(--admin-surface)] p-5 border border-[var(--admin-border)] space-y-2">
          {" "}
          <div className="flex justify-between items-center text-[var(--admin-text-secondary)]">
            {" "}
            <span className="text-[11px] font-bold uppercase tracking-wider">
              Sinter Plants
            </span>{" "}
            <Factory className="w-4 h-4 text-[var(--admin-brass)]" />{" "}
          </div>{" "}
          <p className="text-2xl font-bold text-[var(--admin-text-primary)]">
            {stats.sinterCount}
          </p>{" "}
          <span className="text-[10px] text-[var(--admin-text-secondary)] block">
            40 TPD to 200 TPD
          </span>{" "}
        </div>{" "}
        <div className="bg-[var(--admin-surface)] p-5 border border-[var(--admin-border)] space-y-2">
          {" "}
          <div className="flex justify-between items-center text-[var(--admin-text-secondary)]">
            {" "}
            <span className="text-[11px] font-bold uppercase tracking-wider">
              International
            </span>{" "}
            <Globe className="w-4 h-4 text-[var(--admin-brass)]" />{" "}
          </div>{" "}
          <p className="text-2xl font-bold text-[var(--admin-text-primary)]">
            {stats.intCount}
          </p>{" "}
          <span className="text-[10px] text-[var(--admin-text-secondary)] block">
            Oman & Zambia
          </span>{" "}
        </div>{" "}
        <div className="bg-[var(--admin-surface)] p-5 border border-[var(--admin-border)] space-y-2">
          {" "}
          <div className="flex justify-between items-center text-[var(--admin-text-secondary)]">
            {" "}
            <span className="text-[11px] font-bold uppercase tracking-wider">
              Manpower
            </span>{" "}
            <Users className="w-4 h-4 text-[var(--admin-brass)]" />{" "}
          </div>{" "}
          <p className="text-xl font-bold text-[var(--admin-brass)]">
            {stats.manpower}
          </p>{" "}
          <span className="text-[10px] text-[var(--admin-text-secondary)] block">
            Across 20+ Sites
          </span>{" "}
        </div>{" "}
        <div className="bg-[var(--admin-surface)] p-5 border border-[var(--admin-border)] space-y-2">
          {" "}
          <div className="flex justify-between items-center text-[var(--admin-text-secondary)]">
            {" "}
            <span className="text-[11px] font-bold uppercase tracking-wider">
              Enquiries
            </span>{" "}
            <Mail className="w-4 h-4 text-[var(--admin-brass)]" />{" "}
          </div>{" "}
          <p className="text-2xl font-bold text-[var(--admin-text-primary)]">
            {stats.enquiriesCount}
          </p>{" "}
          <span className="text-[10px] text-[var(--admin-text-secondary)] block">
            Total Submissions
          </span>{" "}
        </div>{" "}
      </div>{" "}
      {/* Content Management Modules Grid */}{" "}
      <div className="space-y-4">
        {" "}
        <h2 className="text-sm font-bold uppercase tracking-wider text-[var(--admin-text-primary)] border-b border-[var(--admin-border)] pb-2">
          {" "}
          Content Management Modules{" "}
        </h2>{" "}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
          {" "}
          <div className="bg-[var(--admin-surface)] p-6 border border-[var(--admin-border)] space-y-3">
            {" "}
            <h3 className="font-bold text-[var(--admin-text-primary)] text-sm uppercase tracking-wider">
              Project Portfolio Management
            </h3>{" "}
            <p className="text-[var(--admin-text-secondary)]">
              Manage Furnace O&M, MRP, Sinter, and International project
              listings.
            </p>{" "}
            <div className="pt-2 flex flex-wrap gap-2">
              {" "}
              <Link
                href="/projects/furnace"
                className="px-3 py-1.5 bg-[var(--admin-bg)] border border-[var(--admin-border)] text-[var(--admin-text-primary)] font-bold hover:border-[var(--admin-brass)]"
              >
                Furnace O&M
              </Link>{" "}
              <Link
                href="/projects/mrp"
                className="px-3 py-1.5 bg-[var(--admin-bg)] border border-[var(--admin-border)] text-[var(--admin-text-primary)] font-bold hover:border-[var(--admin-brass)]"
              >
                MRP Projects
              </Link>{" "}
              <Link
                href="/projects/sinter"
                className="px-3 py-1.5 bg-[var(--admin-bg)] border border-[var(--admin-border)] text-[var(--admin-text-primary)] font-bold hover:border-[var(--admin-brass)]"
              >
                Sinter Projects
              </Link>{" "}
            </div>{" "}
          </div>{" "}
          <div className="bg-[var(--admin-surface)] p-6 border border-[var(--admin-border)] space-y-3">
            {" "}
            <h3 className="font-bold text-[var(--admin-text-primary)] text-sm uppercase tracking-wider">
              Enquiries Manager
            </h3>{" "}
            <p className="text-[var(--admin-text-secondary)]">
              Review contact submissions, update status, and manage client
              inquiries.
            </p>{" "}
            <div className="pt-2">
              {" "}
              <Link
                href="/enquiries"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[var(--admin-accent)] text-white font-bold uppercase tracking-wider text-xs border border-[var(--admin-brass)] hover:opacity-95"
              >
                {" "}
                Open Enquiries Manager <ArrowRight className="w-4 h-4" />{" "}
              </Link>{" "}
            </div>{" "}
          </div>{" "}
          <div className="bg-[var(--admin-surface)] p-6 border border-[var(--admin-border)] space-y-3">
            {" "}
            <h3 className="font-bold text-[var(--admin-text-primary)] text-sm uppercase tracking-wider">
              Operations & Specs Content
            </h3>{" "}
            <p className="text-[var(--admin-text-secondary)]">
              Manage NGM Smelters SOPs, Raw Material Specs, KPI grade values,
              and Manpower stats.
            </p>{" "}
            <div className="pt-2 flex flex-wrap gap-2">
              {" "}
              <Link
                href="/operations"
                className="px-3 py-1.5 bg-[var(--admin-bg)] border border-[var(--admin-border)] text-[var(--admin-text-primary)] font-bold hover:border-[var(--admin-brass)]"
              >
                Operations SOP
              </Link>{" "}
              <Link
                href="/kpi"
                className="px-3 py-1.5 bg-[var(--admin-bg)] border border-[var(--admin-border)] text-[var(--admin-text-primary)] font-bold hover:border-[var(--admin-brass)]"
              >
                KPI Specs
              </Link>{" "}
              <Link
                href="/manpower"
                className="px-3 py-1.5 bg-[var(--admin-bg)] border border-[var(--admin-border)] text-[var(--admin-text-primary)] font-bold hover:border-[var(--admin-brass)]"
              >
                Manpower
              </Link>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
