"use client";
import React, { useState, useEffect } from "react";
import { fetchAdminData, updateAdminData } from "@/lib/adminApi";
import { Save, FileText } from "lucide-react";
export default function OperationsAdminPage() {
  const [data, setData] = useState<any>(null);
  const [msg, setMsg] = useState("");
  const loadData = async () => {
    const res = await fetchAdminData("/operations");
    if (res && res.data) setData(res.data);
  };
  useEffect(() => {
    loadData();
  }, []);
  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await updateAdminData("/admin/operations", data, "PUT");
    if (res.success) {
      setMsg("Operational SOP content saved successfully!");
      setTimeout(() => setMsg(""), 3000);
    }
  };
  if (!data)
    return (
      <div className="text-[var(--text-muted)]">
        Loading operational SOPs...
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
            Operational SOP Editor (NGM Smelters)
          </h1>{" "}
          <p className="text-[var(--text-muted)]">
            Manage plant scope matrix, furnace parameters, and step-by-step SOP
            definitions.
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
            Facility Heading & Specs
          </h2>{" "}
          <div className="grid grid-cols-3 gap-4">
            {" "}
            <div>
              {" "}
              <label className="block text-[var(--text-muted)] mb-1">
                Heading
              </label>{" "}
              <input
                type="text"
                value={data.heading || ""}
                onChange={(e) => setData({ ...data, heading: e.target.value })}
                className="w-full px-3 py-2 rounded bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-primary)] font-bold"
              />{" "}
            </div>{" "}
            <div>
              {" "}
              <label className="block text-[var(--text-muted)] mb-1">
                Furnace Spec
              </label>{" "}
              <input
                type="text"
                value={data.furnaceSpec || ""}
                onChange={(e) =>
                  setData({ ...data, furnaceSpec: e.target.value })
                }
                className="w-full px-3 py-2 rounded bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--accent-brass)] font-bold"
              />{" "}
            </div>{" "}
            <div>
              {" "}
              <label className="block text-[var(--text-muted)] mb-1">
                Location
              </label>{" "}
              <input
                type="text"
                value={data.location || ""}
                onChange={(e) => setData({ ...data, location: e.target.value })}
                className="w-full px-3 py-2 rounded bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-primary)]"
              />{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="bg-[#111827] p-6 rounded-sm border border-gray-800 space-y-4">
          {" "}
          <h2 className="text-base font-bold text-[var(--text-primary)]">
            Slag Granulation & Metal Recovery Notes
          </h2>{" "}
          <div className="space-y-3">
            {" "}
            <div>
              {" "}
              <label className="block text-[var(--text-muted)] mb-1">
                Slag Granulation Note
              </label>{" "}
              <textarea
                rows={2}
                value={data.slagGranulationNote || ""}
                onChange={(e) =>
                  setData({ ...data, slagGranulationNote: e.target.value })
                }
                className="w-full px-3 py-2 rounded bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-primary)]"
              />{" "}
            </div>{" "}
            <div>
              {" "}
              <label className="block text-[var(--text-muted)] mb-1">
                Metal Recovery Plant Note
              </label>{" "}
              <textarea
                rows={2}
                value={data.metalRecoveryNote || ""}
                onChange={(e) =>
                  setData({ ...data, metalRecoveryNote: e.target.value })
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
          <Save className="w-4 h-4" /> Save Operations Content{" "}
        </button>{" "}
      </form>{" "}
    </div>
  );
}
