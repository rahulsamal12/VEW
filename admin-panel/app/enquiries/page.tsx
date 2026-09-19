"use client";
import React, { useState, useEffect } from "react";
import { fetchAdminData, updateAdminData } from "@/lib/adminApi";
import {
  Mail,
  CheckCircle2,
  Trash2,
  Clock,
  Filter,
  AlertTriangle,
  AlertCircle,
  RefreshCw
} from "lucide-react";
interface EnquiryItem {
  _id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: "new" | "reviewed" | "contacted" | "archived";
  submittedAt: string;
}
export default function EnquiriesAdminPage() {
  const [enquiries, setEnquiries] = useState<EnquiryItem[]>([]);
  const [filter, setFilter] = useState("all");
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const loadEnquiries = async () => {
    const res = await fetchAdminData("/admin/enquiries");
    if (res && res.data) {
      setEnquiries(res.data);
    }
  };
  useEffect(() => {
    loadEnquiries();
  }, []);
  const handleStatusChange = async (id: string, newStatus: string) => {
    await updateAdminData(
      `/admin/enquiries/${id}/status`,
      { status: newStatus },
      "PUT",
    );
    loadEnquiries();
  };
  const handleDelete = async (id: string) => {
    const res = await updateAdminData(`/admin/enquiries/${id}`, {}, "DELETE");
    setDeleteConfirmId(null);
    if (res && res.success) {
      loadEnquiries();
    } else {
      alert(res?.message || "Failed to delete enquiry.");
    }
  };
  const filtered = enquiries.filter(
    (e) => filter === "all" || e.status === filter,
  );
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-admin-border pb-4">
        <div>
          <h1 className="text-[24px] font-bold text-admin-text-primary tracking-tight">
            Enquiry Submissions Manager
          </h1>
          <p className="text-[13px] text-admin-text-secondary mt-1">
            View and manage contact inquiries submitted from the public website.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-admin-text-muted" />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-3 py-1.5 rounded-sm bg-admin-surface border border-admin-border text-admin-text-primary text-[13px] font-medium focus:outline-none focus:border-admin-steel transition-colors"
          >
            <option value="all">All Enquiries ({enquiries.length})</option>
            <option value="new">
              New ({enquiries.filter((e) => e.status === "new").length})
            </option>
            <option value="reviewed">Reviewed</option>
            <option value="contacted">Contacted</option>
            <option value="archived">Archived</option>
          </select>
        </div>
      </div>
      
      <div className="space-y-4">
        {filtered.map((item) => (
          <div
            key={item._id}
            className="bg-admin-surface p-6 rounded-sm border border-admin-border shadow-sm space-y-4"
          >
            <div className="flex flex-wrap justify-between items-start gap-4 border-b border-admin-border pb-4">
              <div>
                <span className="text-[15px] font-bold text-admin-text-primary">
                  {item.name}
                </span>
                <span className="text-admin-text-muted text-[13px] font-medium ml-2">
                  ({item.company})
                </span>
                <div className="flex items-center gap-3 mt-1 text-[13px] text-admin-text-secondary">
                  <span className="flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5" />
                    <a href={`mailto:${item.email}`} className="text-admin-steel dark:text-admin-brass hover:underline font-medium">
                      {item.email}
                    </a>
                  </span>
                  <span>•</span>
                  <span>
                    Phone: <a href={`tel:${item.phone}`} className="text-admin-steel dark:text-admin-brass hover:underline font-medium">{item.phone}</a>
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-admin-text-muted text-[12px] font-medium flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {new Date(item.submittedAt).toLocaleDateString()}
                </span>
                <select
                  value={item.status}
                  onChange={(e) => handleStatusChange(item._id, e.target.value)}
                  className="px-3 py-1.5 rounded-sm bg-admin-bg border border-admin-border text-admin-text-primary text-[12px] font-semibold focus:outline-none"
                >
                  <option value="new">Status: New</option>
                  <option value="reviewed">Status: Reviewed</option>
                  <option value="contacted">Status: Contacted</option>
                  <option value="archived">Status: Archived</option>
                </select>
                <button
                  onClick={() => setDeleteConfirmId(item._id)}
                  className="p-1.5 text-admin-text-muted hover:text-rose-600 rounded-sm hover:bg-rose-600/10 transition-colors"
                  title="Delete Enquiry"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="pt-1">
              <span className="text-[13px] font-bold text-admin-text-primary uppercase tracking-wider block mb-2">
                Subject: {item.subject}
              </span>
              <div className="p-4 rounded-sm bg-admin-bg border border-admin-border">
                <p className="text-[13px] text-admin-text-secondary whitespace-pre-wrap leading-relaxed">
                  {item.message}
                </p>
              </div>
            </div>
          </div>
        ))}
        
        {filtered.length === 0 && (
          <div className="bg-admin-surface p-12 rounded-sm border border-admin-border text-center flex flex-col items-center justify-center space-y-3">
            <Mail className="w-8 h-8 text-admin-text-muted" />
            <p className="text-admin-text-secondary text-[14px] font-medium">No enquiry submissions found matching the criteria.</p>
          </div>
        )}
      </div>
      
      {/* Delete Confirmation Modal */}
      {deleteConfirmId && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-admin-surface border border-admin-border p-6 rounded-sm max-w-sm w-full space-y-5 shadow-xl">
            <div className="text-center space-y-3">
              <AlertTriangle className="w-10 h-10 text-rose-500 mx-auto" />
              <h3 className="text-[18px] font-bold text-admin-text-primary">
                Confirm Deletion
              </h3>
              <p className="text-admin-text-secondary text-[13px] leading-relaxed">
                Are you sure you want to permanently delete this enquiry record? This action cannot be undone.
              </p>
            </div>
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setDeleteConfirmId(null)}
                className="btn-secondary flex-1"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteConfirmId)}
                className="btn-danger flex-1"
              >
                Delete Record
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


