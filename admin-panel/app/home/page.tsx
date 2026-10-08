"use client";
import React, { useState, useEffect } from "react";
import { fetchAdminData, updateAdminData } from "@/lib/adminApi";
import { Save, Plus, Trash2, Edit2, AlertCircle, RefreshCw, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function HomeAdminPage() {
  const [data, setData] = useState<any>(null);
  const [services, setServices] = useState<any[]>([]);
  const [msg, setMsg] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("hero");

  const loadData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const [res, servicesRes] = await Promise.all([
        fetchAdminData("/homepage"),
        fetchAdminData("/services")
      ]);
      
      if (res && res.success) {
        if (res.data) {
          setData({
            ...res.data,
            keyStatistics: res.data.keyStatistics || [],
            sectors: res.data.sectors || []
          });
        } else {
          setData({ heroHeading: "", companyIntro: "", keyStatistics: [], sectors: [], ctaHeading: "", ctaDescription: "", ctaText: "", ctaLink: "" });
        }
      } else {
        setData({ heroHeading: "", companyIntro: "", keyStatistics: [], sectors: [], ctaHeading: "", ctaDescription: "", ctaText: "", ctaLink: "" });
      }

      if (servicesRes && servicesRes.success) {
        setServices(servicesRes.data || []);
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
    const res = await updateAdminData("/admin/homepage", data, "PUT");
    if (res.success) {
      setMsg("Home page content updated successfully!");
      setTimeout(() => setMsg(""), 3000);
      loadData();
    } else {
      alert(res?.message || "Failed to save data");
    }
  };

  // Metrics Handlers
  const addMetric = () => setData({ ...data, keyStatistics: [...data.keyStatistics, { stat: "", label: "" }] });
  const updateMetric = (index: number, field: string, value: string) => {
    const newStats = [...data.keyStatistics];
    newStats[index][field] = value;
    setData({ ...data, keyStatistics: newStats });
  };
  const removeMetric = (index: number) => {
    const newStats = [...data.keyStatistics];
    newStats.splice(index, 1);
    setData({ ...data, keyStatistics: newStats });
  };

  // Sectors Handlers
  const addSector = () => setData({ ...data, sectors: [...data.sectors, { title: "", description: "", icon: "Building2" }] });
  const updateSector = (index: number, field: string, value: string) => {
    const newSectors = [...data.sectors];
    newSectors[index][field] = value;
    setData({ ...data, sectors: newSectors });
  };
  const removeSector = (index: number) => {
    const newSectors = [...data.sectors];
    newSectors.splice(index, 1);
    setData({ ...data, sectors: newSectors });
  };

  // Capabilities Handlers
  const [editingService, setEditingService] = useState<any>(null);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  
  const handleServiceSave = async (e: React.FormEvent) => {
    e.preventDefault();
    let res;
    if (editingService._id) {
      res = await updateAdminData(`/admin/services/${editingService._id}`, editingService, "PUT");
    } else {
      res = await updateAdminData("/admin/services", editingService, "POST");
    }
    if (res && res.success) {
      setIsServiceModalOpen(false);
      loadData();
    } else {
      alert(res?.message || "Failed to save capability");
    }
  };
  
  const deleteService = async (id: string) => {
    if (confirm("Are you sure you want to delete this capability?")) {
      await updateAdminData(`/admin/services/${id}`, null, "DELETE");
      loadData();
    }
  };

  if (isLoading) return <div className="py-20 text-center text-admin-text-muted">Loading...</div>;
  if (error) return <div className="py-20 text-center text-rose-500">{error}</div>;

  return (
    <div className="space-y-6 max-w-6xl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-admin-border pb-4">
        <div>
          <h1 className="text-[24px] font-bold text-admin-text-primary tracking-tight">Home Page Management</h1>
          <p className="text-[13px] text-admin-text-secondary mt-1">Manage content across the public Home page sections.</p>
        </div>
        {msg && <div className="px-3 py-1.5 bg-emerald-500/10 text-emerald-600 text-[12px] font-bold uppercase rounded-sm">{msg}</div>}
      </div>

      <div className="flex border-b border-admin-border gap-6 text-[14px] font-semibold">
        {[
          { id: "hero", label: "Hero & Profile" },
          { id: "metrics", label: "Performance Metrics" },
          { id: "sectors", label: "Industrial Sectors" },
          { id: "capabilities", label: "Capabilities Matrix" },
          { id: "cta", label: "Final CTA" },
          { id: "linked", label: "Linked Sections" }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-3 ${activeTab === tab.id ? 'border-b-2 border-admin-brass text-admin-text-primary' : 'text-admin-text-muted hover:text-admin-text-secondary'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {['hero', 'metrics', 'sectors', 'cta'].includes(activeTab) && (
        <form onSubmit={handleSave} className="space-y-6">
          <div className="bg-admin-surface p-6 rounded-sm border border-admin-border shadow-sm">
            {activeTab === 'hero' && (
              <div className="space-y-6">
                <div>
                  <label className="form-label">Hero Main Heading</label>
                  <input type="text" value={data.heroHeading || ""} onChange={e => setData({...data, heroHeading: e.target.value})} className="form-input" />
                </div>
                <div>
                  <label className="form-label">Hero Description / Company Intro</label>
                  <textarea value={data.companyIntro || ""} onChange={e => setData({...data, companyIntro: e.target.value})} className="form-input h-32" />
                </div>
              </div>
            )}

            {activeTab === 'metrics' && (
              <div className="space-y-6">
                {data.keyStatistics.map((stat: any, i: number) => (
                  <div key={i} className="flex gap-4 items-end p-4 border border-admin-border rounded-sm">
                    <div className="flex-1">
                      <label className="form-label">Statistic Value</label>
                      <input type="text" value={stat.stat} onChange={e => updateMetric(i, 'stat', e.target.value)} className="form-input font-bold" />
                    </div>
                    <div className="flex-1">
                      <label className="form-label">Label</label>
                      <input type="text" value={stat.label} onChange={e => updateMetric(i, 'label', e.target.value)} className="form-input" />
                    </div>
                    <button type="button" onClick={() => removeMetric(i)} className="p-2 text-rose-500 hover:bg-rose-500/10 rounded-sm mb-1"><Trash2 className="w-5 h-5"/></button>
                  </div>
                ))}
                <button type="button" onClick={addMetric} className="btn-secondary text-[13px]"><Plus className="w-4 h-4 mr-2"/> Add Metric</button>
              </div>
            )}

            {activeTab === 'sectors' && (
              <div className="space-y-6">
                {data.sectors.map((sector: any, i: number) => (
                  <div key={i} className="p-4 border border-admin-border rounded-sm space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold text-admin-text-primary">Sector #{i + 1}</h3>
                      <button type="button" onClick={() => removeSector(i)} className="p-1 text-rose-500 hover:bg-rose-500/10"><Trash2 className="w-5 h-5"/></button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="form-label">Title</label>
                        <input type="text" value={sector.title} onChange={e => updateSector(i, 'title', e.target.value)} className="form-input font-bold" />
                      </div>
                      <div>
                        <label className="form-label">Icon Name (Flame, Layers, Building2)</label>
                        <input type="text" value={sector.icon} onChange={e => updateSector(i, 'icon', e.target.value)} className="form-input" />
                      </div>
                    </div>
                    <div>
                      <label className="form-label">Description</label>
                      <textarea value={sector.description} onChange={e => updateSector(i, 'description', e.target.value)} className="form-input" />
                    </div>
                  </div>
                ))}
                <button type="button" onClick={addSector} className="btn-secondary text-[13px]"><Plus className="w-4 h-4 mr-2"/> Add Sector</button>
              </div>
            )}

            {activeTab === 'cta' && (
              <div className="space-y-6">
                <div><label className="form-label">CTA Heading</label><input type="text" value={data.ctaHeading || ""} onChange={e => setData({...data, ctaHeading: e.target.value})} className="form-input" /></div>
                <div><label className="form-label">CTA Description</label><textarea value={data.ctaDescription || ""} onChange={e => setData({...data, ctaDescription: e.target.value})} className="form-input h-24" /></div>
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="form-label">CTA Text</label><input type="text" value={data.ctaText || ""} onChange={e => setData({...data, ctaText: e.target.value})} className="form-input" /></div>
                  <div><label className="form-label">CTA Link</label><input type="text" value={data.ctaLink || ""} onChange={e => setData({...data, ctaLink: e.target.value})} className="form-input" /></div>
                </div>
              </div>
            )}
          </div>
          <div className="flex justify-end pt-2"><button type="submit" className="btn-primary gap-2"><Save className="w-4 h-4"/> Save Home Page</button></div>
        </form>
      )}

      {activeTab === 'capabilities' && (
        <div className="space-y-6">
          <div className="flex justify-end">
             <button onClick={() => { setEditingService({ title: "", slug: "", category: "O&M", overview: "", sourceRef: "Admin" }); setIsServiceModalOpen(true); }} className="btn-primary gap-2"><Plus className="w-4 h-4"/> Add Capability</button>
          </div>
          <table className="admin-table w-full border border-admin-border">
            <thead className="bg-admin-surface"><tr><th>Title</th><th>Category</th><th>Slug</th><th className="text-right">Actions</th></tr></thead>
            <tbody>
              {services.map(s => (
                <tr key={s._id} className="border-t border-admin-border">
                  <td className="font-bold p-3">{s.title}</td>
                  <td className="p-3">{s.category}</td>
                  <td className="p-3 text-admin-text-muted">{s.slug}</td>
                  <td className="text-right p-3 space-x-2">
                    <button onClick={() => { setEditingService(s); setIsServiceModalOpen(true); }} className="p-1.5 text-admin-text-muted hover:text-admin-brass"><Edit2 className="w-4 h-4" /></button>
                    <button onClick={() => deleteService(s._id)} className="p-1.5 text-admin-text-muted hover:text-rose-500"><Trash2 className="w-4 h-4" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {isServiceModalOpen && (
            <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
              <form onSubmit={handleServiceSave} className="bg-admin-surface p-6 rounded-sm w-full max-w-md space-y-4">
                <h3 className="font-bold text-lg">Edit Capability</h3>
                <div><label className="form-label">Title</label><input required type="text" value={editingService.title} onChange={e => setEditingService({...editingService, title: e.target.value})} className="form-input" /></div>
                <div><label className="form-label">Slug (URL)</label><input required type="text" value={editingService.slug} onChange={e => setEditingService({...editingService, slug: e.target.value})} className="form-input" /></div>
                <div><label className="form-label">Category</label><input required type="text" value={editingService.category} onChange={e => setEditingService({...editingService, category: e.target.value})} className="form-input" /></div>
                <div><label className="form-label">Overview Description</label><textarea required value={editingService.overview} onChange={e => setEditingService({...editingService, overview: e.target.value})} className="form-input h-24" /></div>
                <div className="flex gap-3 pt-2">
                  <button type="button" onClick={() => setIsServiceModalOpen(false)} className="btn-secondary flex-1">Cancel</button>
                  <button type="submit" className="btn-primary flex-1">Save Capability</button>
                </div>
              </form>
            </div>
          )}
        </div>
      )}

      {activeTab === 'linked' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border border-admin-border bg-admin-surface rounded-sm">
            <h3 className="font-bold text-[16px] mb-2">Hero Image</h3>
            <p className="text-[13px] text-admin-text-secondary mb-4">The background image used in the main hero section is managed globally.</p>
            <Link href="/images" className="btn-secondary inline-flex w-auto"><ExternalLink className="w-4 h-4 mr-2"/> Manage in Site Images</Link>
          </div>
          <div className="p-6 border border-admin-border bg-admin-surface rounded-sm">
            <h3 className="font-bold text-[16px] mb-2">Major Clients</h3>
            <p className="text-[13px] text-admin-text-secondary mb-4">The verified client roster displayed on the homepage is dynamically pulled from the Clients module.</p>
            <Link href="/clients" className="btn-secondary inline-flex w-auto"><ExternalLink className="w-4 h-4 mr-2"/> Manage Clients</Link>
          </div>
          <div className="p-6 border border-admin-border bg-admin-surface rounded-sm">
            <h3 className="font-bold text-[16px] mb-2">Innovation Highlight</h3>
            <p className="text-[13px] text-admin-text-secondary mb-4">The technical case study section is managed centrally.</p>
            <Link href="/innovation" className="btn-secondary inline-flex w-auto"><ExternalLink className="w-4 h-4 mr-2"/> Manage Innovation</Link>
          </div>
          <div className="p-6 border border-admin-border bg-admin-surface rounded-sm">
            <h3 className="font-bold text-[16px] mb-2">International Projects</h3>
            <p className="text-[13px] text-admin-text-secondary mb-4">Global footprint metrics and projects come from the International portfolio.</p>
            <Link href="/projects/international" className="btn-secondary inline-flex w-auto"><ExternalLink className="w-4 h-4 mr-2"/> Manage International Projects</Link>
          </div>
        </div>
      )}
    </div>
  );
}
