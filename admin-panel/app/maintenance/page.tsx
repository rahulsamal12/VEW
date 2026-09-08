"use client";
import React, { useState, useEffect } from "react";
import { fetchAdminData, updateAdminData } from "@/lib/adminApi";
import { Save, Wrench } from "lucide-react";
export default function MaintenanceAdminPage() {
  const [safetyData, setSafetyData] = useState<any>(null);
  const [msg, setMsg] = useState("");
  const loadData = async () => {
    const res = await fetchAdminData("/safety");
    if (res && res.data) setSafetyData(res.data);
  };
  useEffect(() => {
    loadData();
  }, []);
  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await updateAdminData("/admin/safety", safetyData, "PUT");
    if (res.success) {
      setMsg("Safety & Maintenance settings saved!");
      setTimeout(() => setMsg(""), 3000);
    }
  };
  if (!safetyData)
    return (
      <div className="text-[var(--text-muted)]">
        Loading safety standards...
      </div>
    );
  return (
    <div className="space-y-6 text-xs max-w-4xl">
      {" "}
      <div className="flex justify-between items-center border-b border-gray-800 pb-4">
        {" "}
        <div>
          {" "}
          <h1 className="text-2xl font-bold text-[var(--text-primary)]">
            Maintenance & Safety Management
          </h1>{" "}
          <p className="text-[var(--text-muted)]">
            Manage plant-wide maintenance procedures, work permits, PPE, and ISO
            records.
          </p>{" "}
        </div>{" "}
        {msg && (
          <span className="text-[var(--text-primary)] font-bold">{msg}</span>
        )}{" "}
      </div>{" "}
      <form onSubmit={handleSave} className="space-y-6">
        {" "}
        <div className="bg-[#111827] p-6 rounded-sm border border-gray-800 space-y-4">
          {" "}
          <h2 className="text-base font-bold text-[var(--text-primary)]">
            Work Permits Required
          </h2>{" "}
          <div className="space-y-2">
            {" "}
            {safetyData.permits &&
              safetyData.permits.map((p: string, idx: number) => (
                <div
                  key={idx}
                  className="p-2.5 rounded bg-[var(--bg-surface)] border border-gray-800 text-[var(--text-secondary)]"
                >
                  {" "}
                  • {p}{" "}
                </div>
              ))}{" "}
          </div>{" "}
        </div>{" "}
        <div className="bg-[#111827] p-6 rounded-sm border border-gray-800 space-y-4">
          {" "}
          <h2 className="text-base font-bold text-[var(--text-primary)]">
            PPE Requirements
          </h2>{" "}
          <div className="space-y-2">
            {" "}
            {safetyData.ppeRequirements &&
              safetyData.ppeRequirements.map((ppe: string, idx: number) => (
                <div
                  key={idx}
                  className="p-2.5 rounded bg-[var(--bg-surface)] border border-gray-800 text-[var(--text-secondary)]"
                >
                  {" "}
                  • {ppe}{" "}
                </div>
              ))}{" "}
          </div>{" "}
        </div>{" "}
        <button
          type="submit"
          className="px-6 py-3 rounded-sm bg-cyan-500 text-[var(--text-primary)] font-bold text-sm flex items-center gap-2"
        >
          {" "}
          <Save className="w-4 h-4" /> Save Maintenance & Safety Data{" "}
        </button>{" "}
      </form>{" "}
    </div>
  );
}
