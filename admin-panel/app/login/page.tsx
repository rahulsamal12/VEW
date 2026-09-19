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
    <div className="min-h-screen flex items-center justify-center p-4 bg-admin-bg transition-colors duration-200">
      <div className="w-full max-w-[400px] bg-admin-surface border border-admin-border rounded-sm p-8 sm:p-10 shadow-sm space-y-8">
        <div className="text-center space-y-3">
          <div className="w-12 h-12 rounded-sm bg-admin-steel text-white flex items-center justify-center font-bold text-xl mx-auto shadow-sm">
            V
          </div>
          <div>
            <h1 className="text-[24px] font-[600] text-admin-text-primary tracking-tight">
              Administrator Login
            </h1>
            <p className="text-[13px] text-admin-text-secondary mt-1">
              Venkateswar Engg Works Pvt. Ltd.
            </p>
          </div>
        </div>
        
        {error && (
          <div className="p-4 rounded-sm bg-rose-600/10 border border-rose-600/30 text-rose-600 text-[13px] flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="form-label">
              Username
            </label>
            <div className="relative">
              <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-admin-text-muted" />
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
                className="form-input pl-9"
              />
            </div>
          </div>
          <div>
            <label className="form-label">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-admin-text-muted" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="form-input pl-9"
              />
            </div>
          </div>
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full h-[44px]"
            >
              {loading ? "Authenticating..." : "Sign In to Console"}
            </button>
          </div>
        </form>
        
        <div className="pt-6 border-t border-admin-border text-center text-[12px] font-medium text-admin-text-muted">
          GSTIN: 21ARXPK7658Q1ZO
        </div>
      </div>
    </div>
  );
}

