"use client";
import React, { useState, useEffect } from "react";
import { getCompanyInfo } from "@/lib/api";
import { sendEnquiry } from "@/lib/api";
import {
  Phone,
  Mail,
  ShieldCheck,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export default function ContactPage() {
  const [COMPANY_INFO, setCompanyInfo] = useState({
    name: "",
    companyName: "",
    gstin: "",
    contacts: [],
  });
  useEffect(() => {
    getCompanyInfo().then((data) => data && setCompanyInfo(data));
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<{
    loading: boolean;
    success: boolean | null;
    message: string;
  }>({ loading: false, success: null, message: "" });
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, message: "" });
    const res = await sendEnquiry(formData);
    if (res.success) {
      setStatus({
        loading: false,
        success: true,
        message: res.message || "Enquiry submitted successfully!",
      });
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } else {
      setStatus({
        loading: false,
        success: false,
        message: res.message || "Failed to submit enquiry. Please try again.",
      });
    }
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[110px] pb-16 md:pt-[140px] md:pb-20 space-y-12 transition-colors duration-200">
      {/* Header */}
      <div className="space-y-6 border-l-[3px] border-[var(--accent-brass)] pl-5">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--bg-secondary)] text-[var(--accent-brass)] text-[12px] font-bold uppercase tracking-wider border border-[var(--border-color)] rounded-[8px]">
          <ShieldCheck className="w-3.5 h-3.5 text-[var(--accent-steel)] dark:text-[var(--accent-brass)]" />
          Corporate Inquiry Portal
        </div>
        <h1 className="text-[34px] sm:text-[40px] md:text-[52px] font-bold text-[var(--text-primary)] leading-[1.1]">
          Contact Us & Project Inquiry
        </h1>
        <p className="text-[16px] md:text-[18px] text-[var(--text-secondary)] font-normal max-w-2xl leading-relaxed">
          Connect with Venkateswar Engg Works Pvt. Ltd. leadership and
          engineering management team for plant O&M, MRP, sinter, or turnkey
          partnerships.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-6">
        {/* Contact Info Side */}
        <div className="lg:col-span-5 space-y-8">
          <div className="industrial-card p-6 md:p-8 space-y-8">
            <h2 className="text-[34px] md:text-[42px] font-bold text-[var(--text-primary)] border-b border-[var(--border-color)] pb-4">
              Official Company Details
            </h2>
            <div className="space-y-5">
              <div className="p-5 bg-[var(--bg-secondary)] border border-[var(--border-color)] space-y-2 rounded-[8px]">
                <span className="text-[var(--text-muted)] block text-[12px] font-bold uppercase tracking-wider">
                  Company Name
                </span>
                <span className="text-[var(--text-primary)] font-bold text-[16px] block">
                  {COMPANY_INFO.companyName ||
                    COMPANY_INFO.name ||
                    "Venkateswar Engg Works Pvt. Ltd."}
                </span>
                <span className="text-[var(--accent-brass)] font-bold block text-[13px] uppercase tracking-wider">
                  GSTIN: {COMPANY_INFO.gstin}
                </span>
              </div>

              <div className="space-y-4">
                {COMPANY_INFO.contacts.map((c: any, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-[var(--bg-secondary)] border border-[var(--border-color)] space-y-4 rounded-[8px]"
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                      <span className="text-[var(--text-primary)] font-bold text-[16px]">
                        {c.name}
                      </span>
                      <span className="px-2.5 py-1 bg-[var(--bg-surface)] text-[var(--accent-brass)] font-bold text-[12px] uppercase tracking-wider border border-[var(--border-color)] rounded-[8px]">
                        {c.title}
                      </span>
                    </div>
                    <div className="space-y-2 pt-2 border-t border-[var(--border-subtle)]">
                      <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                        <Phone className="w-4 h-4 text-[var(--accent-steel)] dark:text-[var(--text-primary)]" />
                        <a
                          href={`tel:${c.phone}`}
                          className="hover:text-[var(--accent-brass)] font-medium text-[14px] transition-colors"
                        >
                          {c.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                        <Mail className="w-4 h-4 text-[var(--accent-steel)] dark:text-[var(--text-primary)]" />
                        <a
                          href={`mailto:${c.email}`}
                          className="hover:text-[var(--accent-brass)] font-medium text-[14px] transition-colors"
                        >
                          {c.email}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-5 bg-[var(--bg-secondary)] border border-[var(--border-color)] space-y-2 rounded-[8px]">
                <span className="text-[var(--text-muted)] block text-[12px] font-bold uppercase tracking-wider">
                  Regional Operations
                </span>
                <p className="text-[var(--text-secondary)] leading-relaxed font-medium text-[14px]">
                  Odisha, Chhattisgarh, Andhra Pradesh, West Bengal (India) &
                  International (Oman, Zambia).
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="industrial-card p-6 md:p-8 space-y-8">
            <h2 className="text-[34px] md:text-[42px] font-bold text-[var(--text-primary)] border-b border-[var(--border-color)] pb-4">
              Submit Project Inquiry
            </h2>

            {status.success === true && (
              <div className="p-4 bg-[var(--bg-secondary)] border-l-[3px] border-[var(--color-success)] text-[var(--text-primary)] text-[14px] flex items-center gap-3 rounded-[8px] font-medium shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-success)] shrink-0" />
                <span>{status.message}</span>
              </div>
            )}

            {status.success === false && (
              <div className="p-4 bg-[var(--bg-secondary)] border-l-[3px] border-[var(--color-error)] text-[var(--text-primary)] text-[14px] flex items-center gap-3 rounded-[8px] font-medium shadow-sm">
                <AlertCircle className="w-5 h-5 text-[var(--color-error)] shrink-0" />
                <span>{status.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-[var(--text-secondary)] font-bold uppercase text-[12px] tracking-wider">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rajesh Sharma"
                    className="w-full px-4 py-3 min-h-[48px] bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] text-[15px] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-brass)] transition-colors rounded-[8px]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[var(--text-secondary)] font-bold uppercase text-[12px] tracking-wider">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Steel Industries Ltd"
                    className="w-full px-4 py-3 min-h-[48px] bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] text-[15px] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-brass)] transition-colors rounded-[8px]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-[var(--text-secondary)] font-bold uppercase text-[12px] tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 min-h-[48px] bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] text-[15px] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-brass)] transition-colors rounded-[8px]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[var(--text-secondary)] font-bold uppercase text-[12px] tracking-wider">
                    Phone Number *
                  </label>
                  <input
                    type="text"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 9876543210"
                    className="w-full px-4 py-3 min-h-[48px] bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] text-[15px] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-brass)] transition-colors rounded-[8px]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-[var(--text-secondary)] font-bold uppercase text-[12px] tracking-wider">
                  Inquiry Subject *
                </label>
                <select
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 min-h-[48px] bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] text-[15px] focus:outline-none focus:border-[var(--accent-brass)] transition-colors rounded-[8px] cursor-pointer"
                >
                  <option value="">-- Select Subject --</option>
                  <option value="Furnace O&M Contract Inquiry">
                    Furnace O&M Contract Inquiry
                  </option>
                  <option value="Metal Recovery Plant (MRP) Project">
                    Metal Recovery Plant (MRP) Project
                  </option>
                  <option value="Sinter Plant Turnkey EPC">
                    Sinter Plant Turnkey EPC
                  </option>
                  <option value="BOOT / BOO Partnership Model">
                    BOOT / BOO Partnership Model
                  </option>
                  <option value="Fabrication & Erection Job">
                    Fabrication & Erection Job
                  </option>
                  <option value="General Corporate Enquiry">
                    General Corporate Enquiry
                  </option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-[var(--text-secondary)] font-bold uppercase text-[12px] tracking-wider">
                  Detailed Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please specify plant capacity, location, and scope requirements..."
                  className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] text-[15px] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-brass)] transition-colors rounded-[8px] resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={status.loading}
                className="industrial-button-primary uppercase tracking-wider text-[13px] w-full flex items-center justify-center gap-2 h-14 mt-4"
              >
                {status.loading ? "Submitting..." : "Submit Inquiry"}
                <Send className="w-4 h-4 ml-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
