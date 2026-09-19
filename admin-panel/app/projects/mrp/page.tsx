"use client";
import React, { useState, useEffect } from "react";
import { fetchAdminData, updateAdminData } from "@/lib/adminApi";
import { Layers, Plus, Trash2, Edit2 , AlertCircle, RefreshCw} from "lucide-react";
interface MRPItem {
  _id?: string;
  client: string;
  scope: string;
  type: string;
  period: string;
  process: string;
  remarks: string;
}
export default function MRPProjectsAdminPage() {
  const [items, setItems] = useState<MRPItem[]>([]);
  const [editingItem, setEditingItem] = useState<MRPItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<MRPItem>({
    client: "",
    scope: "",
    type: "BOOT",
    period: "",
    process: "",
    remarks: "—",
  });
  const loadData = async () => {
    const res = await fetchAdminData("/projects/mrp");
    if (res && res.data) setItems(res.data);
  };
  useEffect(() => {
    loadData();
  }, []);
  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingItem && editingItem._id) {
      await updateAdminData(
        `/admin/projects/mrp/${editingItem._id}`,
        formData,
        "PUT",
      );
    } else {
      await updateAdminData("/admin/projects/mrp", formData, "POST");
    }
    setIsModalOpen(false);
    setEditingItem(null);
    loadData();
  };
  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this MRP Project?")) {
      const res = await updateAdminData(`/admin/projects/mrp/${id}`, {}, "DELETE");
      if (res && res.success) {
        loadData();
      } else {
        alert(res?.message || "Failed to delete");
      }
    }
  };
  const openNew = () => {
    setFormData({
      client: "",
      scope: "",
      type: "BOOT",
      period: "",
      process: "",
      remarks: "—",
    });
    setEditingItem(null);
    setIsModalOpen(true);
  };
  const openEdit = (item: MRPItem) => {
    setFormData(item);
    setEditingItem(item);
    setIsModalOpen(true);
  };
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-admin-border pb-4">
        <div>
          <h1 className="text-[24px] font-bold text-admin-text-primary tracking-tight">
            MRP Projects Manager
          </h1>
          <p className="text-[13px] text-admin-text-secondary mt-1">
            Manage Metal Recovery Plant projects list.
          </p>
        </div>
        <button
          onClick={openNew}
          className="btn-primary gap-1.5"
        >
          <Plus className="w-4 h-4" /> Add New MRP Project
        </button>
      </div>
      
      <div className="admin-table-container rounded-sm">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Client</th>
              <th>Scope</th>
              <th>Type</th>
              <th>Period</th>
              <th>Process</th>
              <th>Remarks</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((row, idx) => (
              <tr key={idx}>
                <td className="font-bold">{row.client}</td>
                <td className="text-admin-steel dark:text-admin-brass font-semibold">{row.scope}</td>
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
                      onClick={() => handleDelete(row._id!)}
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
              {editingItem ? "Edit MRP Project" : "Add New MRP Project"}
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
                  <label className="form-label">Scope *</label>
                  <input
                    type="text"
                    required
                    value={formData.scope}
                    onChange={(e) =>
                      setFormData({ ...formData, scope: e.target.value })
                    }
                    placeholder="e.g. 3 x 200 TPD"
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
                    placeholder="e.g. 2012 – Till date"
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
                    placeholder="e.g. Fe Cr"
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
    </div>
  );
}


