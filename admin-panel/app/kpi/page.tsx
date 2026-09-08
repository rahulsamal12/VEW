"use client";
import React, { useState, useEffect } from "react";
import { fetchAdminData, updateAdminData } from "@/lib/adminApi";
import { Save, AlertCircle } from "lucide-react";
export default function KpiAdminPage() {
  const [data, setData] = useState<any>(null);
  const [msg, setMsg] = useState("");
  const loadData = async () => {
    const res = await fetchAdminData("/kpis");
    if (res && res.data) setData(res.data);
  };
  useEffect(() => {
    loadData();
  }, []);
  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await updateAdminData("/admin/kpis", data, "PUT");
    if (res.success) {
      setMsg("KPI Technical specifications saved successfully!");
      setTimeout(() => setMsg(""), 3000);
    }
  };
  if (!data)
    return (
      <div className="text-[var(--text-muted)]">
        Loading KPI specifications...
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
            KPI Technical Specifications Editor
          </h1>{" "}
          <p className="text-[var(--text-muted)]">
            Manage power formulas and grade specs. Note: PDF exact wording
            &quot;370-380 ma x&quot; preserved.
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
            Document Title
          </h2>{" "}
          <input
            type="text"
            value={data.title || ""}
            onChange={(e) => setData({ ...data, title: e.target.value })}
            className="w-full px-3 py-2 rounded bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-primary)] font-bold"
          />{" "}
        </div>{" "}
        <div className="bg-[#111827] p-6 rounded-sm border border-gray-800 space-y-4">
          {" "}
          <h2 className="text-base font-bold text-[var(--text-primary)]">
            Day Power & Production Formulas
          </h2>{" "}
          <div className="space-y-3">
            {" "}
            <div>
              {" "}
              <label className="block text-[var(--text-muted)] mb-1">
                Power Formula
              </label>{" "}
              <input
                type="text"
                value={data.dayPowerProductionCalculation?.formulaPower || ""}
                onChange={(e) =>
                  setData({
                    ...data,
                    dayPowerProductionCalculation: {
                      ...data.dayPowerProductionCalculation,
                      formulaPower: e.target.value,
                    },
                  })
                }
                className="w-full px-3 py-2 rounded bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--accent-brass)] font-mono font-bold"
              />{" "}
            </div>{" "}
            <div>
              {" "}
              <label className="block text-[var(--text-muted)] mb-1">
                Production Formula
              </label>{" "}
              <input
                type="text"
                value={
                  data.dayPowerProductionCalculation?.formulaProduction || ""
                }
                onChange={(e) =>
                  setData({
                    ...data,
                    dayPowerProductionCalculation: {
                      ...data.dayPowerProductionCalculation,
                      formulaProduction: e.target.value,
                    },
                  })
                }
                className="w-full px-3 py-2 rounded bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-primary)] font-mono font-bold"
              />{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <button
          type="submit"
          className="px-6 py-3 rounded-sm bg-cyan-500 text-[var(--text-primary)] font-bold text-sm flex items-center gap-2"
        >
          {" "}
          <Save className="w-4 h-4" /> Save KPI Technical Data{" "}
        </button>{" "}
      </form>{" "}
    </div>
  );
}
