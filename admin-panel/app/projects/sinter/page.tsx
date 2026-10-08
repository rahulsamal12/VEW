"use client";
import React, { useState, useEffect } from "react";
import { fetchAdminData, updateAdminData } from "@/lib/adminApi";
import { Factory, Plus, Trash2, Edit2 , AlertCircle, RefreshCw} from "lucide-react";
interface SinterItem {
  _id?: string;
  client: string;
  capacity: string;
  type: string;
  period: string;
  process: string;
  remarks: string;
}
export default function SinterProjectsAdminPage() {
  const [items, setItems] = useState<SinterItem[]>([]);
  const [editingItem, setEditingItem] = useState<SinterItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<SinterItem | null>(null);
  const [pageMsg, setPageMsg] = useState("");

  const [formData, setFormData] = useState<SinterItem>({
    client: "",
    capacity: "",
    type: "Turnkey",
    period: "",
    process: "",
    remarks: "—",
  });
  const loadData = async () => {
    const res = await fetchAdminData("/projects/sinter");
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
        `/admin/projects/sinter/${editingItem._id}`,
        formData,
        "PUT"
      );
    } else {
      res = await updateAdminData("/admin/projects/sinter", formData, "POST");
    }

    if (res && res.success) {
      setIsModalOpen(false);
      setEditingItem(null);
      // Optimistic update
      if (editingItem && editingItem._id) {
         setItems(prev => prev.map(item => item._id === editingItem._id ? res.data : item));
      } else {
         setItems(prev => [res.data, ...prev]);
      }
      await loadData();
    } else {
      alert(res?.message || "Failed to save project");
    }
  };
  const confirmDelete = (item: SinterItem) => {
    setItemToDelete(item);
    setIsDeleteModalOpen(true);
  };

  const handleDelete = async () => {
    if (!itemToDelete || !itemToDelete._id) return;
    const res = await updateAdminData(`/admin/projects/sinter/${itemToDelete._id}`, null, "DELETE");
    if (res && res.success) {
      setPageMsg("Project deleted successfully!");
      setTimeout(() => setPageMsg(""), 3000);
      setIsDeleteModalOpen(false);
      setItems(prev => prev.filter(item => item._id !== itemToDelete._id));
      setItemToDelete(null);
      await loadData();
    } else {
      setPageMsg(res?.message || "Failed to delete project.");
      setTimeout(() => setPageMsg(""), 3000);
    }
  };
  const openNew = () => {
    setFormData({
      client: "",
      capacity: "",
      type: "Turnkey",
      period: "",
      process: "",
      remarks: "—",
    });
    setEditingItem(null);
    setIsModalOpen(true);
  };
  const openEdit = (item: SinterItem) => {
    setFormData(item);
    setEditingItem(item);
    setIsModalOpen(true);
  };
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-admin-border pb-4">
        <div>
          <h1 className="text-[24px] font-bold text-admin-text-primary tracking-tight">
            Sinter Projects Manager
          </h1>
          <p className="text-[13px] text-admin-text-secondary mt-1">
            Manage Sinter Plant projects list.
          </p>
        </div>
        <div className="flex items-center gap-3">
          {pageMsg && (
            <div className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 text-[12px] font-bold uppercase tracking-wider rounded-sm shadow-sm hidden md:block">
              {pageMsg}
            </div>
          )}
          <button
            onClick={openNew}
            className="btn-primary gap-1.5 shrink-0"
          >
            <Plus className="w-4 h-4" /> Add New Sinter Project
          </button>
        </div>
      </div>
      
      <div className="admin-table-container rounded-sm">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Client</th>
              <th>Capacity</th>
              <th>Type</th>
              <th>Period</th>
              <th>Process</th>
              <th>Remarks</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((row, idx) => (
              <tr key={row._id || idx}>
                <td className="font-bold">{row.client}</td>
                <td className="text-admin-steel dark:text-admin-brass font-semibold">{row.capacity}</td>
                <td>{row.type}</td>
                <td>{row.period}</td>
                <td>{row.process}</td>
                <td className="text-admin-text-muted">{row.remarks}</td>
                <td className="text-right space-x-2">
                  <button
                    onClick={() => openEdit(row)}
                    className="p-1.5 text-admin-text-muted hover:text-admin-steel dark:hover:text-admin-brass transition-colors"
                    title="Edit Project"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  {row._id && (
                    <button
                      onClick={() => confirmDelete(row)}
                      className="p-1.5 text-admin-text-muted hover:text-rose-600 transition-colors"
                      title="Delete Project"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </td>
              </tr>
            ))}
            {items.length === 0 && (
              <tr>
                <td colSpan={7} className="text-center py-8 text-admin-text-muted">
                  No projects found. Add a new project to get started.
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
              {editingItem ? "Edit Sinter Project" : "Add New Sinter Project"}
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="form-label">Client Name *</label>
                <input
                  type="text"
                  required
                  value={formData.client}
                  onChange={(e) =>
                    setFormData({ ...formData, client: e.target.value })
                  }
                  className="form-input"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">Capacity *</label>
                  <input
                    type="text"
                    required
                    value={formData.capacity}
                    onChange={(e) =>
                      setFormData({ ...formData, capacity: e.target.value })
                    }
                    placeholder="e.g. 100 TPD"
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="form-label">Type *</label>
                  <input
                    type="text"
                    required
                    value={formData.type}
                    onChange={(e) =>
                      setFormData({ ...formData, type: e.target.value })
                    }
                    className="form-input"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">Period *</label>
                  <input
                    type="text"
                    required
                    value={formData.period}
                    onChange={(e) =>
                      setFormData({ ...formData, period: e.target.value })
                    }
                    placeholder="e.g. 2015 – Till date"
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="form-label">Process *</label>
                  <input
                    type="text"
                    required
                    value={formData.process}
                    onChange={(e) =>
                      setFormData({ ...formData, process: e.target.value })
                    }
                    placeholder="e.g. Pig Iron"
                    className="form-input"
                  />
                </div>
              </div>
              
              <div>
                <label className="form-label">Remarks</label>
                <input
                  type="text"
                  value={formData.remarks}
                  onChange={(e) =>
                    setFormData({ ...formData, remarks: e.target.value })
                  }
                  className="form-input"
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
                Save Project
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && itemToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-admin-surface border border-admin-border rounded-sm shadow-xl w-full max-w-sm p-6 text-center space-y-4">
            <div className="w-12 h-12 bg-rose-500/10 rounded-full flex items-center justify-center mx-auto text-rose-500">
              <Trash2 className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-[18px] font-bold text-admin-text-primary">Delete Project?</h2>
              <p className="text-[13px] text-admin-text-secondary mt-2">
                Are you sure you want to delete <strong className="text-admin-text-primary">{itemToDelete.client}</strong>? This action cannot be undone.
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


