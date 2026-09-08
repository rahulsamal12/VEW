"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { loginAdmin } from "@/lib/adminApi";
import { Lock, User, AlertCircle, ShieldCheck } from "lucide-react";
export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const res = await loginAdmin({ username, password });
    setLoading(false);
    if (res.success) {
      router.push("/");
    } else {
      setError(res.message || "Invalid administrator credentials");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[var(--admin-bg)] transition-colors duration-200">
      {" "}
      <div className="w-full max-w-md bg-[var(--admin-surface)] border border-[var(--admin-border)] rounded-md p-8 space-y-6 shadow-sm">
        {" "}
        <div className="text-center space-y-2">
          {" "}
          <div className="w-12 h-12 rounded-sm bg-[var(--admin-accent)] border border-[var(--admin-brass)] flex items-center justify-center font-bold text-xl text-[#FFFFFF] mx-auto shadow-sm">
            {" "}
            V{" "}
          </div>{" "}
          <h1 className="text-2xl font-[650] text-[var(--admin-text-primary)] tracking-tight">
            Administrator Login
          </h1>{" "}
          <p className="text-xs text-[var(--admin-text-secondary)]">
            Venkateswar Engg Works Pvt. Ltd.
          </p>{" "}
        </div>{" "}
        {error && (
          <div className="p-3.5 rounded-sm bg-red-950/80 border border-red-800 text-red-300 text-xs flex items-center gap-2">
            {" "}
            <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" />{" "}
            <span>{error}</span>{" "}
          </div>
        )}{" "}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          {" "}
          <div>
            {" "}
            <label className="block text-[var(--admin-text-secondary)] mb-1 font-medium">
              Username
            </label>{" "}
            <div className="relative">
              {" "}
              <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--admin-text-secondary)]" />{" "}
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
                className="w-full pl-9 pr-3 py-2.5 rounded-sm bg-[var(--admin-bg)] border border-[var(--admin-border)] text-[var(--admin-text-primary)] placeholder-gray-500 focus:outline-none focus:border-[var(--admin-brass)] transition-colors"
              />{" "}
            </div>{" "}
          </div>{" "}
          <div>
            {" "}
            <label className="block text-[var(--admin-text-secondary)] mb-1 font-medium">
              Password
            </label>{" "}
            <div className="relative">
              {" "}
              <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--admin-text-secondary)]" />{" "}
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-9 pr-3 py-2.5 rounded-sm bg-[var(--admin-bg)] border border-[var(--admin-border)] text-[var(--admin-text-primary)] placeholder-gray-500 focus:outline-none focus:border-[var(--admin-brass)] transition-colors"
              />{" "}
            </div>{" "}
          </div>{" "}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-sm bg-[var(--admin-accent)] hover:opacity-90 text-[#FFFFFF] font-semibold tracking-wide text-sm shadow-sm transition-all disabled:opacity-50 mt-2"
          >
            {" "}
            {loading ? "Authenticating..." : "Sign In to Admin Dashboard"}{" "}
          </button>{" "}
        </form>{" "}
        <div className="pt-4 border-t border-[var(--admin-border)] text-center text-[11px] text-[var(--admin-text-secondary)]">
          {" "}
          GSTIN: 21ARXPK7658Q1ZO{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
