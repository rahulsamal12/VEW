"use client";
import React, { useState, useEffect } from "react";
import { fetchAdminData, updateAdminData } from "@/lib/adminApi";
import { Users, Save, CheckCircle2 , AlertCircle, RefreshCw} from "lucide-react";
export default function ManpowerAdminPage() {
  const [data, setData] = useState<any>(null);
  const [msg, setMsg] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const loadData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetchAdminData("/manpower");
      if (res && res.data) {
        setData(res.data);
      } else {
        setError(res?.error || res?.message || "Failed to load manpower data. Database service may be unavailable.");
      }
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
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
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-admin-text-muted space-y-4">
        <RefreshCw className="w-8 h-8 animate-spin text-admin-steel" />
        <p className="font-medium">Loading data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
        <div className="p-4 bg-rose-500/10 rounded-full">
          <AlertCircle className="w-8 h-8 text-rose-500" />
        </div>
        <div>
          <h3 className="text-[16px] font-bold text-admin-text-primary">Failed to load data</h3>
          <p className="text-[13px] text-admin-text-secondary mt-1">{error}</p>
        </div>
        <button type="button" onClick={loadData} className="btn-secondary mt-2 gap-2">
          <RefreshCw className="w-4 h-4" /> Try Again
        </button>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="space-y-6 max-w-5xl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-admin-border pb-4">
        <div>
          <h1 className="text-[24px] font-bold text-admin-text-primary tracking-tight">
            Manpower Distribution Editor
          </h1>
          <p className="text-[13px] text-admin-text-secondary mt-1">
            Update company workforce statistics (~3,100 personnel, 20+ sites).
          </p>
        </div>
        {msg && (
          <div className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 text-[12px] font-bold uppercase tracking-wider rounded-sm shadow-sm">
            {msg}
          </div>
        )}
      </div>
      
      <form onSubmit={handleSave} className="space-y-6">
        <div className="bg-admin-surface p-6 sm:p-8 rounded-sm border border-admin-border shadow-sm space-y-6">
          <h2 className="text-[16px] font-bold text-admin-text-primary border-b border-admin-border pb-3">
            General Workforce Overview
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="form-label">
                Total Strength String
              </label>
              <input
                type="text"
                value={data.totalStrength || ""}
                onChange={(e) =>
                  setData({ ...data, totalStrength: e.target.value })
                }
                className="form-input font-medium text-admin-steel dark:text-admin-brass"
              />
            </div>
            
            <div>
              <label className="form-label">
                Active Sites Count
              </label>
              <input
                type="text"
                value={data.sitesCount || ""}
                onChange={(e) =>
                  setData({ ...data, sitesCount: e.target.value })
                }
                className="form-input font-medium"
              />
            </div>
          </div>
        </div>
        
        <div className="bg-admin-surface p-6 sm:p-8 rounded-sm border border-admin-border shadow-sm space-y-6">
          <h2 className="text-[16px] font-bold text-admin-text-primary border-b border-admin-border pb-3">
            Conclusion Statement
          </h2>
          <textarea
            rows={4}
            value={data.conclusion || ""}
            onChange={(e) => setData({ ...data, conclusion: e.target.value })}
            className="form-input resize-y"
          />
        </div>
        
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="btn-primary gap-2"
          >
            <Save className="w-4 h-4" /> Save Manpower Changes
          </button>
        </div>
      </form>
    </div>
  );
}

