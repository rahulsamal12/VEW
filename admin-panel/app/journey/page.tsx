"use client";
import React, { useState, useEffect } from "react";
import { fetchAdminData, updateAdminData } from "@/lib/adminApi";
import { Plus, Trash2, Edit2, AlertCircle, RefreshCw } from "lucide-react";

interface JourneyItem {
  _id?: string;
  year: string;
  title: string;
  description: string;
  order: number;
}

export default function JourneyAdminPage() {
  const [items, setItems] = useState<JourneyItem[]>([]);
  const [editingItem, setEditingItem] = useState<JourneyItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<JourneyItem | null>(null);
  const [pageMsg, setPageMsg] = useState("");

  const [formData, setFormData] = useState<JourneyItem>({
    year: "",
    title: "",
    description: "",
    order: 0,
  });

  const loadData = async () => {
    const res = await fetchAdminData("/journey");
    if (res && res.data) setItems(res.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    let res;
    if (editingItem && editingItem._id) {
      res = await updateAdminData(
        `/admin/journey/${editingItem._id}`,
        formData,
        "PUT"
      );
    } else {
      res = await updateAdminData("/admin/journey", formData, "POST");
    }

    if (res && res.success) {
      setIsModalOpen(false);
      setEditingItem(null);
      await loadData();
    } else {
      alert(res?.message || "Failed to save milestone");
    }
  };

  const confirmDelete = (item: JourneyItem) => {
    setItemToDelete(item);
    setIsDeleteModalOpen(true);
  };

  const handleDelete = async () => {
    if (!itemToDelete || !itemToDelete._id) return;
    const res = await updateAdminData(`/admin/journey/${itemToDelete._id}`, null, "DELETE");
    if (res && res.success) {
      setPageMsg("Milestone deleted successfully!");
      setTimeout(() => setPageMsg(""), 3000);
      setIsDeleteModalOpen(false);
      setItemToDelete(null);
      await loadData();
    } else {
      setPageMsg(res?.message || "Failed to delete milestone.");
      setTimeout(() => setPageMsg(""), 3000);
    }
  };

  const openNew = () => {
    setFormData({
      year: "",
      title: "",
      description: "",
      order: items.length > 0 ? Math.max(...items.map(i => i.order || 0)) + 1 : 0,
    });
    setEditingItem(null);
    setIsModalOpen(true);
  };

  const openEdit = (item: JourneyItem) => {
    setFormData(item);
    setEditingItem(item);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6 max-w-6xl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-admin-border pb-4">
        <div>
          <h1 className="text-[24px] font-bold text-admin-text-primary tracking-tight">
            Company Journey
          </h1>
          <p className="text-[13px] text-admin-text-secondary mt-1">
            Manage the milestones on the Company Journey timeline.
          </p>
        </div>
        <div className="flex items-center gap-3">
          {pageMsg && (
            <div className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 text-[12px] font-bold uppercase tracking-wider rounded-sm shadow-sm hidden md:block">
              {pageMsg}
            </div>
          )}
          <button onClick={openNew} className="btn-primary gap-1.5 shrink-0">
            <Plus className="w-4 h-4" /> Add New Milestone
          </button>
        </div>
      </div>
      
      <div className="admin-table-container rounded-sm">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Title</th>
              <th>Description</th>
              <th>Order</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((row, idx) => (
              <tr key={row._id || idx}>
                <td className="font-bold text-admin-steel dark:text-admin-brass">{row.year}</td>
                <td className="font-semibold">{row.title}</td>
                <td className="text-admin-text-muted truncate max-w-xs">{row.description}</td>
                <td>{row.order}</td>
                <td className="text-right space-x-2">
                  <button
                    onClick={() => openEdit(row)}
                    className="p-1.5 text-admin-text-muted hover:text-admin-steel dark:hover:text-admin-brass transition-colors"
                    title="Edit Milestone"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  {row._id && (
                    <button
                      onClick={() => confirmDelete(row)}
                      className="p-1.5 text-admin-text-muted hover:text-rose-600 transition-colors"
                      title="Delete Milestone"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </td>
              </tr>
            ))}
            {items.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center py-8 text-admin-text-muted">
                  No milestones found. Add a new milestone to get started.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <form
            onSubmit={handleSave}
            className="bg-admin-surface border border-admin-border p-6 sm:p-8 rounded-sm max-w-lg w-full space-y-6 shadow-xl"
          >
            <h2 className="text-[18px] font-bold text-admin-text-primary border-b border-admin-border pb-3">
              {editingItem ? "Edit Milestone" : "Add New Milestone"}
            </h2>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">Year/Date *</label>
                  <input
                    type="text"
                    required
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    className="form-input"
                    placeholder="e.g. 2003"
                  />
                </div>
                <div>
                  <label className="form-label">Order</label>
                  <input
                    type="number"
                    value={formData.order}
                    onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 0 })}
                    className="form-input"
                  />
                </div>
              </div>
              
              <div>
                <label className="form-label">Title *</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="form-input"
                  placeholder="Milestone title"
                />
              </div>
              
              <div>
                <label className="form-label">Description *</label>
                <textarea
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="form-input min-h-[100px] whitespace-pre-wrap"
                  placeholder="Detailed description..."
                />
              </div>
            </div>
            
            <div className="flex gap-3 pt-4 border-t border-admin-border">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="btn-secondary flex-1"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn-primary flex-1"
              >
                Save Milestone
              </button>
            </div>
          </form>
        </div>
      )}

      {isDeleteModalOpen && itemToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-admin-surface border border-admin-border rounded-sm shadow-xl w-full max-w-sm p-6 text-center space-y-4">
            <div className="w-12 h-12 bg-rose-500/10 rounded-full flex items-center justify-center mx-auto text-rose-500">
              <Trash2 className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-[18px] font-bold text-admin-text-primary">Delete Milestone?</h2>
              <p className="text-[13px] text-admin-text-secondary mt-2">
                Are you sure you want to delete <strong className="text-admin-text-primary">{itemToDelete.year} - {itemToDelete.title}</strong>? This action cannot be undone.
              </p>
            </div>
            <div className="flex gap-3 justify-center pt-2">
              <button onClick={() => setIsDeleteModalOpen(false)} className="btn-secondary flex-1">
                Cancel
              </button>
              <button onClick={handleDelete} className="btn-primary bg-rose-600 hover:bg-rose-700 border-rose-600 text-white flex-1">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
