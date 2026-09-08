"use client";
import React, { useState, useEffect } from "react";
import { fetchAdminData, updateAdminData } from "@/lib/adminApi";
import { Globe, Plus, Trash2, Edit2 } from "lucide-react";
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
      await updateAdminData(
        `/admin/projects/international/${id}`,
        {},
        "DELETE",
      );
      loadData();
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
    <div className="space-y-6 text-xs">
      {" "}
      <div className="flex justify-between items-center border-b border-gray-800 pb-4">
        {" "}
        <div>
          {" "}
          <h1 className="text-2xl font-bold text-[var(--text-primary)]">
            International Projects Manager
          </h1>{" "}
          <p className="text-[var(--text-muted)]">
            Manage global projects portfolio (Oman, Zambia, etc.).
          </p>{" "}
        </div>{" "}
        <button
          onClick={openNew}
          className="px-4 py-2 rounded-sm bg-cyan-500 text-[var(--text-primary)] font-bold flex items-center gap-1.5"
        >
          {" "}
          <Plus className="w-4 h-4" /> Add International Project{" "}
        </button>{" "}
      </div>{" "}
      <div className="bg-[#111827] rounded-sm border border-gray-800 overflow-hidden">
        {" "}
        <table className="w-full text-left text-[var(--text-secondary)]">
          {" "}
          <thead className="bg-[var(--bg-surface)] text-[var(--text-muted)] uppercase font-semibold border-b border-gray-800">
            {" "}
            <tr>
              {" "}
              <th className="p-3">Client</th> <th className="p-3">Location</th>{" "}
              <th className="p-3">Scope</th> <th className="p-3">Year</th>{" "}
              <th className="p-3 text-right">Actions</th>{" "}
            </tr>{" "}
          </thead>{" "}
          <tbody className="divide-y divide-[var(--border-color)]">
            {" "}
            {items.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-800/40">
                {" "}
                <td className="p-3 font-bold text-[var(--text-primary)]">
                  {row.client}
                </td>{" "}
                <td className="p-3 text-[var(--accent-brass)]">
                  {row.location}
                </td>{" "}
                <td className="p-3 font-medium text-gray-200">{row.scope}</td>{" "}
                <td className="p-3 font-bold">{row.year}</td>{" "}
                <td className="p-3 text-right space-x-2">
                  {" "}
                  <button
                    onClick={() => openEdit(row)}
                    className="p-1 text-[var(--text-muted)] hover:text-[var(--accent-brass)]"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>{" "}
                  {row._id && (
                    <button
                      onClick={() => handleDelete(row._id!)}
                      className="p-1 text-[var(--text-muted)] hover:text-rose-500"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}{" "}
                </td>{" "}
              </tr>
            ))}{" "}
          </tbody>{" "}
        </table>{" "}
      </div>{" "}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          {" "}
          <form
            onSubmit={handleSave}
            className="bg-[#111827] border border-gray-800 p-6 rounded-md max-w-md w-full space-y-4"
          >
            {" "}
            <h2 className="text-lg font-bold text-[var(--text-primary)]">
              {editingItem
                ? "Edit International Project"
                : "Add International Project"}
            </h2>{" "}
            <div className="space-y-3">
              {" "}
              <div>
                {" "}
                <label className="block text-[var(--text-muted)] mb-1">
                  Client Name *
                </label>{" "}
                <input
                  type="text"
                  required
                  value={formData.client}
                  onChange={(e) =>
                    setFormData({ ...formData, client: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-primary)]"
                />{" "}
              </div>{" "}
              <div>
                {" "}
                <label className="block text-[var(--text-muted)] mb-1">
                  Location *
                </label>{" "}
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  placeholder="e.g. Sohar, Oman or Zambia"
                  className="w-full px-3 py-2 rounded bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-primary)]"
                />{" "}
              </div>{" "}
              <div>
                {" "}
                <label className="block text-[var(--text-muted)] mb-1">
                  Scope *
                </label>{" "}
                <input
                  type="text"
                  required
                  value={formData.scope}
                  onChange={(e) =>
                    setFormData({ ...formData, scope: e.target.value })
                  }
                  placeholder="e.g. 150 TPD MRP"
                  className="w-full px-3 py-2 rounded bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-primary)]"
                />{" "}
              </div>{" "}
              <div>
                {" "}
                <label className="block text-[var(--text-muted)] mb-1">
                  Year *
                </label>{" "}
                <input
                  type="text"
                  required
                  value={formData.year}
                  onChange={(e) =>
                    setFormData({ ...formData, year: e.target.value })
                  }
                  placeholder="e.g. 2023"
                  className="w-full px-3 py-2 rounded bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-primary)]"
                />{" "}
              </div>{" "}
            </div>{" "}
            <div className="flex gap-3 pt-2">
              {" "}
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="flex-1 py-2 rounded bg-gray-800 text-[var(--text-secondary)]"
              >
                Cancel
              </button>{" "}
              <button
                type="submit"
                className="flex-1 py-2 rounded bg-cyan-500 text-[var(--text-primary)] font-bold"
              >
                Save Project
              </button>{" "}
            </div>{" "}
          </form>{" "}
        </div>
      )}{" "}
    </div>
  );
}
