"use client";
import React, { useState, useEffect } from "react";
import { fetchAdminData, updateAdminData } from "@/lib/adminApi";
import { Globe, Plus, Trash2, Edit2 , AlertCircle, RefreshCw} from "lucide-react";
interface InternationalItem {
  _id?: string;
  client: string;
  location: string;
  scope: string;
  year: string;
}
export default function InternationalProjectsAdminPage() {
  const [items, setItems] = useState<InternationalItem[]>([]);
  const [editingItem, setEditingItem] = useState<InternationalItem | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<InternationalItem>({
    client: "",
    location: "",
    scope: "",
    year: "",
  });
  const loadData = async () => {
    const res = await fetchAdminData("/projects/international");
    if (res && res.data) setItems(res.data);
  };
  useEffect(() => {
    loadData();
  }, []);
  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingItem && editingItem._id) {
      await updateAdminData(
        `/admin/projects/international/${editingItem._id}`,
        formData,
        "PUT",
      );
    } else {
      await updateAdminData("/admin/projects/international", formData, "POST");
    }
    setIsModalOpen(false);
    setEditingItem(null);
    loadData();
  };
  const handleDelete = async (id: string) => {
    if (
      confirm("Are you sure you want to delete this International Project?")
    ) {
      const res = await updateAdminData(
        `/admin/projects/international/${id}`,
        {},
        "DELETE",
      );
      if (res && res.success) {
        loadData();
      } else {
        alert(res?.message || "Failed to delete");
      }
    }
  };
  const openNew = () => {
    setFormData({ client: "", location: "", scope: "", year: "" });
    setEditingItem(null);
    setIsModalOpen(true);
  };
  const openEdit = (item: InternationalItem) => {
    setFormData(item);
    setEditingItem(item);
    setIsModalOpen(true);
  };
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-admin-border pb-4">
        <div>
          <h1 className="text-[24px] font-bold text-admin-text-primary tracking-tight">
            International Projects Manager
          </h1>
          <p className="text-[13px] text-admin-text-secondary mt-1">
            Manage global projects portfolio (Oman, Zambia, etc.).
          </p>
        </div>
        <button
          onClick={openNew}
          className="btn-primary gap-1.5"
        >
          <Plus className="w-4 h-4" /> Add International Project
        </button>
      </div>
      
      <div className="admin-table-container rounded-sm">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Client</th>
              <th>Location</th>
              <th>Scope</th>
              <th>Year</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((row, idx) => (
              <tr key={idx}>
                <td className="font-bold">{row.client}</td>
                <td className="text-admin-steel dark:text-admin-brass font-semibold">{row.location}</td>
                <td className="font-medium">{row.scope}</td>
                <td className="font-bold text-admin-text-muted">{row.year}</td>
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
                <td colSpan={5} className="text-center py-8 text-admin-text-muted">
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
              {editingItem
                ? "Edit International Project"
                : "Add International Project"}
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
              
              <div>
                <label className="form-label">Location *</label>
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  placeholder="e.g. Sohar, Oman or Zambia"
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
                    placeholder="e.g. 150 TPD MRP"
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="form-label">Year *</label>
                  <input
                    type="text"
                    required
                    value={formData.year}
                    onChange={(e) =>
                      setFormData({ ...formData, year: e.target.value })
                    }
                    placeholder="e.g. 2023"
                    className="form-input"
                  />
                </div>
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


