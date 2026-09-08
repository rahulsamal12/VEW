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
    await updateAdminData(`/admin/enquiries/${id}`, {}, "DELETE");
    setDeleteConfirmId(null);
    loadEnquiries();
  };
  const filtered = enquiries.filter(
    (e) => filter === "all" || e.status === filter,
  );
  return (
    <div className="space-y-6 text-xs">
      {" "}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-gray-800 pb-4">
        {" "}
        <div>
          {" "}
          <h1 className="text-2xl font-bold text-[var(--text-primary)]">
            Enquiry Submissions Manager
          </h1>{" "}
          <p className="text-[var(--text-muted)]">
            View and manage contact inquiries submitted from the public website.
          </p>{" "}
        </div>{" "}
        <div className="flex items-center gap-2">
          {" "}
          <Filter className="w-4 h-4 text-[var(--text-muted)]" />{" "}
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-3 py-1.5 rounded-sm bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-primary)] focus:outline-none focus:border-cyan-400"
          >
            {" "}
            <option value="all">All Enquiries ({enquiries.length})</option>{" "}
            <option value="new">
              New ({enquiries.filter((e) => e.status === "new").length})
            </option>{" "}
            <option value="reviewed">Reviewed</option>{" "}
            <option value="contacted">Contacted</option>{" "}
            <option value="archived">Archived</option>{" "}
          </select>{" "}
        </div>{" "}
      </div>{" "}
      <div className="space-y-4">
        {" "}
        {filtered.map((item) => (
          <div
            key={item._id}
            className="bg-[#111827] p-6 rounded-sm border border-gray-800 space-y-4"
          >
            {" "}
            <div className="flex flex-wrap justify-between items-start gap-2">
              {" "}
              <div>
                {" "}
                <span className="text-sm font-bold text-[var(--text-primary)]">
                  {item.name}
                </span>{" "}
                <span className="text-[var(--text-muted)] ml-2">
                  ({item.company})
                </span>{" "}
                <p className="text-[var(--text-muted)] text-[11px] mt-0.5">
                  {" "}
                  Email:{" "}
                  <a
                    href={`mailto:${item.email}`}
                    className="text-[var(--accent-brass)] hover:underline"
                  >
                    {item.email}
                  </a>{" "}
                  • Phone:{" "}
                  <a
                    href={`tel:${item.phone}`}
                    className="text-[var(--accent-brass)] hover:underline"
                  >
                    {item.phone}
                  </a>{" "}
                </p>{" "}
              </div>{" "}
              <div className="flex items-center gap-3">
                {" "}
                <span className="text-[var(--text-muted)] text-[11px]">
                  {new Date(item.submittedAt).toLocaleDateString()}
                </span>{" "}
                <select
                  value={item.status}
                  onChange={(e) => handleStatusChange(item._id, e.target.value)}
                  className="px-2.5 py-1 rounded bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--accent-brass)] font-semibold focus:outline-none"
                >
                  {" "}
                  <option value="new">Status: New</option>{" "}
                  <option value="reviewed">Status: Reviewed</option>{" "}
                  <option value="contacted">Status: Contacted</option>{" "}
                  <option value="archived">Status: Archived</option>{" "}
                </select>{" "}
                <button
                  onClick={() => setDeleteConfirmId(item._id)}
                  className="p-1.5 text-[var(--text-muted)] hover:text-rose-500 rounded hover:bg-gray-800"
                >
                  {" "}
                  <Trash2 className="w-4 h-4" />{" "}
                </button>{" "}
              </div>{" "}
            </div>{" "}
            <div className="p-3 rounded-sm bg-[var(--bg-surface)] border border-gray-800/80 space-y-1">
              {" "}
              <span className="font-semibold text-[var(--text-primary)] block">
                Subject: {item.subject}
              </span>{" "}
              <p className="text-[var(--text-secondary)] whitespace-pre-wrap leading-relaxed">
                {item.message}
              </p>{" "}
            </div>{" "}
          </div>
        ))}{" "}
        {filtered.length === 0 && (
          <div className="bg-[#111827] p-12 rounded-sm border border-gray-800 text-center text-[var(--text-muted)]">
            {" "}
            No enquiry submissions found.{" "}
          </div>
        )}{" "}
      </div>{" "}
      {/* Delete Confirmation Modal */}{" "}
      {deleteConfirmId && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          {" "}
          <div className="bg-[#111827] border border-gray-800 p-6 rounded-md max-w-sm w-full space-y-4 text-center">
            {" "}
            <AlertTriangle className="w-10 h-10 text-amber-400 mx-auto" />{" "}
            <h3 className="text-lg font-bold text-[var(--text-primary)]">
              Confirm Deletion
            </h3>{" "}
            <p className="text-[var(--text-muted)] text-xs">
              Are you sure you want to permanently delete this enquiry record?
            </p>{" "}
            <div className="flex gap-3 pt-2">
              {" "}
              <button
                onClick={() => setDeleteConfirmId(null)}
                className="flex-1 py-2 rounded-sm bg-gray-800 text-[var(--text-secondary)] font-semibold"
              >
                {" "}
                Cancel{" "}
              </button>{" "}
              <button
                onClick={() => handleDelete(deleteConfirmId)}
                className="flex-1 py-2 rounded-sm bg-red-600 text-[var(--text-primary)] font-semibold"
              >
                {" "}
                Delete{" "}
              </button>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      )}{" "}
    </div>
  );
}
