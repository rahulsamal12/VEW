"use client";
import React, { useState, useEffect } from "react";
import { fetchAdminData, updateAdminData } from "@/lib/adminApi";
import { Settings, Save , AlertCircle, RefreshCw} from "lucide-react";
export default function SettingsAdminPage() {
  const [data, setData] = useState<any>(null);
  const [msg, setMsg] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const loadData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetchAdminData("/settings");
      if (res && res.success) {
        if (res.data) {
          setData(res.data);
        } else {
          setData({ companyName: "", shortName: "", gstin: "", founded: 2003, founder: "", managingPartner: "" });
        }
      } else if (res && res.message === 'Content not found') {
        setData({ companyName: "", shortName: "", gstin: "", founded: 2003, founder: "", managingPartner: "" });
      } else {
        setError(res?.error || res?.message || "Failed to load settings.");
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
    const res = await updateAdminData("/admin/settings", data, "PUT");
    if (res.success) {
      setMsg("Site settings updated successfully!");
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
  return (
    <div className="space-y-6 max-w-5xl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-admin-border pb-4">
        <div>
          <h1 className="text-[24px] font-bold text-admin-text-primary tracking-tight">
            Site Settings & Contact Information
          </h1>
          <p className="text-[13px] text-admin-text-secondary mt-1">
            Manage legal company details, GSTIN, and leadership contact phones/emails.
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
            Company Identity
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className="form-label">
                Company Name
              </label>
              <input
                type="text"
                value={data.companyName || ""}
                onChange={(e) =>
                  setData({ ...data, companyName: e.target.value })
                }
                className="form-input font-medium"
              />
            </div>
            
            <div>
              <label className="form-label">
                Short Name
              </label>
              <input
                type="text"
                value={data.shortName || ""}
                onChange={(e) =>
                  setData({ ...data, shortName: e.target.value })
                }
                className="form-input font-medium"
              />
            </div>
            
            <div>
              <label className="form-label">
                GSTIN *
              </label>
              <input
                type="text"
                value={data.gstin || ""}
                onChange={(e) => setData({ ...data, gstin: e.target.value })}
                className="form-input font-mono font-medium"
              />
            </div>
            
            <div>
              <label className="form-label">
                Founded Year
              </label>
              <input
                type="number"
                value={data.founded || 2003}
                onChange={(e) =>
                  setData({ ...data, founded: parseInt(e.target.value) })
                }
                className="form-input"
              />
            </div>
            
            <div>
              <label className="form-label">
                Founder Name
              </label>
              <input
                type="text"
                value={data.founder || ""}
                onChange={(e) => setData({ ...data, founder: e.target.value })}
                className="form-input"
              />
            </div>
            
            <div>
              <label className="form-label">
                Managing Partner
              </label>
              <input
                type="text"
                value={data.managingPartner || ""}
                onChange={(e) =>
                  setData({ ...data, managingPartner: e.target.value })
                }
                className="form-input"
              />
            </div>
          </div>
        </div>
        
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="btn-primary gap-2"
          >
            <Save className="w-4 h-4" /> Save Settings
          </button>
        </div>
      </form>
    </div>
  );
}

