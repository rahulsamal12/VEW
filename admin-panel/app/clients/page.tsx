"use client";
import React, { useState, useEffect } from "react";
import { fetchAdminData, updateAdminData } from "@/lib/adminApi";
import { Plus, Edit2, Trash2, Search, AlertCircle, RefreshCw, Briefcase, X } from "lucide-react";

export default function ClientsAdminPage() {
  const [clients, setClients] = useState<any[]>([]);
  const [filteredClients, setFilteredClients] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentClient, setCurrentClient] = useState<any>(null);
  
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [clientToDelete, setClientToDelete] = useState<any>(null);

  const [formMsg, setFormMsg] = useState("");
  const [pageMsg, setPageMsg] = useState("");

  const loadData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetchAdminData("/clients");
      if (res && res.data) {
        setClients(res.data);
        setFilteredClients(res.data);
      } else {
        setError(res?.error || res?.message || "Failed to load clients. Database service may be unavailable.");
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

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredClients(clients);
    } else {
      const lowerQ = searchQuery.toLowerCase();
      setFilteredClients(
        clients.filter(
          (c) =>
            (c.name && c.name.toLowerCase().includes(lowerQ)) ||
            (c.fullName && c.fullName.toLowerCase().includes(lowerQ)) ||
            (c.category && c.category.toLowerCase().includes(lowerQ))
        )
      );
    }
  }, [searchQuery, clients]);

  const handleOpenModal = (client: any = null) => {
    setFormMsg("");
    setCurrentClient(
      client || {
        name: "",
        fullName: "",
        category: "Major Client",
        sourceRef: "Source: Company Credentials — Page 4",
        order: 0,
      }
    );
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentClient(null);
  };

  const handleSaveClient = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentClient.name) {
      setFormMsg("Client Name is required.");
      return;
    }
    
    setFormMsg("");
    
    let res;
    if (currentClient._id) {
      // Update
      res = await updateAdminData(`/admin/clients/${currentClient._id}`, currentClient, "PUT");
    } else {
      // Create
      res = await updateAdminData("/admin/clients", currentClient, "POST");
    }

    if (res.success) {
      setPageMsg(currentClient._id ? "Client updated successfully!" : "Client created successfully!");
      setTimeout(() => setPageMsg(""), 3000);
      handleCloseModal();
      loadData();
    } else {
      setFormMsg(res.message || "Failed to save client.");
    }
  };

  const confirmDelete = (client: any) => {
    setClientToDelete(client);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteClient = async () => {
    if (!clientToDelete) return;
    const res = await updateAdminData(`/admin/clients/${clientToDelete._id}`, null, "DELETE");
    if (res.success) {
      setPageMsg("Client deleted successfully!");
      setTimeout(() => setPageMsg(""), 3000);
      setIsDeleteModalOpen(false);
      setClientToDelete(null);
      loadData();
    } else {
      setPageMsg(res.message || "Failed to delete client.");
      setTimeout(() => setPageMsg(""), 3000);
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-admin-text-muted space-y-4">
        <RefreshCw className="w-8 h-8 animate-spin text-admin-steel" />
        <p className="font-medium">Loading clients...</p>
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

  if (!clients) return null;

  return (
    <div className="space-y-6 max-w-6xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-admin-border pb-4">
        <div>
          <h1 className="text-[24px] font-bold text-admin-text-primary tracking-tight flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-admin-steel" /> Client Roster Management
          </h1>
          <p className="text-[13px] text-admin-text-secondary mt-1">
            Manage the verified client roster shown across the VEW platform.
          </p>
        </div>
        <div className="flex items-center gap-3">
          {pageMsg && (
            <div className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 text-[12px] font-bold uppercase tracking-wider rounded-sm shadow-sm hidden md:block">
              {pageMsg}
            </div>
          )}
          <button onClick={() => handleOpenModal()} className="btn-primary gap-2 shrink-0">
            <Plus className="w-4 h-4" /> Add Client
          </button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-admin-text-muted" />
          <input
            type="text"
            placeholder="Search clients..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-input pl-9 w-full"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-admin-surface border border-admin-border rounded-sm shadow-sm overflow-hidden">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left text-[13px]">
            <thead className="bg-admin-bg border-b border-admin-border text-admin-text-muted font-bold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="px-6 py-4">Client Name</th>
                <th className="px-6 py-4">Full Legal Name</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Source Reference</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-admin-border">
              {filteredClients.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-admin-text-muted font-medium">
                    No clients found matching your search.
                  </td>
                </tr>
              ) : (
                filteredClients.map((client) => (
                  <tr key={client._id} className="hover:bg-admin-bg/50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-admin-text-primary whitespace-nowrap">
                      {client.name}
                    </td>
                    <td className="px-6 py-4 text-admin-text-secondary truncate max-w-[200px]">
                      {client.fullName || "—"}
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2 py-1 bg-admin-steel/10 text-admin-steel border border-admin-steel/20 rounded-sm text-[11px] font-bold tracking-wide">
                        {client.category || "—"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-admin-text-secondary truncate max-w-[200px]">
                      {client.sourceRef || "—"}
                    </td>
                    <td className="px-6 py-4 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleOpenModal(client)}
                          className="p-1.5 text-admin-text-secondary hover:text-admin-steel transition-colors rounded-sm hover:bg-admin-steel/10"
                          title="Edit"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => confirmDelete(client)}
                          className="p-1.5 text-admin-text-secondary hover:text-rose-500 transition-colors rounded-sm hover:bg-rose-500/10"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Modal */}
      {isModalOpen && currentClient && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-admin-surface border border-admin-border rounded-sm shadow-xl w-full max-w-lg flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between p-5 border-b border-admin-border shrink-0">
              <h2 className="text-[18px] font-bold text-admin-text-primary">
                {currentClient._id ? "Edit Client" : "Add New Client"}
              </h2>
              <button onClick={handleCloseModal} className="text-admin-text-muted hover:text-admin-text-primary transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-5 overflow-y-auto custom-scrollbar flex-1 space-y-4">
              {formMsg && (
                <div className="p-3 bg-rose-500/10 border border-rose-500/30 text-rose-500 text-[13px] font-medium rounded-sm">
                  {formMsg}
                </div>
              )}
              
              <div>
                <label className="form-label">Client Name (Display Name) *</label>
                <input
                  type="text"
                  required
                  value={currentClient.name}
                  onChange={(e) => setCurrentClient({ ...currentClient, name: e.target.value })}
                  className="form-input"
                  placeholder="e.g., Tata Steel"
                />
              </div>

              <div>
                <label className="form-label">Full Legal Name</label>
                <input
                  type="text"
                  value={currentClient.fullName || ""}
                  onChange={(e) => setCurrentClient({ ...currentClient, fullName: e.target.value })}
                  className="form-input"
                  placeholder="e.g., Tata Steel Ltd"
                />
              </div>

              <div>
                <label className="form-label">Category</label>
                <input
                  type="text"
                  value={currentClient.category || ""}
                  onChange={(e) => setCurrentClient({ ...currentClient, category: e.target.value })}
                  className="form-input"
                  placeholder="e.g., Major Client"
                />
              </div>

              <div>
                <label className="form-label">Source Reference</label>
                <input
                  type="text"
                  value={currentClient.sourceRef || ""}
                  onChange={(e) => setCurrentClient({ ...currentClient, sourceRef: e.target.value })}
                  className="form-input"
                  placeholder="e.g., Source: Company Credentials — Page 4"
                />
              </div>

              <div>
                <label className="form-label">Sort Order</label>
                <input
                  type="number"
                  value={currentClient.order}
                  onChange={(e) => setCurrentClient({ ...currentClient, order: parseInt(e.target.value) || 0 })}
                  className="form-input w-32"
                />
              </div>
            </div>

            <div className="p-5 border-t border-admin-border shrink-0 flex items-center justify-end gap-3 bg-admin-bg/50">
              <button onClick={handleCloseModal} className="btn-secondary">
                Cancel
              </button>
              <button onClick={handleSaveClient} className="btn-primary">
                {currentClient._id ? "Save Changes" : "Create Client"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && clientToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-admin-surface border border-admin-border rounded-sm shadow-xl w-full max-w-sm p-6 text-center space-y-4">
            <div className="w-12 h-12 bg-rose-500/10 rounded-full flex items-center justify-center mx-auto text-rose-500">
              <Trash2 className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-[18px] font-bold text-admin-text-primary">Delete Client?</h2>
              <p className="text-[13px] text-admin-text-secondary mt-2">
                Are you sure you want to delete <strong className="text-admin-text-primary">{clientToDelete.name}</strong>? This action cannot be undone.
              </p>
            </div>
            <div className="flex gap-3 justify-center pt-2">
              <button onClick={() => setIsDeleteModalOpen(false)} className="btn-secondary flex-1">
                Cancel
              </button>
              <button onClick={handleDeleteClient} className="btn-primary bg-rose-600 hover:bg-rose-700 border-rose-600 text-white flex-1">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
