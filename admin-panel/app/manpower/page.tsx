"use client";
import React, { useState, useEffect } from "react";
import { fetchAdminData, updateAdminData } from "@/lib/adminApi";
import { Users, Save, CheckCircle2 } from "lucide-react";
export default function ManpowerAdminPage() {
  const [data, setData] = useState<any>(null);
  const [msg, setMsg] = useState("");
  const loadData = async () => {
    const res = await fetchAdminData("/manpower");
    if (res && res.data) setData(res.data);
  };
  useEffect(() => {
    loadData();
  }, []);
  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await updateAdminData("/admin/manpower", data, "PUT");
    if (res.success) {
      setMsg("Manpower stats updated successfully!");
      setTimeout(() => setMsg(""), 3000);
    }
  };
  if (!data)
    return (
      <div className="text-[var(--text-muted)]">Loading manpower stats...</div>
    );
  return (
    <div className="space-y-6 text-xs max-w-4xl">
      {" "}
      <div className="flex justify-between items-center border-b border-gray-800 pb-4">
        {" "}
        <div>
          {" "}
          <h1 className="text-2xl font-bold text-[var(--text-primary)]">
            Manpower Distribution Editor
          </h1>{" "}
          <p className="text-[var(--text-muted)]">
            Update company workforce statistics (~3,100 personnel, 20+ sites).
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
            General Workforce Overview
          </h2>{" "}
          <div className="grid grid-cols-2 gap-4">
            {" "}
            <div>
              {" "}
              <label className="block text-[var(--text-muted)] mb-1">
                Total Strength String
              </label>{" "}
              <input
                type="text"
                value={data.totalStrength || ""}
                onChange={(e) =>
                  setData({ ...data, totalStrength: e.target.value })
                }
                className="w-full px-3 py-2 rounded bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-primary)] font-bold text-[var(--accent-brass)]"
              />{" "}
            </div>{" "}
            <div>
              {" "}
              <label className="block text-[var(--text-muted)] mb-1">
                Active Sites Count
              </label>{" "}
              <input
                type="text"
                value={data.sitesCount || ""}
                onChange={(e) =>
                  setData({ ...data, sitesCount: e.target.value })
                }
                className="w-full px-3 py-2 rounded bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-primary)]"
              />{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="bg-[#111827] p-6 rounded-sm border border-gray-800 space-y-4">
          {" "}
          <h2 className="text-base font-bold text-[var(--text-primary)]">
            Conclusion Statement
          </h2>{" "}
          <textarea
            rows={3}
            value={data.conclusion || ""}
            onChange={(e) => setData({ ...data, conclusion: e.target.value })}
            className="w-full px-3 py-2 rounded bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-primary)]"
          />{" "}
        </div>{" "}
        <button
          type="submit"
          className="px-6 py-3 rounded-sm bg-cyan-500 text-[var(--text-primary)] font-bold text-sm flex items-center gap-2"
        >
          {" "}
          <Save className="w-4 h-4" /> Save Manpower Changes{" "}
        </button>{" "}
      </form>{" "}
    </div>
  );
}
