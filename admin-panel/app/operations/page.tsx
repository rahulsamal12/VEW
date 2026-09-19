"use client";
import React, { useState, useEffect } from "react";
import { fetchAdminData, updateAdminData } from "@/lib/adminApi";
import { Save, FileText , AlertCircle, RefreshCw} from "lucide-react";
export default function OperationsAdminPage() {
  const [data, setData] = useState<any>(null);
  const [msg, setMsg] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const loadData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetchAdminData("/operations");
      if (res && res.data) {
        setData(res.data);
      } else {
        setError(res?.error || res?.message || "Failed to load operations data. Database service may be unavailable.");
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
    const res = await updateAdminData("/admin/operations", data, "PUT");
    if (res.success) {
      setMsg("Operational SOP content saved successfully!");
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
            Operational SOP Editor (NGM Smelters)
          </h1>
          <p className="text-[13px] text-admin-text-secondary mt-1">
            Manage plant scope matrix, furnace parameters, and step-by-step SOP definitions.
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
            Facility Heading & Specs
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className="form-label">
                Heading
              </label>
              <input
                type="text"
                value={data.heading || ""}
                onChange={(e) => setData({ ...data, heading: e.target.value })}
                className="form-input font-medium"
              />
            </div>
            
            <div>
              <label className="form-label">
                Furnace Spec
              </label>
              <input
                type="text"
                value={data.furnaceSpec || ""}
                onChange={(e) =>
                  setData({ ...data, furnaceSpec: e.target.value })
                }
                className="form-input font-medium"
              />
            </div>
            
            <div>
              <label className="form-label">
                Location
              </label>
              <input
                type="text"
                value={data.location || ""}
                onChange={(e) => setData({ ...data, location: e.target.value })}
                className="form-input font-medium"
              />
            </div>
          </div>
        </div>
        
        <div className="bg-admin-surface p-6 sm:p-8 rounded-sm border border-admin-border shadow-sm space-y-6">
          <h2 className="text-[16px] font-bold text-admin-text-primary border-b border-admin-border pb-3">
            Slag Granulation & Metal Recovery Notes
          </h2>
          
          <div className="space-y-6">
            <div>
              <label className="form-label">
                Slag Granulation Note
              </label>
              <textarea
                rows={3}
                value={data.slagGranulationNote || ""}
                onChange={(e) =>
                  setData({ ...data, slagGranulationNote: e.target.value })
                }
                className="form-input resize-y"
              />
            </div>
            
            <div>
              <label className="form-label">
                Metal Recovery Plant Note
              </label>
              <textarea
                rows={3}
                value={data.metalRecoveryNote || ""}
                onChange={(e) =>
                  setData({ ...data, metalRecoveryNote: e.target.value })
                }
                className="form-input resize-y"
              />
            </div>
          </div>
        </div>
        
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="btn-primary gap-2"
          >
            <Save className="w-4 h-4" /> Save Operations Content
          </button>
        </div>
      </form>
    </div>
  );
}

