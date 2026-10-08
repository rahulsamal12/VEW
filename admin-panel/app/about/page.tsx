"use client";
import React, { useState, useEffect } from "react";
import { fetchAdminData, updateAdminData } from "@/lib/adminApi";
import { Save, AlertCircle, RefreshCw } from "lucide-react";

export default function AboutAdminPage() {
  const [data, setData] = useState<any>(null);
  const [msg, setMsg] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetchAdminData("/about");
      if (res && res.success) {
        if (res.data) {
          setData(res.data);
        } else {
          setData({ title: "", overview: "", foundersVision: "", corePillars: [] });
        }
      } else if (res && res.message === 'Content not found') {
        setData({ title: "", overview: "", foundersVision: "", corePillars: [] });
      } else {
        setError(res?.error || res?.message || "Failed to load about data.");
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
    const res = await updateAdminData("/admin/about", data, "PUT");
    if (res.success) {
      setMsg("About Us updated successfully!");
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
            About Us Content
          </h1>
          <p className="text-[13px] text-admin-text-secondary mt-1">
            Manage the content displayed on the About page.
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
            Page Content
          </h2>
          
          <div className="space-y-6">
            <div>
              <label className="form-label">
                Company Overview
              </label>
              <textarea
                value={data.overview || ""}
                onChange={(e) =>
                  setData({ ...data, overview: e.target.value })
                }
                className="form-input min-h-[150px] whitespace-pre-wrap"
                placeholder="Enter the main company overview..."
              />
            </div>
            
            <div>
              <label className="form-label">
                Founders Vision
              </label>
              <textarea
                value={data.foundersVision || ""}
                onChange={(e) =>
                  setData({ ...data, foundersVision: e.target.value })
                }
                className="form-input min-h-[100px] whitespace-pre-wrap"
                placeholder="Enter the founder's vision statement..."
              />
            </div>
          </div>
        </div>
        
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="btn-primary gap-2"
          >
            <Save className="w-4 h-4" /> Save Content
          </button>
        </div>
      </form>
    </div>
  );
}
