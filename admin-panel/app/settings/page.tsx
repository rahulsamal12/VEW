"use client";
import React, { useState, useEffect } from "react";
import { fetchAdminData, updateAdminData } from "@/lib/adminApi";
import { Settings, Save } from "lucide-react";
export default function SettingsAdminPage() {
  const [data, setData] = useState<any>(null);
  const [msg, setMsg] = useState("");
  const loadData = async () => {
    const res = await fetchAdminData("/settings");
    if (res && res.data) setData(res.data);
  };
  useEffect(() => {
    loadData();
  }, []);
  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await updateAdminData("/admin/settings", data, "PUT");
    if (res.success) {
      setMsg("Site settings updated successfully!");
      setTimeout(() => setMsg(""), 3000);
    }
  };
  if (!data)
    return (
      <div className="text-[var(--text-muted)]">Loading site settings...</div>
    );
  return (
    <div className="space-y-6 text-xs max-w-4xl">
      {" "}
      <div className="flex justify-between items-center border-b border-gray-800 pb-4">
        {" "}
        <div>
          {" "}
          <h1 className="text-2xl font-bold text-[var(--text-primary)]">
            Site Settings & Contact Information
          </h1>{" "}
          <p className="text-[var(--text-muted)]">
            Manage legal company details, GSTIN, and leadership contact
            phones/emails.
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
            Company Identity
          </h2>{" "}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {" "}
            <div>
              {" "}
              <label className="block text-[var(--text-muted)] mb-1">
                Company Name
              </label>{" "}
              <input
                type="text"
                value={data.companyName || ""}
                onChange={(e) =>
                  setData({ ...data, companyName: e.target.value })
                }
                className="w-full px-3 py-2 rounded bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-primary)] font-bold"
              />{" "}
            </div>{" "}
            <div>
              {" "}
              <label className="block text-[var(--text-muted)] mb-1">
                Short Name
              </label>{" "}
              <input
                type="text"
                value={data.shortName || ""}
                onChange={(e) =>
                  setData({ ...data, shortName: e.target.value })
                }
                className="w-full px-3 py-2 rounded bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-primary)] font-bold text-[var(--accent-brass)]"
              />{" "}
            </div>{" "}
            <div>
              {" "}
              <label className="block text-[var(--text-muted)] mb-1">
                GSTIN *
              </label>{" "}
              <input
                type="text"
                value={data.gstin || ""}
                onChange={(e) => setData({ ...data, gstin: e.target.value })}
                className="w-full px-3 py-2 rounded bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--accent-brass)] font-mono font-bold"
              />{" "}
            </div>{" "}
            <div>
              {" "}
              <label className="block text-[var(--text-muted)] mb-1">
                Founded Year
              </label>{" "}
              <input
                type="number"
                value={data.founded || 2003}
                onChange={(e) =>
                  setData({ ...data, founded: parseInt(e.target.value) })
                }
                className="w-full px-3 py-2 rounded bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-primary)]"
              />{" "}
            </div>{" "}
            <div>
              {" "}
              <label className="block text-[var(--text-muted)] mb-1">
                Founder Name
              </label>{" "}
              <input
                type="text"
                value={data.founder || ""}
                onChange={(e) => setData({ ...data, founder: e.target.value })}
                className="w-full px-3 py-2 rounded bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-primary)]"
              />{" "}
            </div>{" "}
            <div>
              {" "}
              <label className="block text-[var(--text-muted)] mb-1">
                Managing Partner
              </label>{" "}
              <input
                type="text"
                value={data.managingPartner || ""}
                onChange={(e) =>
                  setData({ ...data, managingPartner: e.target.value })
                }
                className="w-full px-3 py-2 rounded bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-primary)]"
              />{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <button
          type="submit"
          className="px-6 py-3 rounded-sm bg-cyan-500 text-[var(--text-primary)] font-bold text-sm flex items-center gap-2"
        >
          {" "}
          <Save className="w-4 h-4" /> Save Settings{" "}
        </button>{" "}
      </form>{" "}
    </div>
  );
}
