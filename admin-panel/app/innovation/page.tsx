"use client";
import React, { useState, useEffect } from "react";
import { fetchAdminData, updateAdminData } from "@/lib/adminApi";
import { Save, Sparkles } from "lucide-react";
export default function InnovationAdminPage() {
  const [data, setData] = useState<any>(null);
  const [msg, setMsg] = useState("");
  const loadData = async () => {
    const res = await fetchAdminData("/innovation");
    if (res && res.data) setData(res.data);
  };
  useEffect(() => {
    loadData();
  }, []);
  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await updateAdminData("/admin/innovation", data, "PUT");
    if (res.success) {
      setMsg("Innovation content saved successfully!");
      setTimeout(() => setMsg(""), 3000);
    }
  };
  if (!data)
    return (
      <div className="text-[var(--text-muted)]">Loading innovation data...</div>
    );
  return (
    <div className="space-y-6 text-xs max-w-4xl">
      {" "}
      <div className="flex justify-between items-center border-b border-gray-800 pb-4">
        {" "}
        <div>
          {" "}
          <h1 className="text-2xl font-bold text-[var(--text-primary)]">
            Innovation & Success Highlight Editor
          </h1>{" "}
          <p className="text-[var(--text-muted)]">
            Manage diaphragm jigs micro-fines recovery and TSL chrome recovery
            norms (84% → 85.5%).
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
            Innovation Details
          </h2>{" "}
          <div className="space-y-3">
            {" "}
            <div>
              {" "}
              <label className="block text-[var(--text-muted)] mb-1">
                Title
              </label>{" "}
              <input
                type="text"
                value={data.title || ""}
                onChange={(e) => setData({ ...data, title: e.target.value })}
                className="w-full px-3 py-2 rounded bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-primary)] font-bold"
              />{" "}
            </div>{" "}
            <div>
              {" "}
              <label className="block text-[var(--text-muted)] mb-1">
                Subject
              </label>{" "}
              <input
                type="text"
                value={data.subject || ""}
                onChange={(e) => setData({ ...data, subject: e.target.value })}
                className="w-full px-3 py-2 rounded bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--accent-brass)] font-semibold"
              />{" "}
            </div>{" "}
            <div>
              {" "}
              <label className="block text-[var(--text-muted)] mb-1">
                Performance Result
              </label>{" "}
              <textarea
                rows={2}
                value={data.result || ""}
                onChange={(e) => setData({ ...data, result: e.target.value })}
                className="w-full px-3 py-2 rounded bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-primary)]"
              />{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="bg-[#111827] p-6 rounded-sm border border-gray-800 space-y-4">
          {" "}
          <h2 className="text-base font-bold text-[var(--text-primary)]">
            TSL Recovery Norms Revision
          </h2>{" "}
          <div className="grid grid-cols-3 gap-4">
            {" "}
            <div>
              {" "}
              <label className="block text-[var(--text-muted)] mb-1">
                Client
              </label>{" "}
              <input
                type="text"
                value={
                  data.tslNormsRevision?.client || "Tata Steel Limited (TSL)"
                }
                onChange={(e) =>
                  setData({
                    ...data,
                    tslNormsRevision: {
                      ...data.tslNormsRevision,
                      client: e.target.value,
                    },
                  })
                }
                className="w-full px-3 py-2 rounded bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-primary)]"
              />{" "}
            </div>{" "}
            <div>
              {" "}
              <label className="block text-[var(--text-muted)] mb-1">
                Previous Norm
              </label>{" "}
              <input
                type="text"
                value={data.tslNormsRevision?.previousNorm || "84%"}
                onChange={(e) =>
                  setData({
                    ...data,
                    tslNormsRevision: {
                      ...data.tslNormsRevision,
                      previousNorm: e.target.value,
                    },
                  })
                }
                className="w-full px-3 py-2 rounded bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-muted)] line-through"
              />{" "}
            </div>{" "}
            <div>
              {" "}
              <label className="block text-[var(--text-muted)] mb-1">
                Revised Norm
              </label>{" "}
              <input
                type="text"
                value={data.tslNormsRevision?.revisedNorm || "85.5%"}
                onChange={(e) =>
                  setData({
                    ...data,
                    tslNormsRevision: {
                      ...data.tslNormsRevision,
                      revisedNorm: e.target.value,
                    },
                  })
                }
                className="w-full px-3 py-2 rounded bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--accent-brass)] font-bold"
              />{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <button
          type="submit"
          className="px-6 py-3 rounded-sm bg-cyan-500 text-[var(--text-primary)] font-bold text-sm flex items-center gap-2"
        >
          {" "}
          <Save className="w-4 h-4" /> Save Innovation Content{" "}
        </button>{" "}
      </form>{" "}
    </div>
  );
}
