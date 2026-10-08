"use client";
import React, { useState, useEffect } from "react";
import { fetchAdminData, updateAdminData } from "@/lib/adminApi";
import { uploadAdminImage } from "@/lib/adminApi";
import { Plus, Edit2, Trash2, Globe, ArrowUp, ArrowDown } from "lucide-react";

export default function EngineeringInActionAdminPage() {
  const [items, setItems] = useState<any[]>([]);
  const [settings, setSettings] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<any>(null);
  const [uploading, setUploading] = useState(false);

  const [formMsg, setFormMsg] = useState("");
  const [pageMsg, setPageMsg] = useState("");

  const getImageUrl = (url: string) => {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    if (url.startsWith('/uploads/')) {
      return `http://localhost:5000${url}`;
    }
    if (url.startsWith('/images/')) {
      return `http://localhost:3000${url}`;
    }
    return url;
  };

  const loadData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetchAdminData("/engineering-in-action");
      if (res && res.data) {
        setItems(res.data.items);
        setSettings(res.data.settings);
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

  const handleOpenModal = (item: any = null) => {
    setFormMsg("");
    setCurrentItem(
      item || {
        title: "New Image",
        caption: "",
        imageUrl: "",
        order: items.length,
        enabled: true
      }
    );
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentItem(null);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setUploading(true);
      const file = e.target.files[0];
      const tempSection = `eia-${Date.now()}`;
      const res = await uploadAdminImage(tempSection, file);
      if (res && res.success) {
        setCurrentItem({ ...currentItem, imageUrl: res.data.url });
      } else {
        setFormMsg(res?.message || "Upload failed");
      }
      setUploading(false);
    }
  };

  const handleSaveItem = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentItem.imageUrl) {
      setFormMsg("Image is required.");
      return;
    }
    setFormMsg("");
    let res;
    if (currentItem._id) {
      res = await updateAdminData(`/engineering-in-action/${currentItem._id}`, currentItem, "PUT");
    } else {
      res = await updateAdminData("/engineering-in-action", currentItem, "POST");
    }
    if (res.success) {
      setPageMsg(currentItem._id ? "Image updated!" : "Image added!");
      setTimeout(() => setPageMsg(""), 3000);
      handleCloseModal();
      loadData();
    } else {
      setFormMsg(res.message || "Failed to save item.");
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this image?")) {
      const res = await updateAdminData(`/engineering-in-action/${id}`, null, "DELETE");
      if (res.success) {
        setPageMsg("Image deleted.");
        setTimeout(() => setPageMsg(""), 3000);
        loadData();
      }
    }
  };

  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await updateAdminData("/engineering-in-action/settings", settings, "PUT");
    if (res.success) {
      setPageMsg("Settings updated successfully!");
      setTimeout(() => setPageMsg(""), 3000);
    }
  };

  if (isLoading) return <div className="p-8">Loading...</div>;

  return (
    <div className="space-y-6 pb-20">
      <div>
        <h1 className="text-[24px] font-bold text-admin-text-primary tracking-tight">Engineering in Action</h1>
        <p className="text-[13px] text-admin-text-secondary mt-1">Manage the dynamically scrolling image gallery.</p>
      </div>

      {error && <div className="p-4 bg-rose-500/10 text-rose-500 rounded-md">{error}</div>}
      {pageMsg && <div className="p-4 bg-emerald-500/10 text-emerald-600 rounded-md">{pageMsg}</div>}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <form onSubmit={handleSaveSettings} className="bg-admin-surface border border-admin-border p-6 rounded-md space-y-4">
            <h2 className="text-[14px] font-bold uppercase tracking-wider text-admin-text-secondary border-b border-admin-border pb-3">Section Settings</h2>
            <div>
              <label className="block text-[12px] font-bold uppercase tracking-wider text-admin-text-muted mb-1">Heading</label>
              <input type="text" value={settings.heading || ""} onChange={e => setSettings({...settings, heading: e.target.value})} className="w-full bg-admin-bg border border-admin-border rounded-sm px-3 py-2 text-admin-text-primary text-[14px]" />
            </div>
            <div>
              <label className="block text-[12px] font-bold uppercase tracking-wider text-admin-text-muted mb-1">Description</label>
              <textarea value={settings.description || ""} onChange={e => setSettings({...settings, description: e.target.value})} rows={3} className="w-full bg-admin-bg border border-admin-border rounded-sm px-3 py-2 text-admin-text-primary text-[14px]" />
            </div>
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={settings.enabled !== false} onChange={e => setSettings({...settings, enabled: e.target.checked})} className="rounded border-admin-border text-admin-brass focus:ring-admin-brass bg-admin-bg" />
              <span className="text-[13px] font-medium text-admin-text-secondary">Enable Section on Homepage</span>
            </label>
            <button type="submit" className="w-full bg-admin-brass hover:bg-admin-brass-hover text-white py-2 font-bold text-[13px] tracking-wider uppercase rounded-sm">Save Settings</button>
          </form>
        </div>

        <div className="lg:col-span-2 bg-admin-surface border border-admin-border rounded-md">
          <div className="p-4 border-b border-admin-border flex justify-between items-center bg-admin-bg">
            <h2 className="text-[14px] font-bold uppercase tracking-wider text-admin-text-secondary">Gallery Images</h2>
            <button onClick={() => handleOpenModal()} className="flex items-center gap-1.5 px-3 py-1.5 bg-admin-brass hover:bg-admin-brass-hover text-white text-[12px] font-bold uppercase tracking-wider rounded-sm">
              <Plus className="w-4 h-4" /> Add Image
            </button>
          </div>
          <div className="divide-y divide-admin-border">
            {items.map((item, i) => (
              <div key={item._id} className="p-4 flex gap-4 items-center group hover:bg-admin-bg transition-colors">
                <img src={getImageUrl(item.imageUrl)} alt={item.caption} className="w-24 h-16 object-cover rounded-sm border border-admin-border" />
                <div className="flex-1">
                  <h4 className="font-bold text-admin-text-primary text-[14px]">{item.title}</h4>
                  <p className="text-[12px] text-admin-text-muted font-mono bg-admin-bg px-2 py-0.5 rounded-sm inline-block mt-1">{item.caption}</p>
                  {!item.enabled && <span className="ml-2 text-[10px] text-rose-500 uppercase font-bold">Disabled</span>}
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => handleOpenModal(item)} className="p-2 text-admin-text-muted hover:text-admin-brass bg-admin-surface border border-admin-border rounded-sm hover:border-admin-brass transition-colors"><Edit2 className="w-4 h-4" /></button>
                  <button onClick={() => handleDelete(item._id)} className="p-2 text-admin-text-muted hover:text-rose-500 bg-admin-surface border border-admin-border rounded-sm hover:border-rose-500 transition-colors"><Trash2 className="w-4 h-4" /></button>
                </div>
              </div>
            ))}
            {items.length === 0 && <div className="p-8 text-center text-admin-text-muted">No images configured.</div>}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-admin-surface rounded-md shadow-xl w-full max-w-lg border border-admin-border flex flex-col max-h-[90vh]">
            <div className="p-5 border-b border-admin-border flex justify-between items-center bg-admin-bg">
              <h2 className="text-[16px] font-bold text-admin-text-primary uppercase tracking-wider">{currentItem._id ? "Edit Image" : "Add Image"}</h2>
              <button onClick={handleCloseModal} className="text-admin-text-muted hover:text-rose-500">&times;</button>
            </div>
            <div className="p-5 overflow-y-auto">
              {formMsg && <div className="mb-4 p-3 bg-rose-500/10 text-rose-500 rounded-sm text-sm">{formMsg}</div>}
              <form id="itemForm" onSubmit={handleSaveItem} className="space-y-4">
                <div>
                  <label className="block text-[12px] font-bold uppercase tracking-wider text-admin-text-muted mb-1">Internal Title</label>
                  <input required type="text" value={currentItem.title} onChange={e => setCurrentItem({...currentItem, title: e.target.value})} className="w-full bg-admin-bg border border-admin-border rounded-sm px-3 py-2 text-admin-text-primary text-[14px]" />
                </div>
                <div>
                  <label className="block text-[12px] font-bold uppercase tracking-wider text-admin-text-muted mb-1">Public Caption (Label)</label>
                  <input required type="text" value={currentItem.caption} onChange={e => setCurrentItem({...currentItem, caption: e.target.value})} className="w-full bg-admin-bg border border-admin-border rounded-sm px-3 py-2 text-admin-text-primary text-[14px]" />
                </div>
                <div>
                  <label className="block text-[12px] font-bold uppercase tracking-wider text-admin-text-muted mb-1">Image Upload</label>
                  <div className="flex gap-4 items-center">
                    {currentItem.imageUrl && <img src={getImageUrl(currentItem.imageUrl)} alt="preview" className="w-20 h-16 object-cover border border-admin-border rounded-sm" />}
                    <input type="file" accept="image/*" onChange={handleFileChange} className="text-sm" />
                    {uploading && <span className="text-xs text-admin-brass">Uploading...</span>}
                  </div>
                  {!currentItem.imageUrl && <p className="text-xs text-rose-500 mt-1">Image is required.</p>}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] font-bold uppercase tracking-wider text-admin-text-muted mb-1">Order</label>
                    <input type="number" value={currentItem.order} onChange={e => setCurrentItem({...currentItem, order: Number(e.target.value)})} className="w-full bg-admin-bg border border-admin-border rounded-sm px-3 py-2 text-admin-text-primary text-[14px]" />
                  </div>
                  <div className="flex items-center mt-6">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" checked={currentItem.enabled} onChange={e => setCurrentItem({...currentItem, enabled: e.target.checked})} className="rounded border-admin-border text-admin-brass focus:ring-admin-brass bg-admin-bg" />
                      <span className="text-[13px] font-medium text-admin-text-secondary">Enabled</span>
                    </label>
                  </div>
                </div>
              </form>
            </div>
            <div className="p-5 border-t border-admin-border flex justify-end gap-3 bg-admin-bg">
              <button onClick={handleCloseModal} className="px-4 py-2 border border-admin-border text-admin-text-primary hover:bg-admin-border rounded-sm font-bold text-[12px] uppercase tracking-wider transition-colors">Cancel</button>
              <button type="submit" form="itemForm" disabled={uploading} className="px-4 py-2 bg-admin-brass hover:bg-admin-brass-hover text-white rounded-sm font-bold text-[12px] uppercase tracking-wider transition-colors disabled:opacity-50">Save Image</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
